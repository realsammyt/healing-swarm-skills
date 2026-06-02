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

- [`breathwork-coach`](../content/breathwork-coach.md)
- [`cold-exposure-guide`](../content/cold-exposure-guide.md)
- [`coherence-guide`](../content/coherence-guide.md)
- [`traditions-scholar`](../research/traditions-scholar.md)
- [`clinical-researcher`](../research/clinical-researcher.md)
- [`mechanisms-neuroscientist`](../research/mechanisms-neuroscientist.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`content/whm-journey-workflow.yaml`](../content/whm-journey-workflow.yaml)

**Templates:**

- [`content/templates/breathwork-protocol.md`](../content/templates/breathwork-protocol.md)
- [`content/templates/cold-exposure-protocol.md`](../content/templates/cold-exposure-protocol.md)

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
