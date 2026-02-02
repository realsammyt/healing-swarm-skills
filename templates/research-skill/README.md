# Research Skill Template

> Template for skills that research healing traditions and clinical evidence.

---

## What This Template Includes

```
research-skill/
├── README.md               # This file
├── manifest-entry.yaml     # Add to main manifest
├── research-lead.md        # Primary research agent
├── evidence-reviewer.md    # Evidence quality reviewer
└── workflow.yaml           # Research workflow
```

---

## When to Use This Template

Use this template when your skill needs to:

- Research traditional healing practices
- Review clinical evidence
- Synthesize multiple sources
- Produce research briefs or reports

---

## Key Features

### Multi-Source Research

The template includes stages for:
- Traditional/historical research
- Clinical evidence review
- Synthesis and integration

### Evidence-Based Output

All outputs include:
- Clear evidence levels
- Source citations
- Limitations acknowledged

### Quality Review

Built-in quality gates for:
- Citation accuracy
- Evidence level appropriateness
- Cultural attribution

---

## How to Use

### Step 1: Copy the Template

```bash
mkdir -p .claude/skills/healing-swarm/my-research-skill
cp templates/research-skill/*.md .claude/skills/healing-swarm/my-research-skill/
cp templates/research-skill/*.yaml .claude/skills/healing-swarm/my-research-skill/
```

### Step 2: Customize

1. Rename agents to match your focus area
2. Update research methodology for your domain
3. Define specific output formats
4. Add domain-specific quality gates

### Step 3: Integrate

1. Add manifest entry
2. Validate: `npm run validate`
3. Test in Claude Code

---

## Customization Points

| Component | Customize For |
|-----------|---------------|
| Research domains | Your specific tradition/topic areas |
| Evidence criteria | Your required study types |
| Output sections | Your deliverable format |
| Quality gates | Your accuracy requirements |

---

*"Research is the foundation. Build it carefully."*
