# Healing Swarm Outcome Measurement Framework

> This framework provides standardized approaches for measuring practice
> effectiveness while maintaining absolute commitment to user privacy.
> All data is local-first, user-owned, and never transmitted without
> explicit consent (per ADR-002).

---

## Core Principle

**"Measure honestly. Report humbly. Protect fiercely."**

Outcome measurement serves the user — it helps them understand their own
journey. It does not serve marketing, engagement metrics, or claims of
efficacy. We measure to support informed self-awareness, not to prove
that our practices "work."

---

## VALIDATED SELF-REPORT INSTRUMENTS

### Overview Table

| Instrument | Full Name | Domain | Items | Time | Scoring | Validation |
|------------|-----------|--------|-------|------|---------|------------|
| **VAS** | Visual Analog Scale | Pain intensity | 1 | <1 min | 0-100 mm continuous | Extensively validated across populations |
| **PHQ-9** | Patient Health Questionnaire-9 | Depression/mood | 9 | 3 min | 0-27 (5 severity levels) | Sensitivity 88%, Specificity 88% for major depression |
| **GAD-7** | Generalized Anxiety Disorder-7 | Anxiety | 7 | 2 min | 0-21 (4 severity levels) | Sensitivity 89%, Specificity 82% for GAD |
| **PSQI** | Pittsburgh Sleep Quality Index | Sleep quality | 19 | 5 min | 0-21 (>5 = poor sleep) | Sensitivity 89.6%, Specificity 86.5% |
| **PSS** | Perceived Stress Scale | Perceived stress | 10 | 3 min | 0-40 (3 categories) | Widely validated, strong internal reliability |
| **WHO-5** | WHO-5 Well-Being Index | General wellbeing | 5 | 1 min | 0-25 (raw) or 0-100 (%) | Validated in 30+ languages |

### VAS (Visual Analog Scale) — Pain

```
Use for: Pain intensity tracking before and after practice
Format: Horizontal 100mm line, "No pain" to "Worst pain imaginable"
Scoring: Distance in mm from left anchor
Clinically meaningful change: ≥13mm reduction (or ≥30% from baseline)
Frequency: Before and after each practice session involving pain management
```

**Implementation notes:**
- Present as a slider, not a number input (preserves analog nature)
- Anchor labels must be consistent across all measurements
- Do NOT use smiley faces or emoji — they introduce interpretation bias

### PHQ-9 — Mood / Depression

```
Use for: Tracking mood over time, identifying need for professional referral
Format: 9 questions, "Not at all" to "Nearly every day" (0-3 each)
Scoring:
  0-4   = Minimal depression
  5-9   = Mild depression
  10-14 = Moderate depression
  15-19 = Moderately severe depression
  20-27 = Severe depression
Clinically meaningful change: ≥5 point reduction
Frequency: Weekly or biweekly (not daily — recall period is 2 weeks)
```

**Safety trigger:**
```
✅ Item 9 asks about self-harm/suicidal thoughts
✅ ANY positive response to Item 9 triggers crisis resource display
✅ Score ≥15 should trigger recommendation for professional consultation
✅ Do NOT use PHQ-9 score to claim practice effectiveness
```

### GAD-7 — Anxiety

```
Use for: Tracking anxiety levels over time
Format: 7 questions, "Not at all" to "Nearly every day" (0-3 each)
Scoring:
  0-4   = Minimal anxiety
  5-9   = Mild anxiety
  10-14 = Moderate anxiety
  15-21 = Severe anxiety
Clinically meaningful change: ≥4 point reduction
Frequency: Weekly or biweekly (recall period is 2 weeks)
```

**Safety trigger:**
```
✅ Score ≥10 should trigger recommendation for professional consultation
✅ Rapid increase (≥5 points between measurements) warrants check-in
```

### PSQI — Sleep Quality

```
Use for: Comprehensive sleep assessment
Format: 19 self-rated questions generating 7 component scores
Components: Sleep quality, latency, duration, efficiency, disturbances,
            sleep medication use, daytime dysfunction
Scoring: 0-21 total; >5 indicates poor sleep quality
Clinically meaningful change: ≥3 point reduction
Frequency: Monthly (recall period is 1 month)
```

### PSS — Perceived Stress Scale

```
Use for: General stress level tracking
Format: 10 questions about frequency of stress-related thoughts/feelings
Scoring:
  0-13  = Low stress
  14-26 = Moderate stress
  27-40 = High stress
Clinically meaningful change: ≥5 point reduction
Frequency: Monthly (recall period is 1 month)
```

### WHO-5 — Wellbeing

```
Use for: Quick general wellbeing check
Format: 5 positive statements, "At no time" to "All of the time" (0-5 each)
Scoring: Raw 0-25; multiply by 4 for percentage (0-100%)
  ≤28 (raw) or ≤50% suggests possible depression — screen further
Clinically meaningful change: ≥10% increase
Frequency: Weekly
```

**Recommended as default instrument** — short, positive-framed, non-pathologizing.

---

## PRACTICE-SPECIFIC OUTCOME MEASURES

### Breathwork (WHM and Related)

| Measure | Description | Method | Frequency |
|---------|-------------|--------|-----------|
| **Breath hold time** | Maximum comfortable retention after breathing rounds | Timed (seconds) | Each session |
| **Rounds completed** | Number of breathwork rounds in a session | Count | Each session |
| **Post-practice VAS calm** | Subjective calm level after breathwork | VAS 0-100 | Each session |
| **Heart rate variability** | HRV as proxy for autonomic balance (if user has device) | Device reading (ms) | Each session |
| **Subjective energy** | Self-rated energy level pre/post | VAS 0-100 | Each session |

**Honest framing:**
> "Breath hold time may increase with practice. This reflects improved CO2
> tolerance and breath control — it does not directly measure health improvement."

### Cold Exposure

| Measure | Description | Method | Frequency |
|---------|-------------|--------|-----------|
| **Duration tolerated** | Time in cold exposure | Timed (seconds/minutes) | Each session |
| **Subjective cold tolerance** | Self-rated comfort in cold | VAS 0-100 | Each session |
| **Post-exposure mood** | Self-rated mood after cold | VAS 0-100 | Each session |
| **Recovery time** | Time to return to baseline comfort | Timed (minutes) | Each session |

**Honest framing:**
> "Increased cold tolerance reflects adaptation of cold shock response and
> mental habituation. Individual variation is significant — do not compare
> your times to others."

### Meditation / Contemplative Practice

| Measure | Description | Method | Frequency |
|---------|-------------|--------|-----------|
| **Session duration** | Time spent in practice | Timed (minutes) | Each session |
| **Subjective depth** | Self-rated depth of practice | VAS 0-100 | Each session |
| **Mind-wandering frequency** | Self-assessed number of distractions | Estimate (low/moderate/high) | Each session |
| **Post-practice calm** | Subjective calm level | VAS 0-100 | Each session |
| **Interhemispheric coherence** | EEG coherence (if equipment available) | Device reading | Per research protocol |

**Honest framing:**
> "There is no 'good' or 'bad' meditation session. A session where you
> noticed many distractions is a session where awareness was active.
> All observations are data, not judgments."

### Paired / Resonance Practice

| Measure | Description | Method | Frequency |
|---------|-------------|--------|-----------|
| **Subjective connection** | Self-rated sense of connection with partner | VAS 0-100 | Each session |
| **Comfort level** | Self-rated comfort during practice | VAS 0-100 | Each session |
| **Experience concordance** | Whether partners report similar experiences (optional, no pressure) | Qualitative | Each session |

**Honest framing:**
> "Reported concordance between partners does not constitute evidence of
> telepathy or transferred potential. Shared context creates similar
> experiences. Report what you notice without interpretation."

### Movement / Somatic Practice

| Measure | Description | Method | Frequency |
|---------|-------------|--------|-----------|
| **Range of motion** | Functional movement assessment | Self-assessed or measured | Weekly |
| **Pain level** | VAS before and after practice | VAS 0-100 | Each session |
| **Functional capacity** | Ability to perform daily activities | Self-rated scale | Weekly |
| **Body awareness** | Subjective sense of body connection | VAS 0-100 | Each session |

---

## BEFORE/AFTER MEASUREMENT PROTOCOL

### Single Session Protocol

```
BEFORE PRACTICE:
1. Record current state using appropriate VAS measures (1-2 minutes)
   - Pain (if relevant)
   - Stress/tension
   - Energy level
   - Mood
2. Note any relevant context (sleep quality, recent events, medications)

AFTER PRACTICE:
1. Wait 5 minutes after completing practice (allow settling)
2. Record same VAS measures as before
3. Note any observations or experiences (optional free-text)
4. Record practice details (type, duration, intensity)

PRESENTATION:
- Show before/after comparison in simple visual format
- Do NOT calculate "improvement percentages" — they imply causation
- Use language: "Your self-rated [measure] was [X] before and [Y] after"
- Do NOT use language: "The practice improved your [measure] by Z%"
```

### Multi-Session Tracking

```
WEEKLY:
- WHO-5 (wellbeing) — takes 1 minute
- Practice log summary (types, durations, frequency)
- Brief free-text reflection (optional)

BIWEEKLY:
- PHQ-9 (mood) — if relevant to user goals
- GAD-7 (anxiety) — if relevant to user goals

MONTHLY:
- PSS (stress) — if relevant to user goals
- PSQI (sleep) — if relevant to user goals
- Practice-specific measures (breath hold trends, etc.)
- Review and reflection session
```

---

## FREQUENCY RECOMMENDATIONS

| Measurement Type | Frequency | Rationale |
|------------------|-----------|-----------|
| **Session-level VAS** | Every session | Low burden, immediate feedback |
| **WHO-5 wellbeing** | Weekly | Short, covers broad wellbeing |
| **PHQ-9 / GAD-7** | Every 2 weeks | Designed for 2-week recall period |
| **PSQI sleep** | Monthly | Designed for 1-month recall period |
| **PSS stress** | Monthly | Designed for 1-month recall period |
| **Comprehensive review** | Monthly | Pattern recognition, goal adjustment |
| **Practice-specific trends** | Weekly summary | Identify progression and plateaus |

### Avoiding Measurement Fatigue

```
✅ Never require measurement — always optional
✅ Start with one instrument only (recommend WHO-5)
✅ Add instruments only when user expresses interest in specific domains
✅ Keep session-level measurement to <2 minutes
✅ Allow "skip" without guilt messaging
✅ Do NOT gamify measurement (no streaks, badges, or scores for completing surveys)
```

---

## DATA PRIVACY REQUIREMENTS

### Absolute Requirements (Per ADR-002)

```
✅ ALL measurement data stored locally on user's device
✅ NO measurement data transmitted to external servers
✅ NO aggregation across users without explicit, informed, revocable consent
✅ User can export all their data in open format (JSON, CSV)
✅ User can delete all their data permanently at any time
✅ NO data used for advertising, profiling, or sale — ever
✅ Encryption at rest for all health-related data
✅ No third-party analytics on health measurement data
```

### Data Minimization

```
✅ Collect only what is needed for the user's stated goals
✅ Do NOT collect demographic data unless user volunteers it
✅ Do NOT infer conditions from measurement patterns
✅ Do NOT create diagnostic flags based on scores
✅ Measurement instruments are tools for the user — not diagnostic tools for agents
```

### Transparency

```
✅ User can see exactly what data is stored and where
✅ User understands what each measurement is and why it is offered
✅ User controls which measurements appear in their tracking
✅ No hidden tracking, analytics, or derived metrics
```

---

## PRESENTING OUTCOMES HONESTLY

### NEVER Do

```
❌ NEVER claim practice caused improvement: "The practice reduced your anxiety by 40%"
❌ NEVER compare user scores to population norms without context
❌ NEVER use scores to validate or invalidate the user's experience
❌ NEVER present correlation as causation
❌ NEVER aggregate individual session improvements to create inflated claims
❌ NEVER use measurement data in marketing or promotional content
❌ NEVER frame scores as grades or evaluations of the user
❌ NEVER withhold unfavorable trends from the user
```

### ALWAYS Do

```
✅ ALWAYS present data as self-report: "You rated your pain as..."
✅ ALWAYS note context: "This week you also reported poor sleep, which may affect scores"
✅ ALWAYS present trends over time rather than single data points
✅ ALWAYS include confidence language: "Self-report measures have inherent variability"
✅ ALWAYS remind: "These numbers support your self-awareness — they are not diagnoses"
✅ ALWAYS show both improvements and declines honestly
✅ ALWAYS allow the user to interpret their own data
```

### Example Presentations

**Honest presentation:**
> "Over the past month, your self-rated pain scores show a general downward
> trend, from an average of 62 to 45 on the VAS scale. You practiced
> breathwork an average of 4 times per week during this period. Many factors
> may contribute to this change."

**Dishonest presentation (NEVER use):**
> "Breathwork reduced your pain by 27%! Keep going to eliminate your pain
> completely!"

---

## LIMITATIONS OF SELF-REPORT MEASURES

All agents MUST understand and communicate these limitations when relevant:

### Self-Report Bias

```
- Social desirability: Users may report what they think they "should" feel
- Recall bias: Retrospective reports are less accurate than real-time
- Expectation effects: Expecting improvement can inflate positive reports
- Anchoring: Previous scores influence current scoring
```

**Mitigation:** Frame measurement as personal exploration, not evaluation.
Normalize varied and inconsistent results.

### Placebo and Expectancy Effects

```
- Believing a practice will help often produces measurable improvement
- This is not "fake" — placebo effects are real physiological changes
- However, we cannot attribute improvement to practice mechanism alone
- Expectancy effects are strongest for subjective measures (pain, mood)
```

**Honest framing:**
> "Expectancy effects are a real component of healing. If you approach a
> practice with hope and engagement, that attitude itself may contribute
> to benefit. This does not diminish the value of the practice — it
> acknowledges the complexity of healing."

### Regression to the Mean

```
- People often begin practices when symptoms are at their worst
- Natural fluctuation means symptoms tend to improve from extremes
- Improvement after starting a practice may partly reflect this pattern
- Longer tracking periods help distinguish practice effects from regression
```

**Honest framing:**
> "When we begin a new practice, we often do so because things feel difficult.
> Some improvement is expected simply because difficult periods naturally
> fluctuate. Longer-term tracking gives a clearer picture."

### Natural History of Conditions

```
- Many conditions improve over time regardless of intervention
- Acute injuries heal; mood episodes cycle; stress fluctuates
- Improvement during practice does not prove practice caused improvement
```

### Hawthorne Effect

```
- The act of measuring itself can change behavior and experience
- Tracking a measure draws attention to it, which may change it
- This is not a problem to solve — just a limitation to acknowledge
```

---

## INSTRUMENT IMPLEMENTATION GUIDELINES

### Validated Instrument Integrity

```
✅ Use exact wording from validated instruments — do NOT paraphrase
✅ Use exact scoring from published scoring guides
✅ Use exact recall periods (PHQ-9 is "over the last 2 weeks" — not "today")
✅ Do NOT add items to validated instruments
✅ Do NOT remove items from validated instruments
✅ Note the validated instrument version being used
✅ Provide proper attribution for each instrument
```

### Licensing and Attribution

| Instrument | License | Attribution Required |
|------------|---------|---------------------|
| VAS | Public domain | None required |
| PHQ-9 | Public domain (developed with public funds) | "Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke" |
| GAD-7 | Public domain | "Developed by Drs. Robert L. Spitzer, Kurt Kroenke, Janet B.W. Williams, Bernd Lowe" |
| PSQI | Free for non-commercial use | "Buysse, Reynolds, Monk, Berman, & Kupfer, 1989" |
| PSS | Public domain | "Cohen, Kamarck, & Mermelstein, 1983" |
| WHO-5 | Public domain (WHO) | "WHO-5, World Health Organization, 1998" |

---

## OUTCOME MEASUREMENT ETHICS

### The Measurement Should Not Become the Goal

```
✅ We measure to support awareness, not to create anxiety about scores
✅ A "worsening" score is still useful data — it is NOT failure
✅ Users who choose not to track are equally supported
✅ The practice is valuable independent of whether measurements change
✅ We do NOT create pressure to "show improvement"
```

### When Scores Suggest Professional Consultation

| Instrument | Threshold | Action |
|------------|-----------|--------|
| PHQ-9 | Score ≥15 (moderately severe) | Recommend professional mental health consultation |
| PHQ-9 Item 9 | Any positive response | Display crisis resources immediately |
| GAD-7 | Score ≥15 (severe) | Recommend professional consultation |
| GAD-7 | Rapid increase ≥5 points | Check in with user, recommend consultation |
| WHO-5 | Score ≤28 (raw) or ≤50% | Screen for depression (PHQ-9), recommend consultation |
| Any measure | Consistent worsening over 4+ weeks | Recommend professional consultation |

**Language for referral:**
> "Your recent self-assessments suggest you might benefit from speaking with a
> healthcare professional. This is not a diagnosis — it is a prompt to seek
> support. Would you like to see a list of resources?"

---

*"What we measure shapes what we attend to. Let us measure with care,
present with honesty, and always remember that the deepest healing often
happens where no instrument can reach."*
