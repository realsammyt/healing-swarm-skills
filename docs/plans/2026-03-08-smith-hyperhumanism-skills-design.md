# Carl Hayden Smith — Hyperhumanism & Sound Consciousness Skills Design

**Date:** 2026-03-08
**Status:** Approved
**Author:** Claude Opus 4.6 + User

---

## Overview

Integration of Carl Hayden Smith's work on archaeoacoustics, hyperhumanism, and consciousness technology into the healing-swarm-skills framework. Smith is Founder and Director of the Museum of Consciousness at Balliol College, Oxford University, co-founder of the Cyberdelics Society, and developer of the Hyperhumanism framework.

### Sources

- Smith, C.H., Middleton, T., Crossley, J. (2023). "The Intentional Use of Sound Design in the Egyptian Temples and the Great Pyramid." Proceedings of EVA London 2023. doi:10.14236/ewic/EVA2023.47
- Smith, C.H. et al. (2021). "The Museum of Consciousness: Interactive, audio-based exhibits for cultivating altered states of consciousness." EVA 2021. doi:10.14236/ewic/EVA2021.55
- Smith's Holotechnica framework (endo-technologies, cyberdelics, altered states vs altered traits)
- Hyperhumanism: technology as catalyst for innate human abilities
- Milliere's 6D model of self-consciousness
- Jahn, R.G. & Dunne, B.J. (1992). Acoustical resonances of archaeological sites. JASA 91(6).

---

## Architecture: Two Categories, Six Skills

### Category A: Archaeoacoustic & Sound Consciousness (Practice)

#### Skill 1: `/archaeoacoustic-toning`

- **Purpose:** Guided vocal toning at sacred site resonant frequencies
- **Duration:** 15-25 min
- **Framework:** Smith's EVA23 archaeoacoustic research
- **Frequencies:** 117 Hz (King's Chamber, Giza), 139.01 Hz (Saqqara), 369 Hz, 432 Hz (Egyptian temples)
- **Methodology:** 5-minute segments per frequency — listen, hum, open vocal tone, explore harmonics
- **Evidence:** Preliminary (Jahn & Dunne 1992, EEG prefrontal shift at 110 Hz, Smith et al. 2023)
- **Safety:** Safe audio range only, hearing screening, vocal strain awareness, grounding bookends
- **Depths:** Foundation (single frequency, listening), Standard (2-3 frequencies, vocal matching), Deep (full spectrum, harmonics)
- **Primary agent:** Archaeoacoustic Guide
- **Workflow:** archaeoacoustic-toning-workflow.yaml

#### Skill 2: `/sound-consciousness`

- **Purpose:** Museum of Consciousness-style audio experience with self-assessment
- **Duration:** 20-30 min
- **Framework:** Museum of Consciousness exhibits + Milliere's 6D model
- **Content:** Short audio "consciousness samples" — mindfulness meditations, placebo effects, sound journeys, introspection techniques
- **Assessment:** After each sample, self-rate on Milliere's 6 dimensions: sense of agency, sense of ownership, sense of self-location, sense of first-person perspective, sense of unity, narrative self
- **Evidence:** Theoretical (Milliere's model) / Moderate (meditation and sound research)
- **Safety:** Dissociation screening, grounding anchors between samples, return-to-baseline protocol, contraindicated for active psychosis
- **Primary agent:** Archaeoacoustic Guide
- **Workflow:** sound-consciousness-workflow.yaml

#### Skill 3: `/holotechnica-stack`

- **Purpose:** Personalized endo-technology experience recipe builder targeting altered traits
- **Duration:** Build session 15-20 min; designed stack 30-45 min
- **Framework:** Smith's Holotechnica — combining endo-technologies into structured stacks
- **Ingredients:** Breathwork, sound/toning, visualization, body scan, movement, silence, hypnagogic techniques
- **Critical distinction:** Targets altered traits (lasting developmental change) not just altered states (temporary peaks). Includes preparation and integration phases
- **Evidence:** Theoretical (Smith's framework) / Moderate (individual components well-researched)
- **Safety:** No pharmaco-technologies (HARD EXCLUSION). Pre-practice screening. Integration journaling required. Contraindication cross-check across all components — if any ingredient is contraindicated, the stack is contraindicated
- **Depths:** Simple (2 ingredients, 15 min), Standard (3-4 ingredients, 30 min), Extended (5+ ingredients, 45 min)
- **Primary agent:** Holotechnica Architect
- **Workflow:** holotechnica-workflow.yaml

### Category B: Hyperhumanism & Consciousness Research (Inquiry)

#### Skill 4: `/hyperhumanism-inquiry`

- **Purpose:** Guided philosophical inquiry on consciousness, technology, and innate capacities
- **Duration:** 20-30 min
- **Framework:** Smith's Hyperhumanism — technology as catalyst, not replacement
- **4 Phases:** (1) Inventory — capacities you possess (breath, wonder, awe, memory, ritual, imagination), (2) Audit — where have you outsourced these?, (3) Reclamation — which capacity to reclaim?, (4) Practice design — concrete micro-practice
- **Evidence:** Theoretical (philosophical framework)
- **Safety:** Not anti-technology. No shame/guilt framing. Grounding in practical action
- **Outputs:** Capacity inventory, reclamation commitment, designed micro-practice
- **Primary agent:** Umwelt Facilitator
- **Workflow:** hyperhumanism-workflow.yaml

#### Skill 5: `/umwelt-practice`

- **Purpose:** Sensory augmentation exercises — perceiving-as-other, extending the sensorium
- **Duration:** 15-25 min
- **Framework:** Smith's umwelt hacking — "Can we sense like a forest, a mycelium network, or an octopus?"
- **4 Levels:** (1) Sensory inventory — notice all active senses, (2) Sensory foregrounding — foreground usually-background senses (proprioception, interoception, thermoception), (3) Perceiving-as-other — guided imagination of sensing as another organism, (4) Integration — what did the shift reveal?
- **Evidence:** Preliminary (embodied cognition research, sensory augmentation studies)
- **Safety:** Grounding required. Explicit return-to-default protocol. Contraindicated for dissociative disorders, active derealization
- **Outputs:** Sensory awareness journal, umwelt map, designed practice
- **Primary agent:** Umwelt Facilitator
- **Workflow:** umwelt-workflow.yaml

#### Skill 6: `/cyberdelic-research`

- **Purpose:** Deep research into consciousness technologies and endo-technology science
- **Duration:** Research output (not timed practice)
- **Framework:** Smith's endo/cyberdelic/pharmaco taxonomy + archaeoacoustic literature
- **Scope:** (1) Endo-technology evidence base, (2) archaeoacoustic frequency research, (3) consciousness assessment models (Milliere 6D, Hood mystical experience), (4) altered states vs traits literature
- **Evidence:** Research tool — produces evidence-graded output
- **Safety:** Standard research ethics, no overclaiming
- **Primary agent:** Hyperhumanism Researcher
- **Workflow:** cyberdelic-research-workflow.yaml

---

## Agents (4 new)

| Agent                    | Type          | Skills Served                                              | Tools                                 |
| ------------------------ | ------------- | ---------------------------------------------------------- | ------------------------------------- |
| Archaeoacoustic Guide    | Build/Content | archaeoacoustic-toning, sound-consciousness                | Read, Write, Glob                     |
| Holotechnica Architect   | Build/Content | holotechnica-stack                                         | Read, Write, Glob                     |
| Hyperhumanism Researcher | Research      | cyberdelic-research (primary), all others (research stage) | WebSearch, WebFetch, Read, Glob, Grep |
| Umwelt Facilitator       | Build/Content | umwelt-practice, hyperhumanism-inquiry                     | Read, Write, Glob                     |

All agents load: ethics-guardrails.md, terminology.md, voice-guide.md

---

## Workflows (6 new)

| Workflow                             | Stages                                                                                                    |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| archaeoacoustic-toning-workflow.yaml | intake → research → practice_creation → content_writing → ethics_review                                   |
| sound-consciousness-workflow.yaml    | intake → research → exhibit_design → assessment_design → content_writing → ethics_review                  |
| holotechnica-workflow.yaml           | intake → ingredient_research → stack_design → timing_calibration → content_writing → ethics_review        |
| hyperhumanism-workflow.yaml          | intake → research → inquiry_design → content_writing → ethics_review                                      |
| umwelt-workflow.yaml                 | intake → research → practice_design → content_writing → ethics_review                                     |
| cyberdelic-research-workflow.yaml    | intake → primary_research + traditions_research + clinical_context [parallel] → synthesis → ethics_review |

All workflows end with mandatory ethics_review (ethics-guardian veto power).

---

## Templates (3 new)

| Template                  | Key Sections                                                                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| archaeoacoustic-toning.md | Grounding, frequency introduction, listening phase, vocal matching, harmonics exploration, integration, 6D self-assessment               |
| holotechnica-recipe.md    | Ingredients list, preparation, sequence with timing marks, transitions, integration, trait-targeting intention, journaling prompts       |
| umwelt-exercise.md        | Sensory inventory, foregrounding exercise, perceiving-as-other visualization, return-to-default, reflection prompts, umwelt map template |

---

## Shared Resource Updates

| Resource             | Additions                                                                                                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| terminology.md       | archaeoacoustics, endo-technology, cyberdelic, holotechnica, umwelt/umwelt hacking, hyperhumanism, altered traits vs altered states, Milliere 6D model, sacred frequencies (117 Hz, 139.01 Hz, 369 Hz, 432 Hz), experience stacking, consciousness recipes |
| ethics-guardrails.md | archaeoacoustic safety (safe audio range, hearing screening), umwelt practice safety (dissociation risk with perceptual shifting), holotechnica stacking safety (additive contraindication logic), pharmaco-technology hard exclusion                      |
| contraindications.md | archaeoacoustic toning (hearing conditions, tinnitus, vocal cord issues), umwelt practice (dissociative disorders, derealization), holotechnica stacking (if any ingredient contraindicated, stack is contraindicated)                                     |

---

## Website & Documentation

- 6 skill doc pages (website/docs/skills/)
- 3 worked example pages (website/docs/examples/)
- Examples index: new "Hyperhumanism & Sound Consciousness Examples (Smith)" section
- Skills index: two new category sections
- Sidebars: register all new pages
- About page: add Smith, archaeoacoustics, hyperhumanism acknowledgments
- Agents page: list 4 new agents
- Homepage: feature new skills
- Timeline: update both README.md and changelog.mdx per CLAUDE.md workflow

---

## Cumulative Totals After Implementation

| Category         | Before | After                  |
| ---------------- | ------ | ---------------------- |
| Skills           | 47     | 53                     |
| Agents           | 26     | 30                     |
| Workflows        | 20     | 26                     |
| Templates        | 10     | 13                     |
| Shared Resources | 9      | 9 (updated, not added) |
| Worked Examples  | 13     | 16                     |
