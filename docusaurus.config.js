// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Nghiện Plus',
  tagline: 'Web được xây dựng bằng Dinosaurs',
  favicon: 'img/favicon.ico',

  url: 'https://nghienplus.pages.dev',
  baseUrl: '/',

  organizationName: 'facebook', // Hoặc tên tổ chức/github user của bạn
  projectName: 'docusaurus', // Tên repo của bạn

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
        docs: false, // Tắt docs mặc định nếu bạn muốn sử dụng multi-instance
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs', // ID này giúp phân biệt các thể hiện plugin khác nhau
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'phim',
        path: 'phim',
        routeBasePath: 'phim',
        sidebarPath: require.resolve('./sidebars.js'), // Chỉ định file sidebar riêng cho review phim
        // Bạn có thể thêm editUrl cho phần review phim nếu muốn
      },
    ],
    'plugin-image-zoom',
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Nghiện Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Docusaurus',
          position: 'left',
        },
        {
          to: 'phim/gioi-thieu', // Giả sử bạn có một tài liệu giới thiệu cho phần review phim
          activeBasePath: 'phim',
          label: 'Nghiện Phim',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nghiện Plus, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
        container: '#zoom-container',
        template: '#zoom-template',
      },
    },
  },
};

export default config;
