---
name: spectrum-meditation
description: Produces a progressive gross/subtle/causal state meditation from Wilber's three-body model. Use when the user wants state-training or a three-body meditation, or asks to move through subtle and causal states. Do NOT use for trauma processing.
---

# Spectrum Meditation

Progressive three-body state-training meditation moving through gross, subtle, and causal realms. Based on Wilber's integral state model drawing from Vedantic three-body doctrine.

**Trigger:** `/spectrum-meditation`  ·  **Category:** integral

## When to use

Produces a progressive gross/subtle/causal state meditation from Wilber's three-body model. Use when the user wants state-training or a three-body meditation, or asks to move through subtle and causal states. Do NOT use for trauma processing.

## Agents this skill coordinates

- [`integral-researcher`](../research/integral-researcher.md)
- [`integral-guide`](../content/integral-guide.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`content/spectrum-meditation-workflow.yaml`](../content/spectrum-meditation-workflow.yaml)

**Templates:**

- [`content/templates/spectrum-meditation.md`](../content/templates/spectrum-meditation.md)

**Outputs:** `spectrum-meditation.md`, `timing-structure.json`, `evidence-brief.md`

## Example usage

```bash
/spectrum-meditation --scope foundation --duration 15
/spectrum-meditation --scope intermediate --duration 20
/spectrum-meditation --scope full_spectrum --duration 30
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
