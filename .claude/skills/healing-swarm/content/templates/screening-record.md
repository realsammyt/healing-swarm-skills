# Screening Record Template

> Template for the screening-record artifact: what was screened, which tiers
> ran, what surfaced, the verdict per practice family, the modifications
> attached, and the alternatives offered. Produced by the `practice-screening`
> skill before any practice skill generates a protocol. The record belongs to
> the person screened — it is theirs, it stays local, and it exists to make
> their next screening shorter and their next practice safer.

---

## Structure

```markdown
# Practice Screening Record

**Date:** [YYYY-MM-DD]
**Requested practice:** [Skill name or practice described in the person's words]
**Screened as:** [Practice family from shared/contraindications.md]
**Tiers run:** [1 / 1 + 2 / 1 + 2 + 3]
**Verdict:** [PROCEED / PROCEED WITH MODIFICATIONS / NOT RECOMMENDED]

> **This record is yours.** It is stored on your device, it is not sent
> anywhere, and nobody else holds a copy. It is not a medical record and it is
> not a diagnosis — it is a note of what was asked, what you shared, and what
> was recommended on this date. You can delete it at any time.

---

## What Was Screened

| Item | Detail |
| ---- | ------ |
| Practice requested | [Name] |
| Practice family | [Breathwork / Cold exposure / Intensive meditation / Transpersonal / Paired / Movement / Sound / Deautomatization / Umwelt / Stack] |
| Why this family | [One line: which contraindication table applies and why] |
| Components screened | [For stacks: each ingredient listed separately] |

---

## Tiers Completed

| Tier | Status | Notes |
| ---- | ------ | ----- |
| Tier 1 — universal | [Complete / partial / declined] | [Any question left unanswered] |
| Tier 2 — mental health | [Complete / partial / declined / not required] | [Why required, or why not] |
| Tier 3 — practice-specific | [Complete / partial / declined / not required] | [Which question set was used] |

*Unanswered questions are treated as unknown, and unknown resolves toward the
gentler practice. Declining any question is always allowed.*

---

## What Surfaced

| What was shared | Practice family affected | Severity | Source |
| --------------- | ------------------------ | -------- | ------ |
| [In the person's own words] | [Family] | [Absolute / Relative / Caution] | [Table in shared/contraindications.md] |

**Nothing surfaced:** [Use this line instead of the table when Tier 1 through 3
were clear, so the record still says plainly that screening happened.]

---

## Verdict

**[PROCEED / PROCEED WITH MODIFICATIONS / NOT RECOMMENDED]**

[Two or three sentences. When a practice is not recommended, name the specific
mechanism of risk rather than the label alone: what the practice does, and why
that interacts with what was shared. No hedging, no softening an absolute into
a lighter version of the same risk.]

---

## Required Modifications

[When the verdict is PROCEED WITH MODIFICATIONS, list each one concretely
enough to build a protocol around. "Shorter sessions" is not a modification;
"ten minutes maximum, seated, eyes open" is.]

- [Modification 1]
- [Modification 2]

*Or:* No modifications required.

---

## Alternatives Offered

[When a practice is not recommended, from the safe alternatives library in
shared/contraindications.md. Describe each one as a practice worth doing, not
as what is left over.]

| Instead of | Offered | What it involves |
| ---------- | ------- | ---------------- |
| [Practice] | [Alternative] | [One or two lines, concrete] |

---

## Healthcare Provider Consultation

**Status:** [Required / recommended / not indicated]

[When required or recommended, include what to bring, using the clearance
statement structure from shared/contraindications.md:]

- The practice involves [brief description]
- Sessions last approximately [duration]
- The practice may affect [relevant physiological systems]

*Your provider can help determine whether this is appropriate for you and
suggest any modifications.*

---

## Handoff

**Passed to:** [Skill name, or "none — alternatives offered instead"]
**Flags carried:** [Condition → severity, one per line]
**Do not re-ask:** Tier [1 / 2 / 3], collected [date]

---

## Review

This record reflects one date. Re-screen when:

- Six months have passed
- A new condition, medication, pregnancy, or surgery enters the picture
- An adverse reaction occurs (see the `adverse-response` skill)
- The person wants to move to a more intensive practice or a longer duration

---

*Screening checks known contraindications against what you shared. It is not a
medical assessment, not a diagnosis, and not clearance to practice. It
complements but does not replace medical care — continue all prescribed
treatments and consult your healthcare provider before beginning any new health
practice.*
```

---

## Element Guidelines

### The Privacy Block

**Purpose:** Establish ownership before anything else is read

**Required:**

- Appears near the top, above the findings, never in a footer
- States plainly that the record is local, is not transmitted, and has no other copy
- States that it is not a medical record and not a diagnosis
- States that the person can delete it

**This block must never be shortened or moved below the findings.** A document
listing someone's health disclosures earns its right to exist by saying, first,
whose it is.

### What Was Screened

**Purpose:** Make the routing auditable

**Key principles:**

- Name the practice family, not just the skill, since the contraindication
  tables are organized by family
- Say why that family applies in one line, so a reader can check the routing
- For a stack, list every ingredient separately — the additive rule means one
  contraindicated ingredient governs the whole

### Tiers Completed

**Purpose:** Show what was asked, including what was not

**Required:**

- Tier 2 status is explicit even when not required, with the reason
- Partial and declined are first-class statuses, not failures
- The unknown-resolves-down note stays in the artifact, so the person can see
  why a gentler version was offered

### What Surfaced

**Purpose:** Record the findings without turning them into a diagnosis

**Key principles:**

- The person's own words in the first column, always
- Severity comes from the table, cited, never improvised
- Most restrictive wins when several entries apply
- A clear "nothing surfaced" line, so a clean screening still reads as a
  screening that happened

### Verdict

**Purpose:** State the decision without ambiguity

**Required:**

- One of three values, in caps, no hedged fourth option
- The mechanism of risk named, not only the condition label
- An absolute is never softened into a lighter version of the same practice
- No language implying the person failed a test

### Alternatives Offered

**Purpose:** Make "not this one" the middle of the conversation, not the end

**Key principles:**

- Drawn from the safe alternatives library
- Described concretely enough to want: what it involves, how long, what position
- Two or three, not a catalog
- Never framed as a downgrade or a consolation

### Provider Consultation

**Purpose:** Hand the person something usable for the appointment

**Required:**

- Required versus recommended stated explicitly, per the shared clearance rules
- The three-line description the person can bring to their provider
- No implication that the swarm can grant or substitute for clearance

---

## Accessibility Guidelines

### Cognitive Accessibility

- Plain language throughout, no clinical shorthand
- One finding per row
- The verdict readable on its own, without reading the tables above it
- Short sentences in the verdict paragraph

### Sensory and Physical Accessibility

- Structure survives screen readers: real headings, real tables, no meaning
  carried by formatting alone
- Severity stated as a word (Absolute / Relative / Caution), never as color or
  symbol alone

### Psychological Safety

- Declining any question is stated as allowed, in the artifact itself
- No language that frames the person as a risk, a liability, or a case
- No stored narrative beyond what the person shared
- Not-recommended verdicts always paired with alternatives

---

## Privacy Requirements

- Stored locally per ADR-002, alongside the person's other practice records
- No identifiable health data transmitted externally, ever
- Used only to improve that individual's future screening
- No aggregation, no analytics, no sharing between people or sessions
- Deletable by the person at any time, with no downstream copy
- If shared with a healthcare provider, that is the person's choice and their
  action, never an automatic step

---

## Quality Checklist

Before finalizing a screening record:

- [ ] Privacy block present, above the findings, unshortened
- [ ] Date, requested practice, practice family, and tiers run all recorded
- [ ] Routing justified in one line
- [ ] Tier 2 status explicit, including when it was not required
- [ ] Unanswered questions marked unknown, with the step-down noted
- [ ] Findings in the person's own words, severity cited from the shared tables
- [ ] Most restrictive severity governs where several apply
- [ ] Verdict is one of the three values, stated in caps
- [ ] Mechanism of risk named, not only the condition
- [ ] No absolute softened into a modified version
- [ ] Modifications concrete enough to build a protocol from
- [ ] Alternatives offered whenever a practice is not recommended
- [ ] Provider consultation status stated, with the three-line description
- [ ] Handoff block lists flags and the do-not-re-ask tier
- [ ] Review triggers included
- [ ] No diagnosis, no interpretation, no clinical language
- [ ] "Complements but does not replace medical care" note present
- [ ] Evidence language appropriate throughout — no outcome promises

---

_"Knowing what to offer is wisdom. Knowing what to withhold is compassion. The
record is where both become visible, and it belongs to the person who answered
the questions."_
