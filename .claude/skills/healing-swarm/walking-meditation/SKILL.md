---
name: walking-meditation
description: Builds a walking-meditation practice for people who can't sit comfortably. Use when the user asks for kinhin, mindful walking, or movement-based meditation. Adapt for indoor, outdoor, and limited-mobility settings.
---

# Walking Meditation

Mindful movement for those who cannot sit. Walking meditation protocols.

**Trigger:** `/walking-meditation`  ·  **Category:** movement

## When to use

Builds a walking-meditation practice for people who can't sit comfortably. Use when the user asks for kinhin, mindful walking, or movement-based meditation. Adapt for indoor, outdoor, and limited-mobility settings.

## Agents this skill coordinates

- [`somatic-guide`](../content/somatic-guide.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

## Example usage

```bash
/walking-meditation "indoor kinhin" --duration 15
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
