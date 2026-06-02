# HANDOFF — Opus 4.8 Optimization Effort

> **Living document.** This is the single source of truth for where the Opus 4.8
> optimization work stands and what to do next. Any agent starting a fresh
> conversation should read this first, then update it before ending a session.
> If anything here disagrees with reality, reality wins — fix the doc.

**Last updated:** 2026-06-02 by Claude (Opus 4.8) — Phases 0–6 complete (core); only minor deferred polish remains
**Active branch:** `feat/family-nexus-healing`
**Driving plan:** [`docs/plans/2026-05-31-opus-4-8-optimization.md`](docs/plans/2026-05-31-opus-4-8-optimization.md)

---

## 1. Read-this-first orientation (for a fresh agent)

1. Read this whole file.
2. Read the driving plan above (the phase detail lives there, not here).
3. Run `npm run validate` to confirm ground truth before trusting any count.
4. Check the **Phase status** table below for what's done and what's next.
5. Check **Open questions** — do not guess on these; they're the human's to call.
6. When you finish a unit of work, update Sections 3, 5, and 7 of this file.

**Ground truth (always re-verify with the validator, never trust a doc):**

| Thing     | Actual | Source |
| --------- | ------ | ------ |
| Skills    | 52     | `manifest.yaml` (includes the `healing-swarm` orchestration skill, entry #52) |
| Agents    | 38     | `manifest.yaml` agents block / `npm run validate` (includes `swarm-conductor`) |
| Workflows | 25     | `npm run sync:timeline` (real `*.yaml` workflow files) |

> **Count canon, settled in Phase 2:** use `npm run sync:timeline` — it is the
> single source of truth. Note: `validate-skills.js` prints "36 workflows" but that
> figure wrongly counts 11 `manifest.yaml` files as workflows; the honest count is
> **25**. The docs ("53 skills") were an off-by-one — the orchestrator skill is
> already inside the 52, so the canonical skill count is **52**.

---

## 2. What this effort is

Optimizing the repo for Opus 4.8. No shipped code calls the Anthropic API, so
this is **not** about model-ID bumps. It's four levers, all currently off:

1. **Triggering** — zero `SKILL.md` files; skills only fire on exact slash commands.
2. **Model tiering** — no agent pins a model.
3. **Parallel dispatch** — orchestrator describes parallelism but never invokes it.
4. **Enforceable gates** — quality gates are prose; ethics veto is honor-system.

Full reasoning and per-task detail are in the driving plan.

---

## 3. Phase status

Statuses: `Not started` · `In progress` · `Blocked` · `Done`.
Update the status, the date, and the note whenever you touch a phase.

| Phase | Title | Status | Updated | Note |
| ----- | ----- | ------ | ------- | ---- |
| 0 | Make validators honest | Done | 2026-05-31 | `npm run validate` runs both validators clean; standalone-aware workflow check, dup-trigger + existence checks added; 10 workflow-less skills marked `standalone` |
| 1 | Quick-win cleanup + honesty fixes | Done | 2026-05-31 | `packages/` + 3 empty template dirs deleted; dead scripts (build:docs, serve-docs) + Jekyll `.gitignore` block removed; ethics/claims gates now exit non-zero; CI `npm ci`; eslint/prettier/vitest configs added |
| 2 | Eliminate doc drift + automate | Done | 2026-06-02 | All counts reconciled to manifest truth (52/38/25); `sync-timeline.js` (canonical counts + `--check` gate) + `generate-reference.js` (rebuilds skills/agents refs) wired into `npm run validate` + CI; CHANGELOG date typo fixed; CONTRIBUTING timeline rule added; family-nexus represented as a worked example |
| 3 | SKILL.md generation + description rewrites | Done | 2026-06-02 | 52 `SKILL.md` generated from manifest + `skill-discovery.yaml`; `generate-skills.js` codegen + discovery linter in `npm run validate`; sensitive skills carry "Do NOT auto-launch" guards (conservative default for open Q1); overlapping triggers de-duped via disjoint "Use when" + cross-refs; `create-skill.js` repaired + emits discovery entry. CAVEAT: verify Claude Code discovers SKILL.md at `healing-swarm/<name>/` (nested, not top-level `.claude/skills/`). |
| 4 | Model tiering + prompt slimming | Mostly done | 2026-06-02 | Opus-everywhere policy in `settings.models` (no downgrade); extended-thinking cues on swarm-conductor + ethics-guardian; content-writer slimmed (~190 inlined template lines removed); `shared/evidence-language.md` extracted (shared 9→10). DEFERRED polish: per-research-agent tool-use guidance, closing-quote stripping, worked-example upgrades. |
| 5 | Parallel orchestration + enforceable gates | Mostly done | 2026-06-02 | JSON gate contract + `check-gates.js` harness (unit-tested); 4 reviewers emit gate blocks; fan-out in conductor prompt + content + research workflows; sensitive skills declare `requires` + validator safety check. DEFERRED: validator gate-token check, template-schema reconcile, full DAG rename (decision 0b). |
| 6 | Runtime decision | Done | 2026-06-02 | ADR-004: Path A + thin veto harness (`check-gates.js`); ethics + accessibility veto enforced deterministically. Path B SDK runner deliberately not built. |

**Suggested order:** 0 → 1 → 2 first (low risk). Phase 3 is highest impact and
can run alongside 1-2. Phase 5 follows the Phase 6 runtime call. Each phase
leaves the repo shippable; none requires the next.

---

## 4. Decisions locked (do not relitigate without the human)

0. **Model policy (2026-06-02):** **Opus 4.8 at high reasoning effort for every
   agent.** No Sonnet/Haiku downgrade anywhere — voice and safety consistency on
   user-facing healing content outweighs cost. (Resolves Q2.)
0b. **Phase 5 (2026-06-02):** proceed on the agent's recommendation — add real
   fan-out + a structured gate contract + per-skill `requires`; **defer** the
   full ~24-file DAG-notation rename (high churn, low marginal value now).
   (Resolves Q5 as "not now.")
0c. **Phase 6 (2026-06-02):** **yes** — Path A (LLM executor) plus a thin harness
   that enforces only the ethics + accessibility veto via the Phase 5 JSON gate
   contract. Do not build the full Path B SDK runner yet.

1. **Skill format:** generate native `SKILL.md` from the manifest; keep
   `manifest.yaml` as source of truth. (Not a hard cutover.)
2. **Empty `packages/{cli,core,web}`:** delete for now.
3. **Runtime:** undecided — plan recommends Path A (LLM executor) plus a thin
   harness for the ethics/accessibility veto only. Confirm before building Path B.
4. **Scope:** full, phased.

---

## 5. Open questions owned by the human (get answers before acting)

2. **Model-downgrade tolerance?** Sonnet/Haiku acceptable for user-facing healing
   content, or Opus everywhere for voice/safety consistency? (Blocks Phase 4 tiers.)
5. **DAG-rename appetite?** The single-notation parallelism change touches ~24
   workflow files. (Blocks the schema-unification part of Phase 5.)

**Provisionally decided by default (confirm or change):**

1. **Auto-trigger sensitive skills?** → Applied the **conservative default**
   (Phase 3, 2026-06-02): general skills are auto-discoverable; the 6 sensitive
   skills (`shadow-work`, `resonance-pairing`, `orbital-journey`, `umwelt-practice`,
   `grief-healing`, `language-awareness`) carry explicit "Do NOT auto-launch from
   loose cues" guards in their `SKILL.md` and `skill-discovery.yaml`. The human can
   tighten these to slash-only or loosen them; edit `skill-discovery.yaml` +
   `npm run generate:skills`.

### Resolved

3. **`family-nexus-healing`: example or shipped skill?** → **Example only**
   (human, 2026-06-02). Stays out of all counts; represented in both timelines as a
   worked example. No manifest change.
4. **Canonical "skill" definition?** → **52** (human chose "count the orchestrator",
   2026-06-02). Key correction: the orchestrator skill (`healing-swarm`) is *already*
   entry #52 in the manifest, so counting it yields 52, not 53. "53" was an
   off-by-one. `swarm-conductor` is its agent (1 of 38). Count canon now lives in
   `scripts/sync-timeline.js`.

---

## 6. Key facts a fresh agent will want (so you don't re-discover them)

- **The validators currently lie.** `validate-manifest.js` errors on legitimate
  `standalone` skills and warns on every skill for a dead `requires` check. It is
  NOT in the default `npm run validate` (only `validate-skills.js` runs). Fix in
  Phase 0 before trusting it.
- **Two gates are theater.** `scripts/check-ethics.js` and `scripts/lint-prompts.js`
  both end `process.exit(0)` unconditionally. The medical-claims regex only matches
  the literal quoted string `"will cure"`. Phase 1 fixes these.
- **Dead scripts:** `npm run build:docs` (missing `scripts/build-docs.js`) and
  `serve-docs` (Jekyll, replaced by Docusaurus). Remove in Phase 1.
- **The real app** is `examples/family-nexus-healing/phase-c/` (a client-side PWA),
  not `packages/web` (empty).
- **Dangling references (verify before acting):** some manifest skills point at
  workflow files that may not exist (e.g. `coherence-workflow.yaml`,
  `syntergic-workflow.yaml`, `archaeoacoustic-toning-workflow.yaml`).
- **Five review agents** produced the source findings on 2026-05-31; their detail
  is distilled into the driving plan. No need to re-run them unless the repo
  changed materially.
- **The flagged "dangling" workflow refs were false alarms.** All of
  `coherence-workflow.yaml`, `syntergic-workflow.yaml`,
  `archaeoacoustic-toning-workflow.yaml` (and the rest) exist on disk. The new
  existence checks in `validate-manifest.js` confirm zero dangling references.
- **10 workflow-less skills were marked `standalone: true`** in Phase 0 so the
  honest validator passes: `group-perception`, `sound-healing`,
  `somatic-practice`, `sleep-healing`, `nature-healing`, `water-healing`,
  `grief-healing`, `expressive-healing`, `community-healing`,
  `contemplative-inquiry`. They genuinely have no orchestrated workflow. This is a
  low-risk reconciliation, not a Phase-5 "generate a workflow vs mark improvised"
  decision — that choice is still open. Standalone count: 17 → 27.
- **`scripts/create-skill.js` is BROKEN** — genuine syntax error
  (`Unexpected end of input`, file ends ~line 525 truncated). `npm run
  create-skill` cannot run today. Not in Phase 0/1 scope; Phase 3 already plans to
  rewrite this script, so fix it there. CI does not run it, so no gate is blocked.
- **Claims linter is now context-aware.** `lint-prompts.js` flags affirmative,
  unquoted outcome promises ("the breathing will heal your nervous system") but
  skips claim phrases quoted inside anti-pattern / "DON'T use" teaching blocks
  (✗, "overclaiming", review-session examples). This keeps the gate trustworthy
  instead of crying wolf on pedagogical examples. The 3 exempt ethics agents
  (`deploy/content-manager`, `deploy/devops-specialist`,
  `quality/accessibility-auditor`) are an explicit allowlist in `check-ethics.js`.

---

## 7. Activity log (newest first — append, don't overwrite)

- **2026-06-02** — **Phases 5 + 6.** Built the structured gate contract and its
  enforcer: `scripts/check-gates.js` (`extractGates`/`evaluateGates`, veto gates =
  ethics + accessibility) with `scripts/check-gates.test.js` (9 tests, run by
  `npm test`). The four reviewers (ethics-guardian, clinical-reviewer,
  cultural-reviewer, accessibility-auditor) now emit a REQUIRED fenced-JSON gate
  block first. Added fan-out directives (content per-artifact, research
  per-tradition) and a parallel-dispatch directive in the conductor. Wired
  auditable safety context: the 6 sensitive skills declare
  `requires: [crisis-response, contraindications]`, enforced by a new
  validate-manifest check sourced from `skill-discovery.yaml`. Recorded the
  runtime decision in **ADR-004** (Path A + thin veto harness; Path B deferred).
  Made `npm test` one-shot (`vitest run`) and added `test:watch`. All gates green.
  Deferred: validator gate-token check, template-schema reconcile, full DAG rename.
- **2026-06-02** — **Phase 4 (core).** Locked Opus 4.8 high-effort everywhere
  (`settings.models`, resolves Q2 — no downgrade). Added extended-thinking cues to
  `swarm-conductor` (dependency planning) and `ethics-guardian` (competing-values
  escalation). Slimmed `content-writer.md` (dropped ~190 lines of inlined templates
  that already live in `content/templates/`, plus the filler closing quote).
  Extracted the evidence-level phrase table into `shared/evidence-language.md` and
  pointed content-writer + ethics-guardian at it (shared 9→10, docs reconciled).
  Also planted the Phase 5 parallel-dispatch directive in the swarm-conductor.
  Deferred: tool-use guidance for the 6 web-research agents, closing-quote
  stripping across ~25 agent prompts, worked-example upgrades. All gates green.
- **2026-06-02** — **Phase 3 complete** (same day as Phase 2). Turned 52
  slash-only skills into auto-discoverable ones: authored
  `.claude/skills/healing-swarm/skill-discovery.yaml` (52 WHAT+WHEN descriptions,
  third person, mined from triggers/examples), built `scripts/generate-skills.js`
  (emits one `SKILL.md` per skill with progressive-disclosure links to
  agents/workflow/templates + a discovery linter), and generated all 52 SKILL.md.
  Took the **conservative default** on open Q1: 6 sensitive skills carry explicit
  "Do NOT auto-launch" guards (see Section 5). De-duped the overlapping research +
  resonance/relational triggers via disjoint "Use when" boundaries and cross-refs.
  Updated the three validators to exclude `SKILL.md` (validate-skills, check-ethics,
  lint-prompts) and `skill-discovery.yaml` (validate-skills, sync-timeline) so
  counts stay honest (still 52/38/25). Repaired `scripts/create-skill.js` (real
  syntax error: orphan `` `; `` at EOF) and updated it to scaffold a discovery
  entry + point at `generate:skills`. Wired `generate:skills --check` into
  `npm run validate`. Added a 2026-06-02 timeline entry to README + website
  changelog + CHANGELOG. All gates green; website builds.
- **2026-06-02** — **Phase 2 complete.** Pinned canonical counts (52 skills / 38
  agents / 25 workflows) after discovering two count bugs: (a) the orchestrator
  skill is already inside the manifest's 52, so "53" was an off-by-one; (b) the
  validator's "36 workflows" silently counts 11 `manifest.yaml` files — real count
  is 25. Built `scripts/sync-timeline.js` (canonical counts + `--check` drift gate
  over README + changelog) and `scripts/generate-reference.js` (regenerates
  `docs/api/skills-reference.md` → all 52, and `agents-reference.md` → all 38, from
  the manifest); both `--check` modes wired into `npm run validate`, which CI already
  runs. Reconciled every count in README.md, website changelog, and the homepage
  component; fixed the CHANGELOG v1.0.0 date typo (2025→2026); added the
  timeline-sync rule + PR-checklist item to CONTRIBUTING.md; added a 2026-04-13
  family-nexus worked-example entry to both timelines. All gates green
  (validate / check:ethics / lint:prompts / test EXIT 0); website builds clean.
  Left untouched: dated historical plan docs under `docs/plans/` (snapshots, not
  living docs).
- **2026-05-31** — **Phases 0 + 1 complete** via a 3-agent parallel run
  (partitioned by file; no conflicts). Phase 0: `validate-manifest.js` is now
  honest — standalone-aware workflow requirement, real `requires_ethics_approval`
  type check (was a 100%-false-positive warning), duplicate-trigger detection,
  and existence checks for every workflow/template/agent reference; wired into
  `npm run validate`; 10 workflow-less skills marked `standalone`. Phase 1:
  deleted `packages/{cli,core,web}` + 3 empty template dirs; removed dead scripts
  `build:docs`/`serve-docs` and the Jekyll `.gitignore` block; made
  `check-ethics.js` (allowlist + non-zero exit) and `lint-prompts.js` (broadened,
  context-aware regex + non-zero exit) real gates; CI switched to `npm ci`; added
  `eslint.config.js` (flat, works on installed eslint 8.57), `.prettierrc`,
  `vitest.config.js` (`passWithNoTests`). All gates verified green:
  validate / check:ethics / lint:prompts / validate:manifest / npm test all
  EXIT 0. Found (not fixed): `scripts/create-skill.js` has a real syntax error —
  defer to Phase 3. Committed to `feat/family-nexus-healing` (with the driving
  plan + this handoff).
- **2026-05-31** — Wired the handoff automation (global, all projects): a
  `SessionStart` hook (`~/.claude/hooks/handoff-surface.mjs`) that auto-surfaces
  this file, a portable `/handoff` skill + template, and a convention in the
  global `CLAUDE.md`. Hook pipe-tested green. No change to the Opus 4.8 phases.
- **2026-05-31** — Five-agent parallel review of the repo. Wrote driving plan
  (`docs/plans/2026-05-31-opus-4-8-optimization.md`) and this handoff. Four
  decisions locked (Section 4). No code changed yet; all phases Not started.

---

## 8. Update protocol (keep this doc honest)

Update this file **at the end of any session that touched the effort**, and
before handing off or clearing context. Minimum updates:

- **Phase status table (Section 3):** status + date + one-line note.
- **Activity log (Section 7):** one dated line on what you did.
- **Decisions / Open questions (Sections 4-5):** move items between them as the
  human answers; never delete a resolved question, mark it resolved with the answer.
- **`Last updated` line at the top:** date + who.

Keep it tight. This is a state file, not a narrative. Detail belongs in the
driving plan or in commit messages.
