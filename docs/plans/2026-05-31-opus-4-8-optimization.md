# Opus 4.8 Optimization Plan — Healing Swarm Skills

**Date:** 2026-05-31
**Author:** Claude (Opus 4.8), from a five-agent parallel review
**Status:** Proposed
**Scope:** Full, phased. Stop after any phase and the repo is better than before.

---

## How this plan was built

Five read-only review agents worked in parallel, one per domain: skill/manifest
architecture, agent prompts, code/tooling, docs/website/examples, and
workflows/orchestration. Their findings converged on the same handful of root
issues, which gives high confidence. Where a single agent's claim rested on thin
evidence, it's flagged inline as **(verify first)**.

### Ground truth (from `npm run validate` + manifest parse)

| Thing      | Actual | Notes |
| ---------- | ------ | ----- |
| Skills     | 52     | Defined in `manifest.yaml` |
| Agents     | 38     | Validator-confirmed |
| Workflows  | 36     | Validator-confirmed |

Almost every count printed in the docs is wrong (see Phase 2). Treat the
validator output as canonical from here on.

### Decisions taken (owner-confirmed 2026-05-31)

1. **Skill format:** generate native `SKILL.md` from the manifest; keep
   `manifest.yaml` as the source of truth.
2. **Runtime:** undecided — this plan recommends a path (Phase 6).
3. **Empty `packages/{cli,core,web}`:** delete for now.
4. **Scope:** everything, phased.

---

## What "optimize for Opus 4.8" actually means here

No shipped code calls the Anthropic API or Agent SDK today. The skills are
markdown/YAML prompt specs that Claude Code reads at runtime, and the one real
app (`examples/family-nexus-healing/phase-c`) is a client-side PWA. So
"optimize for Opus 4.8" is **not** about bumping model IDs in code. It's four
concrete levers:

1. **Triggering** — Opus 4.8 + current Claude Code auto-discover skills by
   semantic match on a `SKILL.md` `description`. This repo has zero `SKILL.md`
   files, so all 52 skills can only fire on an exact slash command. The model's
   discovery is switched off.
2. **Model tiering** — nothing pins a model. A 38-agent swarm running every
   agent at one tier wastes money on mechanical work and under-powers the hard
   reasoning (ethics adjudication, orchestration, research synthesis).
3. **Parallel subagent dispatch** — the orchestrator describes parallelism in
   illustrative YAML but never instructs the model to emit multiple `Task`
   calls in one turn. The swarm's defining capability is left on the table.
4. **Structured outputs** — every quality gate is natural-language prose with no
   checker behind it. "blocking: true" and "cannot_override: true" are
   honor-system. Opus 4.8 structured outputs can make gates machine-checkable.

---

## Phase 0 — Establish ground truth and a safety net

**Goal:** make the validators tell the truth before changing anything they guard.

Tasks:

- Fix `scripts/validate-manifest.js`:
  - Require `workflow` only when `standalone` is not true (currently line ~72
    errors on the ~15 legitimate standalone skills).
  - Replace the dead `requires: ['ethics-guardrails']` warning (~line 94) with a
    check on `requires_ethics_approval`, the field that actually exists. As
    written it fires for 100% of skills, training maintainers to ignore warnings.
  - Add a duplicate-`trigger` check.
- Wire `validate:manifest` into the default `npm run validate` once it's honest.
- Add existence checks for every referenced `workflow`, `template`, and agent
  `prompt` path. This catches dangling references such as
  `research/coherence-workflow.yaml`, `research/syntergic-workflow.yaml`,
  `content/archaeoacoustic-toning-workflow.yaml` **(verify first — inferred from
  Glob, not stat'd)**.

**Effort:** Quick. **Risk:** low. **Exit:** `npm run validate` runs both
validators clean, and a deliberately broken reference fails CI.

---

## Phase 1 — Quick-win cleanup and honesty fixes

**Goal:** delete misleading scaffolding and close the false-confidence gates.

Tasks:

- **Delete empty placeholders:** `packages/cli`, `packages/core`, `packages/web`
  (confirmed empty, untracked). Drop the implied-monorepo signal.
- **Remove dead scripts** in root `package.json`: `build:docs` (points at
  `scripts/build-docs.js`, which never existed) and `serve-docs` (Jekyll, which
  was replaced by Docusaurus). Remove the orphaned Jekyll block from
  `.gitignore` (~lines 66-71).
- **Populate or remove empty template dirs:** `templates/content-only`,
  `templates/mobile-app`, `templates/web-app` are empty shells.
- **Make the ethics/medical-claims gates real:**
  - `scripts/check-ethics.js` ends with an unconditional `process.exit(0)`
    (~line 130). Change to exit non-zero when agents are missing the ethics
    reference. Decide whether the 3 current non-referencing agents
    (`deploy/content-manager.md`, `deploy/devops-specialist.md`,
    `quality/accessibility-auditor.md`) are intentional.
  - `scripts/lint-prompts.js` also ends `process.exit(0)` (~line 253) and its
    medical-claims regexes (~lines 175, 179) only match the literal quoted
    strings `"will cure"` / `"science proves"`. Real prose like
    `this will heal you` passes untouched. Broaden to
    `/\b(will|can|guaranteed to)\s+(cure|heal|fix|treat)\b/i` and
    `/\bscience proves\b/i`, and exit non-zero on hard findings.
- **CI reproducibility:** switch `npm install` to `npm ci` in `test.yml` and
  `validate-pr.yml` (lockfile is committed; `pages.yml` already does this).
- **Add missing tool configs so the wired gates aren't no-ops:**
  `eslint.config.js` (flat config, consider eslint 9), `.prettierrc`,
  `vitest.config.js`.

**Effort:** Quick across the board. **Risk:** low. **Exit:** no dead script
references; ethics/claims gates can fail a bad PR; `npm run lint` and
`npm test` do something real.

---

## Phase 2 — Eliminate doc drift, then automate it away

**Goal:** stop hand-maintaining three timelines that already disagree.

The drift is severe. Skill count is claimed as 47 (`README.md:285`), 53
(`README.md:608` and `website/docs/changelog.mdx:360`), and 35 (the
`docs/api/skills-reference.md` table) against an actual **52**. Agent count is
claimed as 26 and 30 against an actual **38**. The largest recent work
(`examples/family-nexus-healing/`) appears in none of the timelines, despite the
CLAUDE.md workflow that mandates updating all three. The manual process is
already failing.

Tasks:

- **Reconcile every hardcoded count** to 52 / 38 / 36 in `README.md`
  (~285-286, ~608-611) and `website/docs/changelog.mdx` (~360-365).
- **Rebuild `docs/api/skills-reference.md` and `agents-reference.md` from the
  manifest** (the skills reference is missing ~17 of 52 skills, so it's wrong,
  not just stale).
- **Fix the `CHANGELOG.md` 1.0.0 date** (`2025-01-01` → `2026-02-02`, a
  year typo).
- **Add the timeline-update rule to `CONTRIBUTING.md`** so human contributors
  know it exists.
- **[Highest leverage] Generate counts and timelines from the manifest.** Add
  `scripts/sync-timeline.js` that emits the Cumulative Totals table and a draft
  changelog row, plus a CI check that fails when README/changelog counts
  disagree with the manifest. This kills the entire drift class and replaces the
  heavy triple-update CLAUDE.md workflow with a generated artifact.

**Effort:** Medium (the generator), Quick (the manual reconcile). **Risk:** low.
**Exit:** one source of truth; CI rejects count drift; family-nexus is
represented (as example or skill, per the open question below).

---

## Phase 3 — Opus 4.8 triggering: SKILL.md generation + description rewrites

**Goal:** turn 52 slash-command-only skills into auto-discoverable skills.

Tasks:

- **Rewrite all 52 `description` fields to the WHAT + WHEN pattern**, third
  person: *"<what it produces>. Use when the user wants <situation A>, asks for
  <phrase B>, or mentions <C>. Do NOT use for <X>."* The trigger phrases already
  exist in each skill's `example_usage` block; mine them. Start with the thin
  one-liners: `sound-healing` (:523), `somatic-practice` (:692),
  `nature-healing` (:770), `water-healing` (:794), `sleep-healing` (:731),
  `walking-meditation` (:712), `dream-practice` (:751).
- **Write a codegen script** (`scripts/generate-skills.js`) that, for each
  manifest skill, emits `.claude/skills/healing-swarm/<skill>/SKILL.md` with
  frontmatter (`name`, `description`) and a body that links agents, templates,
  and workflow as on-demand reference files (progressive disclosure). Manifest
  stays the build input.
- **Tune descriptions conservatively for the sensitive skills.** `/shadow-work`,
  `/orbital-journey`, `/resonance-pairing`, grief and trauma-adjacent skills
  should bias toward "Do NOT use" so the model doesn't auto-fire them on loose
  conversational cues. Auto-discovery is a feature for `/sound-healing`; it's a
  risk for `/shadow-work`.
- **De-duplicate the overlapping trigger surface.** Nine research skills
  (`healing-research`, `traditions-research`, `clinical-research`,
  `mechanism-mapping`, `pni-research`, `pni-mapping`, `sound-research`,
  `syntergic-research`, `cyberdelic-research`) will collide semantically once
  descriptions drive triggering. Either give each a sharply disjoint "use when"
  boundary, or collapse them behind a `--domain` parameter. Same for
  `resonance-pairing` vs `relational-practice` (the manifest already notes the
  overlap).
- **Update `scripts/create-skill.js`** to emit a native `SKILL.md` with a
  WHAT+WHEN description prompt, and fix its wrong templates path (it reads
  `../templates`; the real ones live in `_templates/`). Otherwise every new
  skill re-introduces the old anti-pattern.
- **Add a description linter** to the validator: minimum length, must contain a
  "when"/"use when" token, third person. Cheapest single win for triggering.

**Effort:** Large (descriptions are 52 careful rewrites; codegen is medium).
**Risk:** medium — auto-triggering sensitive skills is the thing to get right.
**Exit:** every skill has a `SKILL.md`; the description linter passes; sensitive
skills are conservatively gated.

---

## Phase 4 — Model tiering and agent-prompt slimming

**Goal:** put the right model on each job and stop paying to re-send boilerplate.

Tasks:

- **Add a `model` field to the manifest agent block** (~lines 1199-1373):
  - **Opus:** `swarm-conductor`, `ethics-guardian`, and the researchers
    (`consciousness-researcher`, `clinical-researcher`, `traditions-scholar`,
    `mechanisms-neuroscientist`, `hyperhumanism-researcher`,
    `integral-researcher`, `pni-researcher`, `clinical-reviewer`).
  - **Sonnet:** the ~20 content guides/facilitators, `visual-designer`,
    component-spec generation.
  - **Haiku:** purely mechanical formatting (`content-manager`).
  - If the current runtime doesn't read a per-agent model field, this is
    documentation-only for now — still cheap and future-proofs Phase 6.
- **Cut prompt bloat (350-680 lines each).** Highest-value targets:
  - Remove the inlined templates from `content/content-writer.md` (~lines
    88-280); the same templates already exist as files under
    `content/templates/` and the agent loads them anyway. ~190 redundant lines
    in one file.
  - Extract the repeated `## Loaded Context` block and the Evidence-Level →
    phrase table (duplicated across `ethics-guardian.md`, `content-writer.md`,
    `consciousness-researcher.md`) into a single `shared/` reference; replace
    per-agent copies with a one-line pointer.
  - Drop the closing inspirational quotes (pure tokens, no behavioral payload).
- **Add tool-use guidance to research agents.** They're handed
  `WebSearch`/`WebFetch` by the manifest but their prompts write search
  strategies as prose pseudo-queries (e.g. `consciousness-researcher.md`
  ~124-189). Convert to explicit "call WebSearch with X, WebFetch the top
  results, cite PMID/DOI" instructions.
- **Add an extended-thinking cue** to the two hardest reasoners
  (`swarm-conductor` dependency planning, `ethics-guardian` competing-values
  escalation). One line each.
- **Replace placeholder examples** with one concrete worked input → output per
  agent, prioritizing the generation agents where output quality is the product.

**Effort:** Medium (tiering, slimming), Large (worked examples). **Risk:**
medium — confirm downgrading content agents to Sonnet/Haiku is acceptable for
voice/safety consistency on user-facing healing content (open question below).
**Exit:** every agent has a model tier; the heaviest prompts shrink toward
150-250 lines; researchers have tool-call guidance.

---

## Phase 5 — Parallel orchestration and enforceable gates

**Goal:** actually use Opus 4.8 fan-out, and make "blocking" mean blocking.

### Parallelism

- **Fan out content creation.** Independent artifacts (prayers, visualizations,
  practices, evidence-boxes) are generated by a single serial `content-writer`
  today. Replace with `fan_out: { over: content_requirements.items, agent:
  content-writer, await: all }` in `orchestrator/workflow.yaml` and
  `content/workflow.yaml`. This is the clearest N-way win.
- **Fan out research per-tradition.** The swarm-conductor already sketches
  "Research TCM" + "Research Jewish prayers" as separate async tasks (~lines
  236-253) but no workflow encodes it. Promote to a real `fan_out` over
  `identified_traditions` in `research/workflow.yaml`.
- **Fan out `whm-journey`** over its three pillars (breathing, cold, commitment)
  and over weeks — independent given the research brief. **(verify first —
  inferred from agent count, not from reading its parallel block.)**
- **Give the orchestrator an explicit parallel-dispatch directive:** "When tasks
  in a phase are independent, emit multiple `Task` calls in a single response;
  serialize only across dependency edges." Converts described capability into
  real behavior.
- **Unify the parallelism notation.** Three notations coexist
  (`parallel_phases` map, per-stage `parallel: true`,
  `integration.parallel_execution` list). Converge on a single per-stage
  `depends_on: [...]` field; stages with no unmet dependency run concurrently.
  The conductor then has a real DAG to fan out. This is a corpus-wide rename
  across ~24 workflow files (confirm appetite — open question).

### Enforceable gates

- **Define a structured gate-output contract.** Require every reviewer to emit a
  fenced JSON block: `{ "gate": "ethics", "status": "pass|fail|veto",
  "blocking": true, "issues": [{severity, location, fix}] }`. Keep the
  human-readable markdown as a secondary rendering. A small
  `scripts/check-gates.js` (and the conductor at runtime) reads `status` instead
  of trusting prose. This is the highest-leverage gate change: it turns
  `cannot_override: true` from honor-system into checkable.
- **Wire `accessibility-auditor` to an actual axe-core command** (it already has
  `Bash`); have the accessibility gate consume the JSON report.
- **Add gate-token validation** to `validate-skills.js`: every
  `gates.*.checks` token and `quality_gates.<stage>` key must map to a known
  check or an existing stage. Catches typos and orphaned gates.

### Context loading

- **Make `requires:` real and per-skill.** Keep only `ethics-guardrails`
  always-on. Add `requires: [ethics-guardrails, contraindications,
  crisis-response]` to sensitive skills (grief, shadow-work, resonance, orbital,
  umwelt, sound-consciousness) and a minimal set to light ones. Retire the inert
  `load_order` field (no code reads it).
- **Validator safety check:** any skill in grief/consciousness/perception
  categories, or whose workflow mentions dissociation/trauma/crisis, MUST list
  `crisis-response.md` and `contraindications.md` in `requires`. Makes the
  safety-context loading auditable instead of trusting each agent's prose.

### Schema hygiene

- **Reconcile `_templates/workflow.template.yaml` with the real corpus:** drop
  the `invokes:` key (no real workflow uses it), use `agent:` directly; converge
  `critical: true` / `gate: must_pass` / `veto_power` onto one `gate:` enum
  (`advisory | blocking | veto`).
- **Decide the ~10 workflow-less standalone skills:** either generate a minimal
  `*-workflow.yaml` for each, or mark them explicitly
  `orchestration: agent-improvised` so the gap is intentional and visible.

**Effort:** Medium (fan-out, gate contract), Large (DAG rename). **Risk:**
medium. **Exit:** content and research fan out; gates are machine-readable;
sensitive skills provably load crisis/contraindication context.

---

## Phase 6 — Runtime decision (recommendation)

**This is the open architectural question.** Everything above improves the repo
under either answer, but how far Phases 4 and 5 can go depends on it.

**Path A — Claude Code reads YAML as instructions (status quo).**
The LLM is the executor. Model tiering, parallelism, and gates are all
prompt-driven. Gates are as strong as the prompt. Phases 0-5 still apply; the
structured gate contract (Phase 5) gives the conductor something concrete to
check even without a deterministic wrapper. Lowest cost, no new runtime to
maintain.

**Path B — thin deterministic harness / Agent SDK.**
A small Node runner (living in a real `packages/core` + `packages/cli`, the ones
deleted in Phase 1, recreated with intent) reads the manifest, spawns subagents
via the Agent SDK, pins `claude-opus-4-8` / `claude-sonnet-4-6` /
`claude-haiku-4-5` per the Phase 4 tiers, dispatches independent stages in
parallel, and **enforces** the blocking/veto gates by parsing the Phase 5 JSON
contract before allowing the next stage. This is where prompt caching pays off:
cache the always-on `ethics-guardrails.md` + `terminology.md` + `voice-guide.md`
context across the whole swarm.

**Recommendation:** start on **Path A** and build toward **Path B** only for the
two gates that must be non-negotiable (ethics veto, accessibility AA). Reason:
the safety architecture is the project's core asset, and honor-system
enforcement of a veto is the one place prose isn't good enough. A ~200-line
harness that does nothing but parse the ethics/accessibility gate JSON and halt
on failure buys most of Path B's safety value at a fraction of the cost. Defer
the full SDK runner until there's a real need to run the swarm outside an
interactive Claude Code session.

---

## Open questions still owned by the human

1. **Auto-triggering sensitive skills:** acceptable for the model to discover
   `/shadow-work`, `/orbital-journey`, `/resonance-pairing` from conversation,
   or should those stay slash-command-only even after `SKILL.md` migration?
   (Phase 3 biases conservative by default.)
2. **Model downgrade tolerance:** is Sonnet/Haiku acceptable for user-facing
   healing content, or do you want Opus everywhere for voice/safety consistency?
   (Phase 4.)
3. **`family-nexus-healing`:** example or shipped skill? It's far larger than the
   other examples and absent from the manifest. Determines whether it gets
   counted and folded into the timelines. (Phase 2.)
4. **Canonical "skill" definition:** the totals say 53, the manifest has 52, the
   orchestrator may or may not count as a skill. Pin the definition before
   automating counts. (Phase 2.)
5. **DAG-notation rename appetite:** the single-notation parallelism change
   touches ~24 workflow files. Worth it for clean fan-out, but confirm before
   anyone edits every workflow. (Phase 5.)

---

## Suggested sequencing

Phases 0 → 1 → 2 are independent quick/medium wins with low risk; do them first
and in order (0 before anything that trusts the validators). Phase 3 is the
highest-impact Opus 4.8 change and can start in parallel with 1-2. Phase 4
depends on nothing but benefits from Phase 3's codegen. Phase 5 is the deepest
work and should follow the runtime call in Phase 6. None of the phases require
the next; each leaves the repo in a better, shippable state.
