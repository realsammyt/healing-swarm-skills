# Practice Guide Component Specification

> Step-by-step guidance for healing practices with accessibility and adaptability.

---

## Purpose

The Practice Guide walks users through healing practices with clear instructions,
visual aids, and appropriate pacing. It supports practices like acupressure,
breathing exercises, visualizations, and prayer rituals.

---

## Component API

```typescript
interface PracticeGuideProps {
  /** The practice content */
  practice: Practice;

  /** Called when practice completes */
  onComplete?: (result: PracticeResult) => void;

  /** Called when user exits early */
  onExit?: (progress: PracticeProgress) => void;

  /** Enable audio narration */
  audioNarration?: boolean;

  /** Auto-advance between steps. Default: false */
  autoAdvance?: boolean;

  /** Pause duration between auto-advanced steps (ms) */
  stepPauseDuration?: number;

  /** Show timer for timed steps */
  showStepTimer?: boolean;

  /** Enable haptic feedback (mobile) */
  hapticFeedback?: boolean;

  /** Start at specific step (for resuming) */
  startAtStep?: number;
}

interface Practice {
  id: string;
  name: string;
  tradition: string;
  duration: string; // e.g., "5-10 minutes"
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  bestFor: string;
  preparation?: PreparationStep[];
  steps: PracticeStep[];
  completion: CompletionContent;
  variations?: Variation[];
  cautions?: string[];
}

interface PracticeStep {
  id: string;
  title: string;
  instruction: string;
  details?: string[];
  sensations?: string;
  duration?: number; // seconds
  timedHold?: boolean;
  visualAid?: VisualAid;
  audioClip?: string;
}

interface VisualAid {
  type: 'image' | 'animation' | 'diagram';
  src: string;
  alt: string;
  caption?: string;
}

interface Variation {
  name: string;
  condition: string; // e.g., "limited mobility"
  modifications: string;
}

interface PracticeResult {
  practiceId: string;
  completedAt: Date;
  duration: number; // actual time taken
  stepsCompleted: number;
  notes?: string;
}
```

---

## Visual Design

### Main Layout

```
┌─────────────────────────────────────────┐
│  ✕ Exit              Step 2 of 5        │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │                                  │    │
│  │     [Visual Aid / Diagram]      │    │
│  │                                  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Apply Gentle Pressure                  │
│                                         │
│  Place the pad of your thumb on the     │
│  point you located. Apply gentle        │
│  pressure—enough to feel it, not        │
│  enough to hurt.                        │
│                                         │
│  What you might notice:                 │
│  • A dull, achy sensation               │
│  • Warmth in the area                   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│    ← Previous          Next →           │
│                                         │
└─────────────────────────────────────────┘
```

### Timed Step Layout

```
┌─────────────────────────────────────────┐
│  ✕ Exit              Step 3 of 5        │
├─────────────────────────────────────────┤
│                                         │
│          Hold for 60 seconds            │
│                                         │
│              ┌──────┐                   │
│              │ 0:45 │                   │
│              └──────┘                   │
│                                         │
│     ════════════════════════            │
│                                         │
│  Breathe slowly as you maintain         │
│  the pressure. Let your attention       │
│  rest on the sensation.                 │
│                                         │
│              ⏸️ Pause                    │
│                                         │
└─────────────────────────────────────────┘
```

### Completion Screen

```
┌─────────────────────────────────────────┐
│                                         │
│              ✓                          │
│                                         │
│       Practice Complete                 │
│                                         │
│  Take a moment to notice how you        │
│  feel now compared to before.           │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ Add a note (optional)           │    │
│  │                                  │    │
│  └─────────────────────────────────┘    │
│                                         │
│         [Complete & Continue]           │
│                                         │
└─────────────────────────────────────────┘
```

---

## Design Tokens

```css
.practice-guide {
  /* Typography */
  --guide-title-size: var(--font-size-xl);
  --guide-instruction-size: var(--font-size-lg);
  --guide-detail-size: var(--font-size-base);

  /* Colors */
  --guide-text: var(--color-calm-800);
  --guide-instruction-bg: var(--color-white);
  --guide-timer-color: var(--color-healing-600);

  /* Spacing */
  --guide-padding: var(--spacing-6);
  --guide-visual-height: 200px;

  /* Animation */
  --guide-transition: 0.3s ease-out;
}
```

---

## Accessibility Requirements

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Arrow Right` / `N` | Next step |
| `Arrow Left` / `P` | Previous step |
| `Space` | Start/pause timed step |
| `Escape` | Exit (with confirmation) |
| `R` | Repeat audio (if narration enabled) |
| `?` | Show keyboard shortcuts |

### Screen Reader Support

```tsx
// Step announcement
<article
  role="article"
  aria-labelledby={`step-${step.id}-title`}
  aria-describedby={`step-${step.id}-instruction`}
>
  <header>
    <span aria-live="polite">
      Step {currentStep} of {totalSteps}
    </span>
    <h2 id={`step-${step.id}-title`}>{step.title}</h2>
  </header>

  <p id={`step-${step.id}-instruction`}>
    {step.instruction}
  </p>

  {step.sensations && (
    <section aria-label="What you might notice">
      <h3>What you might notice:</h3>
      <ul>
        {step.sensations.map(s => <li>{s}</li>)}
      </ul>
    </section>
  )}
</article>

// Timer announcement
<div role="timer" aria-live="polite" aria-atomic="true">
  {formatTime(remaining)} remaining
</div>
```

### Visual Aid Accessibility

```tsx
<figure className="visual-aid">
  <img
    src={visualAid.src}
    alt={visualAid.alt}
    // Detailed description for complex diagrams
    aria-describedby={`desc-${step.id}`}
  />
  {visualAid.caption && (
    <figcaption id={`desc-${step.id}`}>
      {visualAid.caption}
    </figcaption>
  )}
</figure>

// For diagrams showing body points
// alt="Acupressure point LI-4 located in the webbing between thumb and index finger"
// Plus detailed long description if needed
```

---

## Step Types

### Standard Step

Text instruction with optional visual aid.

```typescript
const standardStep: PracticeStep = {
  id: 'find-point',
  title: 'Find the Point',
  instruction: 'Locate LI-4 on your hand...',
  details: [
    'Look at the back of your hand',
    'Find the webbing between thumb and index finger',
    'The point is at the highest part of the muscle',
  ],
  visualAid: {
    type: 'diagram',
    src: '/images/li4-location.svg',
    alt: 'Diagram showing LI-4 point location on the hand',
  },
};
```

### Timed Step

Step with countdown timer for holds/durations.

```typescript
const timedStep: PracticeStep = {
  id: 'hold-pressure',
  title: 'Hold the Pressure',
  instruction: 'Maintain gentle pressure while breathing slowly.',
  duration: 60, // seconds
  timedHold: true,
  sensations: 'You may feel warmth, tingling, or relaxation.',
};
```

### Breathing Step

Step synchronized with breathing pattern.

```typescript
const breathingStep: PracticeStep = {
  id: 'breathe',
  title: 'Breathe with the Point',
  instruction: 'Coordinate your breathing with the practice.',
  duration: 120,
  breathingPattern: {
    inhale: 4,
    holdIn: 2,
    exhale: 6,
    holdOut: 2,
  },
};
```

---

## Audio Narration

### Implementation

```typescript
const useAudioNarration = (step: PracticeStep, enabled: boolean) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>();

  const play = async () => {
    if (!enabled) return;

    // Use pre-recorded audio if available
    if (step.audioClip) {
      audioRef.current = new Audio(step.audioClip);
    } else {
      // Fall back to text-to-speech
      const utterance = new SpeechSynthesisUtterance(step.instruction);
      utterance.rate = 0.9; // Slightly slower for meditation
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }

    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return { play, pause, isPlaying };
};
```

### Audio Guidelines

- Calm, measured pace
- Pauses between sentences
- Clear pronunciation
- Avoid background music during instructions

---

## Variations Display

```tsx
<details className="variations">
  <summary>Modifications</summary>

  <div className="variation-list">
    {practice.variations.map(v => (
      <div key={v.name} className="variation">
        <h4>{v.name}</h4>
        <p className="condition">{v.condition}</p>
        <p className="modification">{v.modifications}</p>
      </div>
    ))}
  </div>
</details>
```

Always include variations for:
- Limited mobility
- One-handed operation
- Seated vs. standing
- Intensity levels

---

## Exit Handling

```typescript
const handleExit = () => {
  // If in middle of practice, confirm
  if (currentStep > 0 && currentStep < totalSteps) {
    const confirmed = confirm(
      'Exit practice early? Your progress will be saved.'
    );
    if (!confirmed) return;
  }

  // Save progress
  const progress: PracticeProgress = {
    practiceId: practice.id,
    lastStep: currentStep,
    exitedAt: new Date(),
    canResume: true,
  };
  saveProgress(progress);

  onExit?.(progress);
};
```

---

## Example Usage

### Basic Practice

```tsx
<PracticeGuide
  practice={acupressurePractice}
  onComplete={(result) => {
    savePracticeCompletion(result);
    navigateToJournal();
  }}
  onExit={(progress) => {
    navigateBack();
  }}
/>
```

### With Audio Narration

```tsx
<PracticeGuide
  practice={meditationPractice}
  audioNarration={true}
  autoAdvance={true}
  stepPauseDuration={3000}
  onComplete={handleComplete}
/>
```

### Resume from Progress

```tsx
<PracticeGuide
  practice={practice}
  startAtStep={savedProgress.lastStep}
  onComplete={handleComplete}
/>
```

---

## Behavior Specifications

### Step Navigation

- Linear by default (1 → 2 → 3)
- Can go back to previous steps
- Can skip forward (with warning for timed steps)
- Progress saved on each step completion

### Timed Steps

- Timer starts when step is displayed
- Can pause timer anytime
- Timer displays time remaining
- Gentle audio cue at completion
- Auto-advance to next step (if enabled)

### Completion

1. Display completion message
2. Optional notes input
3. Save practice result
4. Suggest next action (journal, rest, next practice)

---

## Testing Requirements

### Unit Tests

- [ ] Step navigation works correctly
- [ ] Timer counts down accurately
- [ ] Progress saves correctly
- [ ] Exit handling works

### Accessibility Tests

- [ ] Screen reader can read all steps
- [ ] Keyboard navigation complete
- [ ] Visual aids have proper alt text
- [ ] Timer is accessible

### Integration Tests

- [ ] Audio narration plays correctly
- [ ] Practice completion saves
- [ ] Resume from progress works

---

## Implementation Notes

### Performance

- Preload visual aids for next 1-2 steps
- Lazy load audio files
- Minimize re-renders during timer

### Mobile Considerations

- Large tap targets for navigation
- Swipe gestures for step navigation
- Keep screen awake during timed steps
- Haptic feedback for step transitions

### Offline Support

- All practice content available offline
- Visual aids cached
- Audio files cached or use TTS fallback

---

*"The guide is a gentle companion, walking beside the user through each step of their practice."*
