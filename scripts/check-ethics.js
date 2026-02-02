#!/usr/bin/env node

/**
 * Healing Swarm Skills - Ethics Reference Checker
 *
 * Verifies that all agent prompts reference the ethics guardrails.
 *
 * Usage:
 *   npm run check:ethics
 *   node scripts/check-ethics.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SKILLS_DIR = path.join(__dirname, '..', '.claude', 'skills', 'healing-swarm');

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

function findAgentFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip shared, templates, and hidden directories
      if (
        file !== 'shared' &&
        file !== 'templates' &&
        !file.startsWith('_') &&
        !file.startsWith('.')
      ) {
        findAgentFiles(filePath, results);
      }
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  }
  return results;
}

function checkEthicsReference(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check for ethics guardrails reference
  const hasEthicsRef = /ethics-guardrails\.md/i.test(content);

  // Check for Loaded Context section
  const hasLoadedContext = /^## Loaded Context/m.test(content);

  return {
    hasEthicsRef,
    hasLoadedContext,
  };
}

function main() {
  log('\n╔══════════════════════════════════════════════════════════════╗', 'cyan');
  log('║          Ethics Guardrails Reference Check                    ║', 'cyan');
  log('╚══════════════════════════════════════════════════════════════╝', 'cyan');
  console.log('');

  const agentFiles = findAgentFiles(SKILLS_DIR);
  const missing = [];
  const noLoadedContext = [];
  let referenced = 0;

  for (const file of agentFiles) {
    const relativePath = path.relative(SKILLS_DIR, file);
    const result = checkEthicsReference(file);

    if (result.hasEthicsRef) {
      referenced++;
    } else {
      missing.push(relativePath);
    }

    if (!result.hasLoadedContext) {
      noLoadedContext.push(relativePath);
    }
  }

  // Report
  log(`Checked ${agentFiles.length} agent files\n`, 'cyan');

  if (missing.length === 0) {
    log('✓ All agents reference ethics guardrails!', 'green');
    log(`  ${referenced}/${agentFiles.length} agents compliant`, 'green');
  } else {
    log('✗ Missing ethics guardrails reference:', 'red');
    for (const file of missing) {
      log(`  - ${file}`, 'red');
    }

    console.log('');
    log('To fix, add to the "Loaded Context" section:', 'yellow');
    log('  `shared/ethics-guardrails.md` - Absolute safety constraints', 'yellow');
  }

  if (noLoadedContext.length > 0) {
    console.log('');
    log('⚠ Missing "Loaded Context" section:', 'yellow');
    for (const file of noLoadedContext) {
      log(`  - ${file}`, 'yellow');
    }
  }

  console.log('');

  // Exit with error if any missing
  process.exit(missing.length > 0 ? 1 : 0);
}

main();
