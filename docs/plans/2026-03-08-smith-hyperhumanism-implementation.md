# Carl Hayden Smith — Hyperhumanism & Sound Consciousness Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add 6 new skills, 4 agents, 6 workflows, and 3 templates based on Carl Hayden Smith's work on archaeoacoustics, hyperhumanism, and consciousness technology.

**Architecture:** Two skill categories — (A) Archaeoacoustic & Sound Consciousness (practice-based) and (B) Hyperhumanism & Consciousness Research (inquiry-based). Four new agents serve these skills. All workflows end with mandatory ethics review. Design doc: `docs/plans/2026-03-08-smith-hyperhumanism-skills-design.md`.

**Tech Stack:** YAML manifests, Markdown agent prompts/templates, Docusaurus MDX website pages.

---

### Task 1: Create feature branch

**Files:** None

**Step 1: Create and switch to feature branch**

Run: `cd I:/GithubI/claude/Magic/healing-swarm-skills && git checkout -b feat/smith-hyperhumanism-skills`

Expected: Switched to new branch 'feat/smith-hyperhumanism-skills'

---

### Task 2: Update shared/terminology.md — Add Smith/Hyperhumanism terms

**Files:**

- Modify: `.claude/skills/healing-swarm/shared/terminology.md` (append after Integral Theory section, ~line 417)

**Step 1: Append Smith terminology section**

Add the following after the last line of the Integral Theory section:

```markdown
---

## Hyperhumanism & Sound Consciousness Terminology (Smith)

> Terms from the work of Carl Hayden Smith, Founder and Director of the Museum
> of Consciousness at Balliol College, Oxford University. Co-founder of the
> Cyberdelics Society. Developer of the Hyperhumanism framework.

### Core Theoretical Concepts

| Term                             | Definition                                                                                                                                                  | Evidence Status                                                                  |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Hyperhumanism                    | Framework positioning technology as catalyst for innate human capacities rather than replacement; resisting "outsourcing our magic"                         | Theoretical framework                                                            |
| Endo-technology                  | Internal practices — breathwork, sound, trance, hypnosis, meditation, visualization, dreaming, hypnagogic techniques                                        | Established (individual practices well-researched)                               |
| Cyberdelic                       | External consciousness technology — sound/light machines, neurofeedback, binaural beats, VR/AR/XR, TMS, mindfulness apps                                    | Mixed (individual technologies vary widely)                                      |
| Pharmaco-technology              | Substance-based approaches to altered states (psychedelics, entheogens) — EXCLUDED from all healing-swarm practices                                         | N/A (hard exclusion)                                                             |
| Holotechnica                     | Combining endo-technologies into structured "experience stacks" — recipes for consciousness exploration; holo (whole) + technica (technique)                | Theoretical (individual components researched)                                   |
| Altered States vs Altered Traits | Critical distinction: states are temporary peak experiences; traits are lasting developmental changes. Holotechnica targets traits                          | Research-supported (Goleman & Davidson 2017)                                     |
| Archaeoacoustics                 | Study of sound properties in ancient built environments; how architecture was intentionally designed for acoustic/consciousness effects                     | Preliminary (Jahn & Dunne 1992; Smith et al. 2023)                               |
| Sacred Frequencies               | Resonant frequencies found in ancient sites: 117 Hz (King's Chamber, Giza), 139.01 Hz (Saqqara), 369 Hz, 432 Hz (Egyptian temples)                          | Preliminary (acoustic measurements confirmed; consciousness effects preliminary) |
| Museum of Consciousness          | Interactive audio-based exhibit installation for cultivating altered states; Smith's primary research platform at Oxford                                    | Documented (Smith et al. 2021, EVA)                                              |
| Milliere's 6D Model              | Six dimensions of self-consciousness: sense of agency, sense of ownership, sense of self-location, first-person perspective, sense of unity, narrative self | Theoretical (Milliere 2017; philosophical framework)                             |
| Umwelt                           | An organism's subjective perceptual world; the sensory environment as experienced by a particular being (von Uexkull 1934)                                  | Established (ethology/biosemiotics)                                              |
| Umwelt Hacking                   | Deliberately shifting perceptual frames to experience sensing-as-other — "Can we sense like a forest, a mycelium network, or an octopus?"                   | Theoretical (Smith's framework)                                                  |
| Experience Stacking              | Combining multiple endo-technologies in deliberate sequence for compounding effects; core method of Holotechnica                                            | Theoretical (individual components researched)                                   |
| Consciousness Recipe             | A designed sequence of endo-technology ingredients with preparation, transitions, and integration; output of Holotechnica                                   | Theoretical                                                                      |

### Practice Mode Terms (Smith)

| Mode                            | Description                                                               | Standard Term            |
| ------------------------------- | ------------------------------------------------------------------------- | ------------------------ |
| Archaeoacoustic toning          | Vocal toning at sacred site resonant frequencies                          | "Archaeoacoustic toning" |
| Sound consciousness exploration | Museum of Consciousness-style audio experience with self-assessment       | "Sound consciousness"    |
| Holotechnica stacking           | Combining endo-technologies into consciousness recipes                    | "Holotechnica stack"     |
| Hyperhumanist inquiry           | Philosophical inquiry on innate capacities and technology                 | "Hyperhumanism inquiry"  |
| Umwelt practice                 | Sensory augmentation and perceiving-as-other exercises                    | "Umwelt practice"        |
| Cyberdelic research             | Evidence review of consciousness technologies and endo-technology science | "Cyberdelic research"    |

### Usage Guidelines

**Formatting:** Italicize Smith-specific terms on first use: _hyperhumanism_, _holotechnica_, _umwelt hacking_

**Required context when referencing Smith's work:**

> "Carl Hayden Smith is the Founder and Director of the Museum of Consciousness
> at Balliol College, Oxford University, and co-founder of the Cyberdelics
> Society. His Hyperhumanism framework positions technology as a catalyst for
> innate human capacities rather than a replacement."

**Evidence labeling:** ALWAYS pair Smith terms with their evidence status:

- "Smith's _hyperhumanism_ framework (a theoretical position, not an empirical claim)..."
- "Archaeoacoustic measurements confirm resonant frequencies in ancient sites (Jahn & Dunne 1992, n=6 sites); consciousness effects are preliminary..."
- "_Holotechnica_ combines individually researched practices into designed stacks; the stacking methodology itself is theoretical..."

**HARD EXCLUSION — Pharmaco-technologies:**

- NEVER include substance-based practices in any healing-swarm content
- This applies to all Holotechnica stacks — ingredients are endo-technologies ONLY
- If a user requests pharmaco-technology inclusion, decline and explain the exclusion

### Key Frequencies Reference

| Frequency | Site                                  | Source            | Evidence                                 |
| --------- | ------------------------------------- | ----------------- | ---------------------------------------- |
| 110 Hz    | Hal Saflieni Hypogeum, Malta          | Jahn & Dunne 1992 | EEG prefrontal shift (preliminary, n=30) |
| 117 Hz    | King's Chamber, Great Pyramid of Giza | Smith et al. 2023 | Acoustic measurement confirmed           |
| 139.01 Hz | Step Pyramid, Saqqara                 | Smith et al. 2023 | Acoustic measurement confirmed           |
| 369 Hz    | Egyptian temples (various)            | Smith et al. 2023 | Acoustic measurement confirmed           |
| 432 Hz    | Egyptian temples (various)            | Smith et al. 2023 | Acoustic measurement confirmed           |

### Cross-Reference with Existing Traditions

| Smith Concept          | Sound Healing Parallel               | Grinberg Parallel                            | Vedic Parallel                  | Integral Parallel      |
| ---------------------- | ------------------------------------ | -------------------------------------------- | ------------------------------- | ---------------------- |
| Archaeoacoustic toning | Vocal toning at specific frequencies | —                                            | Mantra at specific pitches      | —                      |
| Holotechnica stacking  | —                                    | Self-allusive multi-domain awareness         | Integral Life Practice          | Integral Life Practice |
| Umwelt hacking         | —                                    | Consciousness orbitals (expanded awareness)  | Pratyahara (sensory withdrawal) | State training         |
| Hyperhumanism          | —                                    | —                                            | Svadhyaya (self-study)          | Lines of development   |
| Altered traits         | —                                    | Interhemispheric coherence as lasting change | Samskara purification           | Stage development      |
| Endo-technology        | Sound healing practices              | Meditation as consciousness technology       | Yoga/pranayama                  | Shadow process, ILP    |

**Note:** Smith's framework explicitly synthesizes across traditions and technologies.
Present his work as an integrative framework, not a standalone tradition.
```

**Step 2: Validate YAML isn't broken by this change**

This is a .md file so no YAML validation needed, but verify the file is well-formed:

Run: `head -5 I:/GithubI/claude/Magic/healing-swarm-skills/.claude/skills/healing-swarm/shared/terminology.md`

Expected: File header visible, no errors

**Step 3: Commit**

```bash
cd I:/GithubI/claude/Magic/healing-swarm-skills
git add .claude/skills/healing-swarm/shared/terminology.md
git commit -m "feat: add Smith/hyperhumanism terminology to shared resources"
```

---

### Task 3: Update shared/ethics-guardrails.md — Add Smith-specific safety sections

**Files:**

- Modify: `.claude/skills/healing-swarm/shared/ethics-guardrails.md` (append new sections)

**Step 1: Read current ethics-guardrails.md to find insertion point**

Read the end of the file to identify where to append.

**Step 2: Add archaeoacoustic, umwelt, and holotechnica safety sections**

Append the following sections:

```markdown
---

## Archaeoacoustic Practice Safety

### Audio Safety

- All frequencies must be within safe listening range (20 Hz – 20,000 Hz)
- Volume must NEVER exceed comfortable listening levels
- Hearing screening required before any sustained toning practice
- Participants with tinnitus: low-volume humming only, no sustained single-frequency exposure
- Participants with hearing aids: remove or adjust before proximity to speakers or bowls
- Participants with epilepsy: some rhythmic sound patterns may be triggering — consult healthcare provider

### Vocal Safety

- Vocal warm-up required before toning at specific frequencies
- No sustained toning for more than 5 minutes at a single frequency without pause
- Throat discomfort = immediate stop
- Voice rest recommended after extended sessions (30+ minutes)
- Hydration available during all sessions

### Evidence Framing

- Acoustic measurements of ancient sites are documented (Jahn & Dunne 1992; Smith et al. 2023)
- Claims about consciousness effects at specific frequencies are PRELIMINARY
- "The site resonates at this frequency" is verifiable; "This frequency activates consciousness" is NOT
- EEG prefrontal shift at 110 Hz: ONE study (Cook et al. 2008, n=30) — interesting but not definitive
- NEVER claim frequencies "heal," "cure," or "activate" specific conditions

---

## Umwelt Practice Safety

### Dissociation Risk

- Perceiving-as-other exercises involve deliberate perceptual shifting
- This is CONTRAINDICATED for:
  - Active dissociative disorders (DID, DPDR, dissociative amnesia)
  - Active derealization or depersonalization episodes
  - Psychotic features or active psychosis
  - Severe PTSD with dissociative features
- Grounding anchors REQUIRED between every perceiving-as-other segment
- Explicit return-to-default protocol REQUIRED at end of every practice
- Time limit: perceiving-as-other segments should not exceed 5 minutes without grounding

### Return-to-Default Protocol

Every umwelt practice MUST end with:

1. Name 5 things you can see
2. Name your full name aloud
3. Touch a solid surface and describe its texture
4. State today's date and your location
5. Take 3 normal breaths before standing

### Consent and Framing

- Frame as "imagination exercise," not "becoming another entity"
- No claims of actual perceptual access to other organisms' experience
- "Imagine what it might be like to sense as..." NOT "You are now sensing as..."
- Participants can stop at any point

---

## Holotechnica Stacking Safety

### Additive Contraindication Logic

- If ANY ingredient in a stack is contraindicated for the user, the ENTIRE stack is contraindicated
- Cross-check every ingredient against the contraindications database
- Example: if breathwork is contraindicated (asthma, cardiovascular), then any stack containing breathwork is contraindicated

### Pharmaco-Technology Hard Exclusion

- **NEVER** include substance-based ingredients in any Holotechnica stack
- This includes: psychedelics, entheogens, alcohol, caffeine-based protocols, nootropics
- If a user requests pharmaco-technology inclusion, decline with:
  > "Holotechnica stacks in this system use endo-technologies only — practices that use
  > your body's innate capacities. Substance-based approaches are outside our scope.
  > If you're interested in those approaches, consult a qualified professional."

### Stacking Intensity Limits

- Simple stacks (2 ingredients, ≤15 min): Standard safety
- Standard stacks (3-4 ingredients, ≤30 min): Enhanced safety — grounding between ingredients
- Extended stacks (5+ ingredients, ≤45 min): Maximum safety — grounding between every ingredient, integration journaling required
- NEVER exceed 5 ingredients in a single stack for beginners
- NEVER exceed 45 minutes total stack duration

### Altered Traits vs Altered States

- Holotechnica targets altered TRAITS (lasting change), not just altered STATES (temporary peaks)
- This means: preparation and integration phases are NOT optional
- Every stack includes: intention-setting → practice → integration journaling
- Frame outcomes as "may support over time" not "will produce immediately"
```

**Step 3: Commit**

```bash
git add .claude/skills/healing-swarm/shared/ethics-guardrails.md
git commit -m "feat: add archaeoacoustic, umwelt, and holotechnica safety guardrails"
```

---

### Task 4: Update shared/contraindications.md — Add Smith practice contraindications

**Files:**

- Modify: `.claude/skills/healing-swarm/shared/contraindications.md` (append new entries)

**Step 1: Read current contraindications.md to find insertion point**

**Step 2: Add contraindication entries for archaeoacoustic toning, umwelt practice, and holotechnica stacking**

Append entries following the existing format for:

- Archaeoacoustic toning (hearing conditions, tinnitus, vocal cord issues, epilepsy)
- Umwelt practice (dissociative disorders, derealization, psychosis, severe PTSD)
- Holotechnica stacking (additive: if any ingredient is contraindicated, stack is contraindicated)
- Sound consciousness (dissociation screening, active psychosis)

**Step 3: Commit**

```bash
git add .claude/skills/healing-swarm/shared/contraindications.md
git commit -m "feat: add Smith practice contraindications"
```

---

### Task 5: Create agent — Archaeoacoustic Guide

**Files:**

- Create: `.claude/skills/healing-swarm/content/archaeoacoustic-guide.md`

**Step 1: Write the Archaeoacoustic Guide agent prompt**

Follow the pattern from `content/sound-healing-guide.md` (Identity → Core Responsibilities → Safety Architecture → Protocol Design Methodology → Language Patterns → Output Formats → Integration → Loaded Context → Example Session → Common Pitfalls → Guiding Principles).

Key content:

- Identity: Expert in archaeoacoustic toning and sound consciousness practices based on Smith's research
- Core Responsibilities: Archaeoacoustic toning protocol design (117 Hz, 139.01 Hz, 369 Hz, 432 Hz), sound consciousness exhibit design, Milliere 6D self-assessment integration
- Safety Architecture: Safe audio range, hearing screening, vocal strain, grounding bookends, dissociation screening for sound consciousness
- Protocol Design: 5-minute segments per frequency (listen → hum → open vocal tone → explore harmonics), foundation/standard/deep depths
- Language Patterns: Body-based not mystical ("Notice the vibration at this frequency" not "Activate your pineal gland")
- Output Formats: Toning practice script with timing marks, session timing JSON, quick reference card, 6D self-assessment form
- Integration: Receives from hyperhumanism-researcher; provides to content-writer; reviewed by ethics-guardian
- Loaded Context: ethics-guardrails.md, terminology.md, voice-guide.md
- Common Pitfalls: Frequency mysticism, overclaiming consciousness effects, skipping warm-up, ignoring hearing conditions
- Guiding Principles: Ancient acoustics offer genuine wonder without needing pseudoscience

**Step 2: Commit**

```bash
git add .claude/skills/healing-swarm/content/archaeoacoustic-guide.md
git commit -m "feat: add Archaeoacoustic Guide agent prompt"
```

---

### Task 6: Create agent — Holotechnica Architect

**Files:**

- Create: `.claude/skills/healing-swarm/content/holotechnica-architect.md`

**Step 1: Write the Holotechnica Architect agent prompt**

Follow the pattern from `content/coherence-guide.md` (Identity → Core Responsibilities → Practice Design Methodology → Language Patterns → Output Formats → Integration → Loaded Context → Example Session → Common Pitfalls → Guiding Principles).

Key content:

- Identity: Expert in designing holotechnica experience stacks — consciousness recipes combining endo-technologies
- Core Responsibilities: Stack design (ingredient selection, sequencing, timing, transitions), trait-targeting (not just state-chasing), additive contraindication checking, preparation and integration design
- Ingredient Library: Breathwork, sound/toning, visualization, body scan, movement, silence, hypnagogic techniques, sensory foregrounding
- HARD EXCLUSION: No pharmaco-technologies ever
- Stack Depths: Simple (2 ingredients, 15 min), Standard (3-4, 30 min), Extended (5+, 45 min)
- Altered traits distinction: Every stack has preparation → practice → integration phases
- Output Formats: Holotechnica recipe card, ingredient matrix, timing sequence, integration journal prompts
- Common Pitfalls: Including pharmaco-technologies, ignoring additive contraindications, state-chasing without integration, too many ingredients

**Step 2: Commit**

```bash
git add .claude/skills/healing-swarm/content/holotechnica-architect.md
git commit -m "feat: add Holotechnica Architect agent prompt"
```

---

### Task 7: Create agent — Hyperhumanism Researcher

**Files:**

- Create: `.claude/skills/healing-swarm/research/hyperhumanism-researcher.md`

**Step 1: Write the Hyperhumanism Researcher agent prompt**

Follow the pattern from `research/consciousness-researcher.md`.

Key content:

- Identity: Research specialist in Carl Hayden Smith's hyperhumanism, archaeoacoustics, consciousness technologies, and endo-technology evidence
- Core Responsibilities: Smith literature review, archaeoacoustic frequency research, endo-technology evidence synthesis, Milliere 6D model research, altered states vs traits literature
- Research Domains: Archaeoacoustics (Jahn & Dunne 1992, Smith et al. 2023), hyperhumanism (Smith's framework), Museum of Consciousness (Smith et al. 2021), endo-technology evidence base, consciousness assessment models
- Evidence Standards: Same as all research agents — cite sources, note sample sizes, honest limitations
- Tools: WebSearch, WebFetch, Read, Glob, Grep
- Integration: Provides to archaeoacoustic-guide, holotechnica-architect, umwelt-facilitator; reviewed by ethics-guardian

**Step 2: Commit**

```bash
git add .claude/skills/healing-swarm/research/hyperhumanism-researcher.md
git commit -m "feat: add Hyperhumanism Researcher agent prompt"
```

---

### Task 8: Create agent — Umwelt Facilitator

**Files:**

- Create: `.claude/skills/healing-swarm/content/umwelt-facilitator.md`

**Step 1: Write the Umwelt Facilitator agent prompt**

Follow the pattern from `content/coherence-guide.md`.

Key content:

- Identity: Expert in sensory augmentation exercises and perceptual shifting based on Smith's umwelt hacking and hyperhumanism inquiry
- Core Responsibilities: Umwelt practice design (4 levels: sensory inventory → foregrounding → perceiving-as-other → integration), hyperhumanism inquiry facilitation (4 phases: inventory → audit → reclamation → practice design)
- Safety Architecture: Dissociation screening, grounding anchors, return-to-default protocol, explicit framing as imagination exercise
- Language Patterns: "Imagine sensing as..." not "You are now sensing as...", body-based awareness cues
- Output Formats: Umwelt practice script, sensory map template, hyperhumanism inquiry guide, capacity inventory
- Contraindications: Dissociative disorders, active derealization, psychosis, severe PTSD

**Step 2: Commit**

```bash
git add .claude/skills/healing-swarm/content/umwelt-facilitator.md
git commit -m "feat: add Umwelt Facilitator agent prompt"
```

---

### Task 9: Create workflow — archaeoacoustic-toning-workflow.yaml

**Files:**

- Create: `.claude/skills/healing-swarm/content/archaeoacoustic-toning-workflow.yaml`

**Step 1: Write the workflow**

Follow the pattern from `research/coherence-workflow.yaml` (name, version, description, stages, practice_parameters, integration, output_structure, quality_gates, error_handling, examples).

Stages: intake → research → practice_creation → content_writing → ethics_review

Practice parameters:

- Depths: Foundation (single frequency, listening-only, 15 min), Standard (2-3 frequencies, vocal matching, 20 min), Deep (full spectrum with harmonics, 25 min)
- Frequencies: 117 Hz, 139.01 Hz, 369 Hz, 432 Hz
- Each frequency segment: listen (1 min) → hum (1.5 min) → open vocal tone (1.5 min) → explore harmonics (1 min)

**Step 2: Validate YAML syntax**

Run: `cd I:/GithubI/claude/Magic/healing-swarm-skills && npm run validate`

Expected: Validation passes (or only pre-existing warnings)

**Step 3: Commit**

```bash
git add .claude/skills/healing-swarm/content/archaeoacoustic-toning-workflow.yaml
git commit -m "feat: add archaeoacoustic toning workflow"
```

---

### Task 10: Create workflow — sound-consciousness-workflow.yaml

**Files:**

- Create: `.claude/skills/healing-swarm/content/sound-consciousness-workflow.yaml`

**Step 1: Write the workflow**

Stages: intake → research → exhibit_design → assessment_design → content_writing → ethics_review

Practice parameters:

- Duration: 20-30 min
- Structure: Series of short audio "consciousness samples" with Milliere 6D self-assessment after each
- Safety: Dissociation screening, grounding anchors between samples, return-to-baseline protocol

**Step 2: Validate YAML**

Run: `npm run validate`

**Step 3: Commit**

```bash
git add .claude/skills/healing-swarm/content/sound-consciousness-workflow.yaml
git commit -m "feat: add sound consciousness workflow"
```

---

### Task 11: Create workflow — holotechnica-workflow.yaml

**Files:**

- Create: `.claude/skills/healing-swarm/content/holotechnica-workflow.yaml`

**Step 1: Write the workflow**

Stages: intake → ingredient_research → stack_design → timing_calibration → content_writing → ethics_review

Practice parameters:

- Depths: Simple (2 ingredients, 15 min), Standard (3-4 ingredients, 30 min), Extended (5+ ingredients, 45 min)
- Ingredient library: breathwork, sound/toning, visualization, body scan, movement, silence, hypnagogic techniques
- HARD EXCLUSION: pharmaco-technologies
- Additive contraindication logic in quality gates

**Step 2: Validate YAML**

Run: `npm run validate`

**Step 3: Commit**

```bash
git add .claude/skills/healing-swarm/content/holotechnica-workflow.yaml
git commit -m "feat: add holotechnica stack workflow"
```

---

### Task 12: Create workflow — hyperhumanism-workflow.yaml

**Files:**

- Create: `.claude/skills/healing-swarm/content/hyperhumanism-workflow.yaml`

**Step 1: Write the workflow**

Stages: intake → research → inquiry_design → content_writing → ethics_review

Practice parameters:

- Duration: 20-30 min
- 4 phases: Inventory (capacities you possess) → Audit (where outsourced?) → Reclamation (which to reclaim?) → Practice design (concrete micro-practice)
- Not anti-technology; no shame/guilt framing

**Step 2: Validate YAML**

Run: `npm run validate`

**Step 3: Commit**

```bash
git add .claude/skills/healing-swarm/content/hyperhumanism-workflow.yaml
git commit -m "feat: add hyperhumanism inquiry workflow"
```

---

### Task 13: Create workflow — umwelt-workflow.yaml

**Files:**

- Create: `.claude/skills/healing-swarm/content/umwelt-workflow.yaml`

**Step 1: Write the workflow**

Stages: intake → research → practice_design → content_writing → ethics_review

Practice parameters:

- Duration: 15-25 min
- 4 levels: Sensory inventory → Sensory foregrounding → Perceiving-as-other → Integration
- Safety: Dissociation screening, grounding anchors, return-to-default protocol

**Step 2: Validate YAML**

Run: `npm run validate`

**Step 3: Commit**

```bash
git add .claude/skills/healing-swarm/content/umwelt-workflow.yaml
git commit -m "feat: add umwelt practice workflow"
```

---

### Task 14: Create workflow — cyberdelic-research-workflow.yaml

**Files:**

- Create: `.claude/skills/healing-swarm/research/cyberdelic-research-workflow.yaml`

**Step 1: Write the workflow**

Stages: intake → primary_research + traditions_research + clinical_context [parallel] → synthesis → ethics_review

Research scope: Endo-technology evidence base, archaeoacoustic frequency research, consciousness assessment models (Milliere 6D, Hood mystical experience), altered states vs traits literature

**Step 2: Validate YAML**

Run: `npm run validate`

**Step 3: Commit**

```bash
git add .claude/skills/healing-swarm/research/cyberdelic-research-workflow.yaml
git commit -m "feat: add cyberdelic research workflow"
```

---

### Task 15: Create template — archaeoacoustic-toning.md

**Files:**

- Create: `.claude/skills/healing-swarm/content/templates/archaeoacoustic-toning.md`

**Step 1: Write the template**

Follow the pattern from `content/templates/sound-protocol.md` (Structure → Element Guidelines → Accessibility Guidelines → Quality Checklist), adapted for archaeoacoustic toning:

Key sections in structure:

- Practice metadata (frequency set, depth, duration)
- Safety — hearing, volume, vocal (same rigor as sound-protocol)
- Grounding Anchor (pre-practice)
- Frequency Introduction (historical context for the site/frequency)
- Listening Phase (absorb the reference tone)
- Vocal Matching Phase (hum, then open vowel at frequency)
- Harmonics Exploration Phase (explore overtones)
- Silence and Integration
- 6D Self-Assessment (optional — Milliere model)
- Evidence Box (archaeoacoustic measurements + consciousness research)
- Variations (listening-only, single frequency, group toning)
- Journal Prompt

**Step 2: Commit**

```bash
git add .claude/skills/healing-swarm/content/templates/archaeoacoustic-toning.md
git commit -m "feat: add archaeoacoustic toning content template"
```

---

### Task 16: Create template — holotechnica-recipe.md

**Files:**

- Create: `.claude/skills/healing-swarm/content/templates/holotechnica-recipe.md`

**Step 1: Write the template**

Key sections:

- Recipe metadata (ingredients, depth, total duration, trait target)
- Safety — additive contraindication check, pharmaco-technology exclusion
- Ingredients List (with individual evidence and contraindication status)
- Preparation Phase (intention-setting, environment, screening)
- Sequence with Timing Marks (ingredient 1 → transition → ingredient 2 → ...)
- Transition Guidance between ingredients
- Integration Phase (journaling, grounding, reflection)
- Trait-Targeting Intention (what lasting change is this designed to support?)
- Evidence Box (per-ingredient evidence + stacking methodology note)
- Variations (simplified, extended, swap ingredients)
- Journal Prompts (post-practice reflection on state vs trait)
- Quality Checklist

**Step 2: Commit**

```bash
git add .claude/skills/healing-swarm/content/templates/holotechnica-recipe.md
git commit -m "feat: add holotechnica recipe content template"
```

---

### Task 17: Create template — umwelt-exercise.md

**Files:**

- Create: `.claude/skills/healing-swarm/content/templates/umwelt-exercise.md`

**Step 1: Write the template**

Key sections:

- Practice metadata (level, duration, target organism/system for perceiving-as-other)
- Safety — dissociation screening, grounding protocol, return-to-default requirement
- Sensory Inventory (notice all active senses)
- Sensory Foregrounding (foreground usually-background senses: proprioception, interoception, thermoception)
- Perceiving-as-Other Visualization (guided imagination with explicit framing as imagination)
- Return-to-Default Protocol (mandatory grounding sequence)
- Reflection Prompts
- Umwelt Map Template (visual/written map of sensory experience)
- Evidence Box (embodied cognition research, sensory augmentation)
- Variations (different organisms, different senses, group exercise)
- Quality Checklist

**Step 2: Commit**

```bash
git add .claude/skills/healing-swarm/content/templates/umwelt-exercise.md
git commit -m "feat: add umwelt exercise content template"
```

---

### Task 18: Update manifest.yaml — Add 6 skills and 4 agents

**Files:**

- Modify: `.claude/skills/healing-swarm/manifest.yaml`

**Step 1: Add 6 new skill definitions**

Insert a new section after the Sound Healing Skills section (after line ~553):

```yaml
# ─────────────────────────────────────────────────────────────────────────────
# ARCHAEOACOUSTIC & SOUND CONSCIOUSNESS SKILLS (Smith)
# ─────────────────────────────────────────────────────────────────────────────

- name: archaeoacoustic-toning
  trigger: /archaeoacoustic-toning
  description: |
    Guided vocal toning at sacred site resonant frequencies based on
    Carl Hayden Smith's archaeoacoustic research. Progressive depths
    from listening through harmonics exploration.
  category: sound
  agents:
    - hyperhumanism-researcher
    - archaeoacoustic-guide
    - content-writer
    - ethics-guardian
  workflow: content/archaeoacoustic-toning-workflow.yaml
  requires_ethics_approval: true
  templates:
    - content/templates/archaeoacoustic-toning.md
  outputs:
    - toning-protocol.md
    - session-timing.json
    - quick-reference.md
  example_usage: |
    /archaeoacoustic-toning "King's Chamber 117 Hz" --depth foundation
    /archaeoacoustic-toning "Egyptian temple series" --depth deep

- name: sound-consciousness
  trigger: /sound-consciousness
  description: |
    Museum of Consciousness-style audio experience with Milliere 6D
    self-assessment. Short consciousness samples with guided
    self-assessment between each.
  category: sound
  agents:
    - hyperhumanism-researcher
    - archaeoacoustic-guide
    - content-writer
    - ethics-guardian
  workflow: content/sound-consciousness-workflow.yaml
  requires_ethics_approval: true
  outputs:
    - consciousness-exhibit.md
    - self-assessment-form.md
    - session-timing.json
  example_usage: |
    /sound-consciousness "mindfulness samples" --duration 20
    /sound-consciousness "introspection journey" --depth deep

- name: holotechnica-stack
  trigger: /holotechnica-stack
  description: |
    Personalized endo-technology experience recipe builder targeting
    altered traits. Combines breathwork, sound, visualization, body
    scan, movement, silence into structured stacks. NO pharmaco-
    technologies (HARD EXCLUSION).
  category: consciousness
  agents:
    - hyperhumanism-researcher
    - holotechnica-architect
    - content-writer
    - ethics-guardian
  workflow: content/holotechnica-workflow.yaml
  requires_ethics_approval: true
  templates:
    - content/templates/holotechnica-recipe.md
  outputs:
    - holotechnica-recipe.md
    - ingredient-matrix.md
    - integration-journal.md
  example_usage: |
    /holotechnica-stack "morning activation" --depth simple --duration 15
    /holotechnica-stack "deep exploration" --depth extended --duration 45

# ─────────────────────────────────────────────────────────────────────────────
# HYPERHUMANISM & CONSCIOUSNESS RESEARCH SKILLS (Smith)
# ─────────────────────────────────────────────────────────────────────────────

- name: hyperhumanism-inquiry
  trigger: /hyperhumanism-inquiry
  description: |
    Guided philosophical inquiry on consciousness, technology, and
    innate human capacities. Four phases: inventory, audit, reclamation,
    practice design. Based on Smith's Hyperhumanism framework.
  category: consciousness
  agents:
    - hyperhumanism-researcher
    - umwelt-facilitator
    - content-writer
    - ethics-guardian
  workflow: content/hyperhumanism-workflow.yaml
  requires_ethics_approval: true
  outputs:
    - capacity-inventory.md
    - reclamation-commitment.md
    - micro-practice.md
  example_usage: |
    /hyperhumanism-inquiry "my relationship with technology"
    /hyperhumanism-inquiry "reclaiming wonder" --focus awe

- name: umwelt-practice
  trigger: /umwelt-practice
  description: |
    Sensory augmentation exercises for perceiving-as-other and extending
    the sensorium. Four levels from sensory inventory through perceiving-
    as-other. Requires grounding and return-to-default protocol.
    CONTRAINDICATED for dissociative disorders.
  category: consciousness
  agents:
    - hyperhumanism-researcher
    - umwelt-facilitator
    - content-writer
    - ethics-guardian
  workflow: content/umwelt-workflow.yaml
  requires_ethics_approval: true
  templates:
    - content/templates/umwelt-exercise.md
  outputs:
    - umwelt-practice.md
    - sensory-map.md
    - grounding-guide.md
  example_usage: |
    /umwelt-practice "forest sensing" --level foregrounding
    /umwelt-practice "octopus perception" --level perceiving_as_other

- name: cyberdelic-research
  trigger: /cyberdelic-research
  description: |
    Deep research into consciousness technologies and endo-technology
    science. Covers endo-technology evidence, archaeoacoustic research,
    consciousness assessment models, altered states vs traits literature.
  category: research
  agents:
    - hyperhumanism-researcher
    - traditions-scholar
    - clinical-researcher
    - ethics-guardian
  workflow: research/cyberdelic-research-workflow.yaml
  requires_ethics_approval: true
  outputs:
    - research-brief.md
    - evidence-synthesis.md
    - technology-assessment.md
  example_usage: |
    /cyberdelic-research "endo-technology evidence base"
    /cyberdelic-research "archaeoacoustic consciousness effects" --depth comprehensive
```

**Step 2: Add 4 new agent definitions**

Insert in the agents section, after the Consciousness Research Agents block (~line 1097):

```yaml
# Hyperhumanism & Archaeoacoustic Agents (Smith)
archaeoacoustic-guide:
  prompt: content/archaeoacoustic-guide.md
  tools: [Read, Write, Glob]

holotechnica-architect:
  prompt: content/holotechnica-architect.md
  tools: [Read, Write, Glob]

hyperhumanism-researcher:
  prompt: research/hyperhumanism-researcher.md
  tools: [WebSearch, WebFetch, Read, Glob, Grep]

umwelt-facilitator:
  prompt: content/umwelt-facilitator.md
  tools: [Read, Write, Glob]
```

**Step 3: Validate manifest**

Run: `cd I:/GithubI/claude/Magic/healing-swarm-skills && npm run validate`

Expected: Validation passes

**Step 4: Commit**

```bash
git add .claude/skills/healing-swarm/manifest.yaml
git commit -m "feat: register 6 Smith skills and 4 agents in manifest"
```

---

### Task 19: Run full validation

**Files:** None

**Step 1: Run npm validate**

Run: `cd I:/GithubI/claude/Magic/healing-swarm-skills && npm run validate`

Expected: All checks pass. Fix any YAML syntax errors before proceeding.

---

### Task 20: Create website skill doc — archaeoacoustic-toning.mdx

**Files:**

- Create: `website/docs/skills/archaeoacoustic-toning.mdx`

**Step 1: Write the skill documentation page**

Follow the pattern from `website/docs/skills/coherence.mdx` or `website/docs/skills/sound-healing.mdx`:

- Frontmatter with sidebar_position
- Overview paragraph
- How It Works section (agents, workflow stages)
- Practice Parameters table
- Frequency Reference table (117 Hz, 139.01 Hz, 369 Hz, 432 Hz with sites and sources)
- Depth Levels (Foundation, Standard, Deep)
- Safety section
- Evidence section
- Example Usage code blocks
- See Also links

**Step 2: Commit**

```bash
git add website/docs/skills/archaeoacoustic-toning.mdx
git commit -m "docs: add archaeoacoustic toning skill page"
```

---

### Task 21: Create website skill doc — sound-consciousness.mdx

**Files:**

- Create: `website/docs/skills/sound-consciousness.mdx`

**Step 1: Write the skill documentation page**

Cover: Museum of Consciousness framework, Milliere 6D model, consciousness samples, self-assessment design, safety (dissociation screening).

**Step 2: Commit**

```bash
git add website/docs/skills/sound-consciousness.mdx
git commit -m "docs: add sound consciousness skill page"
```

---

### Task 22: Create website skill doc — holotechnica-stack.mdx

**Files:**

- Create: `website/docs/skills/holotechnica-stack.mdx`

**Step 1: Write the skill documentation page**

Cover: Holotechnica framework, ingredient library, stack depths, altered traits vs states, pharmaco-technology exclusion, additive contraindication logic, example stacks.

**Step 2: Commit**

```bash
git add website/docs/skills/holotechnica-stack.mdx
git commit -m "docs: add holotechnica stack skill page"
```

---

### Task 23: Create website skill doc — hyperhumanism-inquiry.mdx

**Files:**

- Create: `website/docs/skills/hyperhumanism-inquiry.mdx`

**Step 1: Write the skill documentation page**

Cover: Hyperhumanism framework, 4-phase inquiry structure, innate capacities, not anti-technology, example inquiries.

**Step 2: Commit**

```bash
git add website/docs/skills/hyperhumanism-inquiry.mdx
git commit -m "docs: add hyperhumanism inquiry skill page"
```

---

### Task 24: Create website skill doc — umwelt-practice.mdx

**Files:**

- Create: `website/docs/skills/umwelt-practice.mdx`

**Step 1: Write the skill documentation page**

Cover: Umwelt concept, 4 levels, perceiving-as-other, safety architecture (dissociation), return-to-default protocol.

**Step 2: Commit**

```bash
git add website/docs/skills/umwelt-practice.mdx
git commit -m "docs: add umwelt practice skill page"
```

---

### Task 25: Create website skill doc — cyberdelic-research.mdx

**Files:**

- Create: `website/docs/skills/cyberdelic-research.mdx`

**Step 1: Write the skill documentation page**

Cover: Cyberdelic taxonomy (endo/cyberdelic/pharmaco), research scope, consciousness assessment models, altered states vs traits, example queries.

**Step 2: Commit**

```bash
git add website/docs/skills/cyberdelic-research.mdx
git commit -m "docs: add cyberdelic research skill page"
```

---

### Task 26: Create worked example — archaeoacoustic-toning

**Files:**

- Create: `website/docs/examples/archaeoacoustic-toning.mdx`

**Step 1: Write the worked example**

Follow the pattern from `website/docs/examples/coherence-meditation.mdx`:

- The Skill table
- Practice structure
- Research basis blockquote
- Safety review
- Try It bash blocks

Example: "King's Chamber Resonance — 117 Hz Foundation Practice"

**Step 2: Commit**

```bash
git add website/docs/examples/archaeoacoustic-toning.mdx
git commit -m "docs: add archaeoacoustic toning worked example"
```

---

### Task 27: Create worked example — holotechnica-stack

**Files:**

- Create: `website/docs/examples/holotechnica-stack.mdx`

**Step 1: Write the worked example**

Example: "Morning Activation Stack — Breathwork + Sound Toning + Visualization"

**Step 2: Commit**

```bash
git add website/docs/examples/holotechnica-stack.mdx
git commit -m "docs: add holotechnica stack worked example"
```

---

### Task 28: Create worked example — umwelt-practice

**Files:**

- Create: `website/docs/examples/umwelt-practice.mdx`

**Step 1: Write the worked example**

Example: "Forest Sensing — Perceiving-as-Other Practice"

**Step 2: Commit**

```bash
git add website/docs/examples/umwelt-practice.mdx
git commit -m "docs: add umwelt practice worked example"
```

---

### Task 29: Update website/sidebars.ts — Register all new pages

**Files:**

- Modify: `website/sidebars.ts`

**Step 1: Add 6 skill pages to Skills items array**

Add after "skills/safety-infrastructure" (~line 48):

```typescript
        "skills/archaeoacoustic-toning",
        "skills/sound-consciousness",
        "skills/holotechnica-stack",
        "skills/hyperhumanism-inquiry",
        "skills/umwelt-practice",
        "skills/cyberdelic-research",
```

**Step 2: Add 3 example pages to Examples items array**

Add after "examples/spectrum-meditation" (~line 89):

```typescript
        "examples/archaeoacoustic-toning",
        "examples/holotechnica-stack",
        "examples/umwelt-practice",
```

**Step 3: Commit**

```bash
git add website/sidebars.ts
git commit -m "docs: register Smith skill and example pages in sidebar"
```

---

### Task 30: Update website/docs/skills/index.mdx — Add Smith skill sections

**Files:**

- Modify: `website/docs/skills/index.mdx`

**Step 1: Read current skills index**

**Step 2: Add two new category sections**

Add "Archaeoacoustic & Sound Consciousness Skills (Smith)" section with 3 skills, and "Hyperhumanism & Consciousness Research Skills (Smith)" section with 3 skills.

**Step 3: Commit**

```bash
git add website/docs/skills/index.mdx
git commit -m "docs: add Smith skill categories to skills index"
```

---

### Task 31: Update website/docs/examples/index.mdx — Add Smith examples section

**Files:**

- Modify: `website/docs/examples/index.mdx`

**Step 1: Read current examples index**

**Step 2: Add "Hyperhumanism & Sound Consciousness Examples (Smith)" section**

Add 3 example entries.

**Step 3: Commit**

```bash
git add website/docs/examples/index.mdx
git commit -m "docs: add Smith examples to examples index"
```

---

### Task 32: Update website/docs/about.mdx — Add Smith acknowledgment

**Files:**

- Modify: `website/docs/about.mdx`

**Step 1: Add Smith to acknowledgments**

Add Carl Hayden Smith, Museum of Consciousness, archaeoacoustics, hyperhumanism.

**Step 2: Commit**

```bash
git add website/docs/about.mdx
git commit -m "docs: add Smith to about page acknowledgments"
```

---

### Task 33: Update website/docs/architecture/agents.mdx — Add 4 new agents

**Files:**

- Modify: `website/docs/architecture/agents.mdx`

**Step 1: Add Hyperhumanism Researcher to Research section, add Archaeoacoustic Guide, Holotechnica Architect, Umwelt Facilitator to Build section**

**Step 2: Commit**

```bash
git add website/docs/architecture/agents.mdx
git commit -m "docs: add 4 Smith agents to agents page"
```

---

### Task 34: Update website homepage — Feature new skills

**Files:**

- Modify: `website/src/components/HomepageFeatures/index.tsx`

**Step 1: Read current homepage features**

**Step 2: Add Smith/hyperhumanism to ExampleShowcase or feature cards**

Update the showcase to include archaeoacoustic toning and/or holotechnica stacking.

**Step 3: Commit**

```bash
git add website/src/components/HomepageFeatures/index.tsx
git commit -m "docs: feature Smith skills on homepage"
```

---

### Task 35: Update timeline — README.md + changelog.mdx + CHANGELOG.md

**Files:**

- Modify: `README.md` (Development Timeline section)
- Modify: `website/docs/changelog.mdx` (new dated section at top)
- Modify: `CHANGELOG.md` (under [Unreleased] or new version)

**Step 1: Add dated entry to changelog.mdx**

Add at top (below header):

```markdown
## 2026-03-08 — Hyperhumanism & Sound Consciousness Skills (Smith)

**Based on Carl Hayden Smith's work: Museum of Consciousness, Archaeoacoustics, Hyperhumanism**

### Skills Added (6)

| Skill                  | Trigger                   | Category      |
| ---------------------- | ------------------------- | ------------- |
| Archaeoacoustic Toning | `/archaeoacoustic-toning` | Sound         |
| Sound Consciousness    | `/sound-consciousness`    | Sound         |
| Holotechnica Stack     | `/holotechnica-stack`     | Consciousness |
| Hyperhumanism Inquiry  | `/hyperhumanism-inquiry`  | Consciousness |
| Umwelt Practice        | `/umwelt-practice`        | Consciousness |
| Cyberdelic Research    | `/cyberdelic-research`    | Research      |

### Agents Added (4)

- **Archaeoacoustic Guide** — Sacred site frequency toning and sound consciousness protocols
- **Holotechnica Architect** — Endo-technology experience stack design
- **Hyperhumanism Researcher** — Smith's work, archaeoacoustics, consciousness technology evidence
- **Umwelt Facilitator** — Sensory augmentation and hyperhumanism inquiry

### Workflows Added (6)

- `archaeoacoustic-toning-workflow.yaml` — Frequency-based toning practice creation
- `sound-consciousness-workflow.yaml` — Museum of Consciousness exhibit design
- `holotechnica-workflow.yaml` — Endo-technology stack design
- `hyperhumanism-workflow.yaml` — Philosophical inquiry on innate capacities
- `umwelt-workflow.yaml` — Sensory augmentation practice design
- `cyberdelic-research-workflow.yaml` — Consciousness technology evidence synthesis

### Templates Added (3)

- `archaeoacoustic-toning.md` — Frequency-based toning practice structure
- `holotechnica-recipe.md` — Experience stack recipe with ingredient matrix
- `umwelt-exercise.md` — Sensory augmentation exercise with return-to-default

### Shared Resources Updated

- `terminology.md` — Added Smith/hyperhumanism terminology section
- `ethics-guardrails.md` — Added archaeoacoustic, umwelt, and holotechnica safety sections
- `contraindications.md` — Added Smith practice contraindications

### Documentation

- 6 skill documentation pages
- 3 worked example pages
- Updated: sidebars, skills index, examples index, about, agents, homepage
```

**Step 2: Add condensed entry to README.md**

**Step 3: Add entry to CHANGELOG.md**

**Step 4: Update cumulative totals**

New totals: 53 skills, 30 agents, 26 workflows, 13 templates, 9 shared resources (updated), 16 worked examples

**Step 5: Commit**

```bash
git add README.md website/docs/changelog.mdx CHANGELOG.md
git commit -m "docs: update timeline with Smith/hyperhumanism skills"
```

---

### Task 36: Build and verify website

**Files:** None

**Step 1: Build the Docusaurus website**

Run: `cd I:/GithubI/claude/Magic/healing-swarm-skills/website && npm run build`

Expected: Build succeeds with no errors.

**Step 2: Fix any build errors**

If broken links or missing pages, fix and rebuild.

---

### Task 37: Final validation and commit

**Files:** None

**Step 1: Run npm validate from project root**

Run: `cd I:/GithubI/claude/Magic/healing-swarm-skills && npm run validate`

Expected: All checks pass.

**Step 2: Verify git status**

Run: `git status`

Expected: All changes committed on feat/smith-hyperhumanism-skills branch.

---

### Task 38: Create pull request

**Step 1: Push branch to remote**

Run: `git push -u origin feat/smith-hyperhumanism-skills`

**Step 2: Create PR**

```bash
gh pr create --title "feat: add 6 Smith hyperhumanism & sound consciousness skills" --body "$(cat <<'EOF'
## Summary

- **6 new skills** based on Carl Hayden Smith's work: archaeoacoustic toning, sound consciousness, holotechnica stack, hyperhumanism inquiry, umwelt practice, cyberdelic research
- **4 new agents:** Archaeoacoustic Guide, Holotechnica Architect, Hyperhumanism Researcher, Umwelt Facilitator
- **6 new workflows** with mandatory ethics review
- **3 new content templates** for toning, experience stacks, and sensory exercises
- Updated shared resources (terminology, ethics guardrails, contraindications)
- **6 skill doc pages + 3 worked examples** on website
- Updated sidebars, indexes, about, agents, homepage, and timeline

## Sources

- Smith, C.H., Middleton, T., Crossley, J. (2023). "The Intentional Use of Sound Design in the Egyptian Temples and the Great Pyramid." EVA London 2023.
- Smith, C.H. et al. (2021). "The Museum of Consciousness." EVA 2021.
- Jahn, R.G. & Dunne, B.J. (1992). Acoustical resonances of archaeological sites. JASA 91(6).

## New cumulative totals

53 skills, 30 agents, 26 workflows, 13 templates, 16 worked examples

## Test plan

- [ ] `npm run validate` passes
- [ ] `cd website && npm run build` succeeds
- [ ] All 6 new skill pages render correctly
- [ ] All 3 worked example pages render correctly
- [ ] Sidebar navigation includes all new pages
- [ ] Timeline updated in both README.md and changelog.mdx

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

**Step 3: Merge PR (if approved)**

Run: `gh pr merge --merge`

---

### Task 39: Post-merge cleanup

**Step 1: Switch back to master and pull**

```bash
git checkout master && git pull
```

**Step 2: Update auto-memory with new totals**

Update `C:\Users\info\.claude\projects\I--GithubI-claude-Magic\memory\MEMORY.md` current totals to: 53 skills, 30 agents, 26 workflows, 13 templates, 9 shared resources, 16 worked examples
