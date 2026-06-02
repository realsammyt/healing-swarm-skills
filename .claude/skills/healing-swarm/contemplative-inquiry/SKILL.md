---
name: contemplative-inquiry
description: Guides self-inquiry drawn from Zen koan, Socratic, and Ignatian Examen methods. Use when the user wants reflective questioning on a theme like 'what is healing' or a values question. Do NOT use for clinical assessment.
---

# Contemplative Inquiry

Guided self-inquiry from multiple traditions (Zen koan-inspired, Socratic, Ignatian Examen)

**Trigger:** `/contemplative-inquiry`  ·  **Category:** perception

## When to use

Guides self-inquiry drawn from Zen koan, Socratic, and Ignatian Examen methods. Use when the user wants reflective questioning on a theme like 'what is healing' or a values question. Do NOT use for clinical assessment.

## Agents this skill coordinates

- [`contemplative-guide`](../content/contemplative-guide.md)
- [`traditions-scholar`](../research/traditions-scholar.md)
- [`clinical-researcher`](../research/clinical-researcher.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/contemplative-protocol.md`](../content/templates/contemplative-protocol.md)

**Outputs:** `inquiry-protocol.md`, `reflection-prompts.md`

## Example usage

```bash
/contemplative-inquiry "what is healing" --level beginner
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
