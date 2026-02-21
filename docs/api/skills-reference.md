# Skills Reference

> Quick reference for all healing swarm skills.

---

## Overview

| Skill | Trigger | Category | Purpose |
|-------|---------|----------|---------|
| [healing-research](#healing-research) | `/healing-research` | research | Deep research into healing traditions and clinical evidence |
| [healing-design](#healing-design) | `/healing-design` | design | Design healing application UX and visuals |
| [healing-content](#healing-content) | `/healing-content` | content | Create prayers, evidence boxes, visualizations |
| [healing-build](#healing-build) | `/healing-build` | build | Develop accessible, privacy-first applications |
| [healing-review](#healing-review) | `/healing-review` | quality | Quality review (ethics, clinical, cultural, a11y) |
| [healing-deploy](#healing-deploy) | `/healing-deploy` | deploy | Deploy and maintain applications |
| [healing-swarm](#healing-swarm) | `/healing-swarm` | orchestrator | Full orchestrated development lifecycle |
| [whm-breathwork](#whm-breathwork) | `/whm-breathwork` | breathwork | Guided Wim Hof breathing protocols with safety architecture |
| [whm-cold-exposure](#whm-cold-exposure) | `/whm-cold-exposure` | breathwork | Progressive cold adaptation protocols |
| [whm-journey](#whm-journey) | `/whm-journey` | breathwork | Multi-week integrated WHM program (all 3 pillars) |
| [language-awareness](#language-awareness) | `/language-awareness` | perception | Individual cognitive deautomatization practices |
| [group-perception](#group-perception) | `/group-perception` | perception | Group perception exercises with consent frameworks |

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

## Skill Categories

### Research Skills
Research and evidence gathering.
- healing-research

### Design Skills
UX and visual design.
- healing-design

### Content Skills
Content creation.
- healing-content

### Build Skills
Application development.
- healing-build

### Quality Skills
Review and quality assurance.
- healing-review

### Deploy Skills
Deployment and maintenance.
- healing-deploy

### Orchestrator Skills
Full lifecycle coordination.
- healing-swarm

### Breathwork Skills
Wim Hof Method protocols with safety architecture.
- whm-breathwork
- whm-cold-exposure
- whm-journey

### Perception Skills
Cognitive deautomatization and language awareness.
- language-awareness
- group-perception

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
