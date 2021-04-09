/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nanogiants Designsystem',
  tagline: 'Reusable Components for coming NanoGiant-Projects',
  url: 'https://nanogiants.github.io/designsystem',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nanogiants',
  projectName: 'nanogiants-designsystem',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'Nanogiants Designsystem',
      logo: {
        alt: 'Nanogiants Designsystem',
        src: 'img/ng_logo_icon.svg',
        srcDark: 'img/ng_logo_icon_dark.svg',
        href: '/',
        target: '_self',
      },
      items: [
        {
          href: 'https://github.com/nanogiants/designsystem-react',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'NanoGiants GmbH',
        src: 'img/ng_logo_claim.svg',
        href: 'https://www.nanogiants.de',
      },
      copyright: `Copyright © ${new Date().getFullYear()} NanoGiants GmbH, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
