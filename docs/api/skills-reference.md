# Skills Reference

> Quick reference for all healing swarm skills.

---

## Overview

| Skill | Trigger | Category | Purpose |
|-------|---------|----------|---------|
| [healing-research](#healing-research) | `/healing-research` | research | Deep research into healing traditions and clinical evidence |
| [traditions-research](#traditions-research) | `/traditions-research` | research | Research specific healing traditions |
| [clinical-research](#clinical-research) | `/clinical-research` | research | Systematic review of clinical evidence |
| [mechanism-mapping](#mechanism-mapping) | `/mechanism-mapping` | research | Bridge traditional concepts with neuroscience |
| [coherence-meditation](#coherence-meditation) | `/coherence-meditation` | consciousness | Guided interhemispheric coherence practices |
| [syntergic-research](#syntergic-research) | `/syntergic-research` | research | Deep research into Grinberg's consciousness science |
| [resonance-pairing](#resonance-pairing) | `/resonance-pairing` | consciousness | Paired/group transferred potential protocols |
| [orbital-journey](#orbital-journey) | `/orbital-journey` | consciousness | Progressive multi-day consciousness expansion |
| [whm-breathwork](#whm-breathwork) | `/whm-breathwork` | breathwork | Guided Wim Hof breathing protocols with safety architecture |
| [whm-cold-exposure](#whm-cold-exposure) | `/whm-cold-exposure` | breathwork | Progressive cold adaptation protocols |
| [whm-journey](#whm-journey) | `/whm-journey` | breathwork | Multi-week integrated WHM program (all 3 pillars) |
| [language-awareness](#language-awareness) | `/language-awareness` | perception | Individual cognitive deautomatization practices |
| [group-perception](#group-perception) | `/group-perception` | perception | Group perception exercises with consent frameworks |
| [sound-healing](#sound-healing) | `/sound-healing` | sound | Therapeutic sound practices — mantra, chanting, toning, singing bowl |
| [somatic-practice](#somatic-practice) | `/somatic-practice` | movement | Gentle movement protocols — qigong, tai chi, yoga, walking meditation |
| [sleep-healing](#sleep-healing) | `/sleep-healing` | sleep | Evening wind-down, bedtime meditation, dream journaling |
| [nature-healing](#nature-healing) | `/nature-healing` | nature | Shinrin-yoku, earthing, garden therapy, Five Element observation |
| [water-healing](#water-healing) | `/water-healing` | water | Contrast therapy, Kneipp method, ritual bathing education |
| [grief-healing](#grief-healing) | `/grief-healing` | grief | Grief-informed practices across mourning traditions |
| [expressive-healing](#expressive-healing) | `/expressive-healing` | expressive | Pennebaker writing, bibliotherapy, art-as-process |
| [community-healing](#community-healing) | `/community-healing` | community | Healing circles, talking circles, group practice |
| [contemplative-inquiry](#contemplative-inquiry) | `/contemplative-inquiry` | perception | Zen koan, self-inquiry, Socratic questioning, Ignatian Examen |
| [pni-research](#pni-research) | `/pni-research` | research | Psychoneuroimmunology — mind-body-immune science |
| [healing-design](#healing-design) | `/healing-design` | design | Design healing application UX and visuals |
| [healing-ux](#healing-ux) | `/healing-ux` | design | UX design for healing contexts |
| [sacred-visuals](#sacred-visuals) | `/sacred-visuals` | design | Visual system with healing aesthetics |
| [healing-content](#healing-content) | `/healing-content` | content | Create prayers, evidence boxes, visualizations |
| [healing-build](#healing-build) | `/healing-build` | build | Develop accessible, privacy-first applications |
| [healing-review](#healing-review) | `/healing-review` | quality | Quality review (ethics, clinical, cultural, a11y) |
| [ethics-review](#ethics-review) | `/ethics-review` | quality | Ethics and safety review |
| [clinical-review](#clinical-review) | `/clinical-review` | quality | Verify clinical claims and citations |
| [cultural-review](#cultural-review) | `/cultural-review` | quality | Cultural sensitivity review |
| [a11y-audit](#a11y-audit) | `/a11y-audit` | quality | WCAG and healing-specific accessibility audit |
| [healing-deploy](#healing-deploy) | `/healing-deploy` | deploy | Deploy and maintain applications |
| [healing-swarm](#healing-swarm) | `/healing-swarm` | orchestrator | Full orchestrated development lifecycle |

---

## healing-research

**Trigger:** `/healing-research`
**Category:** research
**Workflow:** `research/workflow.yaml`

### Description

Deep research into healing traditions and clinical evidence, coordinating multiple specialized research agents to produce comprehensive research briefs.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `query` | string | Yes | Research topic or question |
| `depth` | enum | No | `quick`, `standard` (default), `comprehensive` |
| `traditions` | array | No | Specific traditions to research |

### Outputs

| Output | Description |
|--------|-------------|
| `research-brief.md` | Comprehensive research summary |
| `traditions-research.md` | Traditional healing research |
| `clinical-evidence.md` | Clinical evidence review |
| `mechanism-bridges.md` | Science-tradition bridges |

### Agents

- **traditions-scholar** - Ancient healing practices research
- **clinical-researcher** - Clinical evidence review
- **mechanisms-neuroscientist** - Science-tradition bridging

### Examples

```bash
# Quick research
/healing-research "acupressure for headache" --depth quick

# Comprehensive research
/healing-research "meditation for chronic pain" --depth comprehensive

# Specific tradition
/healing-research "pranayama breathing" --traditions "Vedic"
```

---

## traditions-research

**Trigger:** `/traditions-research`
**Category:** research
**Standalone:** Yes (single agent)

### Description

Research specific healing traditions with scholarly rigor. Covers TCM, Ayurveda, Western esoteric, Indigenous, and Jewish mystical traditions.

### Agents

- **traditions-scholar** - Ancient healing practices research

### Examples

```bash
/traditions-research "Solomonic angel healing"
/traditions-research "TCM meridian theory for upper extremity"
```

---

## clinical-research

**Trigger:** `/clinical-research`
**Category:** research
**Standalone:** Yes (single agent)

### Description

Systematic review of clinical evidence for healing modalities. Searches PubMed/PMC, assesses study quality, and reports findings with appropriate evidence language.

### Agents

- **clinical-researcher** - Clinical evidence review

### Examples

```bash
/clinical-research "guided imagery pain reduction"
/clinical-research "prayer health outcomes"
```

---

## mechanism-mapping

**Trigger:** `/mechanism-mapping`
**Category:** research
**Standalone:** Yes (single agent)

### Description

Bridge traditional healing concepts with modern neuroscience. Translate between ancient wisdom and scientific understanding without conflating the two.

### Agents

- **mechanisms-neuroscientist** - Science-tradition bridging

### Examples

```bash
/mechanism-mapping "qi cultivation" --to neuroscience
/mechanism-mapping "chakra activation" --to psychophysiology
```

---

## coherence-meditation

**Trigger:** `/coherence-meditation`
**Category:** consciousness
**Workflow:** `research/coherence-workflow.yaml`

### Description

Guided interhemispheric coherence practices based on Grinberg's self-allusive meditation protocol. Produces 20-minute guided meditations with evidence context and safety framing.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Focus area (e.g., "morning coherence", "stress reduction") |
| `level` | enum | No | `beginner`, `intermediate`, `advanced` |
| `duration` | number | No | `10`, `20` (default), `30` minutes |

### Outputs

| Output | Description |
|--------|-------------|
| `coherence-practice.md` | Complete guided meditation script |
| `evidence-brief.md` | Research context with honest limitations |
| `audio-timing.json` | Timing cues for audio recording |

### Agents

- **consciousness-researcher** - Grinberg research and EEG coherence evidence
- **coherence-guide** - Self-allusive meditation practice design
- **content-writer** - Practice language and framing
- **ethics-guardian** - Safety and evidence claims review

### Examples

```bash
/coherence-meditation "morning coherence" --level beginner
/coherence-meditation "healing support" --level advanced --duration 30
```

---

## syntergic-research

**Trigger:** `/syntergic-research`
**Category:** research
**Workflow:** `research/syntergic-workflow.yaml`

### Description

Deep research into Grinberg's consciousness science with honest evidence presentation. Bridges syntergic theory with mainstream neuroscience and contextualizes shamanic observations.

### Outputs

| Output | Description |
|--------|-------------|
| `syntergic-research-brief.md` | Comprehensive research brief |
| `grinberg-bibliography.md` | Complete bibliography |
| `shamanic-context.md` | Shamanic observation context |
| `honest-assessment.md` | Evidence level assessment |

### Agents

- **consciousness-researcher** - Grinberg research specialist
- **traditions-scholar** - Cross-tradition context
- **clinical-researcher** - Evidence evaluation
- **mechanisms-neuroscientist** - Neuroscience bridging
- **ethics-guardian** - Claims review

### Examples

```bash
/syntergic-research "syntergic theory overview" --depth quick
/syntergic-research "transferred potential experiments" --depth comprehensive
```

---

## resonance-pairing

**Trigger:** `/resonance-pairing`
**Category:** consciousness
**Workflow:** `content/resonance-workflow.yaml`

### Description

Paired and group meditation protocols based on Grinberg's transferred potential research. Consent and safety are paramount. Ethics review is CRITICAL for all outputs.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Session focus |
| `group` | enum | No | `dyad`, `small_group`, `large_group` |
| `level` | enum | No | `first_time`, `experienced`, `advanced` |

### Outputs

| Output | Description |
|--------|-------------|
| `pairing-protocol.md` | Complete pairing guide |
| `participant-guide.md` | Participant preparation |
| `consent-framework.md` | Informed consent protocol |
| `boundary-guidelines.md` | Boundary and safety guidelines |

### Agents

- **consciousness-researcher** - Research context
- **resonance-facilitator** - Pairing protocol design
- **content-writer** - Script polishing
- **ethics-guardian** - Consent and safety review

### Examples

```bash
/resonance-pairing "first session" --group dyad --level first_time
/resonance-pairing "group meditation" --group small_group --level experienced
```

---

## orbital-journey

**Trigger:** `/orbital-journey`
**Category:** consciousness
**Workflow:** `content/orbital-workflow.yaml`

### Description

Progressive multi-day journeys through Grinberg's consciousness orbitals. Ethics review is CRITICAL for transpersonal content. Includes comprehensive safety architecture and screening.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `duration` | number | Yes | Journey duration in days (7, 14, 21, 28) |
| `level` | enum | No | `beginner`, `intermediate`, `advanced` |

### Outputs

| Output | Description |
|--------|-------------|
| `journey-map.md` | Complete journey overview |
| `daily-practices/` | Day-by-day practice guides |
| `orbital-guide.md` | Orbital progression guide |
| `safety-protocols.md` | Safety and grounding protocols |
| `progress-tracker.md` | Journey tracking tool |

### Agents

- **consciousness-researcher** - Research context
- **orbital-architect** - Journey structure design
- **coherence-guide** - Meditation practice design
- **content-writer** - Daily practice scripting
- **ethics-guardian** - Safety architecture review

### Examples

```bash
/orbital-journey --duration 7 --level beginner
/orbital-journey --duration 21 --level intermediate
/orbital-journey --duration 28 --level advanced
```

---

## healing-design

**Trigger:** `/healing-design`
**Category:** design
**Workflow:** `design/workflow.yaml`

### Description

Design healing application user experience and visual elements, creating accessible, calming interfaces that support the healing journey.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string | Yes | Project name or context |
| `scope` | enum | No | `component`, `page`, `full-app` |
| `accessibility` | string | No | Specific accessibility focus |

### Outputs

| Output | Description |
|--------|-------------|
| `ux-specification.md` | UX architecture document |
| `visual-design.md` | Visual design guidelines |
| `component-specs/` | Individual component specifications |

### Agents

- **ux-architect** - Information architecture and flows
- **visual-designer** - Visual design and aesthetics

### Examples

```bash
# Design a component
/healing-design "meditation timer" --scope component

# Full app design
/healing-design "Sacred Healing Journey app" --scope full-app
```

---

## healing-ux

**Trigger:** `/healing-ux`
**Category:** design
**Standalone:** Yes (single agent)

### Description

Design user experience for healing contexts. Special attention to one-handed operation, vulnerable users, and therapeutic interaction patterns.

### Agents

- **ux-architect** - User experience architecture

### Examples

```bash
/healing-ux "21-day healing journey"
/healing-ux --for "injured hand user"
```

---

## sacred-visuals

**Trigger:** `/sacred-visuals`
**Category:** design
**Standalone:** Yes (single agent)

### Description

Design visual system with healing aesthetics. Colors, typography, sacred geometry, calming animations.

### Agents

- **visual-designer** - Visual design

### Examples

```bash
/sacred-visuals --palette "Raphael healing green"
/sacred-visuals --style "contemplative, scholarly"
```

---

## healing-content

**Trigger:** `/healing-content`
**Category:** content
**Workflow:** `content/workflow.yaml`

### Description

Create healing content including prayers, guided visualizations, practice instructions, evidence summaries, and journal prompts.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | enum | Yes | Content type (see below) |
| `topic` | string | Yes | Content topic |
| `tradition` | string | No | Source tradition |
| `tone` | enum | No | `gentle`, `grounded`, `uplifting` |
| `duration` | string | No | For timed content |

### Content Types

- `prayer` - Spiritual invocations and blessings
- `visualization` - Guided imagery and meditations
- `instruction` - Practice how-to guides
- `evidence-box` - Research summaries
- `journal-prompt` - Reflection questions
- `historical-note` - Context and attribution

### Outputs

| Output | Description |
|--------|-------------|
| `content.md` | Created content |
| `metadata.yaml` | Content metadata |

### Agents

- **content-writer** - Content creation

### Examples

```bash
# Create a prayer
/healing-content --type prayer --tradition "Jewish" --topic "healing presence"

# Create visualization
/healing-content --type visualization --topic "stress relief" --duration "10 minutes"

# Create instructions
/healing-content --type instruction --topic "box breathing"
```

---

## healing-build

**Trigger:** `/healing-build`
**Category:** build
**Workflow:** `build/workflow.yaml`

### Description

Develop accessible, privacy-first healing applications with proper component architecture and implementation.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `component` | string | Yes | Component or feature to build |
| `framework` | string | No | Framework preference |
| `spec` | string | No | Path to existing specification |

### Outputs

| Output | Description |
|--------|-------------|
| `implementation/` | Built components |
| `tests/` | Test files |
| `documentation.md` | Implementation documentation |

### Agents

- **app-developer** - Application development

### Examples

```bash
# Build a component
/healing-build "meditation timer"

# Build from spec
/healing-build --spec build/components/meditation-timer.md
```

---

## healing-review

**Trigger:** `/healing-review`
**Category:** quality
**Workflow:** `quality/workflow.yaml`

### Description

Comprehensive quality review covering ethics compliance, clinical accuracy, cultural sensitivity, and accessibility.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `target` | string | Yes | File or directory to review |
| `type` | enum | No | `full`, `ethics`, `clinical`, `cultural`, `accessibility` |
| `severity` | enum | No | `all` (default), `critical-only` |

### Outputs

| Output | Description |
|--------|-------------|
| `review-report.md` | Complete review report |
| `issues.yaml` | Structured issues list |

### Agents

- **ethics-guardian** - Ethics and safety review
- **clinical-reviewer** - Clinical accuracy
- **cultural-reviewer** - Cultural sensitivity
- **accessibility-auditor** - WCAG compliance

### Examples

```bash
# Full review
/healing-review ./content/meditation.md

# Ethics-only review
/healing-review ./content/ --type ethics

# Critical issues only
/healing-review ./app/ --severity critical-only
```

---

## ethics-review

**Trigger:** `/ethics-review`
**Category:** quality
**Standalone:** Yes (single agent)
**Veto Power:** Yes

### Description

Ethics and safety review for healing content and features. Covers medical safety, psychological safety, cultural integrity, and privacy. Has veto power to block deployment.

### Agents

- **ethics-guardian** - Ethics and safety review

### Examples

```bash
/ethics-review ./healing-app/
/ethics-review "This practice will cure your condition"
```

---

## clinical-review

**Trigger:** `/clinical-review`
**Category:** quality
**Standalone:** Yes (single agent)

### Description

Verify clinical claims and citations. Check PMID validity, claim accuracy, and evidence representation.

### Agents

- **clinical-reviewer** - Clinical accuracy verification

### Examples

```bash
/clinical-review ./content/evidence-boxes/
```

---

## cultural-review

**Trigger:** `/cultural-review`
**Category:** quality
**Standalone:** Yes (single agent)

### Description

Cultural sensitivity review for healing content. Attribution, representation, and appropriation assessment.

### Agents

- **cultural-reviewer** - Cultural sensitivity review

### Examples

```bash
/cultural-review ./content/traditions/
```

---

## a11y-audit

**Trigger:** `/a11y-audit`
**Category:** quality
**Standalone:** Yes (single agent)

### Description

Accessibility audit for healing applications. WCAG compliance plus healing-specific accessibility needs (one-handed operation, cognitive accessibility, vulnerable user design).

### Agents

- **accessibility-auditor** - WCAG compliance auditing

### Examples

```bash
/a11y-audit ./healing-app/
/a11y-audit --healing-specific ./components/
```

---

## healing-deploy

**Trigger:** `/healing-deploy`
**Category:** deploy
**Workflow:** `deploy/workflow.yaml`

### Description

Deploy and maintain healing applications with proper infrastructure and content management.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `target` | string | Yes | Deployment target |
| `environment` | enum | No | `staging`, `production` |
| `content` | string | No | Content to deploy |

### Outputs

| Output | Description |
|--------|-------------|
| `deployment-report.md` | Deployment status |
| `urls.txt` | Deployed URLs |

### Agents

- **devops-specialist** - Infrastructure and deployment
- **content-manager** - Content deployment and updates

### Examples

```bash
# Deploy to staging
/healing-deploy ./app --environment staging

# Deploy content update
/healing-deploy --content ./content/new-meditation.md
```

---

## healing-swarm

**Trigger:** `/healing-swarm`
**Category:** orchestrator
**Workflow:** `orchestrator/workflow.yaml`

### Description

Full orchestrated development lifecycle, coordinating all swarm agents from research through deployment.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string | Yes | Project name |
| `focus` | string | Yes | Healing focus area |
| `users` | string | No | Target user personas |
| `traditions` | array | No | Source traditions |

### Outputs

| Output | Description |
|--------|-------------|
| `research/` | Research outputs |
| `design/` | Design specifications |
| `content/` | Created content |
| `app/` | Built application |
| `reviews/` | Quality reviews |

### Agents

All agents coordinated by **swarm-conductor**

### Examples

```bash
# Full development cycle
/healing-swarm "Sacred Healing Journey" \
  --focus "ligament healing" \
  --users "injured individual, healing partner"

# Focused development
/healing-swarm "Breathwork App" \
  --focus "stress relief" \
  --traditions "Vedic, TCM"
```

---

## whm-breathwork

**Trigger:** `/whm-breathwork`
**Category:** breathwork
**Workflow:** `content/breathwork-workflow.yaml`

### Description

Guided Wim Hof Method breathing protocols with comprehensive safety architecture. Designs progressive breathwork sessions covering the three-phase round structure (power breaths, retention, recovery breath).

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Session focus (e.g., "morning energy", "stress relief") |
| `level` | enum | No | `beginner` (default), `intermediate`, `advanced` |
| `rounds` | number | No | Number of rounds (default: 3) |

### Outputs

| Output | Description |
|--------|-------------|
| `breathwork-protocol.md` | Complete breathing session script |
| `timing.json` | Phase timing for timer integration |
| `safety-briefing.md` | Pre-session safety checklist |

### Agents

- **breathwork-coach** - WHM breathing protocol design
- **traditions-scholar** - Tummo and pranayama context
- **clinical-researcher** - Kox et al. 2014, Muzik et al. 2018 evidence
- **content-writer** - Practice language polishing
- **ethics-guardian** - Safety and evidence claims review

### Examples

```bash
# Beginner session
/whm-breathwork "first session" --level beginner

# Advanced morning practice
/whm-breathwork "morning energy" --level advanced --rounds 4
```

---

## whm-cold-exposure

**Trigger:** `/whm-cold-exposure`
**Category:** breathwork

### Description

Progressive cold exposure protocols for WHM Pillar 2. Designs safe, gradual cold adaptation programs from cold shower finishes through full cold immersion.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `level` | enum | Yes | `1-cold-finish`, `2-extended-cold`, `3-cold-first`, `4-cold-immersion` |
| `context` | string | No | User context or goals |

### Outputs

| Output | Description |
|--------|-------------|
| `cold-exposure-protocol.md` | Complete cold exposure guide |
| `safety-checklist.md` | Pre-exposure safety verification |
| `progression-guide.md` | When and how to advance levels |

### Agents

- **cold-exposure-guide** - Progressive cold adaptation design
- **clinical-researcher** - Cold exposure physiology evidence
- **traditions-scholar** - Tummo and cold adaptation traditions
- **content-writer** - Protocol language
- **ethics-guardian** - Safety review (partner requirements, afterdrop warnings)

### Examples

```bash
# Start with cold finishes
/whm-cold-exposure --level 1-cold-finish

# Progress to immersion
/whm-cold-exposure --level 4-cold-immersion --context "experienced, has partner"
```

---

## whm-journey

**Trigger:** `/whm-journey`
**Category:** breathwork
**Workflow:** `content/whm-journey-workflow.yaml`

### Description

Multi-week integrated Wim Hof Method program combining all three pillars: breathing, cold exposure, and commitment (meditation/mindset). Available in 2-week intro, 4-week foundation, and 10-week comprehensive formats.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `duration` | enum | Yes | `2-week`, `4-week`, `10-week` |
| `focus` | string | No | Primary goal or health focus |
| `experience` | enum | No | `none`, `some-breathwork`, `experienced` |

### Outputs

| Output | Description |
|--------|-------------|
| `journey-plan.md` | Complete multi-week program |
| `weekly-schedules/` | Week-by-week practice plans |
| `safety-guide.md` | Comprehensive safety reference |
| `progress-tracker.md` | Weekly check-in questions and criteria |

### Agents

- **breathwork-coach** - Breathing protocol progression
- **cold-exposure-guide** - Cold adaptation progression
- **coherence-guide** - Meditation/commitment pillar
- **traditions-scholar** - Cross-tradition context
- **clinical-researcher** - Evidence for combined practices
- **mechanisms-neuroscientist** - Physiological mechanism bridges
- **content-writer** - Program language and framing
- **ethics-guardian** - Comprehensive safety review

### Examples

```bash
# 2-week introduction
/whm-journey --duration 2-week --experience none

# Full 10-week program
/whm-journey --duration 10-week --focus "stress resilience" --experience some-breathwork
```

---

## language-awareness

**Trigger:** `/language-awareness`
**Category:** perception
**Workflow:** `content/language-awareness-workflow.yaml`

### Description

Individual cognitive deautomatization practices that reveal how language shapes perception and identity. Based on research by Deikman (1966), semantic satiation studies, and practices from Chase Hughes' *Tongue: A Cognitive Hazard* (2024), with cross-tradition parallels from Zen, Dzogchen, and phenomenology.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Practice focus or request |
| `level` | enum | No | `observation`, `interruption`, `substitution`, `integration` |
| `duration` | string | No | Practice duration (default: level-appropriate) |

### Outputs

| Output | Description |
|--------|-------------|
| `language-awareness-protocol.md` | Complete practice guide with safety framing |
| `grounding-guide.md` | Pocket Exit and Reintegration Ritual |
| `journal-prompts.md` | Perception journal questions |

### Agents

- **language-awareness-guide** - Deautomatization protocol design
- **traditions-scholar** - Zen, Dzogchen, phenomenology parallels
- **clinical-researcher** - Deikman, semantic satiation evidence
- **content-writer** - Practice language polishing
- **ethics-guardian** - Psychological safety review

### Examples

```bash
# Beginner observation practice
/language-awareness "first practice" --level observation

# Full 8-week progressive curriculum
/language-awareness "full program" --duration 8 --level observation
```

---

## group-perception

**Trigger:** `/group-perception`
**Category:** perception

### Description

Group and paired perception exercises with consent frameworks, facilitation guides, and debrief structures. Includes Collective Label Delay, Pronoun Relay, Meaning Collapse Circle, Map-Maker's Interrogation, Conversion Drill, and Silence Sit.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `exercise` | enum | Yes | Exercise type (see available exercises) |
| `participants` | number | No | Number of participants |
| `context` | string | No | Setting (workshop, retreat, classroom) |

### Available Exercises

| Exercise | Participants | Duration |
|----------|-------------|----------|
| `collective-label-delay` | 3-12 | 10 min |
| `pronoun-relay` | 3-6 | 15 min |
| `meaning-collapse-circle` | 3-12 | 15 min |
| `map-makers-interrogation` | 3-8 | 20 min |
| `conversion-drill` | 2 (pairs) | 15 min |
| `silence-sit` | 2-20 | 30 min |

### Outputs

| Output | Description |
|--------|-------------|
| `facilitation-guide.md` | Complete facilitator script |
| `consent-framework.md` | Informed consent protocol |
| `debrief-questions.md` | Post-exercise discussion guide |

### Agents

- **language-awareness-guide** - Exercise design and facilitation
- **content-writer** - Script polishing
- **ethics-guardian** - Consent and safety review

### Examples

```bash
# Team workshop exercise
/group-perception --exercise collective-label-delay --participants 8 --context "team workshop"

# Pairs exercise
/group-perception --exercise conversion-drill --context "retreat"
```

---

## sound-healing

**Trigger:** `/sound-healing`
**Category:** sound

### Description

Therapeutic sound practices spanning Vedic mantra, Psalm chanting, Gregorian chant, Tibetan singing bowl, and vagal toning. All protocols screen for hearing conditions and respect open/closed practice boundaries.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Practice focus (e.g., "vagal toning", "morning mantra") |
| `level` | enum | No | `listening`, `humming`, `toning`, `chanting`, `extended` |
| `tradition` | string | No | Specific tradition to draw from |

### Outputs

| Output | Description |
|--------|-------------|
| `sound-protocol.md` | Complete sound practice guide |
| `safety-screening.md` | Hearing and contraindication screening |

### Agents

- **sound-healing-guide** - Sound practice protocol design
- **traditions-scholar** - Tradition context and attribution
- **clinical-researcher** - Vagal stimulation and sound therapy evidence
- **ethics-guardian** - Safety and closed practice review

### Examples

```bash
/sound-healing "morning humming practice" --level humming
/sound-healing "vagal toning session" --tradition "cross-tradition"
```

---

## somatic-practice

**Trigger:** `/somatic-practice`
**Category:** movement

### Description

Gentle movement protocols spanning qigong, tai chi, yoga, kinhin, and Feldenkrais. Every practice includes standing, seated, lying, and wheelchair modifications to ensure universal accessibility.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Practice focus (e.g., "morning qigong", "gentle yoga") |
| `level` | enum | No | `gentle`, `moderate`, `dynamic` |
| `modification` | enum | No | `standing`, `seated`, `lying`, `wheelchair` |

### Outputs

| Output | Description |
|--------|-------------|
| `movement-protocol.md` | Complete movement practice guide |
| `modification-guide.md` | Adaptation guide for all positions |

### Agents

- **somatic-guide** - Movement protocol design
- **traditions-scholar** - Tradition context and attribution
- **clinical-researcher** - Movement therapy evidence
- **ethics-guardian** - Safety and accessibility review

### Examples

```bash
/somatic-practice "morning qigong" --level gentle
/somatic-practice "chair yoga" --modification seated --level gentle
```

---

## sleep-healing

**Trigger:** `/sleep-healing`
**Category:** sleep

### Description

Evening wind-down, bedtime meditation, and dream journaling practices drawing from Asclepian dream temples, Tibetan dream yoga, TCM organ clock, and Ayurvedic dinacharya. Screen paradox acknowledged. CBT-I referral provided for persistent insomnia.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Practice focus (e.g., "evening wind-down", "dream journaling") |
| `phase` | enum | No | `wind-down`, `bedtime`, `dream-work` |
| `tradition` | string | No | Specific tradition to draw from |

### Outputs

| Output | Description |
|--------|-------------|
| `sleep-protocol.md` | Complete sleep practice guide |
| `screen-paradox-note.md` | Digital delivery paradox acknowledgment |

### Agents

- **sleep-healing-guide** - Sleep practice protocol design
- **traditions-scholar** - Tradition context and attribution
- **clinical-researcher** - Sleep science evidence
- **ethics-guardian** - Safety and referral review

### Examples

```bash
/sleep-healing "evening wind-down" --phase wind-down
/sleep-healing "dream journaling" --phase dream-work --tradition "Tibetan"
```

---

## nature-healing

**Trigger:** `/nature-healing`
**Category:** nature

### Description

Nature-based healing practices including shinrin-yoku, earthing, garden therapy, and Five Element observation, supported by 60+ forest bathing studies. Urban and indoor alternatives are always provided for accessibility.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Practice focus (e.g., "forest bathing", "garden therapy") |
| `setting` | enum | No | `forest`, `garden`, `urban`, `indoor` |
| `season` | string | No | Season for practice adaptation |

### Outputs

| Output | Description |
|--------|-------------|
| `nature-protocol.md` | Complete nature practice guide |
| `urban-alternatives.md` | Urban and indoor adaptation guide |

### Agents

- **nature-guide** - Nature practice protocol design
- **traditions-scholar** - Tradition context and attribution
- **clinical-researcher** - Forest bathing and nature therapy evidence
- **ethics-guardian** - Safety and accessibility review

### Examples

```bash
/nature-healing "forest bathing" --setting forest --season "spring"
/nature-healing "indoor nature practice" --setting indoor
```

---

## water-healing

**Trigger:** `/water-healing`
**Category:** water

### Description

Water and hydrotherapy practices including contrast therapy, mikveh education, onsen, Kneipp method, and Finnish sauna. Drowning and cardiac risk warnings are non-negotiable safety requirements.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Practice focus (e.g., "contrast therapy", "Kneipp walk") |
| `modality` | enum | No | `contrast`, `warm`, `cold`, `ritual` |
| `level` | string | No | Experience level |

### Outputs

| Output | Description |
|--------|-------------|
| `water-protocol.md` | Complete water practice guide |
| `safety-checklist.md` | Drowning and cardiac risk safety checklist |

### Agents

- **water-guide** - Water practice protocol design
- **traditions-scholar** - Tradition context and attribution
- **clinical-researcher** - Hydrotherapy evidence
- **ethics-guardian** - Safety and risk review

### Examples

```bash
/water-healing "contrast shower" --modality contrast
/water-healing "Kneipp method introduction" --modality cold --level beginner
```

---

## grief-healing

**Trigger:** `/grief-healing`
**Category:** grief

### Description

Grief-informed practices across mourning traditions including Jewish mourning, Buddhist impermanence, Dia de los Muertos, and Celtic keening. Highest psychological sensitivity with crisis resources, minimum 3 exit ramps, and suicidal ideation screening.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Practice focus (e.g., "acute loss support", "anniversary ritual") |
| `stage` | enum | No | `acute`, `ongoing`, `anniversary`, `complicated` |
| `tradition` | string | No | Specific tradition to draw from |

### Outputs

| Output | Description |
|--------|-------------|
| `grief-protocol.md` | Complete grief practice guide |
| `crisis-resources.md` | Crisis hotlines and referral resources |
| `exit-ramps.md` | Minimum 3 exit ramps for practice |

### Agents

- **grief-guide** - Grief practice protocol design
- **traditions-scholar** - Tradition context and attribution
- **clinical-researcher** - Bereavement and grief evidence
- **ethics-guardian** - Safety, crisis screening, and exit ramp review

### Examples

```bash
/grief-healing "acute loss support" --stage acute
/grief-healing "anniversary ritual" --stage anniversary --tradition "Jewish"
```

---

## expressive-healing

**Trigger:** `/expressive-healing`
**Category:** expressive

### Description

Creative and expressive healing practices including Pennebaker writing (200+ studies), bibliotherapy, mandala, ikebana, and sacred poetry. Strongest privacy protections. No artistic skill required. Navajo sand painting noted as closed practice.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Practice focus (e.g., "expressive writing", "mandala creation") |
| `modality` | enum | No | `writing`, `art`, `poetry`, `movement` |
| `privacy-level` | enum | No | `private`, `shared`, `facilitated` |

### Outputs

| Output | Description |
|--------|-------------|
| `expressive-protocol.md` | Complete expressive practice guide |
| `privacy-guide.md` | Privacy protections and data handling |

### Agents

- **expressive-guide** - Expressive practice protocol design
- **traditions-scholar** - Tradition context and attribution
- **clinical-researcher** - Pennebaker and expressive therapy evidence
- **ethics-guardian** - Privacy, closed practice, and safety review

### Examples

```bash
/expressive-healing "expressive writing" --modality writing --privacy-level private
/expressive-healing "mandala creation" --modality art
```

---

## community-healing

**Trigger:** `/community-healing`
**Category:** community

### Description

Group and relational healing practices including talking circles, Mussar, Sangha, Quaker meeting, Ubuntu, and 12-Step. Trained facilitator required. Full consent framework, confidentiality, and power dynamics awareness.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Practice focus (e.g., "healing circle", "talking circle") |
| `format` | enum | No | `circle`, `dyad`, `sangha`, `meeting` |
| `participants` | number | No | Number of participants |

### Outputs

| Output | Description |
|--------|-------------|
| `facilitation-guide.md` | Complete facilitation guide |
| `consent-framework.md` | Participant consent protocol |
| `confidentiality-agreement.md` | Group confidentiality agreement |

### Agents

- **community-facilitator** - Group practice facilitation design
- **traditions-scholar** - Tradition context and attribution
- **clinical-researcher** - Group healing and social support evidence
- **ethics-guardian** - Consent, confidentiality, and power dynamics review

### Examples

```bash
/community-healing "healing circle" --format circle --participants 8
/community-healing "dyad practice" --format dyad
```

---

## contemplative-inquiry

**Trigger:** `/contemplative-inquiry`
**Category:** perception

### Description

Deep inquiry and contemplation practices including Zen koan, Advaitic self-inquiry, Socratic questioning, Ignatian Examen, and ACT cognitive defusion. Dzogchen noted as closed/reference-only. 4 progressive levels from structured to silent.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `focus` | string | Yes | Practice focus (e.g., "self-inquiry", "koan practice") |
| `method` | enum | No | `koan`, `self-inquiry`, `socratic`, `examen`, `defusion` |
| `level` | enum | No | `structured`, `guided`, `open`, `silent` |

### Outputs

| Output | Description |
|--------|-------------|
| `inquiry-protocol.md` | Complete inquiry practice guide |
| `tradition-context.md` | Tradition context and attribution |

### Agents

- **contemplative-guide** - Inquiry practice protocol design
- **traditions-scholar** - Tradition context and attribution
- **clinical-researcher** - Contemplative practice evidence
- **ethics-guardian** - Closed practice and safety review

### Examples

```bash
/contemplative-inquiry "self-inquiry" --method self-inquiry --level structured
/contemplative-inquiry "koan practice" --method koan --level guided
```

---

## pni-research

**Trigger:** `/pni-research`
**Category:** research

### Description

Psychoneuroimmunology research bridging traditional healing with documented PNI pathways. Covers HPA axis, vagal tone, telomeres, placebo mechanisms, wound healing, and social-immune interactions. Maps traditional healing to documented PNI pathways with honest limitations.

### Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `query` | string | Yes | Research topic (e.g., "meditation immune response", "social bonding oxytocin") |
| `pathway` | enum | No | `hpa`, `vagal`, `telomere`, `placebo`, `social` |
| `depth` | enum | No | `quick`, `standard`, `comprehensive` |

### Outputs

| Output | Description |
|--------|-------------|
| `pni-brief.md` | PNI research summary |
| `practice-mapping.md` | Traditional practice to PNI pathway mapping |
| `limitations.md` | Honest limitations and gaps in evidence |

### Agents

- **pni-researcher** - PNI pathway research
- **clinical-researcher** - Clinical evidence review
- **mechanisms-neuroscientist** - Neuroscience mechanism bridging
- **ethics-guardian** - Claims and evidence integrity review

### Examples

```bash
/pni-research "meditation immune response" --pathway vagal --depth standard
/pni-research "social bonding healing" --pathway social --depth comprehensive
```

---

## Skill Categories

### Research Skills
Research and evidence gathering.
- healing-research
- traditions-research (standalone)
- clinical-research (standalone)
- mechanism-mapping (standalone)
- syntergic-research

### Consciousness Skills
Grinberg research-based practices.
- coherence-meditation
- resonance-pairing
- orbital-journey

### Breathwork Skills
Wim Hof Method protocols with safety architecture.
- whm-breathwork
- whm-cold-exposure
- whm-journey

### Perception Skills
Cognitive deautomatization and language awareness.
- language-awareness
- group-perception
- contemplative-inquiry

### Sound Healing Skills
Therapeutic sound and vibratory practices.
- sound-healing

### Movement Skills
Somatic and movement-based practices.
- somatic-practice

### Sleep Skills
Sleep quality and dream work.
- sleep-healing

### Nature Skills
Nature-based healing practices.
- nature-healing

### Water Skills
Water and hydrotherapy practices.
- water-healing

### Grief Skills
Grief and bereavement support.
- grief-healing

### Expressive Skills
Creative and expressive healing.
- expressive-healing

### Community Skills
Group and relational healing.
- community-healing

### Contemplative Skills
Deep inquiry and contemplation.
- contemplative-inquiry

### PNI Research Skills
Psychoneuroimmunology research bridge.
- pni-research

### Design Skills
UX and visual design.
- healing-design
- healing-ux (standalone)
- sacred-visuals (standalone)

### Content Skills
Content creation.
- healing-content

### Build Skills
Application development.
- healing-build

### Quality Skills
Review and quality assurance.
- healing-review
- ethics-review (standalone, veto power)
- clinical-review (standalone)
- cultural-review (standalone)
- a11y-audit (standalone)

### Deploy Skills
Deployment and maintenance.
- healing-deploy

### Orchestrator Skills
Full lifecycle coordination.
- healing-swarm

---

## Common Options

These options are available across multiple skills:

| Option | Description |
|--------|-------------|
| `--verbose` | Show detailed output |
| `--dry-run` | Preview without executing |
| `--output` | Specify output directory |

---

## See Also

- [Agents Reference](agents-reference.md) - All agents
- [Shared Resources](shared-resources.md) - Common resources
- [Workflows Reference](workflows-reference.md) - Workflow patterns
