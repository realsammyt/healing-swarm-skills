#!/usr/bin/env node

/**
 * Healing Swarm Skills - SKILL.md Generator
 *
 * Emits a native `SKILL.md` per manifest skill so Opus 4.8 + Claude Code can
 * auto-discover skills by semantic match, instead of firing only on an exact
 * slash command. Frontmatter `description` comes from `skill-discovery.yaml`
 * (the trigger-optimized prose); the body is progressive disclosure — it links
 * the agents, workflow, templates, and outputs as on-demand reference files.
 *
 * Source of truth:
 *   manifest.yaml          structure (agents, workflow, templates, outputs)
 *   skill-discovery.yaml   the WHAT + WHEN (+ guard) description
 *
 * Usage:
 *   node scripts/generate-skills.js          # write SKILL.md for every skill
 *   node scripts/generate-skills.js --check  # CI gate: discovery quality + freshness
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SKILLS_DIR = path.join(__dirname, '..', '.claude', 'skills', 'healing-swarm');
const MANIFEST = path.join(SKILLS_DIR, 'manifest.yaml');
const DISCOVERY = path.join(SKILLS_DIR, 'skill-discovery.yaml');

const colors = { reset: '\x1b[0m', green: '\x1b[32m', red: '\x1b[31m', cyan: '\x1b[36m', yellow: '\x1b[33m' };
const c = (msg, color = 'reset') => console.log(`${colors[color]}${msg}${colors.reset}`);

const collapse = (s) => (s || '').replace(/\s+/g, ' ').trim();
const titleCase = (name) =>
  name.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// ─────────────────────────────────────────────────────────────────────────────
// Validation of the discovery prose
// ─────────────────────────────────────────────────────────────────────────────

function validateDiscovery(manifest, discovery) {
  const problems = [];
  const skillNames = (manifest.skills || []).map((s) => s.name);
  const descMap = discovery.descriptions || {};
  const sensitive = new Set(discovery.sensitive || []);

  for (const name of skillNames) {
    const raw = descMap[name];
    if (!raw) {
      problems.push(`missing discovery description for "${name}"`);
      continue;
    }
    const text = collapse(raw);
    if (text.length < 80) problems.push(`"${name}": description too short (${text.length} < 80)`);
    if (!/use(?:\s+\w+){0,3}\s+when\b/i.test(text))
      problems.push(`"${name}": description must contain a "Use ... when" clause`);
    if (/\bI(?:'|'ll| will| am)\b/.test(text)) problems.push(`"${name}": use third person, not first person`);
    if (sensitive.has(name) && !/do not auto-launch/i.test(text))
      problems.push(`"${name}" is sensitive and must carry an explicit "Do NOT auto-launch" guard`);
  }
  for (const name of Object.keys(descMap)) {
    if (!skillNames.includes(name)) problems.push(`discovery description "${name}" has no matching manifest skill`);
  }
  return problems;
}

// ─────────────────────────────────────────────────────────────────────────────
// Rendering
// ─────────────────────────────────────────────────────────────────────────────

function renderSkill(skill, manifest, discovery) {
  const agentsMap = manifest.agents || {};
  const description = collapse(discovery.descriptions[skill.name]);
  const sensitive = (discovery.sensitive || []).includes(skill.name);

  const out = [];
  out.push('---');
  out.push(`name: ${skill.name}`);
  // YAML-safe single-line description: emit via the YAML library so values
  // containing ': ', quotes, or other special characters are quoted correctly.
  out.push(YAML.stringify({ description }, { lineWidth: 0 }).trimEnd());
  out.push('---');
  out.push('');
  out.push(`# ${titleCase(skill.name)}`);
  out.push('');
  out.push(collapse(skill.description));
  out.push('');
  out.push(`**Trigger:** \`${skill.trigger}\`  ·  **Category:** ${skill.category || '—'}`);
  out.push('');

  out.push('## When to use');
  out.push('');
  out.push(description);
  out.push('');

  // Progressive disclosure: link the moving parts as on-demand references.
  if (Array.isArray(skill.agents) && skill.agents.length) {
    out.push('## Agents this skill coordinates');
    out.push('');
    for (const a of skill.agents) {
      const prompt = agentsMap[a]?.prompt;
      out.push(prompt ? `- [\`${a}\`](../${prompt})` : `- \`${a}\``);
    }
    out.push('');
  }

  if (skill.orchestrator) {
    const prompt = agentsMap[skill.orchestrator]?.prompt;
    out.push(`**Orchestrator:** ${prompt ? `[\`${skill.orchestrator}\`](../${prompt})` : `\`${skill.orchestrator}\``}`);
    out.push('');
  }

  if (skill.workflow) {
    out.push(`**Workflow:** [\`${skill.workflow}\`](../${skill.workflow})`);
    out.push('');
  } else if (skill.standalone) {
    out.push('**Workflow:** standalone — agent-driven, no orchestrated workflow.');
    out.push('');
  }

  if (Array.isArray(skill.templates) && skill.templates.length) {
    out.push('**Templates:**');
    out.push('');
    for (const t of skill.templates) out.push(`- [\`${t}\`](../${t})`);
    out.push('');
  }

  if (Array.isArray(skill.requires) && skill.requires.length) {
    out.push('**Safety context (load before generating output):**');
    out.push('');
    for (const r of skill.requires) out.push(`- [\`${r}\`](../${r})`);
    out.push('');
  }

  if (Array.isArray(skill.outputs) && skill.outputs.length) {
    out.push('**Outputs:** ' + skill.outputs.map((o) => `\`${o}\``).join(', '));
    out.push('');
  }

  if (skill.example_usage) {
    out.push('## Example usage');
    out.push('');
    out.push('```bash');
    for (const line of String(skill.example_usage).split(/\r?\n/)) {
      if (line.trim()) out.push(line.trim());
    }
    out.push('```');
    out.push('');
  }

  const safety = [];
  if (sensitive) {
    safety.push(
      'This is a **sensitive** skill. Do not auto-launch it from loose conversational cues; ' +
        'wait for an explicit request, offer it gently, and honor the guards in the description above.'
    );
  }
  if (skill.requires_ethics_approval) {
    safety.push(
      'Outputs require ethics approval before release. The `ethics-guardian` review applies, ' +
        'and it can block content that overclaims or risks harm.'
    );
  }
  if (safety.length) {
    out.push('## Safety');
    out.push('');
    for (const s of safety) {
      out.push(`> ${s}`);
      out.push('');
    }
  }

  out.push('---');
  out.push('');
  out.push('_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._');
  out.push('');
  return out.join('\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────

function main() {
  const manifest = YAML.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const discovery = YAML.parse(fs.readFileSync(DISCOVERY, 'utf8'));
  const isCheck = process.argv.includes('--check');

  const problems = validateDiscovery(manifest, discovery);
  if (problems.length) {
    c('✗ skill-discovery.yaml problems:', 'red');
    for (const p of problems) c(`  - ${p}`, 'red');
    process.exit(1);
  }

  const targets = (manifest.skills || []).map((skill) => ({
    dir: path.join(SKILLS_DIR, skill.name),
    file: path.join(SKILLS_DIR, skill.name, 'SKILL.md'),
    content: renderSkill(skill, manifest, discovery),
    name: skill.name,
  }));

  if (isCheck) {
    const norm = (s) => s.replace(/\r\n/g, '\n');
    const stale = [];
    for (const t of targets) {
      const current = fs.existsSync(t.file) ? fs.readFileSync(t.file, 'utf8') : '';
      if (norm(current) !== norm(t.content)) stale.push(t.name);
    }
    if (stale.length === 0) {
      c(`✓ All ${targets.length} SKILL.md files are in sync (discovery quality OK).`, 'green');
      process.exit(0);
    }
    c(`✗ SKILL.md out of date for: ${stale.join(', ')}`, 'red');
    c('Run `npm run generate:skills` to regenerate.', 'red');
    process.exit(1);
  }

  for (const t of targets) {
    fs.mkdirSync(t.dir, { recursive: true });
    fs.writeFileSync(t.file, t.content);
  }
  c(`✓ Wrote ${targets.length} SKILL.md files (discovery quality OK).`, 'green');
}

main();
