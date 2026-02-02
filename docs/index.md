---
layout: page
title: Documentation
description: Full technical documentation for the Healing Swarm Skills framework.
permalink: /docs/
---

Complete documentation for building, extending, and contributing to the healing swarm.

---

## Getting Started

| Document | Description |
|----------|-------------|
| [Setup Guide](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/SETUP.md) | Installation and first steps |
| [Creating Skills](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/guides/creating-skills.md) | Build your own skills |
| [Testing Skills](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/guides/testing-skills.md) | Validate before submitting |

---

## API Reference

| Document | Description |
|----------|-------------|
| [Skills Reference](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/api/skills-reference.md) | All skills with triggers and options |
| [Agents Reference](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/api/agents-reference.md) | All agents with responsibilities |
| [Shared Resources](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/api/shared-resources.md) | Ethics, terminology, design tokens |
| [Workflows Reference](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/api/workflows-reference.md) | Workflow patterns |

---

## Architecture

| Document | Description |
|----------|-------------|
| [Architecture Overview](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/architecture/overview.md) | System design |
| [Quality Gates](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/architecture/quality-gates.md) | Quality checkpoints |
| [Ethics Framework](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/architecture/ethics-framework.md) | Ethics deep dive |

---

## Decision Records

| ADR | Topic |
|-----|-------|
| [ADR-001](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/adr/001-ethics-first-architecture.md) | Ethics-First Architecture |
| [ADR-002](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/adr/002-local-first-data.md) | Local-First Data Storage |
| [ADR-003](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/adr/003-multi-agent-quality.md) | Multi-Agent Quality Review |

---

## Templates

Ready-to-use templates for common skill types:

| Template | Use Case |
|----------|----------|
| [Minimal Skill](https://github.com/realsammyt/healing-swarm-skills/tree/master/templates/minimal-skill) | Simplest possible skill |
| [Research Skill](https://github.com/realsammyt/healing-swarm-skills/tree/master/templates/research-skill) | Research-focused template |
| [Content Skill](https://github.com/realsammyt/healing-swarm-skills/tree/master/templates/content-skill) | Content creation template |
| [Quality Skill](https://github.com/realsammyt/healing-swarm-skills/tree/master/templates/quality-skill) | Review/audit template |

---

## Examples

| Example | Description |
|---------|-------------|
| [Simple Meditation](https://github.com/realsammyt/healing-swarm-skills/tree/master/examples/simple-meditation) | Complete skill lifecycle walkthrough |

---

## Quick Commands

```bash
# Create a new skill
npm run create-skill

# Validate all skills
npm run validate

# Check ethics references
npm run check:ethics

# Lint agent prompts
npm run lint:prompts

# Run tests
npm test
```

---

## Contributing

See the [Contributing Guide](/contribute/) for how to contribute to the documentation or codebase.
