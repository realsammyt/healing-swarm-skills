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
// Accept both `--file=X` and `--file X` forms.
const eq = args.find((a) => a.startsWith('--file='))?.slice(7);
const sp = args[args.indexOf('--file') + 1];
const FILE_FILTER = eq ?? (args.includes('--file') ? sp : undefined);

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

  const requiredFields = ['name', 'version', 'description'];
  for (const field of requiredFields) {
    if (!workflow[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // stages is recommended but not required (orchestrator may use different structure)
  if (!workflow.stages && !workflow.skills && !workflow.phases) {
    errors.push(`Missing workflow definition (stages, skills, or phases)`);
  }

  // Validate stages (if present)
  if (Array.isArray(workflow.stages)) {
    workflow.stages.forEach((stage, i) => {
      if (!stage.name) errors.push(`Stage ${i + 1}: missing 'name'`);
      // Agent can be omitted if stage has type (parallel, gate, etc.) or invokes
      if (!stage.agent && !stage.invokes && !stage.type && !stage.agents) {
        verbose(`Stage ${i + 1} (${stage.name || 'unnamed'}): no agent/invokes (may use type or parallel)`);
      }
    });
  }

  // quality_gates and error_handling are recommended, not required
  // Just log verbose warnings
  if (!workflow.quality_gates) {
    verbose(`Recommended: quality_gates section`);
  }
  if (!workflow.error_handling) {
    verbose(`Recommended: error_handling section`);
  }

  return { valid: errors.length === 0, errors };
}

// ═══════════════════════════════════════════════════════════════════════════════
// Agent Prompt Validation
// ═══════════════════════════════════════════════════════════════════════════════

function validateAgentPrompt(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const errors = [];
  const warnings = [];

  // Required sections (with flexible naming)
  const requiredSections = [
    { pattern: /^## (Identity|Role|Who I Am)/m, name: 'Identity' },
    { pattern: /^## (Core Responsibilities|Responsibilities|What I Do|Tasks)/m, name: 'Responsibilities' },
  ];

  // Recommended sections (warnings only)
  const recommendedSections = [
    { pattern: /^## (Methodology|Process|Approach|How I Work|Workflow)/m, name: 'Methodology' },
    { pattern: /^## (Output Formats|Outputs|Deliverables|What I Produce)/m, name: 'Output Formats' },
    { pattern: /^## (Loaded Context|Context|Resources)/m, name: 'Loaded Context' },
  ];

  for (const section of requiredSections) {
    if (!section.pattern.test(content)) {
      errors.push(`Missing required section: ${section.name}`);
    }
  }

  for (const section of recommendedSections) {
    if (!section.pattern.test(content)) {
      verbose(`Recommended section: ${section.name}`);
    }
  }

  // Check for ethics guardrails reference
  const hasEthicsRef = /ethics-guardrails\.md/i.test(content);
  if (!hasEthicsRef) {
    // Warning, not error
    verbose(`Consider adding ethics guardrails reference`);
  }

  // Anti-rot: user-facing facilitator prompts for sensitive skills (and the
  // ethics guardian) MUST reference the shared crisis-response protocol.
  const CRISIS_REQUIRED = new Set([
    'content/grief-guide.md',
    'content/shadow-facilitator.md',
    'content/resonance-facilitator.md',
    'content/umwelt-facilitator.md',
    'content/language-awareness-guide.md',
    'content/orbital-architect.md',
    'quality/ethics-guardian.md',
  ]);
  const relPath = path.relative(SKILLS_DIR, filePath).split(path.sep).join('/');
  if (CRISIS_REQUIRED.has(relPath) && !/crisis-response\.md/i.test(content)) {
    errors.push(`Missing required crisis-response.md reference (sensitive-skill agent)`);
  }

  // Anti-rot: the four gate-emitting reviewers MUST keep the fenced JSON gate
  // block that scripts/check-gates.js enforces (gate name + status + blocking).
  const GATE_REQUIRED = {
    'quality/ethics-guardian.md': 'ethics',
    'quality/clinical-reviewer.md': 'clinical',
    'quality/cultural-reviewer.md': 'cultural',
    'quality/accessibility-auditor.md': 'accessibility',
  };
  const gateName = GATE_REQUIRED[relPath];
  if (gateName) {
    const hasGateToken = new RegExp(`"gate":\\s*"${gateName}"`).test(content);
    const hasContract = /"status"/.test(content) && /"blocking"/.test(content);
    if (!hasGateToken || !hasContract) {
      errors.push(
        `Missing required JSON gate block token ("gate": "${gateName}" with "status" and "blocking") — check-gates.js contract`
      );
    }
  }

  // Check for title (# Agent Name or similar)
  if (!/^# .+/m.test(content)) {
    errors.push(`Missing document title`);
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
  // skill-discovery.yaml is structural (SKILL.md source), not a workflow.
  workflowFiles = workflowFiles.filter((f) => path.basename(f) !== 'skill-discovery.yaml');
  // manifest.yaml files are structural (root manifest is validated by
  // validate-manifest.js; example manifests are docs), not workflows.
  workflowFiles = workflowFiles.filter((f) => path.basename(f) !== 'manifest.yaml');
  // Worked examples are content outputs, not workflows.
  workflowFiles = workflowFiles.filter((f) => !f.split(path.sep).includes('examples'));
  let agentFiles = findFiles(SKILLS_DIR, '.md');

  // Filter non-agent files
  agentFiles = agentFiles.filter((f) => !f.includes(path.sep + 'shared' + path.sep));
  agentFiles = agentFiles.filter((f) => !f.includes(path.sep + 'templates' + path.sep));
  agentFiles = agentFiles.filter((f) => !f.includes(path.sep + 'components' + path.sep));  // Component specs, not agents
  agentFiles = agentFiles.filter((f) => !f.includes(path.sep + 'examples' + path.sep));  // Worked examples (content outputs), not agents
  agentFiles = agentFiles.filter((f) => path.basename(f) !== 'SKILL.md');  // Generated skill descriptors, not agents

  // Apply file filter if specified
  if (FILE_FILTER) {
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
  // Ethics Reference Check (advisory, not blocking)
  // ─────────────────────────────────────────────────────────────────────────────

  console.log('');
  log('Checking ethics guardrails references...', 'yellow');

  if (stats.ethics.missing.length === 0) {
    log(`  All ${stats.ethics.referenced} agents reference ethics guardrails`, 'cyan');
  } else {
    // Advisory warning only - don't fail CI for this
    log(`  ${stats.ethics.referenced}/${stats.agents.total} agents reference ethics guardrails`, 'cyan');
    log(`  Advisory: ${stats.ethics.missing.length} agents could add ethics reference:`, 'yellow');
    for (const file of stats.ethics.missing) {
      log(`    - ${file}`, 'yellow');
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
      stats.agents.errors.length;
    log(`    ${totalErrors} error(s) found`, 'red');
  }

  log('═══════════════════════════════════════════════════════════════', 'cyan');
  console.log('');

  process.exit(stats.overall.passed ? 0 : 1);
}

main();
