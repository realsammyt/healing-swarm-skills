#!/usr/bin/env node

/**
 * Healing Swarm Skills - Reference Doc Generator
 *
 * Regenerates docs/api/skills-reference.md and docs/api/agents-reference.md
 * directly from the manifest (and, for agents, the lead paragraph of each agent
 * prompt). The manifest is the source of truth; these docs are build output.
 *
 * Usage:
 *   node scripts/generate-reference.js          # write both reference docs
 *   node scripts/generate-reference.js --check  # CI gate: fail if out of date
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..');
const SKILLS_DIR = path.join(ROOT, '.claude', 'skills', 'healing-swarm');
const MANIFEST = path.join(SKILLS_DIR, 'manifest.yaml');
const SKILLS_REF = path.join(ROOT, 'docs', 'api', 'skills-reference.md');
const AGENTS_REF = path.join(ROOT, 'docs', 'api', 'agents-reference.md');

const colors = { reset: '\x1b[0m', green: '\x1b[32m', red: '\x1b[31m', cyan: '\x1b[36m' };
const c = (msg, color = 'reset') => console.log(`${colors[color]}${msg}${colors.reset}`);

const oneLine = (s) => (s || '').replace(/\s+/g, ' ').trim();
const firstSentence = (s) => {
  const t = oneLine(s);
  const m = t.match(/^(.*?[.!?])(\s|$)/);
  return m ? m[1] : t;
};

const CATEGORY_BY_DIR = {
  research: 'Research',
  content: 'Content',
  design: 'Design',
  build: 'Build',
  quality: 'Quality',
  deploy: 'Deploy',
  orchestrator: 'Orchestration',
};

// ─────────────────────────────────────────────────────────────────────────────
// Skills reference
// ─────────────────────────────────────────────────────────────────────────────

function renderSkillsRef(manifest) {
  const skills = manifest.skills || [];
  const out = [];
  out.push('# Skills Reference');
  out.push('');
  out.push('> Generated from `manifest.yaml` by `scripts/generate-reference.js`. Do not edit by hand.');
  out.push('');
  out.push('---');
  out.push('');
  out.push('## Overview');
  out.push('');
  out.push('| Skill | Trigger | Category | Purpose |');
  out.push('| ----- | ------- | -------- | ------- |');
  for (const s of skills) {
    const purpose = firstSentence(s.description);
    out.push(`| [${s.name}](#${s.name}) | \`${s.trigger}\` | ${s.category || '—'} | ${purpose} |`);
  }
  out.push('');
  out.push('---');
  out.push('');

  for (const s of skills) {
    out.push(`## ${s.name}`);
    out.push('');
    out.push(`**Trigger:** \`${s.trigger}\``);
    out.push('');
    out.push(`**Category:** ${s.category || '—'}`);
    out.push('');
    if (s.workflow) {
      out.push(`**Workflow:** \`${s.workflow}\``);
    } else if (s.standalone) {
      out.push('**Workflow:** standalone (agent-driven, no orchestrated workflow)');
    }
    out.push('');
    out.push('### Description');
    out.push('');
    out.push(oneLine(s.description));
    out.push('');
    if (Array.isArray(s.agents) && s.agents.length) {
      out.push('### Agents');
      out.push('');
      for (const a of s.agents) out.push(`- \`${a}\``);
      out.push('');
    }
    if (Array.isArray(s.templates) && s.templates.length) {
      out.push('### Templates');
      out.push('');
      for (const t of s.templates) out.push(`- \`${t}\``);
      out.push('');
    }
    if (Array.isArray(s.outputs) && s.outputs.length) {
      out.push('### Outputs');
      out.push('');
      for (const o of s.outputs) out.push(`- \`${o}\``);
      out.push('');
    }
    if (s.requires_ethics_approval) {
      out.push('> ⚖️ Requires ethics approval before outputs are released.');
      out.push('');
    }
    if (s.example_usage) {
      out.push('### Example Usage');
      out.push('');
      out.push('```bash');
      out.push(oneLine(s.example_usage).split(' /').join('\n/').replace(/^\//, '/'));
      out.push('```');
      out.push('');
    }
    out.push('---');
    out.push('');
  }
  return out.join('\n').replace(/\n+$/, '\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// Agents reference
// ─────────────────────────────────────────────────────────────────────────────

function agentLead(promptRelPath) {
  const file = path.join(SKILLS_DIR, promptRelPath);
  if (!fs.existsSync(file)) return '';
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  let i = 0;
  // skip to after the H1 title
  while (i < lines.length && !/^#\s+/.test(lines[i])) i++;
  i++;
  // collect first non-empty, non-heading paragraph
  const para = [];
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line === '' && para.length === 0) {
      i++;
      continue;
    }
    if (line === '') break;
    if (/^#{1,6}\s/.test(line)) {
      if (para.length) break;
      i++;
      continue;
    }
    para.push(line.replace(/^>\s?/, ''));
    i++;
  }
  return firstSentence(para.join(' '));
}

function categoryOf(promptRelPath) {
  const dir = promptRelPath.split('/')[0];
  return CATEGORY_BY_DIR[dir] || 'Specialist';
}

function renderAgentsRef(manifest) {
  const agents = manifest.agents || {};
  const names = Object.keys(agents);
  const out = [];
  out.push('# Agents Reference');
  out.push('');
  out.push('> Generated from `manifest.yaml` by `scripts/generate-reference.js`. Do not edit by hand.');
  out.push('');
  out.push('---');
  out.push('');
  out.push('## Overview');
  out.push('');
  out.push('| Agent | Category | File | Tools |');
  out.push('| ----- | -------- | ---- | ----- |');
  for (const name of names) {
    const a = agents[name];
    const tools = Array.isArray(a.tools) ? a.tools.join(', ') : '—';
    out.push(`| [${name}](#${name}) | ${categoryOf(a.prompt)} | \`${a.prompt}\` | ${tools} |`);
  }
  out.push('');
  out.push('---');
  out.push('');

  for (const name of names) {
    const a = agents[name];
    out.push(`## ${name}`);
    out.push('');
    out.push(`**File:** \`${a.prompt}\``);
    out.push('');
    out.push(`**Category:** ${categoryOf(a.prompt)}`);
    out.push('');
    if (Array.isArray(a.tools)) {
      out.push(`**Tools:** ${a.tools.map((t) => `\`${t}\``).join(', ')}`);
      out.push('');
    }
    if (a.veto_power) {
      out.push('> 🛑 Holds veto power over swarm outputs.');
      out.push('');
    }
    const lead = agentLead(a.prompt);
    if (lead) {
      out.push(lead);
      out.push('');
    }
    out.push('---');
    out.push('');
  }
  return out.join('\n').replace(/\n+$/, '\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────

function main() {
  const manifest = YAML.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const isCheck = process.argv.includes('--check');

  const targets = [
    { path: SKILLS_REF, content: renderSkillsRef(manifest), label: 'skills-reference.md' },
    { path: AGENTS_REF, content: renderAgentsRef(manifest), label: 'agents-reference.md' },
  ];

  if (isCheck) {
    // Compare line-ending agnostically: git may check these out as CRLF on
    // Windows while the generator always renders LF.
    const norm = (s) => s.replace(/\r\n/g, '\n');
    const stale = [];
    for (const t of targets) {
      const current = fs.existsSync(t.path) ? fs.readFileSync(t.path, 'utf8') : '';
      if (norm(current) !== norm(t.content)) stale.push(t.label);
    }
    if (stale.length === 0) {
      c('✓ Reference docs are in sync with the manifest.', 'green');
      process.exit(0);
    }
    c(`✗ Reference docs out of date: ${stale.join(', ')}`, 'red');
    c('Run `npm run generate:reference` to regenerate them.', 'red');
    process.exit(1);
  }

  for (const t of targets) {
    fs.writeFileSync(t.path, t.content);
    c(`✓ Wrote ${t.label} (${t.content.split('\n').length} lines)`, 'green');
  }
}

main();
