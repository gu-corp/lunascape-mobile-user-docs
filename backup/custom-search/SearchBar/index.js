import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef(null);
  const history = useHistory();
  const { siteConfig } = useDocusaurusContext();

  // モバイル判定
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // シンプルな検索機能
  const searchPages = (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    // ページのタイトルとURLを検索対象として使用（英語と日本語の両方）
    const allPages = [
      // 英語ページ
      { title: 'Home', url: '/', description: 'Lunascape Mobile User Manual' },
      { title: 'Browser Overview', url: '/browser/overview', description: 'Browser features overview' },
      { title: 'Bookmarks', url: '/browser/bookmarks', description: 'Manage your bookmarks' },
      { title: 'Ad Blocking', url: '/browser/ad-blocking', description: 'Block ads and trackers' },
      { title: 'Private Mode', url: '/browser/private-mode', description: 'Browse privately' },
      { title: 'Download Files', url: '/browser/download-file', description: 'Download management' },
      { title: 'Search', url: '/browser/search', description: 'Search functionality' },
      { title: 'Share', url: '/browser/share', description: 'Share content' },
      { title: 'Tab Operations', url: '/browser/tab-operations', description: 'Manage browser tabs' },
      { title: 'Web3 DApp Support', url: '/browser/web3-dapp-support', description: 'Web3 and DApp features' },
      { title: 'News', url: '/news/overview', description: 'News and RSS feeds' },
      { title: 'Wallet', url: '/wallet/overview', description: 'Crypto wallet features' },
      { title: 'Settings', url: '/settings/overview', description: 'App settings and preferences' },
      
      // 日本語ページ
      { title: 'はじめに', url: '/ja/', description: 'Lunascape Mobile ユーザーマニュアル' },
      { title: 'ブラウザ概要', url: '/ja/browser/overview', description: 'ブラウザ機能の概要' },
      { title: 'ブックマーク', url: '/ja/browser/bookmarks', description: 'ブックマークの管理' },
      { title: '広告ブロック', url: '/ja/browser/ad-blocking', description: '広告とトラッカーのブロック' },
      { title: 'プライベートモード', url: '/ja/browser/private-mode', description: 'プライベートブラウジング' },
      { title: 'ファイルダウンロード', url: '/ja/browser/download-file', description: 'ダウンロード管理' },
      { title: '検索', url: '/ja/browser/search', description: '検索機能' },
      { title: '共有', url: '/ja/browser/share', description: 'コンテンツの共有' },
      { title: 'タブ操作', url: '/ja/browser/tab-operations', description: 'ブラウザタブの管理' },
      { title: 'Web3 DAppサポート', url: '/ja/browser/web3-dapp-support', description: 'Web3とDApp機能' },
      { title: 'ニュース', url: '/ja/news/overview', description: 'ニュースとRSSフィード' },
      { title: 'ウォレット', url: '/ja/wallet/overview', description: '暗号通貨ウォレット機能' },
      { title: '設定', url: '/ja/settings/overview', description: 'アプリ設定と環境設定' },
      
      // ホーム関連
      { title: 'ホーム概要', url: '/ja/home/overview', description: 'メインインターフェースとコア機能' },
      { title: 'クイック検索', url: '/ja/home/quick-search', description: '高速WebとWeb3検索' },
      { title: 'ツールメニュー', url: '/ja/home/tool-menu', description: 'すべてのブラウザツールと機能へのアクセス' },
      { title: 'ニュース統合', url: '/ja/home/news', description: '統合ニュースフィードで最新情報を入手' },
      { title: 'ブラウザショートカット', url: '/ja/home/browser-shortcuts', description: '一般的な機能へのクイックアクセス' },
      { title: 'ウォレット統合', url: '/ja/home/wallets', description: 'シームレスなWeb3ウォレットアクセス' },
      
      // ニュース関連
      { title: 'ニュース設定', url: '/ja/news/news-setting', description: 'ニュース設定とソースを構成' },
      { title: 'ソース選択', url: '/ja/news/news-sources-selection', description: 'お好みのニュースプロバイダーを選択' },
      { title: 'デフォルトRSSソース', url: '/ja/news/default-rss-sources', description: 'リアルタイム更新のためのRSSフィードを設定' },
      
      // ブラウザ関連
      { title: 'リーディングリスト', url: '/ja/browser/reading-list', description: '後で読むための記事の保存' },
      { title: 'ブラウジング履歴', url: '/ja/browser/browsing-history', description: 'ブラウジングの追跡と管理' },
      { title: 'ブラウザツール', url: '/ja/browser/browser-tool-menu', description: 'すべてのブラウザユーティリティへのアクセス' },
      
      // 設定関連
      { title: '一般設定', url: '/ja/settings/general', description: '基本的なアプリ設定' },
      { title: 'デフォルトブラウザ', url: '/ja/settings/default-browser', description: 'プライマリブラウザとして設定' },
      { title: '表示オプション', url: '/ja/settings/display', description: '外観とレイアウトのカスタマイズ' },
      { title: 'ブックマーク管理', url: '/ja/settings/bookmarks', description: '保存したサイトの整理' },
      { title: '検索設定', url: '/ja/settings/search', description: '検索エンジンと設定のセットアップ' },
      { title: '履歴設定', url: '/ja/settings/history', description: 'ブラウジング履歴とプライバシーの管理' },
      { title: 'ウォレット設定', url: '/ja/settings/wallet', description: 'Web3ウォレット設定の構成' },
      { title: 'プライバシーコントロール', url: '/ja/settings/privacy', description: '高度なプライバシーとセキュリティオプション' },
      { title: 'サポート', url: '/ja/settings/support', description: 'ヘルプの取得とサポートへの連絡' },
      { title: 'リセットオプション', url: '/ja/settings/reset-to-default', description: 'デフォルト設定の復元' },
      
      // ウォレット関連
      { title: 'ウォレット作成', url: '/ja/wallet/create-wallet', description: '新しいウォレットのセットアップまたは既存のもののインポート' },
      { title: 'ウォレットダッシュボード', url: '/ja/wallet/wallet-dashboard', description: '資産と取引の概要' },
      { title: 'アセット管理', url: '/ja/wallet/asset-list', description: 'トークンと暗号通貨の管理' },
      { title: 'ウォレット設定', url: '/ja/wallet/wallet-settings', description: 'アカウント、ネットワーク、セキュリティの構成' },
      { title: 'WalletConnect', url: '/ja/wallet/walletconnect', description: '外部ウォレットとDAppへの接続' },
      { title: 'ウォレット操作', url: '/ja/wallet/wallet-operations', description: '取引の実行と資産の管理' },
    ];

    const filtered = allPages.filter(page => {
      const searchLower = searchQuery.toLowerCase();
      const titleLower = page.title.toLowerCase();
      const descriptionLower = page.description.toLowerCase();
      
      // 英語の検索（大文字小文字を区別しない）
      const englishMatch = titleLower.includes(searchLower) || descriptionLower.includes(searchLower);
      
      // 日本語の検索（完全一致と部分一致）
      const japaneseMatch = page.title.includes(searchQuery) || page.description.includes(searchQuery);
      
      return englishMatch || japaneseMatch;
    });

    setResults(filtered.slice(0, 8));
  };

  useEffect(() => {
    searchPages(query);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    } else if (e.key === 'Enter' && results.length > 0) {
      history.push(results[0].url);
      setIsOpen(false);
      setQuery('');
    }
  };

  const handleResultClick = (url) => {
    history.push(url);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="navbar__search">
      {/* モバイル用：クリック式 */}
      {isMobile ? (
        <>
          <button
            className="navbar__search-button"
            onClick={() => {
              setIsOpen(!isOpen);
              if (!isOpen) {
                setTimeout(() => inputRef.current?.focus(), 100);
              }
            }}
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
          </button>
          
          {isOpen && (
            <div className="navbar__search-dropdown navbar__search-dropdown--mobile">
              <div className="navbar__search-input-container">
                <button
                  className="navbar__search-close"
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                  aria-label="Close search"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="ドキュメントを検索..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="navbar__search-input"
                />
              </div>
              
              {results.length > 0 && (
                <div className="navbar__search-results">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="navbar__search-result"
                      onClick={() => handleResultClick(result.url)}
                    >
                      <div className="navbar__search-result-title">{result.title}</div>
                      <div className="navbar__search-result-description">{result.description}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {query && results.length === 0 && (
                <div className="navbar__search-no-results">
                  "{query}" の検索結果が見つかりません
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        /* PC用：常時表示 */
        <div className="navbar__search-pc">
          <div className="navbar__search-input-container navbar__search-input-container--pc">
            <svg className="navbar__search-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="ドキュメントを検索..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="navbar__search-input navbar__search-input--pc"
            />
          </div>
          
          {results.length > 0 && (
            <div className="navbar__search-results navbar__search-results--pc">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="navbar__search-result"
                  onClick={() => handleResultClick(result.url)}
                >
                  <div className="navbar__search-result-title">{result.title}</div>
                  <div className="navbar__search-result-description">{result.description}</div>
                </div>
              ))}
            </div>
          )}
          
          {query && results.length === 0 && (
            <div className="navbar__search-no-results navbar__search-no-results--pc">
              "{query}" の検索結果が見つかりません
            </div>
          )}
        </div>
      )}
    </div>
  );
}
