---
name: integral-psychograph
description: A contemplative self-reflection across developmental lines (cognitive, moral, interpersonal). Use when the user wants to reflect on their own development across several lines. Do NOT present it as a clinical or diagnostic assessment.
---

# Integral Psychograph

Self-reflection tool for exploring multiple developmental lines. NOT a clinical assessment — a contemplative self-inquiry exercise. Uses established developmental models (Piaget, Cook-Greuter, Kohlberg).

**Trigger:** `/integral-psychograph`  ·  **Category:** integral

## When to use

A contemplative self-reflection across developmental lines (cognitive, moral, interpersonal). Use when the user wants to reflect on their own development across several lines. Do NOT present it as a clinical or diagnostic assessment.

## Agents this skill coordinates

- [`integral-researcher`](../research/integral-researcher.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`research/integral-research-workflow.yaml`](../research/integral-research-workflow.yaml)

**Outputs:** `psychograph-reflection.md`, `evidence-brief.md`

## Example usage

```bash
/integral-psychograph --lines cognitive,moral,interpersonal
/integral-psychograph --depth deep
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
