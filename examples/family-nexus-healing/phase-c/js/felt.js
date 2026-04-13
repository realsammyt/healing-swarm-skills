/**
 * felt.js — "What I felt today" log for Family mode
 *
 * Simple felt-log where each family member records how they feel.
 * A word or a color, from each person, each day.
 *
 * This is the Quadriga+ recursive self-reference moment:
 * the family sees themselves seeing.
 */

import { addFeltEntry, getFeltEntries, getSetting, saveSetting } from './storage.js';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FEELING_COLORS = [
  { name: 'red', hex: '#e53935', label: 'Red' },
  { name: 'orange', hex: '#fb8c00', label: 'Orange' },
  { name: 'yellow', hex: '#fdd835', label: 'Yellow' },
  { name: 'green', hex: '#43a047', label: 'Green' },
  { name: 'blue', hex: '#1e88e5', label: 'Blue' },
  { name: 'purple', hex: '#8e24aa', label: 'Purple' },
  { name: 'gray', hex: '#9e9e9e', label: 'Gray' },
  { name: 'black', hex: '#333333', label: 'Black' }
];

const DEFAULT_NAMES = ['Mom', 'Child 1', 'Child 2'];

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let currentTab = 0;
let familyNames = [...DEFAULT_NAMES];
let containerRef = null;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(String(text)));
  return div.innerHTML;
}

function formatTime(timestamp) {
  const d = new Date(timestamp);
  const now = new Date();
  const isToday = d.toDateString() === now.toDateString();

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const isYesterday = d.toDateString() === yesterday.toDateString();

  const time = d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });

  if (isToday) return `Today, ${time}`;
  if (isYesterday) return `Yesterday, ${time}`;
  return d.toLocaleDateString(undefined, {
    month: 'short', day: 'numeric'
  }) + `, ${time}`;
}

function getColorHex(colorName) {
  const found = FEELING_COLORS.find(c => c.name === colorName);
  return found ? found.hex : '#999';
}

// ---------------------------------------------------------------------------
// Name Configuration
// ---------------------------------------------------------------------------

async function loadNames() {
  try {
    const saved = await getSetting('family-names');
    if (saved && Array.isArray(saved) && saved.length >= 3) {
      familyNames = saved;
    }
  } catch (e) {
    console.warn('[Felt] Could not load names:', e);
  }
}

async function saveNames() {
  try {
    await saveSetting('family-names', familyNames);
  } catch (e) {
    console.warn('[Felt] Could not save names:', e);
  }
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

function renderNameEditor() {
  let html = '<div class="felt-name-editor">';
  html += '<h3>Set family names</h3>';
  html += '<p class="felt-name-hint">Tap a name to change it.</p>';

  for (let i = 0; i < familyNames.length; i++) {
    html += `
      <div class="felt-name-row">
        <input type="text"
               class="felt-name-input"
               data-index="${i}"
               value="${escapeHtml(familyNames[i])}"
               maxlength="20"
               aria-label="Name for family member ${i + 1}">
      </div>
    `;
  }

  html += `
    <button class="btn-primary felt-name-save" style="margin-top: var(--space-md); width: 100%;">
      Save Names
    </button>
  </div>`;
  return html;
}

async function renderEntries(familyMember) {
  let entries;
  try {
    entries = await getFeltEntries(30, familyMember);
  } catch (e) {
    entries = [];
  }

  if (entries.length === 0) {
    return '<p class="felt-empty">No entries yet. How are you feeling?</p>';
  }

  let html = '<div class="felt-entries">';
  for (const entry of entries) {
    const time = formatTime(entry.timestamp);
    if (entry.type === 'color') {
      const hex = getColorHex(entry.content);
      html += `
        <div class="felt-entry felt-entry-color">
          <span class="felt-entry-swatch" style="background-color: ${hex}" aria-label="${escapeHtml(entry.content)}"></span>
          <span class="felt-entry-time">${escapeHtml(time)}</span>
        </div>
      `;
    } else {
      html += `
        <div class="felt-entry felt-entry-word">
          <span class="felt-entry-text">${escapeHtml(entry.content)}</span>
          <span class="felt-entry-time">${escapeHtml(time)}</span>
        </div>
      `;
    }
  }
  html += '</div>';
  return html;
}

async function renderFamilyView() {
  let entries;
  try {
    entries = await getFeltEntries(50);
  } catch (e) {
    entries = [];
  }

  if (entries.length === 0) {
    return '<p class="felt-empty">No entries from anyone yet.</p>';
  }

  // Group by date
  const byDate = {};
  for (const entry of entries) {
    const dateKey = new Date(entry.timestamp).toLocaleDateString(undefined, {
      weekday: 'short', month: 'short', day: 'numeric'
    });
    if (!byDate[dateKey]) byDate[dateKey] = [];
    byDate[dateKey].push(entry);
  }

  let html = '<div class="felt-family-view">';
  html += '<h3>How we have been feeling</h3>';

  for (const [date, dayEntries] of Object.entries(byDate)) {
    html += `<div class="felt-day-group">`;
    html += `<div class="felt-day-label">${escapeHtml(date)}</div>`;
    html += '<div class="felt-day-entries">';

    for (const entry of dayEntries) {
      if (entry.type === 'color') {
        const hex = getColorHex(entry.content);
        html += `
          <div class="felt-family-entry">
            <span class="felt-family-name">${escapeHtml(entry.familyMember)}</span>
            <span class="felt-entry-swatch" style="background-color: ${hex}" aria-label="${escapeHtml(entry.content)}"></span>
          </div>
        `;
      } else {
        html += `
          <div class="felt-family-entry">
            <span class="felt-family-name">${escapeHtml(entry.familyMember)}</span>
            <span class="felt-entry-text">${escapeHtml(entry.content)}</span>
          </div>
        `;
      }
    }

    html += '</div></div>';
  }

  html += '</div>';
  return html;
}

// ---------------------------------------------------------------------------
// Main Render
// ---------------------------------------------------------------------------

/**
 * Render the felt-log UI.
 * @param {HTMLElement} container
 */
export async function renderFeltLog(container) {
  containerRef = container;
  await loadNames();

  const member = familyNames[currentTab] || familyNames[0];
  const entriesHtml = await renderEntries(member);

  let html = '';

  // Tabs
  html += '<div class="felt-tabs" role="tablist" aria-label="Family members">';
  for (let i = 0; i < familyNames.length; i++) {
    const isActive = i === currentTab;
    html += `
      <button class="felt-tab ${isActive ? 'felt-tab-active' : ''}"
              role="tab"
              aria-selected="${isActive}"
              data-tab="${i}"
              aria-label="${escapeHtml(familyNames[i])}">
        ${escapeHtml(familyNames[i])}
      </button>
    `;
  }
  // Settings tab
  html += `
    <button class="felt-tab felt-tab-settings ${currentTab === -1 ? 'felt-tab-active' : ''}"
            role="tab"
            aria-selected="${currentTab === -1}"
            data-tab="-1"
            aria-label="Settings">
      &#9881;
    </button>
  `;
  html += '</div>';

  // Tab content
  html += '<div class="felt-content" role="tabpanel">';

  if (currentTab === -1) {
    // Settings: name editor
    html += renderNameEditor();
  } else if (currentTab === -2) {
    // Family view
    html += await renderFamilyView();
  } else {
    // Input area
    html += `
      <div class="felt-input-area">
        <div class="felt-prompt">How are you feeling, ${escapeHtml(member)}?</div>

        <div class="felt-word-input">
          <input type="text"
                 id="felt-word"
                 class="felt-word-field"
                 placeholder="One word..."
                 maxlength="50"
                 aria-label="Describe how you feel in one word">
          <button class="btn-primary felt-save-word" aria-label="Save word">Save</button>
        </div>

        <div class="felt-or">or pick a color</div>

        <div class="felt-color-picker" role="group" aria-label="Pick a feeling color">
    `;

    for (const color of FEELING_COLORS) {
      html += `
        <button class="felt-color-btn"
                style="background-color: ${color.hex}"
                data-color="${color.name}"
                aria-label="${color.label}"
                title="${color.label}">
        </button>
      `;
    }

    html += `
        </div>
      </div>
    `;

    // Past entries
    html += '<div class="felt-history">';
    html += entriesHtml;
    html += '</div>';

    // Review together button
    html += `
      <button class="felt-review-btn" data-tab="-2" aria-label="Review how the family has been feeling">
        Review together
      </button>
    `;
  }

  html += '</div>';

  container.innerHTML = html;
  bindFeltEvents(container);
}

// ---------------------------------------------------------------------------
// Event Binding
// ---------------------------------------------------------------------------

function bindFeltEvents(container) {
  // Tab switching
  container.querySelectorAll('.felt-tab, .felt-review-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      currentTab = parseInt(tab.dataset.tab, 10);
      renderFeltLog(container);
    });
  });

  // Save word
  const saveWordBtn = container.querySelector('.felt-save-word');
  const wordInput = container.querySelector('#felt-word');
  if (saveWordBtn && wordInput) {
    const saveWord = async () => {
      const word = wordInput.value.trim();
      if (!word) return;
      try {
        await addFeltEntry({
          familyMember: familyNames[currentTab],
          type: 'word',
          content: word
        });
        wordInput.value = '';
        renderFeltLog(container);
      } catch (e) {
        console.error('[Felt] Failed to save word:', e);
      }
    };
    saveWordBtn.addEventListener('click', saveWord);
    wordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        saveWord();
      }
    });
  }

  // Save color
  container.querySelectorAll('.felt-color-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const color = btn.dataset.color;
      try {
        await addFeltEntry({
          familyMember: familyNames[currentTab],
          type: 'color',
          content: color
        });
        renderFeltLog(container);
      } catch (e) {
        console.error('[Felt] Failed to save color:', e);
      }
    });
  });

  // Name editor save
  const nameSaveBtn = container.querySelector('.felt-name-save');
  if (nameSaveBtn) {
    nameSaveBtn.addEventListener('click', async () => {
      const inputs = container.querySelectorAll('.felt-name-input');
      inputs.forEach(input => {
        const idx = parseInt(input.dataset.index, 10);
        const val = input.value.trim();
        if (val) familyNames[idx] = val;
      });
      await saveNames();
      currentTab = 0;
      renderFeltLog(container);
    });
  }
}
