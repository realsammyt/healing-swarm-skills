# ADR-004: Runtime Model and Gate Enforcement

**Status:** Accepted
**Date:** 2026-06-02
**Deciders:** Project owner + Opus 4.8 optimization effort

---

## Context

The swarm is a set of markdown/YAML prompt specs that Claude Code reads at
runtime. No shipped code calls the Anthropic API or an Agent SDK. The quality
gates (ethics, clinical, cultural, accessibility) were natural-language prose —
`blocking: true` and `cannot_override: true` were honor-system, with nothing
behind them. The open question (Phase 6 of the optimization plan): keep the LLM
as executor, or build a deterministic harness/SDK runner?

Two paths were considered:

- **Path A — Claude Code reads the YAML as instructions.** The LLM is the
  executor. Tiering, parallelism, and gates are all prompt-driven. Lowest cost,
  no new runtime to maintain. Gates are only as strong as the prompt.
- **Path B — a thin deterministic harness / Agent SDK runner** that spawns
  subagents, pins models, dispatches stages, and enforces gates in code.

---

## Decision

**Path A, plus a thin harness that enforces only the non-negotiable veto.**

1. Claude Code remains the executor. Model policy (Opus 4.8 everywhere, high
   effort — see the manifest `settings.models`), parallel dispatch, and stage
   ordering are prompt-driven.
2. Every reviewer emits a machine-readable **gate contract** (a fenced JSON
   block: `{ gate, status, blocking, issues }`) in addition to its human report.
3. A ~200-line harness, [`scripts/check-gates.js`](../../scripts/check-gates.js),
   parses those blocks and **halts** when a non-negotiable gate fails. The
   `ethics` and `accessibility` gates veto on `fail`/`veto` regardless of any
   other signal; other gates halt only when they declare `blocking: true`.

The full Path B SDK runner is **not** built. It can be added later without
reworking any of the above (the gate contract is the stable interface).

---

## Rationale

The safety architecture is the project's core asset, and honor-system
enforcement of a veto is the one place prose isn't good enough. A small,
testable checker that does nothing but parse the ethics/accessibility verdict
and stop on failure buys most of Path B's safety value at a fraction of the
cost. Everything else (cost tiering, parallelism) is adequately handled by
prompt instructions to Opus 4.8.

---

## Consequences

### Positive

- The ethics and accessibility veto is now deterministic, not honor-system.
- The gate contract is a stable seam: a future Path B runner consumes the same
  JSON without any prompt rework.
- Cheap to maintain — no SDK runtime, no model orchestration code.
- The checker logic is unit-tested ([`scripts/check-gates.test.js`](../../scripts/check-gates.test.js)).

### Negative / limits

- Enforcement only happens when something runs the checker over the reviewer
  output. Inside an interactive Claude Code session the conductor is trusted to
  call it (or honor the verdict); the hard guarantee applies wherever the
  output passes through `check-gates.js` (e.g. CI on generated artifacts).
- Model tiering and parallel dispatch remain prompt-driven, so they're as
  reliable as the model following instructions — acceptable for those, not for
  the veto (hence the harness).

---

## Implementation

- Contract + harness: `scripts/check-gates.js` (`extractGates`, `evaluateGates`,
  `VETO_GATES = ['ethics','accessibility']`); CLI: `npm run check:gates -- <path>`.
- Reviewer emission: the gate block is the REQUIRED first output of
  `ethics-guardian`, `clinical-reviewer`, `cultural-reviewer`, and
  `accessibility-auditor`.
- Tests: `scripts/check-gates.test.js` (run by `npm test`).

---

## Related ADRs

- [ADR-001: Ethics-First Architecture](001-ethics-first-architecture.md)
- [ADR-003: Multi-Agent Quality Review](003-multi-agent-quality.md)
