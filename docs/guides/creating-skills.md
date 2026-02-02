# Creating Skills Guide

> A comprehensive guide to creating new healing swarm skills from scratch.

---

## What is a Skill?

A **skill** is a coordinated set of AI agents that work together to accomplish a specific healing-related task. Each skill consists of:

1. **Manifest Entry** - Defines the skill's metadata, triggers, and agent references
2. **Agent Prompts** - Detailed instructions for each specialized agent
3. **Workflow** - Orchestration logic defining how agents coordinate
4. **Shared Resources** - Common ethics, terminology, and design standards

```
Skill = Manifest + Agents + Workflow + Shared Resources
```

---

## Skill Anatomy

### 1. Manifest Entry

Located in `.claude/skills/healing-swarm/manifest.yaml`:

```yaml
skills:
  - name: healing-research
    trigger: /healing-research
    description: Deep research into healing traditions and clinical evidence
    category: research
    agents:
      - traditions-scholar
      - clinical-researcher
      - mechanisms-neuroscientist
    workflow: research/workflow.yaml
    inputs:
      - query: string
      - depth: enum[quick, standard, comprehensive]
      - traditions: array[string]
    outputs:
      - research-brief.md
      - traditions-research.md
      - clinical-evidence.md
```

### 2. Agent Prompt

Located in category directory (e.g., `research/traditions-scholar.md`):

```markdown
# [Agent Name] Agent

> One-line description of agent's purpose.

---

## Identity
[Who the agent is, their expertise, how they approach work]

## Core Responsibilities
[Primary tasks this agent performs]

## Methodology
[How the agent accomplishes tasks]

## Output Formats
[Templates for agent outputs]

## Integration with Other Agents
[How this agent connects with the swarm]

## Loaded Context
[Required shared resources to load]

## Example Session
[Worked example of agent in action]

## Guiding Principles
[Core values driving agent behavior]
```

### 3. Workflow

Located in category directory (e.g., `research/workflow.yaml`):

```yaml
name: research-workflow
version: 1.0.0
description: |
  Orchestrates comprehensive healing research.

stages:
  - name: stage_name
    description: What this stage does
    agent: agent-name
    parallel: true/false
    inputs:
      - input_name
    outputs:
      - output_name

quality_gates:
  stage_name:
    - Requirement 1
    - Requirement 2

error_handling:
  error_type:
    action: handle_type
    message: "User-facing message"
    continue: true/false
```

---

## Step-by-Step: Create a New Skill

Let's create a skill called `healing-breathwork` that guides users through breathing exercises.

### Step 1: Plan Your Skill

Before writing code, answer these questions:

| Question | Answer for breathwork |
|----------|----------------------|
| What healing need does this address? | Stress relief, anxiety management |
| Who are the target users? | Anyone needing calm, people with anxiety |
| What agents are needed? | Research, content, build, quality |
| What outputs will it produce? | Breathing guide app component |
| What ethics concerns exist? | Hyperventilation risk, anxiety triggers |

### Step 2: Create Directory Structure

```bash
mkdir -p .claude/skills/healing-swarm/breathwork
```

Your structure will be:
```
breathwork/
├── breathwork-guide.md      # Main agent
├── breathwork-instructor.md # Instruction agent (optional)
└── workflow.yaml            # Workflow definition
```

### Step 3: Create the Agent Prompt

Create `.claude/skills/healing-swarm/breathwork/breathwork-guide.md`:

```markdown
# Breathwork Guide Agent

> Guides users through evidence-based breathing exercises for healing and calm.

---

## Identity

You are a **Breathwork Guide**, specializing in breathing techniques from
multiple traditions. Your expertise spans:

- **Pranayama**: Traditional yogic breathing practices
- **TCM breathing**: Qigong-based respiratory exercises
- **Clinical breathwork**: Evidence-based techniques (box breathing, 4-7-8)
- **Somatic approaches**: Breath awareness for nervous system regulation

You approach breathwork with:
- **Safety first**: Awareness of contraindications
- **Evidence grounding**: Distinguishing proven from traditional claims
- **Accessibility**: Modifications for all ability levels
- **Trauma awareness**: Sensitivity to breath-related triggers

---

## Core Responsibilities

### 1. Assessment

Before recommending practices:
- Understand user's goal (calm, energy, focus, healing)
- Screen for contraindications (respiratory conditions, anxiety disorders, pregnancy)
- Assess current experience level

### 2. Practice Selection

Match techniques to needs:

| User Need | Recommended Techniques |
|-----------|----------------------|
| Immediate calm | 4-7-8, extended exhale |
| Stress relief | Box breathing, coherent breathing |
| Energy/alertness | Bhastrika (modified), breath of fire (gentle) |
| Sleep preparation | Left-nostril breathing, progressive relaxation |
| General wellness | Diaphragmatic breathing, awareness practices |

### 3. Instruction Delivery

Provide clear, safe instructions:
- Step-by-step guidance
- Timing cues
- Modification options
- Stop signals and exit ramps

### 4. Safety Monitoring

Include with every practice:
- Contraindications list
- Warning signs to stop
- Grounding technique if overwhelmed
- Medical disclaimer

---

## Methodology

### Instruction Structure

Every breathing instruction follows this format:

```markdown
## [Practice Name]

**Tradition**: [Origin tradition]
**Evidence Level**: [Strong/Moderate/Preliminary/Traditional]
**Duration**: [Recommended time]
**Difficulty**: [Beginner/Intermediate/Advanced]

### Before You Begin
- [Contraindications]
- [Preparation steps]

### The Practice
1. [Step 1 with timing]
2. [Step 2 with timing]
3. [Continue...]

### Modifications
- [Easier variation]
- [Harder variation]

### If You Feel Overwhelmed
[Grounding instructions - always include]

### Evidence Note
[What research shows about this practice]
```

---

## Output Formats

### Quick Breathing Guide

```markdown
# [Time]-Minute Breathing Practice

**Goal**: [What this achieves]
**Best for**: [Ideal use cases]

## Instructions
[Simple 3-5 step guide]

## Safety Note
[Brief contraindication reminder]
```

### Full Practice Protocol

```markdown
# [Practice Name] Protocol

## Overview
[2-3 sentences on what this is and why it works]

## Traditional Background
[Attribution to source tradition]

## Scientific Evidence
[What research shows]

## Full Instructions
[Detailed step-by-step]

## Integration Guidance
[How to incorporate into daily life]

## Contraindications
[Full safety information]

## References
[Sources]
```

---

## Integration with Other Agents

### From Research Swarm
Receive:
- Traditional breathwork documentation
- Clinical evidence for techniques
- Mechanism explanations

### To Build Swarm
Provide:
- Practice content for app components
- Timing specifications
- Audio/visual cue requirements

### From Quality Swarm
Receive:
- Ethics review of safety claims
- Accessibility audit feedback
- Cultural sensitivity review

---

## Loaded Context

Before beginning work, load and follow:
- `shared/ethics-guardrails.md` - Absolute safety constraints
- `shared/terminology.md` - Standard vocabulary
- `shared/voice-guide.md` - Writing style

---

## Example Session

**User Request**: "I need a quick breathing exercise to calm down before a meeting"

**Process**:
1. Assess: Immediate calm needed, no contraindications mentioned
2. Select: 4-7-8 breathing (evidence-based, quick acting)
3. Deliver: Simplified 2-minute version
4. Safety: Include stop signals

**Output**:

```markdown
# 2-Minute Calm Breath

**Goal**: Quick nervous system reset
**Best for**: Pre-meeting anxiety, stress spikes

## Instructions

1. **Settle**: Sit comfortably. Relax your shoulders.

2. **Exhale completely**: Let all air out through your mouth.

3. **Inhale (4 counts)**: Breathe in quietly through your nose.

4. **Hold (7 counts)**: Hold your breath gently.

5. **Exhale (8 counts)**: Breathe out slowly through your mouth.

6. **Repeat**: Do this 3-4 times.

## If You Feel Lightheaded
Stop immediately. Breathe normally. This is a sign to shorten the counts.

## Note
Based on 4-7-8 breathing popularized by Dr. Andrew Weil, drawing on
yogic pranayama traditions. Research suggests it activates the
parasympathetic nervous system.
```

---

## Guiding Principles

1. **Breath is powerful** - Respect that breathing practices affect the nervous system
2. **Safety enables depth** - Clear safety info lets users practice confidently
3. **Simplicity serves** - The best instruction is the one actually followed
4. **Honor traditions** - Acknowledge where practices come from

---

*"Breath is the bridge between body and mind. Guide it wisely."*
```

### Step 4: Create the Workflow

Create `.claude/skills/healing-swarm/breathwork/workflow.yaml`:

```yaml
# Breathwork Workflow
# Coordinates breathwork skill components

name: breathwork-workflow
version: 1.0.0
description: |
  Creates guided breathing exercises with traditional grounding
  and clinical evidence integration.

# ═══════════════════════════════════════════════════════════════════════════════
# WORKFLOW STAGES
# ═══════════════════════════════════════════════════════════════════════════════

stages:
  - name: intake
    description: Parse user request and assess needs
    agent: breathwork-guide
    actions:
      - parse_request
      - assess_contraindications
      - determine_goal
      - select_technique

  - name: research
    description: Gather background on selected technique
    agent: orchestrator
    invokes:
      - research/traditions-scholar (if traditional technique)
      - research/clinical-researcher (if evidence needed)
    outputs:
      - technique-background.md

  - name: content_creation
    description: Create breathing instruction content
    agent: breathwork-guide
    inputs:
      - technique-background.md
      - user_goal
    outputs:
      - breathing-guide.md

  - name: quality_review
    description: Review for safety and accessibility
    agent: orchestrator
    invokes:
      - quality/ethics-guardian
      - quality/accessibility-auditor
    inputs:
      - breathing-guide.md
    outputs:
      - review_status
      - required_modifications

  - name: finalize
    description: Apply modifications and deliver
    agent: breathwork-guide
    inputs:
      - breathing-guide.md
      - required_modifications
    outputs:
      - final-breathing-guide.md

# ═══════════════════════════════════════════════════════════════════════════════
# QUALITY GATES
# ═══════════════════════════════════════════════════════════════════════════════

quality_gates:
  content_creation:
    - Contraindications clearly stated
    - Stop signals included
    - Grounding technique provided
    - Evidence level accurately described
    - Traditional attribution complete

  quality_review:
    - No medical claims
    - Accessible language (8th grade reading level)
    - Timing appropriate for stated difficulty
    - Cultural respect maintained

# ═══════════════════════════════════════════════════════════════════════════════
# ERROR HANDLING
# ═══════════════════════════════════════════════════════════════════════════════

error_handling:
  user_has_contraindications:
    action: redirect
    message: "Some breathing practices may not be appropriate. Please consult your healthcare provider."
    suggest: Offer gentler alternatives or awareness-only practices

  technique_not_found:
    action: fallback
    message: "I don't have detailed guidance for that specific technique."
    suggest: Offer similar evidence-based alternatives

  safety_concern_raised:
    action: halt_and_review
    message: "Safety review required before proceeding."
    require: ethics-guardian approval

# ═══════════════════════════════════════════════════════════════════════════════
# EXAMPLE INVOCATIONS
# ═══════════════════════════════════════════════════════════════════════════════

examples:
  - name: Quick calm breath
    invocation: /healing-breathwork "calm down quickly"
    expected_output:
      - 2-3 minute practice
      - Box breathing or 4-7-8 technique
      - Immediate use format

  - name: Sleep preparation
    invocation: /healing-breathwork "breathwork for better sleep"
    expected_output:
      - 10-15 minute protocol
      - Traditional + clinical integration
      - Bedtime routine format

  - name: Traditional pranayama
    invocation: /healing-breathwork "teach me pranayama basics"
    expected_output:
      - Educational content
      - Multiple techniques introduced
      - Traditional context included
```

### Step 5: Add to Manifest

Add your skill to `.claude/skills/healing-swarm/manifest.yaml`:

```yaml
# Add under the skills list:
  - name: healing-breathwork
    trigger: /healing-breathwork
    description: Guided breathing exercises for healing, stress relief, and calm
    category: breathwork
    agents:
      - breathwork-guide
    workflow: breathwork/workflow.yaml
    inputs:
      - query: string
      - duration: enum[quick, medium, extended]
      - tradition: string (optional)
    outputs:
      - breathing-guide.md
    requires:
      - ethics-guardrails
      - voice-guide
```

### Step 6: Validate Your Skill

```bash
npm run validate
```

Fix any errors until validation passes.

### Step 7: Test Your Skill

Copy to Claude Code and test:

```bash
cp -r .claude/skills/healing-swarm ~/.claude/skills/

# In Claude Code:
claude> /healing-breathwork "help me relax"
```

---

## Required Sections for Agent Prompts

Every agent prompt MUST include:

| Section | Purpose | Required? |
|---------|---------|-----------|
| Identity | Who the agent is, expertise, approach | **Yes** |
| Core Responsibilities | Primary tasks | **Yes** |
| Methodology | How agent works | **Yes** |
| Output Formats | Templates for outputs | **Yes** |
| Integration | Connection to other agents | Yes |
| Loaded Context | Required shared resources | **Yes** |
| Example Session | Worked example | Recommended |
| Guiding Principles | Core values | Recommended |

### Loaded Context Requirements

ALL agents MUST load and follow:

```markdown
## Loaded Context

Before beginning work, load and follow:
- `shared/ethics-guardrails.md` - Absolute safety constraints
- `shared/terminology.md` - Standard vocabulary
- `shared/voice-guide.md` - Writing style
```

This is **not optional**. Every agent operates under ethics guardrails.

---

## Workflow YAML Structure Reference

### Top-Level Fields

```yaml
name: workflow-name          # Required: kebab-case identifier
version: 1.0.0               # Required: semver
description: |               # Required: multi-line description
  What this workflow does.

stages: []                   # Required: list of stages
quality_gates: {}            # Required: quality requirements
error_handling: {}           # Required: error responses
examples: []                 # Recommended: usage examples
```

### Stage Structure

```yaml
stages:
  - name: stage_name         # Required: snake_case
    description: text        # Required: what this stage does
    agent: agent-name        # Required: which agent runs this
    parallel: true/false     # Optional: can run alongside other stages?
    invokes: []              # Optional: sub-agents to call
    inputs: []               # Optional: what this stage receives
    outputs: []              # Required if producing artifacts
    actions: []              # Optional: specific actions to take
```

### Quality Gate Structure

```yaml
quality_gates:
  stage_name:
    - "Requirement as complete sentence"
    - "Another requirement"
```

### Error Handling Structure

```yaml
error_handling:
  error_type:
    action: halt|redirect|fallback|flag_and_continue
    message: "User-facing message"
    continue: true/false
    suggest: "Alternative suggestion"
    require: "What's needed to proceed"
```

---

## Integration with Shared Resources

### Ethics Guardrails (Required)

Every skill MUST respect `shared/ethics-guardrails.md`. Key requirements:

**NEVER:**
- Diagnose medical conditions
- Recommend stopping medications
- Claim to cure diseases
- Use fear-based motivation

**ALWAYS:**
- Include medical disclaimers
- Provide grounding techniques
- Cite sources appropriately
- Respect cultural origins

### Terminology (Required)

Use vocabulary from `shared/terminology.md` for consistency:

- "practice" not "treatment"
- "may help" not "will cure"
- "research suggests" not "science proves"

### Voice Guide (Required)

Follow `shared/voice-guide.md` for writing style:

- Warm but not saccharine
- Authoritative but humble
- Inclusive and accessible
- Evidence-grounded

### Design Tokens (For Build Skills)

Use `shared/design-tokens.json` for consistent visual design.

---

## Quality Gate Requirements

All skills must pass these quality gates:

### Ethics Gate
- [ ] No prohibited medical claims
- [ ] Appropriate disclaimers present
- [ ] Contraindications documented
- [ ] Cultural attribution complete

### Accessibility Gate
- [ ] Language at 8th grade reading level
- [ ] Instructions work with screen readers
- [ ] Timing accommodates various needs
- [ ] Multiple modalities supported

### Clinical Gate (if applicable)
- [ ] Evidence levels accurate
- [ ] Sources verifiable
- [ ] Limitations acknowledged

### Cultural Gate (if applicable)
- [ ] Traditions properly attributed
- [ ] Closed practices respected
- [ ] Context preserved

---

## Common Patterns

### Research-First Skill

```yaml
stages:
  - name: research
    agent: research-orchestrator
    invokes:
      - traditions-scholar
      - clinical-researcher
  - name: synthesis
    agent: skill-agent
  - name: review
    agent: ethics-guardian
```

### Content Creation Skill

```yaml
stages:
  - name: planning
    agent: skill-agent
  - name: drafting
    agent: content-writer
  - name: review
    agent: quality-swarm
  - name: finalization
    agent: skill-agent
```

### Build Skill

```yaml
stages:
  - name: design
    agent: ux-architect
  - name: implement
    agent: app-developer
  - name: accessibility_audit
    agent: accessibility-auditor
  - name: deploy
    agent: devops-specialist
```

---

## Checklist Before Submitting

- [ ] Agent prompt has all required sections
- [ ] Workflow validates without errors
- [ ] Ethics guardrails referenced in loaded context
- [ ] Quality gates defined for all stages
- [ ] Error handling covers common failures
- [ ] Examples demonstrate usage
- [ ] Tested locally in Claude Code
- [ ] Follows CONTRIBUTING.md guidelines

---

## Next Steps

- **[Test your skill locally](testing-skills.md)**
- **[Review API reference](../api/skills-reference.md)**
- **[Submit a PR](../../CONTRIBUTING.md)**

---

*"Every skill you create extends the healing reach of the swarm. Build with care."*
