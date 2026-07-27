---
name: water-healing
description: Builds therapeutic water practices (contrast showers, Kneipp method, ritual bathing) with thermal-safety checks. Use when the user wants hydrotherapy, contrast therapy, or bathing practices. Screen for cardiovascular conditions and warn on extreme temperatures.
---

# Water Healing

Therapeutic water practices (contrast therapy, ritual bathing education, thermal protocols)

**Trigger:** `/water-healing`  ·  **Category:** water

## When to use

Builds therapeutic water practices (contrast showers, Kneipp method, ritual bathing) with thermal-safety checks. Use when the user wants hydrotherapy, contrast therapy, or bathing practices. Screen for cardiovascular conditions and warn on extreme temperatures.

## Agents this skill coordinates

- [`water-guide`](../healing-swarm/content/water-guide.md)
- [`traditions-scholar`](../healing-swarm/research/traditions-scholar.md)
- [`clinical-researcher`](../healing-swarm/research/clinical-researcher.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/water-protocol.md`](../healing-swarm/content/templates/water-protocol.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../healing-swarm/shared/crisis-response.md)
- [`shared/contraindications.md`](../healing-swarm/shared/contraindications.md)

**Outputs:** `water-protocol.md`, `safety-checklist.md`

## Example usage

```bash
/water-healing "contrast shower" --level beginner
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
