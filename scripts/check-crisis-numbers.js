#!/usr/bin/env node

/**
 * Healing Swarm Skills - Crisis Number Consistency Check
 *
 * The crisis hotline numbers are restated in a dozen-plus content files (a
 * user-facing template must ship with real numbers, not a pointer). This check
 * keeps every restatement consistent with the canonical block in
 * shared/crisis-response.md, so a number change can never be applied to some
 * files and silently missed in others.
 *
 * Rules enforced (per markdown file under the skills tree):
 *   1. A line naming a known crisis SERVICE must not carry any phone-shaped
 *      number outside the canonical set. (Deliberately NOT "must carry that
 *      service's own number": many legitimate lines name one service next to
 *      another service's number — "988 Lifeline, Crisis Text Line, …" — so a
 *      per-service ownership rule would false-positive. The drift this
 *      catches is a typo'd or stale number appearing beside a service name.)
 *   2. shared/crisis-response.md itself must contain every canonical number —
 *      if the human updates a number there, this script's table must be
 *      updated too, which is the prompt to sweep the restatements.
 *   3. The outcome-tracker prompt must retain its self-harm-item hard rule
 *      (depression-instrument item endorsement -> crisis resources FIRST).
 *
 * Usage: node scripts/check-crisis-numbers.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILLS_DIR = path.join(__dirname, '..', '.claude', 'skills', 'healing-swarm');
const CANONICAL_FILE = path.join(SKILLS_DIR, 'shared', 'crisis-response.md');

// Canonical service -> number pairs (US defaults; see crisis-response.md for
// the localization rule). Update HERE + crisis-response.md together.
const SERVICES = [
  { name: /988\s+Suicide|Suicide\s*(&|and)\s*Crisis\s+Lifeline/i, number: /\b988\b/, label: '988 Suicide & Crisis Lifeline' },
  { name: /Crisis\s+Text\s+Line/i, number: /741\s?741/, label: 'Crisis Text Line (741741)' },
  { name: /SAMHSA/i, number: /1-800-662-4357|1-800-662-HELP/i, label: 'SAMHSA helpline (1-800-662-4357)' },
  { name: /Poison\s+Control/i, number: /1-800-222-1222/, label: 'Poison Control (1-800-222-1222)' },
];

const colors = { reset: '\x1b[0m', green: '\x1b[32m', red: '\x1b[31m', cyan: '\x1b[36m' };
const log = (msg, color = 'reset') => console.log(`${colors[color]}${msg}${colors.reset}`);

function walkMd(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir)) {
    if (entry.startsWith('.')) continue;
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) walkMd(full, results);
    else if (entry.endsWith('.md')) results.push(full);
  }
  return results;
}

function main() {
  const problems = [];

  // Rule 2: canonical file anchors every number.
  const canonical = fs.readFileSync(CANONICAL_FILE, 'utf8');
  for (const svc of SERVICES) {
    if (!svc.number.test(canonical)) {
      problems.push(`shared/crisis-response.md no longer contains the canonical number for ${svc.label} — update SERVICES in scripts/check-crisis-numbers.js and sweep all restatements`);
    }
  }

  // Rule 1: a line naming a known service must not carry an unrecognized
  // phone-shaped number. (A line may legitimately pair one service's name with
  // ANOTHER service's canonical number — "988 Lifeline, Crisis Text Line, …" —
  // so the check is "no unknown numbers", not "this service's number present".)
  // The 3-digit shortcode branch must not match inside larger figures
  // ("answered 900,000 calls"), hence the trailing digit/decimal guard.
  const PHONE_TOKEN_RE = /\b1-8\d{2}-\d{3}-\d{4}\b|\b\d{3}-\d{3}-\d{4}\b|\b\d{6}\b|\b9\d{2}\b(?![,.]?\d)/g;
  const ALLOWED = [/\b988\b/, /\b911\b/, /\b741\s?741\b/, /1-800-662-4357/, /1-800-222-1222/];
  const namesAnyService = (line) => SERVICES.some((svc) => svc.name.test(line));

  let checked = 0;
  for (const file of walkMd(SKILLS_DIR)) {
    const rel = path.relative(SKILLS_DIR, file).split(path.sep).join('/');
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    checked++;
    lines.forEach((line, i) => {
      if (!namesAnyService(line)) return;
      for (const token of line.match(PHONE_TOKEN_RE) || []) {
        if (!ALLOWED.some((re) => re.test(token))) {
          problems.push(`${rel}:${i + 1} pairs a crisis service with an unrecognized number "${token}": "${line.trim().slice(0, 100)}"`);
        }
      }
    });
  }

  // Rule 3: the outcome-tracker's self-harm-item rule is load-bearing safety
  // text — validate it hasn't been edited away.
  const trackerPath = path.join(SKILLS_DIR, 'content', 'outcome-tracker.md');
  if (fs.existsSync(trackerPath)) {
    const tracker = fs.readFileSync(trackerPath, 'utf8');
    const hasRule = /self-harm/i.test(tracker) && /\b988\b/.test(tracker) && /741\s?741/.test(tracker);
    if (!hasRule) {
      problems.push('content/outcome-tracker.md lost its self-harm-item hard rule (must mention self-harm + 988 + 741741)');
    }
  }

  if (problems.length > 0) {
    log(`✗ Crisis-number drift detected (${problems.length}):`, 'red');
    for (const p of problems) log(`  - ${p}`, 'red');
    process.exit(1);
  }
  log(`✓ Crisis numbers consistent across ${checked} files (canonical: shared/crisis-response.md).`, 'green');
  process.exit(0);
}

main();
