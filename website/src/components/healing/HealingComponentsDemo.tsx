import React, { useState } from 'react';
import {
  EvidenceCitation,
  TraditionAttribution,
  HealingProgress,
  PracticeSelector,
  SafetyConsent,
} from './index';
import type { HealingStep, PracticeOption } from './index';

/**
 * Comprehensive demo of all healing components
 * This can be used in Docusaurus pages to showcase the component library
 */
export function HealingComponentsDemo() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const practiceOptions: PracticeOption[] = [
    {
      id: 'breathing',
      label: 'Box Breathing',
      description: 'Four-count breath pattern for nervous system regulation',
    },
    {
      id: 'grounding',
      label: '5-4-3-2-1 Grounding',
      description: 'Sensory awareness technique for anxiety relief',
    },
    {
      id: 'body-scan',
      label: 'Body Scan Meditation',
      description: 'Progressive relaxation through body awareness',
    },
  ];

  const progressSteps: HealingStep[] = [
    { id: '1', label: 'Review safety information', status: consentGiven ? 'completed' : 'current' },
    {
      id: '2',
      label: 'Select your practice',
      status: consentGiven
        ? selectedPractice.length > 0
          ? 'completed'
          : 'current'
        : 'upcoming',
    },
    {
      id: '3',
      label: 'Begin practice',
      status: selectedPractice.length > 0 ? 'current' : 'upcoming',
    },
    { id: '4', label: 'Reflect on experience', status: 'upcoming' },
  ];

  return (
    <div className="space-y-12 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-healing-light">
          Healing Components Demo
        </h1>
        <p className="text-lg text-grounding-light">
          Interactive demonstration of all healing-specific components
        </p>
      </div>

      {/* Progress Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-healing-light">
          Your Journey
        </h2>
        <HealingProgress
          steps={progressSteps}
          encouragementMessage={
            consentGiven
              ? 'Great start! Continue when you feel ready.'
              : 'Welcome! Let\'s begin by reviewing important safety information.'
          }
        />
      </section>

      {/* Safety Consent */}
      {!consentGiven && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-healing-light">
            Step 1: Safety First
          </h2>
          <SafetyConsent
            title="Important Safety Information"
            body={`These practices are designed to support well-being but are not substitutes for professional medical or mental health care.

If you experience severe distress, suicidal thoughts, or acute mental health symptoms, please contact a crisis helpline or emergency services immediately.

Some practices involve focused attention or breathing techniques that may cause temporary dizziness or anxiety. You can stop at any time.`}
            checkboxLabel="I understand these are wellness practices, not medical treatment"
            confirmLabel="I Understand, Continue"
            onConfirm={() => setConsentGiven(true)}
          />
        </section>
      )}

      {/* Practice Selection */}
      {consentGiven && selectedPractice.length === 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-healing-light">
            Step 2: Choose a Practice
          </h2>
          <PracticeSelector
            title="Select a Grounding Technique"
            description="Choose the practice that feels right for you today"
            options={practiceOptions}
            mode="single"
            onSelect={setSelectedPractice}
          />
        </section>
      )}

      {/* Evidence Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-healing-light">
          Research Evidence
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <EvidenceCitation
            level="strong"
            title="Controlled Breathing Reduces Anxiety and Cortisol"
            author="Perciavalle et al."
            date="2017"
            domain="Neuroscience"
            snippet="Systematic review found that controlled breathing techniques significantly reduce cortisol levels and self-reported anxiety across multiple studies."
            sampleSize={850}
            sourceUrl="https://example.com/study1"
          />
          <EvidenceCitation
            level="moderate"
            title="Grounding Techniques in Trauma Treatment"
            author="Johnson & Smith"
            date="2022"
            domain="Clinical Psychology"
            snippet="Grounding exercises show promise in reducing dissociation and improving present-moment awareness in trauma survivors."
            limitations="Small sample size, needs replication"
            sampleSize={120}
          />
          <EvidenceCitation
            level="preliminary"
            title="Body Scan Meditation and Chronic Pain"
            author="Williams et al."
            date="2023"
            domain="Pain Medicine"
            snippet="Pilot study suggests body scan meditation may help individuals develop different relationships with pain sensations."
            limitations="Preliminary findings, larger trials needed"
            sampleSize={45}
          />
          <EvidenceCitation
            level="traditional"
            title="Breathwork in Yogic Traditions"
            domain="Traditional Medicine"
            snippet="Pranayama (breath control) has been practiced for thousands of years in yoga traditions for physical and mental well-being."
          />
        </div>
      </section>

      {/* Tradition Attribution */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-healing-light">
          Cultural Origins
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <TraditionAttribution
            traditionName="Pranayama (Yogic Breathing)"
            era="Ancient India, circa 2000 BCE - present"
            primarySources={[
              'Yoga Sutras of Patanjali',
              'Hatha Yoga Pradipika',
              'Gheranda Samhita',
            ]}
            adaptationNotes="Contemporary adaptations often isolate breathing techniques from their spiritual context. We honor the origins while making practices accessible."
            isOpenPractice={true}
          />
          <TraditionAttribution
            traditionName="Mindfulness Meditation (Vipassana)"
            era="Theravada Buddhism, circa 6th century BCE"
            primarySources={[
              'Satipatthana Sutta',
              'Mahasi Sayadaw lineage',
              'S.N. Goenka tradition',
            ]}
            adaptationNotes="Secular mindfulness programs (MBSR, MBCT) adapt these techniques for clinical contexts while acknowledging Buddhist origins."
            isOpenPractice={true}
          />
        </div>
      </section>

      {/* Implementation Note */}
      <section className="p-6 rounded-lg bg-calm-ghost border border-calm-primary/30">
        <h3 className="text-lg font-semibold text-calm-light mb-3">
          About This Demo
        </h3>
        <p className="text-sm text-grounding-light leading-relaxed">
          This interactive demo shows how all healing components work together in a
          real-world flow. The components are designed to be composable, accessible,
          and aligned with the healing design system. They can be used individually
          or combined to create guided healing experiences.
        </p>
      </section>
    </div>
  );
}
