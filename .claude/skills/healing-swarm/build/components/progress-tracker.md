# Progress Tracker Component Specification

> A gentle, non-shaming progress visualization for healing journeys.

---

## Purpose

The Progress Tracker helps users see their healing journey at a glance,
celebrating engagement without creating guilt for missed days. It focuses
on encouragement and acknowledges that healing isn't linear.

---

## Component API

```typescript
interface ProgressTrackerProps {
  /** Total days in the journey */
  totalDays: number;

  /** Current day (1-indexed) */
  currentDay: number;

  /** Days with completed activities */
  completedDays: DayCompletion[];

  /** Show calendar view vs. simple progress */
  view?: 'calendar' | 'simple' | 'journey';

  /** Called when a day is tapped */
  onDaySelect?: (day: number) => void;

  /** Journey name for display */
  journeyName?: string;

  /** Start date of journey */
  startDate?: Date;

  /** Milestones to highlight */
  milestones?: Milestone[];

  /** Show streak counter. Default: false (to avoid guilt) */
  showStreak?: boolean;

  /** Custom encouragement message */
  encouragement?: string;
}

interface DayCompletion {
  day: number;
  completedAt: Date;
  activitiesCompleted: string[];
  notes?: string;
}

interface Milestone {
  day: number;
  name: string;
  description?: string;
  icon?: string;
}
```

---

## Visual Design

### Simple View

```
┌─────────────────────────────────────────┐
│                                         │
│  Sacred Healing Journey                 │
│                                         │
│  Day 7 of 21                            │
│                                         │
│  ●●●●●●○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○    │
│  ↑                                      │
│  You are here                           │
│                                         │
│  "Every day you show up is a gift       │
│   to yourself."                         │
│                                         │
└─────────────────────────────────────────┘

● = completed day
○ = future day
◐ = partial completion
Today highlighted with ring
```

### Calendar View

```
┌─────────────────────────────────────────┐
│                                         │
│  January 2025                           │
│                                         │
│  Su  Mo  Tu  We  Th  Fr  Sa             │
│                  1   2   3   4          │
│   5   6   7   8   9  10  11             │
│  ●   ●   ●   ●   ●   ●   ◐             │
│  12  13  14  15  16  17  18             │
│  [○]                                    │
│                                         │
│  ● Completed  ◐ Partial  ○ Future       │
│  [○] Today                              │
│                                         │
└─────────────────────────────────────────┘
```

### Journey View (Metaphorical)

```
┌─────────────────────────────────────────┐
│                                         │
│     ⛰️ Day 21                            │
│      ╱                                  │
│     ╱ · · ·                             │
│    ╱    Week 3                          │
│   🏕️ Day 14                              │
│    ╲                                    │
│     ╲ · · ·                             │
│      ╲   Week 2                         │
│   🌲 Day 7                               │
│        ╲                                │
│    ● ● ● ● ● ● ●  Week 1                │
│   🚶 ← You are here                      │
│                                         │
│  🏠 Start                                │
│                                         │
└─────────────────────────────────────────┘
```

---

## Design Tokens

```css
.progress-tracker {
  /* Colors */
  --progress-completed: var(--color-healing-500);
  --progress-partial: var(--color-healing-300);
  --progress-future: var(--color-calm-200);
  --progress-today: var(--color-warmth-400);
  --progress-milestone: var(--color-spirit-500);

  /* Sizing */
  --progress-dot-size: 12px;
  --progress-dot-gap: 8px;
  --calendar-cell-size: 40px;

  /* Typography */
  --progress-label-size: var(--font-size-sm);
  --progress-day-size: var(--font-size-xs);
}
```

---

## Accessibility Requirements

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Arrow Left/Right` | Move between days |
| `Arrow Up/Down` | Move between weeks (calendar view) |
| `Enter` / `Space` | Select day |
| `Home` | Go to day 1 |
| `End` | Go to current day |

### Screen Reader Support

```tsx
// Progress summary
<div role="group" aria-label="Healing journey progress">
  <p aria-live="polite">
    Day {currentDay} of {totalDays}.
    {completedDays.length} days completed.
  </p>

  {/* Day indicators */}
  <div role="list" aria-label="Daily progress">
    {days.map(day => (
      <div
        role="listitem"
        aria-label={getDayLabel(day)}
        aria-current={day === currentDay ? 'date' : undefined}
      >
        <span aria-hidden="true">{getDayIcon(day)}</span>
      </div>
    ))}
  </div>
</div>

// Day label function
const getDayLabel = (day: DayInfo): string => {
  const status = day.completed ? 'completed' :
                 day.partial ? 'partially completed' :
                 day.future ? 'upcoming' : 'missed';
  const current = day.isToday ? ', today' : '';
  return `Day ${day.number}, ${status}${current}`;
};
```

### Color Independence

Don't rely on color alone:
- Completed days: filled circle + different shape/texture
- Partial days: half-filled or different pattern
- Future days: empty circle with visible border
- Current day: ring/highlight + text indicator

---

## Encouragement Philosophy

### No Shame Design

```typescript
// GOOD: Encouraging language
const getEncouragement = (progress: Progress): string => {
  if (progress.daysCompleted === progress.currentDay) {
    return "You've shown up every day. That takes dedication.";
  }
  if (progress.completedToday) {
    return "Today counts. You're here.";
  }
  return "Every moment is a fresh start.";
};

// BAD: Shaming language (NEVER use)
// "You missed 3 days!"
// "Your streak is broken"
// "You're falling behind"
```

### Streak Handling

If streaks are shown (should be optional):

```typescript
// GOOD: Gentle streak messaging
const getStreakMessage = (streak: number): string => {
  if (streak === 0) return ''; // Say nothing, no shame
  if (streak === 1) return 'You started today!';
  return `${streak} days and counting`;
};

// After a break
const getReturnMessage = (): string => {
  return "Welcome back. Healing continues.";
};
```

### Missed Days

Never highlight missed days negatively:
- Don't show them as "failed" or "missed"
- Show them as neutral (same as future days)
- If asked, gently note "Some days rest is the practice"

---

## Milestone Celebrations

### Milestone Types

| Day | Milestone | Message |
|-----|-----------|---------|
| 7 | First Week | "You've completed a week. Notice what's shifted." |
| 14 | Two Weeks | "Halfway through. The practice is taking root." |
| 21 | Completion | "21 days. You've built something real." |

### Celebration Behavior

When user completes a milestone:
1. Brief animation (respect reduced motion)
2. Milestone message displayed
3. Optional: unlock next phase or reflection
4. Not over-the-top (no confetti explosions)

```tsx
<MilestoneModal
  milestone={{
    day: 7,
    name: 'First Week',
    message: "You've completed a week of practice. Take a moment to notice what's shifted—in your body, your attention, your relationship with healing.",
  }}
  onDismiss={closeMilestone}
/>
```

---

## Data Display

### Progress Summary

```tsx
interface ProgressSummary {
  totalDays: number;
  currentDay: number;
  daysCompleted: number;
  daysWithActivity: number;
  currentStreak?: number;
  longestStreak?: number;
  averageCompletionRate: number;
}

// Display selectively - don't overwhelm
<dl className="progress-summary">
  <div>
    <dt>Journey Day</dt>
    <dd>{currentDay} of {totalDays}</dd>
  </div>
  <div>
    <dt>Days with Practice</dt>
    <dd>{daysCompleted}</dd>
  </div>
</dl>
```

### Per-Day Detail (on tap)

```tsx
<DayDetail day={selectedDay}>
  <h3>Day {day.number}</h3>
  <p>{formatDate(day.date)}</p>

  {day.completed && (
    <>
      <h4>Completed</h4>
      <ul>
        {day.activitiesCompleted.map(activity => (
          <li>{activity}</li>
        ))}
      </ul>
    </>
  )}

  {day.notes && (
    <blockquote>{day.notes}</blockquote>
  )}

  <Button onClick={() => navigateToDay(day.number)}>
    {day.completed ? 'Review' : 'Start Today'}
  </Button>
</DayDetail>
```

---

## Example Usage

### Simple Progress

```tsx
<ProgressTracker
  totalDays={21}
  currentDay={7}
  completedDays={[
    { day: 1, completedAt: new Date(), activitiesCompleted: ['meditation', 'journal'] },
    { day: 2, completedAt: new Date(), activitiesCompleted: ['meditation'] },
    // ...
  ]}
  view="simple"
  journeyName="Sacred Healing Journey"
/>
```

### Calendar View with Milestones

```tsx
<ProgressTracker
  totalDays={21}
  currentDay={14}
  completedDays={completedDays}
  view="calendar"
  startDate={new Date('2025-01-01')}
  milestones={[
    { day: 7, name: 'Week 1 Complete', icon: '🌱' },
    { day: 14, name: 'Halfway', icon: '🌿' },
    { day: 21, name: 'Journey Complete', icon: '🌳' },
  ]}
  onDaySelect={(day) => navigateToDay(day)}
/>
```

### Journey View

```tsx
<ProgressTracker
  totalDays={21}
  currentDay={7}
  completedDays={completedDays}
  view="journey"
  encouragement="Each step forward is a step toward healing."
/>
```

---

## Animation Guidelines

### Day Completion

```typescript
const dayCompleteAnimation = {
  // Subtle scale and color
  initial: { scale: 1 },
  completed: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.3 },
  },
};

// Respect reduced motion
const prefersReducedMotion = useReducedMotion();
if (prefersReducedMotion) {
  // Instant state change, no animation
}
```

### Milestone Celebration

```typescript
const milestoneAnimation = {
  // Gentle glow effect
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(var(--milestone-color), 0)',
      '0 0 0 10px rgba(var(--milestone-color), 0.3)',
      '0 0 0 0 rgba(var(--milestone-color), 0)',
    ],
  },
  transition: {
    duration: 1,
    repeat: 2,
  },
};
```

---

## Testing Requirements

### Unit Tests

- [ ] Correct day counting and display
- [ ] Completion status correctly shown
- [ ] Milestone detection works
- [ ] Streak calculation correct

### Accessibility Tests

- [ ] Screen reader can navigate all days
- [ ] Keyboard navigation works
- [ ] Color is not only indicator
- [ ] Focus visible on all elements

### Visual Tests

- [ ] All three view modes render correctly
- [ ] Responsive at all breakpoints
- [ ] Dark mode works
- [ ] Milestone animations smooth

---

## Implementation Notes

### Performance

- Don't re-render entire calendar on each update
- Virtualize long journeys (30+ days)
- Memoize day calculations
- Lazy load day details

### State Management

```typescript
// Progress stored locally
interface JourneyProgress {
  journeyId: string;
  startDate: string;
  currentDay: number;
  completions: DayCompletion[];
  lastActiveAt: string;
}

// Syncs to IndexedDB
const progressStore = localStore('journey-progress');
```

---

*"Progress is presence, not perfection. The tracker celebrates showing up, not keeping score."*
