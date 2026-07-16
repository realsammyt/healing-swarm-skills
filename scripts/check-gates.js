/**
 * Healing Swarm Skills - Gate Contract Checker (the thin veto harness)
 *
 * Phase 5 gave every reviewer a machine-readable gate contract; this is the
 * Phase 6 harness that enforces it. It reads the fenced JSON gate blocks a
 * reviewer emits and HALTS when a non-negotiable gate fails. It does not run the
 * swarm — Claude Code (Path A) does that. This is the one deterministic check
 * the plan said prose isn't good enough for: the ethics and accessibility veto.
 *
 * Gate contract (each reviewer emits one fenced ```json block):
 *
 *   {
 *     "gate": "ethics",                 // ethics | clinical | cultural | accessibility
 *     "status": "pass" | "fail" | "veto",
 *     "blocking": true,
 *     "issues": [
 *       { "severity": "critical|high|medium|low", "location": "...", "finding": "...", "fix": "..." }
 *     ]
 *   }
 *
 * VETO gates (ethics, accessibility) always halt on fail/veto regardless of the
 * `blocking` flag. Any other gate halts only when it declares `blocking: true`.
 *
 * Usage:
 *   node scripts/check-gates.js <file-or-dir> [more...]   # enforce; exit 1 on halt
 *   node scripts/check-gates.js --require=ethics,accessibility <dir>
 *                                # also halt when a named gate is missing entirely
 *   import { extractGates, evaluateGates } from './check-gates.js'  # for tests
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Gates whose failure is non-negotiable — they veto regardless of `blocking`.
export const VETO_GATES = ['ethics', 'accessibility'];

const colors = { reset: '\x1b[0m', green: '\x1b[32m', red: '\x1b[31m', yellow: '\x1b[33m', cyan: '\x1b[36m' };
const c = (msg, color = 'reset') => console.log(`${colors[color]}${msg}${colors.reset}`);

/** Pull every fenced ```json block that looks like a gate object out of text. */
export function extractGates(text) {
  const gates = [];
  const fence = /```json\s*([\s\S]*?)```/gi;
  let m;
  while ((m = fence.exec(text)) !== null) {
    let obj;
    try {
      obj = JSON.parse(m[1]);
    } catch {
      continue; // not valid JSON — skip
    }
    const candidates = Array.isArray(obj) ? obj : [obj];
    for (const cand of candidates) {
      if (cand && typeof cand === 'object' && typeof cand.gate === 'string' && typeof cand.status === 'string') {
        gates.push(cand);
      }
    }
  }
  return gates;
}

/** Decide whether a set of gates should halt the pipeline. Pure — easy to test. */
export function evaluateGates(gates) {
  const halts = [];
  for (const g of gates) {
    // Normalize LLM-emitted values ('FAIL', ' Veto', 'Ethics') so case or
    // whitespace drift can never slip past the safety veto.
    const status = String(g.status).trim().toLowerCase();
    const gate = String(g.gate).trim().toLowerCase();
    const failing = status === 'fail' || status === 'veto';
    if (!failing) continue;
    const isVetoGate = VETO_GATES.includes(gate);
    if (isVetoGate || g.blocking === true) {
      halts.push(g);
    }
  }
  return { halt: halts.length > 0, halts };
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────────────────────────────────────

function collectFiles(target, out = []) {
  if (!fs.existsSync(target)) return out;
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    for (const e of fs.readdirSync(target)) collectFiles(path.join(target, e), out);
  } else if (/\.(md|markdown|json|txt)$/i.test(target)) {
    out.push(target);
  }
  return out;
}

function main() {
  const targets = process.argv.slice(2).filter((a) => !a.startsWith('-'));
  // Opt-in fail-closed mode: --require=ethics,accessibility halts when a named
  // gate is missing entirely (a skipped review must not pass enforcement).
  // Equals form only — a space-separated value would be swallowed as a path.
  const requireArg = process.argv.slice(2).find((a) => a.startsWith('--require='));
  const required = requireArg
    ? requireArg.slice(10).split(',').map((s) => s.trim().toLowerCase()).filter(Boolean)
    : [];
  if (targets.length === 0) {
    c('Usage: node scripts/check-gates.js [--require=gate,...] <file-or-dir> [more...]', 'yellow');
    c('Scans for fenced JSON gate blocks and halts on a failed veto/blocking gate.', 'yellow');
    c('--require=ethics,accessibility also halts when a named gate is missing entirely.', 'yellow');
    process.exit(2);
  }

  const files = targets.flatMap((t) => collectFiles(t));
  const allGates = [];
  for (const f of files) {
    const gates = extractGates(fs.readFileSync(f, 'utf8'));
    for (const g of gates) allGates.push({ ...g, _file: path.relative(process.cwd(), f) });
  }

  const missing = required.filter(
    (name) => !allGates.some((g) => String(g.gate).trim().toLowerCase() === name)
  );
  if (missing.length) {
    c(`✗ HALT — required gate(s) missing: ${missing.join(', ')}`, 'red');
    process.exit(1);
  }

  if (allGates.length === 0) {
    c('No gate blocks found in the given path(s). Nothing to enforce.', 'yellow');
    process.exit(0);
  }

  const { halt, halts } = evaluateGates(allGates);
  c(`Found ${allGates.length} gate result(s):`, 'cyan');
  for (const g of allGates) {
    const status = String(g.status).trim().toLowerCase();
    const ok = status === 'pass';
    c(`  ${ok ? '✓' : '✗'} ${g.gate} = ${g.status}${g.blocking ? ' (blocking)' : ''}  ${g._file}`, ok ? 'green' : 'red');
  }

  if (halt) {
    c('\n✗ HALT — a non-negotiable gate did not pass:', 'red');
    for (const g of halts) {
      const isVeto = VETO_GATES.includes(String(g.gate).trim().toLowerCase());
      c(`  - ${g.gate}: ${g.status}${isVeto ? ' (veto gate)' : ' (blocking)'} [${g._file}]`, 'red');
      for (const issue of g.issues || []) {
        c(`      • [${issue.severity || '?'}] ${issue.finding || ''}${issue.location ? ` @ ${issue.location}` : ''}`, 'red');
      }
    }
    process.exit(1);
  }

  c('\n✓ All veto/blocking gates passed.', 'green');
  process.exit(0);
}

// Only run the CLI when invoked directly (not when imported by tests).
const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (invokedDirectly) main();
