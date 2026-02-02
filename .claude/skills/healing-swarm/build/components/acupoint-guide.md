# Acupoint Guide Component Specification

> Interactive guide for locating and working with acupressure points.

---

## Purpose

The Acupoint Guide helps users accurately locate acupressure points on their
body and understand how to work with them effectively. It combines traditional
knowledge with modern visual aids and accessibility considerations.

---

## Component API

```typescript
interface AcupointGuideProps {
  /** The acupoint to display */
  point: Acupoint;

  /** Show full point details vs. compact view */
  mode?: 'full' | 'compact' | 'practice';

  /** Called when user indicates they've found the point */
  onPointFound?: () => void;

  /** Enable self-location assistance */
  locationAssistance?: boolean;

  /** Show related points */
  showRelatedPoints?: boolean;

  /** Highlight contraindications */
  showCautions?: boolean;

  /** For practice mode: include timer */
  includeTimer?: boolean;

  /** Practice duration in seconds */
  practiceDuration?: number;
}

interface Acupoint {
  id: string;
  name: string;
  chineseName: string;
  pinyinName: string;
  meridian: Meridian;
  location: PointLocation;
  indications: string[];
  contraindications: string[];
  technique: TechniqueGuide;
  traditionalContext: string;
  modernUnderstanding?: string;
  relatedPoints?: string[];
  images: PointImages;
}

interface PointLocation {
  description: string;
  landmarks: string[];
  measurementMethod?: string;
  anatomicalLocation: string;
}

interface TechniqueGuide {
  pressure: 'light' | 'moderate' | 'firm';
  duration: string;
  method: 'press' | 'circular' | 'tap';
  breathingCoordination?: string;
  sensations: string[];
}

interface PointImages {
  diagram: string;
  diagramAlt: string;
  photo?: string;
  photoAlt?: string;
  animation?: string;
}

type Meridian =
  | 'lung'
  | 'large-intestine'
  | 'stomach'
  | 'spleen'
  | 'heart'
  | 'small-intestine'
  | 'bladder'
  | 'kidney'
  | 'pericardium'
  | 'triple-energizer'
  | 'gallbladder'
  | 'liver'
  | 'conception'
  | 'governing';
```

---

## Visual Design

### Full View

```
┌─────────────────────────────────────────┐
│  ← Back                    LI-4 (Hegu)  │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │                                  │    │
│  │      [Anatomical Diagram]       │    │
│  │      Point marked with dot      │    │
│  │                                  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  合谷 Hé Gǔ                              │
│  "Joining Valley"                       │
│  Large Intestine Meridian               │
│                                         │
│  ─────────────────────────────────────  │
│                                         │
│  Location                               │
│  In the webbing between the thumb and   │
│  index finger, at the highest point     │
│  of the muscle when thumb and finger    │
│  are brought together.                  │
│                                         │
│  ▼ How to Find It                       │
│  ▼ Traditional Uses                     │
│  ▼ Technique                            │
│  ▼ Cautions                             │
│                                         │
│           [Start Practice]              │
│                                         │
└─────────────────────────────────────────┘
```

### Location Assistance View

```
┌─────────────────────────────────────────┐
│  Finding LI-4                  Step 2/4 │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │                                  │    │
│  │  [Diagram with current step     │    │
│  │   highlighted]                  │    │
│  │                                  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Squeeze your thumb against your        │
│  index finger.                          │
│                                         │
│  See the muscle that bulges up?         │
│  The point is at the highest part.      │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │ ✓ I found a spot that feels      │   │
│  │   tender or "active"             │   │
│  └──────────────────────────────────┘   │
│                                         │
│    ← Previous              Next →       │
│                                         │
└─────────────────────────────────────────┘
```

### Practice View

```
┌─────────────────────────────────────────┐
│  ✕ Exit           LI-4 Practice         │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │      [Small diagram]            │    │
│  └─────────────────────────────────┘    │
│                                         │
│           Hold for 1:30                 │
│                                         │
│              ┌──────┐                   │
│              │ 0:45 │                   │
│              └──────┘                   │
│                                         │
│     ════════════════════════            │
│                                         │
│  Apply gentle, steady pressure.         │
│  Breathe slowly and naturally.          │
│                                         │
│  You might notice:                      │
│  • Dull ache radiating up arm          │
│  • Warmth in the area                   │
│  • General relaxation                   │
│                                         │
│              ⏸️ Pause                    │
│                                         │
└─────────────────────────────────────────┘
```

---

## Design Tokens

```css
.acupoint-guide {
  /* Typography */
  --point-name-size: var(--font-size-2xl);
  --point-chinese-font: 'Noto Sans SC', sans-serif;
  --point-body-size: var(--font-size-base);

  /* Colors */
  --point-marker: var(--color-healing-500);
  --point-meridian-line: var(--color-healing-300);
  --point-caution: var(--color-warmth-600);

  /* Diagram */
  --diagram-bg: var(--color-white);
  --diagram-outline: var(--color-calm-300);
  --diagram-point-size: 12px;
}
```

---

## Accessibility Requirements

### Diagram Accessibility

```tsx
// Diagram with comprehensive description
<figure className="acupoint-diagram">
  <img
    src={point.images.diagram}
    alt={point.images.diagramAlt}
    aria-describedby={`point-${point.id}-desc`}
  />
  <figcaption id={`point-${point.id}-desc`}>
    {point.location.description}
    Landmarks: {point.location.landmarks.join(', ')}.
    {point.location.anatomicalLocation}
  </figcaption>
</figure>

// Example alt text:
// "Diagram of right hand, palm down, showing LI-4 location
//  in the webbing between thumb and index finger, marked with
//  a green dot at the highest point of the first dorsal
//  interosseous muscle."
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Navigate through sections |
| `Enter` | Expand/collapse sections |
| `Space` | Confirm point found / start practice |
| `Escape` | Exit practice mode |
| `Arrow Left/Right` | Navigate location steps |

### Screen Reader Support

```tsx
// Point information
<article aria-labelledby="point-name">
  <header>
    <h2 id="point-name">
      {point.name} ({point.pinyinName})
      <span lang="zh">{point.chineseName}</span>
    </h2>
    <p>{point.meridian} Meridian</p>
  </header>

  <section aria-label="Location">
    <h3>How to Find This Point</h3>
    <p>{point.location.description}</p>
    <h4>Landmarks</h4>
    <ul>
      {point.location.landmarks.map(l => <li>{l}</li>)}
    </ul>
  </section>
</article>

// Location assistance with progress
<div role="group" aria-label="Finding the point">
  <p aria-live="polite">
    Step {currentStep} of {totalSteps}
  </p>
  <p>{currentInstruction}</p>
</div>
```

---

## Location Assistance

### Step-by-Step Guidance

```typescript
const li4LocationSteps = [
  {
    instruction: 'Turn your hand so you can see the back of it (palm facing down).',
    visualFocus: 'hand-back',
  },
  {
    instruction: 'Find the webbing between your thumb and index finger.',
    visualFocus: 'webbing-highlighted',
  },
  {
    instruction: 'Squeeze your thumb against your index finger. See the muscle that bulges up?',
    visualFocus: 'muscle-bulge',
  },
  {
    instruction: 'The point is at the highest part of that muscle bulge. Press gently—you may feel tenderness.',
    visualFocus: 'point-marked',
    confirmation: true,
  },
];
```

### Point Finding Confirmation

```tsx
<button
  onClick={handlePointFound}
  className="confirmation-button"
>
  <CheckIcon aria-hidden="true" />
  I found a spot that feels tender or "active"
</button>

<p className="reassurance">
  The exact spot doesn't have to be perfect.
  The area around the point is also beneficial.
</p>
```

---

## Point Data Structure

### Example Point: LI-4 (Hegu)

```typescript
const li4: Acupoint = {
  id: 'li-4',
  name: 'LI-4',
  chineseName: '合谷',
  pinyinName: 'Hé Gǔ',
  meridian: 'large-intestine',

  location: {
    description: 'In the webbing between the thumb and index finger, at the highest point of the muscle when thumb and finger are brought together.',
    landmarks: [
      'Back of the hand',
      'Webbing between thumb and index finger',
      'Highest point of first dorsal interosseous muscle',
    ],
    measurementMethod: 'At the midpoint of the second metacarpal bone, on the radial side.',
    anatomicalLocation: 'First dorsal interosseous muscle; radial artery branch.',
  },

  indications: [
    'Headache',
    'Facial pain',
    'Toothache',
    'Sore throat',
    'Hand and arm pain',
    'General pain relief',
    'Stress and tension',
  ],

  contraindications: [
    'Pregnancy (may stimulate contractions)',
    'Bleeding disorders (use very light pressure)',
    'Open wounds or skin infections in the area',
  ],

  technique: {
    pressure: 'moderate',
    duration: '1-3 minutes',
    method: 'press',
    breathingCoordination: 'Inhale as you apply pressure, exhale as you release slightly. Maintain through several breath cycles.',
    sensations: [
      'Dull, achy sensation (de qi)',
      'Warmth spreading from the point',
      'Relaxation in hand, arm, or shoulders',
      'General sense of calm',
    ],
  },

  traditionalContext: `
    LI-4 is one of the most important points in Traditional Chinese Medicine.
    Known as the "Command Point of the Face," it has been used for millennia
    for conditions of the head, face, and upper body. The classical texts
    describe it as a point that strongly moves qi and blood.
  `,

  modernUnderstanding: `
    Research suggests that acupressure on LI-4 may activate descending pain
    modulation pathways and affect autonomic nervous system function. Studies
    have shown effects on pain perception, blood flow, and stress markers.
  `,

  relatedPoints: ['LI-11', 'PC-6', 'ST-36'],

  images: {
    diagram: '/images/points/li-4-diagram.svg',
    diagramAlt: 'Anatomical diagram showing LI-4 location on back of hand between thumb and index finger',
    photo: '/images/points/li-4-photo.jpg',
    photoAlt: 'Photograph showing finger pressing on LI-4 point location',
    animation: '/images/points/li-4-finding.mp4',
  },
};
```

---

## Example Usage

### Full Information View

```tsx
<AcupointGuide
  point={li4}
  mode="full"
  showRelatedPoints={true}
  showCautions={true}
/>
```

### Location Assistance

```tsx
<AcupointGuide
  point={li4}
  locationAssistance={true}
  onPointFound={() => setLocationConfirmed(true)}
/>
```

### Practice Mode

```tsx
<AcupointGuide
  point={li4}
  mode="practice"
  includeTimer={true}
  practiceDuration={90}
  onComplete={handlePracticeComplete}
/>
```

### Compact for Embedding

```tsx
// Within a larger practice guide
<PracticeStep>
  <h3>Apply Pressure to LI-4</h3>
  <AcupointGuide
    point={li4}
    mode="compact"
  />
</PracticeStep>
```

---

## Diagram Guidelines

### Visual Style

```
DIAGRAM REQUIREMENTS:
- Clean, simple line art
- Neutral skin tone or outline only
- Clear anatomical landmarks
- Point marked with contrasting color
- Sufficient size for clarity (min 200x200px)

MARKING THE POINT:
- Solid dot for exact location
- Optional: small circle showing "acceptable area"
- Color: healing-500 (green) for visibility
- Size: 10-14px diameter

ACCESSIBILITY:
- High contrast outlines
- Point marked with both color AND shape
- Provide detailed text description
- Don't rely on color alone
```

### Photo Guidelines

```
PHOTO REQUIREMENTS:
- Diverse hand types represented
- Good lighting, clear focus
- Finger demonstrating pressure application
- Neutral background

REPRESENTATION:
- Rotate through different skin tones
- Include hands with different characteristics
- Show both left and right hand options
```

---

## Testing Requirements

### Unit Tests

- [ ] Point data loads correctly
- [ ] Location steps progress properly
- [ ] Timer functions in practice mode
- [ ] Confirmation callback fires

### Accessibility Tests

- [ ] Screen reader can access all content
- [ ] Diagrams have complete alt text
- [ ] Keyboard navigation works
- [ ] Chinese characters properly tagged with lang

### Visual Tests

- [ ] Diagrams display at all sizes
- [ ] Point markers visible
- [ ] High contrast mode works
- [ ] Practice mode timer displays correctly

---

## Implementation Notes

### Performance

- Lazy load images
- Preload next step's diagram in location assistance
- Cache point data locally

### Localization

- Chinese characters with proper font stack
- Pinyin with proper diacritics
- All content translatable

### Mobile Considerations

- Large touch targets for steps and confirmation
- Diagrams zoomable
- Bottom-aligned actions for thumb reach

---

*"Ancient wisdom deserves clear, accessible presentation. Help users find these points with confidence."*
