---
name: grief-healing
description: "Builds grief-informed practices for loss (bereavement, health changes, transitions) with strong psychological safety and crisis resources. Sensitive: use only when the user explicitly asks for a grief practice. Do NOT auto-launch from mentions of loss in passing or general sadness; wait for an explicit request. Go gently, keep crisis resources visible, and do NOT rush the process or pathologize normal grief."
---

# Grief Healing

Grief-informed healing practices for processing loss (health, bereavement, transitions). Enhanced psychological safety.

**Trigger:** `/grief-healing`  ·  **Category:** grief

## When to use

Builds grief-informed practices for loss (bereavement, health changes, transitions) with strong psychological safety and crisis resources. Sensitive: use only when the user explicitly asks for a grief practice. Do NOT auto-launch from mentions of loss in passing or general sadness; wait for an explicit request. Go gently, keep crisis resources visible, and do NOT rush the process or pathologize normal grief.

## Agents this skill coordinates

- [`grief-guide`](../content/grief-guide.md)
- [`traditions-scholar`](../research/traditions-scholar.md)
- [`clinical-researcher`](../research/clinical-researcher.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/grief-practice.md`](../content/templates/grief-practice.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../shared/crisis-response.md)
- [`shared/contraindications.md`](../shared/contraindications.md)

**Outputs:** `grief-practice.md`, `grounding-guide.md`, `crisis-resources.md`

## Example usage

```bash
/grief-healing "acknowledging loss" --level foundation
```

## Safety

> This is a **sensitive** skill. Do not auto-launch it from loose conversational cues; wait for an explicit request, offer it gently, and honor the guards in the description above.

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
