# Changelog

All notable changes to the Healing Swarm Skills project will be documented
in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] — Unreleased

### Added
- **Crisis Response Protocols** (`shared/crisis-response.md`): Structured
  adverse reaction protocols for breathwork, cold exposure, meditation,
  transpersonal, paired, and physical practices. Includes RECOGNIZE-STOP-
  GROUND-ASSESS-RESPOND-FOLLOW-UP framework, grounding techniques library,
  emergency resources, and severity-based triage guidance.
- **Contraindications Database** (`shared/contraindications.md`): Cross-reference
  tables mapping 12 medical/psychological conditions to 7 practice categories
  with absolute, relative, and caution severity levels. Includes tiered
  screening questions, healthcare provider clearance requirements, safe
  alternatives library, and agent decision tree.
- **Outcome Measurement Framework** (`shared/outcome-measurement.md`): Privacy-first
  measurement system using validated instruments (VAS, PHQ-9, GAD-7, PSQI,
  PSS, WHO-5). Includes practice-specific outcome measures, before/after
  protocols, frequency recommendations, honest presentation guidelines, and
  limitations section covering self-report bias, placebo effects, and
  regression to the mean.
- **Practice Pathways** (`shared/practice-pathways.md`): Cross-skill integration
  guide with skill relationship map, five user archetype progressions (acute
  injury, chronic condition, stress/anxiety, spiritual seeker, general wellness),
  multi-modality program templates, recommendation framework, and seasonal
  practice adjustments (TCM Five Elements, Ayurvedic ritucharya).
- **Design tokens** for practice states, timer phases, completion feedback,
  and contraindication severity levels in `shared/design-tokens.json`.
- This CHANGELOG file.

### Security
- All outcome measurement data required to be stored locally per ADR-002.
- Crisis resource display requirements codified (accessible from any practice
  screen, not buried in menus).
- PHQ-9 Item 9 safety trigger mandated for any positive self-harm response.

---

## [1.0.0] — 2025-01-01

### Added

#### Core Infrastructure
- **Swarm Conductor** (`orchestrator/swarm-conductor.md`): Central orchestration
  agent for coordinating all swarm activities and agent delegation.
- **Orchestrator Workflow** (`orchestrator/workflow.yaml`): Workflow definitions
  for swarm coordination and inter-agent communication.
- **Manifest** (`manifest.yaml`): Complete skill manifest defining all agents,
  workflows, shared resources, and swarm configuration.

#### Shared Resources
- **Ethics Guardrails** (`shared/ethics-guardrails.md`): Mandatory safety
  framework covering medical safety, psychological safety, cultural integrity,
  data privacy, transpersonal practice safety, consciousness research claims,
  paired practice requirements, and Indigenous healing guidelines.
- **Terminology Standards** (`shared/terminology.md`): Cross-cultural terminology
  database for vital energy concepts, anatomical/energetic structures, spiritual
  entities, practice categories, evidence language, condition/person language,
  and Grinberg consciousness research terms.
- **Voice Guide** (`shared/voice-guide.md`): Comprehensive voice and tone
  guide ensuring compassionate, grounded, honest, empowering, and reverent
  communication across all content types.
- **Design Tokens** (`shared/design-tokens.json`): Complete design system
  with semantic colors, tradition-specific palettes, angel colors, typography,
  spacing, component tokens, animations, and accessibility settings.
- **Citation Format** (`shared/citation-format.md`): Standardized citation
  and attribution formats for historical texts, modern research, and
  traditional sources.

#### Content Skills
- **Breathwork Coach** (`content/breathwork-coach.md`): Guided breathwork
  facilitation including WHM protocol support.
- **Breathwork Workflow** (`content/breathwork-workflow.yaml`): Structured
  breathwork session workflows.
- **WHM Journey Workflow** (`content/whm-journey-workflow.yaml`): Multi-day
  Wim Hof Method progression workflow.
- **Cold Exposure Guide** (`content/cold-exposure-guide.md`): Safe cold
  exposure practice guidance.
- **Coherence Guide** (`content/coherence-guide.md`): Interhemispheric
  coherence meditation practices (Grinberg-inspired).
- **Content Writer** (`content/content-writer.md`): General healing content
  authoring agent.
- **Orbital Architect** (`content/orbital-architect.md`): Multi-day
  consciousness journey design.
- **Orbital Workflow** (`content/orbital-workflow.yaml`): Orbital journey
  session structure and progression.
- **Resonance Facilitator** (`content/resonance-facilitator.md`): Paired
  meditation and transferred potential practice facilitation.
- **Resonance Workflow** (`content/resonance-workflow.yaml`): Paired practice
  session structure.
- **Language Awareness Guide** (`content/language-awareness-guide.md`):
  Healing language and communication awareness.
- **Language Awareness Workflow** (`content/language-awareness-workflow.yaml`):
  Language review and improvement workflows.
- **Content Workflow** (`content/workflow.yaml`): General content creation
  workflow definitions.
- **Sound Healing Guide** (`content/sound-healing-guide.md`): Sound-based
  healing practice facilitation.
- **Sleep Healing Guide** (`content/sleep-healing-guide.md`): Sleep quality
  improvement through healing practices.
- **Grief Guide** (`content/grief-guide.md`): Grief support and processing
  through healing practices.

#### Research Skills
- **Clinical Researcher** (`research/clinical-researcher.md`): Evidence
  review and clinical research analysis.
- **Consciousness Researcher** (`research/consciousness-researcher.md`):
  Consciousness science and Grinberg research specialist.
- **Mechanisms Neuroscientist** (`research/mechanisms-neuroscientist.md`):
  Neuroscience of healing practices.
- **Traditions Scholar** (`research/traditions-scholar.md`): Healing tradition
  history and cultural context.
- **PNI Researcher** (`research/pni-researcher.md`): Psychoneuroimmunology
  research specialist.
- **Research Workflows** (`research/workflow.yaml`, `research/coherence-workflow.yaml`,
  `research/syntergic-workflow.yaml`): Structured research protocols.

#### Quality Skills
- **Ethics Guardian** (`quality/ethics-guardian.md`): Ethics review and
  guardrail enforcement agent.
- **Clinical Reviewer** (`quality/clinical-reviewer.md`): Medical accuracy
  and safety review.
- **Cultural Reviewer** (`quality/cultural-reviewer.md`): Cultural sensitivity
  and appropriation review.
- **Accessibility Auditor** (`quality/accessibility-auditor.md`): Digital
  accessibility compliance review.
- **Quality Workflow** (`quality/workflow.yaml`): Quality assurance pipeline.

#### Design Skills
- **UX Architect** (`design/ux-architect.md`): Healing application UX design.
- **Visual Designer** (`design/visual-designer.md`): Visual design for
  therapeutic contexts.
- **Design Workflow** (`design/workflow.yaml`): Design process workflows.

#### Build Skills
- **App Developer** (`build/app-developer.md`): Healing application development.
- **Build Workflow** (`build/workflow.yaml`): Build and compilation workflows.

#### Deploy Skills
- **Content Manager** (`deploy/content-manager.md`): Content deployment
  and management.
- **DevOps Specialist** (`deploy/devops-specialist.md`): Infrastructure
  and deployment operations.
- **Deploy Workflow** (`deploy/workflow.yaml`): Deployment pipeline workflows.

#### Templates
- **Agent Prompt Template** (`_templates/agent-prompt.template.md`): Standard
  template for creating new agent prompts.
- **Component Spec Template** (`_templates/component-spec.template.md`):
  Template for UI component specifications.
- **Content Template** (`_templates/content-template.template.md`): Template
  for healing content creation.
- **Workflow Template** (`_templates/workflow.template.yaml`): Template for
  workflow definitions.

#### Documentation and Website
- Project README with comprehensive overview
- Contributing guidelines
- Architecture decision records (ADRs)
- Project website with documentation pages
- Worked examples covering all major skill categories

---
