# Six-Lens Review Improvements — Design + Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development
> (recommended) or superpowers:executing-plans to implement this plan task-by-task.
> Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the confirmed findings of the 2026-07-27 six-lens review team
(build health, content quality, safety, tooling, docs, growth) and add the
highest-value new content the reviews identified.

**Architecture:** Eight phases on one branch (`feat/six-lens-improvements`),
one commit per phase, each leaving the repo green (`npm run validate` +
`npm test` + website build). Fix phases (A–F) precede the additive phase (G).
PR at the end; **no autonomous merge** (governance rule).

**Tech Stack:** Node scripts (no new deps), YAML manifest, Docusaurus website.

## Global Constraints

- `manifest.yaml` is source of truth; `SKILL.md` + `docs/api/*-reference.md` are generated — edit generators/manifest, then regenerate.
- All healing content: evidence-language discipline (`shared/evidence-language.md`), no overclaiming, crisis/contraindication wiring for anything risky.
- Every phase ends with `npm run validate && npm test` green.
- New skills/agents MUST be reflected in README timeline + `website/docs/changelog.mdx` + CHANGELOG (project CLAUDE.md mandate) — done once in Phase H.
- YAML: strings with embedded double quotes use single-quote wrapping.
- Subagents may lack Write permission: subagents DRAFT content and return text; the main session writes files.
- Locked decisions stay locked: Opus-4.8-everywhere for shipped agents; DAG-notation rename stays deferred.

## Design summary (what the six reviews established)

1. **Enforcement is partly decorative.** CI `npm test` has `continue-on-error: true`; yaml/markdown lint end `|| true` yet the summary prints ✅; eslint never runs (2 real errors); `check:ethics`/`lint:prompts` are not in `npm run validate`; the claims regex misses 7/9 overclaim probes (any apostrophe on the line exempts it); `check-gates.js --require` is satisfied by the reviewers' own doc templates; `validate-manifest.js` fails open if `skill-discovery.yaml` is unreadable; sync-timeline can't see a deleted row; no `.gitattributes` (LF churn risk confirmed).
2. **Safety wiring lags the newest content.** `group-perception` (P0) ships deautomatization exercises to groups with no sensitive wiring and a 362-line template with no screening/crisis block. Physically risky skills (WHM trio, water, somatic, sound trio) declare no `requires:`. `context-engineer` + `consciousness-audit` have no crisis path. `contraindications.md` lacks a deautomatization table. Crisis file: no verification stamp, US-default 911 phrasing, numbers hand-copied in 14+ files.
3. **The archaeoacoustics citations contradict each other.** Camp A (terminology.md + toning workflow tables) mis-assigns an EEG finding to Jahn & Dunne 1992 and "confirms" 432 Hz; Camp B (archaeoacoustic-guide, hyperhumanism-researcher, website) is evidence-calibrated. Reconcile to Camp B, and correct the acoustics paper's identity: **Jahn, Devereux & Ibison 1996, JASA 99(2):649-658** (verify via web before applying). "110 Hz King's Chamber" example invocations (4 files) contradict every table (King's Chamber = 117 Hz). One `fMRI` should be `EEG`.
4. **Docs promise things that don't exist.** `/healing-integrate` + Gamification/Narrative/Game "skills" aren't in the manifest (timeline sums to 57 vs actual 54); worked-example path wrong in 4 docs; the 2 newest skills have zero website presence; stale "52" counts at the first onboarding checkpoint; README table missing ~18 skills; CONTRIBUTING paths unprefixed.
5. **Registry drift.** swarm-conductor knows 13 of 39 agents; 26 workflows say `agent: orchestrator` (unregistered name); research/quality agents lack Write despite declared file outputs; `endo-technology-taxonomy.md`, `consciousness-literacy-levels.md` + 4 templates unregistered; `consciousness-audit` declares an output (`literacy-audit.md`) that has no template and agents that don't know the literacy levels; deploy workflow has no ethics stage.
6. **Discovery is broken (empirically confirmed).** SKILL.md files live at `.claude/skills/healing-swarm/<name>/SKILL.md` — one level too deep; none of the 54 skills load in a live session. Fix: `generate-skills.js` additionally emits top-level `.claude/skills/<name>/SKILL.md` from the same discovery data (content unchanged, links point into `healing-swarm/`). Clearly isolated in its own commit for easy revert.
7. **Highest-value additions** (consensus of content + growth reviewers): 6 skills that operationalize orphaned shared resources and close safety loops — `practice-screening`, `adverse-response`, `practice-pathway`, `outcome-tracking`, `foundation-meditation`, `caregiver-support` — plus a `trauma-informed-reviewer` gate agent (5th lens, same JSON gate contract, non-veto blocking).

**Deliberately NOT in scope** (recorded for HANDOFF): full crisis-number
dedup across 14 files (replaced by a consistency check), session-schema
extraction, the 96 advisory prompt-structure suggestions, template-binding
reconciliation (A12), end-of-life companioning skill, prettier enforcement,
Docusaurus 3.10 upgrade, repo→plugin packaging.

---

### Task A: Enforcement honesty (CI + scripts)

**Files:**
- Modify: `.github/workflows/test.yml` (drop `continue-on-error: true` + stale comment from the `npm test` step)
- Modify: `.github/workflows/validate-pr.yml` (remove `|| true` from yaml-lint + markdown-lint steps — FIRST run both locally; fix any real violations or scope configs so they pass honestly; add an eslint step)
- Modify: `package.json` (`validate` += `&& node scripts/check-ethics.js && node scripts/lint-prompts.js && node scripts/check-crisis-numbers.js`)
- Modify: `scripts/check-gates.js` (normalize `blocking` like status/gate: treat `true`/`"true"` as blocking; make `collectFiles` skip the four reviewer prompts under `quality/` so doc templates can't satisfy `--require`)
- Modify: `scripts/check-gates.test.js` (add: string-`"true"` blocking is enforced; `--require` over only `quality/` prompts exits 1)
- Modify: `scripts/validate-manifest.js` (discovery-file read failure = error not warning; add duplicate skill-`name` check)
- Modify: `scripts/sync-timeline.js` (each ENFORCED label must appear ≥1× in each checked file, else drift error)
- Modify: `scripts/lint-prompts.js` (claims regex: drop bare quote chars + `\breplace\b` from negContextRe; extend verbs to `cure|heal|fix|treat|reverse|eliminate|restore|rewire`; add `proven to|clinically proven`; add third-person-singular forms; remove first-hit `break`; add a claims-only pass over `content/templates/`, `shared/`, and SKILL.md files, keeping the anti-pattern-context exemptions so teaching blocks don't cry wolf)
- Modify: `scripts/validate-skills.js:129` (populate/use the dead `warnings` array or delete it), `scripts/create-skill.js:63` (no-async-promise-executor)
- Create: `scripts/check-crisis-numbers.js` (grep tracked content for 988 / 741741 / 1-800-662-4357 / 1-800-222-1222 context lines; verify each matches the canonical numbers in `shared/crisis-response.md`; exit 1 on mismatch)
- Create: `.gitattributes` (`* text=auto eol=lf` plus explicit `*.md eol=lf`, `*.yaml eol=lf`, `*.yml eol=lf`, `*.js eol=lf`, `*.json eol=lf`; do NOT renormalize the index in this PR — note follow-up)

**Interfaces:** Produces a stricter `npm run validate` every later phase must keep green.

- [ ] Run yaml-lint + markdown-lint locally exactly as CI does; record state
- [ ] Apply script edits; add the two new files
- [ ] `npm test` — new check-gates cases pass (11 → ~14 tests)
- [ ] `npm run validate` green (fix any content the stricter linter now legitimately flags; loosen only for true false-positives)
- [ ] `npx eslint .` → 0 errors
- [ ] Commit `fix(enforce): make CI and validators fail for real`

### Task B: Safety wiring

**Files:**
- Modify: `.claude/skills/healing-swarm/manifest.yaml` — add `requires: [shared/crisis-response.md, shared/contraindications.md]` to `group-perception` (~:521), `sound-consciousness`, `holotechnica-stack` (contraindications at minimum), `archaeoacoustic-toning` (contraindications), `whm-breathwork`, `whm-cold-exposure`, `whm-journey`, `water-healing`, `somatic-practice`; append `shared/crisis-response.md` to `consciousness-audit` requires (~:726-733)
- Modify: `.claude/skills/healing-swarm/skill-discovery.yaml:14-20` — add `group-perception` to `sensitive:` (with Do-NOT-auto-launch guard text)
- Modify: `.claude/skills/healing-swarm/content/templates/group-perception-protocol.md` — add screening + stop-signal + crisis-resources block mirroring `language-awareness-protocol.md:51-52`, naming DP/DR risk for Meaning Collapse Circle + Silence Sit
- Modify: `.claude/skills/healing-swarm/content/context-engineer.md:257-265` — add `shared/crisis-response.md` to Loaded Context
- Modify: `scripts/validate-skills.js:165-173` — add `context-engineer.md` to `CRISIS_REQUIRED`
- Modify: `shared/contraindications.md` — new `## LANGUAGE AWARENESS & DEAUTOMATIZATION CONTRAINDICATIONS` table (ABS: active DP/DR, dissociative disorders, psychosis; REL: PTSD — promote list from `content/language-awareness-guide.md:111-114`)
- Modify: `shared/crisis-response.md` — add `> Emergency resources last verified: 2026-07-27` under EMERGENCY RESOURCES; move localization line to top of General Crisis Protocol; inline strings → "call your local emergency number (911 in the US)"
- Modify: `research/consciousness-researcher.md` — "science proves" → "research suggests"
- Modify: `quality/accessibility-auditor.md` — add `## Loaded Context` section
- [ ] Apply, then `npm run generate:skills` (regenerates SKILL.md incl. new safety-context links)
- [ ] `npm run validate && npm test` green
- [ ] Commit `fix(safety): wire crisis/contraindication requirements to all risky skills`

### Task C: Citation reconciliation (110/117 Hz)

- [ ] WebSearch-verify: "Acoustical resonances of assorted ancient structures" = Jahn, Devereux & Ibison, JASA 1996;99(2):649-658; Cook et al. 2008 = EEG (n=30). Record result in commit message.
- Modify (to Camp-B tables + corrected citation): `shared/terminology.md:437,486-490`; `content/archaeoacoustic-toning-workflow.yaml:136-155`; `content/templates/resonance-body-map.md:36`; `content/archaeoacoustic-guide.md` (Jahn & Dunne 1992→Jahn et al. 1996 where it names the acoustics paper); `content/templates/archaeoacoustic-toning.md` (same); `research/hyperhumanism-researcher.md:78,368` (same); `website/docs/skills/archaeoacoustic-toning.mdx:70-71`; `website/docs/examples/archaeoacoustic-toning.mdx:36,38` (fMRI→EEG; citation)
- Modify ("110 Hz King's Chamber"→"117 Hz King's Chamber"): `manifest.yaml:599`; `website/docs/skills/archaeoacoustic-toning.mdx:24` (SKILL.md + skills-reference regenerate)
- 432 Hz rows: grade Low/minimal peer-reviewed support everywhere (matches ethics-guardrails.md:491)
- [ ] `npm run generate:skills && npm run generate:reference`; validate green; commit `fix(citations): reconcile archaeoacoustic evidence to calibrated set`

### Task D: Docs/website truth reconciliation

- Modify: `website/docs/skills/index.mdx:31` + `website/docs/skills/integration.mdx` — reframe Integration/Gamification/Narrative/Game Healing as documentation patterns with real invocation (no fake slash command)
- Modify: `README.md:554-563` + `website/docs/changelog.mdx` 2026-02-02 entries — mark the 4 as "documentation patterns, not shipped skills" (parallel to family-nexus note)
- Modify: `README.md:561`, `CHANGELOG.md:139`, `website/docs/changelog.mdx:65` — hyperhumanism-onboarding path → `.claude/skills/healing-swarm/examples/hyperhumanism-onboarding/`; README Examples section: explain the two example locations
- Create: `website/docs/skills/context-engineering.mdx`, `website/docs/skills/consciousness-audit.mdx`; wire both into `website/sidebars.ts` + `skills/index.mdx` (new "Consciousness Literacy" section)
- Modify: `docs/SETUP.md:59,62`, `website/docs/getting-started.mdx:225,228`, `docs/guides/testing-skills.md:329,332` — replace hardcoded 52s with "should match `npm run sync:timeline`" phrasing
- Modify: `README.md:161-271` — add missing category sections (Integral Theory ×5, Hyperhumanism/Sound ×6, Consciousness Literacy ×2, 2026-02-26 batch ×5); add missing `2026-02-20` timeline entry; label README timeline as condensed digest
- Modify: `CONTRIBUTING.md:75,76,90,127` — prefix `.claude/skills/healing-swarm/`
- Modify: `website/docs/examples/index.mdx` — add family-nexus-healing + hyperhumanism-onboarding entries
- Modify: `website/docusaurus.config.ts` — replace deprecated `onBrokenMarkdownLinks` with `markdown.hooks.onBrokenMarkdownLinks`
- [ ] `cd website && npm run build` green; validate green; commit `docs: reconcile docs/website with shipped reality`

### Task E: Registry + manifest consistency

- Modify: `orchestrator/swarm-conductor.md:115-158` — regenerate registry to all 39 agents (name, category, one-line role, from manifest)
- Modify: all 26 workflow YAMLs — `agent: orchestrator` → `agent: swarm-conductor` (35 refs); add validator check in `validate-manifest.js` (or validate-skills): every `agent:` in workflows resolves to a registered agent
- Modify: `manifest.yaml` tools — add `Write` to the 7 research agents (:1326-1336) and the 4 quality reviewers (gate JSON/report outputs); ethics-guardian keeps Read/Glob/Grep + Write
- Modify: `manifest.yaml` — add `ethics-guardian` to `agents:` of `healing-research` + `healing-content` (they set `requires_ethics_approval`); register `shared/endo-technology-taxonomy.md` in `shared_resources:`; register the 4 orphan Smith templates
- Create: `content/templates/literacy-audit.md` (consciousness-audit's declared output: four literacy clusters × four levels from `shared/consciousness-literacy-levels.md`, evidence-language compliant)
- Modify: `research/hyperhumanism-researcher.md` — add consciousness-literacy assessment section (four clusters, four level labels, pointer to shared resource)
- Modify: `deploy/workflow.yaml` — add ethics-review stage (ethics-guardian, blocking) before ship
- Modify: 22 content guides — add `shared/evidence-language.md` to Loaded Context (one line each); fix 4 inflated labels: `community-facilitator.md:469` (Very strong→Strong, epidemiological), `expressive-guide.md:328-329` (Strong→Moderate; textbook-cite row reworded), `grief-guide.md:416` (Strong→Mixed)
- [ ] Regenerate; validate + test green; commit `fix(registry): reconcile conductor, workflows, tools, and shared-resource registration`

### Task F: Skill discoverability (isolated commit — easy revert)

- Modify: `scripts/generate-skills.js` — additionally emit `.claude/skills/<name>/SKILL.md` (same generated content; relative links adjusted to reach `healing-swarm/...`); `--check` covers both locations
- Modify: `scripts/validate-skills.js` + `check-ethics.js` + `lint-prompts.js` + `sync-timeline.js` — exclude top-level generated SKILL.md from counts (same exclusion pattern as nested)
- [ ] Generate; spot-check one sensitive skill stub keeps its Do-NOT-auto-launch guard; validate green
- [ ] Commit `feat(discovery): emit top-level SKILL.md stubs so skills actually load`

### Task G: New content — 6 skills + 1 gate agent (Opus-drafted)

Order: screening → adverse-response → pathway → outcome-tracking → foundation-meditation → caregiver-support → trauma-informed-reviewer. Each skill = manifest entry + discovery entry + agent prompt (worked example + Loaded Context incl. safety refs) + workflow YAML (or `standalone: true`) + template(s) + website page + sidebar. Drafts by Opus subagents returning full file text; main session writes files; each skill validated before the next drafts land.

1. `practice-screening` (agent `screening-guide`; standalone; template `screening-record.md`) — runs contraindications.md's Tier 1/2/3 questions + decision tree + safe alternatives; output feeds any practice skill. requires: [contraindications, crisis-response].
2. `adverse-response` (agent `adverse-response-guide`; standalone; template `adverse-event-log.md`) — SENSITIVE (auto-launch guard); stabilize → ground → referral level → adapt/retire practice → log; builds on crisis-response.md six-step protocol + per-modality catalog. requires: [crisis-response, contraindications].
3. `practice-pathway` (agent `pathway-planner`; workflow `practice-pathway-workflow.yaml`) — sequenced multi-week plans from `shared/practice-pathways.md` archetypes; homes the orphan templates `ecology-design.md` + `scaffold-progression.md`. requires: [contraindications].
4. `outcome-tracking` (agent `outcome-tracker`; standalone; template `outcome-log.md`) — WHO-5/PSS-10/PSQI/VAS plans from `shared/outcome-measurement.md`; privacy-first; PHQ-9 item-9 → crisis-resources rule stated as a hard rule in the prompt AND lint-checked (extend `check-crisis-numbers.js` to require the rule text in this prompt). requires: [crisis-response].
5. `foundation-meditation` (agent `meditation-guide`; standalone; reuses `practice-instruction.md` template) — plain breath/body-scan/loving-kindness at 5/10/20 min, framework-neutral; the "plain option" the 6 meditation-adjacent skills cross-ref. requires: [contraindications].
6. `caregiver-support` (agent `caregiver-companion`; standalone; template `capacity-check.md`) — boundaries, anticipatory grief, respite micro-practices; asymmetric-care framing. requires: [crisis-response, contraindications].
7. Agent `quality/trauma-informed-reviewer` — 5th gate lens (`"gate": "trauma"`, blocking, non-veto): titration, choice points, exit ramps, orientation vs flooding; same fenced-JSON contract; add to gate-token anti-rot check in validate-skills.js + to `healing-review` skill agents + quality workflow stage.
- [ ] After each: `npm run validate && npm test`; generate skills/reference
- [ ] Commit per skill or one commit `feat(skills): add 6 skills + trauma-informed gate` (implementer's call; prefer per-skill)

### Task H: Timelines, CHANGELOG, HANDOFF, final review

- Modify: `website/docs/changelog.mdx` — new dated section 2026-07-27 (skills/agents/templates/workflows tables per project format) + cumulative totals (60 skills / 46 agents / 27 workflows — recount from sync-timeline output)
- Modify: `README.md` — condensed timeline entry + totals
- Modify: `CHANGELOG.md` — Unreleased or version bump entry
- Modify: `HANDOFF.md` — status, activity log, Last updated; record out-of-scope list from design summary
- [ ] `npm run sync:timeline` → counts match; full validate + test + website build green
- [ ] Dispatch code-review subagent over full branch diff; apply verified findings
- [ ] Push branch; open PR with summary of all 8 phases + review provenance; DO NOT MERGE
