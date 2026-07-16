---
name: healing-deploy
description: "Deploys and maintains a healing app: static hosting, monitoring, and content updates. Use when the user wants to ship, host, or update a built healing application."
---

# Healing Deploy

Deploy and maintain healing applications. Static hosting, monitoring, content updates.

**Trigger:** `/healing-deploy`  ·  **Category:** deploy

## When to use

Deploys and maintains a healing app: static hosting, monitoring, and content updates. Use when the user wants to ship, host, or update a built healing application.

## Agents this skill coordinates

- [`devops-specialist`](../deploy/devops-specialist.md)
- [`content-manager`](../deploy/content-manager.md)

**Workflow:** [`deploy/workflow.yaml`](../deploy/workflow.yaml)

## Example usage

```bash
/healing-deploy ./healing-app/ --platform netlify
/healing-deploy --update-content ./new-content/
```

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
