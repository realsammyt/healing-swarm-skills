import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'getting-started',
    'about',
    {
      type: 'category',
      label: 'Skills',
      link: {
        type: 'doc',
        id: 'skills/index',
      },
      items: [
        'skills/research',
        'skills/design',
        'skills/content',
        'skills/build',
        'skills/review',
        'skills/deploy',
        'skills/swarm',
        'skills/integration',
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      link: {
        type: 'doc',
        id: 'integration/index',
      },
      items: [
        'integration/ui-wellness',
        'integration/gentle-errors',
        'integration/breathing-spaces',
        'integration/mindful-interactions',
        'integration/accessibility-healing',
        'integration/ethical-data',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      link: {
        type: 'doc',
        id: 'examples/index',
      },
      items: [
        'examples/simple-meditation',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'doc',
        id: 'architecture/index',
      },
      items: [
        'architecture/agents',
        'architecture/workflows',
        'architecture/quality-gates',
      ],
    },
    {
      type: 'category',
      label: 'Ethics',
      link: {
        type: 'doc',
        id: 'ethics/index',
      },
      items: [
        'ethics/principles',
        'ethics/enforcement',
        'ethics/evidence-language',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      link: {
        type: 'doc',
        id: 'components/index',
      },
      items: [
        'components/evidence-citation',
        'components/tradition-attribution',
        'components/healing-progress',
        'components/practice-selector',
        'components/safety-consent',
      ],
    },
    'contributing',
  ],
};

export default sidebars;
