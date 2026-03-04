# Sound Guide Component Specification

> A specialized interface for guided sound healing practices with toning,
> chanting, and mantra support, timer integration, and optional reference
> audio playback.

---

## Purpose

The Sound Guide provides a structured, phase-aware interface for sound
healing sessions. It guides practitioners through warm-up humming, core
sounding practice (toning, mantra, or chanting), silence intervals, and
cool-down — with visual cues for pitch awareness, volume guidance, and
timer integration for chanting rounds.

Unlike the Meditation Timer (which counts down a single duration) or the
Breathwork Timer (which tracks breath phases), the Sound Guide manages
a multi-phase sound practice with distinct sounding and silence periods,
optional reference tone playback, and visual feedback for practitioners
who are deaf or hard of hearing.

---

## Component API

```typescript
interface SoundGuideProps {
  /** Practice type. Default: 'humming' */
  practiceType?: 'listening' | 'humming' | 'toning' | 'mantra' | 'chanting';

  /** Total session duration in seconds. Default: 600 (10 minutes) */
  duration?: number;

  /** Warm-up duration in seconds. Default: 180 */
  warmUpDuration?: number;

  /** Cool-down duration in seconds. Default: 120 */
  coolDownDuration?: number;

  /** Silence interval frequency in seconds. Default: 180 (every 3 min) */
  silenceIntervalFrequency?: number;

  /** Silence interval duration in seconds. Default: 20 */
  silenceIntervalDuration?: number;

  /** Mantra or tone text to display. Default: null */
  soundText?: string;

  /** Tradition of origin. Default: null */
  tradition?: string;

  /** Experience level (affects UI detail). Default: 'beginner' */
  level?: 'beginner' | 'intermediate' | 'advanced';

  /** Enable audio cues (bells, reference tones). Default: true */
  audioEnabled?: boolean;

  /** Audio volume 0-1. Default: 0.5 */
  audioVolume?: number;

  /** Enable reference tone playback. Default: false */
  referenceToneEnabled?: boolean;

  /** Reference tone frequency in Hz. Default: null (user selects) */
  referenceToneFrequency?: number;

  /** Enable optional singing bowl audio playback. Default: false */
  bowlAudioEnabled?: boolean;

  /** Include voice guidance prompts. Default: true for beginner */
  voiceGuidance?: boolean;

  /** Number of mantra repetitions (if counting). Default: null (timer-based) */
  repetitions?: number;

  /** Called when entire session completes */
  onSessionComplete?: (sessionData: SoundSessionData) => void;

  /** Called on phase change */
  onPhaseChange?: (phase: SoundPhase) => void;

  /** Custom safety message shown before start */
  safetyMessage?: string;

  /** Minimal UI mode */
  minimal?: boolean;
}

interface SoundSessionData {
  totalDurationSeconds: number;
  practiceType: string;
  tradition: string | null;
  soundingDurationSeconds: number;
  silenceDurationSeconds: number;
  repetitionsCompleted: number | null;
}

type SoundPhase =
  | 'safety_briefing'
  | 'preparing'
  | 'listening'
  | 'sounding'
  | 'silence_interval'
  | 'resting'
  | 'completing';
```

---

## Visual Design

### Main Layout — Sounding Phase

```
┌─────────────────────────────────────────┐
│                                         │
│         Sound Practice                  │  <- Practice label
│         Tradition: Vedic Mantra         │  <- Tradition attribution
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │      OM         │             │  <- Sound/mantra text
│         │                 │             │
│         │   ════████░░    │             │  <- Visual pitch/vibration
│         │                 │             │     indicator
│         └─────────────────┘             │
│                                         │
│         05:32 remaining                 │  <- Session timer
│                                         │
│         ┌───┐   ┌───┐   ┌───┐          │
│         │ ⏸ │   │ 🔇 │   │ ✕ │          │  <- Controls
│         └───┘   └───┘   └───┘          │
│         Pause   Mute    Stop           │
│                                         │
│   Volume: comfortable, never straining  │  <- Persistent safety
│                                         │
└─────────────────────────────────────────┘
```

### Silence Interval Layout

```
┌─────────────────────────────────────────┐
│                                         │
│         Sound Practice                  │
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │   SILENCE       │             │  <- Phase display
│         │                 │             │
│         │   Listen.       │             │  <- Gentle prompt
│         │   Notice your   │             │
│         │   body.         │             │
│         │                 │             │
│         │      :15        │             │  <- Countdown
│         │                 │             │
│         └─────────────────┘             │
│                                         │
│   The silence after sound is part of    │  <- Reminder
│   the practice.                         │
│                                         │
└─────────────────────────────────────────┘
```

### Preparing Phase Layout

```
┌─────────────────────────────────────────┐
│                                         │
│         Preparing                       │
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │  Relax your     │             │
│         │  jaw and        │             │
│         │  shoulders.     │             │
│         │                 │             │
│         │  Take 3 slow    │             │
│         │  breaths.       │             │
│         │                 │             │
│         └─────────────────┘             │
│                                         │
│   ┌────────────────────────────┐        │
│   │  Begin When Ready          │        │  <- User-initiated start
│   └────────────────────────────┘        │
│                                         │
└─────────────────────────────────────────┘
```

### Listening Phase Layout (for listening-only practices)

```
┌─────────────────────────────────────────┐
│                                         │
│         Listening Practice              │
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │   ♪ ═══════     │             │  <- Audio waveform /
│         │                 │             │     visual representation
│         │   Singing Bowl  │             │
│         │                 │             │
│         └─────────────────┘             │
│                                         │
│         Notice where you feel           │  <- Body awareness cue
│         the sound in your body.         │
│                                         │
│         05:00 remaining                 │
│                                         │
│         Volume ═══████░░░               │  <- Volume slider
│                                         │
└─────────────────────────────────────────┘
```

### Minimal Mode

```
┌─────────────────────────────────────────┐
│                                         │
│         OM · SOUNDING · 5:32            │
│                                         │
│         ════████░░░░                    │
│                                         │
│              ⏸  Pause                   │
│                                         │
└─────────────────────────────────────────┘
```

### States

| State | Visual | Audio | User Action |
|-------|--------|-------|-------------|
| Safety Briefing | Safety text, confirm button | None | Must acknowledge |
| Preparing | Jaw/breath preparation prompts | None | Begin when ready |
| Listening | Waveform/visual, body cue | Bowl/tone playback | Listen, observe |
| Sounding | Mantra/tone text, vibration indicator | Reference tone (optional) | Hum/tone/chant |
| Silence Interval | "Silence" prompt, countdown | None (silence) | Listen, feel |
| Resting | "Rest" with gentle prompt | None | Breathe normally |
| Completing | Summary card, body scan prompt | Soft closing bell | Review / dismiss |

---

## Design Tokens

```css
/* Sound guide tokens (extend meditation timer) */
.sound-guide {
  /* Phase colors */
  --phase-preparing: var(--color-calm-300);
  --phase-listening: var(--color-calm-500);
  --phase-sounding: var(--color-healing-500);
  --phase-silence: var(--color-calm-200);
  --phase-resting: var(--color-calm-300);

  /* Sound text */
  --sound-text-font-size: var(--font-size-3xl);
  --sound-text-font-weight: var(--font-weight-bold);
  --sound-text-color: var(--color-healing-700);

  /* Vibration indicator */
  --vibration-color: var(--color-healing-400);
  --vibration-animation: 0.8s ease-in-out infinite;

  /* Tradition label */
  --tradition-font-size: var(--font-size-sm);
  --tradition-color: var(--color-calm-600);

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
| `Space` / `Enter` | Start/pause; advance through phases |
| `Escape` | Stop session (confirm if mid-practice) |
| `Arrow Up/Down` | Adjust volume |
| `M` | Toggle mute |
| `R` | Play/stop reference tone |
| `S` | Skip to next phase (with confirmation) |

### Screen Reader Support

```tsx
// Phase announcements
<div
  role="status"
  aria-live="assertive"
  aria-atomic="true"
>
  {phaseAnnouncement}
  {/* "Sounding phase. Mantra: Om. 5 minutes 32 seconds remaining" */}
  {/* "Silence interval. 15 seconds" */}
  {/* "Cool-down. Gradually reduce your volume" */}
</div>

// Sound/mantra text
<div
  role="status"
  aria-live="polite"
  aria-label={`Current sound: ${soundText}`}
/>

// Timer
<div
  role="timer"
  aria-live="polite"
  aria-label={`${formatTime(remaining)} remaining`}
/>
```

### Visual Pitch Indicator for Deaf/Hard-of-Hearing Users

```tsx
// Visual representation of vibration/pitch for practitioners
// who cannot hear the sound but can feel vibration
const VibrationIndicator = ({ isActive, intensity }) => (
  <div
    role="status"
    aria-label={isActive ? "Sounding active" : "Silence"}
    className="vibration-indicator"
  >
    {/* Animated bar that pulses during sounding phases */}
    {/* Provides visual rhythm cue for breath-synchronized practice */}
    {/* Static during silence intervals */}
    <div
      className={isActive ? "vibration-active" : "vibration-silent"}
      style={{ '--intensity': intensity }}
    />
    {isActive && (
      <p className="vibration-cue">
        Place your hand on your chest to feel the vibration.
      </p>
    )}
  </div>
);
```

### Reduced Motion

```tsx
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

// If reduced motion:
// - No pulsing vibration animation
// - Static phase indicators (no fade/slide)
// - Text-only phase transitions
// - Waveform visualization replaced with static icon
```

### Reduced Audio

```tsx
const prefersReducedAudio = userPreferences.reducedAudio;

// If reduced audio:
// - No reference tone playback
// - No bowl audio playback
// - Transition bells replaced with visual-only indicators
// - Focus on vibrotactile (hand on chest) guidance
```

### Touch Targets

- All buttons minimum 48x48px
- Volume control: slider with large handle (minimum 48px)
- Phase skip requires deliberate action
- Mute button easily accessible during practice

---

## Phase Behavior Specifications

### Safety Briefing Phase

```typescript
// Shown before EVERY session — cannot be skipped
const SafetyBriefing = () => (
  <div role="alert">
    <h2>Before You Begin</h2>
    <ul>
      <li>Practice at a comfortable volume — never straining</li>
      <li>Stop if you experience ear pain or dizziness</li>
      <li>If you have tinnitus, use soft humming only</li>
      <li>There is no correct pitch — let your body choose</li>
    </ul>
    <button onClick={acknowledgeAndStart}>
      I understand — Begin Session
    </button>
  </div>
);
```

### Preparing Phase

```typescript
// Jaw relaxation and breath settling
const Preparing = ({ onReady }) => {
  // Prompts: "Relax your jaw... Roll your shoulders... 3 settling breaths"
  // User initiates when ready (not auto-timed)
  // Optional: pronunciation guide for mantra practices
};
```

### Sounding Phase

```typescript
// Core sound practice with mantra/tone display and timer
const Sounding = ({ soundText, duration, silenceInterval, onPhaseEnd }) => {
  // Display: mantra/tone text prominently
  // Timer: counts down remaining time
  // Vibration indicator: visual pulse during sounding
  // Silence intervals: automatic pauses for integration
  // Reference tone: optional playback button
  // Body awareness cues: periodic "notice the vibration" prompts
};
```

### Silence Interval Phase

```typescript
// Automatic pauses during sounding for integration
const SilenceInterval = ({ duration, onComplete }) => {
  // Display: "Silence" with countdown
  // Audio: complete silence (no bells, no tones)
  // Prompt: "Listen. Notice your body."
  // Auto-advances when duration completes
};
```

### Completing Phase

```typescript
// Session summary and grounding
const Completing = ({ sessionData }) => (
  <div>
    <h2>Session Complete</h2>
    <p>Total time: {formatTime(sessionData.totalDurationSeconds)}</p>
    <p>Sounding: {formatTime(sessionData.soundingDurationSeconds)}</p>
    <p>Silence: {formatTime(sessionData.silenceDurationSeconds)}</p>
    {sessionData.repetitionsCompleted && (
      <p>Repetitions: {sessionData.repetitionsCompleted}</p>
    )}
    <p className="grounding-prompt">
      Take a moment. Feel your body. Sip water if available.
    </p>
    <div className="actions">
      <button>Done</button>
      <button>Journal</button>
    </div>
  </div>
);
```

---

## Session Summary

After session completion, display:

```
┌─────────────────────────────────────────┐
│                                         │
│         Session Complete                │
│                                         │
│   Practice: Om Toning                   │
│   Tradition: Vedic                      │
│                                         │
│   Total time:    10:00                  │
│   Sounding:       7:20                  │
│   Silence:        2:40                  │
│                                         │
│   Take a gentle moment before           │
│   moving on.                            │
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
| Reference tone | User-activated during sounding | Sustained, gentle tone |
| Bowl playback | User-activated for listening practices | Singing bowl recording |
| Silence start | Beginning of silence interval | Single soft bell |
| Silence end | End of silence interval | Single soft bell |
| Cool-down | Beginning of cool-down phase | Descending tone |
| Session complete | After closing | Full closing bells |

All sounds: fade in/out, respect system volume, user-disableable.

### Reference Tone Implementation

```typescript
// Optional reference tone using Web Audio API
const playReferenceTone = (frequency: number, volume: number) => {
  const ctx = new AudioContext();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;
  gainNode.gain.value = volume * 0.3; // Keep reference tone quiet

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  // Fade in
  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(volume * 0.3, ctx.currentTime + 1);

  oscillator.start();
  return { oscillator, gainNode, ctx };
};
```

---

## Testing Requirements

### Unit Tests
- [ ] Correct phase sequencing (preparing -> sounding -> silence -> sounding -> cool-down)
- [ ] Silence interval timing and frequency
- [ ] Session timer accuracy
- [ ] Repetition counter accuracy (for mantra counting)
- [ ] Reference tone playback/stop
- [ ] Pause/resume in each phase
- [ ] Session data compilation

### Accessibility Tests
- [ ] Safety briefing cannot be skipped
- [ ] Keyboard navigation for all phases
- [ ] Screen reader phase announcements
- [ ] Visual vibration indicator works without audio
- [ ] Reduced motion respected
- [ ] Reduced audio alternative works
- [ ] Color contrast in all phases

### Integration Tests
- [ ] Audio cue timing matches phase transitions
- [ ] Reference tone does not conflict with transition bells
- [ ] Background tab handling (timer continues)
- [ ] Mobile touch targets adequate
- [ ] Volume control responsive and smooth
- [ ] Session summary data accurate

---

## Implementation Notes

### Performance
- Vibration indicator animation uses CSS transforms (GPU accelerated)
- Timer updates don't re-render entire component
- Reference tone uses Web Audio API (not HTML5 audio element)
- Phase transitions preload next phase's audio if applicable
- Bowl audio loaded on demand, not at initialization

### Battery Considerations
- Vibration animation simplified after initial display
- Reference tone suspended when not actively playing
- Screen wake lock during active session only
- Audio context suspended between uses

### Mobile Considerations
- Volume control must be large and thumb-reachable
- Portrait layout optimized for one-handed use
- Bottom-aligned controls
- Haptic feedback on phase transitions (if available)
- Respect system Do Not Disturb settings

---

*"The guide serves the sound. The sound serves the silence. The silence serves the body."*
