import {
  themes as prismThemes,
} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const badgePlugin = require('./plugins/remark-badge');
const tabsPlugin = require('./plugins/remark-tabs');

const config: Config = {
  title: 'Simple RPC',
  tagline: 'Cause Everyone wants to know what you are doing',
  favicon: 'https://cdn.modrinth.com/data/ObXSoyrn/bdcee1893ca0f5fc03c7faec6135f39faaed8705.png',

  future: {
    v4: true,
  },

  url: 'https://srpc.fdd-docs.com',
  baseUrl: '/',
  organizationName: 'hypherionmc',
  projectName: 'fdd-docs',
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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [badgePlugin, tabsPlugin],
          editUrl:
            'https://github.com/hypherionmc/fdd-docs/tree/srpc',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Simple RPC Guide',
      logo: {
        alt: 'Simple RPC Logo',
        src: 'https://cdn.modrinth.com/data/ObXSoyrn/bdcee1893ca0f5fc03c7faec6135f39faaed8705.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'How To Guide',
        },
        {
          href: 'https://github.com/firstdarkdev/simple-rpc',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.firstdark.dev',
          label: 'Discord',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        }
      ],
    },
    footer: {
      links: [
        {
          title: 'How To Guides',
          items: [
            {
              label: 'Version 4.x',
              to: '/',
            },
            {
              label: 'Version 3.x',
              to: '/3.x/intro',
            },
            {
              label: 'Version 1.x-2.x',
              to: '/1.x-2.x/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.firstdark.dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/firstdarkdev',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Unreleased Builds',
              to: 'https://nightbloom.cc/project/simplerpc',
            },
            {
              label: 'CurseForge',
              to: 'https://www.curseforge.com/minecraft/mc-mods/simple-discord-rpc',
            },
            {
              label: 'Modrinth',
              to: 'https://modrinth.com/mod/simple-discord-rpc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} First Dark Development. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
