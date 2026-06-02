---
name: perspective-practice
description: A quadrant perspective-taking exercise for seeing a situation from all four AQAL viewpoints. Use when the user wants to understand a conflict or decision from multiple angles, or to build empathy. Do NOT use for clinical assessment.
---

# Perspective Practice

Quadrant perspective-taking exercise for viewing life situations from all four AQAL perspectives. Builds cognitive flexibility and empathic understanding.

**Trigger:** `/perspective-practice`  ·  **Category:** integral

## When to use

A quadrant perspective-taking exercise for seeing a situation from all four AQAL viewpoints. Use when the user wants to understand a conflict or decision from multiple angles, or to build empathy. Do NOT use for clinical assessment.

## Agents this skill coordinates

- [`integral-researcher`](../research/integral-researcher.md)
- [`integral-guide`](../content/integral-guide.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`content/perspective-workflow.yaml`](../content/perspective-workflow.yaml)

**Outputs:** `perspective-practice.md`, `synthesis-prompts.md`, `evidence-brief.md`

## Example usage

```bash
/perspective-practice "conflict with my partner about finances"
/perspective-practice "team restructuring" --complexity complex
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
