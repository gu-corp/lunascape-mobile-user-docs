import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ja/contact',
    component: ComponentCreator('/ja/contact', '80e'),
    exact: true
  },
  {
    path: '/ja/markdown-page',
    component: ComponentCreator('/ja/markdown-page', '0eb'),
    exact: true
  },
  {
    path: '/ja/',
    component: ComponentCreator('/ja/', 'b48'),
    routes: [
      {
        path: '/ja/',
        component: ComponentCreator('/ja/', 'f48'),
        routes: [
          {
            path: '/ja/',
            component: ComponentCreator('/ja/', '75e'),
            routes: [
              {
                path: '/ja/browser/ad-blocking',
                component: ComponentCreator('/ja/browser/ad-blocking', 'de1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/bookmarks',
                component: ComponentCreator('/ja/browser/bookmarks', '248'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/browser-tool-menu',
                component: ComponentCreator('/ja/browser/browser-tool-menu', '3cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/browsing-history',
                component: ComponentCreator('/ja/browser/browsing-history', '625'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/download-file',
                component: ComponentCreator('/ja/browser/download-file', 'a0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/overview',
                component: ComponentCreator('/ja/browser/overview', 'f67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/private-mode',
                component: ComponentCreator('/ja/browser/private-mode', 'd51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/reading-list',
                component: ComponentCreator('/ja/browser/reading-list', '894'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/search',
                component: ComponentCreator('/ja/browser/search', '1b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/share',
                component: ComponentCreator('/ja/browser/share', '0be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/tab-operations',
                component: ComponentCreator('/ja/browser/tab-operations', '09c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/browser/web3-dapp-support',
                component: ComponentCreator('/ja/browser/web3-dapp-support', 'a34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/home/browser-shortcuts',
                component: ComponentCreator('/ja/home/browser-shortcuts', 'bbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/home/news',
                component: ComponentCreator('/ja/home/news', 'caf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/home/overview',
                component: ComponentCreator('/ja/home/overview', '6ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/home/quick-search',
                component: ComponentCreator('/ja/home/quick-search', '185'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/home/tool-menu',
                component: ComponentCreator('/ja/home/tool-menu', '16b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/home/wallets',
                component: ComponentCreator('/ja/home/wallets', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/news/default-rss-sources',
                component: ComponentCreator('/ja/news/default-rss-sources', '535'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/news/news-setting',
                component: ComponentCreator('/ja/news/news-setting', '826'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/news/news-sources-selection',
                component: ComponentCreator('/ja/news/news-sources-selection', '6e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/news/overview',
                component: ComponentCreator('/ja/news/overview', 'c91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/bookmarks',
                component: ComponentCreator('/ja/settings/bookmarks', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/default-browser',
                component: ComponentCreator('/ja/settings/default-browser', '7ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/display',
                component: ComponentCreator('/ja/settings/display', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/general',
                component: ComponentCreator('/ja/settings/general', '145'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/history',
                component: ComponentCreator('/ja/settings/history', 'ac3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/overview',
                component: ComponentCreator('/ja/settings/overview', '48b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/privacy',
                component: ComponentCreator('/ja/settings/privacy', '45b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/reset-to-default',
                component: ComponentCreator('/ja/settings/reset-to-default', '407'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/search',
                component: ComponentCreator('/ja/settings/search', '9b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/support',
                component: ComponentCreator('/ja/settings/support', 'f79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/settings/wallet',
                component: ComponentCreator('/ja/settings/wallet', '968'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/wallet/asset-list',
                component: ComponentCreator('/ja/wallet/asset-list', '236'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/wallet/create-wallet',
                component: ComponentCreator('/ja/wallet/create-wallet', '3a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/wallet/overview',
                component: ComponentCreator('/ja/wallet/overview', 'f33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/wallet/wallet-dashboard',
                component: ComponentCreator('/ja/wallet/wallet-dashboard', '6bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/wallet/wallet-operations',
                component: ComponentCreator('/ja/wallet/wallet-operations', '033'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/wallet/wallet-settings',
                component: ComponentCreator('/ja/wallet/wallet-settings', '579'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/wallet/walletconnect',
                component: ComponentCreator('/ja/wallet/walletconnect', '6ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/',
                component: ComponentCreator('/ja/', '3ba'),
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
