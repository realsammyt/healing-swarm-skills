---
name: nature-healing
description: Builds a structured nature-connection practice (forest bathing, earthing, sky gazing, garden therapy) with seasonal options. Use when the user wants to practice outdoors or connect with nature for healing.
---

# Nature Healing

Structured nature connection (forest bathing, earthing, sky gazing, garden therapy)

**Trigger:** `/nature-healing`  ·  **Category:** nature

## When to use

Builds a structured nature-connection practice (forest bathing, earthing, sky gazing, garden therapy) with seasonal options. Use when the user wants to practice outdoors or connect with nature for healing.

## Agents this skill coordinates

- [`nature-guide`](../healing-swarm/content/nature-guide.md)
- [`traditions-scholar`](../healing-swarm/research/traditions-scholar.md)
- [`clinical-researcher`](../healing-swarm/research/clinical-researcher.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/nature-protocol.md`](../healing-swarm/content/templates/nature-protocol.md)

**Outputs:** `nature-protocol.md`, `seasonal-guide.md`

## Example usage

```bash
/nature-healing "forest bathing" --level beginner --setting park
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
