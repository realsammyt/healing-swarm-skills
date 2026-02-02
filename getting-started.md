---
layout: page
title: Getting Started
description: Two paths into the healing swarm - explore what's possible or start building.
permalink: /getting-started/
---

Choose your path:

- **[I Want to Explore](#i-want-to-explore)** --- Learn what healing applications look like
- **[I Want to Build](#i-want-to-build)** --- Set up your environment and create skills

---

## I Want to Explore

### What Healing Applications Look Like

The Healing Swarm creates applications that combine:

**Traditional Wisdom**
- Practices documented across cultures and centuries
- Proper attribution to source traditions
- Context preserved, not stripped

**Clinical Evidence**
- Research summaries with appropriate confidence levels
- "May help" language, never "will cure"
- Limitations acknowledged

**Ethical Guardrails**
- Medical disclaimers where needed
- Psychological safety (grounding techniques, exit ramps)
- Accessibility for all users

### Example: 5-Minute Breathing Meditation

Here's what the swarm produces---a complete meditation script:

```
# 5-Minute Calm Breath

Type: Guided Breathing Meditation
Duration: 5 minutes
Tradition: Adapted from yogic pranayama principles
Evidence Level: Moderate

---

## Before You Begin

Find a comfortable position. This practice is gentle
and you can stop at any time.

Note: If you have respiratory conditions, consult
your healthcare provider before practicing.

---

## The Practice

### Settling In (30 seconds)

Let your eyes close gently. Take a moment to arrive.
There's nothing to do right now except be here.

### Natural Breath (1 minute)

Simply notice your natural breath. You don't need
to change anything. Just observe.

### Extending the Exhale (2.5 minutes)

Inhale through your nose for a count of 4.
Hold gently for a count of 7.
Exhale slowly through your mouth for a count of 8.

Repeat 3-4 times.

### Returning (1 minute)

Let your breath return to its natural rhythm.
When ready, let your eyes open gently.

---

## Background

This practice adapts extended exhale principles from
yogic pranayama (Yoga Sutras, c. 400 CE). Research
suggests slow breathing activates the parasympathetic
nervous system, promoting relaxation.

---

## Disclaimer

This practice is for informational purposes only and
does not replace professional medical or psychological
care.
```

Notice the elements:
- **Medical disclaimer** at start and end
- **Permission to stop** built in
- **Tradition named** with era
- **Evidence language** appropriate to confidence level
- **Grounding technique** (lightheadedness guidance)

[See the full example with research and quality review](/examples/)

---

## I Want to Build

### Prerequisites

| Requirement | Minimum Version | Check Command |
|-------------|-----------------|---------------|
| Node.js | 18.0.0+ | `node --version` |
| Git | 2.30.0+ | `git --version` |
| Claude Code | Latest | `claude --version` |

### Installation

**Step 1: Clone the Repository**

```bash
git clone https://github.com/realsammyt/healing-swarm-skills.git
cd healing-swarm-skills
```

**Step 2: Install Dependencies**

```bash
npm install
```

**Step 3: Validate Installation**

```bash
npm run validate
```

You should see:
```
Validating skill structure...
Checking ethics guardrails...
Verifying workflows...
All 44 skill files validated successfully
```

**Step 4: Copy Skills to Claude Code**

macOS/Linux:
```bash
cp -r .claude/skills/healing-swarm ~/.claude/skills/
```

Windows (PowerShell):
```powershell
Copy-Item -Recurse .claude\skills\healing-swarm $env:USERPROFILE\.claude\skills\
```

**Step 5: Verify Skills**

Open Claude Code and type `/`. You should see:
- `/healing-research`
- `/healing-design`
- `/healing-content`
- `/healing-build`
- `/healing-review`
- `/healing-deploy`
- `/healing-swarm`

### Your First Skill

Try the research skill:

```bash
claude> /healing-research "breathwork for stress relief"
```

Watch how it:
1. Parses your query
2. Coordinates multiple research agents
3. Produces a comprehensive research brief
4. Applies ethics review

### Create Your Own Skill

```bash
npm run create-skill
```

The interactive CLI walks you through:
- Skill name and trigger
- Which template to use
- Agent configuration
- Workflow setup

### Validate Your Changes

Before committing:

```bash
npm run validate
npm run check:ethics
```

---

## Next Steps

### For Explorers

- [Browse all 7 skills](/skills/)
- [See the Simple Meditation example](/examples/)
- [Learn about the ethics framework](/ethics/)

### For Builders

- [Read the full setup guide](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/SETUP.md)
- [Creating Skills Guide](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/guides/creating-skills.md)
- [Architecture Overview](/architecture/)
- [Contributing Guide](/contribute/)

---

## Getting Help

- **Questions**: [Open a Discussion](https://github.com/realsammyt/healing-swarm-skills/discussions)
- **Bugs**: [Open an Issue](https://github.com/realsammyt/healing-swarm-skills/issues)
- **Security**: Email maintainers directly
- **Ethics Questions**: Contact the ethics-guardian team

---

*"The setup is the first step on the healing path. Welcome to the swarm."*
