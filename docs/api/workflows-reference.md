# Workflows Reference

> Quick reference for workflow patterns and structures.

---

## Workflow Anatomy

Every workflow has these sections:

```yaml
# Header
name: workflow-name
version: 1.0.0
description: |
  Multi-line description

# Core Definition
stages: []
quality_gates: {}
error_handling: {}

# Optional
depth_levels: {}
integration: {}
output_structure: {}
examples: []
```

---

## Stage Types

### Agent Stage

Direct agent execution:

```yaml
- name: stage_name
  description: What this stage does
  agent: agent-name
  inputs:
    - input1
    - input2
  outputs:
    - output1.md
  actions:
    - action1
    - action2
```

### Orchestrator Stage

Invokes other agents through orchestrator:

```yaml
- name: quality_review
  description: Review for quality
  agent: orchestrator
  invokes:
    - quality/ethics-guardian
    - quality/accessibility-auditor
  inputs:
    - content.md
  outputs:
    - review_status
```

### Parallel Stage

Runs alongside other parallel stages:

```yaml
- name: traditional_research
  description: Research traditions
  agent: traditions-scholar
  parallel: true
  outputs:
    - traditions.md

- name: clinical_research
  description: Research evidence
  agent: clinical-researcher
  parallel: true
  outputs:
    - evidence.md
```

### Conditional Stage

Runs only if condition is met:

```yaml
- name: revision
  description: Apply revisions
  agent: content-creator
  condition: revisions_required
  inputs:
    - draft.md
    - revisions
  outputs:
    - revised.md
```

---

## Quality Gates

Define requirements each stage must meet:

```yaml
quality_gates:
  stage_name:
    - "Requirement as complete sentence"
    - "Another requirement"
    - "Third requirement"

  quality_review:
    - Ethics guardrails respected
    - No prohibited medical claims
    - Appropriate disclaimers present
```

### Standard Quality Gates

**For Content Stages:**
```yaml
content_creation:
  - Template structure followed
  - Voice guide adhered to
  - Sources cited
  - Accessibility guidelines met
```

**For Research Stages:**
```yaml
research:
  - Primary sources cited
  - Evidence levels accurate
  - Limitations documented
  - Cultural context preserved
```

**For Build Stages:**
```yaml
implementation:
  - Accessibility requirements met
  - Privacy architecture followed
  - Tests passing
  - Documentation complete
```

**For Review Stages:**
```yaml
quality_review:
  - Ethics guardrails respected
  - No prohibited claims
  - Disclaimers present
  - Attribution complete
```

---

## Error Handling

Define how to handle failures:

```yaml
error_handling:
  error_type:
    action: action_type
    message: "User-facing message"
    continue: true/false
    suggest: "Alternative suggestion"
    require: "What's needed to proceed"
```

### Action Types

| Action | Behavior |
|--------|----------|
| `halt` | Stop workflow completely |
| `clarify` | Ask user for more information |
| `redirect` | Suggest alternative approach |
| `fallback` | Use alternative method |
| `flag_and_continue` | Note issue, continue workflow |
| `halt_and_review` | Stop for manual review |

### Common Error Handlers

```yaml
error_handling:
  invalid_input:
    action: clarify
    message: "Please provide more specific information"
    continue: false

  out_of_scope:
    action: redirect
    message: "This is outside what I can safely help with"
    suggest: "Consider consulting a healthcare provider"
    continue: false

  ethics_concern:
    action: halt_and_review
    message: "Ethics review required"
    continue: false
    require: ethics-guardian approval

  missing_data:
    action: flag_and_continue
    message: "Some information unavailable"
    continue: true
    note_in_output: true

  closed_practice:
    action: halt
    message: "This practice is closed/initiatory"
    continue: false
    suggest_alternatives: true
```

---

## Depth Levels

Optional configuration for variable-depth workflows:

```yaml
depth_levels:
  quick:
    description: Rapid overview
    stage_config:
      - setting: value
    output: Brief summary

  standard:
    description: Balanced depth
    stage_config:
      - setting: value
    output: Complete deliverable

  comprehensive:
    description: Deep dive
    stage_config:
      - setting: value
    output: Extensive documentation
```

### Example: Research Depth

```yaml
depth_levels:
  quick:
    description: Rapid overview
    traditions:
      - Secondary sources acceptable
      - 1-2 traditions
    clinical:
      - Systematic reviews only
      - Top 3 studies
    output: 2-3 page brief

  standard:
    description: Balanced research
    traditions:
      - Primary sources preferred
      - 2-3 traditions
    clinical:
      - Reviews + key RCTs
      - GRADE assessment
    output: 5-10 page brief

  comprehensive:
    description: Deep dive
    traditions:
      - Primary sources required
      - All relevant traditions
    clinical:
      - Complete literature search
      - Full safety profile
    output: 15-25 page brief
```

---

## Integration Patterns

Define how stages connect:

```yaml
integration:
  parallel_execution:
    - stage_a
    - stage_b

  sequential_execution:
    - intake → stage_a + stage_b
    - stage_a + stage_b → synthesis
    - synthesis → review
    - review → finalize

  data_flow:
    stage_a_to_stage_b:
      - Data type 1
      - Data type 2
```

---

## Output Structure

Define expected output format:

```yaml
output_structure:
  output-file.md:
    sections:
      - section1
      - section2
      - section3

  another-output.yaml:
    fields:
      - field1
      - field2
```

---

## Example Invocations

Document how to use the skill:

```yaml
examples:
  - name: Basic usage
    invocation: /skill-trigger "query"
    expected_output:
      - Output description
      - Another output

  - name: With options
    invocation: /skill-trigger "query" --option value
    expected_output:
      - Output with options

  - name: Edge case
    invocation: /skill-trigger "edge case"
    expected_output:
      - Graceful handling
```

---

## Common Workflow Patterns

### Linear Workflow

```yaml
stages:
  - name: intake
    agent: main-agent
  - name: execute
    agent: main-agent
  - name: review
    agent: orchestrator
    invokes: [quality/ethics-guardian]
  - name: finalize
    agent: main-agent
```

### Parallel Research Workflow

```yaml
stages:
  - name: intake
    agent: orchestrator

  - name: track_a
    agent: agent-a
    parallel: true

  - name: track_b
    agent: agent-b
    parallel: true

  - name: synthesis
    agent: orchestrator
    inputs:
      - track_a_output
      - track_b_output

  - name: review
    agent: orchestrator
```

### Multi-Review Workflow

```yaml
stages:
  - name: create
    agent: creator-agent

  - name: ethics_review
    agent: orchestrator
    invokes: [quality/ethics-guardian]
    parallel: true

  - name: accessibility_review
    agent: orchestrator
    invokes: [quality/accessibility-auditor]
    parallel: true

  - name: synthesis
    agent: orchestrator
    inputs:
      - ethics_findings
      - accessibility_findings

  - name: revision
    agent: creator-agent
    condition: revisions_needed

  - name: finalize
    agent: creator-agent
```

### Full Lifecycle Workflow

```yaml
stages:
  - name: research
    agent: orchestrator
    invokes:
      - research/traditions-scholar
      - research/clinical-researcher

  - name: design
    agent: orchestrator
    invokes:
      - design/ux-architect
      - design/visual-designer

  - name: content
    agent: content/content-writer

  - name: build
    agent: build/app-developer

  - name: quality
    agent: orchestrator
    invokes:
      - quality/ethics-guardian
      - quality/accessibility-auditor

  - name: deploy
    agent: deploy/devops-specialist
```

---

## Validation Checklist

Workflows must have:

- [ ] `name`, `version`, `description`
- [ ] At least one stage
- [ ] Every stage has `name`, `description`, `agent` or `invokes`
- [ ] `quality_gates` defined
- [ ] `error_handling` for common failures
- [ ] `examples` showing usage

---

## See Also

- [Skills Reference](skills-reference.md) - All skills
- [Agents Reference](agents-reference.md) - All agents
- [Shared Resources](shared-resources.md) - Common resources
