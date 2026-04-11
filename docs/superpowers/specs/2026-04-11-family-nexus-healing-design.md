---
title: Family Nexus Healing — Design Spec
date: 2026-04-11
status: draft-awaiting-user-review
author: Claude (healing-swarm orchestration) with user
type: feature-design
tags: [healing-swarm, family, anticipatory-grief, younger-onset-dementia, supervised-visitation, research-synthesis, protocols-kit, pwa]
---

# Family Nexus Healing — Design Spec

A phased research→protocols→application project to produce healing support material for a specific family facing a nexus of disarray: a father under 50 with possible early-onset progressive cognitive change, a mother under 50 holding two young children (boy 5, girl 8), court-ordered supervised visitation between father and children, and the parents living apart but in the same city.

This document specifies what will be built, by whom (which healing-swarm agents), in what order, with what quality gates, and how the resulting material is intended to be used by the family and their existing clinical / legal care team.

---

## 1. Framing & Ethical Scaffolding

### 1.1 What this project is
Supportive material to **complement** the family's professional care. A research synthesis, a protocols kit, and a private local-first web application — delivered in that order. The work coalesces evidence-based practices and traditional healing wisdom from across cultures and eras into a form the family can actually reach for in the moments they need it.

### 1.2 What this project is not
- Not a treatment plan.
- Not a substitute for the family's clinicians, family therapist, or court-appointed visit supervisor.
- Not a cure for progressive cognitive change. "Healing" here means preserving connection, dignity, presence, and the capacity to metabolize grief — not restoring cognitive function.
- Not a diagnosis. The father's condition is described throughout as "progressive cognitive change" in clinician-facing material; Alzheimer's is named only if and where a confirmed diagnosis exists.
- Not a general-purpose app. The flagship build is tuned to this specific family. Variant support is architecturally enabled (see §6.3, archetype role packs) but no variants will be built in this project.

### 1.3 Ethical guardrails (from healing-swarm)
The project inherits and enforces the seven healing-swarm ethics:
1. First, do no harm
2. Honor all traditions (proper attribution, no appropriation)
3. Evidence with humility ("may help," not "will cure")
4. Empower, don't control (user autonomy sacred)
5. Privacy as sanctuary (local-first, no telemetry — especially load-bearing given court involvement)
6. Accessible to all (WCAG AAA target in Father mode specifically)
7. Continuous improvement (progression logic allows revision as the family's needs change)

### 1.4 Ecumenical framing principle
Per explicit user guidance: the project draws on "best of many" traditions so that the family — and anyone using this material — can see that progressive cognitive change, forced separation, and anticipatory grief are ancient human experiences and that diverse cultures across time have developed practices for meeting them. The ecumenical frame is itself therapeutic: it reveals that the family is not alone and not without precedent, even in a situation that modern clinical vocabulary renders rare and isolating.

### 1.5 Younger-onset specificity (both parents under 50)
This constraint shapes every phase:
- Younger-onset literature is thin and socially invisible; the synthesis explicitly names this gap and sources from the advocacy and lived-experience literature (Dementia Alliance International, Younger Onset Dementia advocacy, Kate Swaffer's "prescribed disengagement") alongside clinical work.
- The mother's peer network likely has no template for her situation; content addresses peer isolation specifically.
- The father is likely still physically capable, still carrying identity-from-work and identity-from-role in ways late-life dementia literature doesn't address; dignity preservation has to work with, not around, a still-vital body.
- The children may not have the father present in adulthood; some practices are explicitly oriented to creating connection-capsules that can carry forward.
- The "universal human situation" essay in Phase A explicitly names that *early* loss of a parent to cognitive change has been met in every era (plague years, war injury, young-adult stroke) even when the modern clinical frame is oriented to later-life onset.

### 1.6 Court-involvement principle
Because supervised visitation is court-ordered, the clinical, legal, and supervisory actors already in the family's life must be *supported*, not worked around. Practical consequences:
- Every protocol the father would use during a visit is readable by a supervisor; nothing is secret between father and children.
- The kit includes a one-page clinician handoff sheet.
- The final deliverable includes a clinician-facing "what this app is and isn't" doc.
- Privacy guarantees (local-first, no telemetry) protect the family from inadvertent discoverability while still allowing voluntary disclosure to their care team.

---

## 2. High-Level Orchestration Approach

Approach 3 from brainstorming (parallel research, sequential build):

- **Phase A (research synthesis)** runs six research threads in parallel using `superpowers:dispatching-parallel-agents`. Outputs consolidate into one unified document.
- **Phase B (protocols kit)** runs sequentially by configuration, starting with the hardest (father-with-kids-supervised). Within each configuration, practice guides are dispatched in parallel and a single Content Writer consolidates into one voice. Quality gate between every configuration.
- **Phase C (web app)** runs after Phase B is fully complete and reviewed. UX/visual shell first, content pipeline in parallel, then mode-by-mode content port in Phase B's priority order.
- **Quality gates** (Ethics Guardian + Clinical Reviewer + Cultural Reviewer, plus Accessibility Auditor in Phase C) enforced at every phase transition and at every sub-milestone within a phase. Gate failure revises backward to root cause before proceeding.

---

## 3. Phase A — Research Synthesis

### 3.1 Purpose
Produce one unified clinician-readable document (~15–25k words) that coalesces evidence-based + traditional practices for a family facing progressive cognitive change, framed ecumenically across cultures and time. This document is the source of truth for Phases B and C.

### 3.2 Output artifact
`phase-a-synthesis.md` (committed to `healing-swarm-skills/examples/family-nexus-healing/phase-a/`), structured as:

1. **Framing & ethical scaffolding** — why "healing ≠ cure," what can be held vs. fixed, crisis-response boilerplate (pulled from healing-swarm Crisis Response shared resource), explicit "what this is NOT" map, younger-onset framing.
2. **The universal human situation** — ecumenical essay on how humans across time and tradition have met progressive cognitive change, forced parent-child separation, and anticipatory grief. Front-loaded so the reader begins with "we are not alone, we are not without precedent."
3. **Theme chapters** — one per parallel research thread (§3.3).
4. **Cross-theme pattern map** — what repeats across traditions and evidence; the points of convergence suggest the load-bearing practices for Phase B.
5. **Configuration matrices** — for each of {father alone, mother alone, each child alone, mother+kids, father+kids supervised, family together}, what the research says about needs, contraindications (via healing-swarm Contraindications Database severity flags), and candidate practices.
6. **Annotated bibliography** — every claim cited, every tradition attributed to lineage holders.

### 3.3 Six parallel research threads

| # | Thread | Lead agents | Investigation scope |
|---|---|---|---|
| 1 | **Anticipatory grief & loss-of-self** | Grief Guide + Traditions Scholar + Clinical Researcher | Anticipatory grief literature (Rando, Boss's ambiguous loss); Jewish mourning stages, Buddhist impermanence, Celtic keening, Dia de los Muertos, Mexican *duelo*; younger-onset-specific advocacy literature; how traditions held families through slow losses before hospice infrastructure |
| 2 | **Attachment & secure base under uncertainty (kids 5 & 8)** | Clinical Researcher + PNI Researcher + Expressive Guide | Attachment theory for separation, parental illness, high-conflict custody; age-appropriate grief in 5yo vs 8yo developmental stages; narrative / expressive writing adapted for children (Pennebaker derivatives); ritual as container for what can't be explained; creating connection-capsules that carry forward if the father is not present in the children's adulthood |
| 3 | **Presence-without-memory: connection when cognition is limited** | Somatic Guide + Sound Healing Guide + Contemplative Guide | Dementia-care research (Kitwood's person-centered care, Validation Therapy / Naomi Feil, Snoezelen, music-based memory work per Oliver Sacks); how contemplative traditions privilege presence over narrative (Zen, Dzogchen, Quaker silence); somatic co-regulation; younger-onset dignity preservation with a still-vital body |
| 4 | **The mother's container: carrying without collapsing** | Community Facilitator + Contemplative Guide + Traditions Scholar | Caregiver burden research including young-caregiver isolation; traditions of the held-holder (Hebrew *tzara'at* community care, Ubuntu, Sangha, Mussar self-care, Kneipp water reset, Ignatian Examen); boundary practices; scheduling grief windows rather than 24/7 grief mode |
| 5 | **Supervised-visit as sacred container** | Community Facilitator + Nature Guide + Expressive Guide | Research on high-conflict custody, parental-illness visitation, supervised-visit quality; rituals of limited-time presence across cultures (pilgrimage visits, liturgical time, shiva visits, Japanese *ichi-go ichi-e*); sensory and nature activities that work without complex memory; activities readable by a supervisor |
| 6 | **Meaning-making & ritual across traditions** | Traditions Scholar + Cultural Reviewer | Ritual theory (Turner, van Gennep's liminality); how diverse traditions (Indigenous, Jewish, Christian, Hindu, Buddhist, secular-humanist) offer families scripts for the unscriptable; the universality this reveals; the ecumenical framing principle in action |

### 3.4 Agent roster (Phase A)
Traditions Scholar, Clinical Researcher, PNI Researcher, Mechanisms Neuroscientist, Grief Guide, Community Facilitator, Somatic Guide, Sound Healing Guide, Contemplative Guide, Nature Guide, Expressive Guide, Cultural Reviewer (embedded during research to flag appropriation risk early).

### 3.5 Quality gate (A → B)
Ethics Guardian + Clinical Reviewer + Cultural Reviewer sign off on the synthesis. Pass criteria: no "needs revision" flags; all citations verifiable; all traditions properly attributed; younger-onset framing accurate; explicit "what this is not" present; configuration matrices complete with contraindication flags.

---

## 4. Phase B — Protocols Kit

### 4.1 Purpose
Translate the Phase A synthesis into concrete, ready-to-run protocols. The mother, the supervisor, or a therapist should be able to open a page and do the thing on Tuesday. No research prose in the protocol files themselves — just: purpose, time, materials, script, modifications, exit ramp, signals.

### 4.2 Output artifact
A directory of ~30–40 protocol files at `healing-swarm-skills/examples/family-nexus-healing/phase-b/`:

```
phase-b-protocols/
├── 00-how-to-use-this-kit.md
├── 00-triage-one-page.md                  ← "what is the hottest pain right now?"
├── 00-crisis-response-card.md              ← from healing-swarm shared
├── 00-contraindications-quick-ref.md       ← from healing-swarm shared
├── 00-clinician-handoff-sheet.md           ← for the existing care team
├── 00-when-things-change.md                ← re-triage appendix for progression
├── father-with-kids-supervised/            ← BUILT FIRST (hardest surface)
│   ├── entry/
│   ├── middle/
│   └── deepening/
├── mother-with-kids/
│   ├── daily-regulation/
│   ├── processing-confusion/
│   └── grief-windows/
├── each-child-alone/
│   ├── age-5-boy/
│   └── age-8-girl/
├── father-alone/
│   ├── presence-anchors/
│   ├── dignity-rituals/
│   └── connection-capsules/
├── mother-alone/
│   ├── container-practice/
│   ├── peer-isolation-work/
│   └── re-centering/
└── family-together/
    └── ritual-moments/
```

### 4.3 Protocol file template (every protocol uses this template)

```
# Title
Configuration · Duration · Energy cost (low/med/high)

## Why this practice
(1 paragraph, sourced to Phase A synthesis section)

## You'll need
(materials, environment)

## Before you start
(safety check + explicit exit permission: "You can stop at any step. Stopping is a win.")

## ⚠ When NOT to use this
- Contraindication flags (from healing-swarm Contraindications DB)
- Situational flags (recent regression, acute distress, father's hard day, supervisor not cleared)
- Relational flags (if either party said no today)

## The practice
(numbered steps, plain language, written so a tired person at 10pm can follow)

## Signals to slow down or stop
- In the father: (disorientation beyond baseline, agitation, frozen affect, ...)
- In the child: (withdrawal, hypervigilance, repeated asking for the other parent, ...)
- In yourself: (dissociation, anger spike, cannot be present anymore)
- What to do when you see these: (brief de-escalation + exit ramp, sourced to Crisis Response framework)

## Modifications
(shorter version, lower-energy version, wheelchair-accessible version, "the father is having a hard day" version)

## After
(3-line optional reflection prompt, no scoring, no pressure)

## Cross-references
(related protocols, related Phase A section, related tradition)

## Traditions honored
(lineage attribution)
```

**Role-voice subsections (only where energy is role-specific).** For protocols where the holding-parent and changing-parent bring fundamentally different energies (e.g., most `father-with-kids-supervised/` and `mother-with-kids/` protocols), the template is extended with two additional subsections placed between **The practice** and **Signals to slow down or stop**:

```
## Holding-parent voice
(language, metaphor, tradition references tuned to the one carrying the container —
 in this flagship build, mother-specific)

## Changing-parent voice
(language, metaphor, tradition references tuned to the one whose presence becomes
 the practice — in this flagship build, father-specific)
```

Protocols in `each-child-alone/`, `mother-alone/`, and `father-alone/` typically omit these subsections since only one archetype is in play. See §6.3 for the archetype role-pack architecture that enables this pattern and supports future variants.

### 4.4 Build order (sequential; review between every step)
1. `father-with-kids-supervised/` — hardest, highest stakes, built first. If this works, everything else is easier.
2. `mother-with-kids/` — daily load.
3. `each-child-alone/` — the kids' private practices, separately tuned for 5yo and 8yo developmental stages.
4. `father-alone/` — dignity-preserving daily rhythm.
5. `mother-alone/` — her container work, built with her load already visible from steps 1–4.
6. `family-together/` — smallest, most aspirational, built last.

Between every step: Ethics Guardian + Clinical Reviewer + Cultural Reviewer pass. Findings feed forward into later configurations.

### 4.5 Agent roster (Phase B)
- **Lead voice:** Content Writer (one voice across all ~40 protocols).
- **Protocol contributors by configuration:**
  - `father-with-kids-supervised/`: Somatic Guide, Sound Healing Guide, Nature Guide, Expressive Guide, Contemplative Guide
  - `mother-with-kids/`: Grief Guide, Expressive Guide, Somatic Guide, Sleep Guide
  - `each-child-alone/`: Expressive Guide, Somatic Guide, Sleep Guide, Community Facilitator (age-5 play work)
  - `father-alone/`: Somatic Guide, Sound Healing Guide, Contemplative Guide, Water Guide
  - `mother-alone/`: Grief Guide, Contemplative Guide, Community Facilitator, Water Guide, Nature Guide
  - `family-together/`: Community Facilitator, Traditions Scholar
- **Quality gate per configuration:** Ethics Guardian, Clinical Reviewer, Cultural Reviewer.

### 4.6 Quality gate (B → C)
All 6 configurations complete and individually passed; Content Writer sign-off on voice consistency across the full kit; archetype / role-pack structure validated for Phase C consumption.

---

## 5. Phase C — Web App (Three Modes, Flagship Build)

### 5.1 Purpose
A small, private, local-first PWA that delivers Phase B's protocols in a form the family can actually reach for in the moment. Three mode entries: **Family · Father · Mother**.

### 5.2 Core architectural decisions
- **Local-first.** IndexedDB persistence. Export-to-file backup. Nothing leaves the device unless the user explicitly exports. No accounts. No servers. No telemetry. Aligned with healing-swarm ADR-002.
- **Single-page PWA**, installable to home screen, works offline after first load, phone-first responsive.
- **WCAG AAA target** for Father mode specifically; AA minimum for Family and Mother modes.
- **Explicit mode switching.** No auto-inference; the user picks who they are each session.
- **Content pipeline.** Phase B markdown protocols are the source of truth. A build step parses them into structured JSON the app consumes. Revising a protocol in markdown automatically updates the app on the next build.
- **Archetype role-pack architecture** (see §6.3).

### 5.3 Family Mode
Surface the mother uses *with* the children.
- **"Today" screen** — surfaces the most relevant protocol from `mother-with-kids/` based on time-of-day and day-of-week.
- **"Visit day is coming"** — when a supervised visit is in the next 48h, offers child-prep protocols from `each-child-alone/` (prep without promising).
- **"What I felt today" log** — each family member (mom, 5yo, 8yo) drops a word, color, scribble, or 10-second voice note. Private to the device. Optional review-together feature controlled by the mother.
- **Bedtime story / grounding** — small library of grounding visualizations and short stories pulled from multiple traditions, specifically designed for children processing parental change.
- **Emergency co-regulation button** — 90-second practice the whole family can do together when things get hot.

### 5.4 Father Mode
Every screen passes a "could he use this on a confused day" test.
- **One-thing-at-a-time interface.** No menus, no nested screens. Home screen shows one practice plus a giant "Begin" button. One swipe reveals three alternatives — never more.
- **Visit countdown prep** — 24h, 2h, 15min before a scheduled visit, the app offers presence-anchors tuned to prepare him without overwhelming him. The 15-minute practice is a calming/centering practice so he arrives settled.
- **"A moment with the kids"** — during a visit, one tap surfaces a supervised-visit activity from `father-with-kids-supervised/`, presented as a simple card. Readable by a supervisor.
- **Daily dignity rhythm** — a single recurring sensory anchor (sound, water, movement, breath) done the same way every day. Consistency over novelty. Framed as *his* practice.
- **Caregiver-assist toggle** — a trusted helper can activate a mode showing slightly more context without removing his agency.

### 5.5 Mother Mode
The mother's private container. Not visible from Family or Father modes.
- **"How are you right now?"** — one-tap check-in (color pick or brief text, no scales, no scoring).
- **Fast resets** — 60s / 3min / 10min regulation practices indexed by "what I need" (ground, soften, release, fuel up).
- **Grief windows** — she schedules her own grief time. App holds space during those windows with Grief Guide practices. Outside those windows, the app does **not** surface grief content.
- **Peer isolation work** — expressive-writing prompts for younger caregivers, encrypted at rest, never transmitted.
- **"I'm at the edge" button** — escalation to Crisis Response (988, local crisis lines, plus one user-entered trusted contact). The one feature that actively encourages reaching outside the app.

### 5.6 Agent roster (Phase C)
UX Architect (leads), Visual Designer (Sacred Visuals skill), App Developer, Content Writer (ports protocols to app micro-copy), Accessibility Auditor (continuous, with specific audit passes for Father mode), Ethics Guardian, Clinical Reviewer, Cultural Reviewer.

### 5.7 Final deliverable
- Zipped PWA the mother can host anywhere (even offline on a spare laptop).
- Parent-facing README: local-first guarantees, export/backup, installation.
- Clinician-facing one-page "what this app is and isn't" doc for the family's existing care team.
- Source repo in `healing-swarm-skills/examples/family-nexus-healing/phase-c/` so future variants can be built as role-pack additions.

---

## 6. Cross-Cutting Design Patterns

### 6.1 Quality gates (enforced, not optional)

| Gate | Trigger | Reviewers | Pass criteria |
|---|---|---|---|
| A → B | Phase A synthesis draft complete | Ethics Guardian · Clinical Reviewer · Cultural Reviewer | No "needs revision" flags; citations verifiable; traditions attributed; younger-onset framing accurate; "what this is not" present; configuration matrices complete |
| B-config → next B-config | Each of 6 configuration sets | Same trio | Every protocol has full template (including "when NOT to use" and "signals to slow/stop"); Contraindications DB cross-check clean; clinical language doesn't pose as treatment |
| B → C | All 6 configurations complete | Trio + Content Writer sign-off | Protocol kit reads as one voice; archetype / role-pack structure validated |
| C-mode → next C-mode | Each of Family / Father / Mother modes | Trio + Accessibility Auditor | WCAG AAA for Father mode, AA for others; local-first privacy verified (no network calls); escalation paths functional |
| Final | Full build complete | Full quality swarm | End-to-end walkthrough as each persona; README and clinician-facing doc reviewed; zipped PWA boots offline on clean device |

**Gate failure rule:** If any gate flags revision, revise backward to the root of the issue — possibly re-opening an earlier gate — before proceeding. No "ship and fix later."

### 6.2 Progression logic (how the family moves through the material over time)

- **Entry point (Week 0).** Mother reads Phase A framing + "universal human situation" essay only (not full synthesis) and `00-how-to-use-this-kit.md`. ~45 min total.
- **Triage (Week 0 → Week 1).** One-page triage guide asks: what is the hottest pain right now? Answer maps to one starting configuration, one starting practice, entry level. Not six configurations at once.
- **Depth ladder per configuration** (deliberately slower than typical self-help ladders):
  - *Entry (weeks 1–3):* one practice, done consistently, low energy cost, exit ramps prominent. Goal: "the family discovers the practice isn't scary."
  - *Middle (weeks 4–10):* 2–3 practices, weekly rhythm, beginning to notice what's shifting. Most time spent here.
  - *Deepening (weeks 10+):* deeper practices, family-specific rituals, integration across configurations. Some families never reach this. Some arrive only on good days.
- **Tempo rules:**
  - *Daily:* one anchor practice per person, 5–10 min.
  - *Weekly:* one configuration-specific practice per relevant dyad.
  - *Grief windows:* mother-scheduled; not 24/7. Kids have expressive-tool access whenever something surfaces, not scheduled.
  - *Visit days:* 24h/2h/15min father prep + mother's container practice + kids' pre/post practices.
- **Progression signals (go deeper):** sustained rhythm for 2+ weeks, child self-initiating an expressive practice, father requesting his dignity rhythm unprompted, mother reporting fewer edge-of-collapse moments.
- **Pause signals (slow down or hold):** any protocol triggering a stop-signal more than once in a week, regression in any child's baseline, acceleration in father's cognitive change, mother reaching the "I'm at the edge" button. On any pause signal, return to entry-level anchors only.
- **Long-horizon trajectory.** As the father's condition progresses, his protocols shift *toward simpler*, not more complex. Deepening for the father means more silence, more sensory anchoring, less narrative. Deepening for mother and kids means more integration with life outside the acute container. The "when things change" appendix in Phase B re-triages when baseline shifts.
- **Integration with existing care team.** Clinician handoff sheet (one page) the mother can bring to the family therapist or visit supervisor: "here's what we're doing, here's how to observe it, here's what to tell us."
- **Exit / retirement.** A practice that has done its work should be retired, not clung to. Kit includes a gentle "honor and release" ritual.
- **Review cadence.** Every Sunday (or mother's chosen day), 10-minute family check-in: what worked, what didn't, what to change. Borrowed from Community Facilitator's healing-circle consent model, scaled to household use.

### 6.3 Archetype role-pack architecture (enables future variants without flattening this build)

**Tension being resolved:** Generic "Parent A / Parent B" flattens the real energetic differences between a mother-as-holder and a father-in-change. Hard-coded mother/father blocks future families with reversed or same-gender configurations from reusing the work. The archetype layer gives us both.

**Three archetypes:**
- `holding-parent` — the one carrying the daily container, the witness, the secure base. In this family: **mother**.
- `changing-parent` — the one undergoing progressive cognitive change, whose presence becomes the practice. In this family: **father**.
- `children` — the 5yo and 8yo, each with age-tuned content.

**Why archetypes, not "parent A/B":**
1. They name what's actually different: carrying-energy vs. changing-energy.
2. They preserve the reality that in reversed or same-gender configurations, those energies still exist — just held by different people.
3. They preserve specific mother/father language in *this* build. The mother's container work draws from traditions of the mother-holder (Shekhinah, Guan Yin, Mary, the grandmother-keeper). The father's dignity work draws from traditions of the father-in-decline (King Lear, the elder passing the rod, the grandfather-teacher). These are specific; they are not swappable; they are honored as-is in the flagship build.

**Implementation:**
- Phase B protocol files with role-specific energy have two sections: `## Holding-parent voice` and `## Changing-parent voice`. For the flagship build, the former uses mother-specific tradition references, metaphors, and address; the latter uses father-specific. Universal content (somatic regulation, attachment research, grief framework) lives in shared sections above.
- Phase C content pipeline reads the flagship build as the **default role pack**. Mode labels "Family · Father · Mother" are strings in that role pack, not hardcoded. The pipeline supports alternate role packs as directory drop-ins (e.g., `role-packs/father-holder-mother-changing/`) but we ship only the flagship.
- App landing screen reads mode labels from the active role pack.

**What this buys:**
- This family gets a fully specific, fully honored build with no flattening.
- A future family (reversed configuration, same-sex parents, extended-family-as-holder) can be served by writing a new role pack — a content task, not a rewrite.
- Architecture acknowledges that mother-energy and father-energy are different *and* that those energies can be held by different people in different families.

**Explicitly NOT in scope for this project:**
- Not building variant role packs.
- Not writing generic "caregiver" fallback language.
- Not pretending archetypes make variants "free" — each real variant will still need cultural and linguistic work by someone who knows that family's nexus.

---

## 7. Consolidated Agent Roster

| Agent | Phase A | Phase B | Phase C |
|---|:-:|:-:|:-:|
| Traditions Scholar | ● | ●(family-together) | |
| Clinical Researcher | ● | | |
| PNI Researcher | ● | | |
| Mechanisms Neuroscientist | ● | | |
| Grief Guide | ● | ● | |
| Community Facilitator | ● | ● | |
| Somatic Guide | ● | ● | |
| Sound Healing Guide | ● | ● | |
| Contemplative Guide | ● | ● | |
| Nature Guide | ● | ● | |
| Expressive Guide | ● | ● | |
| Sleep Guide | | ● | |
| Water Guide | | ● | |
| Content Writer | | ●(lead voice) | ●(app microcopy) |
| UX Architect | | | ●(lead) |
| Visual Designer | | | ● |
| App Developer | | | ● |
| Ethics Guardian | ●(gate) | ●(gate) | ●(gate) |
| Clinical Reviewer | ●(gate) | ●(gate) | ●(gate) |
| Cultural Reviewer | ●(embedded + gate) | ●(gate) | ●(gate) |
| Accessibility Auditor | | | ●(continuous) |

---

## 8. Healing-Swarm Resources Referenced

- **Crisis Response** shared resource — RECOGNIZE-STOP-GROUND-ASSESS-RESPOND-FOLLOW-UP framework (referenced in every protocol's "signals to slow down or stop" section).
- **Contraindications Database** — 12 conditions × 7 practice categories, severity flags (Absolute/Relative/Caution), cross-referenced in every protocol's "when NOT to use" section.
- **Outcome Measurement** — optional, privacy-first validated instruments (VAS, PSS, WHO-5); used sparingly, never as gatekeeping.
- **Practice Pathways** — cross-skill integration patterns; the configuration matrices in §3.2(5) use this pattern.
- **Ethics guardrails** (all 7) enforced throughout.
- **ADR-001** (Ethics-first architecture) informs quality gates.
- **ADR-002** (Local-first data storage) is non-negotiable in Phase C.
- **ADR-003** (Multi-agent quality review) is the pattern for all gate reviews.

---

## 9. Non-Goals (explicit)

- Not producing variant role packs (reversed, same-sex, extended-family).
- Not building a server-backed app, not using any external analytics.
- Not producing a published/distributable product — this is flagship material for one specific family, with architectural seams for future adaptation.
- Not replacing the family's clinical, legal, or supervisory care team.
- Not naming Alzheimer's specifically in clinician-facing material unless confirmed diagnosis is provided.
- Not producing diagnostic or treatment recommendations.
- Not producing content in traditions where we lack qualified lineage representation in the agent roster; Cultural Reviewer has veto power.

---

## 10. Testing / Validation

- **Phase A:** Three-reviewer quality gate. Self-review for placeholder scan, internal consistency, citation completeness.
- **Phase B:** Three-reviewer gate per configuration (6 gates). End-to-end voice read after all configurations complete.
- **Phase C:**
  - Continuous a11y audit in Father mode (largest text sizes, simplest screens, no time pressure, contrast ratios).
  - Offline test: service worker boot on a clean device with no network.
  - Privacy test: network panel audit during full session simulation, verifying no outbound calls.
  - Persona walkthrough: full session as mother, full session as father (with caregiver-assist toggled), full session as each child (with supervising adult).
  - Content-pipeline test: modify a Phase B protocol file, rebuild, verify app reflects change.

---

## 11. Open Questions (to resolve during execution, not blocking spec approval)

- Specific color palettes for each mode (Visual Designer recommendation, user sign-off during Phase C).
- Which specific bedtime stories / grounding visualizations to include (Traditions Scholar + Cultural Reviewer to draft shortlist during Phase B `family-together`).
- Exact scheduling model for mother's grief windows (her preference captured via first-run setup in Phase C).
- Whether the "what I felt today" log should support photos (defer to Phase C privacy review).
- Whether to include a paper/printed version of the protocols kit (low cost; likely yes, for the supervisor).

---

## 12. Change Log

- **2026-04-11** — Initial spec drafted following brainstorming session. Status: draft-awaiting-user-review.
