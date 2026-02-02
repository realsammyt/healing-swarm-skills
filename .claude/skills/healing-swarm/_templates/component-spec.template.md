# {{COMPONENT_NAME}} Component Specification

> {{ONE_LINE_DESCRIPTION}}

---

## Purpose

{{DETAILED_PURPOSE_DESCRIPTION}}

**Primary Use Cases:**
- {{USE_CASE_1}}
- {{USE_CASE_2}}
- {{USE_CASE_3}}

---

## User Stories

### As a user seeking healing support...

1. I want to {{USER_GOAL_1}} so that {{USER_BENEFIT_1}}
2. I want to {{USER_GOAL_2}} so that {{USER_BENEFIT_2}}
3. I want to {{USER_GOAL_3}} so that {{USER_BENEFIT_3}}

### As a healing partner...

1. I want to {{PARTNER_GOAL_1}} so that {{PARTNER_BENEFIT_1}}
2. I want to {{PARTNER_GOAL_2}} so that {{PARTNER_BENEFIT_2}}

---

## Visual Design

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│  {{HEADER_SECTION}}                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  {{MAIN_CONTENT_AREA}}                                       │
│                                                             │
│  ┌─────────────────┐                                        │
│  │ {{ELEMENT_1}}   │                                        │
│  └─────────────────┘                                        │
│                                                             │
│  {{SECONDARY_CONTENT}}                                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  {{FOOTER_SECTION}}                                          │
└─────────────────────────────────────────────────────────────┘
```

### Visual States

| State | Appearance | Behavior |
|-------|------------|----------|
| Default | {{DEFAULT_APPEARANCE}} | {{DEFAULT_BEHAVIOR}} |
| Active | {{ACTIVE_APPEARANCE}} | {{ACTIVE_BEHAVIOR}} |
| Completed | {{COMPLETED_APPEARANCE}} | {{COMPLETED_BEHAVIOR}} |
| Error | {{ERROR_APPEARANCE}} | {{ERROR_BEHAVIOR}} |
| Disabled | {{DISABLED_APPEARANCE}} | {{DISABLED_BEHAVIOR}} |

### Design Tokens

Reference: `shared/design-tokens.json`

```css
/* Primary colors */
--color-primary: var(--healing-green);
--color-secondary: var(--calm-blue);

/* Typography */
--font-heading: var(--font-display);
--font-body: var(--font-readable);

/* Spacing */
--spacing-component: var(--space-md);
--spacing-internal: var(--space-sm);

/* Animation */
--transition-default: var(--ease-calm);
```

---

## Interaction Design

### User Interactions

| Interaction | Trigger | Response | Feedback |
|-------------|---------|----------|----------|
| {{INTERACTION_1}} | {{TRIGGER_1}} | {{RESPONSE_1}} | {{FEEDBACK_1}} |
| {{INTERACTION_2}} | {{TRIGGER_2}} | {{RESPONSE_2}} | {{FEEDBACK_2}} |
| {{INTERACTION_3}} | {{TRIGGER_3}} | {{RESPONSE_3}} | {{FEEDBACK_3}} |

### Gesture Support

- **Tap/Click**: {{TAP_BEHAVIOR}}
- **Long Press**: {{LONG_PRESS_BEHAVIOR}}
- **Swipe**: {{SWIPE_BEHAVIOR}}
- **Pinch**: {{PINCH_BEHAVIOR}} (if applicable)

### One-Handed Operation

This component MUST be fully usable one-handed:

- [ ] All interactive elements within thumb reach
- [ ] No simultaneous multi-touch required
- [ ] Large touch targets (minimum 48x48dp)
- [ ] Edge swipe supported for navigation

---

## Accessibility

### WCAG AA Requirements

- [ ] **Perceivable**: Content available to all senses
  - [ ] Text alternatives for non-text content
  - [ ] Captions for audio
  - [ ] Sufficient color contrast (4.5:1 minimum)

- [ ] **Operable**: Interface usable by all
  - [ ] Keyboard navigable
  - [ ] No seizure-inducing content
  - [ ] Skip links available
  - [ ] Touch targets 48x48dp minimum

- [ ] **Understandable**: Content comprehensible
  - [ ] Readable text (8th grade level)
  - [ ] Predictable behavior
  - [ ] Input assistance

- [ ] **Robust**: Compatible with assistive tech
  - [ ] Valid markup
  - [ ] ARIA labels where needed
  - [ ] Status messages announced

### Screen Reader Support

```jsx
// Example ARIA implementation
<div
  role="{{ARIA_ROLE}}"
  aria-label="{{ACCESSIBLE_NAME}}"
  aria-describedby="{{DESCRIPTION_ID}}"
  aria-live="{{LIVE_REGION_TYPE}}"  // polite|assertive|off
>
  {{CONTENT}}
</div>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Move to next interactive element |
| Shift+Tab | Move to previous interactive element |
| Enter/Space | Activate focused element |
| Escape | Close/cancel current action |
| Arrow keys | Navigate within component |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .{{COMPONENT_CLASS}} {
    animation: none;
    transition: none;
  }
}
```

---

## Data Model

### Props/Inputs

```typescript
interface {{ComponentName}}Props {
  // Required props
  {{requiredProp1}}: {{Type1}};
  {{requiredProp2}}: {{Type2}};

  // Optional props
  {{optionalProp1}}?: {{Type3}};
  {{optionalProp2}}?: {{Type4}};

  // Callbacks
  on{{Event1}}?: ({{params}}) => void;
  on{{Event2}}?: ({{params}}) => void;
}
```

### State

```typescript
interface {{ComponentName}}State {
  {{state1}}: {{Type1}};
  {{state2}}: {{Type2}};
  isLoading: boolean;
  error: string | null;
}
```

### Local Storage (if applicable)

```typescript
// Data stored locally (privacy-first)
interface {{ComponentName}}Storage {
  {{storedData1}}: {{Type1}};
  {{storedData2}}: {{Type2}};
  lastUpdated: string; // ISO timestamp
}

// Storage key
const STORAGE_KEY = 'healing-swarm-{{component-name}}';
```

---

## Safety Considerations

### Medical Disclaimers

This component MUST display appropriate disclaimers:

```
This {{COMPONENT_PURPOSE}} is for informational purposes only and does not
replace professional medical advice. Always consult your healthcare provider.
```

### Psychological Safety

- [ ] Grounding options available if content becomes overwhelming
- [ ] Clear exit path at all times
- [ ] No content that could trigger trauma without warning
- [ ] Self-compassion messaging for "failures"

### Content Guardrails

This component must NOT:
- Make medical claims
- Promise specific outcomes
- Use fear-based motivation
- Track health data without explicit consent

---

## Error Handling

### Error States

| Error | User Message | Recovery Action |
|-------|--------------|-----------------|
| {{ERROR_1}} | {{USER_MESSAGE_1}} | {{RECOVERY_1}} |
| {{ERROR_2}} | {{USER_MESSAGE_2}} | {{RECOVERY_2}} |
| {{ERROR_3}} | {{USER_MESSAGE_3}} | {{RECOVERY_3}} |

### Fallback Behavior

If the component fails to load or function:

1. Display simple text alternative
2. Provide manual instructions
3. Never leave user without guidance

---

## Testing Requirements

### Unit Tests

- [ ] Renders correctly with required props
- [ ] Handles all prop combinations
- [ ] State changes work correctly
- [ ] Callbacks fire appropriately

### Accessibility Tests

- [ ] Passes axe-core automated tests
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Focus management correct

### Integration Tests

- [ ] Works with parent components
- [ ] Data flows correctly
- [ ] Error boundaries catch failures

### Manual Testing

- [ ] One-handed operation verified
- [ ] Dark mode supported
- [ ] Reduced motion respected
- [ ] Works on target devices

---

## Implementation Notes

### Dependencies

```json
{
  "required": [
    "{{DEPENDENCY_1}}",
    "{{DEPENDENCY_2}}"
  ],
  "optional": [
    "{{OPTIONAL_DEPENDENCY}}"
  ]
}
```

### Performance Considerations

- {{PERFORMANCE_NOTE_1}}
- {{PERFORMANCE_NOTE_2}}
- {{PERFORMANCE_NOTE_3}}

### Browser/Device Support

- Modern browsers (last 2 versions)
- iOS Safari 14+
- Android Chrome 90+
- Responsive: 320px - 1920px

---

## Example Usage

```jsx
import { {{ComponentName}} } from '@healing-swarm/components';

function MyHealingApp() {
  return (
    <{{ComponentName}}
      {{requiredProp1}}={{{value1}}}
      {{requiredProp2}}={{{value2}}}
      on{{Event1}}={({{params}}) => {
        // Handle event
      }}
    />
  );
}
```

---

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | {{DATE}} | Initial specification |

---

*"Every component serves the healing journey. Build with care and compassion."*
