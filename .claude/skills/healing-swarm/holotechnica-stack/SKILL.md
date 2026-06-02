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

- [`hyperhumanism-researcher`](../research/hyperhumanism-researcher.md)
- [`holotechnica-architect`](../content/holotechnica-architect.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`content/holotechnica-workflow.yaml`](../content/holotechnica-workflow.yaml)

**Templates:**

- [`content/templates/holotechnica-recipe.md`](../content/templates/holotechnica-recipe.md)

**Outputs:** `holotechnica-recipe.md`, `ingredient-matrix.md`, `integration-journal.md`, `evidence-brief.md`

## Example usage

```bash
/holotechnica-stack "morning activation" --depth simple --duration 15
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
