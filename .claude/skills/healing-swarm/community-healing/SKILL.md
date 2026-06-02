---
name: community-healing
description: Designs group healing-circle protocols and facilitation guides with a consent framework. Use when the user is running a healing circle, talking circle, or group practice. For two-person practices, use relational-practice.
---

# Community Healing

Group healing circle protocols, shared practice frameworks, facilitation guides

**Trigger:** `/community-healing`  ·  **Category:** community

## When to use

Designs group healing-circle protocols and facilitation guides with a consent framework. Use when the user is running a healing circle, talking circle, or group practice. For two-person practices, use relational-practice.

## Agents this skill coordinates

- [`community-facilitator`](../content/community-facilitator.md)
- [`traditions-scholar`](../research/traditions-scholar.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/community-protocol.md`](../content/templates/community-protocol.md)

**Outputs:** `community-protocol.md`, `facilitator-guide.md`, `consent-framework.md`

## Example usage

```bash
/community-healing "healing circle" --group_size 8
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
