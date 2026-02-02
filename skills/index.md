---
layout: page
title: Skills Reference
description: All 7 healing swarm skills - triggers, purposes, and examples.
permalink: /skills/
---

The healing swarm provides 7 skills for the complete development lifecycle of ethical healing applications.

---

## Skills Overview

| Skill | Trigger | Purpose |
|-------|---------|---------|
| [Research](#healing-research) | `/healing-research` | Deep research into healing traditions and clinical evidence |
| [Design](#healing-design) | `/healing-design` | Design healing application UX and visuals |
| [Content](#healing-content) | `/healing-content` | Create prayers, evidence boxes, visualizations |
| [Build](#healing-build) | `/healing-build` | Develop accessible, privacy-first applications |
| [Review](#healing-review) | `/healing-review` | Quality review (ethics, clinical, cultural, a11y) |
| [Deploy](#healing-deploy) | `/healing-deploy` | Deploy and maintain applications |
| [Swarm](#healing-swarm) | `/healing-swarm` | Full orchestrated development lifecycle |

---

## healing-research

**Trigger:** `/healing-research`

Deep research into healing traditions and clinical evidence, coordinating multiple specialized research agents.

### Agents
- **Traditions Scholar** --- Ancient healing practices
- **Clinical Researcher** --- Modern evidence review
- **Mechanisms Neuroscientist** --- Science-tradition bridging

### Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `query` | Yes | Research topic or question |
| `depth` | No | `quick`, `standard`, `comprehensive` |
| `traditions` | No | Specific traditions to research |

### Outputs

- `research-brief.md` --- Comprehensive summary
- `traditions-research.md` --- Traditional healing research
- `clinical-evidence.md` --- Clinical evidence review
- `mechanism-bridges.md` --- Science-tradition connections

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

Design healing application user experience and visual elements with accessibility-first approach.

### Agents
- **UX Architect** --- Information architecture and flows
- **Visual Designer** --- Visual design and aesthetics

### Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `project` | Yes | Project name or context |
| `scope` | No | `component`, `page`, `full-app` |
| `accessibility` | No | Specific accessibility focus |

### Outputs

- `ux-specification.md` --- UX architecture document
- `visual-design.md` --- Visual design guidelines
- `component-specs/` --- Individual component specs

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

Create healing content including prayers, visualizations, practice instructions, and evidence summaries.

### Agent
- **Content Writer** --- Multi-format content creation

### Content Types

- `prayer` --- Spiritual invocations and blessings
- `visualization` --- Guided imagery and meditations
- `instruction` --- Practice how-to guides
- `evidence-box` --- Research summaries
- `journal-prompt` --- Reflection questions
- `historical-note` --- Context and attribution

### Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `type` | Yes | Content type (see above) |
| `topic` | Yes | Content topic |
| `tradition` | No | Source tradition |
| `tone` | No | `gentle`, `grounded`, `uplifting` |

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

Develop accessible, privacy-first healing applications with proper component architecture.

### Agent
- **App Developer** --- Application development specialist

### Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `component` | Yes | Component or feature to build |
| `framework` | No | Framework preference |
| `spec` | No | Path to existing specification |

### Outputs

- `implementation/` --- Built components
- `tests/` --- Test files
- `documentation.md` --- Implementation docs

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

Comprehensive quality review covering ethics, clinical accuracy, cultural sensitivity, and accessibility.

### Agents
- **Ethics Guardian** --- Ethics and safety review
- **Clinical Reviewer** --- Clinical accuracy
- **Cultural Reviewer** --- Cultural sensitivity
- **Accessibility Auditor** --- WCAG compliance

### Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `target` | Yes | File or directory to review |
| `type` | No | `full`, `ethics`, `clinical`, `cultural`, `accessibility` |
| `severity` | No | `all`, `critical-only` |

### Outputs

- `review-report.md` --- Complete review
- `issues.yaml` --- Structured issues list

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

Deploy and maintain healing applications with proper infrastructure and content management.

### Agents
- **DevOps Specialist** --- Infrastructure and deployment
- **Content Manager** --- Content deployment and updates

### Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `target` | Yes | Deployment target |
| `environment` | No | `staging`, `production` |
| `content` | No | Content to deploy |

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

Full orchestrated development lifecycle, coordinating all swarm agents from research through deployment.

### Orchestrator
- **Swarm Conductor** --- Coordinates all agents

### Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `project` | Yes | Project name |
| `focus` | Yes | Healing focus area |
| `users` | No | Target user personas |
| `traditions` | No | Source traditions |

### Outputs

- `research/` --- Research outputs
- `design/` --- Design specifications
- `content/` --- Created content
- `app/` --- Built application
- `reviews/` --- Quality reviews

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

## Common Options

Available across multiple skills:

| Option | Description |
|--------|-------------|
| `--verbose` | Show detailed output |
| `--dry-run` | Preview without executing |
| `--output` | Specify output directory |

---

## Architecture Diagram

```
                     +------------------+
                     |   ORCHESTRATOR   |
                     |  healing-swarm   |
                     +--------+---------+
                              |
        +---------------------+---------------------+
        |                     |                     |
  +-----+-----+         +-----+-----+         +-----+-----+
  |  RESEARCH |         |   BUILD   |         |  QUALITY  |
  |   SWARM   |         |   SWARM   |         |   SWARM   |
  +-----+-----+         +-----+-----+         +-----+-----+
        |                     |                     |
  +-----+-----+         +-----+-----+         +-----+-----+
  |     |     |         |     |     |         |     |     |
 [S]   [R]   [N]       [UX]  [V]  [D]        [E]   [C]  [A]

S = Traditions Scholar     UX = UX Architect     E = Ethics Guardian
R = Clinical Researcher    V = Visual Designer   C = Clinical/Cultural
N = Neuroscientist         D = App Developer     A = Accessibility
```

---

## Learn More

- [Full API Reference](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/api/skills-reference.md)
- [Agents Reference](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/api/agents-reference.md)
- [Workflows Reference](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/api/workflows-reference.md)
- [Architecture Overview](/architecture/)
