---
name: healing-review
description: Runs a full quality review of healing content or an app across ethics, clinical accuracy, cultural sensitivity, and accessibility. Use when the user wants everything checked before shipping. For a single lens, use ethics-review, clinical-review, cultural-review, or a11y-audit.
---

# Healing Review

Comprehensive quality review for healing applications. Ethics, clinical accuracy, cultural sensitivity, accessibility.

**Trigger:** `/healing-review`  ·  **Category:** quality

## When to use

Runs a full quality review of healing content or an app across ethics, clinical accuracy, cultural sensitivity, and accessibility. Use when the user wants everything checked before shipping. For a single lens, use ethics-review, clinical-review, cultural-review, or a11y-audit.

## Agents this skill coordinates

- [`ethics-guardian`](../quality/ethics-guardian.md)
- [`clinical-reviewer`](../quality/clinical-reviewer.md)
- [`cultural-reviewer`](../quality/cultural-reviewer.md)
- [`accessibility-auditor`](../quality/accessibility-auditor.md)

**Workflow:** [`quality/workflow.yaml`](../quality/workflow.yaml)

**Outputs:** `review-report.md`

## Example usage

```bash
/healing-review ./healing-app/
/healing-review --type ethics-only ./content/
```

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
