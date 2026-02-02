# Minimal Skill Template

> The simplest possible healing swarm skill: one agent, one workflow.

---

## What This Template Includes

```
minimal-skill/
├── README.md           # This file
├── manifest-entry.yaml # Add to main manifest
├── agent.md            # Single agent prompt
└── workflow.yaml       # Simple workflow
```

---

## How to Use This Template

### Step 1: Copy the Template

```bash
# Create your skill directory
mkdir -p .claude/skills/healing-swarm/my-skill

# Copy template files
cp templates/minimal-skill/agent.md .claude/skills/healing-swarm/my-skill/
cp templates/minimal-skill/workflow.yaml .claude/skills/healing-swarm/my-skill/
```

### Step 2: Customize the Files

1. **Rename `agent.md`** to match your skill (e.g., `breathwork-guide.md`)

2. **Edit the agent prompt**:
   - Replace all `{{PLACEHOLDERS}}` with your content
   - Fill in Identity, Responsibilities, Methodology, Outputs
   - Keep the Loaded Context section

3. **Edit the workflow**:
   - Update name and description
   - Adjust stages as needed
   - Define quality gates
   - Add error handling

### Step 3: Add to Manifest

Copy the contents of `manifest-entry.yaml` and add to the main manifest:

```bash
# Open main manifest
code .claude/skills/healing-swarm/manifest.yaml

# Add your skill entry under 'skills:'
```

### Step 4: Validate

```bash
npm run validate
```

### Step 5: Test

```bash
cp -r .claude/skills/healing-swarm ~/.claude/skills/
claude> /your-skill-trigger "test query"
```

---

## When to Use This Template

Use the minimal template when:

- Building a simple, focused skill
- Learning how skills work
- Prototyping before adding complexity
- The task needs only one specialized agent

---

## Growing Beyond Minimal

When your skill needs more:

| Need | Solution |
|------|----------|
| Multiple agents | Add more .md files, update workflow |
| Research integration | Use `research-skill` template instead |
| Content creation | Use `content-skill` template instead |
| Quality review | Add quality agent invocations |

---

*"Start small. Validate often. Grow as needed."*
