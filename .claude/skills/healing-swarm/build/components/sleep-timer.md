# Sleep Timer Component Specification

> A gradual dimming interface for bedtime practices with progressive
> fade-out and gentle morning journal prompt.

---

## Purpose

The Sleep Timer provides a calm, progressively darkening interface for
evening wind-down practices, bedtime meditations, and sleep transitions.
It supports users through the descent from waking activity to sleep onset,
then automatically shuts off to avoid screen disruption. In the morning,
it offers a gentle dream journal prompt.

**Dark mode is mandatory for this component at all times.**

---

## Component API

```typescript
interface SleepTimerProps {
  /** Total practice duration in milliseconds. Default: 20 minutes (1200000) */
  duration?: number;

  /** Preset durations to offer [ms]. Default: [600000, 900000, 1200000, 1800000] */
  presets?: number[];

  /** Practice type. Affects phase structure and pacing. */
  practiceType?: 'wind-down' | 'meditation' | 'dream-work';

  /** Enable audio cues (gentle tones, nature sounds). Default: true */
  audioEnabled?: boolean;

  /** Audio volume 0-1. Default: 0.3 (lower than meditation timer) */
  audioVolume?: number;

  /** Enable progressive screen dimming. Default: true */
  progressiveDim?: boolean;

  /** Enable warm color temperature shift. Default: true */
  warmShift?: boolean;

  /** Minutes before auto-shutoff after practice ends. Default: 1 */
  autoShutoffDelay?: number;

  /** Enable morning dream journal prompt. Default: true */
  morningPrompt?: boolean;

  /** Custom morning journal prompt text */
  morningPromptText?: string;

  /** Called when practice completes (before auto-shutoff) */
  onComplete?: () => void;

  /** Called when screen is about to shut off */
  onShutoff?: () => void;

  /** Called when morning prompt is displayed */
  onMorningPrompt?: () => void;

  /** Called on each phase transition */
  onPhaseChange?: (phase: SleepPhase) => void;

  /** Enable haptic feedback for silent mode. Default: false */
  hapticFeedback?: boolean;

  /** Breathing guide overlay (optional, for pre-sleep breathing) */
  breathingGuide?: BreathingPattern;
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

type SleepPhase =
  | 'preparing'
  | 'winding-down'
  | 'deepening'
  | 'fading-out'
  | 'sleep-transition';
```

---

## Visual Design

### Layout — Preparing State

```
┌─────────────────────────────────────────┐
│  ● dark background, warm tint           │
│                                         │
│         Evening Practice                │
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │     20:00       │  ← Time     │
│         │                 │  (dim)      │
│         └─────────────────┘             │
│                                         │
│         ════════════════                │  ← Progress
│                                         │
│         ┌───┐         ┌───┐             │
│         │ ▶ │         │ ✕ │             │  ← Controls
│         └───┘         └───┘             │
│         Begin          Exit             │
│                                         │
│       10 min  15 min  20 min  30 min    │  ← Presets
│                                         │
└─────────────────────────────────────────┘
```

### Layout — Winding-Down State

```
┌─────────────────────────────────────────┐
│  ● darker background, warmer tint       │
│                                         │
│                                         │
│              15:32                       │
│                                         │
│         ┌─────────────────┐             │
│         │   ○ Breathe     │  ← Optional │
│         │     out...      │    breathing│
│         └─────────────────┘    guide    │
│                                         │
│         ═══════════════                 │
│                                         │
│              ⏸  Pause                   │
│                                         │
└─────────────────────────────────────────┘
```

### Layout — Fading-Out State

```
┌─────────────────────────────────────────┐
│  ● very dark, barely visible            │
│                                         │
│                                         │
│                                         │
│              2:15                        │  ← Very dim
│                                         │
│                                         │
│         ════                            │  ← Minimal
│                                         │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

### Layout — Sleep-Transition State

```
┌─────────────────────────────────────────┐
│                                         │
│  ● screen nearly black                  │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│  [auto-shutoff in progress]             │
│                                         │
└─────────────────────────────────────────┘
```

### Layout — Morning Prompt (Next Day)

```
┌─────────────────────────────────────────┐
│  ● soft warm background, very low light │
│                                         │
│         Good morning.                   │
│                                         │
│         Before you move or check        │
│         your phone...                   │
│                                         │
│         What images or feelings         │
│         lingered from sleep?            │
│                                         │
│         ┌─────────────────────┐         │
│         │                     │         │  ← Journal
│         │ [tap to write]      │         │     entry
│         │                     │         │
│         └─────────────────────┘         │
│                                         │
│         Skip for today                  │
│                                         │
└─────────────────────────────────────────┘
```

---

## States

| State | Visual | Audio | Screen Brightness |
|-------|--------|-------|-------------------|
| Preparing | Dark warm background, controls visible | None | 30% (already dim) |
| Winding-Down | Progressively dimming, warm color shift | Soft ambient or guided voice (fading) | 30% → 15% |
| Deepening | Very dim, minimal UI elements visible | Voice very soft, long pauses | 15% → 5% |
| Fading-Out | Near black, only time barely visible | Volume approaching zero, then silence | 5% → 1% |
| Sleep-Transition | Screen black, auto-shutoff countdown | Silence | 0% (off) |

---

## Design Tokens

```css
/* Sleep timer tokens (extend base design tokens) */
/* DARK MODE ONLY — no light mode variant */
.sleep-timer {
  /* Typography */
  --sleep-font-size: var(--font-size-3xl);
  --sleep-font-weight: var(--font-weight-light);
  --sleep-font-family: var(--font-mono);

  /* Colors — always dark, always warm */
  --sleep-bg-preparing: #1a1410;
  --sleep-bg-winding: #120e0a;
  --sleep-bg-deepening: #0a0806;
  --sleep-bg-fading: #050403;
  --sleep-bg-transition: #000000;

  --sleep-text-preparing: #d4a574;
  --sleep-text-winding: #a67d52;
  --sleep-text-deepening: #6b5038;
  --sleep-text-fading: #3a2a1e;

  --sleep-progress-bg: #2a1f15;
  --sleep-progress-fill: #8b6b45;

  /* Color temperature */
  --sleep-warm-filter: sepia(20%) saturate(80%);
  --sleep-warmer-filter: sepia(40%) saturate(60%) brightness(80%);
  --sleep-warmest-filter: sepia(60%) saturate(40%) brightness(50%);

  /* Spacing */
  --sleep-padding: var(--spacing-8);
  --sleep-gap: var(--spacing-6);

  /* Animation */
  --sleep-dim-transition: 30s ease-in-out;
  --sleep-fade-transition: 60s ease-in-out;
}
```

---

## Progressive Dimming Specification

### Brightness Curve

```
Brightness (%)
 30│ ●
   │  ╲
 20│    ╲
   │      ╲
 15│        ●───────╮
   │                 ╲
 10│                   ╲
   │                     ╲
  5│                      ●────╮
   │                            ╲
  1│                              ●
  0│                                ●── shutoff
   └──────────────────────────────────→ Time
    Prep  Winding  Deepening  Fade  Off
```

### Implementation

```typescript
const brightnessSchedule: Record<SleepPhase, BrightnessConfig> = {
  preparing: {
    start: 0.30,
    end: 0.30,
    transition: 'none',
  },
  'winding-down': {
    start: 0.30,
    end: 0.15,
    transition: 'linear',
    durationMs: null, // matches phase duration
  },
  deepening: {
    start: 0.15,
    end: 0.05,
    transition: 'ease-in',
    durationMs: null,
  },
  'fading-out': {
    start: 0.05,
    end: 0.01,
    transition: 'ease-in',
    durationMs: null,
  },
  'sleep-transition': {
    start: 0.01,
    end: 0.0,
    transition: 'ease-in',
    durationMs: 60000, // 1 minute to full black
  },
};
```

### Color Temperature Shift

```typescript
const colorTempSchedule: Record<SleepPhase, string> = {
  preparing: 'var(--sleep-warm-filter)',
  'winding-down': 'var(--sleep-warmer-filter)',
  deepening: 'var(--sleep-warmest-filter)',
  'fading-out': 'var(--sleep-warmest-filter)',
  'sleep-transition': 'none', // screen is black

};
```

---

## Accessibility Requirements

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Toggle start/pause |
| `Escape` | Exit practice (confirm if running) |
| `Arrow Up/Down` | Adjust volume |
| `M` | Toggle mute |
| `D` | Toggle dimming (pause/resume brightness reduction) |

### Screen Reader Support

```tsx
// Time remaining announced
<div
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-label={`${minutes} minutes and ${seconds} seconds remaining in ${currentPhase} phase`}
>
  {formatTime(remaining)}
</div>

// Phase announcement
<div aria-live="assertive">
  {phaseChangeMessage}
  // "Entering deepening phase. Screen will continue dimming."
</div>

// Progress bar
<progress
  role="progressbar"
  aria-valuemin={0}
  aria-valuemax={duration}
  aria-valuenow={duration - remaining}
  aria-label="Sleep practice progress"
/>

// Announce milestones
// - "10 minutes remaining"
// - "5 minutes remaining — screen will begin fading"
// - "Practice complete. Screen will turn off in 1 minute."
// - "Good night."
```

### Haptic Feedback (Silent Mode)

When `hapticFeedback` is enabled:
- Phase transitions: gentle double pulse
- Breathing guide (if active): soft pulse on inhale cue, pause on exhale
- Practice complete: long gentle pulse
- Auto-shutoff warning: two soft pulses

**Purpose:** Allows practice without any audio or visual stimulation.
The user can close their eyes and receive only tactile cues.

### Reduced Motion

```tsx
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

// If reduced motion:
// - No smooth dimming animation — step changes between phases
// - No breathing circle animation — text prompts only
// - Instant phase transitions
// - No fade effects on UI elements
```

### Touch Targets

- All buttons minimum 48x48px
- Spacing between buttons minimum 12px (larger than standard — drowsy users)
- Preset buttons clearly spaced
- "Skip" and "Exit" buttons positioned to avoid accidental taps
- Large tap-anywhere-to-pause zone during practice

---

## Audio Specifications

### Sound Types

| Sound | When | Default File | Duration |
|-------|------|--------------|----------|
| Practice start | User begins | `tone-warm-low.mp3` | 2s |
| Phase transition | Phase changes | `tone-descending.mp3` | 1s (volume decreasing) |
| Fade-out start | Entering fade | None (silence begins) | — |
| Auto-shutoff | Screen going off | None | — |
| Morning prompt | Next-day journal | `chime-dawn.mp3` | 2s (very soft) |

### Audio Requirements

- Maximum volume 30% of system volume (sleep context)
- All sounds fade in/out (never abrupt — critical for sleep)
- Volume decreases progressively across phases
- Complete silence during fading-out and sleep-transition phases
- Respect system mute/volume
- User can disable entirely
- Nature sounds option (rain, ocean, forest) as ambient layer

### Volume Fade Schedule

```typescript
const volumeSchedule: Record<SleepPhase, number> = {
  preparing: 1.0,      // Full (of the already-low audioVolume)
  'winding-down': 0.7, // 70% of set volume
  deepening: 0.3,      // 30% of set volume
  'fading-out': 0.0,   // Silent
  'sleep-transition': 0.0, // Silent
};
```

---

## Auto-Shutoff Specification

### Behavior

1. Practice completes → enter sleep-transition phase
2. Screen dims to 0% over 60 seconds
3. All audio stops (already silent from fading-out phase)
4. Screen turns off completely
5. Wake lock released
6. No notifications, no sounds until morning prompt time
7. Device returns to normal lock screen behavior

### Implementation

```typescript
const handleAutoShutoff = async () => {
  // Release wake lock
  if (wakeLock) {
    await wakeLock.release();
  }

  // Request screen off (platform-dependent)
  if ('wakeLock' in navigator) {
    // Screen will naturally turn off with lock screen timeout
  }

  // Schedule morning prompt (if enabled)
  if (morningPrompt) {
    scheduleNotification({
      title: 'Good morning',
      body: morningPromptText || 'What lingered from sleep?',
      // Triggered by first user interaction with device in morning
      trigger: 'next-unlock',
      sound: 'chime-dawn.mp3',
      volume: 0.2,
    });
  }
};
```

### Morning Prompt Timing

The morning journal prompt appears:
- On first device unlock after 4 AM (configurable)
- OR when user opens the app in the morning
- Displayed with very soft warm background (not bright)
- Dismissible with "Skip for today"
- Journal entry saved locally only

---

## Behavior Specifications

### Timer Accuracy

- Use `requestAnimationFrame` for display updates (when screen is active)
- Use `performance.now()` for elapsed time calculation
- Handle background/sleep gracefully (timer completes even if app is backgrounded)
- Phase durations calculated as proportions of total duration

### Phase Duration Distribution

```typescript
const phaseDistribution = {
  preparing: 0,           // Immediate — user presses start
  'winding-down': 0.40,   // 40% of total duration
  deepening: 0.35,        // 35% of total duration
  'fading-out': 0.20,     // 20% of total duration
  'sleep-transition': 0.05, // 5% of total (auto-shutoff ramp)
};

// For a 20-minute practice:
// Winding-down: 8 minutes
// Deepening: 7 minutes
// Fading-out: 4 minutes
// Sleep-transition: 1 minute → auto-shutoff
```

### Background Behavior

```typescript
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Timer continues
    // Audio continues if in winding-down or deepening phase
    // No screen updates needed (screen is hidden)
  } else {
    // Sync display to actual remaining time
    // Apply correct brightness for current phase
    syncDisplayToActualTime();
    applyCurrentPhaseBrightness();
  }
});
```

### Error States

- If device prevents screen dimming: show message "Your device may not
  support progressive dimming. The practice will continue with standard
  dark mode."
- If wake lock fails: show message "Your screen may turn off during
  practice. Audio will continue."
- If morning notification fails: show prompt on next app open instead

---

## Example Usage

### Basic Sleep Timer

```tsx
<SleepTimer
  duration={1200000} // 20 minutes
  practiceType="meditation"
  onComplete={() => logPractice('bedtime-meditation')}
/>
```

### With Breathing Guide

```tsx
<SleepTimer
  duration={900000} // 15 minutes
  practiceType="wind-down"
  breathingGuide={{
    inhale: 4,
    holdIn: 7,
    exhale: 8,
  }}
  audioEnabled={true}
  morningPromptText="What images stayed with you from sleep?"
/>
```

### Silent Haptic Mode

```tsx
<SleepTimer
  duration={1200000}
  practiceType="meditation"
  audioEnabled={false}
  hapticFeedback={true}
  morningPrompt={true}
/>
```

### Dream Work Session

```tsx
<SleepTimer
  duration={1800000} // 30 minutes
  practiceType="dream-work"
  morningPrompt={true}
  morningPromptText="Before moving, lie still. What dream fragments remain?"
  onMorningPrompt={() => openDreamJournal()}
/>
```

---

## Testing Requirements

### Unit Tests

- [ ] Timer accuracy over various durations
- [ ] Phase transitions at correct times
- [ ] Brightness levels correct for each phase
- [ ] Volume levels correct for each phase
- [ ] Auto-shutoff triggers correctly
- [ ] Morning prompt scheduling
- [ ] Correct formatting of time display
- [ ] Proper handling of pause/resume
- [ ] Callback invocations at correct times

### Accessibility Tests

- [ ] Keyboard navigation complete
- [ ] Screen reader announcements work (including phase changes)
- [ ] Focus management correct
- [ ] Reduced motion respected
- [ ] Haptic feedback functions correctly
- [ ] Color contrast passes (even in dim states — text must be readable)
- [ ] Touch targets adequate for drowsy users

### Integration Tests

- [ ] Progressive dimming works across devices
- [ ] Auto-shutoff releases wake lock
- [ ] Morning prompt displays correctly on next unlock
- [ ] Background tab handling
- [ ] Mobile touch interactions
- [ ] PWA offline functionality
- [ ] Audio fade-out smooth and complete

### Sleep-Specific Tests

- [ ] No screen brightness above 30% at any point
- [ ] No blue-spectrum light emission (warm filter active)
- [ ] Complete silence achieved by fading-out phase
- [ ] Auto-shutoff completes (no residual screen light)
- [ ] No notifications or sounds during sleep-transition
- [ ] Morning prompt respects "after 4 AM" constraint

---

## Implementation Notes

### Performance

- Minimize re-renders during dimming (CSS transitions, not JS updates)
- Use CSS filters for color temperature (GPU accelerated)
- Debounce brightness updates (smooth visual, not per-frame JS)
- Memoize phase calculations

### Battery Considerations

- Wake lock only during active practice phases
- Release wake lock at sleep-transition
- No background processing during sleep
- Morning prompt uses system notification, not app polling
- Efficient audio loading (stream, don't preload all sounds)

### Mobile Considerations

- Request wake lock during active practice (WakeLock API)
- Handle app backgrounding (timer completes, auto-shutoff fires)
- Support both portrait and landscape
- Bottom controls for thumb reach
- Large touch targets for drowsy users
- System Do Not Disturb integration recommendation

### Platform Notes

- iOS: Screen brightness control limited. Use overlay opacity instead.
- Android: Screen brightness API available. Use native dimming.
- Web: Use CSS filter + opacity for cross-platform dimming.
- PWA: Schedule morning prompt via Notification API + service worker.

---

*"The screen should dim itself out of existence, leaving only darkness and the permission to sleep."*
