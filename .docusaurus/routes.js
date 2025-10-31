import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'abe'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd9b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'bb9'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '026'),
            routes: [
              {
                path: '/browser/ad-blocking',
                component: ComponentCreator('/browser/ad-blocking', 'ba4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/bookmarks',
                component: ComponentCreator('/browser/bookmarks', 'f1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/browser-tool-menu',
                component: ComponentCreator('/browser/browser-tool-menu', 'e84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/browsing-history',
                component: ComponentCreator('/browser/browsing-history', '63b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/download-file',
                component: ComponentCreator('/browser/download-file', 'df9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/overview',
                component: ComponentCreator('/browser/overview', '481'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/private-mode',
                component: ComponentCreator('/browser/private-mode', '07c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/reading-list',
                component: ComponentCreator('/browser/reading-list', '61e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/search',
                component: ComponentCreator('/browser/search', '91e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/share',
                component: ComponentCreator('/browser/share', '3cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/tab-operations',
                component: ComponentCreator('/browser/tab-operations', '63b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/browser/web3-dapp-support',
                component: ComponentCreator('/browser/web3-dapp-support', 'd9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/home/browser-shortcuts',
                component: ComponentCreator('/home/browser-shortcuts', '6c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/home/news',
                component: ComponentCreator('/home/news', 'a46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/home/overview',
                component: ComponentCreator('/home/overview', '543'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/home/quick-search',
                component: ComponentCreator('/home/quick-search', '5cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/home/tool-menu',
                component: ComponentCreator('/home/tool-menu', '45a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/home/wallets',
                component: ComponentCreator('/home/wallets', '6f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/news/default-rss-sources',
                component: ComponentCreator('/news/default-rss-sources', 'ad3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/news/news-setting',
                component: ComponentCreator('/news/news-setting', 'b41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/news/news-sources-selection',
                component: ComponentCreator('/news/news-sources-selection', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/news/overview',
                component: ComponentCreator('/news/overview', '9d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/bookmarks',
                component: ComponentCreator('/settings/bookmarks', 'eab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/default-browser',
                component: ComponentCreator('/settings/default-browser', '468'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/display',
                component: ComponentCreator('/settings/display', 'be8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/general',
                component: ComponentCreator('/settings/general', 'fc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/history',
                component: ComponentCreator('/settings/history', '630'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/overview',
                component: ComponentCreator('/settings/overview', '2a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/privacy',
                component: ComponentCreator('/settings/privacy', '557'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/reset-to-default',
                component: ComponentCreator('/settings/reset-to-default', 'e23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/search',
                component: ComponentCreator('/settings/search', '58d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/support',
                component: ComponentCreator('/settings/support', 'af0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/settings/wallet',
                component: ComponentCreator('/settings/wallet', '960'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wallet/asset-list',
                component: ComponentCreator('/wallet/asset-list', '85b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wallet/create-wallet',
                component: ComponentCreator('/wallet/create-wallet', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wallet/overview',
                component: ComponentCreator('/wallet/overview', '463'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wallet/wallet-dashboard',
                component: ComponentCreator('/wallet/wallet-dashboard', '8d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wallet/wallet-operations',
                component: ComponentCreator('/wallet/wallet-operations', '278'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wallet/wallet-settings',
                component: ComponentCreator('/wallet/wallet-settings', 'a46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wallet/walletconnect',
                component: ComponentCreator('/wallet/walletconnect', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'efb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
