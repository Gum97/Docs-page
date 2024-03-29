// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Sảnh Plus',
  tagline: 'Web được xây dựng bằng Docusaurus',
  favicon: 'img/favicon.ico',

  url: 'https://sanhplus.pages.dev',
  baseUrl: '/',

  organizationName: 'Gum97', // Hoặc tên tổ chức/github user của bạn
  projectName: 'Docs-page', // Tên repo của bạn

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
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
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        // Bạn có thể thêm editUrl cho phần review phim nếu muốn
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'my-task',
        path: 'my-task',
        routeBasePath: 'my-task',
        sidebarPath: require.resolve('./sidebars.js'), // Chỉ định file sidebar riêng cho review phim
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        // Bạn có thể thêm editUrl cho phần review phim nếu muốn
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size. (test)
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'description', content: 'Nghiện Plus là trang web chia sẻ về công nghệ, phim ảnh, và cuộc sống.' },
      { name: 'keywords', content: 'nghienplus, công nghệ, phim ảnh, cuộc sống' },
    ],
    algolia: {
      // The application ID provided by Algolia
      appId: 'KRKQV9T0NF',
      // Public API key: it is safe to commit it
      apiKey: 'ffe520bd869105572a478d8cc1d9dd7e',
      indexName: 'nghienplus',
      insights: true,

    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Sảnh Plus',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/linux-tip-tricks',
          activeBasePath: 'docs',
          label: 'Sảnh Linux',
          position: 'left',
        },
        {
          to: 'phim/gioi-thieu', // Giả sử bạn có một tài liệu giới thiệu cho phần review phim
          activeBasePath: 'phim',
          label: 'Sảnh Phim',
          position: 'left',
        },
        {
          to: 'my-task/daily-task', // Giả sử bạn có một tài liệu giới thiệu cho phần review phim
          activeBasePath: 'my-task',
          label: 'Sảnh Task',
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
              label: 'Linux Tips & Tricks',
              to: '/docs/linux-tip-tricks',
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
      copyright: `Copyright © ${new Date().getFullYear()} Sảnh Plus, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
