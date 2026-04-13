# Family Nexus Healing — Clinician Reference

## Overview

Family Nexus Healing is a Progressive Web App (PWA) that delivers structured healing protocols to a family navigating parental cognitive change with supervised visitation. It is a protocol delivery tool, not a therapeutic intervention. It does not assess, diagnose, or treat.

## Architecture and Data Handling

The application runs entirely in the browser. All data is stored in the device's IndexedDB — a local database that never transmits data over a network. There are no user accounts, no server-side components, no analytics, and no telemetry. The app functions fully offline after initial installation.

Data stored locally includes: a simple feelings log (one word or color per family member per day), visit schedule dates, grief window schedule, and emergency contact numbers. This data is accessible only on the device where it was entered.

## What the App Does

The app organizes pre-authored protocols into three modes:

- **Family mode**: Time-of-day protocol surfacing, a shared feelings log, and visit-day awareness. Includes a persistent 988 crisis link.
- **Father mode**: A simplified interface presenting one protocol at a time with large text and step-by-step navigation. Designed for use during periods of cognitive difficulty. Includes a caregiver-assist toggle that increases contextual information per step.
- **Mother mode**: A private container with quick emotional check-ins, four fast-reset exercises, a scheduled grief window, visit scheduling, and an always-accessible edge button linking to 988 and stored support contacts.

## What the App Does Not Do

- It does not provide clinical assessment or diagnosis
- It does not monitor or track compliance
- It does not transmit data to clinicians, supervisors, or any third party
- It does not substitute for professional treatment or supervision
- It does not provide real-time crisis intervention (it provides links to 988 and stored contacts)

## Observing Use in Session

If you wish to observe how the family uses the app during a session, ask them to show you. The app does not have a clinician portal or observation mode. The feelings log may be reviewed with the family if they choose to share it, but this should be at their discretion.

The father mode interface is designed for use on low-capacity days — if the client can navigate to a protocol and begin it, the interface is functioning as intended. If the client cannot navigate it, consider whether a caregiver should enable the caregiver-assist toggle in settings.

## Protocol Provenance

All protocols are derived from the Phase A research synthesis and Phase B protocol authoring process. Each protocol includes citations, contraindications, modification guidance, and signals for stopping. The full research synthesis is available in the Phase A documentation.

## Crisis Pathway

The app includes a 988 Suicide and Crisis Lifeline link in both Family and Mother modes. In Mother mode, the user can store a trusted contact and therapist phone number for one-tap calling. The app does not provide crisis intervention itself — it provides rapid access to resources.

## Contact

For questions about the protocol content, clinical integration, or the research basis, refer to the Phase A synthesis document and the protocol-level documentation in the Phase B output.
