# Outcome-Log Template

> Template for a private, local record of practice and self-report measures.
> Holds the instruments chosen, the baseline, the session-by-session ratings,
> the weekly and monthly instrument scores, and a review section that reads the
> series honestly. Validated for measurement, not for diagnosis. Serves the
> outcome-tracking skill.

---

## Structure

```markdown
# [Focus]: Outcome Log

**What I want to know:** [In your own words]
**Instruments:** [Which ones, and what each measures]
**Started:** [Date]
**Where this lives:** [Local file path. This file is yours. It is not sent anywhere.]

---

## What This Log Is, And Isn't

This is a private record to support your own awareness of your own practice.

- It is **not clinical assessment**, and no score here is a diagnosis.
- The instruments below are validated for measuring what they measure. That is
  a different thing from telling you what you are.
- One person's record cannot show that a practice caused a change. It can show
  what you rated, next to what you practiced. The rest is yours to weigh.
- Tracking is optional. Skipping an entry costs nothing. Stopping costs nothing.

---

## Privacy Terms

- Stored locally on your device, in plain text you can read
- Never transmitted, and never combined with anyone else's data
- Export: [how to export as JSON or CSV]
- Delete: [how to delete permanently, in full]
- No analytics, no advertising use, no profiling, at any point

---

## Crisis Resources

If you are in crisis, or thinking about harming yourself: call or text **988**
(988 Suicide & Crisis Lifeline), text **HOME** to **741741** (Crisis Text
Line), or call your local emergency number (911 in the US).

[If any mood instrument is part of this log, add:]
A positive answer on a self-harm item stops the questionnaire. Resources come
first, scoring does not continue, and the moment becomes about support rather
than measurement.

---

## Instruments and Attribution

| Instrument | Measures | Recall period | Cadence | Attribution |
| ---------- | -------- | ------------- | ------- | ----------- |
| [WHO-5] | [General wellbeing] | [Last 2 weeks] | [Weekly] | WHO-5, World Health Organization, 1998 |
| [VAS] | [Pain, tension, calm, energy] | [Right now] | [Before and after a session] | Public domain |
| [PSS-10] | [Perceived stress] | [Last month] | [Monthly] | Cohen, Kamarck, & Mermelstein, 1983 |
| [PSQI] | [Sleep quality] | [Last month] | [Monthly] | Buysse, Reynolds, Monk, Berman, & Kupfer, 1989 |

Use each instrument's exact published wording, scoring, and recall period. A
shortened or reworded instrument is no longer the validated one.

---

## Baseline

Recorded before the practice period began, or noted as retrospective if it
wasn't.

| Measure | Baseline value | Date | Context worth remembering |
| ------- | -------------- | ---- | ------------------------- |
| [WHO-5] | [Raw / %] | [Date] | [What was happening that week] |
| [PSQI] | [0-21] | [Date] | [Anything relevant] |
| [VAS: calm] | [0-100] | [Date] | [Anything relevant] |

**Baseline type:** [Prospective (recorded before starting) / Retrospective
(reconstructed after starting, and weaker for it)]

---

## Session Log

| Date | Practice | Skill | Duration | Before | After | Notes |
| ---- | -------- | ----- | -------- | ------ | ----- | ----- |
| [Date] | [Practice] | `/[trigger]` | [Min] | [VAS values] | [VAS values] | [Optional] |
| [Date] | [Practice] | `/[trigger]` | [Min] | [VAS values] | [VAS values] | [Optional] |

Rate after, not during. Wait about five minutes so the session settles. Use the
same anchors every time.

A session with no change recorded is data. A session you didn't rate is fine.

---

## Weekly Measures

| Week | Date | [WHO-5 raw] | [WHO-5 %] | Practice days | Context |
| ---- | ---- | ----------- | --------- | ------------- | ------- |
| 1 | [Date] | [0-25] | [0-100] | [N] | [Illness, travel, work, anything that shaped the week] |
| 2 | [Date] | [0-25] | [0-100] | [N] | [Context] |

The context column matters as much as the score column. A number without its
week is hard to read later.

---

## Monthly Measures

| Month | Date | [PSS-10] | [PSQI] | Context |
| ----- | ---- | -------- | ------ | ------- |
| 1 | [Date] | [0-40] | [0-21] | [Context] |
| 2 | [Date] | [0-40] | [0-21] | [Context] |

---

## Review

**Review date:** [Date]
**Period covered:** [Weeks X to Y]

### What the record shows

[Values and trends, stated as self-report. "You rated your wellbeing an average
of X this month, compared with Y last month, with the range running from A to
B." Show declines as plainly as improvements. No improvement percentages, and
no attribution to any practice.]

### What else was happening

[Context across the period: sleep, illness, work, relationships, medication
changes, seasons. This is not noise to be filtered out. It is part of the
reading.]

### What this record cannot separate

- **Regression to the mean:** practices often begin during a bad stretch, and
  bad stretches tend to end on their own
- **Expectancy:** hope and engagement produce real change, which is not the same
  as the practice's mechanism
- **Natural history:** injuries heal, moods cycle, stress fluctuates, with or
  without any practice
- **Hawthorne effect:** attending to something can change it, and this log is a
  form of attending
- **No comparison condition:** one person, one timeline, so correlation is the
  ceiling

### Your reading

[Space for the person's own interpretation. This section belongs to them, and
whatever they write here outranks any pattern an agent noticed.]

### Anything worth raising with a professional

[Threshold crossings, or a consistent worsening across four or more weeks,
stated as a prompt to seek support rather than as a diagnosis. Include the
referral language: "This is not a diagnosis. It is a prompt to seek support."]

---

## Stopping

You can stop tracking at any time, keep the record, delete the record, or start
again later. None of those is a failure, and none of them changes whether the
practice was worth doing.

---

*Measurement supports your awareness. It does not grade you, and it does not
replace medical care. Continue all prescribed treatments, and consult your
healthcare provider before beginning any new health practice.*
```

---

## Element Guidelines

### What This Log Is, And Isn't

**Purpose:** Set the boundary before a single number is written down

**Requirements:**

- "Not clinical assessment" stated in the artifact, near the top, not buried
- Instruments described as validated for measurement, never for diagnosis
- The no-causal-claim limit stated plainly, in the person's terms
- Optionality stated: skipping, pausing, and stopping all cost nothing

### Privacy Terms

**Purpose:** Make the data terms visible in the file the data lives in

**Requirements (per `shared/outcome-measurement.md`):**

- Local storage only, in an open readable format
- No transmission, and no aggregation across people without explicit, informed,
  revocable consent
- Concrete export instructions (JSON or CSV)
- Concrete permanent-delete instructions
- Explicit statement of no analytics, advertising use, or profiling

### Crisis Resources

**Purpose:** Put the resources in the file before they are ever needed

**Requirements:**

- Present whether or not a mood instrument is included
- Exact resources: 988, text HOME to 741741, and the local emergency number
  (911 in the US)
- Where a depression instrument is included, the self-harm-item rule is written
  into the log: scoring stops, resources come first, no exceptions, and the
  session shifts from measurement to support

### Instruments and Attribution

**Purpose:** Keep the validated instruments intact and credited

**Requirements:**

- Exact published wording, scoring, and recall period, with no items added or
  removed
- Recall period visible in the table, so cadence errors are obvious
- Attribution per instrument: WHO-5 (World Health Organization, 1998), PSS
  (Cohen, Kamarck, & Mermelstein, 1983), PSQI (Buysse, Reynolds, Monk, Berman,
  & Kupfer, 1989), PHQ-9 and GAD-7 (Spitzer, Kroenke, Williams, and colleagues)
- VAS presented as a slider, with consistent anchors, and never with faces or
  emoji

### Baseline

**Purpose:** Give the later readings something honest to sit against

**Requirements:**

- Recorded before the practice period where possible
- Labeled retrospective where it wasn't, with the weakness named
- Context captured alongside each baseline value

### Session, Weekly, and Monthly Tables

**Purpose:** Keep the burden low and the cadence correct

**Requirements:**

- Session ratings before and after, with a settling gap of about five minutes
- Weekly cadence for WHO-5, monthly for PSS-10 and PSQI, every two weeks for
  PHQ-9 or GAD-7 where used
- A context column on every periodic table
- Skipped entries left blank without comment, and no streak or completion count
  anywhere

### Review

**Purpose:** Read the series honestly, and leave the interpretation with the
person

**Requirements:**

- Values stated as self-report ("you rated"), never as effects
- No improvement percentages, and no causal attribution to any practice
- Declines shown as plainly as improvements
- Confounds named by name: regression to the mean, expectancy, natural history,
  Hawthorne effect, absence of a comparison condition
- A section owned by the person for their own reading
- Referral prompts phrased as prompts, explicitly not as diagnoses

---

## Accessibility Guidelines

### Physical Accessibility

- Every entry short enough to complete one-handed, in under two minutes
- No entry requires writing at length; a single value is a complete entry
- The log works on paper if the person prefers paper

### Sensory Accessibility

- Screen-reader friendly tables, one measure per row
- VAS offered with a spoken or typed 0-100 value where a slider is not usable
- No color-only encoding of any trend

### Cognitive Accessibility

- One instrument to start with, added to only on request
- Plain-language descriptions of what each instrument measures
- Predictable section order, so the log reads the same way every time
- No scoring arithmetic required of the person beyond the published rule

### Psychological Safety

- No streaks, badges, scores for completing surveys, or completion percentages
- No guilt language for a skipped or abandoned entry
- A worsening score explicitly framed as useful data, not as failure
- The practice framed as worth doing whether or not any number moves
- Crisis resources present regardless of what the log contains

---

## Quality Checklist

Before finalizing an outcome log:

- [ ] "Not clinical assessment" stated near the top
- [ ] Instruments described as validated for measurement, never for diagnosis
- [ ] No-causal-claim limit stated in plain language
- [ ] Privacy terms present: local, no transmission, export, permanent delete
- [ ] Crisis resources present: 988, text HOME to 741741, local emergency number
- [ ] Self-harm-item rule written in wherever a depression instrument is used
- [ ] Exact instrument wording, scoring, and recall period preserved
- [ ] Attribution present for every instrument used
- [ ] Baseline recorded, and labeled prospective or retrospective
- [ ] Cadence matches each instrument's recall period
- [ ] Context column on every periodic table
- [ ] Review section shows declines as plainly as improvements
- [ ] Confounds named: regression to the mean, expectancy, natural history,
      Hawthorne, no comparison condition
- [ ] A section owned by the person for their own reading
- [ ] Referral language framed as a prompt, not a diagnosis
- [ ] No streaks, badges, or completion scores anywhere
- [ ] Medical disclaimer present

---

*"What we measure shapes what we attend to. Measure with care, present with
honesty."*
