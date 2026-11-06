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
const AGENTS_DIR = path.join(__dirname, '..', '.agents', 'skills');
const DEVIN_DIR = path.join(__dirname, '..', '.devin', 'skills');

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

function renderSkill(skill, manifest, discovery, linkPrefix = '../') {
  const agentsMap = manifest.agents || {};
  const description = collapse(discovery.descriptions[skill.name]);
  const sensitive = (discovery.sensitive || []).includes(skill.name);
  const L = (p) => `${linkPrefix}${p}`;

  const out = [];
  out.push('---');
  out.push(`name: ${skill.name}`);
  // YAML-safe single-line description: emit via the YAML library so values
  // containing ': ', quotes, or other special characters are quoted correctly.
  out.push(YAML.stringify({ description }, { lineWidth: 0 }).trimEnd());
  // Sensitive skills: Claude Code runs them only on an explicit /command.
  if (sensitive) out.push('disable-model-invocation: true');
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
      out.push(prompt ? `- [\`${a}\`](${L(prompt)})` : `- \`${a}\``);
    }
    out.push('');
  }

  if (skill.orchestrator) {
    const prompt = agentsMap[skill.orchestrator]?.prompt;
    out.push(`**Orchestrator:** ${prompt ? `[\`${skill.orchestrator}\`](${L(prompt)})` : `\`${skill.orchestrator}\``}`);
    out.push('');
  }

  if (skill.workflow) {
    out.push(`**Workflow:** [\`${skill.workflow}\`](${L(skill.workflow)})`);
    out.push('');
  } else if (skill.standalone) {
    out.push('**Workflow:** standalone — agent-driven, no orchestrated workflow.');
    out.push('');
  }

  if (Array.isArray(skill.templates) && skill.templates.length) {
    out.push('**Templates:**');
    out.push('');
    for (const t of skill.templates) out.push(`- [\`${t}\`](${L(t)})`);
    out.push('');
  }

  if (Array.isArray(skill.requires) && skill.requires.length) {
    out.push('**Safety context (load before generating output):**');
    out.push('');
    for (const r of skill.requires) out.push(`- [\`${r}\`](${L(r)})`);
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
// Portable build: .agents/skills/<name>/ (open Agent Skills spec)
//
// Each skill is self-contained: every file it needs is copied into its own
// references/ folder (library-relative paths preserved, so cross-links like
// ../shared/x.md inside agent prompts still resolve), and the safety core is
// inlined in the body because agents may never open a linked file.
// Frontmatter carries spec fields only; agent-specific extras go in adapters.
// ─────────────────────────────────────────────────────────────────────────────

const SAFETY_CORE = path.join(SKILLS_DIR, 'shared', 'safety-core.md');
const SAFETY_FILES = ['shared/crisis-response.md', 'shared/contraindications.md', 'shared/ethics-guardrails.md'];

const needsSafety = (skill, discovery) =>
  Boolean(
    skill.requires_ethics_approval ||
      (discovery.sensitive || []).includes(skill.name) ||
      (skill.requires || []).some((r) => SAFETY_FILES.includes(r))
  );

function referenceFiles(skill, manifest, discovery) {
  const agentsMap = manifest.agents || {};
  const files = new Set();
  for (const a of [...(skill.agents || []), skill.orchestrator].filter(Boolean)) {
    if (agentsMap[a]?.prompt) files.add(agentsMap[a].prompt);
  }
  if (skill.workflow) files.add(skill.workflow);
  for (const f of [...(skill.templates || []), ...(skill.requires || [])]) files.add(f);
  if (needsSafety(skill, discovery)) files.add('shared/ethics-guardrails.md');
  return [...files].filter((f) => fs.existsSync(path.join(SKILLS_DIR, f)));
}

function renderPortable(skill, manifest, discovery, refs) {
  const agentsMap = manifest.agents || {};
  const description = collapse(discovery.descriptions[skill.name]);
  const sensitive = (discovery.sensitive || []).includes(skill.name);
  const R = (p) => `references/${p}`;
  const has = (p) => refs.includes(p);

  const out = ['---', `name: ${skill.name}`];
  out.push(YAML.stringify({ description }, { lineWidth: 0 }).trimEnd());
  out.push('license: CC-BY-NC-SA-4.0', '---', '', `# ${titleCase(skill.name)}`, '', collapse(skill.description), '');
  out.push('## When to use', '', description, '');

  if (sensitive) {
    out.push(
      '> **Sensitive skill.** Do not start this on your own from loose conversational cues. ' +
        'Wait for an explicit request and offer it gently.',
      ''
    );
  }

  if (needsSafety(skill, discovery)) {
    out.push(fs.readFileSync(SAFETY_CORE, 'utf8').replace(/\r\n/g, '\n').trim(), '');
    const full = SAFETY_FILES.filter(has).map((f) => `[\`${path.basename(f)}\`](${R(f)})`);
    out.push(`Full protocols: ${full.join(', ')}.`, '');
  }

  const roles = [...(skill.agents || [])];
  if (skill.orchestrator && !roles.includes(skill.orchestrator)) roles.unshift(skill.orchestrator);
  const roleLinks = roles.filter((a) => has(agentsMap[a]?.prompt || ''));
  if (roleLinks.length || skill.workflow) {
    out.push('## How to run', '');
    if (skill.workflow && has(skill.workflow)) {
      out.push(
        `Follow the phases in [\`${path.basename(skill.workflow)}\`](${R(skill.workflow)}). ` +
          'Run each phase inline, one after another. Each phase writes its result to a file ' +
          '(for example `brief.md`, then `design.md`) and the next phase reads it, so a run can be resumed. ' +
          'If your agent supports subagents, you may hand a phase to one; the files stay the handoff.',
        ''
      );
    }
    if (roleLinks.length) {
      out.push('Roles (open the brief for the role you are playing):', '');
      for (const a of roleLinks) out.push(`- [\`${a}\`](${R(agentsMap[a].prompt)})`);
      out.push('');
    }
  }

  const templates = (skill.templates || []).filter(has);
  if (templates.length) {
    out.push('**Templates:** ' + templates.map((t) => `[\`${path.basename(t)}\`](${R(t)})`).join(', '), '');
  }
  const extra = (skill.requires || []).filter((r) => has(r) && !SAFETY_FILES.includes(r));
  if (extra.length) {
    out.push('**Shared context:** ' + extra.map((r) => `[\`${path.basename(r)}\`](${R(r)})`).join(', '), '');
  }
  if (Array.isArray(skill.outputs) && skill.outputs.length) {
    out.push('**Outputs** (write to `./healing-output/`): ' + skill.outputs.map((o) => `\`${o}\``).join(', '), '');
  }
  if (skill.requires_ethics_approval) {
    out.push(
      'Before releasing output, review it against the safety core above and ' +
        (has('shared/ethics-guardrails.md') ? `[\`ethics-guardrails.md\`](${R('shared/ethics-guardrails.md')})` : 'the ethics guardrails') +
        '. Block anything that overclaims or risks harm.',
      ''
    );
  }

  out.push('---', '', '_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._', '');
  return out.join('\n');
}

// Every file the portable build should contain, as { rel, content }.
function portableTree(manifest, discovery) {
  const tree = [];
  for (const skill of manifest.skills || []) {
    const refs = referenceFiles(skill, manifest, discovery);
    tree.push({ rel: `${skill.name}/SKILL.md`, content: renderPortable(skill, manifest, discovery, refs) });
    // Codex adapter: sensitive skills run only on explicit user request.
    if ((discovery.sensitive || []).includes(skill.name)) {
      tree.push({ rel: `${skill.name}/agents/openai.yaml`, content: 'policy:\n  allow_implicit_invocation: false\n' });
    }
    for (const f of refs) {
      tree.push({
        rel: `${skill.name}/references/${f}`,
        content: fs.readFileSync(path.join(SKILLS_DIR, f), 'utf8').replace(/\r\n/g, '\n'),
      });
    }
  }
  return tree;
}

const listFiles = (dir, base = dir) =>
  !fs.existsSync(dir)
    ? []
    : fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const full = path.join(dir, e.name);
        return e.isDirectory() ? listFiles(full, base) : [path.relative(base, full).split(path.sep).join('/')];
      });

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

  // Two copies per skill:
  //   nested   .claude/skills/healing-swarm/<name>/SKILL.md  (library-internal)
  //   top      .claude/skills/<name>/SKILL.md                (what Claude Code
  //            actually discovers — project skill discovery reads only
  //            .claude/skills/<name>/SKILL.md, one level deep; the nested
  //            copies were empirically never loaded)
  // The healing-swarm orchestrator skill's "top" copy lands at the library
  // root itself, which resolves with the same ../healing-swarm/ link prefix.
  const TOP_DIR = path.join(SKILLS_DIR, '..');
  const targets = (manifest.skills || []).flatMap((skill) => [
    {
      dir: path.join(SKILLS_DIR, skill.name),
      file: path.join(SKILLS_DIR, skill.name, 'SKILL.md'),
      content: renderSkill(skill, manifest, discovery, '../'),
      name: skill.name,
    },
    {
      dir: path.join(TOP_DIR, skill.name),
      file: path.join(TOP_DIR, skill.name, 'SKILL.md'),
      content: renderSkill(skill, manifest, discovery, '../healing-swarm/'),
      name: `${skill.name} (top-level)`,
    },
  ]);

  const portable = portableTree(manifest, discovery);
  // Devin: user-invocation-only copies of the sensitive skills (non-spec field,
  // so it stays out of the canonical .agents build).
  const sensitive = discovery.sensitive || [];
  const devin = portable
    .filter((p) => sensitive.includes(p.rel.split('/')[0]) && !p.rel.endsWith('agents/openai.yaml'))
    .map((p) =>
      p.rel.endsWith('/SKILL.md') && p.rel.split('/').length === 2
        ? { ...p, content: p.content.replace('\nlicense:', '\ntriggers: ["user"]\nlicense:') }
        : p
    );
  const trees = [
    { dir: AGENTS_DIR, label: '.agents/skills', files: portable },
    { dir: DEVIN_DIR, label: '.devin/skills', files: devin },
  ];

  if (isCheck) {
    const norm = (s) => s.replace(/\r\n/g, '\n');
    const stale = [];
    for (const t of targets) {
      const current = fs.existsSync(t.file) ? fs.readFileSync(t.file, 'utf8') : '';
      if (norm(current) !== norm(t.content)) stale.push(t.name);
    }
    for (const tree of trees) {
      const expected = new Set(tree.files.map((p) => p.rel));
      for (const p of tree.files) {
        const file = path.join(tree.dir, p.rel);
        const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
        if (norm(current) !== norm(p.content)) stale.push(`${tree.label}/${p.rel}`);
      }
      for (const rel of listFiles(tree.dir)) if (!expected.has(rel)) stale.push(`${tree.label}/${rel} (orphan)`);
    }
    if (stale.length === 0) {
      c(`✓ All ${targets.length} SKILL.md files + ${portable.length} portable + ${devin.length} Devin files in sync (discovery quality OK).`, 'green');
      process.exit(0);
    }
    c(`✗ Out of date (${stale.length}): ${stale.slice(0, 20).join(', ')}${stale.length > 20 ? ', …' : ''}`, 'red');
    c('Run `npm run generate:skills` to regenerate.', 'red');
    process.exit(1);
  }

  for (const t of targets) {
    fs.mkdirSync(t.dir, { recursive: true });
    fs.writeFileSync(t.file, t.content);
  }
  // ponytail: full wipe + rewrite of the portable tree; stale files can't survive.
  for (const tree of trees) {
    fs.rmSync(tree.dir, { recursive: true, force: true });
    for (const p of tree.files) {
      const file = path.join(tree.dir, p.rel);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, p.content);
    }
  }
  c(`✓ Wrote ${targets.length} SKILL.md files + ${portable.length} portable + ${devin.length} Devin files (discovery quality OK).`, 'green');
}

main();
