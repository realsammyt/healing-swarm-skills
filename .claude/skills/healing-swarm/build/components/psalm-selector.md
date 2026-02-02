# Psalm Selector Component Specification

> A reverent interface for selecting and engaging with healing psalms.

---

## Purpose

The Psalm Selector allows users to browse, select, and engage with psalms
for healing purposes. It presents the sacred texts with appropriate reverence
while providing accessibility and study features.

---

## Component API

```typescript
interface PsalmSelectorProps {
  /** List of available psalms with metadata */
  psalms: Psalm[];

  /** Called when a psalm is selected */
  onSelect?: (psalm: Psalm) => void;

  /** Filter by healing use */
  filterByUse?: HealingUse[];

  /** Show study notes */
  showNotes?: boolean;

  /** Enable audio reading */
  audioEnabled?: boolean;

  /** Translation to display */
  translation?: Translation;

  /** Show Hebrew alongside translation */
  showHebrew?: boolean;

  /** Reading mode vs selection mode */
  mode?: 'select' | 'read';

  /** Currently selected psalm (for read mode) */
  selectedPsalm?: Psalm;
}

interface Psalm {
  number: number;
  title?: string;
  hebrewTitle?: string;
  verses: Verse[];
  healingUses: HealingUse[];
  traditionalContext: string;
  instructions?: string;
  audioFile?: string;
}

interface Verse {
  number: number;
  text: string;
  hebrew?: string;
  transliteration?: string;
}

type HealingUse =
  | 'illness'
  | 'protection'
  | 'anxiety'
  | 'grief'
  | 'thanksgiving'
  | 'general-healing';

type Translation =
  | 'jps'      // Jewish Publication Society
  | 'nrsv'    // New Revised Standard Version
  | 'kjv'     // King James Version
  | 'custom'; // App's own translation
```

---

## Visual Design

### Selection Mode

```
┌─────────────────────────────────────────┐
│  Healing Psalms                         │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ 🔍 Search psalms...              │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Filter: [All] [Illness] [Anxiety]...   │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ Psalm 6                          │    │
│  │ For healing from illness         │    │
│  │ ───────────────────────────────  │    │
│  │ "O Lord, heal me, for my bones   │    │
│  │  are troubled..."                │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ Psalm 23                         │    │
│  │ For comfort and protection       │    │
│  │ ───────────────────────────────  │    │
│  │ "The Lord is my shepherd..."     │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ Psalm 30                         │    │
│  │ For thanksgiving after healing   │    │
│  │ ...                              │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

### Reading Mode

```
┌─────────────────────────────────────────┐
│  ← Back           Psalm 6       🔊      │
├─────────────────────────────────────────┤
│                                         │
│           מִזְמוֹר לְדָוִד                │
│      Mizmor L'David                     │
│      A Psalm of David                   │
│                                         │
│  ─────────────────────────────────────  │
│                                         │
│  ¹ O Lord, do not rebuke me in Your    │
│    anger, or chasten me in Your wrath.  │
│                                         │
│  ² Have mercy on me, O Lord, for I am   │
│    weak; heal me, for my bones are      │
│    troubled.                            │
│                                         │
│  ³ My soul is greatly troubled; and     │
│    You, O Lord—how long?                │
│                                         │
│  [Continue scrolling...]                │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  📖 Context   🔤 Hebrew   ⚙️ Options     │
│                                         │
└─────────────────────────────────────────┘
```

### Reading with Hebrew

```
┌─────────────────────────────────────────┐
│  ← Back           Psalm 6       🔊      │
├─────────────────────────────────────────┤
│                                         │
│  ב  חָנֵּנִי יְהוָה כִּי אֻמְלַל אָנִי    │
│     Chaneni Adonai ki umlal ani         │
│                                         │
│     Have mercy on me, O Lord, for I     │
│     am weak; heal me, for my bones      │
│     are troubled.                       │
│                                         │
│  ─────────────────────────────────────  │
│                                         │
│  ג  וְנַפְשִׁי נִבְהֲלָה מְאֹד            │
│     V'nafshi nivhalah m'od              │
│                                         │
│     My soul is greatly troubled; and    │
│     You, O Lord—how long?               │
│                                         │
└─────────────────────────────────────────┘
```

---

## Design Tokens

```css
.psalm-selector {
  /* Typography - Sacred text */
  --psalm-hebrew-font: 'SBL Hebrew', 'Ezra SIL', serif;
  --psalm-hebrew-size: var(--font-size-xl);
  --psalm-body-font: var(--font-prayer);
  --psalm-body-size: var(--font-size-lg);
  --psalm-line-height: 2.0;

  /* Colors */
  --psalm-text: var(--color-calm-800);
  --psalm-hebrew: var(--color-calm-900);
  --psalm-transliteration: var(--color-calm-500);
  --psalm-verse-number: var(--color-healing-600);
  --psalm-card-bg: var(--color-warmth-50);

  /* Spacing */
  --psalm-verse-gap: var(--spacing-6);
  --psalm-section-gap: var(--spacing-8);
}
```

---

## Accessibility Requirements

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Arrow Up/Down` | Navigate psalm list |
| `Enter` | Select psalm |
| `Escape` | Back to list |
| `P` | Play audio |
| `H` | Toggle Hebrew display |
| `Arrow Left/Right` | Previous/next verse (reading mode) |

### Screen Reader Support

```tsx
// Psalm card in list
<article
  role="article"
  aria-label={`Psalm ${psalm.number}: ${psalm.title}`}
  tabIndex={0}
>
  <h3>Psalm {psalm.number}</h3>
  <p>{psalm.title}</p>
  <p className="preview">{getFirstVerse(psalm)}</p>
  <ul aria-label="Healing uses">
    {psalm.healingUses.map(use => (
      <li>{formatUse(use)}</li>
    ))}
  </ul>
</article>

// Verse in reading mode
<div
  role="article"
  aria-label={`Verse ${verse.number}`}
>
  <span className="verse-number" aria-hidden="true">
    {verse.number}
  </span>
  <p lang={showHebrew ? 'he' : 'en'}>
    {showHebrew && <span dir="rtl">{verse.hebrew}</span>}
    {verse.text}
  </p>
</div>
```

### Language Accessibility

```tsx
// Hebrew text with proper direction
<span
  lang="he"
  dir="rtl"
  className="hebrew"
>
  {verse.hebrew}
</span>

// Transliteration (pronunciation guide)
<span
  lang="he-Latn" // Hebrew in Latin script
  className="transliteration"
  aria-label="Pronunciation"
>
  {verse.transliteration}
</span>
```

---

## Content Structure

### Psalm Data Format

```typescript
const psalm6: Psalm = {
  number: 6,
  title: 'A Prayer in Time of Trouble',
  hebrewTitle: 'מִזְמוֹר לְדָוִד',
  healingUses: ['illness', 'anxiety', 'general-healing'],
  traditionalContext: `
    Psalm 6 is one of the seven Penitential Psalms. In Jewish tradition,
    it has been used for healing since medieval times, particularly
    for those suffering from illness. The Sefer Shimmush Tehillim
    recommends its recitation for healing.
  `,
  instructions: `
    Traditionally recited upon waking or before sleep.
    May be read three times for emphasis.
    Can be combined with visualization of healing light.
  `,
  verses: [
    {
      number: 1,
      text: 'O Lord, do not rebuke me in Your anger, or chasten me in Your wrath.',
      hebrew: 'יְהוָה אַל־בְּאַפְּךָ תוֹכִיחֵנִי וְאַל־בַּחֲמָתְךָ תְיַסְּרֵנִי',
      transliteration: "Adonai al-b'apkha tokhikheni v'al-bakhamat'kha t'yas'reni",
    },
    {
      number: 2,
      text: 'Have mercy on me, O Lord, for I am weak; heal me, for my bones are troubled.',
      hebrew: 'חָנֵּנִי יְהוָה כִּי אֻמְלַל אָנִי רְפָאֵנִי יְהוָה כִּי נִבְהֲלוּ עֲצָמָי',
      transliteration: "Chaneni Adonai ki umlal ani r'fa'eni Adonai ki nivhalu atzamai",
    },
    // ... remaining verses
  ],
  audioFile: '/audio/psalms/psalm-6.mp3',
};
```

### Healing Use Categories

| Use | Description | Example Psalms |
|-----|-------------|----------------|
| `illness` | Physical healing | 6, 30, 41, 103 |
| `protection` | Safety and protection | 23, 91, 121 |
| `anxiety` | Peace and calm | 23, 27, 46, 131 |
| `grief` | Comfort in loss | 23, 116, 130 |
| `thanksgiving` | Gratitude for healing | 30, 103, 116 |
| `general-healing` | Overall wellbeing | 23, 27, 91, 121 |

---

## Features

### Search

```typescript
const searchPsalms = (query: string, psalms: Psalm[]): Psalm[] => {
  const lowerQuery = query.toLowerCase();

  return psalms.filter(psalm => {
    // Search in title, content, and uses
    const matchesNumber = psalm.number.toString() === query;
    const matchesTitle = psalm.title?.toLowerCase().includes(lowerQuery);
    const matchesContent = psalm.verses.some(v =>
      v.text.toLowerCase().includes(lowerQuery)
    );
    const matchesUse = psalm.healingUses.some(use =>
      use.includes(lowerQuery)
    );

    return matchesNumber || matchesTitle || matchesContent || matchesUse;
  });
};
```

### Filtering

```tsx
<div role="group" aria-label="Filter by healing use">
  <button
    aria-pressed={filter === 'all'}
    onClick={() => setFilter('all')}
  >
    All
  </button>
  {healingUses.map(use => (
    <button
      key={use}
      aria-pressed={filter === use}
      onClick={() => setFilter(use)}
    >
      {formatUse(use)}
    </button>
  ))}
</div>
```

### Audio Reading

```typescript
const useAudioReading = (psalm: Psalm) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>();

  const play = () => {
    if (psalm.audioFile) {
      audioRef.current = new Audio(psalm.audioFile);
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      // Fallback to text-to-speech
      const text = psalm.verses.map(v => v.text).join(' ');
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85; // Slower for sacred reading
      speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return { play, pause, isPlaying };
};
```

---

## Example Usage

### Basic Selection

```tsx
<PsalmSelector
  psalms={allPsalms}
  onSelect={(psalm) => navigateToPsalmReading(psalm)}
  filterByUse={['illness', 'general-healing']}
/>
```

### Reading Mode

```tsx
<PsalmSelector
  psalms={allPsalms}
  mode="read"
  selectedPsalm={psalm23}
  showHebrew={true}
  showNotes={true}
  audioEnabled={true}
  translation="jps"
/>
```

### Integration with Practice

```tsx
// Within a practice guide
<PracticeStep>
  <h3>Read the Psalm</h3>
  <PsalmSelector
    mode="read"
    selectedPsalm={psalm6}
    showHebrew={userSettings.showHebrew}
    audioEnabled={true}
  />
</PracticeStep>
```

---

## Contextual Features

### Traditional Context Panel

```tsx
<details className="context-panel">
  <summary>About this Psalm</summary>

  <section>
    <h4>Traditional Use</h4>
    <p>{psalm.traditionalContext}</p>
  </section>

  <section>
    <h4>Instructions</h4>
    <p>{psalm.instructions}</p>
  </section>

  <section>
    <h4>Recommended For</h4>
    <ul>
      {psalm.healingUses.map(use => (
        <li>{formatUseDescription(use)}</li>
      ))}
    </ul>
  </section>
</details>
```

### Translation Options

```tsx
<select
  aria-label="Select translation"
  value={translation}
  onChange={(e) => setTranslation(e.target.value)}
>
  <option value="jps">JPS (Jewish Publication Society)</option>
  <option value="nrsv">NRSV (Scholarly)</option>
  <option value="kjv">KJV (Traditional)</option>
  <option value="custom">App Translation</option>
</select>
```

---

## Testing Requirements

### Unit Tests

- [ ] Search finds correct psalms
- [ ] Filtering works correctly
- [ ] Audio playback functions

### Accessibility Tests

- [ ] Hebrew text is properly marked with `lang` and `dir`
- [ ] Screen reader can navigate all content
- [ ] Keyboard navigation complete

### Content Tests

- [ ] All psalms load correctly
- [ ] Verse numbers accurate
- [ ] Hebrew text displays properly

---

## Implementation Notes

### Typography

- Use proper Hebrew fonts with fallbacks
- Ensure Hebrew renders right-to-left
- Generous line height for readability
- Large verse numbers for navigation

### Performance

- Lazy load psalm content
- Cache audio files
- Virtualize long psalm lists

### Offline Support

- All psalm text available offline
- Audio files cached progressively
- Can read and practice without network

---

*"These words have carried healing for millennia. Present them with the reverence they deserve."*
