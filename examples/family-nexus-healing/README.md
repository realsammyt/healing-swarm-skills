# Family Nexus Healing

A phased research → protocols → application project producing healing support material for a specific family facing a nexus of disarray: younger-onset progressive cognitive change in one parent, court-ordered supervised visitation, and anticipatory grief held by a mother and two young children (boy 5, girl 8).

**Spec:** [`docs/superpowers/specs/2026-04-11-family-nexus-healing-design.md`](../../docs/superpowers/specs/2026-04-11-family-nexus-healing-design.md)
**Plan(s):** [`docs/superpowers/plans/2026-04-11-family-nexus-healing-phase-*.md`](../../docs/superpowers/plans/)

---

## What this is

Supportive material to **complement** the family's professional care:

- **Phase A** — research synthesis coalescing evidence-based and traditional practices across cultures and eras
- **Phase B** — ready-to-run protocols kit derived from Phase A
- **Phase C** — private local-first web application delivering the protocols via three modes (Family · Father · Mother)

## What this is not

- Not a treatment plan. Not a diagnosis. Not a cure.
- Not a substitute for the family's clinicians, family therapist, or court-appointed visit supervisor.
- Not a general-purpose app. The flagship build is tuned to one family. Architectural seams (archetype role packs) enable future variants but no variants are built in this project.

## Ecumenical framing

Per explicit user guidance, the project draws on "best of many" traditions so that anyone reading the material can see that progressive cognitive change, forced separation, and anticipatory grief are ancient human experiences met by diverse cultures across time. The ecumenical frame is itself therapeutic: it reveals the family is not alone and not without precedent, even in a situation modern clinical vocabulary renders rare and isolating.

## Younger-onset specificity

Both parents are under 50. This shapes everything:

- Younger-onset literature is thin and socially invisible
- The mother's peers likely have no template for her situation
- The father is likely still physically capable — dignity preservation must work with, not around, a still-vital body
- The children may not have the father present in their adulthood; some practices are explicitly oriented to creating connection-capsules that can carry forward

## Inherited healing-swarm principles

This project inherits and enforces the seven healing-swarm ethics:

1. First, do no harm
2. Honor all traditions (proper attribution, no appropriation)
3. Evidence with humility ("may help," not "will cure")
4. Empower, don't control (user autonomy sacred)
5. Privacy as sanctuary (local-first, no telemetry — especially load-bearing given court involvement)
6. Accessible to all (WCAG AAA target in Father mode specifically)
7. Continuous improvement (progression logic allows revision as the family's needs change)

Plus the mandatory safety infrastructure:

- **Crisis Response** framework (RECOGNIZE-STOP-GROUND-ASSESS-RESPOND-FOLLOW-UP)
- **Contraindications Database** (12 conditions × 7 practice categories)
- **Outcome Measurement** (privacy-first validated instruments)
- **Practice Pathways** (cross-skill integration)

## Structure

```
examples/family-nexus-healing/
├── README.md                    ← you are here
├── phase-a/                     ← research synthesis
│   ├── phase-a-synthesis.md
│   ├── research/                ← six research thread outputs
│   └── quality-review/          ← ethics, clinical, cultural reviews
├── phase-b/                     ← protocols kit (built after Phase A gate)
└── phase-c/                     ← web application (built after Phase B gate)
```

Each phase has a quality gate (Ethics Guardian + Clinical Reviewer + Cultural Reviewer, plus Accessibility Auditor in Phase C). Gate failure revises backward to root cause before proceeding. No "ship and fix later" on anything that touches this family.
