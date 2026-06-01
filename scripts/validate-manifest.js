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

  // Build an agent name -> prompt-path lookup from the top-level agents map.
  // Agents are referenced by name in skills; their prompt files live at the
  // `prompt` path declared here, relative to SKILLS_DIR.
  const agentMap = manifest.agents && typeof manifest.agents === 'object' ? manifest.agents : {};

  // Validate skills array
  if (!manifest.skills || !Array.isArray(manifest.skills)) {
    errors.push('Missing "skills" array in manifest');
  } else {
    // Track triggers to detect duplicates across skills.
    const triggerOwners = new Map(); // trigger -> [skill names]

    // Validate each skill
    manifest.skills.forEach((skill, index) => {
      const prefix = `Skill ${index + 1}`;
      const isStandalone = skill.standalone === true;

      // Required fields
      if (!skill.name) errors.push(`${prefix}: missing 'name'`);
      if (!skill.trigger) errors.push(`${prefix}: missing 'trigger'`);
      if (!skill.description) errors.push(`${prefix}: missing 'description'`);

      // Workflow is required ONLY for non-standalone skills. A standalone skill
      // may legitimately have no workflow. If a workflow IS declared (standalone
      // or not), the referenced file must exist.
      if (!skill.workflow && !isStandalone) {
        errors.push(`${prefix} (${skill.name || 'unnamed'}): missing 'workflow' (and not marked standalone)`);
      }
      if (skill.workflow) {
        const workflowPath = path.join(SKILLS_DIR, skill.workflow);
        if (!fs.existsSync(workflowPath)) {
          errors.push(`${prefix} (${skill.name}): workflow not found: ${skill.workflow}`);
        }
      }

      // Validate template references exist (ERROR if missing). The manifest uses
      // `templates` (an array); also tolerate a singular `template` string.
      const templateRefs = [];
      if (typeof skill.template === 'string') templateRefs.push(skill.template);
      if (Array.isArray(skill.templates)) templateRefs.push(...skill.templates);
      templateRefs.forEach((tpl) => {
        const tplPath = path.join(SKILLS_DIR, tpl);
        if (!fs.existsSync(tplPath)) {
          errors.push(`${prefix} (${skill.name}): template not found: ${tpl}`);
        }
      });

      // Validate agent prompt files exist (WARNING if missing). Agents are
      // referenced by name; resolve each through the top-level agents map to its
      // declared prompt path. If the skill is standalone with no workflow and the
      // agent isn't in the map, fall back to the skill's own dir; if that doesn't
      // exist either, emit a warning rather than silently passing.
      if (skill.agents && Array.isArray(skill.agents)) {
        skill.agents.forEach((agent) => {
          const def = agentMap[agent];
          if (def && def.prompt) {
            const agentPath = path.join(SKILLS_DIR, def.prompt);
            if (!fs.existsSync(agentPath)) {
              warnings.push(`${prefix} (${skill.name}): agent prompt file not found: ${def.prompt} (agent '${agent}')`);
            }
          } else {
            // Agent not declared in the agents map. Try a skill-local fallback.
            const skillDir = skill.workflow ? path.dirname(skill.workflow) : skill.name;
            const fallbackPath = path.join(SKILLS_DIR, skillDir, `${agent}.md`);
            if (!fs.existsSync(fallbackPath)) {
              warnings.push(`${prefix} (${skill.name}): agent '${agent}' not defined in agents map and no file at ${path.join(skillDir, `${agent}.md`)}`);
            }
          }
        });
      }

      // Validate the requires_ethics_approval field's TYPE when present.
      // (Previously this slot emitted a false-positive warning on every skill
      // for a 'requires: ethics-guardrails' field the manifest never uses.)
      if (
        Object.prototype.hasOwnProperty.call(skill, 'requires_ethics_approval') &&
        typeof skill.requires_ethics_approval !== 'boolean'
      ) {
        warnings.push(
          `${prefix} (${skill.name}): 'requires_ethics_approval' must be a boolean, got ${typeof skill.requires_ethics_approval}`,
        );
      }

      // Validate trigger format and collect for duplicate detection.
      if (skill.trigger) {
        if (!skill.trigger.startsWith('/')) {
          errors.push(`${prefix} (${skill.name}): trigger should start with '/'`);
        }
        const owners = triggerOwners.get(skill.trigger) || [];
        owners.push(skill.name || prefix);
        triggerOwners.set(skill.trigger, owners);
      }
    });

    // Duplicate-trigger detection: any trigger claimed by more than one skill.
    for (const [trigger, owners] of triggerOwners) {
      if (owners.length > 1) {
        errors.push(`Duplicate trigger '${trigger}' used by: ${owners.join(', ')}`);
      }
    }
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
