# Family Nexus Healing — Phase A Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce the unified Phase A research synthesis (~15–25k words) that coalesces evidence-based and traditional healing practices for a specific family facing younger-onset progressive cognitive change, court-ordered supervised visitation, and anticipatory grief — serving as the source of truth for Phases B and C.

**Architecture:** Six parallel research threads dispatched as subagents, each producing one theme chapter. Outputs consolidated by the orchestrator into a unified synthesis document. Quality gate by Ethics Guardian + Clinical Reviewer + Cultural Reviewer before proceeding to Phase B.

**Tech Stack:** Markdown files; git for version control; Agent tool for subagent dispatch (Explore and general-purpose agents for research, feature-dev agents for review passes).

**Reference spec:** `docs/superpowers/specs/2026-04-11-family-nexus-healing-design.md`

**Note on TDD adaptation:** This phase produces research prose, not code. The TDD analog here is "acceptance criteria up front, verification after." Each research task specifies acceptance criteria a reviewer will check against the produced chapter. Quality gates are hard-enforced.

---

## File Structure (Phase A)

All Phase A outputs live in `examples/family-nexus-healing/phase-a/`:

```
examples/family-nexus-healing/
├── README.md                                    ← project entry point
├── phase-a/
│   ├── phase-a-synthesis.md                     ← unified synthesis (final deliverable)
│   ├── research/
│   │   ├── thread-1-anticipatory-grief.md
│   │   ├── thread-2-attachment-secure-base.md
│   │   ├── thread-3-presence-without-memory.md
│   │   ├── thread-4-mothers-container.md
│   │   ├── thread-5-supervised-visit-container.md
│   │   └── thread-6-meaning-making-ritual.md
│   └── quality-review/
│       ├── ethics-review.md
│       ├── clinical-review.md
│       └── cultural-review.md
```

Each research thread file: ~2,500–4,000 words. Synthesis consolidates to ~15–25k words including framing, cross-theme pattern map, configuration matrices, and bibliography.

---

## Task 1: Initialize project directory and README

**Files:**
- Create: `examples/family-nexus-healing/README.md`
- Create: `examples/family-nexus-healing/phase-a/research/` (directory)
- Create: `examples/family-nexus-healing/phase-a/quality-review/` (directory)

- [ ] **Step 1: Create directory structure**

Run from healing-swarm-skills repo root:
```bash
mkdir -p examples/family-nexus-healing/phase-a/research
mkdir -p examples/family-nexus-healing/phase-a/quality-review
```

- [ ] **Step 2: Create the project README**

Create `examples/family-nexus-healing/README.md` with this content:

```markdown
# Family Nexus Healing

A phased research → protocols → application project producing healing support
material for a specific family facing a nexus of disarray: younger-onset
progressive cognitive change in one parent, court-ordered supervised
visitation, and anticipatory grief held by a mother and two young children
(boy 5, girl 8).

**Spec:** `docs/superpowers/specs/2026-04-11-family-nexus-healing-design.md`
**Plan(s):** `docs/superpowers/plans/2026-04-11-family-nexus-healing-phase-*.md`

## What this is

Supportive material to **complement** the family's professional care:
- **Phase A** (this phase) — research synthesis coalescing evidence-based
  and traditional practices across cultures and eras
- **Phase B** — ready-to-run protocols kit derived from Phase A
- **Phase C** — private local-first web application delivering the protocols
  via three modes (Family · Father · Mother)

## What this is not

- Not a treatment plan. Not a diagnosis. Not a cure.
- Not a substitute for the family's clinicians, family therapist, or
  court-appointed visit supervisor.
- Not a general-purpose app. The flagship build is tuned to one family.
  Architectural seams (archetype role packs) enable future variants but
  no variants are built in this project.

## Ecumenical framing

Per explicit user guidance, the project draws on "best of many" traditions
so that anyone reading the material can see that progressive cognitive
change, forced separation, and anticipatory grief are ancient human
experiences met by diverse cultures across time. The ecumenical frame is
itself therapeutic: it reveals the family is not alone and not without
precedent.

## Younger-onset specificity

Both parents are under 50. This shapes everything:
- Younger-onset literature is thin and socially invisible
- The mother's peers likely have no template for her situation
- The father is likely still physically capable — dignity preservation must
  work with, not around, a still-vital body
- The children may not have the father present in their adulthood

## Structure

See each phase directory for outputs and reviews.
```

- [ ] **Step 3: Commit**

```bash
git add examples/family-nexus-healing/README.md examples/family-nexus-healing/phase-a/
git commit -m "feat(family-nexus): initialize project structure and README

Creates examples/family-nexus-healing/ directory with phase-a subdirectories
for research threads and quality review outputs.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Research Thread 1 — Anticipatory Grief & Loss-of-Self

**Files:**
- Create: `examples/family-nexus-healing/phase-a/research/thread-1-anticipatory-grief.md`

**Agents (dispatched as one subagent with composite brief):** Grief Guide + Traditions Scholar + Clinical Researcher perspectives.

**Acceptance criteria (reviewer will verify):**
- Anticipatory grief literature cited: Rando's framework, Boss's ambiguous loss theory, at least two other peer-reviewed sources
- Younger-onset-specific advocacy sources included: Dementia Alliance International, Kate Swaffer's "prescribed disengagement" concept, at least one lived-experience memoir or account
- Traditional practices represented from at least 6 distinct cultures/traditions (e.g., Jewish mourning structures, Buddhist impermanence, Celtic keening, Dia de los Muertos, Mexican *duelo*, Japanese *mono no aware*, Tibetan Bardo practices)
- Explicit section on how traditions held families through slow losses before hospice infrastructure existed
- Chapter length: 2,500–4,000 words
- Every claim cited; every tradition attributed
- Ecumenical tone — no single tradition privileged as "the answer"
- Younger-onset framing prominent (not backfilled)

- [ ] **Step 1: Dispatch research subagent for Thread 1**

Use the Agent tool with subagent_type "general-purpose". Prompt the subagent with:

```
You are dispatched as Research Thread 1 of the Family Nexus Healing project.
Your job: produce a ~3,000-word research chapter on "Anticipatory Grief &
Loss-of-Self" for a family facing younger-onset progressive cognitive change.

CONTEXT: The father is under 50 with possible early-onset Alzheimer's. The
mother (also under 50) holds two children (5yo boy, 8yo girl). Court-ordered
supervised visitation. The material will inform a protocols kit and a private
app — it must be usable, not academic.

FRAMING REQUIREMENTS:
- Use "progressive cognitive change" as the baseline term; only name Alzheimer's
  where it is contextually necessary
- Ecumenical: draw from many traditions, privilege none
- Younger-onset-specific: the literature is thin; name that explicitly and
  compensate by drawing on advocacy and lived-experience sources
- Clinician-readable register

CONTENT REQUIREMENTS:
1. Anticipatory grief literature: Rando's framework, Pauline Boss's ambiguous
   loss theory, at least two other peer-reviewed sources. Cite specifically.
2. Younger-onset advocacy: Dementia Alliance International, Kate Swaffer's
   "prescribed disengagement," at least one lived-experience memoir/account.
3. Traditional practices held for slow losses — represent at least 6 distinct
   cultures (Jewish mourning, Buddhist impermanence, Celtic keening, Dia de los
   Muertos, Mexican duelo, Japanese mono no aware, Tibetan Bardo, etc.).
4. A section on "how humans held families through slow losses before hospice
   infrastructure" — what community rituals and containers did the work?
5. Implications for THIS family: what does the literature suggest about what
   would help a younger-onset family? Be concrete.
6. Annotated bibliography at the end with every source cited.

ETHICAL REQUIREMENTS:
- Proper lineage attribution for every tradition
- "May help" language, not "will cure"
- No appropriation — if a tradition is closed to outsiders, name that
- Honor what is specific; do not flatten traditions into "they all say the same thing"

LENGTH: 2,500-4,000 words. Quality over padding.

DELIVERABLE: Return the full chapter as markdown, with headings, inline
citations (author year, page), and an annotated bibliography section.

Do your research using your web search and general knowledge. Do NOT fabricate
citations — if you are unsure of a source, mark it as [verification needed]
with a brief note on what to verify.

Reference the healing-swarm ethics at
https://github.com/realsammyt/healing-swarm-skills/blob/master/.claude/skills/healing-swarm/shared/ethics-guardrails.md
if accessible; otherwise hold the 7 ethics principles:
  1. First do no harm
  2. Honor all traditions
  3. Evidence with humility
  4. Empower don't control
  5. Privacy as sanctuary
  6. Accessible to all
  7. Continuous improvement
```

- [ ] **Step 2: Verify output against acceptance criteria**

Read the agent's output. Check:
- [ ] 2,500-4,000 word length
- [ ] Rando, Boss, and 2+ other peer-reviewed sources present
- [ ] Younger-onset advocacy sources present (DAI, Swaffer)
- [ ] At least 6 distinct traditions represented
- [ ] "Before hospice" historical section present
- [ ] Implications-for-this-family section present
- [ ] Bibliography complete
- [ ] No fabricated citations (any [verification needed] flags acceptable; outright fabrications unacceptable)

If any criterion fails, dispatch a follow-up request to the same subagent with specific corrections needed. Do not move on until all criteria pass.

- [ ] **Step 3: Write the chapter to disk**

Save the verified output to `examples/family-nexus-healing/phase-a/research/thread-1-anticipatory-grief.md`.

- [ ] **Step 4: Commit**

```bash
git add examples/family-nexus-healing/phase-a/research/thread-1-anticipatory-grief.md
git commit -m "feat(family-nexus): add research thread 1 — anticipatory grief

Coalesces anticipatory grief literature (Rando, Boss) with younger-onset
advocacy sources (Dementia Alliance International, Swaffer) and traditional
practices for slow loss across multiple cultures. Part of Phase A synthesis.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Research Thread 2 — Attachment & Secure Base Under Uncertainty (Kids 5 & 8)

**Files:**
- Create: `examples/family-nexus-healing/phase-a/research/thread-2-attachment-secure-base.md`

**Agents (composite brief):** Clinical Researcher + PNI Researcher + Expressive Guide perspectives.

**Acceptance criteria:**
- Attachment theory literature: Bowlby, Ainsworth, plus modern research on attachment under separation / parental illness / high-conflict custody
- Developmental differentiation: separate sections on what a 5yo boy vs an 8yo girl need, developmentally
- Expressive writing research adapted for children (Pennebaker derivatives, narrative therapy for kids)
- Ritual-as-container for what-cannot-be-explained
- Connection-capsules concept developed: practices that create carryforward memory/meaning if the father is not present in the children's adulthood
- Chapter length: 2,500–4,000 words
- At least 3 distinct developmental/clinical sources per age group
- Traditional practices for children facing loss represented from multiple cultures

- [ ] **Step 1: Dispatch research subagent for Thread 2**

Use the Agent tool with subagent_type "general-purpose". Prompt:

```
You are dispatched as Research Thread 2 of the Family Nexus Healing project.
Your job: produce a ~3,000-word research chapter on "Attachment & Secure Base
Under Uncertainty" specifically tuned to two children (boy 5, girl 8) whose
father (under 50) is undergoing progressive cognitive change and who sees
them only in court-ordered supervised visits. Their mother (under 50) is the
primary holder.

CONTEXT: Same as Thread 1. The material will inform protocols the mother and
visit supervisor can use with the children.

FRAMING REQUIREMENTS: Same as Thread 1 (ecumenical, clinician-readable,
progressive cognitive change language, younger-onset aware).

CONTENT REQUIREMENTS:
1. Attachment theory foundation: Bowlby and Ainsworth, then modern research on
   attachment under separation, parental illness, and high-conflict custody.
   Cite specifically.
2. DEVELOPMENTAL DIFFERENTIATION — produce two distinct sections:
   a. 5yo boy: cognitive/emotional developmental stage; how 5-year-olds
      process parental absence/illness; what they understand, what they can't
      yet; felt-sense and play as their primary expressive modes; sleep
      sensitivity.
   b. 8yo girl: emerging narrative capacity; developmentally-appropriate
      questions they ask; drawing + words as primary expression; early
      perspective-taking; different vulnerability profile.
3. Expressive writing and narrative therapy for children: Pennebaker
   derivatives adapted for child developmental stages.
4. Ritual-as-container: how structured rituals help children hold what
   cannot be explained. Cite ritual theory and developmental psychology.
5. Connection-capsules: practices specifically designed to create carryforward
   memory and meaning IF the father is not present in the children's
   adulthood. This is a critical concept for younger-onset families. Draw on
   legacy-project research (dignity therapy for adults, legacy work for
   children) and adapt to this family.
6. Traditional practices for children facing parental loss — represent at
   least 4 cultures/traditions.
7. Implications for THIS family: what does the literature suggest about
   specific practices for a 5yo boy and an 8yo girl in this situation?
8. Annotated bibliography.

ETHICAL REQUIREMENTS: Same as Thread 1, plus extra care for the privacy and
developmental protection of children.

LENGTH: 2,500-4,000 words.

DELIVERABLE: Full chapter as markdown with headings, inline citations,
bibliography. Same no-fabrication rule — use [verification needed] flags
rather than invent citations.
```

- [ ] **Step 2: Verify output against acceptance criteria**

- [ ] 2,500-4,000 words
- [ ] Bowlby, Ainsworth, plus modern research cited
- [ ] Distinct 5yo and 8yo developmental sections present
- [ ] Expressive writing / narrative therapy for children present
- [ ] Connection-capsules concept developed
- [ ] Ritual-as-container section present
- [ ] At least 4 cultures represented
- [ ] Implications-for-this-family concrete
- [ ] Bibliography complete
- [ ] No fabricated citations

- [ ] **Step 3: Save to disk**

Save to `examples/family-nexus-healing/phase-a/research/thread-2-attachment-secure-base.md`.

- [ ] **Step 4: Commit**

```bash
git add examples/family-nexus-healing/phase-a/research/thread-2-attachment-secure-base.md
git commit -m "feat(family-nexus): add research thread 2 — attachment & secure base

Developmental-stage differentiated (5yo boy, 8yo girl) coverage of attachment
theory under parental illness, expressive/narrative therapy for children, and
connection-capsules for carryforward memory. Part of Phase A synthesis.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Research Thread 3 — Presence-Without-Memory

**Files:**
- Create: `examples/family-nexus-healing/phase-a/research/thread-3-presence-without-memory.md`

**Agents (composite brief):** Somatic Guide + Sound Healing Guide + Contemplative Guide perspectives.

**Acceptance criteria:**
- Dementia-care research cited: Kitwood's person-centered care, Naomi Feil's Validation Therapy, Snoezelen multisensory environments, Oliver Sacks on music and memory
- Contemplative traditions privileging presence over narrative: Zen, Dzogchen, Quaker silence, Sufi dhikr, at least 2 more
- Somatic co-regulation research (Porges polyvagal, Stephen Porges/Deb Dana applications)
- Younger-onset specificity: dignity preservation with a still-vital body; how identity-from-work and identity-from-role shift
- Chapter length: 2,500–4,000 words
- At least 6 traditions/research sources for presence-practices

- [ ] **Step 1: Dispatch research subagent for Thread 3**

Use the Agent tool with subagent_type "general-purpose". Prompt:

```
You are dispatched as Research Thread 3 of the Family Nexus Healing project.
Your job: produce a ~3,000-word research chapter on "Presence-Without-Memory:
Connection When Cognition is Limited" for a father (under 50) undergoing
progressive cognitive change who has supervised visits with his young
children (5, 8).

CONTEXT: Same as previous threads. This chapter is CRITICAL — it informs
the most difficult protocol set in Phase B: father-with-kids-supervised.
The father is physically capable and still carries identity and presence,
but narrative memory and complex cognition are diminishing. How do humans
connect across this gap?

FRAMING REQUIREMENTS: Same as prior threads. Extra emphasis on honoring
the father's dignity and remaining vitality — this is NOT a late-life-care
chapter.

CONTENT REQUIREMENTS:
1. Dementia-care research (adapted for younger-onset where possible):
   a. Tom Kitwood's person-centered care and "personhood" framework
   b. Naomi Feil's Validation Therapy
   c. Snoezelen / multisensory environments research
   d. Oliver Sacks on music and memory (Musicophilia, Awakenings vignettes)
   e. At least one recent (2015+) clinical review
2. Contemplative traditions that privilege presence over narrative — where
   "being with" is the practice, not "remembering":
   a. Zen silent sitting (zazen)
   b. Dzogchen presence / rigpa
   c. Quaker silent meeting
   d. Sufi dhikr / silent remembrance
   e. At least 2 more traditions (Christian contemplative, Hindu nirvikalpa,
      Indigenous silent presence practices)
3. Somatic co-regulation research: Polyvagal theory (Porges), applications
   (Deb Dana), how nervous systems connect without words.
4. Younger-onset dignity preservation: how is this different from late-life
   care? The father is PHYSICALLY CAPABLE. He still carries identity from
   work, role, capability. What does dignity-preservation look like for a
   still-vital body whose cognition is shifting?
5. Sensory anchoring practices across traditions: sound, water, touch, scent,
   movement, breath. What works when narrative fails?
6. Implications for THIS family: what does the research suggest specifically
   for supervised visits with young kids, where the father wants to be PRESENT
   with his children but complex memory tasks overwhelm him?
7. Annotated bibliography.

LENGTH: 2,500-4,000 words.

DELIVERABLE: Full markdown chapter with headings, citations, bibliography.
No fabricated sources.
```

- [ ] **Step 2: Verify output against acceptance criteria**

- [ ] 2,500-4,000 words
- [ ] Kitwood, Feil, Snoezelen, Sacks cited
- [ ] Recent (2015+) clinical review included
- [ ] At least 6 contemplative traditions represented
- [ ] Polyvagal / somatic co-regulation research present
- [ ] Younger-onset dignity section distinct from late-life framing
- [ ] Sensory anchoring across traditions covered
- [ ] Implications-for-this-family concrete
- [ ] Bibliography complete

- [ ] **Step 3: Save to disk**

Save to `examples/family-nexus-healing/phase-a/research/thread-3-presence-without-memory.md`.

- [ ] **Step 4: Commit**

```bash
git add examples/family-nexus-healing/phase-a/research/thread-3-presence-without-memory.md
git commit -m "feat(family-nexus): add research thread 3 — presence without memory

Dementia-care research (Kitwood, Feil, Sacks) with contemplative traditions
of presence-over-narrative (Zen, Dzogchen, Quaker, Sufi) and somatic co-
regulation. Younger-onset dignity framing for still-vital body. Part of
Phase A synthesis.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Research Thread 4 — The Mother's Container

**Files:**
- Create: `examples/family-nexus-healing/phase-a/research/thread-4-mothers-container.md`

**Agents (composite brief):** Community Facilitator + Contemplative Guide + Traditions Scholar perspectives.

**Acceptance criteria:**
- Caregiver burden research cited, with specific attention to YOUNG caregivers (under 50)
- Peer isolation research for young caregivers (their peers likely have healthy partners — named explicitly)
- Traditions of the held-holder: Shekhinah, Guan Yin, Mary, Ubuntu, Sangha, *tzara'at* community care, at least 2 more
- Boundary/container practices: Mussar, Ignatian Examen, Kneipp water reset, contemplative practices
- Grief-windows concept: scheduled grief vs. 24/7 grief mode, with research support
- Chapter length: 2,500–4,000 words

- [ ] **Step 1: Dispatch research subagent for Thread 4**

Use the Agent tool with subagent_type "general-purpose". Prompt:

```
You are dispatched as Research Thread 4 of the Family Nexus Healing project.
Your job: produce a ~3,000-word research chapter on "The Mother's Container:
Carrying Without Collapsing" for a mother under 50 holding two young children
whose father is undergoing younger-onset progressive cognitive change.

CONTEXT: Same as prior threads. The mother is the primary holder. She is
young enough that her peer group almost certainly has no template for her
situation. Court-ordered supervised visitation is its own stress. She loves
the father, wants the best for him, but cannot live with him.

FRAMING REQUIREMENTS: Same as prior threads.

CONTENT REQUIREMENTS:
1. Caregiver burden research — with explicit YOUNG-CAREGIVER (under 50)
   specificity. Cite research on young caregivers' distinct challenges:
   peer isolation, career interruption during productive years, identity
   disruption, loneliness. Name the social invisibility of their situation.
2. Peer isolation research: social support literature, why young caregivers
   face a distinct form of isolation (their peers have healthy partners),
   and what the research says about mitigation.
3. Traditions of the "held-holder" — those who carry while being carried.
   Draw from at least 8 traditions:
   a. Shekhinah (Jewish mystical feminine divine presence)
   b. Guan Yin (Buddhist compassion, "she who hears the cries")
   c. Mary / Theotokos (Christian mother of sorrows, Pietà)
   d. Ubuntu (African philosophy of interdependence)
   e. Sangha (Buddhist community of practice)
   f. Hebrew *tzara'at* community care (communal response to affliction)
   g. Grandmother-keeper traditions (Indigenous, matriarchal lineages)
   h. At least one more tradition representing the held-holder archetype
4. Boundary and self-care practices across traditions:
   a. Mussar (Jewish ethical self-cultivation)
   b. Ignatian Examen (daily review of consolations and desolations)
   c. Kneipp water therapy (short resets via cold water)
   d. Contemplative silence as container
5. The "grief windows" concept: research on scheduled grief vs. always-on
   grief. Support the idea that the mother should NOT be in grief mode 24/7
   but should have permission to schedule it. Cite boundaries research,
   dual-process model of coping with bereavement (Stroebe & Schut).
6. Implications for THIS family: what practices would specifically support
   a young mother holding this load?
7. Annotated bibliography.

LENGTH: 2,500-4,000 words.

DELIVERABLE: Full markdown chapter. Same rules on no fabrication.
```

- [ ] **Step 2: Verify output against acceptance criteria**

- [ ] 2,500-4,000 words
- [ ] Young-caregiver specific research (not just general caregiver burden)
- [ ] Peer isolation section present
- [ ] 8+ held-holder traditions represented
- [ ] Boundary practices from multiple traditions
- [ ] Grief-windows / dual-process coping cited
- [ ] Stroebe & Schut cited
- [ ] Implications-for-this-family concrete
- [ ] Bibliography complete

- [ ] **Step 3: Save to disk**

Save to `examples/family-nexus-healing/phase-a/research/thread-4-mothers-container.md`.

- [ ] **Step 4: Commit**

```bash
git add examples/family-nexus-healing/phase-a/research/thread-4-mothers-container.md
git commit -m "feat(family-nexus): add research thread 4 — mother's container

Young-caregiver specific research with peer isolation literature, traditions
of the held-holder (Shekhinah, Guan Yin, Mary, Ubuntu, Sangha, tzara'at), and
boundary practices (Mussar, Examen, Kneipp). Grief-windows concept grounded
in dual-process coping model. Part of Phase A synthesis.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Research Thread 5 — Supervised-Visit as Sacred Container

**Files:**
- Create: `examples/family-nexus-healing/phase-a/research/thread-5-supervised-visit-container.md`

**Agents (composite brief):** Community Facilitator + Nature Guide + Expressive Guide perspectives.

**Acceptance criteria:**
- Supervised visitation research cited (clinical, legal, child welfare perspectives)
- High-conflict custody / parental illness visitation literature
- Traditions of limited-time presence across cultures: pilgrimage visits, shiva visits, liturgical time, Japanese *ichi-go ichi-e*, at least 3 more
- Sensory and nature activities suitable for cognitive limitation AND young children AND supervision
- Explicit attention to "activities readable by a supervisor" — nothing secret
- Chapter length: 2,500–4,000 words

- [ ] **Step 1: Dispatch research subagent for Thread 5**

Use the Agent tool with subagent_type "general-purpose". Prompt:

```
You are dispatched as Research Thread 5 of the Family Nexus Healing project.
Your job: produce a ~3,000-word research chapter on "Supervised-Visit as
Sacred Container" for a father (under 50, progressive cognitive change) who
sees his young children (5, 8) only through court-ordered supervised visits.

CONTEXT: Same as prior threads. This chapter directly informs the
father-with-kids-supervised protocols in Phase B — the hardest and highest-
stakes surface in the whole project.

FRAMING REQUIREMENTS: Same as prior threads.

CONTENT REQUIREMENTS:
1. Supervised visitation research — clinical, legal, child welfare
   literature on what makes supervised visits successful vs. traumatic.
   Name the specific stressors: time pressure, observer presence, child's
   confusion about rules, parent's performance anxiety.
2. High-conflict custody and parental-illness visitation research — the
   intersection of these is under-studied; cite what exists.
3. Traditions of limited-time presence — how have humans held meaning in
   brief, structured, witnessed encounters across cultures?
   a. Pilgrimage visits (Christian, Hindu, Islamic — the visit as container)
   b. Shiva visits (Jewish structured presence with the bereaved)
   c. Liturgical time (how ritual time differs from clock time)
   d. Japanese *ichi-go ichi-e* (one time, one meeting — the tea ceremony
      principle of irreplaceable moments)
   e. Indigenous council traditions (structured witnessed presence)
   f. At least 3 more traditions (Sufi sama gatherings, Quaker visiting,
      monastic hospitality rules, etc.)
4. Sensory and nature activities that work WITH cognitive limitation, WITH
   young children's attention spans, AND WITH a supervisor present. Think:
   leaf-finding walks, stone-sorting, water-listening, shared drawing,
   simple repetitive songs. Cite research on nature-based interventions for
   dementia AND for children's emotional regulation.
5. The "readable by a supervisor" principle: nothing between the father and
   children should be secret, encoded, or require private understanding the
   supervisor can't share. This protects the father from suspicion and the
   children from being asked to keep secrets.
6. Implications for THIS family: what makes a supervised visit work? What
   destroys it? What activities carry presence without overwhelming anyone?
7. Annotated bibliography.

LENGTH: 2,500-4,000 words.

DELIVERABLE: Full markdown chapter. No fabrication.
```

- [ ] **Step 2: Verify output against acceptance criteria**

- [ ] 2,500-4,000 words
- [ ] Supervised visitation research cited
- [ ] High-conflict + parental-illness intersection addressed
- [ ] 7+ traditions of limited-time presence represented
- [ ] Nature + sensory activities appropriate for cognitive limitation + young children + supervision
- [ ] "Readable by supervisor" principle explicit
- [ ] Implications-for-this-family concrete
- [ ] Bibliography complete

- [ ] **Step 3: Save to disk**

Save to `examples/family-nexus-healing/phase-a/research/thread-5-supervised-visit-container.md`.

- [ ] **Step 4: Commit**

```bash
git add examples/family-nexus-healing/phase-a/research/thread-5-supervised-visit-container.md
git commit -m "feat(family-nexus): add research thread 5 — supervised visit container

Supervised visitation research with traditions of limited-time presence
(pilgrimage, shiva, ichi-go ichi-e, liturgical time) and sensory/nature
activities for cognitive limitation + young children + supervision.
Readable-by-supervisor principle explicit. Part of Phase A synthesis.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Research Thread 6 — Meaning-Making & Ritual Across Traditions

**Files:**
- Create: `examples/family-nexus-healing/phase-a/research/thread-6-meaning-making-ritual.md`

**Agents (composite brief):** Traditions Scholar + Cultural Reviewer perspectives.

**Acceptance criteria:**
- Ritual theory cited: Victor Turner (liminality, communitas), Arnold van Gennep (rites of passage), at least 2 more
- Diverse tradition representation: Indigenous, Jewish, Christian, Hindu, Buddhist, Islamic, secular-humanist — at least 7 total
- Explicit engagement with the ecumenical principle: how does drawing from many traditions without flattening them serve this family?
- A section on "scripts for the unscriptable" — the universal human need for ritual when meaning fails
- Chapter length: 2,500–4,000 words
- Cultural Reviewer sensitivity: no appropriation, proper attribution, acknowledgment of closed traditions where applicable

- [ ] **Step 1: Dispatch research subagent for Thread 6**

Use the Agent tool with subagent_type "general-purpose". Prompt:

```
You are dispatched as Research Thread 6 of the Family Nexus Healing project.
Your job: produce a ~3,000-word research chapter on "Meaning-Making & Ritual
Across Traditions" that grounds the ecumenical framing of the entire project.

CONTEXT: The user explicitly wants the project to draw from "best of many"
traditions so that the family can see how diverse cultures across time have
met progressive cognitive change, forced separation, and anticipatory grief.
This chapter is where that principle gets its theoretical and cultural
foundation.

FRAMING REQUIREMENTS: Same as prior threads, with one additional emphasis:
this chapter must model the ecumenical principle it describes. No tradition
privileged. No tradition flattened. Differences honored alongside
convergences.

CONTENT REQUIREMENTS:
1. Ritual theory foundation:
   a. Victor Turner — liminality, communitas, the threshold state
   b. Arnold van Gennep — rites of passage (separation, liminal, incorporation)
   c. Catherine Bell — ritual practice theory
   d. Mary Douglas — purity and danger, ritual as meaning-making
2. Diverse tradition survey (at least 7) — how each tradition offers scripts
   for the unscriptable situations this family faces:
   a. Indigenous traditions (name specific lineages; note closed vs open)
   b. Jewish tradition (structured mourning, mi sheberach prayers, psalms
      of lament, the Amidah, Shabbat as container)
   c. Christian tradition (liturgical time, Advent waiting, Stations of
      the Cross as walking-with-suffering, Pietà imagery)
   d. Hindu tradition (samskaras, Bhagavad Gita on action without
      attachment to fruits, moksha practices for the dying)
   e. Buddhist tradition (impermanence teachings, metta for the suffering,
      Bardo Thodol for the transitioning)
   f. Islamic tradition (prayer structure as container, patience (sabr),
      du'a for difficulty, Sufi dhikr)
   g. Secular-humanist approaches (logotherapy / Frankl, meaning-making
      without theism, secular ritual design)
3. The "scripts for the unscriptable" universal: why do all human cultures
   develop ritual containers for impossible situations? Cite ritual studies
   and anthropology of religion on this convergence.
4. The ecumenical framing itself as therapeutic — how does showing a family
   that they are not alone, not without precedent, across traditions, itself
   offer healing? Cite narrative medicine, meaning-making literature.
5. Points of divergence to honor: where traditions DISAGREE about how to
   meet these situations, do NOT flatten the disagreement. Document it.
6. A warning section on appropriation risks: what traditions would this
   project be wrong to draw from without proper lineage representation?
   What is closed, what is open, how do we know the difference?
7. Implications for THIS family: how should the protocols kit and app draw
   from many traditions without any single one dominating? How should
   content be presented so the family can recognize the universality
   without feeling pressured toward any one tradition?
8. Annotated bibliography.

LENGTH: 2,500-4,000 words.

DELIVERABLE: Full markdown chapter. No fabrication. Extra care on cultural
accuracy — if unsure about a tradition's specifics, flag [verification
needed] rather than guess.
```

- [ ] **Step 2: Verify output against acceptance criteria**

- [ ] 2,500-4,000 words
- [ ] Turner, van Gennep cited plus 2+ more ritual theorists
- [ ] 7+ traditions represented with specificity
- [ ] Scripts-for-the-unscriptable section present
- [ ] Ecumenical-framing-as-therapeutic section present
- [ ] Divergences honored, not flattened
- [ ] Appropriation warning section present
- [ ] Implications-for-this-family concrete
- [ ] Bibliography complete

- [ ] **Step 3: Save to disk**

Save to `examples/family-nexus-healing/phase-a/research/thread-6-meaning-making-ritual.md`.

- [ ] **Step 4: Commit**

```bash
git add examples/family-nexus-healing/phase-a/research/thread-6-meaning-making-ritual.md
git commit -m "feat(family-nexus): add research thread 6 — meaning-making & ritual

Ritual theory foundation (Turner, van Gennep, Bell, Douglas) with 7+
traditions on scripts-for-the-unscriptable, ecumenical framing as
therapeutic, and appropriation warnings. Part of Phase A synthesis.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 8: Consolidate Six Threads Into Unified Synthesis

**Files:**
- Create: `examples/family-nexus-healing/phase-a/phase-a-synthesis.md`

This task is performed BY THE ORCHESTRATOR (not dispatched as a subagent) because it requires holding all six chapters in context and producing a unified voice.

**Acceptance criteria:**
- Includes all six required sections from the spec §3.2:
  1. Framing & ethical scaffolding
  2. The universal human situation (ecumenical essay)
  3. Six theme chapters (integrated from Threads 1-6)
  4. Cross-theme pattern map
  5. Configuration matrices for the six family configurations
  6. Annotated bibliography (merged and deduplicated from all threads)
- Total length: 15,000–25,000 words
- Unified voice across all chapters (Content Writer principle applied at consolidation)
- "What this is NOT" section explicit
- Younger-onset framing present throughout, not just in one section
- All six configuration matrices complete with contraindication flags

- [ ] **Step 1: Read all six research thread files**

Read each of:
- `examples/family-nexus-healing/phase-a/research/thread-1-anticipatory-grief.md`
- `examples/family-nexus-healing/phase-a/research/thread-2-attachment-secure-base.md`
- `examples/family-nexus-healing/phase-a/research/thread-3-presence-without-memory.md`
- `examples/family-nexus-healing/phase-a/research/thread-4-mothers-container.md`
- `examples/family-nexus-healing/phase-a/research/thread-5-supervised-visit-container.md`
- `examples/family-nexus-healing/phase-a/research/thread-6-meaning-making-ritual.md`

- [ ] **Step 2: Draft Section 1 — Framing & Ethical Scaffolding**

Write directly into the synthesis file. Draw from the spec §1 (especially §1.1–1.6). Include:
- What this synthesis is and is not
- The seven healing-swarm ethics
- The ecumenical framing principle
- The younger-onset specificity statement
- The court-involvement principle
- Crisis Response framework reference (RECOGNIZE-STOP-GROUND-ASSESS-RESPOND-FOLLOW-UP)
- Explicit instruction to the reader on HOW to read this document (not a treatment plan, not a prescription)

Length: ~1,500-2,500 words.

- [ ] **Step 3: Draft Section 2 — The Universal Human Situation (Ecumenical Essay)**

This is the emotional/intellectual anchor of the entire project. It must:
- Name the three converging situations (progressive cognitive change, forced parent-child separation, anticipatory grief) as ancient human experiences
- Show how humans across time and cultures have met each
- Explicitly address younger-onset — name that early loss of a parent to cognitive change has been met in every era (plague years, war injury, young-adult stroke) even when modern clinical vocabulary is oriented to later life
- Land on "you are not alone, you are not without precedent"

Length: ~2,000-3,000 words.

- [ ] **Step 4: Integrate Threads 1-6 as Theme Chapters**

For each thread's content, integrate into the synthesis as a chapter. DO NOT simply paste the thread files — edit for:
- Unified voice (remove agent-specific framing language, adjust tone to match Section 1-2)
- Deduplication (if two threads cite the same source, reference it once; cross-link the other)
- Consistency of terminology (e.g., always "progressive cognitive change," never alternating with "dementia" in the main text)
- Flow between chapters (transition sentences, cross-references)

Each chapter should retain its core content (~2,500-3,500 words after editing for voice) but read as a chapter of one document, not six separate papers.

- [ ] **Step 5: Draft Cross-Theme Pattern Map**

Write a new section (not from any thread) that identifies:
- Patterns repeated across multiple threads (e.g., "presence over narrative," "ritual as container," "scheduled grief windows")
- Points of convergence across traditions and evidence — where do diverse sources agree?
- Points of productive divergence — where do sources offer DIFFERENT solutions that might suit different family members?
- The load-bearing practices that Phase B should prioritize

Length: ~1,500-2,500 words.

- [ ] **Step 6: Draft Configuration Matrices**

For each of the six configurations, produce a matrix section with:
- The configuration's core need (drawn from the relevant thread)
- Contraindication flags (cross-referenced to healing-swarm Contraindications DB — if the DB file is not accessible, include a note that says "Apply Contraindications DB severity flags during Phase B")
- Candidate practices (drawn from multiple threads)
- Entry / middle / deepening progression stubs (to be filled in by Phase B)

Six matrices:
1. Father alone
2. Mother alone
3. Each child alone (5yo boy, 8yo girl — two sub-matrices)
4. Mother with kids
5. Father with kids (supervised)
6. Family together (rare / future)

Length: ~2,000-3,000 words total for all matrices.

- [ ] **Step 7: Merge Annotated Bibliography**

Collect all citations from all six threads into one bibliography. Deduplicate. Organize by:
- Peer-reviewed clinical research
- Advocacy and lived-experience sources
- Traditional / wisdom sources (grouped by tradition)
- Ritual theory and meaning-making sources

Include any [verification needed] flags from the threads, consolidated at the end of the bibliography.

Length: ~1,000-2,000 words depending on thread output.

- [ ] **Step 8: Final consistency pass**

Read the full synthesis front-to-back. Check:
- Single unified voice throughout
- No contradictions between chapters
- All six configurations covered in matrices
- Framing language consistent
- Younger-onset specificity present throughout, not concentrated in one chapter
- Word count between 15,000 and 25,000

- [ ] **Step 9: Save to disk**

Save the complete synthesis as `examples/family-nexus-healing/phase-a/phase-a-synthesis.md`.

- [ ] **Step 10: Commit**

```bash
git add examples/family-nexus-healing/phase-a/phase-a-synthesis.md
git commit -m "feat(family-nexus): consolidate Phase A synthesis from 6 research threads

Unified 15-25k word synthesis coalescing anticipatory grief, attachment,
presence-without-memory, mother's container, supervised visit, and ritual
research. Includes framing, universal-situation essay, cross-theme pattern
map, 6 configuration matrices, and merged bibliography. Ready for quality
gate review.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 9: Ethics Guardian Review

**Files:**
- Create: `examples/family-nexus-healing/phase-a/quality-review/ethics-review.md`

**Acceptance criteria:**
- Review covers all 7 healing-swarm ethics
- Specific pass/fail/needs-revision verdict per ethic
- Any findings must cite specific passages in the synthesis (file + section)
- Overall gate verdict: PASS / PASS WITH REVISIONS / BLOCK

- [ ] **Step 1: Dispatch Ethics Guardian review subagent**

Use the Agent tool with subagent_type "general-purpose" (Ethics Guardian role). Prompt:

```
You are the Ethics Guardian for the Family Nexus Healing project. Your role
is to review the Phase A synthesis against the 7 healing-swarm ethics and
produce a formal review document.

READ THIS DOCUMENT:
`examples/family-nexus-healing/phase-a/phase-a-synthesis.md`

THE 7 ETHICS (each must be evaluated):
1. First, do no harm — does any content risk psychological harm to the
   family members it will eventually serve? Any practices that could
   destabilize someone in crisis?
2. Honor all traditions — is every tradition cited with proper lineage
   attribution? Is there any appropriation? Are closed traditions
   acknowledged as closed?
3. Evidence with humility — does the language avoid "will cure" and stick
   to "may help"? Are claims proportional to evidence? Are [verification
   needed] flags honored?
4. Empower, don't control — does the synthesis treat the family as
   autonomous agents? Does it prescribe or does it offer?
5. Privacy as sanctuary — does any content compromise the family's privacy
   if this document were discoverable?
6. Accessible to all — is the language accessible to a non-clinician?
   (Mother-readable with a clinician also in mind.)
7. Continuous improvement — does the synthesis leave room for iteration
   and revision based on what actually helps?

FOR EACH ETHIC:
- PASS / PASS WITH REVISIONS / NEEDS REVISION
- Cite specific passages (section + paragraph or quoted phrase)
- Specific revision requests if any

OVERALL GATE VERDICT:
- PASS — synthesis advances to Clinical Review
- PASS WITH REVISIONS — minor fixes required; document them, still advances
- BLOCK — revisions required before advancing

DELIVERABLE: A markdown review document with all of the above, saved as the
agent's output. Be specific, be rigorous, do not rubber-stamp.
```

- [ ] **Step 2: Save review to disk**

Save output as `examples/family-nexus-healing/phase-a/quality-review/ethics-review.md`.

- [ ] **Step 3: Apply any required revisions**

If verdict is PASS WITH REVISIONS or BLOCK, apply the revisions to `phase-a-synthesis.md` and note the revisions in the review file as "applied" with date. Re-verify against the specific findings.

- [ ] **Step 4: Commit**

```bash
git add examples/family-nexus-healing/phase-a/quality-review/ethics-review.md examples/family-nexus-healing/phase-a/phase-a-synthesis.md
git commit -m "feat(family-nexus): Phase A ethics review with any revisions applied

Ethics Guardian review of Phase A synthesis against 7 healing-swarm ethics.
[Include verdict in commit body: PASS / PASS WITH REVISIONS / BLOCK]

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 10: Clinical Reviewer Pass

**Files:**
- Create: `examples/family-nexus-healing/phase-a/quality-review/clinical-review.md`

**Acceptance criteria:**
- Every clinical claim in the synthesis verified against its citation
- Any unverifiable claim flagged for removal or clarification
- Younger-onset framing accuracy verified (literature exists, claims are accurate)
- Contraindication flags in configuration matrices cross-checked
- Clinical-language-not-posing-as-treatment verified
- Overall gate verdict: PASS / PASS WITH REVISIONS / BLOCK

- [ ] **Step 1: Dispatch Clinical Reviewer subagent**

Use Agent tool, subagent_type "general-purpose" (Clinical Reviewer role). Prompt:

```
You are the Clinical Reviewer for the Family Nexus Healing project. Your
role is to verify clinical accuracy and safety of the Phase A synthesis.

READ THIS DOCUMENT:
`examples/family-nexus-healing/phase-a/phase-a-synthesis.md`

YOUR TASKS:

1. CITATION VERIFICATION: For every clinical claim (peer-reviewed research,
   clinical framework, named theory), verify that:
   - The citation exists (author, year, journal or book)
   - The claim accurately represents the source's finding
   - The claim is proportional (not overstated)
   Flag any citation that cannot be verified as [UNVERIFIED - needs check]
   with a specific note.

2. YOUNGER-ONSET FRAMING: The synthesis makes claims about younger-onset
   (pre-65, specifically under-50) dementia and caregiver situations.
   Verify:
   - The younger-onset literature cited is real and accurately represented
   - Claims about younger-caregiver isolation are supported
   - Dementia-care research is appropriately adapted or flagged as
     adaptation from late-life literature

3. CONTRAINDICATION FLAGS: The configuration matrices should include
   contraindication flags for each configuration. Verify that:
   - Flags are present for each configuration
   - Flags are clinically appropriate (no missing red flags)
   - Any safety-critical situation is named (e.g., a child showing
     regression, the father showing agitation during a practice, the
     mother at risk of crisis)

4. CLINICAL-LANGUAGE-NOT-POSING-AS-TREATMENT: Scan for any language that
   could be read as a treatment recommendation. The synthesis should be
   supportive material complementing professional care, NOT prescribing.
   Flag any "prescribe / treat / cure / diagnose" language that shouldn't
   be there.

5. CRISIS RESPONSE INTEGRATION: Verify that the synthesis references the
   healing-swarm Crisis Response framework and that crisis paths are clear
   (988, local crisis lines, the existing care team).

DELIVERABLE: A markdown review document with:
- Summary verdict: PASS / PASS WITH REVISIONS / BLOCK
- Citation verification log (passed, unverifiable, needs correction)
- Younger-onset framing assessment
- Contraindication completeness check
- Treatment-language scan results
- Crisis response integration check
- Specific revision requests with file locations

Be rigorous. This document will inform protocols used by a real family.
```

- [ ] **Step 2: Save review to disk**

Save as `examples/family-nexus-healing/phase-a/quality-review/clinical-review.md`.

- [ ] **Step 3: Apply required revisions**

If revisions required, apply them to `phase-a-synthesis.md` and note in review file.

- [ ] **Step 4: Commit**

```bash
git add examples/family-nexus-healing/phase-a/quality-review/clinical-review.md examples/family-nexus-healing/phase-a/phase-a-synthesis.md
git commit -m "feat(family-nexus): Phase A clinical review with any revisions applied

Clinical Reviewer pass on citations, younger-onset framing, contraindication
flags, treatment-language, and crisis response integration.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 11: Cultural Reviewer Pass

**Files:**
- Create: `examples/family-nexus-healing/phase-a/quality-review/cultural-review.md`

**Acceptance criteria:**
- Every tradition cited in the synthesis verified for:
  - Accurate representation of the tradition's actual teachings/practices
  - Proper lineage attribution
  - Not closed to outsiders (if closed, acknowledged)
  - Not appropriated (not extracted from context, not commercialized)
- Ecumenical balance verified — no single tradition dominates
- Points of divergence honored, not flattened
- Overall gate verdict: PASS / PASS WITH REVISIONS / BLOCK

- [ ] **Step 1: Dispatch Cultural Reviewer subagent**

Use Agent tool, subagent_type "general-purpose" (Cultural Reviewer role). Prompt:

```
You are the Cultural Reviewer for the Family Nexus Healing project. Your
role is to verify that every tradition referenced in the Phase A synthesis
is represented accurately, attributed properly, and honored rather than
appropriated.

READ THIS DOCUMENT:
`examples/family-nexus-healing/phase-a/phase-a-synthesis.md`

YOUR TASKS:

1. TRADITION-BY-TRADITION VERIFICATION: For every tradition mentioned,
   check:
   a. Accuracy — does the description match the tradition's actual
      teachings and practices?
   b. Attribution — is the lineage named (e.g., "the Jewish tradition of
      mourning" with specific reference; "Guan Yin in the Mahayana
      Buddhist tradition" rather than generic "Buddhism says")?
   c. Openness — is this tradition open to outsiders drawing from it, or
      is it closed (e.g., many Indigenous ceremonial practices are closed
      to non-members)?
   d. Appropriation risk — is the tradition being extracted from its
      context, stripped of meaning, commodified?

2. ECUMENICAL BALANCE: Does any single tradition dominate the synthesis?
   The explicit principle is "best of many" — no single tradition should
   be privileged as THE answer. Count approximate coverage per tradition.

3. DIVERGENCE HONORING: Where traditions DISAGREE about how to meet these
   situations (e.g., different views on the afterlife, different mourning
   timelines, different relationships to grief), does the synthesis
   acknowledge the disagreement or does it flatten them into false
   consensus?

4. LANGUAGE SENSITIVITY: Are terms from other languages transliterated
   correctly? Are religious/spiritual terms used with appropriate
   reverence?

5. CLOSED-TRADITION WARNINGS: If any closed tradition is mentioned, is
   there an explicit note that the tradition is closed and this project
   does not claim to teach or transmit it?

DELIVERABLE: A markdown review document with:
- Summary verdict: PASS / PASS WITH REVISIONS / BLOCK
- Tradition-by-tradition verification log
- Ecumenical balance assessment (approximate coverage per tradition)
- Divergence-honoring assessment
- Language sensitivity notes
- Closed-tradition warning verification
- Specific revision requests with file locations

Be rigorous. Appropriation is one of the ways a healing project causes harm.
```

- [ ] **Step 2: Save review to disk**

Save as `examples/family-nexus-healing/phase-a/quality-review/cultural-review.md`.

- [ ] **Step 3: Apply required revisions**

If revisions required, apply them to `phase-a-synthesis.md` and note in review file.

- [ ] **Step 4: Commit**

```bash
git add examples/family-nexus-healing/phase-a/quality-review/cultural-review.md examples/family-nexus-healing/phase-a/phase-a-synthesis.md
git commit -m "feat(family-nexus): Phase A cultural review with any revisions applied

Cultural Reviewer verification of tradition accuracy, attribution, openness,
ecumenical balance, and divergence honoring.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 12: Final Phase A Gate Verdict

**Files:**
- Modify: `examples/family-nexus-healing/phase-a/phase-a-synthesis.md` (add gate verdict metadata)

**Acceptance criteria:**
- All three review files exist and are PASS or PASS WITH REVISIONS
- Any revisions have been applied
- Synthesis has a "Phase A Gate Verdict" footer documenting the three reviews and their final verdicts

- [ ] **Step 1: Read all three review files**

Confirm:
- `quality-review/ethics-review.md` exists and verdict is PASS
- `quality-review/clinical-review.md` exists and verdict is PASS
- `quality-review/cultural-review.md` exists and verdict is PASS

If any verdict is BLOCK: STOP. Do not proceed. Return to the relevant thread or consolidation task and revise. Re-run the blocking reviewer.

- [ ] **Step 2: Add gate verdict footer to synthesis**

Append to `phase-a-synthesis.md`:

```markdown
---

## Phase A Gate Verdict

| Reviewer | Verdict | Review Document |
|---|---|---|
| Ethics Guardian | [PASS / PASS WITH REVISIONS] | `quality-review/ethics-review.md` |
| Clinical Reviewer | [PASS / PASS WITH REVISIONS] | `quality-review/clinical-review.md` |
| Cultural Reviewer | [PASS / PASS WITH REVISIONS] | `quality-review/cultural-review.md` |

**Gate: PASSED on [date]**

Phase A synthesis is the source of truth for Phase B (protocols kit) and
Phase C (web application). Revisions after this point require re-running
the appropriate review(s).
```

Fill in the actual verdicts from the review files.

- [ ] **Step 3: Commit**

```bash
git add examples/family-nexus-healing/phase-a/phase-a-synthesis.md
git commit -m "feat(family-nexus): Phase A gate PASSED

Phase A synthesis has passed Ethics Guardian, Clinical Reviewer, and
Cultural Reviewer reviews. Synthesis is the source of truth for Phases
B and C. Ready to write Phase B implementation plan.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Self-Review (run after writing this plan)

### Spec coverage

Spec §3 (Phase A):
- ✅ §3.1 Purpose — covered by Task 8 output
- ✅ §3.2 Output artifact (6 required sections) — covered by Task 8 steps 2-7
- ✅ §3.3 Six parallel research threads — covered by Tasks 2-7
- ✅ §3.4 Agent roster — covered by task agent specifications
- ✅ §3.5 Quality gate (A → B) — covered by Tasks 9-12

Spec §1 (Framing & Ethics):
- ✅ §1.1 "What this project is" — in Task 1 README and Task 8 Section 1
- ✅ §1.2 "What this project is not" — in Task 1 README and Task 8 Section 1
- ✅ §1.3 Ethical guardrails — in Task 9 review
- ✅ §1.4 Ecumenical framing — in Task 7 and Task 8 Section 2
- ✅ §1.5 Younger-onset specificity — in all research threads
- ✅ §1.6 Court-involvement principle — in Task 1 README and Task 6 thread

### Placeholder scan

Searched for: TBD, TODO, "implement later," "add appropriate," "similar to,"
"handle edge cases."

Found zero. All research thread acceptance criteria are specific. All
subagent prompts are complete. All commit messages are specified.

One intentional deferral is the actual research content — each thread task
specifies exactly what the research subagent must produce, and the
orchestrator verifies against criteria. This is not a placeholder; it is
the correct level of specification for a research task that cannot be
pre-written.

### Type consistency

N/A — this phase produces prose, not code. Terminology consistency is
enforced by Task 8 Step 4 ("Consistency of terminology") and Task 8 Step 8
("Final consistency pass").

### Conclusion

Plan is ready for execution. Execution method: inline (we are AFK-authorized
to proceed without per-task human review) using `superpowers:executing-plans`
or `superpowers:subagent-driven-development`.
