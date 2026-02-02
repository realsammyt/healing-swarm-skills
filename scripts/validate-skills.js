#!/usr/bin/env node

/**
 * Healing Swarm Skills - Skill Validator
 *
 * Validates all skill files for structure, syntax, and required elements.
 *
 * Usage:
 *   npm run validate
 *   node scripts/validate-skills.js
 *   node scripts/validate-skills.js --verbose
 *   node scripts/validate-skills.js --file research/workflow.yaml
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const SKILLS_DIR = path.join(__dirname, '..', '.claude', 'skills', 'healing-swarm');

// CLI args
const args = process.argv.slice(2);
const VERBOSE = args.includes('--verbose') || args.includes('-v');
const FILE_FILTER = args.find((a) => a.startsWith('--file='))?.slice(7);

// Colors
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
};

// Stats
const stats = {
  workflows: { total: 0, valid: 0, errors: [] },
  agents: { total: 0, valid: 0, errors: [] },
  ethics: { referenced: 0, missing: [] },
  overall: { passed: true },
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

function verbose(msg) {
  if (VERBOSE) console.log(`${colors.dim}  ${msg}${colors.reset}`);
}

// ═══════════════════════════════════════════════════════════════════════════════
// YAML Validation
// ═══════════════════════════════════════════════════════════════════════════════

function validateYAML(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    const parsed = YAML.parse(content);
    return { valid: true, data: parsed };
  } catch (err) {
    return { valid: false, error: err.message };
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// Workflow Validation
// ═══════════════════════════════════════════════════════════════════════════════

function validateWorkflow(filePath) {
  const result = validateYAML(filePath);
  if (!result.valid) {
    return { valid: false, errors: [`YAML syntax error: ${result.error}`] };
  }

  const workflow = result.data;
  const errors = [];

  // Required top-level fields
  const requiredFields = ['name', 'version', 'description', 'stages'];
  for (const field of requiredFields) {
    if (!workflow[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Validate stages
  if (Array.isArray(workflow.stages)) {
    workflow.stages.forEach((stage, i) => {
      if (!stage.name) errors.push(`Stage ${i + 1}: missing 'name'`);
      if (!stage.description) errors.push(`Stage ${i + 1}: missing 'description'`);
      if (!stage.agent && !stage.invokes) {
        errors.push(`Stage ${i + 1} (${stage.name || 'unnamed'}): missing 'agent' or 'invokes'`);
      }
    });
  }

  // Check for quality_gates
  if (!workflow.quality_gates) {
    errors.push(`Missing recommended field: quality_gates`);
  }

  // Check for error_handling
  if (!workflow.error_handling) {
    errors.push(`Missing recommended field: error_handling`);
  }

  return { valid: errors.length === 0, errors };
}

// ═══════════════════════════════════════════════════════════════════════════════
// Agent Prompt Validation
// ═══════════════════════════════════════════════════════════════════════════════

function validateAgentPrompt(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const errors = [];

  // Required sections
  const requiredSections = [
    { pattern: /^## Identity/m, name: 'Identity' },
    { pattern: /^## (Core Responsibilities|Responsibilities)/m, name: 'Responsibilities' },
    { pattern: /^## (Methodology|Process|Approach)/m, name: 'Methodology' },
    { pattern: /^## (Output Formats|Outputs)/m, name: 'Output Formats' },
    { pattern: /^## Loaded Context/m, name: 'Loaded Context' },
  ];

  for (const section of requiredSections) {
    if (!section.pattern.test(content)) {
      errors.push(`Missing required section: ${section.name}`);
    }
  }

  // Check for ethics guardrails reference in Loaded Context
  const hasEthicsRef = /ethics-guardrails\.md/i.test(content);
  if (!hasEthicsRef) {
    errors.push(`Missing ethics guardrails reference in Loaded Context`);
  }

  // Check for title (# Agent Name)
  if (!/^# .+ Agent/m.test(content)) {
    errors.push(`Missing agent title (expected "# [Name] Agent")`);
  }

  return { valid: errors.length === 0, errors, hasEthicsRef };
}

// ═══════════════════════════════════════════════════════════════════════════════
// File Discovery
// ═══════════════════════════════════════════════════════════════════════════════

function findFiles(dir, extension, results = []) {
  if (!fs.existsSync(dir)) return results;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip _templates and hidden directories
      if (!file.startsWith('_') && !file.startsWith('.')) {
        findFiles(filePath, extension, results);
      }
    } else if (file.endsWith(extension)) {
      results.push(filePath);
    }
  }
  return results;
}

// ═══════════════════════════════════════════════════════════════════════════════
// Main Validation
// ═══════════════════════════════════════════════════════════════════════════════

function main() {
  console.log('');
  log('╔══════════════════════════════════════════════════════════════╗', 'cyan');
  log('║          Healing Swarm Skills - Validation                    ║', 'cyan');
  log('╚══════════════════════════════════════════════════════════════╝', 'cyan');
  console.log('');

  if (!fs.existsSync(SKILLS_DIR)) {
    log(`Skills directory not found: ${SKILLS_DIR}`, 'red');
    process.exit(1);
  }

  // Find all files
  let workflowFiles = findFiles(SKILLS_DIR, '.yaml');
  let agentFiles = findFiles(SKILLS_DIR, '.md');

  // Filter shared resources from agent files
  agentFiles = agentFiles.filter((f) => !f.includes(path.sep + 'shared' + path.sep));
  agentFiles = agentFiles.filter((f) => !f.includes(path.sep + 'templates' + path.sep));

  // Apply file filter if specified
  if (FILE_FILTER) {
    const filterPath = path.join(SKILLS_DIR, FILE_FILTER);
    workflowFiles = workflowFiles.filter((f) => f.includes(FILE_FILTER));
    agentFiles = agentFiles.filter((f) => f.includes(FILE_FILTER));
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Validate Workflows
  // ─────────────────────────────────────────────────────────────────────────────

  log('Validating workflows...', 'yellow');

  for (const file of workflowFiles) {
    const relativePath = path.relative(SKILLS_DIR, file);
    stats.workflows.total++;

    const result = validateWorkflow(file);

    if (result.valid) {
      stats.workflows.valid++;
      verbose(`✓ ${relativePath}`);
    } else {
      stats.overall.passed = false;
      log(`  ✗ ${relativePath}`, 'red');
      for (const err of result.errors) {
        log(`    - ${err}`, 'red');
        stats.workflows.errors.push({ file: relativePath, error: err });
      }
    }
  }

  log(`  Workflows: ${stats.workflows.valid}/${stats.workflows.total} valid`, 'cyan');

  // ─────────────────────────────────────────────────────────────────────────────
  // Validate Agent Prompts
  // ─────────────────────────────────────────────────────────────────────────────

  console.log('');
  log('Validating agent prompts...', 'yellow');

  for (const file of agentFiles) {
    const relativePath = path.relative(SKILLS_DIR, file);
    stats.agents.total++;

    const result = validateAgentPrompt(file);

    if (result.valid) {
      stats.agents.valid++;
      verbose(`✓ ${relativePath}`);
    } else {
      stats.overall.passed = false;
      log(`  ✗ ${relativePath}`, 'red');
      for (const err of result.errors) {
        log(`    - ${err}`, 'red');
        stats.agents.errors.push({ file: relativePath, error: err });
      }
    }

    // Track ethics references
    if (result.hasEthicsRef) {
      stats.ethics.referenced++;
    } else {
      stats.ethics.missing.push(relativePath);
    }
  }

  log(`  Agents: ${stats.agents.valid}/${stats.agents.total} valid`, 'cyan');

  // ─────────────────────────────────────────────────────────────────────────────
  // Ethics Reference Check
  // ─────────────────────────────────────────────────────────────────────────────

  console.log('');
  log('Checking ethics guardrails references...', 'yellow');

  if (stats.ethics.missing.length === 0) {
    log(`  All ${stats.ethics.referenced} agents reference ethics guardrails`, 'cyan');
  } else {
    stats.overall.passed = false;
    log(`  ${stats.ethics.missing.length} agents missing ethics reference:`, 'red');
    for (const file of stats.ethics.missing) {
      log(`    - ${file}`, 'red');
    }
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Summary
  // ─────────────────────────────────────────────────────────────────────────────

  console.log('');
  log('═══════════════════════════════════════════════════════════════', 'cyan');

  if (stats.overall.passed) {
    log('  ✓ All validations passed!', 'green');
    log(`    ${stats.workflows.valid} workflows, ${stats.agents.valid} agents validated`, 'green');
  } else {
    log('  ✗ Validation failed', 'red');
    const totalErrors =
      stats.workflows.errors.length +
      stats.agents.errors.length +
      stats.ethics.missing.length;
    log(`    ${totalErrors} issue(s) found`, 'red');
  }

  log('═══════════════════════════════════════════════════════════════', 'cyan');
  console.log('');

  process.exit(stats.overall.passed ? 0 : 1);
}

main();
