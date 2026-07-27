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

- [`somatic-guide`](../healing-swarm/content/somatic-guide.md)
- [`traditions-scholar`](../healing-swarm/research/traditions-scholar.md)
- [`clinical-researcher`](../healing-swarm/research/clinical-researcher.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/movement-protocol.md`](../healing-swarm/content/templates/movement-protocol.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../healing-swarm/shared/crisis-response.md)
- [`shared/contraindications.md`](../healing-swarm/shared/contraindications.md)

**Outputs:** `movement-protocol.md`, `session-timing.json`

## Example usage

```bash
/somatic-practice "gentle qigong" --level beginner
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
