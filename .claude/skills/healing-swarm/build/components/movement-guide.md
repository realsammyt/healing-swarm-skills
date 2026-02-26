# Movement Guide Component Specification

> An accessible, timer-integrated interface for guided somatic movement
> and gentle exercise practices with modification selection and text-based
> pose descriptions.

---

## Purpose

The Movement Guide provides a structured, phase-aware interface for
somatic movement sessions. It guides practitioners through body scan
check-ins, warm-up, core movement sequences, and cool-down — with a
modification selector for standing, seated, lying, and wheelchair
positions, text-based movement descriptions, and integrated timers for
holds and sequences.

Unlike the Meditation Timer (which counts down a single duration) or the
Breathwork Timer (which tracks breath phases), the Movement Guide manages
a multi-movement sequence with position-specific instructions, hold
timers, and accessibility features that ensure no instruction depends
on visual demonstration.

---

## Component API

```typescript
interface MovementGuideProps {
  /** Practice type. Default: 'gentle_movement' */
  practiceType?: 'body_scan' | 'gentle_movement' | 'coordinated_sequence' | 'flowing_form';

  /** Total session duration in seconds. Default: 900 (15 minutes) */
  duration?: number;

  /** Movement sequence data. Required. */
  sequence: MovementSequence;

  /** Experience level (affects UI detail). Default: 'beginner' */
  level?: 'beginner' | 'intermediate' | 'advanced';

  /** Default position. Default: 'standing' */
  defaultPosition?: Position;

  /** Enable audio cues (bells, transition chimes). Default: true */
  audioEnabled?: boolean;

  /** Audio volume 0-1. Default: 0.5 */
  audioVolume?: number;

  /** Include voice guidance prompts. Default: true for beginner */
  voiceGuidance?: boolean;

  /** Called when entire session completes */
  onSessionComplete?: (sessionData: MovementSessionData) => void;

  /** Called on phase change */
  onPhaseChange?: (phase: MovementPhase) => void;

  /** Called on movement change */
  onMovementChange?: (movement: Movement) => void;

  /** Custom safety message */
  safetyMessage?: string;

  /** Minimal UI mode */
  minimal?: boolean;
}

interface MovementSequence {
  name: string;
  tradition: string;
  movements: Movement[];
}

interface Movement {
  name: string;
  description: string;
  holdBreaths?: number;
  holdSeconds?: number;
  repetitions?: number;
  breathCoordination: string;
  bodyAwarenessCue: string;
  positions: {
    standing: string;
    seated: string;
    lying: string;
    wheelchair: string;
  };
}

interface MovementSessionData {
  totalDurationSeconds: number;
  practiceType: string;
  tradition: string;
  positionUsed: Position;
  movementsCompleted: number;
  movementsSkipped: number;
}

type Position = 'standing' | 'seated' | 'lying' | 'wheelchair';

type MovementPhase =
  | 'safety_briefing'
  | 'preparing'
  | 'demonstrating'
  | 'practicing'
  | 'resting'
  | 'completing';
```

---

## Visual Design

### Main Layout — Practicing Phase

```
┌─────────────────────────────────────────┐
│                                         │
│   Gentle Qigong · Movement 3 of 8      │  <- Sequence progress
│   Tradition: Traditional Chinese Med.   │  <- Attribution
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │  Cloud Hands                    │   │  <- Movement name
│   │                                 │   │
│   │  Shift your weight to the       │   │  <- Text description
│   │  right foot. Float your right   │   │     (current position)
│   │  hand up, palm facing you,      │   │
│   │  as your left hand drifts       │   │
│   │  down. Shift weight left and    │   │
│   │  reverse.                       │   │
│   │                                 │   │
│   │  Breathe: Inhale as hands       │   │  <- Breath cue
│   │  rise, exhale as they fall.     │   │
│   │                                 │   │
│   │  Notice: the weight shifting    │   │  <- Body awareness cue
│   │  through your feet.             │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   Hold: 5 breaths  ████░░ 3/5          │  <- Hold timer
│                                         │
│   Position: [Standing ▼]               │  <- Modifier selector
│                                         │
│   ┌───┐  ┌───┐  ┌───┐  ┌───┐          │
│   │ ⏸ │  │ ⏭ │  │ ↩ │  │ ✕ │          │  <- Controls
│   └───┘  └───┘  └───┘  └───┘          │
│   Pause  Next   Skip   Stop           │
│                                         │
│   Move within comfort. Never pain.      │  <- Persistent safety
│                                         │
└─────────────────────────────────────────┘
```

### Demonstrating Phase Layout

```
┌─────────────────────────────────────────┐
│                                         │
│   Next Movement:                        │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │  Shoulder Rolls                 │   │
│   │                                 │   │
│   │  Roll your shoulders up         │   │
│   │  toward your ears, back,        │   │
│   │  and down in slow circles.      │   │
│   │  5 circles forward, then 5     │   │
│   │  circles backward.             │   │
│   │                                 │   │
│   │  If this causes pain, reduce    │   │  <- Safety reminder
│   │  the range or skip entirely.    │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌──────────────────────────────┐      │
│   │  Begin This Movement          │      │  <- User-initiated
│   └──────────────────────────────┘      │
│                                         │
│   ┌──────────────────────────────┐      │
│   │  Skip This Movement           │      │  <- Always available
│   └──────────────────────────────┘      │
│                                         │
└─────────────────────────────────────────┘
```

### Position Selector

```
┌─────────────────────────────────────────┐
│                                         │
│   Choose your position:                 │
│                                         │
│   ┌──────────┐  ┌──────────┐            │
│   │ Standing │  │  Seated  │            │
│   └──────────┘  └──────────┘            │
│   ┌──────────┐  ┌──────────┐            │
│   │  Lying   │  │Wheelchair│            │
│   └──────────┘  └──────────┘            │
│                                         │
│   You can change position at any time.  │
│                                         │
└─────────────────────────────────────────┘
```

### Resting Phase Layout

```
┌─────────────────────────────────────────┐
│                                         │
│   REST                                  │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │  Take a few natural breaths.    │   │
│   │                                 │   │
│   │  Notice how your body feels     │   │
│   │  after that movement.           │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌──────────────────────────────┐      │
│   │  Continue When Ready          │      │
│   └──────────────────────────────┘      │
│                                         │
└─────────────────────────────────────────┘
```

### Minimal Mode

```
┌─────────────────────────────────────────┐
│                                         │
│   Cloud Hands · 3/8 · Standing          │
│                                         │
│   Shift weight right, float right       │
│   hand up. Shift left, reverse.         │
│                                         │
│   Hold: ████░░ 3/5 breaths             │
│                                         │
│   ⏸ Pause    ⏭ Next    ↩ Skip          │
│                                         │
└─────────────────────────────────────────┘
```

### States

| State | Visual | Audio | User Action |
|-------|--------|-------|-------------|
| Safety Briefing | Safety text, confirm button | None | Must acknowledge |
| Preparing | Position selector, body scan prompt | None | Select position, begin |
| Demonstrating | Movement preview with description | None | Begin or skip |
| Practicing | Movement instruction, hold timer | Gentle transition chime | Move, breathe |
| Resting | Rest prompt, body awareness cue | None | Continue when ready |
| Completing | Summary, body scan comparison | Soft closing bell | Review / dismiss |

---

## Design Tokens

```css
/* Movement guide tokens (extend meditation timer) */
.movement-guide {
  /* Phase colors */
  --phase-preparing: var(--color-calm-300);
  --phase-demonstrating: var(--color-healing-300);
  --phase-practicing: var(--color-healing-500);
  --phase-resting: var(--color-calm-200);

  /* Movement text */
  --movement-name-font-size: var(--font-size-2xl);
  --movement-name-font-weight: var(--font-weight-bold);
  --movement-description-font-size: var(--font-size-base);
  --movement-description-line-height: 1.6;

  /* Position selector */
  --position-btn-size: 80px;
  --position-btn-active-bg: var(--color-healing-100);
  --position-btn-active-border: var(--color-healing-500);

  /* Hold timer */
  --hold-timer-color: var(--color-healing-600);
  --hold-timer-font-size: var(--font-size-lg);

  /* Safety bar */
  --safety-bg: var(--color-warning-50);
  --safety-text: var(--color-warning-800);
  --safety-border: var(--color-warning-200);
}
```

---

## Accessibility Requirements

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Start/pause; advance to next movement |
| `Escape` | Stop session (confirm if mid-practice) |
| `Arrow Right` | Next movement |
| `Arrow Left` | Previous movement |
| `Arrow Up/Down` | Adjust volume |
| `S` | Skip current movement |
| `P` | Cycle through position options |
| `M` | Toggle mute |

### Screen Reader Support

```tsx
// Phase announcements
<div
  role="status"
  aria-live="assertive"
  aria-atomic="true"
>
  {phaseAnnouncement}
  {/* "Movement 3 of 8: Cloud Hands. Standing position." */}
  {/* "Hold for 5 breaths. Breath 3 of 5." */}
  {/* "Rest. Continue when ready." */}
</div>

// Movement description (always text-based, never image-only)
<div
  role="region"
  aria-label="Movement instruction"
>
  <h2>{movementName}</h2>
  <p>{positionSpecificInstruction}</p>
  <p aria-label="Breath coordination">{breathCue}</p>
  <p aria-label="Body awareness">{bodyAwarenessCue}</p>
</div>

// Hold timer
<div
  role="timer"
  aria-live="polite"
  aria-label={`Hold: breath ${currentBreath} of ${totalBreaths}`}
/>

// Position selector
<fieldset aria-label="Select your practice position">
  <legend>Position</legend>
  {positions.map(pos => (
    <label key={pos}>
      <input
        type="radio"
        name="position"
        value={pos}
        checked={selectedPosition === pos}
        onChange={() => setPosition(pos)}
      />
      {positionLabels[pos]}
    </label>
  ))}
</fieldset>
```

### No Vision-Required Instructions

```tsx
// CRITICAL: All movement descriptions MUST be text-based
// No poses communicated only through images or video
// Screen reader users must receive complete movement instruction

const MovementInstruction = ({ movement, position }) => (
  <div>
    {/* Full text description of the movement */}
    <p>{movement.positions[position]}</p>

    {/* Direction cues use compass/clock references, not visual */}
    {/* "Reach your right arm forward" not "Reach toward the screen" */}
    {/* "Turn your head to the left" not "Look at the image" */}

    {/* Breath coordination in words */}
    <p>{movement.breathCoordination}</p>

    {/* Body sensation cues (proprioceptive, not visual) */}
    <p>{movement.bodyAwarenessCue}</p>
  </div>
);
```

### Reduced Motion

```tsx
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

// If reduced motion:
// - No animated transitions between movements
// - No pulsing hold timer
// - Instant phase changes (no slide/fade)
// - Static progress indicators
```

### Touch Targets

- All buttons minimum 48x48px
- Skip button always visible (never hidden or small)
- Position selector buttons large enough for motor difficulty (80x80px)
- Next/Previous with clear spacing
- Rest "Continue" button prominent and easy to reach

---

## Phase Behavior Specifications

### Safety Briefing Phase

```typescript
// Shown before EVERY session — cannot be skipped
const SafetyBriefing = () => (
  <div role="alert">
    <h2>Before You Begin</h2>
    <ul>
      <li>Move within comfort — never through pain</li>
      <li>If any movement hurts, reduce the range or skip it</li>
      <li>You can rest or stop at any time</li>
      <li>Choose your position: standing, seated, lying, or wheelchair</li>
    </ul>
    <button onClick={acknowledgeAndStart}>
      I understand — Begin Session
    </button>
  </div>
);
```

### Preparing Phase

```typescript
// Position selection and body scan check-in
const Preparing = ({ onPositionSelect, onReady }) => {
  // Step 1: Position selector (4 options)
  // Step 2: Brief body scan prompt
  //   "Close your eyes. Notice how your body feels right now."
  //   "Where do you feel tension? Ease? Numbness?"
  // Step 3: User initiates when ready
};
```

### Demonstrating Phase

```typescript
// Preview of next movement before practicing
const Demonstrating = ({ movement, position, onBegin, onSkip }) => {
  // Show movement name and full text description
  // Show position-specific instruction
  // Show breath coordination
  // Two buttons: "Begin This Movement" and "Skip This Movement"
  // Skip is always available — no movement is mandatory
};
```

### Practicing Phase

```typescript
// Active movement with hold timer
const Practicing = ({ movement, position, holdBreaths, onComplete, onSkip }) => {
  // Display: movement name, position-specific instruction
  // Hold timer: counts breaths (not seconds — breath paces the practice)
  // Body awareness cue displayed
  // Skip button always visible
  // Pause button available
  // Auto-advances when hold completes (or user presses Next)
};
```

### Resting Phase

```typescript
// Brief rest between movements
const Resting = ({ onContinue }) => {
  // Prompt: "Rest. Take a few natural breaths."
  // Body awareness: "Notice how your body feels after that movement."
  // User-initiated continue (not auto-timed)
  // Allows the practitioner to rest as long as needed
};
```

### Completing Phase

```typescript
// Session summary with body scan comparison
const Completing = ({ sessionData }) => (
  <div>
    <h2>Session Complete</h2>
    <p>Practice: {sessionData.tradition}</p>
    <p>Total time: {formatTime(sessionData.totalDurationSeconds)}</p>
    <p>Movements completed: {sessionData.movementsCompleted}</p>
    {sessionData.movementsSkipped > 0 && (
      <p>Movements skipped: {sessionData.movementsSkipped}
        <span className="reassurance">
          (skipping is always okay)
        </span>
      </p>
    )}
    <div className="body-scan-comparison">
      <p>Take a moment to scan your body again.</p>
      <p>How does it feel now compared to when you started?</p>
    </div>
    <p className="grounding-prompt">
      Stand up slowly if you were seated or lying down.
      Drink some water.
    </p>
    <div className="actions">
      <button>Done</button>
      <button>Journal</button>
    </div>
  </div>
);
```

---

## Modification Selector Behavior

```typescript
// Position can be changed at ANY time during the session
const ModificationSelector = ({ currentPosition, onChange }) => {
  // Displayed as dropdown or radio group
  // When changed mid-movement:
  //   1. Movement description updates to new position's instruction
  //   2. Hold timer continues (not reset)
  //   3. No disruption to session flow
  //   4. Announce change to screen reader
};

// Each movement MUST have all four position descriptions
// If a movement is not possible in a position, state:
// "For [position]: rest during this movement. Take a few breaths."
```

---

## Session Summary

After session completion, display:

```
┌─────────────────────────────────────────┐
│                                         │
│         Session Complete                │
│                                         │
│   Practice: Gentle Qigong               │
│   Tradition: Traditional Chinese Med.   │
│   Position: Seated                      │
│                                         │
│   Total time:    15:00                  │
│   Movements:     7 of 8 completed       │
│   Skipped:       1 (that's okay)        │
│                                         │
│   Body scan: How do you feel now        │
│   compared to when you started?         │
│                                         │
│   Stand up slowly. Drink water.         │
│                                         │
│   ┌──────────┐  ┌──────────┐            │
│   │  Done    │  │  Journal │            │
│   └──────────┘  └──────────┘            │
│                                         │
└─────────────────────────────────────────┘
```

**Privacy note:** Practice data is shown for self-awareness only.
No sharing, leaderboard, or social features. Data stays on device.

---

## Audio Specifications

| Sound | When | Character |
|-------|------|-----------|
| Session start | After safety acknowledgment | Soft bell |
| Movement transition | Moving to next movement | Gentle chime |
| Hold complete | Breath count reached | Soft tone |
| Rest start | Entering rest phase | None (silence) |
| Cool-down | Beginning cool-down | Descending tone |
| Session complete | After closing | Full closing bells |

All sounds: fade in/out, respect system volume, user-disableable.
Sounds are minimal — the focus is on body awareness, not audio.

---

## Testing Requirements

### Unit Tests
- [ ] Correct phase sequencing (preparing -> demonstrating -> practicing -> resting -> repeat)
- [ ] Hold timer accuracy (breath-based and second-based)
- [ ] Movement counter accuracy
- [ ] Skip tracking
- [ ] Position selector updates instructions correctly
- [ ] Pause/resume in each phase
- [ ] Session data compilation

### Accessibility Tests
- [ ] Safety briefing cannot be skipped
- [ ] All four positions available and functional
- [ ] Keyboard navigation for all phases
- [ ] Screen reader receives complete movement descriptions
- [ ] No instruction requires vision to understand
- [ ] Skip button accessible in all phases
- [ ] Position change works mid-movement
- [ ] Reduced motion respected
- [ ] Color contrast in all phases

### Integration Tests
- [ ] Audio cue timing matches phase transitions
- [ ] Background tab handling (timer continues)
- [ ] Mobile touch targets adequate
- [ ] Position selector responsive and easy to use
- [ ] Session summary data accurate
- [ ] Body scan comparison prompt appears at session end

---

## Implementation Notes

### Performance
- Movement descriptions should be preloaded (not fetched per-movement)
- Position selector changes should not re-render entire component
- Hold timer uses requestAnimationFrame for smooth display
- Phase transitions are instant (no heavy animations)

### Battery Considerations
- Minimal animation (movement practices don't need visual effects)
- Audio cues loaded on demand
- Screen wake lock during active session only

### Mobile Considerations
- Portrait layout optimized for one-handed use
- Bottom-aligned controls for thumb reach
- Position selector accessible without scrolling
- Large skip and next buttons
- Haptic feedback on movement transitions (if available)
- Text size adjustable for reading movement descriptions during practice

---

*"The guide describes the movement. The body interprets it. Trust the body's interpretation."*
