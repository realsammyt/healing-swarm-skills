/**
 * today.js — "Today" screen for Family mode
 *
 * Time-of-day based protocol surfacing. Shows the most relevant
 * protocols for right now, plus an always-visible emergency button.
 */

import { navigate } from './router.js';
import { getNextVisit } from './storage.js';

// ---------------------------------------------------------------------------
// Time-of-day Configuration
// ---------------------------------------------------------------------------

const TIME_BLOCKS = [
  {
    name: 'morning',
    label: 'Good morning',
    start: 5,
    end: 11,
    categories: ['mother-with-kids/daily-regulation', 'each-child-alone'],
    keywords: ['morning', 'anchor', 'breakfast', 'wake', 'regulation']
  },
  {
    name: 'afternoon',
    label: 'Good afternoon',
    start: 11,
    end: 17,
    categories: ['father-with-kids-supervised/entry', 'each-child-alone'],
    keywords: ['visit', 'walk', 'sensory', 'play', 'shared']
  },
  {
    name: 'evening',
    label: 'Good evening',
    start: 17,
    end: 20,
    categories: ['mother-with-kids/daily-regulation', 'each-child-alone'],
    keywords: ['bedtime', 'evening', 'wind', 'settle', 'calm']
  },
  {
    name: 'night',
    label: 'Almost bedtime',
    start: 20,
    end: 24,
    categories: ['mother-with-kids/daily-regulation', 'each-child-alone'],
    keywords: ['bedtime', 'sleep', 'night', 'ritual', 'rest']
  },
  {
    // Early morning wraps back to night
    name: 'late-night',
    label: 'Still up?',
    start: 0,
    end: 5,
    categories: ['mother-with-kids/daily-regulation'],
    keywords: ['rest', 'calm', 'breathe']
  }
];

// ---------------------------------------------------------------------------
// Protocol Filtering
// ---------------------------------------------------------------------------

function getCurrentTimeBlock() {
  const hour = new Date().getHours();
  return TIME_BLOCKS.find(b => hour >= b.start && hour < b.end) || TIME_BLOCKS[0];
}

function filterProtocolsByTime(protocols, timeBlock) {
  // First try: match by category
  let matched = protocols.filter(p => {
    if (!p.category) return false;
    return timeBlock.categories.some(cat =>
      p.category.toLowerCase().includes(cat.toLowerCase())
    );
  });

  // If we got too few, also try keyword matching in title/summary
  if (matched.length < 2) {
    const keywordMatched = protocols.filter(p => {
      const text = (p.title + ' ' + (p.summary || []).join(' ')).toLowerCase();
      return timeBlock.keywords.some(kw => text.includes(kw));
    });
    // Merge, dedup
    const ids = new Set(matched.map(p => p.id));
    for (const p of keywordMatched) {
      if (!ids.has(p.id)) {
        matched.push(p);
        ids.add(p.id);
      }
    }
  }

  // Limit to 3
  return matched.slice(0, 3);
}

function isVisitToday(nextVisit) {
  if (!nextVisit) return false;
  const today = new Date().toISOString().split('T')[0];
  return nextVisit.date === today;
}

function isVisitWithin48h(nextVisit) {
  if (!nextVisit) return false;
  const now = Date.now();
  const visitDate = new Date(nextVisit.date + 'T00:00:00').getTime();
  const hoursUntil = (visitDate - now) / (1000 * 60 * 60);
  return hoursUntil > 0 && hoursUntil <= 48;
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(String(text)));
  return div.innerHTML;
}

/**
 * Render the "Today" screen.
 * @param {Array} protocols - All family-mode protocols
 * @param {HTMLElement} container - The container element to render into
 */
export async function renderTodayScreen(protocols, container) {
  const timeBlock = getCurrentTimeBlock();

  // Get visit info
  let nextVisit = null;
  try {
    nextVisit = await getNextVisit();
  } catch (e) {
    console.warn('[Today] Could not check visit schedule:', e);
  }

  // If a visit is today and it is afternoon, prefer visit protocols
  let suggestedProtocols;
  if (isVisitToday(nextVisit) && timeBlock.name === 'afternoon') {
    suggestedProtocols = protocols.filter(p =>
      p.category && p.category.includes('father-with-kids-supervised')
    ).slice(0, 3);
  } else {
    suggestedProtocols = filterProtocolsByTime(protocols, timeBlock);
  }

  // Fallback: if nothing matched, show the first 3 protocols
  if (suggestedProtocols.length === 0) {
    suggestedProtocols = protocols.slice(0, 3);
  }

  let html = '';

  // Visit banner (if within 48h)
  if (isVisitWithin48h(nextVisit) || isVisitToday(nextVisit)) {
    const visitDate = new Date(nextVisit.date + 'T00:00:00');
    const dayLabel = isVisitToday(nextVisit) ? 'Today' :
      visitDate.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });

    html += `
      <div class="today-visit-banner" role="alert">
        <div class="visit-banner-icon" aria-hidden="true">&#128197;</div>
        <div class="visit-banner-text">
          <strong>${isVisitToday(nextVisit) ? 'Visit day' : 'A visit is coming'}</strong>
          <span>${escapeHtml(dayLabel)}</span>
        </div>
      </div>
    `;
  }

  // Time-of-day greeting
  html += `
    <div class="today-greeting">
      <h2>${escapeHtml(timeBlock.label)}</h2>
      <p class="today-subtext">Something you might try together.</p>
    </div>
  `;

  // Suggested protocol cards
  html += '<div class="today-suggestions">';
  for (const p of suggestedProtocols) {
    const summaryText = (p.summary && p.summary[0]) || '';
    const truncated = summaryText.length > 120
      ? summaryText.slice(0, 120) + '...'
      : summaryText;

    html += `
      <div class="protocol-card today-card"
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
