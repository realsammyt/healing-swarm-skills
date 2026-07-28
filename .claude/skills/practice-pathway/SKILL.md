---
name: practice-pathway
description: "Sequences existing healing-swarm skills into a multi-week practice plan, choosing a pathway archetype and honoring the minimum foundation period each practice depends on. Use when the user asks where to start, what to practice next, or wants a several-week plan rather than a single session. Risky practices (breathwork, cold exposure, transpersonal work, extended meditation) go through practice-screening first, and that clearance shapes the plan. Do NOT use to write the practice content itself: each week names the skill that delivers it. To measure whether it is worth continuing, use outcome-tracking."
---

# Practice Pathway

Sequence existing healing-swarm skills into a multi-week practice plan. Selects a pathway archetype, honors minimum foundation periods, routes risky practices through practice-screening first, and ships rest weeks, adaptation rules, and stop rules with every plan.

**Trigger:** `/practice-pathway`  ·  **Category:** orchestration

## When to use

Sequences existing healing-swarm skills into a multi-week practice plan, choosing a pathway archetype and honoring the minimum foundation period each practice depends on. Use when the user asks where to start, what to practice next, or wants a several-week plan rather than a single session. Risky practices (breathwork, cold exposure, transpersonal work, extended meditation) go through practice-screening first, and that clearance shapes the plan. Do NOT use to write the practice content itself: each week names the skill that delivers it. To measure whether it is worth continuing, use outcome-tracking.

## Agents this skill coordinates

- [`pathway-planner`](../healing-swarm/content/pathway-planner.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** [`content/practice-pathway-workflow.yaml`](../healing-swarm/content/practice-pathway-workflow.yaml)

**Templates:**

- [`content/templates/pathway-plan.md`](../healing-swarm/content/templates/pathway-plan.md)
- [`content/templates/ecology-design.md`](../healing-swarm/content/templates/ecology-design.md)
- [`content/templates/scaffold-progression.md`](../healing-swarm/content/templates/scaffold-progression.md)

**Safety context (load before generating output):**

- [`shared/practice-pathways.md`](../healing-swarm/shared/practice-pathways.md)
- [`shared/contraindications.md`](../healing-swarm/shared/contraindications.md)

**Outputs:** `pathway-plan.md`

## Example usage

```bash
/practice-pathway "I'm new, stressed, sleeping badly, 15 minutes a day"
/practice-pathway "6 weeks of daily coherent breathing done, what next?"
/practice-pathway "learn breath coherence without the app" --archetype scaffold_to_remove
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
