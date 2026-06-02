---
name: pni-mapping
description: Maps one specific practice to the psychoneuroimmune pathways it may act on. Use when the user names a single practice and wants its immune or neuroendocrine pathway picture. Do NOT use for a broad PNI literature review (use pni-research).
---

# Pni Mapping

Map specific traditional practices to their PNI pathways

**Trigger:** `/pni-mapping`  ·  **Category:** research

## When to use

Maps one specific practice to the psychoneuroimmune pathways it may act on. Use when the user names a single practice and wants its immune or neuroendocrine pathway picture. Do NOT use for a broad PNI literature review (use pni-research).

## Agents this skill coordinates

- [`pni-researcher`](../research/pni-researcher.md)
- [`traditions-scholar`](../research/traditions-scholar.md)
- [`mechanisms-neuroscientist`](../research/mechanisms-neuroscientist.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

## Example usage

```bash
/pni-mapping "breathwork" --to immune-pathways
```

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
