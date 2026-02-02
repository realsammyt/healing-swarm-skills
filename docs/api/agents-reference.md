# Agents Reference

> Quick reference for all healing swarm agents.

---

## Overview

| Agent | Category | Primary Role |
|-------|----------|--------------|
| [traditions-scholar](#traditions-scholar) | Research | Traditional healing research |
| [clinical-researcher](#clinical-researcher) | Research | Clinical evidence review |
| [mechanisms-neuroscientist](#mechanisms-neuroscientist) | Research | Science-tradition bridging |
| [ux-architect](#ux-architect) | Design | User experience architecture |
| [visual-designer](#visual-designer) | Design | Visual design |
| [content-writer](#content-writer) | Content | Healing content creation |
| [app-developer](#app-developer) | Build | Application development |
| [ethics-guardian](#ethics-guardian) | Quality | Ethics and safety |
| [clinical-reviewer](#clinical-reviewer) | Quality | Clinical accuracy |
| [cultural-reviewer](#cultural-reviewer) | Quality | Cultural sensitivity |
| [accessibility-auditor](#accessibility-auditor) | Quality | WCAG compliance |
| [devops-specialist](#devops-specialist) | Deploy | Infrastructure |
| [content-manager](#content-manager) | Deploy | Content management |
| [swarm-conductor](#swarm-conductor) | Orchestrator | Swarm coordination |

---

## Research Agents

### traditions-scholar

**File:** `research/traditions-scholar.md`

Specializes in academic study of healing traditions across cultures and time periods.

**Expertise:**
- Traditional Chinese Medicine (TCM)
- Vedic/Ayurvedic traditions
- Jewish mystical healing
- Western esoteric traditions
- Indigenous healing systems

**Responsibilities:**
- Primary source research
- Cross-cultural analysis
- Authenticity assessment
- Attribution documentation

**Outputs:**
- Research briefs with sources
- Traditions comparisons
- Practice documentation

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/terminology.md`
- `shared/citation-format.md`

---

### clinical-researcher

**File:** `research/clinical-researcher.md`

Conducts systematic reviews of clinical evidence for healing practices.

**Expertise:**
- Systematic review methodology
- Evidence grading (GRADE framework)
- Study quality assessment
- Safety evaluation

**Responsibilities:**
- Literature search
- Evidence synthesis
- Quality assessment
- Safety profiling

**Outputs:**
- Evidence summaries
- Study analyses
- Safety reports
- Evidence level assignments

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/citation-format.md`

---

### mechanisms-neuroscientist

**File:** `research/mechanisms-neuroscientist.md`

Bridges traditional explanatory models with scientific understanding.

**Expertise:**
- Neuroscience
- Physiology
- Traditional conceptual frameworks
- Mechanism mapping

**Responsibilities:**
- Traditional framework analysis
- Scientific mechanism identification
- Bridge building
- Gap documentation

**Outputs:**
- Mechanism bridge documents
- Translation notes
- Integration guidance

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/terminology.md`

---

## Design Agents

### ux-architect

**File:** `design/ux-architect.md`

Designs user experience for healing applications.

**Expertise:**
- Information architecture
- User flow design
- Accessibility (WCAG)
- One-handed operation
- Trauma-informed design

**Responsibilities:**
- User journey mapping
- Navigation design
- Accessibility requirements
- Flow optimization

**Outputs:**
- UX specifications
- User flow diagrams
- Accessibility requirements

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/design-tokens.json`

---

### visual-designer

**File:** `design/visual-designer.md`

Creates visual design for healing applications.

**Expertise:**
- Visual hierarchy
- Color theory (healing-focused)
- Typography
- Dark mode design
- Calming aesthetics

**Responsibilities:**
- Visual specifications
- Color systems
- Typography systems
- Component styling

**Outputs:**
- Visual design specs
- Style guides
- Component designs

**Key Context:**
- `shared/design-tokens.json`
- `shared/ethics-guardrails.md`

---

## Content Agents

### content-writer

**File:** `content/content-writer.md`

Creates healing content across multiple formats.

**Expertise:**
- Spiritual content (prayers, invocations)
- Guided experiences (visualizations)
- Instructions (practice guides)
- Educational content

**Responsibilities:**
- Content creation
- Voice consistency
- Safety integration
- Attribution

**Outputs:**
- Prayers and invocations
- Visualizations
- Practice instructions
- Evidence boxes
- Journal prompts

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/voice-guide.md`
- `shared/terminology.md`
- `content/templates/*`

---

## Build Agents

### app-developer

**File:** `build/app-developer.md`

Develops accessible, privacy-first healing applications.

**Expertise:**
- TypeScript/React
- Accessibility implementation
- Privacy-first architecture
- Performance optimization

**Responsibilities:**
- Component implementation
- Accessibility compliance
- Privacy architecture
- Testing

**Outputs:**
- Application code
- Components
- Tests
- Documentation

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/design-tokens.json`
- `build/components/*`

---

## Quality Agents

### ethics-guardian

**File:** `quality/ethics-guardian.md`

Ensures ethical compliance across all healing content and applications.

**Expertise:**
- Medical ethics
- Psychological safety
- Cultural respect
- Privacy protection

**Responsibilities:**
- Ethics review
- Safety assessment
- Guardrail enforcement
- Escalation management

**Outputs:**
- Ethics review reports
- Approval/rejection decisions
- Required modifications

**Key Context:**
- `shared/ethics-guardrails.md` (PRIMARY)

**Authority:**
- Can block deployment
- Can require modifications
- Final word on ethics issues

---

### clinical-reviewer

**File:** `quality/clinical-reviewer.md`

Verifies clinical accuracy and evidence claims.

**Expertise:**
- Evidence evaluation
- Medical accuracy
- Safety verification
- Citation checking

**Responsibilities:**
- Evidence verification
- Claim appropriateness
- Citation accuracy
- Safety information completeness

**Outputs:**
- Clinical review reports
- Evidence assessments
- Accuracy ratings

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/citation-format.md`

---

### cultural-reviewer

**File:** `quality/cultural-reviewer.md`

Ensures cultural sensitivity and proper attribution.

**Expertise:**
- Cultural competency
- Attribution practices
- Closed practice identification
- Context preservation

**Responsibilities:**
- Attribution verification
- Cultural sensitivity review
- Closed practice protection
- Context assessment

**Outputs:**
- Cultural review reports
- Attribution assessments
- Sensitivity recommendations

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/terminology.md`

---

### accessibility-auditor

**File:** `quality/accessibility-auditor.md`

Audits for WCAG compliance and accessibility.

**Expertise:**
- WCAG guidelines
- Screen reader compatibility
- Motor accessibility
- Cognitive accessibility

**Responsibilities:**
- WCAG auditing
- Keyboard navigation testing
- Screen reader testing
- Touch target verification

**Outputs:**
- Accessibility audit reports
- WCAG compliance scores
- Remediation guides

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/design-tokens.json`

---

## Deploy Agents

### devops-specialist

**File:** `deploy/devops-specialist.md`

Manages infrastructure and deployment.

**Expertise:**
- Cloud deployment
- CI/CD pipelines
- Security configuration
- Performance monitoring

**Responsibilities:**
- Infrastructure setup
- Deployment automation
- Security hardening
- Monitoring configuration

**Outputs:**
- Deployment configurations
- Infrastructure specs
- Monitoring dashboards

**Key Context:**
- `shared/ethics-guardrails.md`

---

### content-manager

**File:** `deploy/content-manager.md`

Manages content deployment and updates.

**Expertise:**
- Content versioning
- A/B testing
- Content scheduling
- Update coordination

**Responsibilities:**
- Content deployment
- Version management
- Update scheduling
- Rollback handling

**Outputs:**
- Content deployment reports
- Version history
- Update schedules

**Key Context:**
- `shared/ethics-guardrails.md`

---

## Orchestrator Agents

### swarm-conductor

**File:** `orchestrator/swarm-conductor.md`

Coordinates all swarm agents for full development lifecycle.

**Expertise:**
- Workflow orchestration
- Agent coordination
- Quality gate management
- Delivery optimization

**Responsibilities:**
- Workflow execution
- Agent assignment
- Quality gate enforcement
- Timeline management

**Outputs:**
- Orchestration plans
- Status reports
- Deliverable coordination

**Key Context:**
- All shared resources
- All workflows

---

## Agent Coordination Patterns

### Research → Content
```
traditions-scholar → content-writer
  (background research for content creation)

clinical-researcher → content-writer
  (evidence for evidence boxes)
```

### Content → Quality
```
content-writer → ethics-guardian
  (safety review before use)

content-writer → accessibility-auditor
  (accessibility verification)
```

### Build → Quality → Deploy
```
app-developer → ethics-guardian → devops-specialist
  (implementation → review → deployment)
```

### Full Orchestration
```
swarm-conductor coordinates all:
  Research swarm → Design swarm → Content + Build → Quality → Deploy
```

---

## See Also

- [Skills Reference](skills-reference.md) - All skills
- [Shared Resources](shared-resources.md) - Common resources
- [Workflows Reference](workflows-reference.md) - Workflow patterns
