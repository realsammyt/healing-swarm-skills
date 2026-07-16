---
name: hyperhumanism-inquiry
description: Guides a four-phase philosophical inquiry (inventory, audit, reclamation, practice) on technology and innate human capacity, from Smith's hyperhumanism. Use when the user wants to examine their relationship with technology or reclaim an outsourced capacity.
---

# Hyperhumanism Inquiry

Guided philosophical inquiry on consciousness, technology, and innate human capacities. Four phases: inventory, audit, reclamation, practice design.

**Trigger:** `/hyperhumanism-inquiry`  ·  **Category:** consciousness

## When to use

Guides a four-phase philosophical inquiry (inventory, audit, reclamation, practice) on technology and innate human capacity, from Smith's hyperhumanism. Use when the user wants to examine their relationship with technology or reclaim an outsourced capacity.

## Agents this skill coordinates

- [`hyperhumanism-researcher`](../research/hyperhumanism-researcher.md)
- [`umwelt-facilitator`](../content/umwelt-facilitator.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`content/hyperhumanism-workflow.yaml`](../content/hyperhumanism-workflow.yaml)

**Templates:**

- [`content/templates/capacity-inventory.md`](../content/templates/capacity-inventory.md)
- [`content/templates/technology-landscape.md`](../content/templates/technology-landscape.md)
- [`content/templates/micro-practice-design.md`](../content/templates/micro-practice-design.md)

**Outputs:** `inquiry-guide.md`, `capacity-inventory.md`, `micro-practice-design.md`

## Example usage

```bash
/hyperhumanism-inquiry "my relationship with technology"
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
