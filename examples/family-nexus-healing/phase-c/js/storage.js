/**
 * storage.js — IndexedDB wrapper for Family Nexus Healing PWA
 *
 * All data stays on the device. Zero network calls. Ever.
 *
 * Stores:
 *   - settings: key-value pairs (last mode, visit schedule, grief windows)
 *   - felt-log: "what I felt today" entries
 *   - visit-schedule: upcoming visit dates
 */

const DB_NAME = 'family-nexus-healing';
const DB_VERSION = 1;

let db = null;

// ---------------------------------------------------------------------------
// Database Initialization
// ---------------------------------------------------------------------------

/**
 * Open or create the IndexedDB database.
 * Returns the database instance.
 */
export async function initDB() {
  if (db) return db;

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error('[Storage] Failed to open database:', request.error);
      reject(request.error);
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;

      // Settings store — simple key-value
      if (!database.objectStoreNames.contains('settings')) {
        database.createObjectStore('settings', { keyPath: 'key' });
      }

      // Felt-log store — timestamped entries
      if (!database.objectStoreNames.contains('felt-log')) {
        const feltStore = database.createObjectStore('felt-log', {
          keyPath: 'id',
          autoIncrement: true
        });
        feltStore.createIndex('timestamp', 'timestamp', { unique: false });
        feltStore.createIndex('familyMember', 'familyMember', { unique: false });
      }

      // Visit-schedule store — date entries
      if (!database.objectStoreNames.contains('visit-schedule')) {
        const visitStore = database.createObjectStore('visit-schedule', {
          keyPath: 'id',
          autoIncrement: true
        });
        visitStore.createIndex('date', 'date', { unique: false });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      console.log('[Storage] Database opened successfully');
      resolve(db);
    };
  });
}

// ---------------------------------------------------------------------------
// Internal Helpers
// ---------------------------------------------------------------------------

function getDB() {
  if (!db) {
    throw new Error('[Storage] Database not initialized. Call initDB() first.');
  }
  return db;
}

function txPromise(storeName, mode, callback) {
  return new Promise((resolve, reject) => {
    const tx = getDB().transaction(storeName, mode);
    const store = tx.objectStore(storeName);
    const result = callback(store);

    if (result && typeof result.onsuccess !== 'undefined') {
      result.onsuccess = () => resolve(result.result);
      result.onerror = () => reject(result.error);
    } else {
      tx.oncomplete = () => resolve(result);
      tx.onerror = () => reject(tx.error);
    }
  });
}

// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------

/**
 * Save a setting (key-value pair).
 */
export async function saveSetting(key, value) {
  return txPromise('settings', 'readwrite', (store) => {
    return store.put({ key, value, updatedAt: Date.now() });
  });
}

/**
 * Get a setting by key. Returns the value, or null if not found.
 */
export async function getSetting(key) {
  return new Promise((resolve, reject) => {
    const tx = getDB().transaction('settings', 'readonly');
    const store = tx.objectStore('settings');
    const request = store.get(key);

    request.onsuccess = () => {
      resolve(request.result ? request.result.value : null);
    };
    request.onerror = () => reject(request.error);
  });
}

// ---------------------------------------------------------------------------
// Felt Log
// ---------------------------------------------------------------------------

/**
 * Add a felt-log entry.
 * @param {Object} entry - { familyMember, type ('word'|'color'), content }
 * @returns {Promise<number>} The auto-generated ID
 */
export async function addFeltEntry(entry) {
  const record = {
    familyMember: entry.familyMember,
    type: entry.type,
    content: entry.content,
    timestamp: Date.now()
  };

  return new Promise((resolve, reject) => {
    const tx = getDB().transaction('felt-log', 'readwrite');
    const store = tx.objectStore('felt-log');
    const request = store.add(record);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get felt-log entries, most recent first.
 * @param {number} [limit=50] - Maximum number of entries to return
 * @param {string} [familyMember] - Optional filter by family member
 * @returns {Promise<Array>}
 */
export async function getFeltEntries(limit = 50, familyMember = null) {
  return new Promise((resolve, reject) => {
    const tx = getDB().transaction('felt-log', 'readonly');
    const store = tx.objectStore('felt-log');
    const entries = [];

    let cursorSource;
    if (familyMember) {
      const index = store.index('familyMember');
      cursorSource = index.openCursor(IDBKeyRange.only(familyMember), 'prev');
    } else {
      cursorSource = store.openCursor(null, 'prev');
    }

    cursorSource.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor && entries.length < limit) {
        entries.push(cursor.value);
        cursor.continue();
      } else {
        // Sort by timestamp descending (most recent first)
        entries.sort((a, b) => b.timestamp - a.timestamp);
        resolve(entries);
      }
    };

    cursorSource.onerror = () => reject(cursorSource.error);
  });
}

// ---------------------------------------------------------------------------
// Visit Schedule
// ---------------------------------------------------------------------------

/**
 * Add a visit date.
 * @param {string} date - ISO date string (YYYY-MM-DD)
 * @param {string} [notes] - Optional notes
 * @returns {Promise<number>}
 */
export async function addVisitDate(date, notes = '') {
  const record = {
    date: date,
    notes: notes,
    createdAt: Date.now()
  };

  return new Promise((resolve, reject) => {
    const tx = getDB().transaction('visit-schedule', 'readwrite');
    const store = tx.objectStore('visit-schedule');
    const request = store.add(record);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get the next upcoming visit date (from today forward).
 * @returns {Promise<Object|null>} The next visit entry or null
 */
export async function getNextVisit() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toISOString().split('T')[0];

  return new Promise((resolve, reject) => {
    const tx = getDB().transaction('visit-schedule', 'readonly');
    const store = tx.objectStore('visit-schedule');
    const index = store.index('date');
    const range = IDBKeyRange.lowerBound(todayStr);
    const request = index.openCursor(range, 'next');

    request.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        resolve(cursor.value);
      } else {
        resolve(null);
      }
    };

    request.onerror = () => reject(request.error);
  });
}

/**
 * Get all visit dates (from today forward).
 * @returns {Promise<Array>}
 */
export async function getAllVisitDates() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toISOString().split('T')[0];

  return new Promise((resolve, reject) => {
    const tx = getDB().transaction('visit-schedule', 'readonly');
    const store = tx.objectStore('visit-schedule');
    const index = store.index('date');
    const range = IDBKeyRange.lowerBound(todayStr);
    const entries = [];
    const request = index.openCursor(range, 'next');

    request.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        entries.push(cursor.value);
        cursor.continue();
      } else {
        resolve(entries);
      }
    };

    request.onerror = () => reject(request.error);
  });
}

/**
 * Remove a visit date by ID.
 * @param {number} id
 */
export async function removeVisitDate(id) {
  return txPromise('visit-schedule', 'readwrite', (store) => {
    return store.delete(id);
  });
}

// ---------------------------------------------------------------------------
// Export & Clear
// ---------------------------------------------------------------------------

/**
 * Export all local data as a JSON object for backup.
 * @returns {Promise<Object>}
 */
export async function exportAllData() {
  const exportData = {
    exportedAt: new Date().toISOString(),
    appName: 'Family Nexus Healing',
    settings: [],
    feltLog: [],
    visitSchedule: []
  };

  // Settings
  await new Promise((resolve, reject) => {
    const tx = getDB().transaction('settings', 'readonly');
    const store = tx.objectStore('settings');
    const request = store.getAll();
    request.onsuccess = () => {
      exportData.settings = request.result;
      resolve();
    };
    request.onerror = () => reject(request.error);
  });

  // Felt log
  await new Promise((resolve, reject) => {
    const tx = getDB().transaction('felt-log', 'readonly');
    const store = tx.objectStore('felt-log');
    const request = store.getAll();
    request.onsuccess = () => {
      exportData.feltLog = request.result;
      resolve();
    };
    request.onerror = () => reject(request.error);
  });

  // Visit schedule
  await new Promise((resolve, reject) => {
    const tx = getDB().transaction('visit-schedule', 'readonly');
    const store = tx.objectStore('visit-schedule');
    const request = store.getAll();
    request.onsuccess = () => {
      exportData.visitSchedule = request.result;
      resolve();
    };
    request.onerror = () => reject(request.error);
  });

  return exportData;
}

/**
 * Clear all data from all stores.
 * The UI should confirm with the user before calling this.
 */
export async function clearAllData() {
  const storeNames = ['settings', 'felt-log', 'visit-schedule'];

  for (const storeName of storeNames) {
    await new Promise((resolve, reject) => {
      const tx = getDB().transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.clear();
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  console.log('[Storage] All data cleared');
}
