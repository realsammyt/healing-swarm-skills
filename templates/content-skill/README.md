# Content Skill Template

> Template for skills that create healing content (prayers, visualizations, instructions).

---

## What This Template Includes

```
content-skill/
├── README.md               # This file
├── manifest-entry.yaml     # Add to main manifest
├── content-creator.md      # Primary content agent
├── content-editor.md       # Review and refinement agent
└── workflow.yaml           # Content workflow
```

---

## When to Use This Template

Use this template when your skill needs to:

- Create prayers, invocations, or spiritual content
- Write guided visualizations or meditations
- Develop practice instructions
- Generate journal prompts
- Produce evidence boxes or educational content

---

## Key Features

### Ethics-First Content

All content includes:
- Appropriate disclaimers
- Grounding techniques
- Exit ramps for intense content

### Cultural Attribution

Built-in requirements for:
- Naming traditions specifically
- Citing sources
- Noting adaptations

### Quality Review

Automatic review for:
- Voice consistency
- Accessibility
- Safety compliance

---

## How to Use

### Step 1: Copy the Template

```bash
mkdir -p .claude/skills/healing-swarm/my-content-skill
cp templates/content-skill/*.md .claude/skills/healing-swarm/my-content-skill/
cp templates/content-skill/*.yaml .claude/skills/healing-swarm/my-content-skill/
```

### Step 2: Customize

1. Update content types for your domain
2. Define specific templates needed
3. Add domain-specific quality criteria
4. Update voice guidelines if needed

### Step 3: Integrate

1. Add manifest entry
2. Validate: `npm run validate`
3. Test in Claude Code

---

*"Content carries the healing. Craft it with care."*
