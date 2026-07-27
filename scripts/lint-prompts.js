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

// Overclaiming-language check, shared by the agent-prompt lint and the wider
// claims-surface pass. Line-by-line so demonstrative examples can be skipped:
// a claim phrase inside DOUBLE quotes, or on a line with an explicit negation
// marker (✗ / ❌ / don't / avoid / overclaim / a review catching a violation),
// is the file teaching what NOT to say. Bare apostrophes/possessives do NOT
// exempt a line (that loophole previously exempted "the body's..." claims),
// and neither does a trailing disclaimer ("...does not replace medical care").
const CLAIM_MODAL_RE =
  /\b(will|can|could|proven to|clinically proven to|guaranteed to)\s+(cure|heal|fix|treat|reverse|eliminate|restore|rewire|detox)\b/i;
// Third-person claims need a symptom-ish object to avoid flagging benign prose
// ("treats the breath as an anchor"). Extend the object list as needed.
const CLAIM_THIRD_PERSON_RE =
  /\b(cures|heals|treats|fixes|reverses|eliminates|rewires)\s+(your\s+|the\s+)?(depression|anxiety|trauma|ptsd|insomnia|chronic\s+pain|pain|disease|illness|cancer|inflammation|addiction|tinnitus)\b/i;
const NEG_CONTEXT_RE =
  /["“”]|✗|❌|🚫|don'?t|do not|\bnever\b|\bavoid\b|overclaim|\bviolation\b|instead of/i;

export function findClaimViolations(content) {
  const hits = [];
  for (const line of content.split(/\r?\n/)) {
    if (NEG_CONTEXT_RE.test(line)) continue;
    if (CLAIM_MODAL_RE.test(line) || CLAIM_THIRD_PERSON_RE.test(line)) {
      hits.push(`Avoid promising outcomes ("will/can cure/heal/treat/…") - use "may help" — found: ${line.trim()}`);
    }
  }
  return hits;
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
      } else {
        issues.suggestions.push(ref.message);
      }
    }
  }

  // Check for common issues: outcome-promising language.
  for (const hit of findClaimViolations(content)) {
    issues.errors.push(hit);
  }

  if (/\bscience proves\b/i.test(content)) {
    issues.warnings.push('Use "research suggests" instead of "science proves"');
  }

  // Phase 4 polish regression check: agent prompts should not end with a
  // horizontal rule followed by an italic filler quote.
  if (/\n---\s*\n+\s*[*_].*[*_]\s*$/.test(content)) {
    issues.warnings.push('ends with a filler closing quote — strip it (see Phase 4 polish)');
  }

  return issues;
}

// Claims-surface discovery: templates, shared resources, and generated
// SKILL.md descriptors ship user-facing healing language too — they get the
// claims check (only), not the agent-prompt section-structure checks.
function findClaimSurfaceFiles() {
  const results = [];
  const walkMd = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (fs.statSync(full).isDirectory()) walkMd(full);
      else if (entry.endsWith('.md')) results.push(full);
    }
  };
  walkMd(path.join(SKILLS_DIR, 'shared'));
  walkMd(path.join(SKILLS_DIR, 'content', 'templates'));
  // Every generated SKILL.md (one level below SKILLS_DIR).
  for (const entry of fs.readdirSync(SKILLS_DIR)) {
    const candidate = path.join(SKILLS_DIR, entry, 'SKILL.md');
    if (fs.existsSync(candidate)) results.push(candidate);
  }
  return results;
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

  // Claims-only pass over templates, shared resources, and SKILL.md files.
  const claimSurface = findClaimSurfaceFiles();
  for (const file of claimSurface) {
    const violations = findClaimViolations(fs.readFileSync(file, 'utf8'));
    if (violations.length > 0) {
      filesWithIssues++;
      log(`\n${path.relative(SKILLS_DIR, file)}`, 'cyan');
      for (const v of violations) {
        log(`  ✗ ${v}`, 'red');
        totalErrors++;
      }
    }
  }

  // Summary
  console.log('');
  log('═══════════════════════════════════════════════════════════════', 'cyan');
  log(`  Checked ${agentFiles.length} agent files + ${claimSurface.length} claim-surface files (templates/shared/SKILL.md)`, 'cyan');

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
