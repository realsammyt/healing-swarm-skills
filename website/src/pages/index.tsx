import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          Add Healing to Any Project
        </h1>
        <p className={styles.heroSubtitle}>
          AI-powered assessment identifies where your apps, games, and narratives can heal.
          <br />
          Open source. Evidence-grounded. Culturally respectful.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/integration/project-analysis">
            Analyze My Project
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/integration">
            Integration Patterns
          </Link>
        </div>
        <div className={styles.heroTagline}>
          "The capacity for healing is intrinsic to consciousness."
        </div>
      </div>
    </header>
  );
}

function FinalCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to Add Healing to Your Project?
          </h2>
          <p className={styles.ctaSubtitle}>
            Whether you're building something new or enhancing an existing app, game, or narrative—
            add healing properties that respect users and prioritize wellbeing.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started">
              Start Building
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/integration/project-analysis">
              Analyze Existing Project
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://github.com/realsammyt/healing-swarm-skills">
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="AI-assisted tools for ethical healing applications. Open source, evidence-grounded, culturally respectful healing wisdom.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <FinalCTA />
      </main>
    </Layout>
  );
}
