---
name: sleep-healing
description: "Builds an evening wind-down: sleep hygiene, bedtime meditation, and dream-journal prompts. Use when the user wants help winding down, sleeping better, or a bedtime practice. For dream work specifically, use dream-practice."
---

# Sleep Healing

Evening wind-down protocols, sleep hygiene, bedtime meditations, dream journaling

**Trigger:** `/sleep-healing`  ·  **Category:** sleep

## When to use

Builds an evening wind-down: sleep hygiene, bedtime meditation, and dream-journal prompts. Use when the user wants help winding down, sleeping better, or a bedtime practice. For dream work specifically, use dream-practice.

## Agents this skill coordinates

- [`sleep-healing-guide`](../healing-swarm/content/sleep-healing-guide.md)
- [`traditions-scholar`](../healing-swarm/research/traditions-scholar.md)
- [`clinical-researcher`](../healing-swarm/research/clinical-researcher.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/sleep-protocol.md`](../healing-swarm/content/templates/sleep-protocol.md)

**Outputs:** `sleep-protocol.md`, `evening-routine.md`, `dream-journal-prompts.md`

## Example usage

```bash
/sleep-healing "evening wind-down" --level beginner
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
