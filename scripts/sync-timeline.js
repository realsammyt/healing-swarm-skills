#!/usr/bin/env node

/**
 * Healing Swarm Skills - Timeline / Count Synchronizer
 *
 * Single source of truth for the project's headline counts. Derives every count
 * from the manifest and the filesystem, so the README and website timeline can
 * never silently drift again.
 *
 * Canonical definitions (change them HERE, nowhere else):
 *   Skills          manifest `skills:` entries (includes the `healing-swarm`
 *                   orchestration skill, which is entry #52 in that list).
 *   Agents          manifest `agents:` entries (includes `swarm-conductor`).
 *   Workflows       `*.yaml` under the skills tree, excluding `_templates/`,
 *                   `examples/`, and any `manifest.yaml`. (The validator's "36"
 *                   wrongly counts 11 example/main manifests as workflows.)
 *   Shared Resources  files in `shared/`.
 *   Templates       artifact templates in `content/templates/`.
 *   Worked Examples directories under `examples/` (top-level) plus directories
 *                   under the skills `examples/` tree, excluding `index.md`.
 *
 * "Website Pages" and "Traditions Integrated" are intentionally soft (suffixed
 * with "+") and are NOT enforced here.
 *
 * Usage:
 *   node scripts/sync-timeline.js            # print counts + paste-ready table
 *   node scripts/sync-timeline.js --check    # CI gate: fail on doc drift
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
const README = path.join(ROOT, 'README.md');
const CHANGELOG_MDX = path.join(ROOT, 'website', 'docs', 'changelog.mdx');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
};
const c = (msg, color = 'reset') => console.log(`${colors[color]}${msg}${colors.reset}`);

// ─────────────────────────────────────────────────────────────────────────────
// File discovery
// ─────────────────────────────────────────────────────────────────────────────

function walk(dir, predicate, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!entry.startsWith('_') && !entry.startsWith('.')) walk(full, predicate, results);
    } else if (predicate(full, entry)) {
      results.push(full);
    }
  }
  return results;
}

function countDirs(dir, { exclude = [] } = {}) {
  if (!fs.existsSync(dir)) return 0;
  return fs
    .readdirSync(dir)
    .filter((e) => !exclude.includes(e) && fs.statSync(path.join(dir, e)).isDirectory()).length;
}

// ─────────────────────────────────────────────────────────────────────────────
// Canonical counts
// ─────────────────────────────────────────────────────────────────────────────

export function computeCounts() {
  const manifest = YAML.parse(fs.readFileSync(MANIFEST, 'utf8'));

  const skills = Array.isArray(manifest.skills) ? manifest.skills.length : 0;
  const agents = manifest.agents ? Object.keys(manifest.agents).length : 0;

  const workflows = walk(
    SKILLS_DIR,
    (full, name) =>
      name.endsWith('.yaml') &&
      name !== 'manifest.yaml' &&
      name !== 'skill-discovery.yaml' &&
      !full.split(path.sep).includes('examples')
  ).length;

  const shared = walk(path.join(SKILLS_DIR, 'shared'), () => true).length;
  const templates = walk(
    path.join(SKILLS_DIR, 'content', 'templates'),
    (_full, name) => name.endsWith('.md')
  ).length;

  const workedExamples =
    countDirs(path.join(ROOT, 'examples'), { exclude: [] }) +
    countDirs(path.join(SKILLS_DIR, 'examples'));

  return {
    Skills: skills,
    Agents: agents,
    Workflows: workflows,
    'Shared Resources': shared,
    Templates: templates,
    'Worked Examples': workedExamples,
  };
}

// Labels that CI enforces against the docs.
const ENFORCED = ['Skills', 'Agents', 'Workflows', 'Shared Resources', 'Templates', 'Worked Examples'];

// ─────────────────────────────────────────────────────────────────────────────
// Rendering
// ─────────────────────────────────────────────────────────────────────────────

function totalsTable(counts) {
  const rows = [
    ['Skills', counts.Skills],
    ['Agents', counts.Agents],
    ['Workflows', counts.Workflows],
    ['Templates', counts.Templates],
    ['Shared Resources', counts['Shared Resources']],
    ['Worked Examples', counts['Worked Examples']],
    ['Website Pages', '91+'],
    ['Traditions Integrated', '20+'],
  ];
  const lines = ['| Category | Count |', '| -------- | ----- |'];
  for (const [k, v] of rows) lines.push(`| ${k} | ${v} |`);
  return lines.join('\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// Drift check
// ─────────────────────────────────────────────────────────────────────────────

/** Pull `| Label | N |` table values out of a markdown file (label may be **bolded**). */
function tableValues(text, label) {
  const re = new RegExp(`^\\|\\s*\\*{0,2}${label}\\*{0,2}\\s*\\|\\s*(\\d+)\\s*\\|`, 'gim');
  const found = [];
  let m;
  while ((m = re.exec(text)) !== null) found.push(Number(m[1]));
  return found;
}

function check(counts) {
  const problems = [];
  const files = [
    { name: 'README.md', text: fs.readFileSync(README, 'utf8') },
    { name: 'website/docs/changelog.mdx', text: fs.readFileSync(CHANGELOG_MDX, 'utf8') },
  ];

  for (const { name, text } of files) {
    for (const label of ENFORCED) {
      const expected = counts[label];
      for (const actual of tableValues(text, label)) {
        if (actual !== expected) {
          problems.push(`${name}: "${label}" totals row says ${actual}, manifest says ${expected}`);
        }
      }
    }
  }

  // README prose references ("All N skills" / "All N agents").
  const readme = files[0].text;
  const skillsRef = readme.match(/All\s+(\d+)\s+skills/i);
  if (skillsRef && Number(skillsRef[1]) !== counts.Skills) {
    problems.push(`README.md: "All ${skillsRef[1]} skills" should be ${counts.Skills}`);
  }
  const agentsRef = readme.match(/All\s+(\d+)\s+agents/i);
  if (agentsRef && Number(agentsRef[1]) !== counts.Agents) {
    problems.push(`README.md: "All ${agentsRef[1]} agents" should be ${counts.Agents}`);
  }

  return problems;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────

function main() {
  const counts = computeCounts();
  const isCheck = process.argv.includes('--check');

  if (isCheck) {
    const problems = check(counts);
    if (problems.length === 0) {
      c('✓ Timeline counts in sync with the manifest.', 'green');
      process.exit(0);
    }
    c('✗ Doc drift detected:', 'red');
    for (const p of problems) c(`  - ${p}`, 'red');
    c('\nFix the counts above, or run `npm run sync:timeline` to see canonical values.', 'yellow');
    process.exit(1);
  }

  c('Canonical counts (derived from manifest + filesystem):\n', 'cyan');
  for (const [k, v] of Object.entries(counts)) console.log(`  ${k.padEnd(18)} ${v}`);
  c('\nCumulative Totals table (paste into README.md and website/docs/changelog.mdx):\n', 'cyan');
  console.log(totalsTable(counts));
  console.log('');
}

main();
