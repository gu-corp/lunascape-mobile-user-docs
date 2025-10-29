// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Home',
      items: [
        'home/overview',
        'home/quick-search',
        'home/tool-menu',
        'home/news',
        'home/browser-shortcuts',
        'home/wallets',
      ],
    },
    {
      type: 'category',
      label: 'News',
      items: [
        'news/overview',
        'news/news-setting',
        'news/news-sources-selection',
        'news/default-rss-sources',
      ],
    },
    {
      type: 'category',
      label: 'Browser',
      items: [
        'browser/overview',
        'browser/ad-blocking',
        'browser/search',
        'browser/bookmarks',
        'browser/reading-list',
        'browser/browsing-history',
        'browser/tab-operations',
        'browser/download-file',
        'browser/share',
        'browser/web3-dapp-support',
        'browser/private-mode',
        'browser/browser-tool-menu',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'settings/overview',
        'settings/general',
        'settings/default-browser',
        'settings/display',
        'settings/bookmarks',
        'settings/search',
        'settings/history',
        'settings/wallet',
        'settings/privacy',
        'settings/support',
        'settings/reset-to-default',
      ],
    },
        {
          type: 'category',
          label: 'Wallet',
          items: [
            'wallet/overview',
            'wallet/create-wallet',
            'wallet/wallet-dashboard',
            'wallet/asset-list',
            'wallet/wallet-settings',
            'wallet/walletconnect',
            'wallet/wallet-operations',
          ],
        },
  ],
};

export default sidebars;
