# Breathwork Timer Component Specification

> A specialized timer for Wim Hof Method breathing sessions with round tracking,
> breath counting, retention timing, and recovery phase management.

---

## Purpose

The Breathwork Timer provides a structured, phase-aware timing interface for
WHM breathing sessions. It guides practitioners through power breaths (with
counting), retention holds (with elapsed time), and recovery breaths — across
multiple rounds. It supports users at all experience levels with appropriate
visual and audio cues.

Unlike the Meditation Timer (which counts down a single duration), the
Breathwork Timer manages a complex multi-phase, multi-round structure with
distinct behaviors per phase.

---

## Component API

```typescript
interface BreathworkTimerProps {
  /** Number of rounds. Default: 3 */
  rounds?: number;

  /** Breaths per round. Default: 30 */
  breathsPerRound?: number;

  /** Breathing pace in seconds per cycle (inhale + exhale). Default: 2.5 */
  breathPaceSeconds?: number;

  /** Recovery hold duration in seconds. Default: 15 */
  recoveryHoldSeconds?: number;

  /** Rest between rounds in seconds. Default: 20 */
  restBetweenRounds?: number;

  /** Experience level (affects UI detail). Default: 'beginner' */
  level?: 'beginner' | 'intermediate' | 'advanced';

  /** Enable audio cues. Default: true */
  audioEnabled?: boolean;

  /** Audio volume 0-1. Default: 0.5 */
  audioVolume?: number;

  /** Include guided voice prompts. Default: true for beginner */
  voiceGuidance?: boolean;

  /** Called when entire session completes */
  onSessionComplete?: (sessionData: SessionData) => void;

  /** Called when a round completes */
  onRoundComplete?: (roundData: RoundData) => void;

  /** Called on phase change */
  onPhaseChange?: (phase: BreathPhase) => void;

  /** Custom safety message shown before start */
  safetyMessage?: string;

  /** Minimal UI mode */
  minimal?: boolean;
}

interface SessionData {
  totalRounds: number;
  totalDurationSeconds: number;
  rounds: RoundData[];
}

interface RoundData {
  roundNumber: number;
  breathCount: number;
  retentionSeconds: number;
  recoveryHoldSeconds: number;
}

type BreathPhase =
  | 'safety_briefing'
  | 'settling'
  | 'power_breaths'
  | 'retention'
  | 'recovery_breath'
  | 'recovery_hold'
  | 'rest'
  | 'closing'
  | 'complete';
```

---

## Visual Design

### Main Layout

```
┌─────────────────────────────────────────┐
│                                         │
│         Round 2 of 3                    │  ← Round indicator
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │  BREATHE IN     │             │  ← Phase display
│         │                 │             │
│         │    15 / 30      │             │  ← Breath counter
│         │                 │             │
│         └─────────────────┘             │
│                                         │
│         ○ ○ ○ ● ○ ○ ○ ○ ○ ○            │  ← Round progress dots
│                                         │
│         ┌───┐         ┌───┐             │
│         │ ⏸ │         │ ✕ │             │  ← Controls
│         └───┘         └───┘             │
│         Pause          Stop             │
│                                         │
│   ⚠ Seated or lying down only          │  ← Persistent safety
│                                         │
└─────────────────────────────────────────┘
```

### Retention Phase Layout

```
┌─────────────────────────────────────────┐
│                                         │
│         Round 2 of 3                    │
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │   HOLD          │             │  ← Phase display
│         │                 │             │
│         │   1:23          │             │  ← Elapsed time (counts up)
│         │                 │             │
│         └─────────────────┘             │
│                                         │
│         ┌─────────────────────┐         │
│         │  Take Recovery      │         │  ← Recovery trigger button
│         │  Breath             │         │     (press when ready)
│         └─────────────────────┘         │
│                                         │
│   Relax your body. Breathe when ready.  │  ← Gentle reminder
│                                         │
└─────────────────────────────────────────┘
```

### Recovery Hold Layout

```
┌─────────────────────────────────────────┐
│                                         │
│         Round 2 of 3                    │
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │   HOLD FULL     │             │
│         │                 │             │
│         │   ████████░░    │             │  ← Countdown bar
│         │      12s        │             │
│         │                 │             │
│         └─────────────────┘             │
│                                         │
│   Hold your breath with lungs full.     │
│                                         │
└─────────────────────────────────────────┘
```

### Minimal Mode

```
┌─────────────────────────────────────────┐
│                                         │
│         R2 · HOLD · 1:23               │
│                                         │
│         [Take Recovery Breath]          │
│                                         │
└─────────────────────────────────────────┘
```

### States

| State | Visual | Audio | User Action |
|-------|--------|-------|-------------|
| Safety Briefing | Safety text, confirm button | None | Must acknowledge |
| Settling | "Settle in..." countdown | Soft tone | Wait |
| Power Breaths | Breath counter + pace animation | Rhythm cue (optional) | Breathe along |
| Retention | Elapsed time counting UP | Descending tone at start | Press "Recovery" when ready |
| Recovery Breath | "Breathe in deeply" prompt | Bright bell | Breathe |
| Recovery Hold | Countdown from 15s | None | Hold |
| Rest | "Rest" with countdown | None | Breathe normally |
| Closing | Body scan prompt | Soft closing bells | Rest |
| Complete | Summary card | Completion chime | Review / dismiss |

---

## Design Tokens

```css
/* Breathwork timer tokens (extend meditation timer) */
.breathwork-timer {
  /* Phase colors */
  --phase-power-breaths: var(--color-energy-500);
  --phase-retention: var(--color-calm-600);
  --phase-recovery: var(--color-healing-500);
  --phase-rest: var(--color-calm-300);

  /* Breath animation */
  --breath-animation-inhale: 1.2s ease-in;
  --breath-animation-exhale: 1.5s ease-out;

  /* Counter */
  --counter-font-size: var(--font-size-3xl);
  --counter-font-weight: var(--font-weight-bold);

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
| `Space` / `Enter` | Start/pause; trigger recovery breath during retention |
| `Escape` | Stop session (confirm if mid-round) |
| `Arrow Up/Down` | Adjust volume |
| `M` | Toggle mute |
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
  {/* "Round 2, Power Breaths, breath 15 of 30" */}
  {/* "Round 2, Retention, holding for 1 minute 23 seconds" */}
  {/* "Recovery breath now" */}
</div>

// Breath counter
<div
  role="status"
  aria-live="polite"
  aria-label={`Breath ${currentBreath} of ${totalBreaths}`}
/>

// Retention timer (announced every 30 seconds)
<div
  role="timer"
  aria-live="polite"
  aria-label={`Holding for ${formatTime(retentionElapsed)}`}
/>
```

### Reduced Motion

```tsx
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

// If reduced motion:
// - No breathing animation (expanding/contracting circle)
// - Static breath counter (no animation between counts)
// - Instant phase transitions (no fade/slide)
// - Text-only phase indicators (no pulsing)
```

### Touch Targets

- All buttons minimum 48x48px
- Recovery breath button: larger (minimum 64x64px) for easy press during retention
- Phase skip requires deliberate action (not accidentally tappable)

---

## Phase Behavior Specifications

### Safety Briefing Phase

```typescript
// Shown before EVERY session — cannot be skipped
const SafetyBriefing = () => (
  <div role="alert">
    <h2>Before You Begin</h2>
    <ul>
      <li>Sit or lie down on a safe surface</li>
      <li>Never practice in or near water</li>
      <li>Never practice while driving</li>
      <li>Stop if you feel chest pain or severe discomfort</li>
    </ul>
    <button onClick={acknowledgeAndStart}>
      I understand — Begin Session
    </button>
  </div>
);
```

### Power Breaths Phase

```typescript
// Rhythmic counting with pace guide
const PowerBreaths = ({ count, pace, onComplete }) => {
  // Visual: expanding circle on inhale, contracting on exhale
  // Audio: optional rhythm cue (tick or tone)
  // Counter: "1... 2... 3..." incrementing with each breath
  // Final breath: "Last breath — breathe in fully... and let it go"
};
```

### Retention Phase

```typescript
// Counts UP from 0 (elapsed time, not countdown)
// User-terminated (press button when ready for recovery breath)
const Retention = ({ onRecoveryRequest }) => {
  // Timer counts up: 0:00, 0:01, 0:02...
  // No target displayed (prevents competitive holding)
  // Recovery button always visible and accessible
  // Gentle periodic reminders: "Relax your body" (every 30s)
  // Screen reader: announce time every 30 seconds
};
```

### Recovery Phase

```typescript
// Guided recovery breath with countdown hold
const Recovery = ({ holdDuration, onComplete }) => {
  // Step 1: "Deep breath IN" (2-3 seconds)
  // Step 2: "Hold..." with countdown (holdDuration seconds)
  // Step 3: "And release..." (2 seconds)
  // Transition to rest or next round
};
```

---

## Session Summary

After session completion, display:

```
┌─────────────────────────────────────────┐
│                                         │
│         Session Complete                │
│                                         │
│   Total time:    14:32                  │
│   Rounds:        3                      │
│                                         │
│   Round 1:  Retention  0:47             │
│   Round 2:  Retention  1:12             │
│   Round 3:  Retention  1:34             │
│                                         │
│   Remember: Stand up slowly.            │
│                                         │
│   ┌──────────┐  ┌──────────┐            │
│   │  Done    │  │  Journal │            │
│   └──────────┘  └──────────┘            │
│                                         │
└─────────────────────────────────────────┘
```

**Privacy note:** Retention times are shown for self-awareness only.
No sharing, leaderboard, or social features. Data stays on device.

---

## Audio Specifications

| Sound | When | Character |
|-------|------|-----------|
| Session start | After safety acknowledgment | Soft bell |
| Breath rhythm | Each breath cycle (optional) | Subtle tick or tone |
| Last breath | Final breath of power phase | Slightly different tone |
| Retention start | Beginning of hold | Descending tone (calming) |
| Recovery cue | User presses recovery button | Bright, clear bell |
| Recovery countdown | Each second of recovery hold | Subtle tick |
| Round complete | After recovery exhale | Warm chime |
| Session complete | After final round | Full closing bells |

All sounds: fade in/out, respect system volume, user-disableable.

---

## Testing Requirements

### Unit Tests
- [ ] Correct phase sequencing (power → retention → recovery → rest → repeat)
- [ ] Breath counter accuracy
- [ ] Retention timer accuracy (counts up)
- [ ] Recovery countdown accuracy
- [ ] Round tracking
- [ ] Session data compilation
- [ ] Pause/resume in each phase

### Accessibility Tests
- [ ] Safety briefing cannot be skipped
- [ ] Keyboard navigation for all phases
- [ ] Screen reader phase announcements
- [ ] Recovery button accessible during retention
- [ ] Reduced motion respected
- [ ] Color contrast in all phases

### Integration Tests
- [ ] Audio cue timing matches phase transitions
- [ ] Background tab handling (timer continues)
- [ ] Mobile touch targets adequate
- [ ] Session summary data accurate

---

## Implementation Notes

### Performance
- Breath animation should use CSS transforms (GPU accelerated)
- Counter updates don't re-render entire component
- Retention timer uses requestAnimationFrame for smooth display
- Phase transitions preload next phase's audio

### Battery Considerations
- Breath animation can be simplified after first round
- Audio cues loaded on demand
- Screen wake lock during active session only

### Mobile Considerations
- Recovery breath button must be large and thumb-reachable
- Portrait layout optimized for one-handed use
- Bottom-aligned controls
- Haptic feedback on phase transitions (if available)

---

*"Guide the rhythm. Track the rounds. The timer serves the breath, not the other way around."*
