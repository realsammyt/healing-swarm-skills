---
name: healing-research
description: Produces an evidence-grounded research brief on a healing tradition or modality, weaving together history, clinical studies, and proposed mechanisms. Use when the user asks to research a healing practice, wants the evidence behind a modality, or asks how a traditional technique might work. Do NOT use to write the practice itself (use the matching practice skill) or to verify citations in finished content (use clinical-review).
---

# Healing Research

Deep research into healing traditions and clinical evidence. Coordinates traditions scholar, clinical researcher, and mechanisms neuroscientist to produce comprehensive research briefs.

**Trigger:** `/healing-research`  ·  **Category:** research

## When to use

Produces an evidence-grounded research brief on a healing tradition or modality, weaving together history, clinical studies, and proposed mechanisms. Use when the user asks to research a healing practice, wants the evidence behind a modality, or asks how a traditional technique might work. Do NOT use to write the practice itself (use the matching practice skill) or to verify citations in finished content (use clinical-review).

## Agents this skill coordinates

- [`traditions-scholar`](../research/traditions-scholar.md)
- [`clinical-researcher`](../research/clinical-researcher.md)
- [`mechanisms-neuroscientist`](../research/mechanisms-neuroscientist.md)

**Workflow:** [`research/workflow.yaml`](../research/workflow.yaml)

**Outputs:** `research-brief.md`, `traditions-research.md`, `clinical-evidence.md`, `mechanism-bridges.md`

## Example usage

```bash
/healing-research "acupressure for hand ligament injuries"
/healing-research "visualization for chronic pain" --depth comprehensive
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
