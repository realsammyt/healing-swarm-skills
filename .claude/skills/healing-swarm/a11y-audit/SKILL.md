---
name: a11y-audit
description: Audits a healing app for WCAG compliance plus healing-specific accessibility (one-handed use, calm defaults, crisis access). Use when the user wants an accessibility check on an interface or component.
---

# A11y Audit

Accessibility audit for healing applications. WCAG compliance plus healing-specific accessibility.

**Trigger:** `/a11y-audit`  ·  **Category:** quality

## When to use

Audits a healing app for WCAG compliance plus healing-specific accessibility (one-handed use, calm defaults, crisis access). Use when the user wants an accessibility check on an interface or component.

## Agents this skill coordinates

- [`accessibility-auditor`](../quality/accessibility-auditor.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

## Example usage

```bash
/a11y-audit ./healing-app/
/a11y-audit --healing-specific ./components/
```

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
