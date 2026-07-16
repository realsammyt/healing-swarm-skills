---
name: clinical-review
description: "Verifies clinical claims and citations: PMID/DOI validity, claim accuracy, and evidence-level wording. Use when the user wants existing content fact-checked. For new evidence research, use clinical-research."
---

# Clinical Review

Verify clinical claims and citations. Check PMID validity, claim accuracy, evidence representation.

**Trigger:** `/clinical-review`  ·  **Category:** quality

## When to use

Verifies clinical claims and citations: PMID/DOI validity, claim accuracy, and evidence-level wording. Use when the user wants existing content fact-checked. For new evidence research, use clinical-research.

## Agents this skill coordinates

- [`clinical-reviewer`](../quality/clinical-reviewer.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

## Example usage

```bash
/clinical-review ./content/evidence-boxes/
```

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
