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
    component: ComponentCreator('/ja/', '2a3'),
    routes: [
      {
        path: '/ja/',
        component: ComponentCreator('/ja/', 'e9a'),
        routes: [
          {
            path: '/ja/',
            component: ComponentCreator('/ja/', 'db2'),
            routes: [
              {
                path: '/ja/basic-functions/adding-bookmarks',
                component: ComponentCreator('/ja/basic-functions/adding-bookmarks', '117'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/adding-removing-and-switching-tabs',
                component: ComponentCreator('/ja/basic-functions/adding-removing-and-switching-tabs', 'a90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/back-forward-and-refresh-buttons',
                component: ComponentCreator('/ja/basic-functions/back-forward-and-refresh-buttons', '28f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/browsing-history',
                component: ComponentCreator('/ja/basic-functions/browsing-history', '8f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/deleting-and-editing-bookmarks',
                component: ComponentCreator('/ja/basic-functions/deleting-and-editing-bookmarks', '1e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/highlighted-search-and-translate',
                component: ComponentCreator('/ja/basic-functions/highlighted-search-and-translate', 'b08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/introduction-to-the-user-interface',
                component: ComponentCreator('/ja/basic-functions/introduction-to-the-user-interface', '6bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/opening-bookmarks',
                component: ComponentCreator('/ja/basic-functions/opening-bookmarks', '3a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/opening-urls',
                component: ComponentCreator('/ja/basic-functions/opening-urls', '3c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/printing_1',
                component: ComponentCreator('/ja/basic-functions/printing_1', '08b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/saving-images',
                component: ComponentCreator('/ja/basic-functions/saving-images', '515'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/basic-functions/web-search',
                component: ComponentCreator('/ja/basic-functions/web-search', 'b43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/faq/about-known-issues',
                component: ComponentCreator('/ja/faq/about-known-issues', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/faq/about-url-schema-of-lunascape',
                component: ComponentCreator('/ja/faq/about-url-schema-of-lunascape', 'dbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/support/contact',
                component: ComponentCreator('/ja/support/contact', '719'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/clearing-the-history-cache-and-cookies',
                component: ComponentCreator('/ja/useful-functions/clearing-the-history-cache-and-cookies', 'd6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/find-in-page',
                component: ComponentCreator('/ja/useful-functions/find-in-page', 'aee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/how-to-start-lunascape-wallet',
                component: ComponentCreator('/ja/useful-functions/how-to-start-lunascape-wallet', '7e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/lock-rotation',
                component: ComponentCreator('/ja/useful-functions/lock-rotation', '088'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/opening-bookmarks-in-a-new-tab',
                component: ComponentCreator('/ja/useful-functions/opening-bookmarks-in-a-new-tab', '864'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/opening-search-results-in-a-new-tab',
                component: ComponentCreator('/ja/useful-functions/opening-search-results-in-a-new-tab', '28e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/picture-in-picture-for-ios',
                component: ComponentCreator('/ja/useful-functions/picture-in-picture-for-ios', 'be4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/restoring-tabs',
                component: ComponentCreator('/ja/useful-functions/restoring-tabs', '2fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/saving-and-viewing-pages',
                component: ComponentCreator('/ja/useful-functions/saving-and-viewing-pages', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/saving-images-in-the-photo-album',
                component: ComponentCreator('/ja/useful-functions/saving-images-in-the-photo-album', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ja/useful-functions/scrolling-to-the-top-of-a-page',
                component: ComponentCreator('/ja/useful-functions/scrolling-to-the-top-of-a-page', 'e50'),
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
