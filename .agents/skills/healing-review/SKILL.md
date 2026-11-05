---
name: healing-review
description: Runs a full quality review of healing content or an app across ethics, clinical accuracy, cultural sensitivity, and accessibility. Use when the user wants everything checked before shipping. For a single lens, use ethics-review, clinical-review, cultural-review, or a11y-audit.
license: CC-BY-NC-SA-4.0
---

# Healing Review

Comprehensive quality review for healing applications. Ethics, clinical accuracy, cultural sensitivity, accessibility.

## When to use

Runs a full quality review of healing content or an app across ethics, clinical accuracy, cultural sensitivity, and accessibility. Use when the user wants everything checked before shipping. For a single lens, use ethics-review, clinical-review, cultural-review, or a11y-audit.

## How to run

Follow the phases in [`workflow.yaml`](references/quality/workflow.yaml). Run each phase inline, one after another. Each phase writes its result to a file (for example `brief.md`, then `design.md`) and the next phase reads it, so a run can be resumed. If your agent supports subagents, you may hand a phase to one; the files stay the handoff.

Roles (open the brief for the role you are playing):

- [`ethics-guardian`](references/quality/ethics-guardian.md)
- [`clinical-reviewer`](references/quality/clinical-reviewer.md)
- [`cultural-reviewer`](references/quality/cultural-reviewer.md)
- [`accessibility-auditor`](references/quality/accessibility-auditor.md)
- [`trauma-informed-reviewer`](references/quality/trauma-informed-reviewer.md)

**Outputs** (write to `./healing-output/`): `review-report.md`

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
