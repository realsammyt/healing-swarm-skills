# Journal Entry Component Specification

> A reflective journaling interface for healing journeys.

---

## Purpose

The Journal Entry component provides a calm, private space for reflective
writing as part of the healing process. It supports prompted reflection,
free writing, and integration with the overall healing journey.

---

## Component API

```typescript
interface JournalEntryProps {
  /** Journal prompt to display */
  prompt?: JournalPrompt;

  /** Allow free writing without prompt */
  freeWrite?: boolean;

  /** Existing entry to edit */
  entry?: JournalEntry;

  /** Called when entry is saved */
  onSave?: (entry: JournalEntry) => void;

  /** Called when user exits (with unsaved warning if needed) */
  onExit?: () => void;

  /** Enable voice input */
  voiceInput?: boolean;

  /** Auto-save interval in ms. Default: 30000 (30s) */
  autoSaveInterval?: number;

  /** Show word count */
  showWordCount?: boolean;

  /** Suggested minimum words (not enforced) */
  suggestedMinWords?: number;

  /** Maximum entry length. Default: 10000 characters */
  maxLength?: number;

  /** Date context for entry */
  date?: Date;

  /** Tags to associate with entry */
  tags?: string[];
}

interface JournalPrompt {
  id: string;
  theme: string;
  reflection: string;
  guidingQuestions?: string[];
  context?: string;
}

interface JournalEntry {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  promptId?: string;
  content: string;
  tags: string[];
  wordCount: number;
  mood?: MoodRating;
}

type MoodRating = 1 | 2 | 3 | 4 | 5;
```

---

## Visual Design

### Layout with Prompt

```
┌─────────────────────────────────────────┐
│  ← Back                     Day 7       │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ Today's Reflection               │    │
│  │                                  │    │
│  │ What's one way you've grown     │    │
│  │ that you haven't acknowledged   │    │
│  │ yet?                            │    │
│  │                                  │    │
│  │ If helpful:                     │    │
│  │ • What could you do before...   │    │
│  │ • What feels different now...   │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │                                  │    │
│  │ [Text area for writing]         │    │
│  │                                  │    │
│  │                                  │    │
│  │                                  │    │
│  │                                  │    │
│  │                                  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  42 words                 🎤  [Save]   │
│                                         │
└─────────────────────────────────────────┘
```

### Free Write Layout

```
┌─────────────────────────────────────────┐
│  ← Back           Free Write            │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │                                  │    │
│  │ [Large text area]               │    │
│  │                                  │    │
│  │                                  │    │
│  │                                  │    │
│  │                                  │    │
│  │                                  │    │
│  │                                  │    │
│  │                                  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  156 words      Auto-saved      [Save]  │
│                                         │
└─────────────────────────────────────────┘
```

### States

| State | Behavior |
|-------|----------|
| Empty | Prompt visible, placeholder in text area |
| Writing | Text visible, word count updating |
| Auto-saving | Brief "Saving..." indicator |
| Saved | "Saved" confirmation with checkmark |
| Unsaved changes | Subtle indicator, warn on exit |

---

## Design Tokens

```css
.journal-entry {
  /* Typography */
  --journal-prompt-font: var(--font-heading);
  --journal-body-font: var(--font-body);
  --journal-body-size: var(--font-size-lg);
  --journal-line-height: 1.75;

  /* Colors */
  --journal-prompt-bg: var(--color-warmth-50);
  --journal-prompt-border: var(--color-warmth-200);
  --journal-text: var(--color-calm-800);
  --journal-placeholder: var(--color-calm-400);

  /* Spacing */
  --journal-padding: var(--spacing-6);
  --journal-textarea-min-height: 200px;
}

/* Dark mode */
.dark .journal-entry {
  --journal-prompt-bg: var(--color-calm-800);
  --journal-prompt-border: var(--color-calm-700);
  --journal-text: var(--color-calm-100);
}
```

---

## Accessibility Requirements

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Move between prompt, textarea, and controls |
| `Escape` | Exit (with confirmation if unsaved) |
| `Ctrl+S` / `Cmd+S` | Save entry |
| `Ctrl+Enter` | Save and close |

### Screen Reader Support

```tsx
// Prompt region
<section aria-labelledby="prompt-heading">
  <h2 id="prompt-heading">{prompt.theme}</h2>
  <p>{prompt.reflection}</p>
  {prompt.guidingQuestions && (
    <details>
      <summary>Guiding questions</summary>
      <ul>
        {prompt.guidingQuestions.map(q => <li>{q}</li>)}
      </ul>
    </details>
  )}
</section>

// Text area
<textarea
  aria-label="Journal entry"
  aria-describedby="word-count save-status"
  placeholder="Write what's true for you..."
/>

// Status
<span id="word-count" aria-live="polite">
  {wordCount} words
</span>
<span id="save-status" aria-live="polite" aria-atomic="true">
  {saveStatus}
</span>
```

### Writing Accessibility

- Large, readable font (minimum 16px, preferably 18px)
- High contrast text
- Generous line height (1.75)
- No maximum visible lines (scroll as needed)
- Voice input option for those who can't type

---

## Behavior Specifications

### Auto-Save

```typescript
// Auto-save behavior
const useAutoSave = (content: string, interval: number) => {
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
  const timeoutRef = useRef<number>();
  const lastSavedRef = useRef<string>('');

  useEffect(() => {
    // Don't auto-save if content hasn't changed
    if (content === lastSavedRef.current) return;

    // Clear previous timeout
    clearTimeout(timeoutRef.current);

    // Mark as having unsaved changes
    setSaveStatus('unsaved');

    // Schedule save
    timeoutRef.current = setTimeout(async () => {
      setSaveStatus('saving');
      await saveEntry(content);
      lastSavedRef.current = content;
      setSaveStatus('saved');
    }, interval);

    return () => clearTimeout(timeoutRef.current);
  }, [content, interval]);

  return saveStatus;
};
```

### Exit Warning

```typescript
// Warn if exiting with unsaved changes
const handleExit = () => {
  if (saveStatus === 'unsaved') {
    const confirmed = confirm(
      'You have unsaved changes. Save before leaving?'
    );
    if (confirmed) {
      saveEntry(content);
    }
  }
  onExit?.();
};

// Also handle browser back/close
useEffect(() => {
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (saveStatus === 'unsaved') {
      e.preventDefault();
      e.returnValue = '';
    }
  };
  window.addEventListener('beforeunload', handleBeforeUnload);
  return () => window.removeEventListener('beforeunload', handleBeforeUnload);
}, [saveStatus]);
```

### Voice Input

```typescript
// Voice input using Web Speech API
const useSpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const recognition = useMemo(() => {
    if (!('webkitSpeechRecognition' in window)) return null;
    const r = new webkitSpeechRecognition();
    r.continuous = true;
    r.interimResults = true;
    return r;
  }, []);

  const startListening = () => {
    recognition?.start();
    setIsListening(true);
  };

  const stopListening = () => {
    recognition?.stop();
    setIsListening(false);
  };

  return { isListening, transcript, startListening, stopListening };
};
```

---

## Data Storage

### Local Storage Schema

```typescript
interface StoredEntry {
  id: string;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  promptId?: string;
  content: string;
  tags: string[];
  wordCount: number;
  mood?: MoodRating;
  // For sync purposes
  localVersion: number;
  syncedAt?: string;
}

// Store in IndexedDB
const journalStore = {
  async save(entry: StoredEntry): Promise<void> {
    const db = await openDB('healing-journal', 1);
    await db.put('entries', entry);
  },

  async getByDate(date: Date): Promise<StoredEntry[]> {
    const db = await openDB('healing-journal', 1);
    const start = startOfDay(date);
    const end = endOfDay(date);
    return db.getAllFromIndex('entries', 'byDate', IDBKeyRange.bound(start, end));
  },

  async export(): Promise<ExportedJournal> {
    const db = await openDB('healing-journal', 1);
    const entries = await db.getAll('entries');
    return {
      format: 'healing-journal-export',
      version: '1.0',
      exportedAt: new Date().toISOString(),
      entries,
    };
  },
};
```

---

## Privacy Features

### Data Ownership

- All journal data stored locally only
- No server sync by default
- User can export their data anytime
- User can delete all data

### Export Format

```json
{
  "format": "healing-journal-export",
  "version": "1.0",
  "exportedAt": "2025-01-15T10:30:00Z",
  "entries": [
    {
      "id": "entry-123",
      "createdAt": "2025-01-10T08:00:00Z",
      "promptId": "day-7-growth",
      "content": "Today I noticed...",
      "wordCount": 150,
      "tags": ["healing-journey", "day-7"]
    }
  ]
}
```

### Import Support

```typescript
const importJournal = async (file: File): Promise<ImportResult> => {
  const content = await file.text();
  const data = JSON.parse(content);

  if (data.format !== 'healing-journal-export') {
    throw new Error('Invalid journal export format');
  }

  for (const entry of data.entries) {
    await journalStore.save({
      ...entry,
      id: generateNewId(), // Avoid conflicts
      importedFrom: data.exportedAt,
    });
  }

  return { imported: data.entries.length };
};
```

---

## Optional Features

### Mood Rating

```
How are you feeling today?

😔   😐   🙂   😊   🌟
 1    2    3    4    5
```

Small, optional component after writing:
- Tap to select
- Can skip entirely
- Helps track emotional journey over time

### Tags

- Auto-suggest based on journey day
- User can add custom tags
- Helps with later searching/filtering

---

## Example Usage

### With Prompt

```tsx
<JournalEntry
  prompt={{
    id: 'day-7-growth',
    theme: "Acknowledging Growth",
    reflection: "What's one way you've grown that you haven't acknowledged yet?",
    guidingQuestions: [
      "What could you do before that felt difficult?",
      "What feels different now in your body?",
      "What would past-you think of present-you?"
    ],
  }}
  date={new Date()}
  tags={['healing-journey', 'day-7']}
  onSave={handleSave}
  onExit={navigateBack}
/>
```

### Free Write

```tsx
<JournalEntry
  freeWrite={true}
  voiceInput={true}
  showWordCount={true}
  onSave={handleSave}
/>
```

### Editing Existing Entry

```tsx
<JournalEntry
  entry={existingEntry}
  onSave={handleUpdate}
  onExit={navigateBack}
/>
```

---

## Testing Requirements

### Unit Tests

- [ ] Word count updates correctly
- [ ] Auto-save triggers at correct intervals
- [ ] Exit warning appears for unsaved changes
- [ ] Voice input transcription works

### Accessibility Tests

- [ ] Screen reader can access all content
- [ ] Keyboard navigation complete
- [ ] Focus management correct
- [ ] High contrast mode works

### Integration Tests

- [ ] Data persists correctly in IndexedDB
- [ ] Export produces valid JSON
- [ ] Import restores entries correctly

---

## Implementation Notes

### Text Area Behavior

- Auto-expand to fit content (no fixed height)
- Soft keyboard handling on mobile
- Scroll to cursor position when typing
- Handle paste of large text gracefully

### Performance

- Debounce word count updates
- Lazy load voice input only when enabled
- Don't re-render on every keystroke (use uncontrolled input)

### Mobile Considerations

- Soft keyboard should not cover input
- Save button should remain visible
- Voice input prominent for accessibility

---

*"The journal is a sanctuary. The interface should be invisible, letting the words flow."*
