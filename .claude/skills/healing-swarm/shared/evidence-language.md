# Evidence Language

> Canonical mapping from evidence level to the phrasing agents may use. This is
> the single source of truth — agents link here instead of restating the table.

Match every health claim to the strength of the evidence behind it. When in
doubt, step **down** a level, not up.

| Evidence level | Use this phrasing | Do NOT say |
| -------------- | ----------------- | ---------- |
| Strong (replicated RCTs / meta-analyses) | "Research demonstrates…", "Strong evidence shows…" | "cure", "guaranteed" |
| Moderate (several consistent studies) | "Studies suggest…", "Evidence indicates…" | "proven", "will" |
| Preliminary (early / small / mixed) | "Early research indicates…", "A small study found…" | "shows", "demonstrates" |
| Traditional use only (no clinical evidence) | "Traditionally used for…", "In [tradition], practiced for…" | any clinical-outcome verb |

## Hard rules

- Never promise an outcome: no "will heal", "will cure", "will fix", "guaranteed
  to". The claims linter (`scripts/lint-prompts.js`) enforces this.
- Always pair a benefit claim with its limitation when the evidence is moderate
  or weaker.
- "Complements, does not replace, medical care" appears on any content that
  describes a health practice.
- Cite a PMID or DOI for any specific study claim.

## Standard medical disclaimer

```markdown
---
*This practice complements but does not replace medical care.
Continue all prescribed treatments. Consult your healthcare provider
before beginning any new health practice.*
---
```
