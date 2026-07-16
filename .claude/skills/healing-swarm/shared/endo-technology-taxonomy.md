# Endo-Technology Taxonomy

> The canonical inventory of endo-technologies used across healing-swarm content.
> An endo-technology is an inner practice that needs no external tool. This file
> harmonizes evidence levels, contraindications, and Smith designations so that
> every agent and template draws on one shared reference.

---

**Version:** 1.0.0
**Status:** Canonical inventory. When an agent or template needs an endo-technology's
evidence level, contraindications, or endo-vs-cyberdelic boundary, this file is
the source of record.

## Scope and Exclusions

This taxonomy covers endo-technologies only: breath, sound, imagery, attention,
movement, stillness, and memory practices performed with the body and mind alone.

**Hard exclusion by design:** Pharmacological approaches are out of scope. No
psychedelics, entheogens, alcohol, caffeine, nootropics, or any substance-based
protocol appears anywhere in this inventory or in any practice built from it.
This boundary is Smith's pharmaco-exclusion and it is absolute. If a request asks
for a substance-based ingredient, decline and explain the exclusion.

Cyberdelics (technology-augmented consciousness practices such as VR, biofeedback,
neurofeedback, and sound/light machines) are a related but separate category.
They are noted below only to mark the boundary where an inner practice becomes
tool-dependent. The inventory itself lists inner practices.

## Evidence Levels

This file reuses the evidence vocabulary already used by the Holotechnica
Architect, so labels stay consistent across the swarm:

| Level            | Meaning                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| Well-established | Multiple systematic reviews or a strong research base support the practice    |
| Moderate         | Some controlled research supports the practice; samples are often small       |
| Preliminary      | Early or limited research; promising but not yet replicated at scale          |
| Theoretical      | A design or framework claim with no direct empirical validation (e.g. stacks) |

An individual endo-technology can be well-established while a stack that combines
several remains Theoretical. Evidence does not compound. Label each ingredient on
its own, and label any combination as Theoretical.

## Endo-Technology Inventory

| Endo-Technology       | Evidence Level   | Smith Designation                | Primary Contraindications                                  |
| --------------------- | ---------------- | -------------------------------- | ---------------------------------------------------------- |
| Breathwork            | Well-established | Endo (biofeedback-paced is edge) | Pregnancy, cardiovascular, epilepsy (intensive forms)      |
| Sound / toning        | Moderate         | Endo (binaural/light is edge)    | Loud-volume caution; low frequencies near abdomen in pregnancy |
| Visualization         | Well-established | Endo (VR-guided is edge)         | Caution with psychotic features; trauma-sensitive imagery  |
| Body scan             | Well-established | Endo (biofeedback is edge)       | Caution with dissociation and interoceptive overwhelm      |
| Movement              | Well-established | Endo (motion-capture is edge)    | Physical limits, recent surgery, cardiovascular (modify)   |
| Silence               | Moderate         | Endo (float-tank is edge)        | Caution with acute grief, rumination, severe depression    |
| Hypnagogic techniques | Preliminary      | Endo (EEG sleep tech is edge)    | Active psychosis or dissociation; sleep-disorder caution   |
| Sensory foregrounding | Preliminary      | Endo (VR umwelt sim is edge)     | Dissociation risk; perceiving-as-other needs Tier 2 screen |
| Memory palaces        | Well-established (as mnemonic) | Endo (VR palace is edge) | Caution with intrusive memories or PTSD                    |

Severity language (Absolute, Relative, Caution) follows `shared/contraindications.md`.
The detail sections below name the severity where it matters. Contraindications are
additive: when practices are combined, the whole inherits every ingredient's flags.

## Detail by Endo-Technology

### Breathwork

- **Evidence:** Well-established (WHM, pranayama systematic reviews).
- **Contraindications:** Intensive forms with breath holds or hyperventilation are
  Absolute in pregnancy, cardiovascular disease, and epilepsy. Gentle coherent
  breathing is broadly accessible; use Caution with panic or acute anxiety.
- **Smith designation:** Endo-technology. Paced or biofeedback-app breathing sits
  at the cyberdelic boundary; the breath itself is the practice, the app is a
  temporary scaffold (see the Scaffold→Remove Progression in
  `shared/practice-pathways.md`).
- **Implemented by:** agents `breathwork-coach`, `coherence-guide`,
  `holotechnica-architect`; templates `content/templates/breathwork-protocol.md`,
  `content/templates/coherence-practice.md`.

### Sound / Toning

- **Evidence:** Moderate (Kalyani et al. 2011, n=12; vocal frequency research).
- **Contraindications:** Caution for voice strain and loud volumes. In pregnancy,
  avoid very low frequencies near the abdomen. Avoid binaural beats and photic
  driving with seizure disorders (those are cyberdelic forms, not vocal toning).
- **Smith designation:** Endo-technology when the sound is produced by the
  practitioner's own voice or body. Binaural-beat tracks and sound/light machines
  cross into cyberdelic territory.
- **Implemented by:** agents `sound-healing-guide`, `archaeoacoustic-guide`,
  `holotechnica-architect`; templates `content/templates/sound-protocol.md`,
  `content/templates/archaeoacoustic-toning.md`,
  `content/templates/resonance-body-map.md`.

### Visualization

- **Evidence:** Well-established (guided imagery meta-analyses).
- **Contraindications:** Caution with psychotic features and with trauma-sensitive
  imagery; offer neutral or safe-place imagery as an alternative.
- **Smith designation:** Endo-technology. VR-guided imagery is the cyberdelic edge.
- **Implemented by:** agents `content-writer`, `holotechnica-architect`; template
  `content/templates/visualization.md`.

### Body Scan

- **Evidence:** Well-established (MBSR body-scan component research).
- **Contraindications:** Caution with dissociation and with interoceptive
  overwhelm; keep sessions short and offer an external anchor if inward attention
  becomes activating.
- **Smith designation:** Endo-technology. Biofeedback-assisted interoception is the
  cyberdelic edge.
- **Implemented by:** agents `somatic-guide`, `holotechnica-architect`; templates
  `content/templates/movement-protocol.md` (body-awareness segments),
  `content/templates/holotechnica-recipe.md` (as a stack ingredient).

### Movement

- **Evidence:** Well-established (exercise and mindful-movement literature).
- **Contraindications:** Relative with physical limitations, recent surgery, and
  cardiovascular disease; modify intensity and avoid breath holds and inversions.
- **Smith designation:** Endo-technology. Motion-capture and VR movement systems
  are the cyberdelic edge.
- **Implemented by:** agents `somatic-guide`, `holotechnica-architect`; template
  `content/templates/movement-protocol.md`.

### Silence

- **Evidence:** Moderate (meditation research, silence-retreat studies).
- **Contraindications:** Caution with acute grief, rumination-prone states, and
  severe depression; extended silence can amplify difficult content. Offer shorter
  intervals and a grounding option.
- **Smith designation:** Endo-technology. Sensory-deprivation float tanks are the
  tool-based edge.
- **Implemented by:** agents `contemplative-guide`, `holotechnica-architect`;
  template `content/templates/contemplative-protocol.md`.

### Hypnagogic Techniques

- **Evidence:** Preliminary (sleep-onset research; limited practice evidence).
- **Contraindications:** Absolute with active psychosis or active dissociation.
  Caution with sleep disorders. Keep the drowsy, liminal window brief and bounded.
- **Smith designation:** Endo-technology. EEG or neurofeedback sleep-onset devices
  are the cyberdelic edge.
- **Implemented by:** agents `sleep-healing-guide`, `holotechnica-architect`;
  template `content/templates/sleep-protocol.md`.

### Sensory Foregrounding

- **Evidence:** Preliminary (embodied cognition research; umwelt literature).
- **Contraindications:** Caution with dissociation. Perceiving-as-other work
  requires full Tier 2 dissociation screening and lists Absolute contraindications
  (active dissociative disorder, active psychosis) in
  `content/templates/umwelt-exercise.md`.
- **Smith designation:** Endo-technology. VR umwelt simulations are the cyberdelic
  edge.
- **Implemented by:** agents `umwelt-facilitator`, `holotechnica-architect`;
  template `content/templates/umwelt-exercise.md`.

### Memory Palaces

- **Evidence:** Well-established as a mnemonic method (method of loci; Dresler et
  al. 2017). Its use as an endo-technology for consciousness cultivation is
  Preliminary.
- **Contraindications:** Caution with intrusive memories or PTSD, since vivid
  recall can surface distress; offer neutral loci and a stopping option.
- **Smith designation:** Endo-technology. VR memory palaces are the cyberdelic edge.
- **Implemented by:** agents `hyperhumanism-researcher` (evidence framing),
  `holotechnica-architect` (as a stack ingredient); no dedicated template yet,
  so build it inside `content/templates/holotechnica-recipe.md`.

## Using This Inventory

1. Pick ingredients from the inventory above, never from outside it.
2. Copy each ingredient's evidence level verbatim into the content you produce.
3. Combine every ingredient's contraindications as a union, and treat any single
   flag as flagging the whole practice.
4. Label any combination of ingredients as Theoretical.
5. Keep the endo boundary: if a step depends on a device, name it as a temporary
   scaffold and point to the Scaffold→Remove Progression, or move it to a
   cyberdelic-labeled context. No substances, ever.

---

_The tools are already in the body. This inventory just keeps track of which
ones we reach for, how well we understand them, and where the inner practice
ends and the machine begins._
