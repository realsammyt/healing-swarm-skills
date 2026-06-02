---
name: ethics-review
description: Reviews healing content for medical safety, psychological safety, cultural integrity, and privacy, with veto power over unsafe outputs. Use when the user wants an ethics or safety check, or before releasing sensitive content. This gate can block release.
---

# Ethics Review

Ethics and safety review for healing content/features. Medical safety, psychological safety, cultural integrity, privacy.

**Trigger:** `/ethics-review`  ·  **Category:** quality

## When to use

Reviews healing content for medical safety, psychological safety, cultural integrity, and privacy, with veto power over unsafe outputs. Use when the user wants an ethics or safety check, or before releasing sensitive content. This gate can block release.

## Agents this skill coordinates

- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

## Example usage

```bash
/ethics-review ./healing-app/
/ethics-review "This practice will cure your condition"
```

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
