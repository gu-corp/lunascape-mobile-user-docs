import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchBar from './SearchBar';

let searchRoot = null;

// カスタムサーチを初期化する関数
function initializeSearch() {
  const container = document.getElementById('custom-search-container');
  if (container && !searchRoot) {
    searchRoot = createRoot(container);
    searchRoot.render(React.createElement(SearchBar));
  }
}

// DOMが読み込まれた後に検索コンポーネントを初期化
if (typeof window !== 'undefined') {
  // 初回読み込み時
  document.addEventListener('DOMContentLoaded', initializeSearch);
  
  // ページ遷移時（Docusaurusのナビゲーションイベント）
  document.addEventListener('docusaurus:routeChange', initializeSearch);
  document.addEventListener('docusaurus:routeChangeComplete', initializeSearch);
  
  // フォールバック: 定期的にチェック
  setInterval(() => {
    const container = document.getElementById('custom-search-container');
    if (container && !searchRoot) {
      initializeSearch();
    }
  }, 1000);
  
  // 即座に実行（既にDOMが読み込まれている場合）
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSearch);
  } else {
    initializeSearch();
  }
}
