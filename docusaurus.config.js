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
        showReadingTime: true,
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
      {name: 'description', content: 'Nghiện Plus là trang web chia sẻ về công nghệ, phim ảnh, và cuộc sống.'},
      {name: 'keywords', content: 'nghienplus, công nghệ, phim ảnh, cuộc sống'},
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
      title: 'Nghiện Plus',
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
  },
};

export default config;
