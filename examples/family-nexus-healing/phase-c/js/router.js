/**
 * router.js — Minimal hash-based router for Family Nexus Healing PWA
 *
 * Routes:
 *   #/              → landing screen
 *   #/family        → family mode protocol list
 *   #/father        → father mode protocol list
 *   #/mother        → mother mode protocol list
 *   #/protocol/:id  → individual protocol detail view
 *
 * The router manages:
 *   - Screen visibility (.active class)
 *   - data-mode on <body>
 *   - meta theme-color updates
 *   - Dispatching render callbacks
 */

const THEME_COLORS = {
  landing: '#2d8a4e',
  family: '#2d8a4e',
  father: '#3a6ea5',
  mother: '#7a4fa0'
};

let onRouteChange = null;

/**
 * Register a callback that fires on every route change.
 * Callback receives { screen, mode, protocolId }.
 */
export function onNavigate(callback) {
  onRouteChange = callback;
}

/**
 * Navigate to a new route by setting location hash.
 */
export function navigate(path) {
  window.location.hash = path;
}

/**
 * Parse the current hash into a route object.
 */
function parseHash() {
  const hash = window.location.hash.replace(/^#\/?/, '');

  if (!hash || hash === '/') {
    return { screen: 'landing', mode: 'landing', protocolId: null };
  }

  if (hash.startsWith('protocol/')) {
    const id = hash.replace('protocol/', '');
    // Determine the mode from the previous navigation or from data
    const currentMode = document.body.dataset.mode || 'family';
    return { screen: 'protocol-view', mode: currentMode, protocolId: id };
  }

  const validModes = ['family', 'father', 'mother'];
  if (validModes.includes(hash)) {
    return { screen: `${hash}-screen`, mode: hash, protocolId: null };
  }

  // Unknown route — go to landing
  return { screen: 'landing', mode: 'landing', protocolId: null };
}

/**
 * Apply a route: show the right screen, set mode, update theme color.
 */
function applyRoute() {
  const route = parseHash();

  // Set data-mode on body (drives CSS theming)
  document.body.dataset.mode = route.mode;

  // Update meta theme-color
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', THEME_COLORS[route.mode] || THEME_COLORS.landing);
  }

  // Toggle screen visibility
  const screens = document.querySelectorAll('.screen');
  screens.forEach((s) => {
    s.classList.remove('active');
    s.removeAttribute('aria-hidden');
  });

  const target = document.getElementById(route.screen);
  if (target) {
    target.classList.add('active');
    // Scroll to top on screen change
    window.scrollTo(0, 0);
  }

  // Notify the app
  if (onRouteChange) {
    onRouteChange(route);
  }
}

/**
 * Initialize the router — listen for hash changes and apply the initial route.
 */
export function initRouter() {
  window.addEventListener('hashchange', applyRoute);
  applyRoute();
}
