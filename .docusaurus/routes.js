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
    component: ComponentCreator('/', '710'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'e3d'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'f97'),
            routes: [
              {
                path: '/basic-functions/adding-bookmarks',
                component: ComponentCreator('/basic-functions/adding-bookmarks', '6a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/adding-removing-and-switching-tabs',
                component: ComponentCreator('/basic-functions/adding-removing-and-switching-tabs', '753'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/back-forward-and-refresh-buttons',
                component: ComponentCreator('/basic-functions/back-forward-and-refresh-buttons', '472'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/browsing-history',
                component: ComponentCreator('/basic-functions/browsing-history', '937'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/deleting-and-editing-bookmarks',
                component: ComponentCreator('/basic-functions/deleting-and-editing-bookmarks', '5a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/highlighted-search-and-translate',
                component: ComponentCreator('/basic-functions/highlighted-search-and-translate', '771'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/introduction-to-the-user-interface',
                component: ComponentCreator('/basic-functions/introduction-to-the-user-interface', 'a06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/opening-bookmarks',
                component: ComponentCreator('/basic-functions/opening-bookmarks', '6ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/opening-urls',
                component: ComponentCreator('/basic-functions/opening-urls', '887'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/printing_1',
                component: ComponentCreator('/basic-functions/printing_1', 'e99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/saving-images',
                component: ComponentCreator('/basic-functions/saving-images', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/basic-functions/web-search',
                component: ComponentCreator('/basic-functions/web-search', 'a7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/about-known-issues',
                component: ComponentCreator('/faq/about-known-issues', '159'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/about-url-schema-of-lunascape',
                component: ComponentCreator('/faq/about-url-schema-of-lunascape', 'e42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/support/contact',
                component: ComponentCreator('/support/contact', 'a44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/clearing-the-history-cache-and-cookies',
                component: ComponentCreator('/useful-functions/clearing-the-history-cache-and-cookies', '88f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/find-in-page',
                component: ComponentCreator('/useful-functions/find-in-page', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/how-to-start-lunascape-wallet',
                component: ComponentCreator('/useful-functions/how-to-start-lunascape-wallet', '9b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/lock-rotation',
                component: ComponentCreator('/useful-functions/lock-rotation', '857'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/opening-bookmarks-in-a-new-tab',
                component: ComponentCreator('/useful-functions/opening-bookmarks-in-a-new-tab', '4a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/opening-search-results-in-a-new-tab',
                component: ComponentCreator('/useful-functions/opening-search-results-in-a-new-tab', 'cd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/picture-in-picture-for-ios',
                component: ComponentCreator('/useful-functions/picture-in-picture-for-ios', '6f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/restoring-tabs',
                component: ComponentCreator('/useful-functions/restoring-tabs', 'eb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/saving-and-viewing-pages',
                component: ComponentCreator('/useful-functions/saving-and-viewing-pages', '000'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/saving-images-in-the-photo-album',
                component: ComponentCreator('/useful-functions/saving-images-in-the-photo-album', 'cd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/useful-functions/scrolling-to-the-top-of-a-page',
                component: ComponentCreator('/useful-functions/scrolling-to-the-top-of-a-page', 'ad1'),
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
