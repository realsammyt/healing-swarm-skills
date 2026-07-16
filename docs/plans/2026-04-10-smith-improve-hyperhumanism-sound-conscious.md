# Integrating Carl Hayden Smith's Patterns into `healing-swarm-skills`

## Executive Summary

The `healing-swarm-skills` repo already contains a meaningful first layer of Carl Hayden Smith's work — six named skills, four dedicated agents, and multiple workflows under the `HYPERHUMANISM & SOUND CONSCIOUSNESS SKILLS` category. However, the integration is incomplete in three ways: several of Smith's core theoretical patterns (Contextology, Scaffold→Remove, Consciousness Literacy as a curriculum) are not yet operationalized as reusable resources; several output files referenced by existing workflows have no corresponding template; and the cross-cutting shared resources (`terminology.md`, `practice-pathways.md`, `voice-guide.md`) do not yet reflect Smith's vocabulary and philosophical framing.[^1][^2]

This report maps what exists, identifies the specific gaps, and proposes concrete new files and modifications — organized as actionable GitHub contributions.

***

## What Already Exists

The repo's master branch includes the following Smith-derived resources:

### Agents
| Agent File | Role | Smith Concept |
|---|---|---|
| `research/hyperhumanism-researcher.md` | Literature & evidence research on Smith's framework | Hyperhumanism, endo-technologies, archaeoacoustics[^1] |
| `content/holotechnica-architect.md` | Design endo-technology experience stacks | Holotechnica (holo + technica) stacking methodology[^1] |
| `content/umwelt-facilitator.md` | Sensory augmentation and perceiving-as-other | Umwelt Hacking, perceptual frame-shifting[^1][^3] |
| `content/archaeoacoustic-guide.md` | Sacred site frequencies, vocal toning | Archaeoacoustic research, Museum of Consciousness[^1] |

### Manifest Skills (triggered via `/command`)
| Skill | Trigger | Description |
|---|---|---|
| Archaeoacoustic Toning | `/archaeoacoustic-toning` | Vocal toning at documented ancient site frequencies[^1] |
| Sound Consciousness | `/sound-consciousness` | Museum of Consciousness-style audio exhibits with Milliere 6D self-assessment[^1] |
| Holotechnica Stack | `/holotechnica-stack` | Personalized endo-technology experience stacks[^1] |
| Hyperhumanism Inquiry | `/hyperhumanism-inquiry` | 4-phase guided inquiry on technology and innate capacities[^1] |
| Umwelt Practice | `/umwelt-practice` | Sensory augmentation and perceiving-as-other exercises[^1] |
| Cyberdelic Research | `/cyberdelic-research` | Evidence review on consciousness technologies and endo-tech science[^1] |

The `hyperhumanism-researcher` agent correctly references Smith's key constructs: the distinction between Transhumanism and Hyperhumanism, endo-technology taxonomy, cyberdelics as technology-augmented (not pharmacological) consciousness exploration, and the archaeoacoustic research presented at EVA London 2023. The holotechnica architect correctly enforces the hard pharmaco-exclusion that is central to Smith's endo-technology framework.[^1]

***

## Core Smith Patterns Not Yet Fully Integrated

Smith's work contains eight recurring conceptual patterns. Their current coverage in the repo varies significantly.

### 1. Scaffold → Remove (Technology as Catalyst, Not Crutch)

**What Smith says:** "Hyperhumanism uses technology just as a catalyst for developing our own innate human abilities... you may use technology for a few weeks to learn a new skill or a new sense, but then you take the technology away and you develop that skill for yourselves."[^4]

**Current gap:** The hyperhumanism-researcher agent documents this distinction conceptually, but no workflow stage, practice template, or pathway entry encodes the *scaffold phase* → *unassisted phase* progression as a trackable arc. The `shared/practice-pathways.md` includes general practice progressions but nothing representing this specific pattern.[^1]

**Proposed addition:** A `Scaffold→Remove` pathway entry in `shared/practice-pathways.md` and a `scaffold-progression.md` template that defines: (a) the technology-supported phase, (b) the bridging phase where the tool is gradually removed, and (c) the unaided phase with outcome markers.

***

### 2. Ecology of Practices (Resilience Through Diversity)

**What Smith says:** "By generating an ecology we build in resilience and gain the potential to expand our consciousness literacy through building collectively." A single practice is insufficient; the system's robustness comes from the diversity and complementarity of its components.[^5][^1]

**Current gap:** The practice-pathways.md maps complementary pairs and sequential dependencies, but does not frame these as an *ecology* — a living, adaptive, mutually-reinforcing system rather than a linear curriculum. There is no design primitive for an ecology (minimum set + diversity rule + integration cadence).

**Proposed addition:** An `ecology-design.md` template in `content/templates/` that operationalizes: minimum viable ecology (3+ modalities, at least one somatic, one perceptual, one relational), diversity rules, and a rotation/adaptation cadence.

***

### 3. Context Engineering (Contextology)

**What Smith says:** "Context engineering becomes vital — the conditions surrounding an experience (whether AI, therapy, or psychedelics) shape 80% of its outcome. Designing contexts wisely may be one of the most important tasks of our time."[^2]

**Current gap:** This is perhaps the most significant missing pattern. Smith has developed "Contextology" as a formal framework, and it directly applies to how the swarm designs healing session environments — lighting, sound, posture priming, temporal framing, social setting, and intention-setting. No agent, workflow, or template addresses this. Context preparation is implicitly handled by individual agents but is not surfaced as a first-class design concern.[^3][^2]

**Proposed additions:**
- New agent: `content/context-engineer.md` — a specialist in designing experiential contexts before any practice begins
- New workflow: `content/context-engineering-workflow.yaml` — applies the 80% context principle as a pre-session design phase
- New manifest skill: `/context-engineering` — invokable standalone or as a prefix to any other skill
- New template: `content/templates/context-design.md` — covering setting, priming, intention, re-entry, and integration environment

***

### 4. Consciousness Literacy (Cumulative, Measurable Development)

**What Smith says:** The TEDx talk's culminating concept: practices are not discrete interventions but "build consciousness literacy" cumulatively, analogous to how reading literacy develops through progressive exposure and practice.[^5][^1]

**Current gap:** Individual skills exist for specific practices, but there is no literacy *curriculum* — no structure for tracking cumulative development across modalities, no literacy-level taxonomy, and no progression assessment. The `sound-consciousness` skill uses the Milliere 6D scale for single-session assessment, but this does not aggregate into a literacy picture.[^1]

**Proposed additions:**
- New shared resource: `shared/consciousness-literacy-levels.md` — a simple 4-level taxonomy (nascent → developing → established → embodied) applied across modality clusters
- New manifest skill: `/consciousness-audit` — a periodic check-in that reviews practice history and maps current literacy level
- Update `shared/outcome-measurement.md` — add a longitudinal consciousness literacy tracking protocol alongside the existing single-session VAS outcome measures

***

### 5. Perceptual Augmentation → Expanded Capacity (The 3-Step Model)

**What Smith says in the TEDx talk:** "Adapt to alternative points of view in order to expand our perceptual abilities → increasing our perceptual augmentation leads to our expanded capacity to be in the world." This is a three-step causal arc: novel perspective → perceptual expansion → increased world-engagement capacity.[^1]

**Current gap:** The umwelt facilitator operationalizes step 1 (novel perspective via perceiving-as-other), and the holotechnica architect targets altered traits as an outcome, but the middle mechanism — how perceptual augmentation specifically translates to expanded capacity — is not a documented pathway or assessment framework.[^1]

**Proposed addition:** A `perceptual-augmentation-tracker.md` template that maps: baseline perceptual inventory → practice → perceptual shift report → capacity-in-world markers. This bridges the umwelt and holotechnica agents.

***

### 6. Inter-being and Quantum Relationships

**What Smith says:** "Quantum relationships are those that accelerate us without always coddling our feelings. These are the relationships that illuminate, inspire, and challenge our perception of the world as we know it." The hyperhuman seeks to move from isolated individual optimization toward *inter-being* — a relational field of mutual becoming.[^6][^4]

**Current gap:** The `community-facilitator.md` and `resonance-facilitator.md` agents touch relational practice, but neither uses Smith's inter-being framing or the "quantum relationships" design principle — where a healing relationship should be challenging, not just supportive.[^1]

**Proposed addition:** A `content/templates/quantum-relationship.md` template and a corresponding update to `content/resonance-facilitator.md` — adding an inter-being orientation and a "relational challenge" dimension alongside the existing resonance-pairing design.

***

### 7. Endo-Technology Taxonomy (Explicit Inventory)

**What Smith says:** Endo-technologies are inner practices requiring no external tools: breathwork, sound, visualization, body scan, movement, silence, hypnagogic techniques, sensory foregrounding, memory palaces. These are distinct from cyberdelics (technology-augmented) and pharmaco-technologies (substance-based, hard exclusion).[^4][^2][^1]

**Current gap:** The `holotechnica-architect.md` contains a table of ingredients with evidence levels, but this lives inside a single agent file rather than as a shared canonical reference. Other agents reference endo-technologies without a single source of truth.[^1]

**Proposed addition:** A `shared/endo-technology-taxonomy.md` — a canonical, versioned inventory of all endo-technologies with: evidence level, contraindications, Smith's designation, and cross-links to the agents/templates that implement each.

***

### 8. "We May Not Yet Be Human" (Onboarding Philosophical Frame)

**What Smith says:** "We may not yet be human" — the hyperhuman frame treats human potential as an open project, not a finished product. This is described as a mantra that recurs throughout his work.[^7][^6][^4]

**Current gap:** The voice guide and individual agent personas do not incorporate this orienting frame. Healing sessions begin with practice instructions but not with an invitation to conceptualize one's own humanity as a becoming. Smith's work makes this philosophical posture the prerequisite for all the practices.[^6][^5]

**Proposed addition:** A section in `shared/voice-guide.md` — "Opening Frames: Smith's Hyperhuman Posture" — that codifies the language and framing for introducing any hyperhumanism-adjacent practice. Additionally, update the `hyperhumanism-workflow.yaml` intake stage to include a brief framing invocation using this language.

***

## Missing Templates (Output Files Referenced But Not Present)

Several existing workflows produce outputs that have no corresponding `content/templates/` file, creating a gap between workflow specification and deliverable generation:

| Referenced Output | Producing Workflow/Agent | Template Status |
|---|---|---|
| `resonance-body-map.md` | `archaeoacoustic-toning-workflow.yaml` | ❌ No template |
| `consciousness-exhibit.md` | `sound-consciousness-workflow.yaml` | ❌ No template |
| `capacity-inventory-template.md` | `hyperhumanism-workflow.yaml` | ❌ No template |
| `micro-practice-design.md` | `hyperhumanism-workflow.yaml` | ❌ No template |
| `technology-landscape.md` | `hyperhumanism-workflow.yaml` | ❌ No template |

These are blocking gaps — when an agent produces these files with no template to reference, output quality becomes agent-dependent rather than system-defined.

***

## Shared Resource Updates Required

### `shared/terminology.md`
The current terminology file thoroughly covers cross-cultural energy vocabulary and sacred geometry but contains no Smith-specific terms. The following terms should be added:[^1]

| Term | Definition | Source |
|---|---|---|
| Endo-technology | Inner practice requiring no external tool; contrasted with cyberdelics and pharmaco-tech[^4][^2] | Smith framework |
| Holotechnica | Designed stack of endo-technologies targeting altered traits; holo (whole) + technica (technique)[^8][^1] | Smith framework |
| Umwelt | The subjective perceptual world of an organism (von Uexküll 1934); "umwelt hacking" = deliberate perceptual frame-shifting[^1][^3] | Smith / von Uexküll |
| Cyberdelic | Technology-augmented consciousness exploration (VR, biofeedback, neurofeedback); explicitly non-pharmacological[^1][^4] | Smith framework |
| Altered trait | Lasting transformation of consciousness or behavior; contrasted with transient altered state[^2][^8] | Goleman & Davidson / Smith |
| Consciousness literacy | Cumulative development of capacity to navigate and assess one's own states of consciousness[^1][^5] | Smith framework |
| Inter-being | Relational state of mutual becoming; the hyperhuman's orientation beyond individual optimization[^6][^4] | Smith framework |
| Contextology | The study and design of experiential contexts; Smith's framework for context engineering[^3][^2] | Smith framework |
| Hyperhumanism | Using technology as a catalyst for innate human capacities, not their replacement; contrasted with Transhumanism[^4][^2][^9] | Smith framework |

### `shared/practice-pathways.md`
Add a new named pathway: **"Hyperhuman Cultivation Arc"** — a 12-week arc integrating: Capacity Inventory → Technology Audit → Endo-Technology Foundation → Ecology Assembly → Scaffold→Remove Progressions → Consciousness Literacy Check-in. This directly maps to the structure of Smith's hyperhumanism inquiry four-phase model.[^2][^1]

***

## New Research Example Opportunity

The existing `examples/` directory contains worked demonstrations for sound healing, somatic movement, grief, sleep, and others — but no hyperhumanism-specific example. A new `examples/hyperhumanism-onboarding/` directory would demonstrate the full Smith-aligned intake:[^1]

```
examples/hyperhumanism-onboarding/
├── manifest.yaml
├── research/
│   ├── capacity-baseline.md       # Initial endo-technology literacy assessment
│   └── technology-displacement.md # Audit of capacities delegated to devices
├── content/
│   └── four-phase-inquiry.md      # Full hyperhumanism-inquiry output
└── quality/
    └── review-report.md
```

***

## Prioritized Implementation Roadmap

The improvements are sequenced by dependency and impact:

**Phase 1 — Fill the holes (missing templates blocking existing workflows):**
1. `content/templates/resonance-body-map.md`
2. `content/templates/consciousness-exhibit.md`
3. `content/templates/capacity-inventory.md`
4. `content/templates/micro-practice-design.md`

**Phase 2 — Enrich shared resources (cross-cutting terminology and pathways):**
5. Update `shared/terminology.md` — add Smith vocabulary table
6. Update `shared/practice-pathways.md` — add Scaffold→Remove + Hyperhuman Cultivation Arc
7. Update `shared/voice-guide.md` — add Smith opening frame section
8. Add `shared/endo-technology-taxonomy.md` — canonical endo-tech inventory

**Phase 3 — New agents and workflows (the most impactful gap):**
9. `content/context-engineer.md` — new agent
10. `content/context-engineering-workflow.yaml` — new workflow
11. `/context-engineering` skill in `manifest.yaml`
12. `content/templates/context-design.md` — template

**Phase 4 — Curriculum and measurement infrastructure:**
13. `shared/consciousness-literacy-levels.md`
14. `/consciousness-audit` skill in `manifest.yaml`
15. Update `shared/outcome-measurement.md`
16. `content/templates/perceptual-augmentation-tracker.md`

**Phase 5 — Relational and philosophical deepening:**
17. `content/templates/quantum-relationship.md`
18. Update `content/resonance-facilitator.md`
19. `examples/hyperhumanism-onboarding/` full example
20. `content/templates/ecology-design.md`

***

## Conclusion

The repo demonstrates impressive existing integration of Smith's work — particularly the Holotechnica stacking methodology, Umwelt Hacking, and archaeoacoustic practices are well-represented with dedicated agents and ethically-reviewed workflows. The most significant gap is **Contextology / Context Engineering**, which Smith himself identifies as the most impactful single variable in any consciousness practice (shaping 80% of outcome). Making this a first-class skill alongside the endo-technology stack would be the highest-leverage single addition. The second priority is filling the missing templates that existing workflows already reference, which is a smaller effort with immediate quality impact across all six Smith skills currently in production.[^2][^1]

---

## References

1. [An Ecology for the Re-Enchantment of Life | Carl Hayden Smith](https://www.youtube.com/watch?v=a2KZm4cMg1E) - ... www.ted.com/tedx. An Ecology for the Re-Enchantment of Life | Carl Hayden Smith | TEDxOxford. 90...

2. [Hyperhumanism, Endo-Technologies, and the Future of ... - LinkedIn](https://www.linkedin.com/pulse/hyperhumanism-endo-technologies-future-consciousness-rudy-de-waele-p0poe) - Carl introduces hyperhumanism as a counterpoint to transhumanism. Instead of outsourcing our intelli...

3. [Carl Hayden Smith - RandolphDible.com](https://randolphdible.com/carl-hayden-smith/) - Carl Hayden Smith is Associate Professor of Media at the University of East London. He is also Found...

4. [with Carl Hayden Smith - YouTube](https://www.youtube.com/watch?v=fOnluojOhF8) - 300 talks across 40 countries and 50+ academic papers, Carl's ... Go to channel TEDx Talks · An Ecol...

5. [LTRC Director X TEDxOxford | Ravensbourne University London](https://www.ravensbourne.ac.uk/people-and-stories/blog/staff/ltrc-director-x-tedxoxford) - Carl's talk, titled 'An Ecology for the Re-Enchantment of Life', focused on the ways we can build ou...

6. [Why I Want to be a Hyperhuman When I Grow Up - Philosophy Portal](https://philosophyportal.substack.com/p/why-i-want-to-be-a-hyperhuman-when) - Inspired by Dr. Carl Hayden Smith's upcoming event in The Portal ·, in an article titled “Overbecomi...

7. [The Need for Hyperhumanism in the Age of AI - Carl Hayden Smith](https://www.youtube.com/watch?v=2H3y3lkx154) - The Need for Hyperhumanism in the Age of AI - Carl Hayden Smith. 181 views · 1 year ago ...more. Med...

8. [Holotechnica: Altered States And Traits - nia-faraway](https://niafaraway.com/holotechnica-altered-states-and-traits/) - Carl Hayden Smith is co-founder of the Cyberdelics Society and the London Experimental Psychonautic ...

9. [The Need for Hyperhumanism in the Age of AI with Carl Hayden Smith](https://www.youtube.com/watch?v=RWKp5x6sgYo) - Humans are not evolutionarily equipped to deal with the level of complexity that the rapid rise in d...

