---
name: whm-cold-exposure
description: Builds a graduated cold-exposure plan, from cold-shower finishes to immersion, with safety review. Use when the user asks for cold exposure, cold showers, or ice-bath training. Screen for cardiovascular conditions and never recommend unsupervised open-water immersion.
---

# Whm Cold Exposure

Progressive cold exposure protocols as part of the Wim Hof Method. Produces safe, graduated cold training plans from cold shower finishes through full cold immersion. Safety review is CRITICAL for all outputs.

**Trigger:** `/whm-cold-exposure`  ·  **Category:** breathwork

## When to use

Builds a graduated cold-exposure plan, from cold-shower finishes to immersion, with safety review. Use when the user asks for cold exposure, cold showers, or ice-bath training. Screen for cardiovascular conditions and never recommend unsupervised open-water immersion.

## Agents this skill coordinates

- [`cold-exposure-guide`](../content/cold-exposure-guide.md)
- [`clinical-researcher`](../research/clinical-researcher.md)
- [`traditions-scholar`](../research/traditions-scholar.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`content/breathwork-workflow.yaml`](../content/breathwork-workflow.yaml)

**Templates:**

- [`content/templates/cold-exposure-protocol.md`](../content/templates/cold-exposure-protocol.md)

**Outputs:** `cold-exposure-protocol.md`, `weekly-progression.md`, `environment-guide.md`, `safety-checklist.md`

## Example usage

```bash
/whm-cold-exposure "week 1 cold shower" --level 1
/whm-cold-exposure "cold immersion introduction" --level 4
/whm-cold-exposure "winter training" --season cold
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
