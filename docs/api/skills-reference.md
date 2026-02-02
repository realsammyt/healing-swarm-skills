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
