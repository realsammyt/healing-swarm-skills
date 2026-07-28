---
name: whm-journey
description: Builds a multi-week Wim Hof program integrating breathing, cold, and commitment. Use when the user wants a full WHM journey or a progressive multi-pillar plan. Carries the breathing and cold safety guards; screen contraindications before week one.
---

# Whm Journey

Complete multi-week Wim Hof Method training journey integrating all three pillars: breathing, cold exposure, and commitment (meditation). Produces progressive weekly plans with daily practices, safety protocols, and progress tracking.

**Trigger:** `/whm-journey`  ·  **Category:** breathwork

## When to use

Builds a multi-week Wim Hof program integrating breathing, cold, and commitment. Use when the user wants a full WHM journey or a progressive multi-pillar plan. Carries the breathing and cold safety guards; screen contraindications before week one.

## Agents this skill coordinates

- [`breathwork-coach`](../healing-swarm/content/breathwork-coach.md)
- [`cold-exposure-guide`](../healing-swarm/content/cold-exposure-guide.md)
- [`coherence-guide`](../healing-swarm/content/coherence-guide.md)
- [`traditions-scholar`](../healing-swarm/research/traditions-scholar.md)
- [`clinical-researcher`](../healing-swarm/research/clinical-researcher.md)
- [`mechanisms-neuroscientist`](../healing-swarm/research/mechanisms-neuroscientist.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** [`content/whm-journey-workflow.yaml`](../healing-swarm/content/whm-journey-workflow.yaml)

**Templates:**

- [`content/templates/breathwork-protocol.md`](../healing-swarm/content/templates/breathwork-protocol.md)
- [`content/templates/cold-exposure-protocol.md`](../healing-swarm/content/templates/cold-exposure-protocol.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../healing-swarm/shared/crisis-response.md)
- [`shared/contraindications.md`](../healing-swarm/shared/contraindications.md)

**Outputs:** `journey-overview.md`, `participant-guide.md`, `weekly-plans/`, `daily-practices/`, `progress-tracker.md`, `safety-protocols.md`

## Example usage

```bash
/whm-journey --duration 2 --level beginner
/whm-journey --duration 4 --level beginner
/whm-journey --duration 10 --level beginner
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
