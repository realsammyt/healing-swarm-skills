---
name: hyperhumanism-inquiry
description: Guides a four-phase philosophical inquiry (inventory, audit, reclamation, practice) on technology and innate human capacity, from Smith's hyperhumanism. Use when the user wants to examine their relationship with technology or reclaim an outsourced capacity.
license: CC-BY-NC-SA-4.0
---

# Hyperhumanism Inquiry

Guided philosophical inquiry on consciousness, technology, and innate human capacities. Four phases: inventory, audit, reclamation, practice design.

## When to use

Guides a four-phase philosophical inquiry (inventory, audit, reclamation, practice) on technology and innate human capacity, from Smith's hyperhumanism. Use when the user wants to examine their relationship with technology or reclaim an outsourced capacity.

## Safety core (read this before anything else)

These rules apply even if you load nothing else from this skill.

**Crisis comes first.** If the person mentions suicidal thoughts, self-harm, wanting to die, or a medical emergency, stop the practice and give crisis resources before anything else:

- 988 Suicide & Crisis Lifeline: call or text **988** (US)
- Crisis Text Line: text HOME to **741741** (US)
- Medical emergency: call the local emergency number (911 in the US).

These are US numbers. Give the person's local equivalent if you know their region; otherwise say they're US defaults. Never treat suicidal thoughts as only a spiritual crisis.

Watch for indirect signs too: giving possessions away, goodbye letters, "tying up loose ends", feeling like a burden ("everyone would be better off"), wanting not to come back from a practice, or a soul "ready to leave this body". When you see one, don't answer the request yet. Ask plainly: "Are you thinking about ending your life?" Then give the numbers, one grounding step, ask whether they're safe right now, and invite them to keep talking. For self-harm, also suggest getting a wound checked if it's deep, bleeding, or looks infected.

**If a practice goes wrong:** stop, ground (feet on the floor, eyes open, name five things you can see), then assess. Loss of consciousness, chest pain, or inability to reorient means emergency care now. Never say "push through." Never frame stopping as failure.

**Screen before any practice.** Ask about medical conditions, medications, pregnancy, surgery in the last 6 weeks, heart or blood pressure problems, breathing conditions, and seizures. Before intensive or transpersonal practices also ask about mental health diagnoses, dissociation, trauma, and psychosis history. If a contraindication shows up, offer a gentler alternative or recommend talking to a clinician first. For an absolute contraindication, don't write the practice at all: no "modified" version and no plan "for once your doctor approves". Name the reason, offer the alternative now, and suggest the relevant clinician. Common absolutes: Wim Hof-style breathwork with pregnancy, epilepsy or heart disease; cold immersion with heart disease or pregnancy; transpersonal work with a psychosis history. With epilepsy, also drop binaural beats and flashing or strobe light. Breath-holding, hyperventilation and deep-trance practices are never done in or near water (bath, pool, open water) or while driving: fainting there can kill.

**Never:** diagnose; tell anyone to stop or change prescribed medication; claim a practice cures a disease or replaces treatment; promise outcomes or timelines; blame or shame someone for not improving; use fear to motivate; invent or guess a citation, PMID or DOI (say what the evidence level actually is, and that practices complement medical care rather than replace it).

Full protocols: [`ethics-guardrails.md`](references/shared/ethics-guardrails.md).

## How to run

Follow the phases in [`hyperhumanism-workflow.yaml`](references/content/hyperhumanism-workflow.yaml). Run each phase inline, one after another. Each phase writes its result to a file (for example `brief.md`, then `design.md`) and the next phase reads it, so a run can be resumed. If your agent supports subagents, you may hand a phase to one; the files stay the handoff.

Roles (open the brief for the role you are playing):

- [`hyperhumanism-researcher`](references/research/hyperhumanism-researcher.md)
- [`umwelt-facilitator`](references/content/umwelt-facilitator.md)
- [`content-writer`](references/content/content-writer.md)
- [`ethics-guardian`](references/quality/ethics-guardian.md)

**Templates:** [`capacity-inventory.md`](references/content/templates/capacity-inventory.md), [`technology-landscape.md`](references/content/templates/technology-landscape.md), [`micro-practice-design.md`](references/content/templates/micro-practice-design.md), [`quantum-relationship.md`](references/content/templates/quantum-relationship.md)

**Outputs** (write to `./healing-output/`): `inquiry-guide.md`, `capacity-inventory.md`, `micro-practice-design.md`

Before releasing output, review it against the safety core above and [`ethics-guardrails.md`](references/shared/ethics-guardrails.md). Block anything that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
