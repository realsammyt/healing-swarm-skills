---
name: somatic-practice
description: Builds a gentle movement protocol (qigong, tai chi, yoga, walking meditation) with pacing and cautions. Use when the user wants slow, mindful, or gentle movement. Screen for injury and mobility limits. For walking specifically, walking-meditation is more focused.
---

# Somatic Practice

Guided gentle movement protocols (qigong, tai chi, yoga, walking meditation)

**Trigger:** `/somatic-practice`  ·  **Category:** movement

## When to use

Builds a gentle movement protocol (qigong, tai chi, yoga, walking meditation) with pacing and cautions. Use when the user wants slow, mindful, or gentle movement. Screen for injury and mobility limits. For walking specifically, walking-meditation is more focused.

## Agents this skill coordinates

- [`somatic-guide`](../content/somatic-guide.md)
- [`traditions-scholar`](../research/traditions-scholar.md)
- [`clinical-researcher`](../research/clinical-researcher.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/movement-protocol.md`](../content/templates/movement-protocol.md)

**Outputs:** `movement-protocol.md`, `session-timing.json`

## Example usage

```bash
/somatic-practice "gentle qigong" --level beginner
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
