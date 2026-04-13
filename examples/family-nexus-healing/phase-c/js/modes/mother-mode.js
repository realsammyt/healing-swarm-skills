/**
 * mother-mode.js — Mother mode orchestration
 *
 * The mother's private container.
 *   - "Right Now" tab: quick check-in, fast resets, edge button
 *   - "Practices" tab: all mother-alone protocols
 *   - "My Space" tab: grief window scheduler, visit schedule
 *
 * The "I'm at the edge" button is always reachable.
 * It is calm, not panicked.
 */

import { navigate } from '../router.js';
import {
  addFeltEntry, getFeltEntries,
  getSetting, saveSetting,
  addVisitDate, getNextVisit, getAllVisitDates, removeVisitDate
} from '../storage.js';

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

const FAST_RESETS = [
  { id: 'ground', label: 'Ground', icon: '&#9673;', desc: 'feet on floor, name 5 things' },
  { id: 'soften', label: 'Soften', icon: '&#9825;', desc: 'relax jaw, drop shoulders' },
  { id: 'release', label: 'Release', icon: '&#10047;', desc: 'shake hands, sigh out' },
  { id: 'fuel', label: 'Fuel up', icon: '&#9752;', desc: 'water, snack, 2 minutes rest' }
];

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let activeTab = 'right-now';
let griefWindowActive = false;
let griefTimerInterval = null;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(String(text)));
  return div.innerHTML;
}

function getColorHex(colorName) {
  const found = FEELING_COLORS.find(c => c.name === colorName);
  return found ? found.hex : '#999';
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString(undefined, {
    weekday: 'long', month: 'long', day: 'numeric'
  });
}

// ---------------------------------------------------------------------------
// Grief Window Logic
// ---------------------------------------------------------------------------

async function checkGriefWindow() {
  try {
    const schedule = await getSetting('grief-window-schedule');
    if (!schedule) return false;

    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    if (schedule.day.toLowerCase() === currentDay) {
      const [startH, startM] = schedule.startTime.split(':').map(Number);
      const startMinutes = startH * 60 + startM;
      const durationMinutes = schedule.duration || 30;
      const endMinutes = startMinutes + durationMinutes;

      if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
        return {
          active: true,
          remainingMinutes: endMinutes - currentMinutes,
          totalMinutes: durationMinutes
        };
      }
    }
  } catch (e) {
    console.warn('[Mother] Could not check grief window:', e);
  }
  return false;
}

function renderGriefWindowOverlay(griefInfo) {
  const remaining = griefInfo.remainingMinutes;
  const total = griefInfo.totalMinutes;
  const progress = ((total - remaining) / total) * 100;

  return `
    <div class="grief-window-overlay" role="dialog" aria-label="Grief window active">
      <div class="grief-window-content">
        <div class="grief-window-header">
          <h2>This is your time</h2>
          <p>Your grief window is open. Whatever comes, let it come.</p>
        </div>

        <div class="grief-timer">
          <div class="grief-timer-circle">
            <svg viewBox="0 0 100 100" class="grief-timer-svg" aria-hidden="true">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#f0e8f5" stroke-width="4"/>
              <circle cx="50" cy="50" r="45" fill="none" stroke="#7a4fa0" stroke-width="4"
                      stroke-dasharray="${2 * Math.PI * 45}"
                      stroke-dashoffset="${2 * Math.PI * 45 * (1 - progress / 100)}"
                      transform="rotate(-90 50 50)"/>
            </svg>
            <div class="grief-timer-text">
              <span class="grief-timer-number">${remaining}</span>
              <span class="grief-timer-label">minutes left</span>
            </div>
          </div>
        </div>

        <p class="grief-window-gentle">You do not have to do anything with this time.</p>

        <button class="grief-window-close" aria-label="Close grief window early">
          I am ready to close this
        </button>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Right Now Tab
// ---------------------------------------------------------------------------

async function renderRightNow(container, protocols) {
  // Check grief window
  const griefInfo = await checkGriefWindow();
  if (griefInfo && griefInfo.active) {
    griefWindowActive = true;
    container.innerHTML = renderGriefWindowOverlay(griefInfo);

    const closeBtn = container.querySelector('.grief-window-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        griefWindowActive = false;
        renderRightNow(container, protocols);
      });
    }
    return;
  }

  griefWindowActive = false;

  // Get recent felt entries for mother
  let recentEntries = [];
  try {
    recentEntries = await getFeltEntries(3, 'mother-private');
  } catch (e) { /* ignore */ }

  let html = '';

  // Quick check-in
  html += `
    <div class="mother-checkin">
      <h2>How are you right now?</h2>

      <div class="mother-color-picker" role="group" aria-label="Pick a feeling color">
  `;

  for (const color of FEELING_COLORS) {
    html += `
      <button class="mother-color-btn"
              style="background-color: ${color.hex}"
              data-color="${color.name}"
              aria-label="${color.label}">
      </button>
    `;
  }

  html += `
      </div>

      <div class="mother-word-input">
        <input type="text" id="mother-word" class="mother-word-field"
               placeholder="Or one word..."
               maxlength="50"
               aria-label="Describe how you feel in one word">
        <button class="btn-primary mother-save-word" aria-label="Save">Save</button>
      </div>
    </div>
  `;

  // Recent entries (subtle)
  if (recentEntries.length > 0) {
    html += '<div class="mother-recent">';
    html += '<div class="mother-recent-label">Recently:</div>';
    html += '<div class="mother-recent-entries">';
    for (const entry of recentEntries) {
      if (entry.type === 'color') {
        html += `<span class="mother-recent-swatch" style="background-color: ${getColorHex(entry.content)}" aria-label="${escapeHtml(entry.content)}"></span>`;
      } else {
        html += `<span class="mother-recent-word">${escapeHtml(entry.content)}</span>`;
      }
    }
    html += '</div></div>';
  }

  // Fast resets
  html += `
    <div class="mother-fast-resets">
      <h3>Fast resets</h3>
      <div class="mother-reset-grid">
  `;

  for (const reset of FAST_RESETS) {
    // Find a matching protocol for this reset
    const matchingProtocol = protocols.find(p => {
      const title = (p.title || '').toLowerCase();
      return title.includes(reset.id) || title.includes(reset.label.toLowerCase());
    });

    html += `
      <button class="mother-reset-btn"
              ${matchingProtocol ? `data-protocol-id="${escapeHtml(matchingProtocol.id)}"` : ''}
              aria-label="${reset.label}: ${reset.desc}">
        <span class="mother-reset-icon" aria-hidden="true">${reset.icon}</span>
        <span class="mother-reset-label">${escapeHtml(reset.label)}</span>
        <span class="mother-reset-desc">${escapeHtml(reset.desc)}</span>
      </button>
    `;
  }

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Bind events
  // Color buttons
  container.querySelectorAll('.mother-color-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await addFeltEntry({
          familyMember: 'mother-private',
          type: 'color',
          content: btn.dataset.color
        });
        renderRightNow(container, protocols);
      } catch (e) {
        console.error('[Mother] Failed to save color:', e);
      }
    });
  });

  // Word save
  const saveWordBtn = container.querySelector('.mother-save-word');
  const wordInput = container.querySelector('#mother-word');
  if (saveWordBtn && wordInput) {
    const saveWord = async () => {
      const word = wordInput.value.trim();
      if (!word) return;
      try {
        await addFeltEntry({
          familyMember: 'mother-private',
          type: 'word',
          content: word
        });
        wordInput.value = '';
        renderRightNow(container, protocols);
      } catch (e) {
        console.error('[Mother] Failed to save word:', e);
      }
    };
    saveWordBtn.addEventListener('click', saveWord);
    wordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); saveWord(); }
    });
  }

  // Reset buttons
  container.querySelectorAll('.mother-reset-btn[data-protocol-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      navigate(`protocol/${btn.dataset.protocolId}`);
    });
  });
}

// ---------------------------------------------------------------------------
// Practices Tab
// ---------------------------------------------------------------------------

function renderPractices(container, protocols) {
  // Group by subcategory
  const groups = {};
  for (const p of protocols) {
    const cat = p.category || 'general';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(p);
  }

  let html = '<div class="protocol-list">';

  for (const [category, items] of Object.entries(groups)) {
    const catDisplay = category
      .split('/')
      .filter(p => p)
      .map(p => p.replace(/-/g, ' '))
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' / ');

    html += `<div class="category-group">`;
    html += `<div class="category-group-title">${escapeHtml(catDisplay)}</div>`;

    for (const p of items) {
      const summaryText = (p.summary && p.summary[0]) || '';
      const truncated = summaryText.length > 140
        ? summaryText.slice(0, 140) + '...'
        : summaryText;

      html += `
        <div class="protocol-card"
             tabindex="0"
             role="button"
             aria-label="Open practice: ${escapeHtml(p.title)}"
             data-protocol-id="${escapeHtml(p.id)}">
          <div class="protocol-card-title">${escapeHtml(p.title)}</div>
          <div class="protocol-card-meta">
            ${p.duration ? `<span>${escapeHtml(p.duration)}</span>` : ''}
            ${p.energyCost ? `<span>${escapeHtml(p.energyCost)} energy</span>` : ''}
          </div>
          <div class="protocol-card-summary">${escapeHtml(truncated)}</div>
        </div>
      `;
    }

    html += '</div>';
  }

  html += '</div>';
  container.innerHTML = html;

  // Bind card clicks
  container.querySelectorAll('.protocol-card[data-protocol-id]').forEach(card => {
    const id = card.dataset.protocolId;
    const handler = () => navigate(`protocol/${id}`);
    card.addEventListener('click', handler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handler();
      }
    });
  });
}

// ---------------------------------------------------------------------------
// My Space Tab
// ---------------------------------------------------------------------------

async function renderMySpace(container) {
  // Load existing data
  let griefSchedule = null;
  let visits = [];
  let trustedContact = '';
  let therapistContact = '';

  try {
    griefSchedule = await getSetting('grief-window-schedule');
    visits = await getAllVisitDates();
    trustedContact = (await getSetting('trusted-contact')) || '';
    therapistContact = (await getSetting('therapist-contact')) || '';
  } catch (e) {
    console.warn('[Mother] Could not load My Space data:', e);
  }

  let html = '';

  // --- Grief Window Scheduler ---
  html += `
    <div class="mother-section">
      <h3>Grief window</h3>
      <p class="mother-section-desc">
        Choose a time each week for your grief. Outside this window, grief content will not appear.
      </p>

      <div class="mother-grief-form">
        <label for="grief-day">Day</label>
        <select id="grief-day" class="mother-select" aria-label="Day of week for grief window">
          <option value="">Choose a day...</option>
          <option value="monday" ${griefSchedule && griefSchedule.day === 'monday' ? 'selected' : ''}>Monday</option>
          <option value="tuesday" ${griefSchedule && griefSchedule.day === 'tuesday' ? 'selected' : ''}>Tuesday</option>
          <option value="wednesday" ${griefSchedule && griefSchedule.day === 'wednesday' ? 'selected' : ''}>Wednesday</option>
          <option value="thursday" ${griefSchedule && griefSchedule.day === 'thursday' ? 'selected' : ''}>Thursday</option>
          <option value="friday" ${griefSchedule && griefSchedule.day === 'friday' ? 'selected' : ''}>Friday</option>
          <option value="saturday" ${griefSchedule && griefSchedule.day === 'saturday' ? 'selected' : ''}>Saturday</option>
          <option value="sunday" ${griefSchedule && griefSchedule.day === 'sunday' ? 'selected' : ''}>Sunday</option>
        </select>

        <label for="grief-time">Time</label>
        <input type="time" id="grief-time" class="mother-time-input"
               value="${griefSchedule ? escapeHtml(griefSchedule.startTime) : ''}"
               aria-label="Start time for grief window">

        <label for="grief-duration">Duration (minutes)</label>
        <select id="grief-duration" class="mother-select" aria-label="Duration of grief window">
          <option value="15" ${griefSchedule && griefSchedule.duration === 15 ? 'selected' : ''}>15 minutes</option>
          <option value="30" ${!griefSchedule || griefSchedule.duration === 30 ? 'selected' : ''}>30 minutes</option>
          <option value="45" ${griefSchedule && griefSchedule.duration === 45 ? 'selected' : ''}>45 minutes</option>
          <option value="60" ${griefSchedule && griefSchedule.duration === 60 ? 'selected' : ''}>60 minutes</option>
        </select>

        <button class="btn-primary mother-save-grief" style="margin-top: var(--space-md); width: 100%;">
          Save Grief Window
        </button>
      </div>
  `;

  if (griefSchedule) {
    html += `
      <div class="mother-grief-current">
        Currently: ${escapeHtml(griefSchedule.day)} at ${escapeHtml(griefSchedule.startTime)} for ${griefSchedule.duration} minutes
        <button class="mother-remove-grief" aria-label="Remove grief window schedule">&times; Remove</button>
      </div>
    `;
  }

  html += '</div>';

  // --- Visit Schedule ---
  html += `
    <div class="mother-section">
      <h3>Visit schedule</h3>
      <p class="mother-section-desc">Add upcoming visit dates so the app can help you prepare.</p>

      <div class="mother-visit-form">
        <label for="visit-date">Date</label>
        <input type="date" id="visit-date" class="mother-date-input"
               aria-label="Visit date"
               min="${new Date().toISOString().split('T')[0]}">
        <button class="btn-primary mother-add-visit" style="margin-top: var(--space-md); width: 100%;">
          Add Visit
        </button>
      </div>
  `;

  if (visits.length > 0) {
    html += '<div class="mother-visit-list">';
    for (const v of visits) {
      html += `
        <div class="mother-visit-item">
          <span>${escapeHtml(formatDate(v.date))}</span>
          <button class="mother-remove-visit" data-visit-id="${v.id}" aria-label="Remove visit on ${escapeHtml(v.date)}">&times;</button>
        </div>
      `;
    }
    html += '</div>';
  }

  html += '</div>';

  // --- Emergency Contacts ---
  html += `
    <div class="mother-section">
      <h3>My support people</h3>
      <p class="mother-section-desc">
        These numbers appear when you tap "I'm at the edge." They stay on your device only.
      </p>

      <div class="mother-contacts-form">
        <label for="trusted-contact">Trusted person phone</label>
        <input type="tel" id="trusted-contact" class="mother-tel-input"
               value="${escapeHtml(trustedContact)}"
               placeholder="e.g. 555-123-4567"
               aria-label="Trusted person phone number">

        <label for="therapist-contact">Therapist phone</label>
        <input type="tel" id="therapist-contact" class="mother-tel-input"
               value="${escapeHtml(therapistContact)}"
               placeholder="e.g. 555-987-6543"
               aria-label="Therapist phone number">

        <button class="btn-primary mother-save-contacts" style="margin-top: var(--space-md); width: 100%;">
          Save Contacts
        </button>
      </div>
    </div>
  `;

  // --- Data Management ---
  html += `
    <div class="mother-section">
      <h3>Your data</h3>
      <p class="mother-section-desc">Everything stays on this device. You can export a backup or clear all data.</p>
      <div class="mother-data-actions">
        <button class="mother-export-btn" aria-label="Export all data as backup">Export backup</button>
        <button class="mother-clear-btn" aria-label="Clear all data from this device">Clear all data</button>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // --- Bind Events ---

  // Grief window save
  const saveGriefBtn = container.querySelector('.mother-save-grief');
  if (saveGriefBtn) {
    saveGriefBtn.addEventListener('click', async () => {
      const day = container.querySelector('#grief-day').value;
      const time = container.querySelector('#grief-time').value;
      const duration = parseInt(container.querySelector('#grief-duration').value, 10);

      if (!day || !time) {
        return; // silently ignore incomplete form
      }

      try {
        await saveSetting('grief-window-schedule', { day, startTime: time, duration });
        renderMySpace(container);
      } catch (e) {
        console.error('[Mother] Failed to save grief schedule:', e);
      }
    });
  }

  // Remove grief window
  const removeGriefBtn = container.querySelector('.mother-remove-grief');
  if (removeGriefBtn) {
    removeGriefBtn.addEventListener('click', async () => {
      try {
        await saveSetting('grief-window-schedule', null);
        renderMySpace(container);
      } catch (e) { /* ignore */ }
    });
  }

  // Add visit
  const addVisitBtn = container.querySelector('.mother-add-visit');
  const visitDateInput = container.querySelector('#visit-date');
  if (addVisitBtn && visitDateInput) {
    addVisitBtn.addEventListener('click', async () => {
      const date = visitDateInput.value;
      if (!date) return;
      try {
        await addVisitDate(date);
        renderMySpace(container);
      } catch (e) {
        console.error('[Mother] Failed to add visit:', e);
      }
    });
  }

  // Remove visit
  container.querySelectorAll('.mother-remove-visit').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = parseInt(btn.dataset.visitId, 10);
      try {
        await removeVisitDate(id);
        renderMySpace(container);
      } catch (e) { /* ignore */ }
    });
  });

  // Save contacts
  const saveContactsBtn = container.querySelector('.mother-save-contacts');
  if (saveContactsBtn) {
    saveContactsBtn.addEventListener('click', async () => {
      const trusted = container.querySelector('#trusted-contact').value.trim();
      const therapist = container.querySelector('#therapist-contact').value.trim();
      try {
        await saveSetting('trusted-contact', trusted);
        await saveSetting('therapist-contact', therapist);
        // Visual feedback
        saveContactsBtn.textContent = 'Saved';
        setTimeout(() => { saveContactsBtn.textContent = 'Save Contacts'; }, 1500);
      } catch (e) {
        console.error('[Mother] Failed to save contacts:', e);
      }
    });
  }

  // Export data
  const exportBtn = container.querySelector('.mother-export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', async () => {
      try {
        const { exportAllData } = await import('../storage.js');
        const data = await exportAllData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `family-nexus-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
      } catch (e) {
        console.error('[Mother] Failed to export data:', e);
      }
    });
  }

  // Clear data
  const clearBtn = container.querySelector('.mother-clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', async () => {
      if (!confirm('This will permanently delete all your data from this device. This cannot be undone. Are you sure?')) {
        return;
      }
      try {
        const { clearAllData } = await import('../storage.js');
        await clearAllData();
        renderMySpace(container);
      } catch (e) {
        console.error('[Mother] Failed to clear data:', e);
      }
    });
  }
}

// ---------------------------------------------------------------------------
// Edge Button Overlay
// ---------------------------------------------------------------------------

async function renderEdgeOverlay(container) {
  let trustedContact = '';
  let therapistContact = '';

  try {
    trustedContact = (await getSetting('trusted-contact')) || '';
    therapistContact = (await getSetting('therapist-contact')) || '';
  } catch (e) { /* ignore */ }

  let html = `
    <div class="edge-overlay" role="dialog" aria-label="You are at the edge. Here is help.">
      <div class="edge-content">
        <h2>You are not alone</h2>
        <p class="edge-message">These are people who can help right now.</p>

        <div class="edge-contacts">
          <a href="tel:988" class="edge-contact edge-contact-988">
            <span class="edge-contact-label">988 Suicide &amp; Crisis Lifeline</span>
            <span class="edge-contact-action">Tap to call</span>
          </a>
  `;

  if (trustedContact) {
    html += `
      <a href="tel:${escapeHtml(trustedContact)}" class="edge-contact edge-contact-trusted">
        <span class="edge-contact-label">Your trusted person</span>
        <span class="edge-contact-action">Tap to call</span>
      </a>
    `;
  }

  if (therapistContact) {
    html += `
      <a href="tel:${escapeHtml(therapistContact)}" class="edge-contact edge-contact-therapist">
        <span class="edge-contact-label">Your therapist</span>
        <span class="edge-contact-action">Tap to call</span>
      </a>
    `;
  }

  if (!trustedContact && !therapistContact) {
    html += `
      <p class="edge-hint">You can add your trusted person and therapist numbers in My Space &gt; My support people.</p>
    `;
  }

  html += `
        </div>

        <button class="edge-close" aria-label="Close this screen">
          I am okay for now
        </button>
      </div>
    </div>
  `;

  return html;
}

// ---------------------------------------------------------------------------
// Main Render
// ---------------------------------------------------------------------------

/**
 * Render the mother mode screen.
 * @param {HTMLElement} container
 * @param {Array} protocols - Mother-mode protocols
 */
export async function renderMotherMode(container, protocols) {
  let html = '';

  // Navigation bar
  html += `
    <nav class="nav-bar">
      <button class="nav-back" onclick="window.location.hash='#/'" aria-label="Back to home">
        <span aria-hidden="true">&larr;</span> Home
      </button>
      <span class="nav-title">Your Space</span>
    </nav>
  `;

  // Tab bar
  html += `
    <div class="mode-tabs" role="tablist" aria-label="Mother mode sections">
      <button class="mode-tab ${activeTab === 'right-now' ? 'mode-tab-active' : ''}"
              role="tab" aria-selected="${activeTab === 'right-now'}"
              data-mother-tab="right-now">Right Now</button>
      <button class="mode-tab ${activeTab === 'practices' ? 'mode-tab-active' : ''}"
              role="tab" aria-selected="${activeTab === 'practices'}"
              data-mother-tab="practices">Practices</button>
      <button class="mode-tab ${activeTab === 'my-space' ? 'mode-tab-active' : ''}"
              role="tab" aria-selected="${activeTab === 'my-space'}"
              data-mother-tab="my-space">My Space</button>
    </div>
  `;

  // Tab content area
  html += '<div class="mode-tab-content" role="tabpanel" id="mother-tab-content"></div>';

  // Spacer for fixed footer
  html += '<div class="edge-spacer"></div>';

  // Edge button (fixed, always reachable)
  html += `
    <div class="edge-footer" role="complementary" aria-label="Crisis support">
      <button class="edge-btn" aria-label="I am at the edge — get help now">
        <span class="edge-btn-icon" aria-hidden="true">&#9829;</span>
        <span class="edge-btn-text">I'm at the edge</span>
      </button>
    </div>
  `;

  // Edge overlay (hidden by default)
  html += '<div id="mother-edge-overlay" style="display:none;"></div>';

  container.innerHTML = html;

  // Render active tab
  const contentArea = container.querySelector('#mother-tab-content');
  await renderMotherTab(contentArea, protocols);

  // Bind tab switching
  container.querySelectorAll('[data-mother-tab]').forEach(tab => {
    tab.addEventListener('click', async () => {
      activeTab = tab.dataset.motherTab;

      container.querySelectorAll('.mode-tab').forEach(t => {
        t.classList.remove('mode-tab-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('mode-tab-active');
      tab.setAttribute('aria-selected', 'true');

      await renderMotherTab(contentArea, protocols);
    });
  });

  // Bind edge button
  const edgeBtn = container.querySelector('.edge-btn');
  const edgeOverlay = container.querySelector('#mother-edge-overlay');
  if (edgeBtn && edgeOverlay) {
    edgeBtn.addEventListener('click', async () => {
      edgeOverlay.innerHTML = await renderEdgeOverlay(container);
      edgeOverlay.style.display = 'block';

      const closeBtn = edgeOverlay.querySelector('.edge-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          edgeOverlay.style.display = 'none';
          edgeOverlay.innerHTML = '';
        });
      }
    });
  }
}

async function renderMotherTab(contentArea, protocols) {
  switch (activeTab) {
    case 'right-now':
      await renderRightNow(contentArea, protocols);
      break;
    case 'practices':
      renderPractices(contentArea, protocols);
      break;
    case 'my-space':
      await renderMySpace(contentArea);
      break;
  }
}

/**
 * Reset the mother mode state.
 */
export function resetMotherMode() {
  activeTab = 'right-now';
  griefWindowActive = false;
  if (griefTimerInterval) {
    clearInterval(griefTimerInterval);
    griefTimerInterval = null;
  }
}
