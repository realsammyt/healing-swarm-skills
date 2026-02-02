# ADR-002: Local-First Data Storage

**Status:** Accepted
**Date:** 2024-01-01
**Deciders:** Healing Swarm Collective

---

## Context

Healing applications collect sensitive data:
- Health status and symptoms
- Emotional states and journal entries
- Practice progress and patterns
- Personal reflections and prayers

This data is deeply personal. Users may be documenting their most vulnerable moments. The standard approach of cloud storage creates risks:
- Data breaches exposing health information
- Third-party access to intimate details
- Loss of user control over their own healing data
- Regulatory compliance complexity (HIPAA, GDPR)

---

## Decision

We will implement a **local-first data architecture** where:

1. **All user health data stays on the user's device**
2. **No cloud sync by default** - users must explicitly enable
3. **No required accounts** - applications work offline
4. **No PII in logs or analytics**
5. **Explicit consent required** for any data transmission

Specifically:
- Use browser localStorage/IndexedDB for web apps
- Use device storage for mobile apps
- Provide local export (not just cloud backup)
- Analytics are anonymous and minimal

---

## Alternatives Considered

### Alternative 1: Cloud-First with Encryption

**Description:** Store data in cloud but encrypted at rest.

**Rejected because:**
- Encryption keys still need management
- Cloud provider still has access to metadata
- Breaches can still expose encrypted data
- Users lose control of their data

### Alternative 2: Federated Storage

**Description:** Let users choose their storage provider.

**Considered but deferred:**
- Adds complexity for users
- Many users won't understand options
- Could be added later as optional feature
- Core should work without external services

### Alternative 3: No Persistent Storage

**Description:** Don't store any data, session-only.

**Rejected because:**
- Users want to track progress over time
- Healing journeys are ongoing
- Would significantly reduce value
- Some features require history

---

## Consequences

### Positive

- **User privacy protected** - data never leaves device
- **No compliance burden** - no health data to regulate
- **User trust** - clear promise about data handling
- **Works offline** - healing doesn't need internet
- **No data loss risk** - no cloud outages or shutdowns

### Negative

- **No cross-device sync** by default
- **User responsible for backup**
- **Lost if device lost** (without export)
- **No aggregate analytics** on user health data

### Mitigations

- Clear documentation about backup importance
- Easy local export functionality
- Optional (explicit opt-in) cloud backup
- Anonymous aggregate analytics for improvement

---

## Implementation

### Web Applications

```typescript
// Use localStorage for simple data
localStorage.setItem('healing-progress', JSON.stringify(progress));

// Use IndexedDB for larger data
const db = await openDB('healing-journal', 1, {
  upgrade(db) {
    db.createObjectStore('entries', { keyPath: 'id' });
  },
});
```

### Mobile Applications

```typescript
// Use device secure storage
import { SecureStore } from 'expo-secure-store';
await SecureStore.setItemAsync('healing-data', JSON.stringify(data));
```

### Analytics (Anonymous Only)

```typescript
// Collect only anonymous usage patterns
analytics.track('practice_completed', {
  practice_type: 'meditation',
  duration_bucket: '5-10min',
  // NO user identifiers
  // NO health data
  // NO journal content
});
```

### Export Functionality

```typescript
// Let users export their own data
function exportUserData() {
  const data = {
    journal: getAllJournalEntries(),
    progress: getProgressHistory(),
    preferences: getUserPreferences(),
    exportDate: new Date().toISOString(),
  };
  downloadAsFile(data, 'my-healing-journey.json');
}
```

---

## Ethics Guardrails Connection

This decision implements the Data Privacy section of ethics-guardrails.md:

```
❌ NEVER transmit user health data to external servers without explicit consent
❌ NEVER store identifiable health information beyond local device
❌ NEVER use health data for advertising, profiling, or sale
❌ NEVER share individual user data with third parties
❌ NEVER track healing practices for purposes user hasn't consented to
❌ NEVER require account creation to access healing content
```

---

## Related ADRs

- [ADR-001: Ethics-First Architecture](001-ethics-first-architecture.md)
- [ADR-003: Multi-Agent Quality Review](003-multi-agent-quality.md)

---

## Notes

This decision may limit some features (like social sharing or practitioner dashboards), but these can be added as explicit opt-in features later. The default must be privacy-preserving.

Users seeking healing support should never have to worry that their vulnerable moments are being stored in someone else's database.
