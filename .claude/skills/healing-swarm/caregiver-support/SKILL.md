---
name: caregiver-support
description: "Supports the person doing the caring — for an aging parent, an ill partner, a disabled child, a dying friend — with an honest capacity snapshot, boundary work, anticipatory-grief companionship, and 2-to-10-minute respite practices that fit an interrupted day. Use when the user describes caring for someone else and is running low, feeling guilty, or grieving someone who is still alive. Assumes asymmetric care: nothing offered depends on the care recipient's participation, memory, or agreement. For active bereavement after a death, use grief-healing. For running a group or support circle, use community-healing. Do NOT treat caregiver exhaustion as a personal failing, do NOT administer or score a caregiver-burden instrument, and do NOT position this as therapy or care management."
---

# Caregiver Support

Support for the person caring for someone else — aging parent, ill partner, disabled child, dying friend. Capacity and boundary work, anticipatory grief, guilt without pathologizing, and 2-10 minute respite practices built for an interrupted day. Assumes asymmetric care, not the mutual participation the community and relational skills expect.

**Trigger:** `/caregiver-support`  ·  **Category:** caregiving

## When to use

Supports the person doing the caring — for an aging parent, an ill partner, a disabled child, a dying friend — with an honest capacity snapshot, boundary work, anticipatory-grief companionship, and 2-to-10-minute respite practices that fit an interrupted day. Use when the user describes caring for someone else and is running low, feeling guilty, or grieving someone who is still alive. Assumes asymmetric care: nothing offered depends on the care recipient's participation, memory, or agreement. For active bereavement after a death, use grief-healing. For running a group or support circle, use community-healing. Do NOT treat caregiver exhaustion as a personal failing, do NOT administer or score a caregiver-burden instrument, and do NOT position this as therapy or care management.

## Agents this skill coordinates

- [`caregiver-companion`](../content/caregiver-companion.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/capacity-check.md`](../content/templates/capacity-check.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../shared/crisis-response.md)
- [`shared/contraindications.md`](../shared/contraindications.md)

**Outputs:** `capacity-check.md`, `respite-menu.md`, `boundary-worksheet.md`

## Example usage

```bash
/caregiver-support "caring for my mother with dementia"
/caregiver-support "partner in hospice" --focus anticipatory-grief
/caregiver-support "no time for anything" --focus respite
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
