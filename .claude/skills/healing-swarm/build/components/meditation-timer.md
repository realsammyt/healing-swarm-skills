# Meditation Timer Component Specification

> A gentle, accessible timer for meditation and healing practices.

---

## Purpose

The Meditation Timer provides a calm, non-intrusive timing interface for
guided meditations, breathing exercises, and healing practices. It supports
users who may be in pain, have limited mobility, or need accessibility
accommodations.

---

## Component API

```typescript
interface MeditationTimerProps {
  /** Duration in milliseconds. Default: 5 minutes (300000) */
  duration?: number;

  /** Preset durations to offer [ms]. Default: [180000, 300000, 600000, 900000] */
  presets?: number[];

  /** Enable audio cues (bells, chimes). Default: true */
  audioEnabled?: boolean;

  /** Audio volume 0-1. Default: 0.5 */
  audioVolume?: number;

  /** Show visual progress indicator. Default: true */
  showProgress?: boolean;

  /** Called when timer completes */
  onComplete?: () => void;

  /** Called when timer starts */
  onStart?: () => void;

  /** Called when timer pauses */
  onPause?: () => void;

  /** Called on each tick (for external sync). Called every second. */
  onTick?: (remainingMs: number) => void;

  /** Custom completion message */
  completionMessage?: string;

  /** Extend with breathing pace guide */
  breathingGuide?: BreathingPattern;

  /** Minimal UI mode (hides most chrome) */
  minimal?: boolean;
}

interface BreathingPattern {
  /** Inhale duration in seconds */
  inhale: number;
  /** Hold after inhale in seconds */
  holdIn?: number;
  /** Exhale duration in seconds */
  exhale: number;
  /** Hold after exhale in seconds */
  holdOut?: number;
}
```

---

## Visual Design

### Layout

```
┌─────────────────────────────────────────┐
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │     05:00       │  ← Time     │
│         │                 │             │
│         └─────────────────┘             │
│                                         │
│         ════════════════                │  ← Progress bar
│                                         │
│         ┌───┐         ┌───┐             │
│         │ ▶ │         │ ✕ │             │  ← Controls
│         └───┘         └───┘             │
│         Start          Exit             │
│                                         │
│         3 min  5 min  10 min  15 min    │  ← Presets
│                                         │
└─────────────────────────────────────────┘
```

### Minimal Mode Layout

```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│               05:00                     │
│                                         │
│         ════════════════════            │
│                                         │
│              ⏸  Pause                   │
│                                         │
└─────────────────────────────────────────┘
```

### States

| State | Visual | Audio |
|-------|--------|-------|
| Idle | Duration selector visible, Start button | None |
| Running | Time counting down, Pause button | Opening bell (optional) |
| Paused | Time frozen, Resume button, timer pulses gently | None |
| Complete | Completion message, time shows 0:00 | Closing bell |

---

## Design Tokens

```css
/* Timer-specific tokens (extend base design tokens) */
.meditation-timer {
  /* Typography */
  --timer-font-size: var(--font-size-4xl);
  --timer-font-weight: var(--font-weight-normal);
  --timer-font-family: var(--font-mono);

  /* Colors */
  --timer-text: var(--color-calm-800);
  --timer-progress-bg: var(--color-calm-100);
  --timer-progress-fill: var(--color-healing-500);

  /* Spacing */
  --timer-padding: var(--spacing-8);
  --timer-gap: var(--spacing-4);

  /* Animation */
  --timer-transition: 0.3s ease-out;
}

/* Dark mode */
.dark .meditation-timer {
  --timer-text: var(--color-calm-100);
  --timer-progress-bg: var(--color-calm-700);
}
```

---

## Accessibility Requirements

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Toggle start/pause |
| `Escape` | Exit timer (confirm if running) |
| `Arrow Left/Right` | Adjust duration (when not running) |
| `Arrow Up/Down` | Adjust volume |
| `M` | Toggle mute |

### Screen Reader Support

```tsx
// Time remaining announced
<div
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-label={`${minutes} minutes and ${seconds} seconds remaining`}
>
  {formatTime(remaining)}
</div>

// Progress bar
<progress
  role="progressbar"
  aria-valuemin={0}
  aria-valuemax={duration}
  aria-valuenow={duration - remaining}
  aria-label="Meditation progress"
/>

// Announce milestones
// - "5 minutes remaining"
// - "1 minute remaining"
// - "30 seconds remaining"
// - "Meditation complete"
```

### Reduced Motion

```tsx
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

// If reduced motion:
// - No pulsing animation on pause
// - Instant progress updates (no smooth transition)
// - No entrance/exit animations
```

### Touch Targets

- All buttons minimum 48x48px
- Spacing between buttons minimum 8px
- Preset buttons can be smaller if grouped (but still tappable)

---

## Audio Specifications

### Sound Types

| Sound | When | Default File | Duration |
|-------|------|--------------|----------|
| Opening bell | Timer starts | `bell-start.mp3` | 2-3s |
| Interval chime | Every 5 min (optional) | `chime-soft.mp3` | 1s |
| Closing bells | Timer completes | `bell-complete.mp3` | 3-5s |

### Audio Requirements

- Respect system mute/volume
- Fade in/out (no abrupt sounds)
- User can disable entirely
- Volume control available
- Sounds should be calm, not jarring

### Audio Implementation

```typescript
const playSound = async (soundName: string) => {
  if (!audioEnabled || document.hidden) return;

  const audio = new Howl({
    src: [`/sounds/${soundName}.mp3`, `/sounds/${soundName}.ogg`],
    volume: audioVolume,
    html5: true, // Better for mobile
  });

  audio.fade(0, audioVolume, 500); // Fade in
  audio.play();
};
```

---

## Behavior Specifications

### Timer Accuracy

- Use `requestAnimationFrame` for smooth display updates
- Use `performance.now()` for accurate elapsed time
- Don't rely on `setInterval` alone (can drift)
- Handle background tabs (timer continues, display updates on return)

### Background Behavior

```typescript
// When tab becomes hidden
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Timer continues running (don't pause)
    // But don't play sounds while hidden
  } else {
    // On return, immediately sync display to actual remaining time
    syncDisplayToActualTime();
  }
});
```

### Completion Behavior

1. Play completion sound (if enabled)
2. Display completion message
3. Optionally vibrate (mobile, if permitted)
4. Call `onComplete` callback
5. Reset to idle state after short delay (3-5 seconds)

---

## Breathing Guide Integration

When `breathingGuide` prop is provided:

```
┌─────────────────────────────────────────┐
│                                         │
│               05:00                     │
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │   ○ BREATHE IN  │  ← Breathing │
│         │                 │     prompt   │
│         └─────────────────┘             │
│                                         │
│         ════════════════════            │
│                                         │
└─────────────────────────────────────────┘
```

### Breathing States

```typescript
type BreathPhase = 'inhale' | 'holdIn' | 'exhale' | 'holdOut';

// Visual indicators
const breathingVisuals = {
  inhale: { text: 'Breathe in...', expanding: true },
  holdIn: { text: 'Hold...', static: true },
  exhale: { text: 'Breathe out...', contracting: true },
  holdOut: { text: 'Rest...', static: true },
};
```

---

## Example Usage

### Basic Timer

```tsx
<MeditationTimer
  duration={600000} // 10 minutes
  onComplete={() => navigateToJournal()}
/>
```

### With Breathing Guide

```tsx
<MeditationTimer
  duration={300000} // 5 minutes
  breathingGuide={{
    inhale: 4,
    holdIn: 4,
    exhale: 6,
    holdOut: 2,
  }}
  audioEnabled={true}
  onComplete={handleComplete}
/>
```

### Minimal Mode (During Practice)

```tsx
<MeditationTimer
  duration={practiceLength}
  minimal={true}
  showProgress={true}
  audioEnabled={false} // Using practice audio instead
/>
```

---

## Testing Requirements

### Unit Tests

- [ ] Timer accuracy over various durations
- [ ] Correct formatting of time display
- [ ] Proper handling of pause/resume
- [ ] Callback invocations at correct times
- [ ] Duration preset selection

### Accessibility Tests

- [ ] Keyboard navigation complete
- [ ] Screen reader announcements work
- [ ] Focus management correct
- [ ] Reduced motion respected
- [ ] Color contrast passes

### Integration Tests

- [ ] Audio plays correctly
- [ ] Background tab handling
- [ ] Mobile touch interactions
- [ ] PWA offline functionality

---

## Implementation Notes

### Performance

- Timer updates should not cause unnecessary re-renders
- Use CSS transforms for animations (GPU accelerated)
- Memoize formatted time strings
- Debounce progress bar updates (every 100ms is enough)

### Battery Considerations

- Don't run timers at 60fps when not visible
- Use efficient audio loading (load on demand)
- Minimize wake locks (only when actively timing)

### Mobile Considerations

- Keep screen awake during active meditation (WakeLock API)
- Handle app backgrounding gracefully
- Support both portrait and landscape
- Bottom controls for thumb reach

---

*"The timer should fade into the background, supporting presence rather than demanding attention."*
