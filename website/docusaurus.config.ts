import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Healing Swarm Skills',
  tagline: 'AI-assisted tools for ethical healing applications',
  favicon: 'img/favicon.svg',

  url: 'https://realsammyt.github.io',
  baseUrl: '/healing-swarm-skills/',

  organizationName: 'realsammyt',
  projectName: 'healing-swarm-skills',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/realsammyt/healing-swarm-skills/tree/master/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/healing-swarm-social.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Healing Swarm Skills',
      logo: {
        alt: 'Healing Swarm Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/skills',
          label: 'Skills',
          position: 'left',
        },
        {
          to: '/docs/integration',
          label: 'Integration',
          position: 'left',
        },
        {
          to: '/docs/components',
          label: 'Components',
          position: 'left',
        },
        {
          to: '/docs/ethics',
          label: 'Ethics',
          position: 'left',
        },
        {
          href: 'https://github.com/realsammyt/healing-swarm-skills',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Skills Reference',
              to: '/docs/skills',
            },
            {
              label: 'Examples',
              to: '/docs/examples',
            },
          ],
        },
        {
          title: 'Framework',
          items: [
            {
              label: 'Architecture',
              to: '/docs/architecture',
            },
            {
              label: 'Ethics Framework',
              to: '/docs/ethics',
            },
            {
              label: 'Components',
              to: '/docs/components',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/realsammyt/healing-swarm-skills',
            },
            {
              label: 'Contributing',
              to: '/docs/contributing',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/realsammyt/healing-swarm-skills/discussions',
            },
          ],
        },
      ],
      copyright: `Licensed under CC-BY-NC-SA-4.0. "The capacity for healing is intrinsic to consciousness."`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
