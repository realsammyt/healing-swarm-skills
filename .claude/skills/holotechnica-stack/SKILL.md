---
name: holotechnica-stack
description: Designs a personalized endo-technology experience stack (breath, sound, movement, attention) toward a chosen trait, with additive safety logic. Use when the user wants to combine non-drug practices into a stack. Do NOT include any pharmacological or psychedelic 'technologies' (hard exclusion).
---

# Holotechnica Stack

Personalized endo-technology experience stacks targeting altered traits. NO pharmaco-technologies (HARD EXCLUSION).

**Trigger:** `/holotechnica-stack`  ·  **Category:** consciousness

## When to use

Designs a personalized endo-technology experience stack (breath, sound, movement, attention) toward a chosen trait, with additive safety logic. Use when the user wants to combine non-drug practices into a stack. Do NOT include any pharmacological or psychedelic 'technologies' (hard exclusion).

## Agents this skill coordinates

- [`hyperhumanism-researcher`](../healing-swarm/research/hyperhumanism-researcher.md)
- [`holotechnica-architect`](../healing-swarm/content/holotechnica-architect.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** [`content/holotechnica-workflow.yaml`](../healing-swarm/content/holotechnica-workflow.yaml)

**Templates:**

- [`content/templates/holotechnica-recipe.md`](../healing-swarm/content/templates/holotechnica-recipe.md)

**Safety context (load before generating output):**

- [`shared/contraindications.md`](../healing-swarm/shared/contraindications.md)

**Outputs:** `holotechnica-recipe.md`, `ingredient-matrix.md`, `integration-journal.md`, `evidence-brief.md`

## Example usage

```bash
/holotechnica-stack "morning activation" --depth simple --duration 15
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
