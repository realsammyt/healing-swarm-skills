#!/usr/bin/env node

/**
 * Healing Swarm Skills - Agent Prompt Linter
 *
 * Checks agent prompts have all required sections and follow conventions.
 *
 * Usage:
 *   npm run lint:prompts
 *   node scripts/lint-prompts.js
 *   node scripts/lint-prompts.js --fix (future: auto-fix issues)
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
  dim: '\x1b[2m',
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

// Required sections with their patterns (flexible naming allowed)
const REQUIRED_SECTIONS = [
  {
    name: 'Title',
    pattern: /^# .+/m,  // Any h1 title is OK
    message: 'Agent should have a title (# heading)',
    severity: 'warning',
  },
  {
    name: 'Identity',
    pattern: /^## (Identity|Role|Who I Am)/m,
    message: 'Missing "## Identity" section',
    severity: 'warning',
  },
  {
    name: 'Core Responsibilities',
    pattern: /^## (Core Responsibilities|Responsibilities|What I Do|Tasks)/m,
    message: 'Missing responsibilities section',
    severity: 'warning',
  },
  {
    name: 'Methodology',
    pattern: /^## (Methodology|Process|Approach|How I Work|Workflow)/m,
    message: 'Consider adding "## Methodology" section',
    severity: 'suggestion',
  },
  {
    name: 'Output Formats',
    pattern: /^## (Output Formats|Outputs|Deliverables|What I Produce)/m,
    message: 'Consider adding "## Output Formats" section',
    severity: 'suggestion',
  },
  {
    name: 'Loaded Context',
    pattern: /^## (Loaded Context|Context|Resources)/m,
    message: 'Consider adding "## Loaded Context" section',
    severity: 'suggestion',
  },
  {
    name: 'Integration',
    pattern: /^## Integration/m,
    message: 'Consider adding "## Integration with Other Agents" section',
    severity: 'suggestion',
  },
  {
    name: 'Example Session',
    pattern: /^## Example (Session|Usage)/m,
    message: 'Consider adding "## Example Session" section',
    severity: 'suggestion',
  },
  {
    name: 'Guiding Principles',
    pattern: /^## Guiding Principles/m,
    message: 'Consider adding "## Guiding Principles" section',
    severity: 'suggestion',
  },
];

// Reference checks (all advisory)
const REQUIRED_REFERENCES = [
  {
    name: 'Ethics Guardrails',
    pattern: /ethics-guardrails\.md/i,
    message: 'Consider referencing ethics-guardrails.md',
    severity: 'suggestion',
  },
  {
    name: 'Terminology',
    pattern: /terminology\.md/i,
    message: 'Consider referencing terminology.md',
    severity: 'suggestion',
  },
  {
    name: 'Voice Guide',
    pattern: /voice-guide\.md/i,
    message: 'Consider referencing voice-guide.md',
    severity: 'suggestion',
  },
];

function findAgentFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (
        file !== 'shared' &&
        file !== 'templates' &&
        file !== 'components' &&  // Component specs are not agents
        file !== 'examples' &&  // Worked examples (content outputs), not agents
        !file.startsWith('_') &&
        !file.startsWith('.')
      ) {
        findAgentFiles(filePath, results);
      }
    } else if (file.endsWith('.md') && file !== 'SKILL.md') {
      // SKILL.md files are generated skill descriptors, not agent prompts.
      results.push(filePath);
    }
  }
  return results;
}

function lintAgentPrompt(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = {
    errors: [],
    warnings: [],
    suggestions: [],
  };

  // Check required sections
  for (const section of REQUIRED_SECTIONS) {
    if (!section.pattern.test(content)) {
      if (section.severity === 'error') {
        issues.errors.push(section.message);
      } else if (section.severity === 'warning') {
        issues.warnings.push(section.message);
      } else {
        issues.suggestions.push(section.message);
      }
    }
  }

  // Check references in Loaded Context
  for (const ref of REQUIRED_REFERENCES) {
    if (!ref.pattern.test(content)) {
      if (ref.severity === 'error') {
        issues.errors.push(ref.message);
      } else if (ref.severity === 'warning') {
        issues.warnings.push(ref.message);
      }
    }
  }

  // Check for common issues. Scan real prose (no literal-quote requirement) for
  // outcome-promising language. Done line-by-line so we can skip demonstrative
  // examples: a claim phrase quoted inside a "DON'T use" list or an anti-pattern
  // block (✗ / ❌ / "overclaiming" / a review session catching a violation) is
  // the prompt teaching what NOT to say, not the agent making the claim. Flagging
  // those would train maintainers to ignore the gate. Affirmative, unquoted prose
  // like "the breathing will heal your nervous system" still gets caught.
  const claimRe = /\b(will|can|guaranteed to)\s+(cure|heal|fix|treat)\b/i;
  const negContextRe = /["'“”‘’]|✗|❌|🚫|don'?t|do not|\bavoid\b|overclaim|\bviolation\b|instead of|\breplace\b/i;
  for (const line of content.split(/\r?\n/)) {
    if (claimRe.test(line) && !negContextRe.test(line)) {
      issues.errors.push(`Avoid promising outcomes (e.g. "will/can cure/heal/fix/treat") - use "may help" — found: ${line.trim()}`);
      break;
    }
  }

  if (/\bscience proves\b/i.test(content)) {
    issues.warnings.push('Use "research suggests" instead of "science proves"');
  }

  return issues;
}

function main() {
  log('\n╔══════════════════════════════════════════════════════════════╗', 'cyan');
  log('║            Agent Prompt Linter                                ║', 'cyan');
  log('╚══════════════════════════════════════════════════════════════╝', 'cyan');
  console.log('');

  const agentFiles = findAgentFiles(SKILLS_DIR);

  let totalErrors = 0;
  let totalWarnings = 0;
  let totalSuggestions = 0;
  let filesWithIssues = 0;

  for (const file of agentFiles) {
    const relativePath = path.relative(SKILLS_DIR, file);
    const issues = lintAgentPrompt(file);

    const hasIssues =
      issues.errors.length > 0 ||
      issues.warnings.length > 0 ||
      issues.suggestions.length > 0;

    if (hasIssues) {
      filesWithIssues++;
      log(`\n${relativePath}`, 'cyan');

      for (const error of issues.errors) {
        log(`  ✗ ${error}`, 'red');
        totalErrors++;
      }

      for (const warning of issues.warnings) {
        log(`  ⚠ ${warning}`, 'yellow');
        totalWarnings++;
      }

      for (const suggestion of issues.suggestions) {
        log(`  ○ ${suggestion}`, 'dim');
        totalSuggestions++;
      }
    }
  }

  // Summary
  console.log('');
  log('═══════════════════════════════════════════════════════════════', 'cyan');
  log(`  Checked ${agentFiles.length} agent files`, 'cyan');

  if (totalErrors === 0 && totalWarnings === 0) {
    log('  ✓ No errors or warnings found!', 'green');
  } else {
    if (totalErrors > 0) {
      log(`  ✗ ${totalErrors} error(s)`, 'red');
    }
    if (totalWarnings > 0) {
      log(`  ⚠ ${totalWarnings} warning(s)`, 'yellow');
    }
    if (totalSuggestions > 0) {
      log(`  ○ ${totalSuggestions} suggestion(s)`, 'dim');
    }
    log(`  ${filesWithIssues}/${agentFiles.length} files have issues`, 'cyan');
  }

  log('═══════════════════════════════════════════════════════════════', 'cyan');
  console.log('');

  // Real gate: errors fail the build; warnings and suggestions stay advisory.
  if (totalErrors > 0) {
    process.exit(1);
  }
  process.exit(0);
}

main();
