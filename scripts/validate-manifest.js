#!/usr/bin/env node

/**
 * Healing Swarm Skills - Manifest Validator
 *
 * Validates manifest.yaml for completeness and correctness.
 *
 * Usage:
 *   npm run validate:manifest
 *   node scripts/validate-manifest.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SKILLS_DIR = path.join(__dirname, '..', '.claude', 'skills', 'healing-swarm');
const MANIFEST_PATH = path.join(SKILLS_DIR, 'manifest.yaml');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

function main() {
  log('\nValidating manifest.yaml...', 'yellow');

  // Check file exists
  if (!fs.existsSync(MANIFEST_PATH)) {
    log(`\n✗ Manifest not found at: ${MANIFEST_PATH}`, 'red');
    log('  Create manifest.yaml to define your skills.', 'yellow');
    process.exit(1);
  }

  // Parse YAML
  const content = fs.readFileSync(MANIFEST_PATH, 'utf8');
  let manifest;
  try {
    manifest = YAML.parse(content);
  } catch (err) {
    log(`\n✗ YAML syntax error in manifest.yaml:`, 'red');
    log(`  ${err.message}`, 'red');
    process.exit(1);
  }

  const errors = [];
  const warnings = [];

  // Validate skills array
  if (!manifest.skills || !Array.isArray(manifest.skills)) {
    errors.push('Missing "skills" array in manifest');
  } else {
    // Validate each skill
    manifest.skills.forEach((skill, index) => {
      const prefix = `Skill ${index + 1}`;

      // Required fields
      if (!skill.name) errors.push(`${prefix}: missing 'name'`);
      if (!skill.trigger) errors.push(`${prefix}: missing 'trigger'`);
      if (!skill.description) errors.push(`${prefix}: missing 'description'`);
      if (!skill.workflow) errors.push(`${prefix}: missing 'workflow'`);

      // Validate workflow file exists
      if (skill.workflow) {
        const workflowPath = path.join(SKILLS_DIR, skill.workflow);
        if (!fs.existsSync(workflowPath)) {
          errors.push(`${prefix} (${skill.name}): workflow not found: ${skill.workflow}`);
        }
      }

      // Validate agent files exist
      if (skill.agents && Array.isArray(skill.agents)) {
        const skillDir = skill.workflow ? path.dirname(skill.workflow) : skill.name;
        skill.agents.forEach((agent) => {
          const agentPath = path.join(SKILLS_DIR, skillDir, `${agent}.md`);
          if (!fs.existsSync(agentPath)) {
            warnings.push(`${prefix} (${skill.name}): agent file not found: ${agentPath}`);
          }
        });
      }

      // Check for required resources
      if (!skill.requires || !skill.requires.includes('ethics-guardrails')) {
        warnings.push(`${prefix} (${skill.name}): should require 'ethics-guardrails'`);
      }

      // Validate trigger format
      if (skill.trigger && !skill.trigger.startsWith('/')) {
        errors.push(`${prefix} (${skill.name}): trigger should start with '/'`);
      }
    });
  }

  // Report results
  console.log('');

  if (errors.length > 0) {
    log('Errors:', 'red');
    errors.forEach((e) => log(`  ✗ ${e}`, 'red'));
  }

  if (warnings.length > 0) {
    log('\nWarnings:', 'yellow');
    warnings.forEach((w) => log(`  ⚠ ${w}`, 'yellow'));
  }

  if (errors.length === 0) {
    const skillCount = manifest.skills?.length || 0;
    log(`\n✓ Manifest valid: ${skillCount} skill(s) defined`, 'green');

    if (warnings.length > 0) {
      log(`  ${warnings.length} warning(s) - consider fixing`, 'yellow');
    }

    process.exit(0);
  } else {
    log(`\n✗ Manifest invalid: ${errors.length} error(s)`, 'red');
    process.exit(1);
  }
}

main();
