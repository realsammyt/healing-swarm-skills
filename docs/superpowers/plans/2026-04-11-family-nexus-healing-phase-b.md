# Family Nexus Healing — Phase B Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Translate the Phase A synthesis into a protocols kit of ~30–40 ready-to-run protocol files organized by configuration, built sequentially (hardest configuration first) with three-reviewer quality gates between configurations.

**Architecture:** Six sequential configuration builds. Within each configuration, practice-guide subagents are dispatched in parallel to draft protocols in their specialty, and a Content Writer voice-unifies the results. Quality gate (Ethics + Clinical + Cultural) after each configuration before moving to the next. Archetype role-pack pattern preserved throughout for future variant support.

**Tech Stack:** Markdown protocol files; git; Agent tool for practice-guide dispatch; directly-written orchestrator tasks for consolidation and gate verdicts.

**Reference spec:** `docs/superpowers/specs/2026-04-11-family-nexus-healing-design.md`
**Reference synthesis:** `examples/family-nexus-healing/phase-a/phase-a-synthesis.md`
**Phase A gate verdict footer:** contains the deferred-revisions backlog Phase B authoring must address in context.

---

## File Structure (Phase B)

```
examples/family-nexus-healing/phase-b/
├── 00-how-to-use-this-kit.md                     ← entry point for mother/therapist/supervisor
├── 00-triage-one-page.md                          ← "what is the hottest pain right now?"
├── 00-crisis-response-card.md                     ← condensed from synthesis §1.6
├── 00-contraindications-quick-ref.md              ← cross-config quick reference
├── 00-clinician-handoff-sheet.md                  ← one-pager for the family's care team
├── 00-when-things-change.md                       ← re-triage appendix for progression
├── father-with-kids-supervised/                   ← BUILT FIRST (hardest, highest-stakes)
│   ├── entry/
│   │   ├── 01-beginning-ritual-quiet-arrival.md
│   │   ├── 02-shared-sensory-walk.md
│   │   ├── 03-picture-book-together.md
│   │   ├── 04-closing-ritual-three-glads.md
│   ├── middle/
│   │   ├── 05-sensory-bin-play.md
│   │   ├── 06-songs-we-remember.md
│   │   ├── 07-simple-snack-together.md
│   ├── deepening/
│   │   ├── 08-shared-drawing-each-adds.md
│   │   ├── 09-water-listening.md
├── mother-with-kids/
│   ├── daily-regulation/
│   │   ├── 10-morning-anchor.md
│   │   ├── 11-bedtime-ritual-non-negotiable.md
│   │   ├── 12-after-school-decompression.md
│   ├── processing-confusion/
│   │   ├── 13-why-cant-daddy-live-with-us-script.md
│   │   ├── 14-how-was-your-heart-today.md
│   ├── grief-windows/
│   │   ├── 15-emergency-co-regulation-90-seconds.md
├── each-child-alone/
│   ├── age-5-boy/
│   │   ├── 16-drawing-folder-he-owns.md
│   │   ├── 17-sensory-bin-solo.md
│   │   ├── 18-bedtime-story-from-daddy-voice.md
│   ├── age-8-girl/
│   │   ├── 19-simple-prompted-journal.md
│   │   ├── 20-protected-one-on-one-with-mom.md
│   │   ├── 21-externalizing-the-forgetting.md
├── father-alone/
│   ├── presence-anchors/
│   │   ├── 22-daily-dignity-rhythm.md
│   │   ├── 23-fifteen-minute-pre-visit-centering.md
│   ├── dignity-rituals/
│   │   ├── 24-morning-sensory-anchor.md
│   ├── connection-capsules/
│   │   ├── 25-bedtime-story-voice-recording.md
│   │   ├── 26-one-sentence-letter.md
│   │   ├── 27-shared-book-that-lives-in-both-houses.md
├── mother-alone/
│   ├── container-practice/
│   │   ├── 28-daily-five-minute-anchor.md
│   │   ├── 29-weekly-grief-window.md
│   │   ├── 30-weekly-rest-container.md
│   ├── peer-isolation-work/
│   │   ├── 31-one-peer-pathway.md
│   │   ├── 32-specific-ask-practice.md
│   ├── re-centering/
│   │   ├── 33-fast-reset-sixty-seconds.md
│   │   ├── 34-im-at-the-edge-escalation.md
└── family-together/
    └── ritual-moments/
        ├── 35-seasonal-family-ritual-stub.md
        ├── 36-milestone-marker-stub.md
```

*Total: ~36 protocols + 6 orchestration files = ~42 files.*

---

## Protocol File Template (every protocol uses this structure)

```markdown
# [Title]

**Configuration:** [father-with-kids-supervised / mother-with-kids / etc.]
**Duration:** [e.g., 15 minutes]
**Energy cost:** [low / medium / high]
**Age range:** [if applicable — e.g., 5–8; or specific ages]

## Why this practice
[1 paragraph. Sourced to Phase A synthesis section. What does this practice
 offer? What does the research or traditional wisdom behind it say? "May help"
 language only.]

## You'll need
- [Materials, environment, people]
- [Prep — e.g., "choose a quiet room," "have water available"]

## Before you start
- [Safety check]
- Exit permission explicit: "You can stop at any step. Stopping is a win, not
  a failure."

## ⚠ When NOT to use this
- [Contraindication flags from Phase A synthesis §5 matrix for this config +
  the Contraindications DB]
- [Situational flags: hard day, acute distress, recent regression, ...]
- [Relational flags: supervisor not cleared, either party said no today, ...]

## The practice
1. [Numbered steps. Plain language. Written so a tired person at 10pm can
    follow.]
2. [...]

## Role-specific voice (only where energy is role-specific)
### Holding-parent voice
[Language, metaphor, tradition references tuned to the one carrying the
 container. In this flagship build: mother-specific. Where the traditions
 being drawn on are Jewish/Christian/Buddhist/etc., name which.]

### Changing-parent voice
[Language, metaphor, tradition references tuned to the one whose presence
 becomes the practice. In this flagship build: father-specific.]

## Signals to slow down or stop
- **In the [father / child / self]:** [Specific observable signals — not
  generic boilerplate. Concrete to this configuration.]
- **What to do when you see these:** [Brief de-escalation + exit ramp;
  reference §1.6 of the synthesis for crisis escalation.]

## Modifications
- [Shorter version]
- [Lower-energy version]
- ["The father is having a hard day" version where applicable]
- [Wheelchair/seated version where applicable]

## After
[3-line optional reflection prompt. No scoring. No pressure.]

## Cross-references
- Phase A synthesis §[...]
- Related protocols: [...]
- Related tradition(s): [...]

## Traditions honored
[Lineage attribution. Specific, not generic. "In the Jewish tradition..." etc.]
```

---

## Build Order (Sequential, Review Between Every Step)

**1. `father-with-kids-supervised/`** — hardest, highest stakes. Built first.
**2. `mother-with-kids/`** — daily load. Built second.
**3. `each-child-alone/`** — separate subfolders for 5yo and 8yo. Built third.
**4. `father-alone/`** — dignity-preserving daily rhythm. Built fourth.
**5. `mother-alone/`** — her container work, built with her load already visible. Built fifth.
**6. `family-together/`** — smallest, most aspirational. Built last.

Quality gate (Ethics + Clinical + Cultural) between every configuration. Findings feed forward into later configurations.

---

## Task 0: Initialize Phase B structure and orchestration files

**Files:**
- Create: `examples/family-nexus-healing/phase-b/` (directory)
- Create: `examples/family-nexus-healing/phase-b/00-how-to-use-this-kit.md`
- Create: `examples/family-nexus-healing/phase-b/00-triage-one-page.md`
- Create: `examples/family-nexus-healing/phase-b/00-crisis-response-card.md`
- Create: `examples/family-nexus-healing/phase-b/00-contraindications-quick-ref.md`
- Create: `examples/family-nexus-healing/phase-b/00-clinician-handoff-sheet.md`
- Create: `examples/family-nexus-healing/phase-b/00-when-things-change.md`

- [ ] **Step 1: Create directory**

```bash
mkdir -p examples/family-nexus-healing/phase-b
```

- [ ] **Step 2: Author `00-how-to-use-this-kit.md`**

Drawing on Phase A synthesis §1 and §6.1, write a short entry-point document (~800 words) that:
- States what the kit is and is not (§1.2)
- Names the crisis-response precedence from §1.6 as the top-priority reading
- Explains the archetype role-pack frame (holding-parent / changing-parent / children)
- Lists the six configurations and their directory structure
- Describes the protocol template so readers know what to expect
- Names the six orchestration files (00-*) as first-reading material
- Directs readers to the triage one-page (00-triage-one-page.md) as the next step

- [ ] **Step 3: Author `00-triage-one-page.md`**

Drawing on Phase A synthesis §6.2 (progression logic), write the triage guide (~600 words) that:
- Opens with "what is the hottest pain right now?"
- Maps answers to one starting configuration and one starting practice at entry level
- Names the principle: one practice, one week, then check back
- Includes explicit pause signals from §6.2 and directs to §1.6 if any present
- Offers a short "how we'll know it's working / not working" paragraph

- [ ] **Step 4: Author `00-crisis-response-card.md`**

Condense Phase A synthesis §1.6 into a standalone one-page card (~500 words). Must include: RECOGNIZE · STOP · GROUND · ASSESS · RESPOND · FOLLOW-UP framework, 988 explicitly, pediatric crisis signals, adult crisis signals, one-line instruction for children's distress, the precedence rule ("crisis response takes precedence over every other practice").

- [ ] **Step 5: Author `00-contraindications-quick-ref.md`**

Condense the §5 configuration matrices' contraindication sections into a quick-reference table (~800 words). Organized by configuration, listing Absolute/Relative/Caution flags with brief explanations. Cross-reference each to §1.6 where relevant.

- [ ] **Step 6: Author `00-clinician-handoff-sheet.md`**

One-page (~500 words) document the mother can bring to a family therapist, visit supervisor, or family physician. Describes: what the kit is, what it is not, what practices the family may be doing, how the clinician can observe and feed back what's working. Explicitly not a treatment plan. Addresses the privacy/discoverability concern named in the Ethics Guardian review: this is the ONLY document designed to leave the household.

- [ ] **Step 7: Author `00-when-things-change.md`**

Progression appendix (~800 words) drawing on Phase A synthesis §6.2. When the father's condition progresses, when a child's baseline shifts, when the mother's capacity changes — how to re-triage. Includes the "retire when" criteria for practices (addressing Ethics Guardian revision #16). Names that practices should shift *toward simpler*, not more complex, as cognitive change advances.

- [ ] **Step 8: Commit**

```bash
git add examples/family-nexus-healing/phase-b/
git commit -m "feat(family-nexus): initialize Phase B with orchestration files

Creates the six 00-* orchestration files: how to use, triage, crisis
response card, contraindications quick reference, clinician handoff
sheet, and when-things-change progression appendix. Ready for protocol
authoring starting with father-with-kids-supervised configuration.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 1: Build `father-with-kids-supervised/` configuration (BUILT FIRST)

**Files:**
- Create: `examples/family-nexus-healing/phase-b/father-with-kids-supervised/entry/` (directory with ~4 protocols)
- Create: `examples/family-nexus-healing/phase-b/father-with-kids-supervised/middle/` (directory with ~3 protocols)
- Create: `examples/family-nexus-healing/phase-b/father-with-kids-supervised/deepening/` (directory with ~2 protocols)

**Acceptance criteria:**
- All protocols use the template exactly
- Every protocol is readable by a supervisor (no secrets, no encoded language)
- Every protocol has tailored "signals to slow down or stop" with father-specific and child-specific indicators
- Every protocol references the appropriate Phase A §5.6 contraindications
- Every protocol names at least one tradition explicitly with proper attribution
- "Role-specific voice" subsections present where energy is role-specific (most protocols in this configuration)
- Voice is unified across all protocols (Content Writer sign-off)

- [ ] **Step 1: Dispatch practice-guide subagents in parallel**

For each of the 9 protocols below, dispatch a practice-guide subagent with the specific brief. Agents to use (all general-purpose with role framing):
- **Somatic Guide** → protocols 01, 02, 05, 07
- **Sound Healing Guide** → protocol 06
- **Nature Guide** → protocol 02, 09
- **Expressive Guide** → protocols 03, 08
- **Contemplative Guide** → protocols 01, 04
- **Community Facilitator** → protocol 04

Dispatch all agents in one message (parallel). Each agent receives:
- The target file path
- A brief on the protocol's purpose (drawn from §3.5 and §5.6 of the synthesis)
- The protocol template (above)
- The acceptance criteria
- Explicit instructions to honor: supervisor-readable, father-dignity, 5yo/8yo developmental needs, tradition attribution, signals specificity

The 9 protocols:

1. **`entry/01-beginning-ritual-quiet-arrival.md`** — A simple hello ritual (hand on each child's head, one phrase, one brief song or nothing) that opens every visit with a shape. Sourced to Phase A §3.5 on ritual-bracketed visits. Traditions: Quaker gathered silence, Japanese *ichi-go ichi-e*, Jewish *shehecheyanu*-style blessing (one of these to choose in the Traditions honored section).

2. **`entry/02-shared-sensory-walk.md`** — Slow walk in a quiet park with leaf-finding, stone-gathering, or bird-listening. Sourced to §3.5 Nature activities and §3.3 sensory anchoring. Traditions: forest-bathing (shinrin-yoku), Indigenous open philosophical orientation to relations-with-land (Kimmerer's *Braiding Sweetgrass* as open source). Must name the duration, what to do if the father tires, how to handle if a child gets bored, and the readable-by-supervisor principle.

3. **`entry/03-picture-book-together.md`** — Reading one or two picture books aloud side by side. The children can read to the father. Sourced to §3.3 on procedural memory and §3.5 on shared attention. Traditions: the Christian lectio divina principle of slow shared reading (philosophical parallel only), Japanese *monogatari* as story-as-gift frame. Note: the children reading TO the father is a reversal that preserves his dignity.

4. **`entry/04-closing-ritual-three-glads.md`** — Short closing circle at the end of each visit: one thing each person is glad about from today. Sourced to §3.5 on ending rituals. Traditions: Ignatian Examen's "consolations" frame (philosophical parallel, explicitly Christian tradition named), secular humanist closing-circle practice. Explicit note: if either child or father cannot name a "glad," that is allowed; silence is a legitimate answer.

5. **`middle/05-sensory-bin-play.md`** — A container of rice, beans, or smooth stones on a low table that the father and children play with together. Open-ended, no right answer, no time limit. Sourced to §3.5 on sensory activities and §3.3 on low-demand high-sensory presence. Traditions: early childhood education research; Snoezelen principles (with the clinical softening from the Clinical Reviewer's revision note).

6. **`middle/06-songs-we-remember.md`** — Singing 2-3 simple songs everyone knows (lullabies, folk songs, hymns — whatever the family has in common). Sourced to §3.3 on music and procedural memory (Sacks, Musicophilia). Traditions: the universal cross-cultural practice of singing together. Lullabies the mother once sang to the babies are specifically named as candidates because they are already in the father's procedural-music memory.

7. **`middle/07-simple-snack-together.md`** — If the visit location permits, sharing a simple snack prepared or assembled together (arranging crackers, pouring juice, cutting fruit). Sourced to §3.5. Traditions: the universal human practice of shared food; Benedictine hospitality (Chapter 53 of the Rule, Christian); Jewish concept of *seudah* (shared meal as sacred).

8. **`deepening/08-shared-drawing-each-adds.md`** — A single large piece of paper on which each person adds something. The father, the children, sometimes the mother or supervisor. The drawing is kept as an artifact. Sourced to §3.5 on drawing as low-demand shared activity. Traditions: contemporary art therapy research; cultural practice of collaborative art-making.

9. **`deepening/09-water-listening.md`** — Sitting together near a fountain, stream, or even a running faucet, listening to water. Minimal conversation. Sourced to §3.3 on sensory anchoring and §3.5 on nature activities. Traditions: water as symbol across nearly every tradition (Christian baptism, Jewish *mikvah* philosophically referenced, Islamic *wudu*, Kneipp water practice, Zen gardens — a single tradition selected per the specific protocol).

- [ ] **Step 2: Consolidate and voice-unify**

Content Writer orchestrator task: read all 9 returned protocols. Edit for:
- Unified voice across the set
- Deduplication of shared content (crisis response references, exit permission language)
- Consistency of terminology
- Cross-references to Phase A synthesis filled in

Write each protocol to its target file.

- [ ] **Step 3: Three-reviewer quality gate (Ethics + Clinical + Cultural) for this configuration**

Dispatch three review subagents in parallel with the 9 protocol files as input. Each produces a configuration-level review document at `examples/family-nexus-healing/phase-b/father-with-kids-supervised/quality-review-fws.md` (one combined file, or three separate files — three separate files preferred for clarity).

Acceptance: all three verdicts PASS or PASS WITH REVISIONS. Any BLOCK returns to Step 1 with the specific revisions required.

- [ ] **Step 4: Apply review findings and commit**

```bash
git add examples/family-nexus-healing/phase-b/father-with-kids-supervised/
git commit -m "feat(family-nexus): add father-with-kids-supervised protocol set

Nine protocols across entry (4), middle (3), and deepening (2) levels.
Template used throughout with role-specific voice subsections, tailored
signals, attribution. Three-reviewer quality gate passed.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Build `mother-with-kids/` configuration

Follow the same pattern as Task 1, with the following protocol briefs (each brief is developed in the step-by-step plan when Task 2 begins, drawing on Phase A §5.5):

- `daily-regulation/10-morning-anchor.md` — one simple shared morning moment
- `daily-regulation/11-bedtime-ritual-non-negotiable.md` — bedtime as primary secure base (Winnicott reference)
- `daily-regulation/12-after-school-decompression.md` — the first 20 minutes home from school
- `processing-confusion/13-why-cant-daddy-live-with-us-script.md` — scripts for the hardest questions, developmentally differentiated for 5yo and 8yo
- `processing-confusion/14-how-was-your-heart-today.md` — not-an-interrogation check-in
- `grief-windows/15-emergency-co-regulation-90-seconds.md` — 90-second family-wide co-regulation for hot moments (polyvagal)

Dispatch: Grief Guide, Expressive Guide, Somatic Guide, Sleep Guide. Voice-unify. Review gate. Commit.

---

## Task 3: Build `each-child-alone/` configuration

Split into two subfolders (`age-5-boy/` and `age-8-girl/`) because developmental needs diverge sharply. 6 protocols total:

- `age-5-boy/16-drawing-folder-he-owns.md` — drawing-as-writing with simple prompts
- `age-5-boy/17-sensory-bin-solo.md` — solo sensory play as regulation
- `age-5-boy/18-bedtime-story-from-daddy-voice.md` — voice-recording playback (if connection-capsule exists — otherwise, substitute a mother-sung lullaby)
- `age-8-girl/19-simple-prompted-journal.md` — private journal with simple prompts
- `age-8-girl/20-protected-one-on-one-with-mom.md` — non-Daddy-related protected time
- `age-8-girl/21-externalizing-the-forgetting.md` — narrative therapy age-appropriate adaptation

Dispatch: Expressive Guide, Somatic Guide, Sleep Guide, Community Facilitator. Voice-unify. Review gate. Commit.

---

## Task 4: Build `father-alone/` configuration

6 protocols drawing on §3.3 and §5.1, with the applied suicidality flag:

- `presence-anchors/22-daily-dignity-rhythm.md` — one recurring sensory anchor
- `presence-anchors/23-fifteen-minute-pre-visit-centering.md` — the arrive-settled practice
- `dignity-rituals/24-morning-sensory-anchor.md` — morning ritual preserving role
- `connection-capsules/25-bedtime-story-voice-recording.md` — on good days only; explicit consent
- `connection-capsules/26-one-sentence-letter.md` — letters-to-be-opened-later
- `connection-capsules/27-shared-book-that-lives-in-both-houses.md` — passing artifact

Dispatch: Somatic Guide, Sound Healing Guide, Contemplative Guide, Water Guide. Voice-unify. Review gate. Commit.

---

## Task 5: Build `mother-alone/` configuration

7 protocols drawing on §3.4 and §5.2:

- `container-practice/28-daily-five-minute-anchor.md` — daily anchor (Examen, metta, or Mussar)
- `container-practice/29-weekly-grief-window.md` — the scheduled grief hour
- `container-practice/30-weekly-rest-container.md` — modified Sabbath
- `peer-isolation-work/31-one-peer-pathway.md` — finding DAI or a similarly-situated peer
- `peer-isolation-work/32-specific-ask-practice.md` — actionable asks list
- `re-centering/33-fast-reset-sixty-seconds.md` — Kneipp or breath-based reset
- `re-centering/34-im-at-the-edge-escalation.md` — the escalation path protocol

Dispatch: Grief Guide, Contemplative Guide, Community Facilitator, Water Guide, Nature Guide. Voice-unify. Review gate. Commit.

---

## Task 6: Build `family-together/` configuration

2 protocols, smallest and most aspirational, drawing on §5.7:

- `ritual-moments/35-seasonal-family-ritual-stub.md` — seasonal small ritual (not scheduled obligation)
- `ritual-moments/36-milestone-marker-stub.md` — birthday/anniversary low-stakes marker

Dispatch: Community Facilitator, Traditions Scholar. Voice-unify. Review gate. Commit.

---

## Task 7: Phase B final voice consistency pass and gate verdict

- Read all 36 protocols + 6 orchestration files
- Verify unified voice across the kit
- Verify archetype role-pack structure is consistent (holding-parent/changing-parent/children pattern)
- Verify all cross-references to Phase A synthesis are present
- Verify all deferred Phase A revisions have been addressed in their appropriate Phase B context
- Produce a Phase B gate verdict file at `examples/family-nexus-healing/phase-b/phase-b-gate-verdict.md`
- Three-reviewer final pass (Ethics + Clinical + Cultural) on the whole kit
- Commit

---

## Self-Review

### Spec coverage

- ✅ Spec §4.1 Purpose — covered by Tasks 1–6 outputs
- ✅ Spec §4.2 Output artifact (directory structure) — covered by the file structure above
- ✅ Spec §4.3 Protocol file template (with "when NOT to use" and "signals to slow/stop" and role-voice subsections) — covered in the template
- ✅ Spec §4.4 Build order (father-supervised first) — covered by Task sequence
- ✅ Spec §4.5 Agent roster — covered per-task
- ✅ Spec §4.6 Quality gate (B → C) — covered by Task 7
- ✅ Deferred revisions from Phase A gate verdict — explicitly addressed as they arise in each task

### Placeholder scan

No TBDs. Protocol briefs in Tasks 2-6 are less detailed than Task 1 because the author of those tasks will draw on the synthesis's configuration matrices at the time of execution — this is intentional, not placeholder. Task 1 is detailed because it is the flagship and the hardest configuration.

### Scope

Phase B is one coherent plan produced from one source document (Phase A synthesis). It will produce working, testable material — the protocols kit — that can be used independently of Phase C.

### Conclusion

Plan is ready for execution. Subagent-driven development is the recommended mode.
