# Comprehensive Review: Healing Swarm Skills
## February 2026

> A thorough assessment of the current healing-swarm-skills repository with
> recommendations for improvements to existing content and proposals for new,
> novel healing skill sections.

---

## Executive Summary

The Healing Swarm Skills repository is a remarkably well-architected system. Its ethics-first design, multi-agent quality gates, and cultural sensitivity framework set a high standard. The existing coverage of breathwork (WHM), consciousness research (Grinberg), language awareness (cognitive deautomatization), and traditional healing systems (TCM, Vedic, Jewish mystical, Western esoteric) provides a strong foundation.

This review identifies **12 areas for improvement** in existing content and proposes **10 new skill sections** that would significantly expand the healing ecosystem while maintaining the project's ethical rigor.

---

## PART I: AREAS FOR IMPROVEMENT

### 1. Sound and Vibratory Healing — Currently Absent Despite Cross-References

**Issue:** The terminology cross-reference table mentions "Mantra," "Psalm/prayer," and "Chant" as sound healing parallels, but there is no dedicated skill, agent, template, or example for sound-based healing practices.

**Impact:** Sound healing is one of the most evidence-supported complementary modalities (vagal tone stimulation via humming, binaural beat research, chanting and HRV) and spans virtually every tradition covered. Its absence is a significant gap.

**Recommendation:**
- Add a `sound-healing-guide` agent under `content/`
- Create `/sound-healing` skill with traditions-scholar + clinical-researcher integration
- Add `content/templates/sound-protocol.md` template
- Cover: mantra (Vedic), Psalm chanting (Jewish), toning/overtone (Western), singing bowl (Tibetan), icaros (Indigenous — with closed practice boundaries)

---

### 2. Movement and Somatic Practice — Underrepresented

**Issue:** The terminology standards mention "mindful movement" and "embodied practice" as preferred terms, and the traditions-scholar covers qigong/yoga in its scope, but there are no dedicated movement skills, no movement coach agent, and no component specifications for movement guidance UI.

**Impact:** Tai chi, qigong, yoga asana, walking meditation, and somatic experiencing are among the most heavily researched complementary practices. Multiple meta-analyses support their efficacy for pain, anxiety, and rehabilitation.

**Recommendation:**
- Add a `movement-guide` agent
- Create `/movement-practice` skill (qigong, tai chi, gentle yoga, walking meditation)
- Add `build/components/movement-guide.md` component spec for pose/movement instruction UI
- Consider integration with the existing breathwork coach for breath-synchronized movement

---

### 3. Internationalization Framework — Entirely Missing

**Issue:** All content, templates, UI text, and documentation are English-only. The terminology.md file includes original scripts (Chinese, Sanskrit, Hebrew) but there is no i18n framework for delivering healing content in other languages.

**Impact:** The project's stated mission of "accessible to all" is undermined when content is limited to English speakers. Many healing traditions are best expressed in their source languages.

**Recommendation:**
- Add an `i18n/` directory under `shared/` with locale configuration
- Define a translation workflow in the manifest
- Prioritize: Spanish (Grinberg's work originated in Mexico), Hebrew (Jewish mystical), Hindi/Sanskrit (Vedic), Mandarin (TCM)
- Add a `translator` agent or translation quality gate

---

### 4. Outcome Measurement Framework — No Feedback Loop

**Issue:** The quality gates system is robust for content creation and deployment, but there is no framework for measuring whether practices actually help users. No outcome tracking templates, no self-assessment instruments, no before/after measurement guidance.

**Impact:** Without outcome measurement, the system cannot learn, improve, or honestly report effectiveness. The ethics framework emphasizes "continuous improvement" but has no data pathway for it.

**Recommendation:**
- Add a `shared/outcome-measurement.md` resource defining validated self-report instruments (VAS pain, PHQ-9 mood, PSQI sleep, PSS stress)
- Create an `outcome-tracker` component specification under `build/components/`
- Add a `/healing-outcomes` skill for generating practice-specific outcome measures
- Privacy-first: all measurement stays local, per ADR-002

---

### 5. Cross-Skill Integration and Practice Pathways — Skills Are Siloed

**Issue:** Each skill operates independently. There is no mechanism for recommending related practices, building multi-modality healing programs, or creating personalized practice sequences that combine breathwork + meditation + movement + sound.

**Impact:** Healing traditions themselves are integrative — TCM treats the whole person, Ayurveda prescribes diet + herbs + yoga + meditation together. Siloed skills fragment what should be holistic.

**Recommendation:**
- Add a `shared/practice-pathways.md` resource defining skill relationships and recommended progressions
- Create a `/healing-pathway` skill that generates personalized multi-skill sequences
- Add pathway metadata to each skill in `manifest.yaml` (e.g., `related_skills`, `prerequisites`, `complements`)
- The swarm-conductor could leverage this for more intelligent orchestration

---

### 6. Emergency and Crisis Response Protocols — Underdeveloped

**Issue:** The ethics guardrails mention crisis resources (988 Lifeline) and escalation triggers, but there is no structured crisis response protocol, no first-aid-for-healing-reactions template, and no dedicated handling for adverse practice effects (e.g., kundalini emergence, meditation-induced distress, hyperventilation from breathwork).

**Impact:** The WHM breathwork skill carries real physiological risk (syncope, hyperventilation). The consciousness/orbital skills involve transpersonal states. A dedicated crisis response framework is essential for user safety.

**Recommendation:**
- Add `shared/crisis-response.md` with structured protocols for common adverse reactions
- Create specific adverse-reaction sections in breathwork, cold-exposure, and consciousness skill templates
- Add a `crisis-responder` quality gate that validates adequate safety scaffolding
- Include tradition-specific crisis frameworks (e.g., "spiritual emergency" per Grof, kundalini syndrome protocols)

---

### 7. Seasonal, Circadian, and Temporal Healing — Absent

**Issue:** TCM has elaborate seasonal practice frameworks (Five Elements seasonal theory, shichen/two-hour organ clock). Ayurveda has dinacharya (daily routine) and ritucharya (seasonal regimen). These temporal dimensions of healing are completely absent.

**Impact:** Time-based healing is deeply embedded in the traditions the project claims to serve. Ignoring it strips a fundamental dimension from these systems.

**Recommendation:**
- Add temporal metadata to practice templates: `optimal_time`, `season`, `circadian_phase`
- Create a `/seasonal-healing` skill with TCM Five Elements seasonal mapping and Ayurvedic ritucharya
- Add circadian awareness to the breathwork and meditation skills (morning energizing vs. evening calming protocols)
- The orbital-architect could leverage temporal data for multi-day journey timing

---

### 8. Herbalism and Dietary Healing — Major Traditions Omitted

**Issue:** Both TCM and Ayurveda are as much herbal/dietary systems as they are energetic/meditative systems. The traditions-scholar agent mentions "herbalism" in its TCM scope but no skill, template, or example addresses herbal or dietary healing.

**Impact:** This is a significant scope gap. However, herbalism carries higher safety risk (drug interactions, allergies, contamination) than the currently covered modalities.

**Recommendation:**
- Create a `/healing-herbs` research skill (informational only, NOT prescriptive)
- Add strict ethics guardrails: never recommend specific herbs/doses, always defer to qualified herbalist/practitioner
- Focus on education and tradition documentation rather than protocols
- Add a `dietary-healing` research skill covering TCM food therapy and Ayurvedic dietary principles
- This area requires the most stringent ethics review of any proposed addition

---

### 9. Changelog and Version History — No Tracking

**Issue:** The manifest declares version 1.0.0, but there is no CHANGELOG.md, no version history, and no migration documentation for skill updates.

**Recommendation:**
- Add `CHANGELOG.md` at project root following Keep a Changelog format
- Add version metadata to individual skills in the manifest
- Document backward compatibility expectations in a new ADR

---

### 10. Agent Prompt Testing — No Automated Quality for Prompts

**Issue:** The `scripts/lint-prompts.js` script lints prompts for structural compliance, but there is no mechanism for testing agent behavior — verifying that agents actually follow ethics guardrails, use correct terminology, or produce output matching templates.

**Recommendation:**
- Add golden-file tests: input scenarios with expected outputs for each agent
- Create a `tests/agents/` directory with scenario-based test fixtures
- Add a `/test-agent` skill for manual agent behavior verification
- Consider adding a regression test for each ethics guardrail violation type

---

### 11. Grief, Loss, and End-of-Life Healing — Sensitive but Important Gap

**Issue:** The ethics framework mentions "grieving" users as potentially vulnerable, but there is no content addressing grief, loss, bereavement, or end-of-life spiritual care. Every healing tradition has deep wisdom in this area.

**Impact:** Users seeking healing are often processing loss — of health, mobility, relationships, or loved ones. Grief-informed content would serve a significant portion of the target audience.

**Recommendation:**
- Address in Part II below as a proposed new skill section with appropriate sensitivity framing

---

### 12. Design Token Completeness — Missing States

**Issue:** The `design-tokens.json` file defines a comprehensive visual system but lacks certain healing-context-specific states: loading states for timed practices (breathwork countdown), transition states between practice phases, completion/celebration states, and error/warning states specific to healing contexts (e.g., "practice paused for safety").

**Recommendation:**
- Add `practice-states` token group: `active`, `paused`, `transitioning`, `completing`, `safety-pause`
- Add `timer-states` for breathwork/meditation: `inhale`, `hold`, `exhale`, `retention`, `recovery`
- Add celebration/completion tokens (subtle, not gamified — aligned with voice guide)

---

## PART II: PROPOSED NEW SKILL SECTIONS

### NEW SECTION 1: Sound and Vibratory Healing (`/sound-healing`)

**Uniqueness:** Bridges vocal neuroscience (vagal tone via humming, laryngeal nerve stimulation) with ancient mantra/chanting traditions across every culture.

**Skills to add:**
- `/sound-healing` — Guided vocal toning, mantra, and chanting protocols
- `/sound-research` — Evidence review for sound-based interventions

**New agent:** `sound-healing-guide`

**Traditions covered:**
- Vedic mantra (Om, Gayatri, bija mantras) — documented c. 1500 BCE
- Jewish Psalm chanting and niggun (wordless melody) — medieval Hasidic tradition
- Gregorian chant and Christian contemplative singing — 6th century CE
- Tibetan singing bowl and overtone chanting — documented practice
- Humming and toning — modern vagal tone research (Kalyani et al., 2011)

**Evidence base:**
- Vagus nerve stimulation via humming (moderate evidence)
- Binaural beats and brainwave entrainment (preliminary evidence)
- Group chanting and oxytocin release (preliminary evidence)
- Music therapy for pain and anxiety (strong evidence via Cochrane reviews)

**Template:** `content/templates/sound-protocol.md`

**Component:** `build/components/sound-guide.md` (audio playback, pitch matching, rhythm visualization)

**Ethics considerations:**
- Some mantras are initiatory/closed (require proper lineage transmission)
- Sacred songs from Indigenous traditions are generally closed
- Sound sensitivity in trauma populations (provide volume controls, exit ramps)

---

### NEW SECTION 2: Somatic and Movement Healing (`/somatic-healing`)

**Uniqueness:** Positions the body as primary intelligence in healing, integrating traditional movement forms with modern somatic therapy research (polyvagal theory, somatic experiencing).

**Skills to add:**
- `/somatic-practice` — Guided gentle movement protocols (qigong, tai chi, yoga nidra, body scan)
- `/walking-meditation` — Mindful movement for those who cannot sit
- `/somatic-research` — Evidence review for body-based interventions

**New agent:** `somatic-guide`

**Traditions covered:**
- Qigong (TCM movement practice) — documented since 300 BCE
- Tai chi chuan — documented since 16th century
- Yoga asana (Vedic/Hatha tradition) — documented since c. 500 CE
- Kinhin (Zen walking meditation) — Japanese Zen tradition
- Feldenkrais/Alexander Technique — modern Western somatic traditions

**Evidence base:**
- Tai chi for balance, falls prevention, chronic pain (strong evidence)
- Yoga for anxiety, depression, back pain (strong evidence via multiple meta-analyses)
- Body scan/yoga nidra for insomnia and stress (moderate evidence)
- Polyvagal theory and somatic regulation (theoretical framework with growing clinical support)

**Component:** `build/components/movement-guide.md` (pose illustration, sequence timer, modification options)

**Ethics considerations:**
- Yoga's commercialization and cultural appropriation (strong attribution needed)
- Physical injury risk (modifications for all levels, contraindication warnings)
- Seated/wheelchair alternatives for all practices

---

### NEW SECTION 3: Dream and Sleep Healing (`/sleep-healing`)

**Uniqueness:** No major healing skills platform addresses the one-third of life spent sleeping. Bridges ancient dream temple practices with modern sleep hygiene research and lucid dreaming science.

**Skills to add:**
- `/sleep-healing` — Evening wind-down protocols, sleep hygiene practices, bedtime meditations
- `/dream-practice` — Dream journaling, lucid dreaming introduction, dream incubation
- `/sleep-research` — Evidence review for sleep-related healing interventions

**New agent:** `sleep-healing-guide`

**Traditions covered:**
- Asclepian dream temples (Greek, c. 500 BCE) — incubation healing
- Tibetan dream yoga (Naropa's Six Yogas, c. 11th century)
- TCM sleep theory (organ clock, liver-blood-sleep relationship)
- Ayurvedic sleep protocols (warm milk/herbs, oiling feet, dinacharya)
- Jewish dream interpretation traditions (Talmud Berakhot 55a-57b)

**Evidence base:**
- Sleep hygiene interventions for insomnia (strong evidence)
- CBT-I components adapted as self-guided practices (strong evidence)
- Yoga nidra for sleep quality (moderate evidence)
- Lucid dreaming for nightmare resolution (preliminary evidence)
- Dream journaling for emotional processing (preliminary evidence)

**Template:** `content/templates/sleep-protocol.md`

**Component:** `build/components/sleep-timer.md` (gradual dimming, audio fade, gentle wake)

**Ethics considerations:**
- Never replace insomnia treatment (refer to CBT-I providers)
- Dream interpretation is subjective — no authoritative claims
- Lucid dreaming practices contraindicated in dissociative disorders
- Screen-based app paradox: blue light and sleep — address with dark mode, auto-shutoff

---

### NEW SECTION 4: Nature-Based Healing (`/nature-healing`)

**Uniqueness:** Connects the growing shinrin-yoku (forest bathing) evidence base with ancestral land-based healing traditions and modern ecotherapy.

**Skills to add:**
- `/nature-healing` — Structured nature connection practices (forest bathing, earthing, sky gazing)
- `/nature-research` — Evidence review for nature-based health interventions

**New agent:** `nature-guide`

**Traditions covered:**
- Shinrin-yoku (Japanese forest bathing) — formalized 1982, rooted in older Shinto nature reverence
- Earthing/grounding — cross-cultural practice, modern research since 2004
- Vision quest (Indigenous — respectful reference only, closed practice)
- Garden therapy (monastic healing gardens, medieval European)
- Five Element nature observation (TCM seasonal attunement)

**Evidence base:**
- Forest bathing and cortisol reduction, NK cell activity (moderate to strong evidence, 60+ studies)
- Green space exposure and mental health outcomes (strong epidemiological evidence)
- Earthing and inflammation markers (preliminary evidence, limited RCTs)
- Nature sounds and stress reduction (moderate evidence)
- Horticultural therapy for depression (moderate evidence)

**Template:** `content/templates/nature-protocol.md`

**Ethics considerations:**
- Vision quest and wilderness-based Indigenous ceremonies are closed practices
- Environmental privilege: not all users have nature access (urban alternatives needed)
- Physical safety: outdoor practice requires weather, terrain, and wildlife awareness
- Seasonal adaptation: practices must be appropriate for user's climate

---

### NEW SECTION 5: Grief and Bereavement Healing (`/grief-healing`)

**Uniqueness:** Addresses the most universal human healing need with cross-cultural depth. No existing healing skills platform treats grief with the multi-traditional sensitivity this project is built to provide.

**Skills to add:**
- `/grief-healing` — Practices for processing loss (health loss, bereavement, life transitions)
- `/grief-research` — Evidence review for grief support interventions

**New agent:** `grief-guide` (requires enhanced psychological safety training)

**Traditions covered:**
- Jewish mourning practices (shiva, shloshim, yahrzeit, Kaddish) — structured time-based grief
- Buddhist impermanence meditation (Maranasati) — contemplation of change
- Mexican Día de los Muertos — continuing bonds with deceased
- Celtic practices of keening and threshold tending
- Tibetan Bardo practices — conscious transition (educational only)

**Evidence base:**
- Grief counseling and complicated grief therapy (strong evidence)
- Continuing bonds theory vs. stage models (contemporary grief research)
- Mindfulness-based grief interventions (moderate evidence)
- Narrative/journaling approaches to bereavement (moderate evidence)
- Social support and grief outcomes (strong evidence)

**Template:** `content/templates/grief-practice.md`

**Ethics considerations (CRITICAL):**
- Highest psychological sensitivity of any proposed skill
- Must never pathologize normal grief
- Must distinguish normal grief from complicated/prolonged grief disorder (refer to professional)
- Suicidal ideation screening language required
- Cultural grief norms vary enormously — no universal "right way to grieve"
- Loss of health/ability (relevant to injury-focused users) distinct from bereavement
- Requires enhanced ethics-guardian review with grief-specific checklist

---

### NEW SECTION 6: Water and Hydrotherapy Healing (`/water-healing`)

**Uniqueness:** Extends the existing cold-exposure skill into a broader water-healing framework spanning thermal, ritual, and therapeutic water practices.

**Skills to add:**
- `/water-healing` — Therapeutic water practices (contrast therapy, ritual bathing, thermal protocols)
- `/water-research` — Evidence review for hydrotherapy interventions

**New agent:** `water-guide` (extends cold-exposure-guide scope)

**Traditions covered:**
- Mikveh (Jewish ritual immersion) — documented since Second Temple period
- Onsen/Sento (Japanese hot spring bathing) — ancient Shinto purification
- Contrast hydrotherapy (Kneipp method, 19th century German naturopathy)
- Ablution practices (Islamic wudu, Hindu snana, Christian baptismal)
- Finnish sauna tradition — UNESCO Intangible Cultural Heritage
- TCM hot/cold water therapy principles

**Evidence base:**
- Contrast water therapy for recovery and inflammation (moderate evidence)
- Hot water immersion and cardiovascular benefits (moderate evidence, Laukkanen et al.)
- Hydrotherapy for chronic pain and fibromyalgia (moderate evidence)
- Cold water immersion physiology (moderate evidence — extends existing WHM research)
- Ritual bathing and psychological wellbeing (preliminary evidence)

**Template:** `content/templates/water-protocol.md`

**Ethics considerations:**
- Drowning risk — safety warnings, never practice alone
- Cardiac risk with extreme temperatures — medical screening required
- Mikveh and baptismal practices have specific religious requirements — educational not instructional
- Accessibility: not all users have access to bodies of water

---

### NEW SECTION 7: Psychoneuroimmunology Bridge (`/pni-research`)

**Uniqueness:** Creates a dedicated research skill for the mind-body-immune axis — the scientific framework that most directly validates traditional healing claims. Currently, the mechanisms-neuroscientist touches on this, but a focused PNI skill would dramatically strengthen the evidence bridge.

**Skills to add:**
- `/pni-research` — Deep research into psychoneuroimmunology findings relevant to healing practices
- `/pni-mapping` — Map specific traditional practices to their PNI pathways

**Enhanced agent:** Extend `mechanisms-neuroscientist` scope OR create `pni-researcher` agent

**Key research domains:**
- Stress-immune axis (HPA, cortisol, cytokines)
- Vagal tone and inflammatory reflex (Tracey's cholinergic anti-inflammatory pathway)
- Meditation and telomere length (Epel/Blackburn research)
- Placebo response mechanisms (expectation, conditioning, social context)
- Wound healing and psychological state (Kiecolt-Glaser research)
- Visualization and immune function (guided imagery and NK cell activity)

**Evidence base:**
- PNI as a field has strong foundational evidence (Ader & Cohen, 1975 onward)
- Meditation and inflammatory markers (strong evidence across multiple meta-analyses)
- Stress and wound healing delay (strong evidence)
- Visualization and immune parameters (moderate evidence)
- Social connection and immune function (strong epidemiological evidence)

**Integration points:**
- Strengthens every existing skill's evidence presentation
- Provides the "why it might work" bridge for traditions-scholar findings
- Feeds directly into evidence-box template content
- Could generate automated PNI mechanism summaries for each practice

---

### NEW SECTION 8: Relational and Community Healing (`/community-healing`)

**Uniqueness:** Extends beyond the existing group-perception skill to address healing in relationship and community contexts. Recognizes that isolation is a health risk and connection is a healing resource.

**Skills to add:**
- `/community-healing` — Group healing circle protocols, shared practice frameworks
- `/relational-practice` — Dyadic practices for healing relationships (distinct from Grinberg resonance pairing)
- `/community-research` — Evidence review for social/relational healing interventions

**New agent:** `community-facilitator`

**Traditions covered:**
- Talking circles (Indigenous — reference with permission protocols)
- Mussar groups (Jewish ethical development in community)
- Sangha practice (Buddhist community meditation)
- Quaker meeting / silent worship (Western contemplative)
- Ubuntu philosophy (Southern African communal healing concept)
- 12-Step traditions (modern peer support with spiritual dimensions)

**Evidence base:**
- Social support and health outcomes (very strong evidence)
- Group therapy effectiveness (strong evidence)
- Loneliness and mortality risk (strong epidemiological evidence)
- Peer support models for chronic conditions (moderate evidence)
- Community-based participatory health approaches (moderate evidence)

**Template:** `content/templates/community-protocol.md`

**Ethics considerations:**
- Group dynamics can cause harm (scapegoating, pressure, boundary violations)
- Facilitator training requirements — these are not self-running
- Confidentiality frameworks required for group settings
- Power dynamics in community settings
- Cultural context: some communities have specific protocols for group healing that must be respected

---

### NEW SECTION 9: Creativity and Expressive Healing (`/expressive-healing`)

**Uniqueness:** Art therapy, bibliotherapy, writing-as-healing, and other creative modalities have strong evidence bases and appear in multiple traditions but are entirely absent from the current skills.

**Skills to add:**
- `/expressive-healing` — Creative healing practices (therapeutic writing, art, music making)
- `/healing-journaling` — Extended journaling protocols beyond the existing journal-prompt template
- `/expressive-research` — Evidence review for expressive/creative healing interventions

**New agent:** `expressive-guide`

**Traditions covered:**
- Bibliotherapy (reading/writing as healing) — documented since ancient Greece
- Mandala creation (Tibetan Buddhist, Jungian, Navajo sand painting — closed)
- Ikebana (Japanese flower arrangement as contemplative practice)
- Psalmody and sacred poetry composition (Jewish, Christian, Sufi)
- Journaling and expressive writing (Pennebaker method, modern evidence-based)

**Evidence base:**
- Expressive writing and health outcomes (strong evidence — Pennebaker research, 200+ studies)
- Art therapy for trauma and PTSD (moderate evidence)
- Music-making and stress biomarkers (moderate evidence)
- Bibliotherapy for depression and anxiety (moderate evidence)
- Creative engagement and immune function (preliminary evidence)

**Template:** `content/templates/expressive-protocol.md`

**Ethics considerations:**
- Creative expression can surface intense emotions — safety scaffolding needed
- No art skill required — explicitly frame as process, not product
- Mandala and sand painting from specific Indigenous traditions are closed practices
- Journal content is deeply private — strongest privacy protections apply

---

### NEW SECTION 10: Contemplative Inquiry and Self-Knowledge (`/contemplative-inquiry`)

**Uniqueness:** Bridges the language-awareness work (cognitive deautomatization) with broader contemplative questioning traditions — koan practice, self-inquiry, philosophical therapeutics. This is the most intellectually novel proposed section.

**Skills to add:**
- `/contemplative-inquiry` — Guided self-inquiry practices from multiple traditions
- `/koan-practice` — Zen koan-style contemplation adapted for healing contexts
- `/contemplative-research` — Evidence review for inquiry-based contemplative practices

**New agent:** `contemplative-guide`

**Traditions covered:**
- Zen koan practice (Rinzai tradition, 12th century) — inquiry as awakening
- Advaita Vedanta self-inquiry (Ramana Maharshi's "Who am I?", 20th century)
- Socratic questioning (Greek philosophical therapeutics, 5th century BCE)
- Ignatian Examen (Jesuit daily review, 16th century)
- Philosophical Counseling (modern application of ancient philosophy to personal distress)
- Dzogchen pointing-out instructions (Tibetan — reference only, initiatory)

**Evidence base:**
- Metacognitive therapy and cognitive defusion (strong evidence from ACT research)
- Self-inquiry and psychological flexibility (moderate evidence)
- Philosophical counseling outcomes (preliminary evidence)
- Contemplative pedagogy in healthcare settings (preliminary evidence)
- Integration with existing language-awareness deautomatization research

**Integration points:**
- Directly extends the language-awareness skill category
- Complements the consciousness/Grinberg orbital work
- Provides a bridge for users who are more intellectual than experiential
- Could be integrated into grief work and other emotionally intensive practices

**Ethics considerations:**
- Existential inquiry can precipitate existential crisis — careful scaffolding
- Koan practice traditionally requires teacher guidance — frame as "inspired by" not "authentic"
- Dzogchen pointing-out instructions are strictly closed (require empowerment from qualified teacher)
- Self-inquiry in depressive states requires screening

---

## PART III: STRUCTURAL RECOMMENDATIONS

### 1. Add Practice Difficulty Taxonomy

Currently, skills use ad-hoc level descriptors (`beginner`, `intermediate`, `advanced`). Standardize across all skills:

```yaml
difficulty:
  levels:
    - name: foundation
      description: "No experience needed. Safe entry point."
      screening: none
    - name: developing
      description: "Some practice experience. Basic body awareness."
      screening: self-assessment
    - name: established
      description: "Regular practice. Comfortable with intensity."
      screening: self-assessment + contraindication check
    - name: advanced
      description: "Extensive experience. Teacher relationship recommended."
      screening: practitioner consultation recommended
    - name: intensive
      description: "Deep practice with transpersonal dimensions."
      screening: mental health screening + practitioner guidance required
```

### 2. Add Contraindication Database

Create a shared resource mapping conditions to practice contraindications:

```
shared/contraindications.md
```

Example: pregnancy contraindicates intense breathwork, certain acupoints, extreme cold exposure. This should be a cross-referenced resource that every practice-generating agent consults.

### 3. Add User Archetype Profiles

Define user archetypes that inform practice recommendations:

- **Acute injury recovery** — physical focus, gentle practices, medical integration
- **Chronic condition management** — long-term protocols, pacing, acceptance work
- **Stress and anxiety** — parasympathetic activation, grounding, nervous system regulation
- **Spiritual seeker** — contemplative depth, tradition-specific paths, ethical guidance
- **Grief and transition** — holding practices, community, meaning-making
- **General wellness** — preventive practices, daily routines, seasonal attunement

### 4. Add a "What Changed" Gate for Content Updates

When existing approved content is modified, the current system re-runs full quality gates. Add a differential review gate that focuses only on what changed, with full re-review triggered only when changes exceed a threshold or touch ethics-sensitive sections.

### 5. Add Practitioner Integration Pathway

The current system is designed for self-guided practice. Add a framework for practitioners (yoga teachers, acupuncturists, chaplains, therapists) to use the skills professionally:

- Practitioner-specific ethics guardrails (scope of practice)
- Client intake assessment templates
- Session planning tools
- Documentation/notes templates
- Supervision/consultation recommendations

---

## PART IV: PRIORITY MATRIX

| Proposed Addition | Impact | Effort | Safety Risk | Priority |
|---|---|---|---|---|
| Sound Healing | High | Medium | Low | **P1** |
| Somatic/Movement | High | Medium | Medium | **P1** |
| Crisis Response Protocols | Critical | Low | N/A (risk reduction) | **P0** |
| Outcome Measurement | High | Medium | Low | **P1** |
| Cross-Skill Integration | High | High | Low | **P2** |
| Sleep/Dream Healing | High | Medium | Low | **P1** |
| Nature-Based Healing | Medium | Low | Low | **P2** |
| Grief/Bereavement | High | High | High | **P2** |
| Water/Hydrotherapy | Medium | Medium | Medium | **P2** |
| PNI Research Bridge | High | Medium | Low | **P1** |
| Community Healing | Medium | High | Medium | **P3** |
| Expressive/Creative | Medium | Medium | Low | **P2** |
| Contemplative Inquiry | Medium | Medium | Medium | **P3** |
| Internationalization | High | Very High | Low | **P3** |
| Contraindication Database | High | Medium | N/A (risk reduction) | **P0** |
| Difficulty Taxonomy | Medium | Low | N/A (standardization) | **P1** |

**Priority Legend:**
- **P0** — Safety infrastructure. Implement before expanding scope.
- **P1** — High-impact additions with manageable effort. Next phase.
- **P2** — Valuable additions requiring careful planning. Following phase.
- **P3** — Important but complex. Longer-term roadmap.

---

## PART V: WHAT THE REPOSITORY DOES EXCEPTIONALLY WELL

Before closing, it is worth naming what should be preserved and built upon:

1. **Ethics-first architecture** — The mandatory loading of ethics guardrails before any other context is an exemplary pattern. Every proposed addition should follow this model.

2. **Evidence honesty** — The graduated evidence language scale ("demonstrates" through "not yet understood") is more nuanced than most clinical resources. This standard should extend to all new skills.

3. **Cultural attribution framework** — The terminology standards and citation formats set a high bar for respectful engagement with healing traditions.

4. **Grinberg consciousness research coverage** — The honest, carefully framed presentation of preliminary research is a model for how to handle frontier science without hype or dismissal.

5. **Quality gate system** — The multi-agent review pipeline (ethics + clinical + cultural + accessibility) is sophisticated and should be the template for all new skill categories.

6. **Voice guide** — The five core voice qualities (compassionate, grounded, honest, empowering, reverent) provide a coherent tone that unifies diverse content.

7. **Privacy architecture** — Local-first data storage with no external transmission is the right default for sensitive healing data.

---

*"The capacity for healing is intrinsic to consciousness. These recommendations aim to extend the tools that support what life already knows how to do."*
