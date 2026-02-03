import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const ETHICS_PRINCIPLES: FeatureItem[] = [
  {
    title: 'Non-Harm',
    icon: '🛡️',
    description: 'Safety-first design with explicit consent and clear boundaries.',
  },
  {
    title: 'Autonomy',
    icon: '🗝️',
    description: 'User agency preserved at every step. No manipulation, no coercion.',
  },
  {
    title: 'Transparency',
    icon: '💎',
    description: 'Open source code, clear mechanisms, evidence-based practices.',
  },
  {
    title: 'Humility',
    icon: '🙏',
    description: 'Acknowledging limits. AI assists, doesn\'t replace human wisdom.',
  },
  {
    title: 'Cultural Respect',
    icon: '🌍',
    description: 'Honoring diverse traditions with proper attribution and context.',
  },
  {
    title: 'Evidence Grounding',
    icon: '🔬',
    description: 'All practices linked to research, traditional wisdom, or clear disclaimers.',
  },
  {
    title: 'Accessibility',
    icon: '♿',
    description: 'Healing tools for everyone, regardless of background or ability.',
  },
];

const FOR_WHOM_ITEMS = [
  {
    title: 'For Individuals',
    icon: '🧘',
    description: 'Personal healing practices, meditation guidance, and emotional support tools.',
    features: ['Simple meditation', 'Breathwork', 'Emotional check-ins', 'Grounding techniques'],
  },
  {
    title: 'For Communities',
    icon: '🤝',
    description: 'Group healing facilitation, conflict resolution, and collective wellbeing.',
    features: ['Circle practices', 'Conflict de-escalation', 'Shared intentions', 'Community care'],
  },
  {
    title: 'For the World',
    icon: '🌏',
    description: 'Systemic healing applications, bridging divides, and scaling compassion.',
    features: ['Cross-cultural bridges', 'Restorative justice', 'Collective trauma', 'Planetary care'],
  },
];

const PROJECT_TYPES = [
  {
    title: 'Web & Mobile Apps',
    icon: '📱',
    description: 'Add gentle errors, breathing spaces, and ethical data practices to any application.',
    link: '/docs/integration/ui-wellness',
  },
  {
    title: 'Video Games',
    icon: '🎮',
    description: 'Adaptive difficulty, restorative spaces, and wellness mechanics for player wellbeing.',
    link: '/docs/integration/game-healing',
  },
  {
    title: 'Interactive Stories',
    icon: '📖',
    description: 'Content warnings, safe spaces, and emotional pacing for narratives that heal.',
    link: '/docs/integration/narrative-healing',
  },
  {
    title: 'Existing Projects',
    icon: '🔍',
    description: 'AI-powered HEAL assessment identifies where any codebase can add healing properties.',
    link: '/docs/integration/project-analysis',
  },
];

export function EthicsPrinciples(): JSX.Element {
  return (
    <section className={styles.ethicsSection}>
      <div className="container">
        <div className="text-center margin-bottom--lg">
          <h2 className={styles.sectionTitle}>Seven Ethics Principles</h2>
          <p className={styles.sectionSubtitle}>
            Every healing skill is grounded in these foundational commitments.
          </p>
        </div>
        <div className={styles.ethicsGrid}>
          {ETHICS_PRINCIPLES.map((principle, idx) => (
            <div key={idx} className={styles.ethicsCard}>
              <div className={styles.ethicsIcon}>{principle.icon}</div>
              <h3 className={styles.ethicsTitle}>{principle.title}</h3>
              <p className={styles.ethicsDescription}>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectTypesSection(): JSX.Element {
  return (
    <section className={styles.forWhomSection}>
      <div className="container">
        <div className="text-center margin-bottom--lg">
          <h2 className={styles.sectionTitle}>What You Can Build</h2>
          <p className={styles.sectionSubtitle}>
            Add healing properties to any project type—new or existing.
          </p>
        </div>
        <div className={styles.forWhomGrid}>
          {PROJECT_TYPES.map((item, idx) => (
            <Link key={idx} to={item.link} className={styles.forWhomCard} style={{textDecoration: 'none'}}>
              <div className={styles.forWhomIcon}>{item.icon}</div>
              <h3 className={styles.forWhomTitle}>{item.title}</h3>
              <p className={styles.forWhomDescription}>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ForWhomSection(): JSX.Element {
  return (
    <section className={styles.forWhomSection}>
      <div className="container">
        <div className="text-center margin-bottom--lg">
          <h2 className={styles.sectionTitle}>Healing at Every Scale</h2>
          <p className={styles.sectionSubtitle}>
            From individual practice to planetary transformation.
          </p>
        </div>
        <div className={styles.forWhomGrid}>
          {FOR_WHOM_ITEMS.map((item, idx) => (
            <div key={idx} className={styles.forWhomCard}>
              <div className={styles.forWhomIcon}>{item.icon}</div>
              <h3 className={styles.forWhomTitle}>{item.title}</h3>
              <p className={styles.forWhomDescription}>{item.description}</p>
              <ul className={styles.forWhomFeatures}>
                {item.features.map((feature, featureIdx) => (
                  <li key={featureIdx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExampleShowcase(): JSX.Element {
  return (
    <section className={styles.exampleSection}>
      <div className="container">
        <div className={styles.exampleContainer}>
          <div className={styles.exampleContent}>
            <h2 className={styles.exampleTitle}>
              See It in Action
            </h2>
            <p className={styles.exampleSubtitle}>
              The <strong>Simple Meditation</strong> skill demonstrates our approach:
              evidence-grounded, culturally respectful, and designed for accessibility.
            </p>
            <div className={styles.exampleFeatures}>
              <div className={styles.exampleFeature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Multi-tradition attribution (Buddhist, secular mindfulness)</span>
              </div>
              <div className={styles.exampleFeature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Strong evidence base (1000+ RCTs)</span>
              </div>
              <div className={styles.exampleFeature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Built-in safety consent</span>
              </div>
              <div className={styles.exampleFeature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Accessible to beginners</span>
              </div>
            </div>
            <div className={styles.exampleActions}>
              <Link
                className="button button--primary button--lg"
                to="/docs/examples/simple-meditation">
                View Simple Meditation
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/skills">
                Browse All Skills
              </Link>
            </div>
          </div>
          <div className={styles.exampleVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <div className={styles.visualDot}></div>
                <div className={styles.visualDot}></div>
                <div className={styles.visualDot}></div>
              </div>
              <div className={styles.visualBody}>
                <pre className={styles.codeBlock}>
{`{
  "skill": "simple-meditation",
  "steps": [
    "Find comfortable position",
    "Notice your breath",
    "When mind wanders, return",
    "Continue for 5-10 minutes"
  ],
  "evidence": "strong",
  "traditions": ["buddhist", "secular"]
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <ProjectTypesSection />
      <ForWhomSection />
      <EthicsPrinciples />
      <ExampleShowcase />
    </>
  );
}
