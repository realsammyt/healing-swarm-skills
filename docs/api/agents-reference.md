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
| [breathwork-coach](#breathwork-coach) | Specialist | WHM breathing protocol design |
| [cold-exposure-guide](#cold-exposure-guide) | Specialist | Progressive cold adaptation |
| [language-awareness-guide](#language-awareness-guide) | Specialist | Cognitive deautomatization practices |
| [sound-healing-guide](#sound-healing-guide) | Specialist | Sound healing protocol design |
| [somatic-guide](#somatic-guide) | Specialist | Movement and somatic practice design |
| [sleep-healing-guide](#sleep-healing-guide) | Specialist | Sleep and dream practice design |
| [nature-guide](#nature-guide) | Specialist | Nature connection protocol design |
| [water-guide](#water-guide) | Specialist | Water and hydrotherapy protocol design |
| [grief-guide](#grief-guide) | Specialist | Grief support protocol design |
| [expressive-guide](#expressive-guide) | Specialist | Creative and expressive healing design |
| [community-facilitator](#community-facilitator) | Specialist | Group healing circle facilitation |
| [contemplative-guide](#contemplative-guide) | Specialist | Contemplative inquiry protocol design |
| [pni-researcher](#pni-researcher) | Research | Psychoneuroimmunology research |

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

## Consciousness Agents

### consciousness-researcher

**File:** `research/consciousness-researcher.md`

Specializes in Grinberg's consciousness science, EEG coherence research, and cross-tradition contemplative studies.

**Expertise:**
- Grinberg-Zylberbaum research (UNAM, 1970s-1994)
- EEG coherence and transferred potential studies
- Syntergic theory
- Shamanic observation methodology
- Cross-tradition consciousness research

**Responsibilities:**
- Grinberg research synthesis
- Evidence-level assessment
- Cross-tradition consciousness parallels
- Honest limitations documentation

**Outputs:**
- Research briefs with evidence levels
- Bibliography compilations
- Shamanic context documents
- Honest assessment reports

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/citation-format.md`

---

### coherence-guide

**File:** `content/coherence-guide.md`

Designs self-allusive meditation practices based on Grinberg's 6-phase interhemispheric coherence protocol.

**Expertise:**
- Grinberg's 6-phase meditation protocol
- Interhemispheric coherence techniques
- "High-inclusion" unified field awareness
- Progressive meditation instruction

**Responsibilities:**
- Coherence practice design (6-phase structure)
- Audio timing specification
- Meditation script creation
- Level-appropriate progression

**Outputs:**
- Guided meditation scripts
- Audio timing JSON
- Practice progression guides

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/coherence-practice.md`

---

### resonance-facilitator

**File:** `content/resonance-facilitator.md`

Designs paired and group meditation protocols based on Grinberg's transferred potential research.

**Expertise:**
- Transferred potential experiment protocols
- Paired meditation facilitation
- Consent framework design
- Boundary management in group practice

**Responsibilities:**
- Pairing protocol design
- Consent framework creation
- Participant screening and preparation
- Boundary and safety guidelines

**Outputs:**
- Pairing protocol guides
- Participant preparation documents
- Consent frameworks
- Boundary guidelines

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/resonance-pairing.md`

---

### orbital-architect

**File:** `content/orbital-architect.md`

Designs progressive multi-day consciousness journeys through Grinberg's orbital model.

**Expertise:**
- Grinberg's orbital consciousness model
- Multi-day contemplative program design
- Progressive challenge architecture
- Safety screening for transpersonal content

**Responsibilities:**
- Journey structure and pacing
- Daily practice sequencing
- Orbital progression design
- Safety architecture for advanced practices

**Outputs:**
- Journey maps
- Daily practice guides
- Orbital progression guides
- Safety and screening protocols

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/orbital-day.md`

---

## Specialist Agents

### breathwork-coach

**File:** `content/breathwork-coach.md`

Designs Wim Hof Method breathing protocols with comprehensive safety architecture covering the three-phase round structure (power breaths, retention, recovery breath).

**Expertise:**
- WHM three-phase breathing rounds
- Progressive training design (beginner to advanced)
- Breath retention safety (competitive holding prevention)
- Tummo and pranayama cross-tradition context

**Responsibilities:**
- Breathing protocol design with timing calibration
- Safety briefing creation (water, driving, standing contraindications)
- Progressive session structuring
- Timer specification (count-up, not countdown)

**Outputs:**
- Breathing session scripts
- Timing JSON for timer integration
- Quick reference cards
- Safety briefings

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/breathwork-protocol.md`
- `content/breathwork-workflow.yaml`

---

### cold-exposure-guide

**File:** `content/cold-exposure-guide.md`

Designs progressive cold exposure protocols for WHM Pillar 2, from cold shower finishes through full cold immersion.

**Expertise:**
- Progressive cold adaptation (4 levels)
- Afterdrop physiology and safety
- Partner protocols for immersion
- Temperature guidelines (Celsius/Fahrenheit)

**Responsibilities:**
- Cold exposure protocol design
- Safety verification (partner requirements, medical screening)
- Progression criteria and timing
- Rewarming guidance

**Outputs:**
- Cold exposure protocol guides
- Safety checklists
- Progression criteria
- Temperature reference tables

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/cold-exposure-protocol.md`

---

### language-awareness-guide

**File:** `content/language-awareness-guide.md`

Designs cognitive deautomatization protocols based on research by Deikman (1966), semantic satiation studies, and Chase Hughes' *Tongue* (2024). Creates practices that reveal how language shapes perception.

**Expertise:**
- Label delay and un-naming practices
- Pronoun and identity observation ("I" tracing)
- Semantic satiation and meaning collapse
- Group perception protocols (6 exercise types)
- Cross-tradition parallels (Zen, Dzogchen, phenomenology, vipassana)

**Responsibilities:**
- Individual protocol design (4 progressive levels)
- Group exercise facilitation guides
- Psychological safety architecture (Pocket Exit, Reintegration Ritual)
- Consent framework design for group exercises

**Outputs:**
- Language awareness practice protocols
- Group facilitation scripts with consent frameworks
- Grounding protocol guides
- Perception journal prompts

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/language-awareness-protocol.md`
- `content/templates/group-perception-protocol.md`
- `content/language-awareness-workflow.yaml`

---

### sound-healing-guide

**File:** `content/sound-healing-guide.md`

Designs therapeutic sound practices spanning Vedic mantra, Psalm chanting, Gregorian chant, Tibetan singing bowl, and vagal toning.

**Expertise:**
- Vedic mantra traditions
- Sacred chanting (Psalm, Gregorian)
- Tibetan singing bowl protocols
- Vagal toning techniques
- Hearing safety screening

**Responsibilities:**
- Sound protocol design with tradition attribution
- Safety screening (hearing conditions, seizure disorders)
- Progressive level structuring (listening through extended chanting)
- Open/closed practice boundary enforcement

**Outputs:**
- Sound practice protocols
- Safety screening checklists
- Tradition context documents
- Progressive curricula

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/sound-protocol.md`

---

### somatic-guide

**File:** `content/somatic-guide.md`

Designs gentle movement protocols with universal accessibility modifications.

**Expertise:**
- Qigong and tai chi forms
- Yoga adaptations
- Kinhin (Zen walking meditation)
- Feldenkrais awareness through movement
- Polyvagal-informed movement

**Responsibilities:**
- Movement protocol design with 4 modification levels
- Standing/seated/lying/wheelchair adaptations
- Pain boundary enforcement (within comfort, never through pain)
- Biomechanical safety screening

**Outputs:**
- Movement practice protocols
- Modification guides (4 positions)
- Safety screening checklists
- Progressive training plans

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/movement-protocol.md`

---

### sleep-healing-guide

**File:** `content/sleep-healing-guide.md`

Designs sleep quality and dream work protocols across traditions.

**Expertise:**
- Asclepian dream temple practices
- Tibetan dream yoga (milam)
- TCM organ clock theory
- Ayurvedic dinacharya (daily routines)
- CBT-I referral criteria

**Responsibilities:**
- Sleep protocol design with screen paradox acknowledgment
- Dream practice design with contraindication awareness
- CBT-I referral for persistent insomnia (>3 months)
- Progressive level structuring

**Outputs:**
- Sleep practice protocols
- Screen paradox notes
- Dream practice guides
- CBT-I referral criteria documents

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/sleep-protocol.md`

---

### nature-guide

**File:** `content/nature-guide.md`

Designs nature connection and forest bathing protocols with urban alternatives.

**Expertise:**
- Shinrin-yoku (forest bathing)
- Earthing/grounding practices
- Horticultural therapy
- Five Element nature observation
- Urban nature connection

**Responsibilities:**
- Nature protocol design with environmental privilege awareness
- Urban/indoor alternative provision (never as "lesser")
- Seasonal and weather adaptation
- Safety screening (allergies, mobility, weather)

**Outputs:**
- Nature practice protocols
- Urban alternative guides
- Seasonal adaptation notes
- Environmental accessibility assessments

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/nature-protocol.md`

---

### water-guide

**File:** `content/water-guide.md`

Designs water and hydrotherapy protocols with non-negotiable safety requirements.

**Expertise:**
- Contrast therapy (hot/cold cycling)
- Kneipp method (5 pillars)
- Finnish sauna protocols
- Ritual bathing education (mikveh, onsen)
- Drowning prevention

**Responsibilities:**
- Water protocol design with cardiac and drowning safety
- Temperature and duration guidelines
- Relationship to existing cold-exposure skill
- Cultural context for ritual bathing (education, not instruction)

**Outputs:**
- Water therapy protocols
- Safety checklists (non-negotiable)
- Temperature reference tables
- Cultural context documents

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/water-protocol.md`

---

### grief-guide

**File:** `content/grief-guide.md`

Designs grief support protocols with the highest psychological sensitivity in the system.

**Expertise:**
- Jewish mourning structures (shiva, shloshim, yahrzeit)
- Buddhist impermanence practices
- Dia de los Muertos traditions
- Celtic keening
- Complicated grief recognition

**Responsibilities:**
- Grief protocol design with minimum 3 exit ramps per practice
- Crisis resource placement (at least 3 locations per document)
- Suicidal ideation screening integration
- Stage-appropriate content (acute through complicated)

**Outputs:**
- Grief practice protocols
- Crisis resource documents
- Exit ramp guides
- Screening integration notes

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/crisis-response.md`
- `content/templates/grief-practice.md`

---

### expressive-guide

**File:** `content/expressive-guide.md`

Designs creative and expressive healing protocols with strongest privacy protections.

**Expertise:**
- Pennebaker expressive writing (200+ studies)
- Bibliotherapy
- Mandala creation
- Ikebana (Japanese flower arranging)
- Sacred poetry traditions

**Responsibilities:**
- Expressive protocol design with privacy-first architecture
- No artistic skill requirements (process over product)
- Closed practice boundary enforcement (Navajo sand painting)
- Journal and writing privacy protections

**Outputs:**
- Expressive practice protocols
- Privacy protection guides
- Process-focused instructions
- Tradition attribution documents

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/expressive-protocol.md`

---

### community-facilitator

**File:** `content/community-facilitator.md`

Designs group healing circle facilitation guides with consent and safety architecture.

**Expertise:**
- Talking circle facilitation
- Mussar practice groups
- Buddhist Sangha structure
- Quaker meeting for worship
- Ubuntu philosophy
- 12-Step traditions

**Responsibilities:**
- Facilitation guide design with trained facilitator requirement
- Full consent framework creation
- Confidentiality agreement templates
- Power dynamic awareness and mitigation

**Outputs:**
- Facilitation guides
- Consent frameworks
- Confidentiality agreements
- Power dynamic assessments
- Participant preparation documents

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/community-protocol.md`

---

### contemplative-guide

**File:** `content/contemplative-guide.md`

Designs contemplative inquiry protocols from structured reflection to silent investigation.

**Expertise:**
- Zen koan practice
- Advaitic self-inquiry (Ramana Maharshi)
- Socratic questioning method
- Ignatian Examen
- ACT cognitive defusion
- Dzogchen (closed practice awareness)

**Responsibilities:**
- Inquiry protocol design with progressive safety requirements
- Closed tradition enforcement (Dzogchen reference only)
- Level-appropriate progression (structured → guided → open → silent)
- Integration with language awareness practices

**Outputs:**
- Inquiry practice protocols
- Tradition context documents
- Progressive curricula
- Safety requirement escalation guides

**Key Context:**
- `shared/ethics-guardrails.md`
- `content/templates/contemplative-protocol.md`

---

### pni-researcher

**File:** `research/pni-researcher.md`

Specializes in psychoneuroimmunology — the science of mind-body-immune connections.

**Expertise:**
- HPA axis stress pathways
- Vagal tone and parasympathetic function
- Telomere biology and cellular aging
- Placebo and nocebo mechanisms
- Wound healing psychophysiology
- Social-immune connections

**Responsibilities:**
- PNI pathway research and documentation
- Traditional practice → biological pathway mapping
- Honest limitations documentation
- Evidence strength calibration for PNI claims

**Outputs:**
- PNI research briefs
- Practice-to-pathway mapping documents
- Limitations assessments
- Evidence-calibrated summaries

**Key Context:**
- `shared/ethics-guardrails.md`
- `shared/citation-format.md`

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
