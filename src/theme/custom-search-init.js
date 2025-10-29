import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchBar from './SearchBar';

// DOMが読み込まれた後に検索コンポーネントを初期化
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('custom-search-container');
    if (container) {
      const root = createRoot(container);
      root.render(React.createElement(SearchBar));
    }
  });
}
