import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();

  // 現在の言語を取得
  const getCurrentLocale = () => {
    const pathname = location.pathname;
    if (pathname.startsWith('/ja/')) {
      return 'ja';
    }
    return 'en';
  };

  // 言語に応じたplaceholderテキストを取得
  const getPlaceholderText = () => {
    const currentLocale = getCurrentLocale();
    return currentLocale === 'ja' ? 'ドキュメントを検索...' : 'Search documentation...';
  };

  // 言語に応じた「見つかりません」メッセージを取得
  const getNoResultsText = (query) => {
    const currentLocale = getCurrentLocale();
    return currentLocale === 'ja' ? `"${query}" の検索結果が見つかりません` : `No results found for "${query}"`;
  };

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

    const currentLocale = getCurrentLocale();
    
    // ページのタイトルとURLを検索対象として使用（現在の言語のみ）
    const allPages = [
      // 英語ページ
      { title: 'Home', url: '/', description: 'Lunascape Mobile User Manual', locale: 'en' },
      { title: 'Browser Overview', url: '/browser/overview', description: 'Browser features overview', locale: 'en' },
      { title: 'Bookmarks', url: '/browser/bookmarks', description: 'Manage your bookmarks', locale: 'en' },
      { title: 'Ad Blocking', url: '/browser/ad-blocking', description: 'Block ads and trackers', locale: 'en' },
      { title: 'Private Mode', url: '/browser/private-mode', description: 'Browse privately', locale: 'en' },
      { title: 'Download Files', url: '/browser/download-file', description: 'Download management', locale: 'en' },
      { title: 'Search', url: '/browser/search', description: 'Search functionality', locale: 'en' },
      { title: 'Share', url: '/browser/share', description: 'Share content', locale: 'en' },
      { title: 'Tab Operations', url: '/browser/tab-operations', description: 'Manage browser tabs', locale: 'en' },
      { title: 'Web3 DApp Support', url: '/browser/web3-dapp-support', description: 'Web3 and DApp features', locale: 'en' },
      { title: 'News', url: '/news/overview', description: 'News and RSS feeds', locale: 'en' },
      { title: 'Wallet', url: '/wallet/overview', description: 'Crypto wallet features', locale: 'en' },
      { title: 'Settings', url: '/settings/overview', description: 'App settings and preferences', locale: 'en' },
      
      // 日本語ページ
      { title: 'はじめに', url: '/ja/', description: 'Lunascape Mobile ユーザーマニュアル', locale: 'ja' },
      { title: 'ブラウザ概要', url: '/ja/browser/overview', description: 'ブラウザ機能の概要', locale: 'ja' },
      { title: 'ブックマーク', url: '/ja/browser/bookmarks', description: 'ブックマークの管理', locale: 'ja' },
      { title: '広告ブロック', url: '/ja/browser/ad-blocking', description: '広告とトラッカーのブロック', locale: 'ja' },
      { title: 'プライベートモード', url: '/ja/browser/private-mode', description: 'プライベートブラウジング', locale: 'ja' },
      { title: 'ファイルダウンロード', url: '/ja/browser/download-file', description: 'ダウンロード管理', locale: 'ja' },
      { title: '検索', url: '/ja/browser/search', description: '検索機能', locale: 'ja' },
      { title: '共有', url: '/ja/browser/share', description: 'コンテンツの共有', locale: 'ja' },
      { title: 'タブ操作', url: '/ja/browser/tab-operations', description: 'ブラウザタブの管理', locale: 'ja' },
      { title: 'Web3 DAppサポート', url: '/ja/browser/web3-dapp-support', description: 'Web3とDApp機能', locale: 'ja' },
      { title: 'ニュース', url: '/ja/news/overview', description: 'ニュースとRSSフィード', locale: 'ja' },
      { title: 'ウォレット', url: '/ja/wallet/overview', description: '暗号通貨ウォレット機能', locale: 'ja' },
      { title: '設定', url: '/ja/settings/overview', description: 'アプリ設定と環境設定', locale: 'ja' },
      
      // ホーム関連
      { title: 'ホーム概要', url: '/ja/home/overview', description: 'メインインターフェースとコア機能', locale: 'ja' },
      { title: 'クイック検索', url: '/ja/home/quick-search', description: '高速WebとWeb3検索', locale: 'ja' },
      { title: 'ツールメニュー', url: '/ja/home/tool-menu', description: 'すべてのブラウザツールと機能へのアクセス', locale: 'ja' },
      { title: 'ニュース統合', url: '/ja/home/news', description: '統合ニュースフィードで最新情報を入手', locale: 'ja' },
      { title: 'ブラウザショートカット', url: '/ja/home/browser-shortcuts', description: '一般的な機能へのクイックアクセス', locale: 'ja' },
      { title: 'ウォレット統合', url: '/ja/home/wallets', description: 'シームレスなWeb3ウォレットアクセス', locale: 'ja' },
      
      // ニュース関連
      { title: 'ニュース設定', url: '/ja/news/news-setting', description: 'ニュース設定とソースを構成', locale: 'ja' },
      { title: 'ソース選択', url: '/ja/news/news-sources-selection', description: 'お好みのニュースプロバイダーを選択', locale: 'ja' },
      { title: 'デフォルトRSSソース', url: '/ja/news/default-rss-sources', description: 'リアルタイム更新のためのRSSフィードを設定', locale: 'ja' },
      
      // ブラウザ関連
      { title: 'リーディングリスト', url: '/ja/browser/reading-list', description: '後で読むための記事の保存', locale: 'ja' },
      { title: 'ブラウジング履歴', url: '/ja/browser/browsing-history', description: 'ブラウジングの追跡と管理', locale: 'ja' },
      { title: 'ブラウザツール', url: '/ja/browser/browser-tool-menu', description: 'すべてのブラウザユーティリティへのアクセス', locale: 'ja' },
      
      // 設定関連
      { title: '一般設定', url: '/ja/settings/general', description: '基本的なアプリ設定', locale: 'ja' },
      { title: 'デフォルトブラウザ', url: '/ja/settings/default-browser', description: 'プライマリブラウザとして設定', locale: 'ja' },
      { title: '表示オプション', url: '/ja/settings/display', description: '外観とレイアウトのカスタマイズ', locale: 'ja' },
      { title: 'ブックマーク管理', url: '/ja/settings/bookmarks', description: '保存したサイトの整理', locale: 'ja' },
      { title: '検索設定', url: '/ja/settings/search', description: '検索エンジンと設定のセットアップ', locale: 'ja' },
      { title: '履歴設定', url: '/ja/settings/history', description: 'ブラウジング履歴とプライバシーの管理', locale: 'ja' },
      { title: 'ウォレット設定', url: '/ja/settings/wallet', description: 'Web3ウォレット設定の構成', locale: 'ja' },
      { title: 'プライバシーコントロール', url: '/ja/settings/privacy', description: '高度なプライバシーとセキュリティオプション', locale: 'ja' },
      { title: 'サポート', url: '/ja/settings/support', description: 'ヘルプの取得とサポートへの連絡', locale: 'ja' },
      { title: 'リセットオプション', url: '/ja/settings/reset-to-default', description: 'デフォルト設定の復元', locale: 'ja' },
      
      // ウォレット関連
      { title: 'ウォレット作成', url: '/ja/wallet/create-wallet', description: '新しいウォレットのセットアップまたは既存のもののインポート', locale: 'ja' },
      { title: 'ウォレットダッシュボード', url: '/ja/wallet/wallet-dashboard', description: '資産と取引の概要', locale: 'ja' },
      { title: 'アセット管理', url: '/ja/wallet/asset-list', description: 'トークンと暗号通貨の管理', locale: 'ja' },
      { title: 'ウォレット設定', url: '/ja/wallet/wallet-settings', description: 'アカウント、ネットワーク、セキュリティの構成', locale: 'ja' },
      { title: 'WalletConnect', url: '/ja/wallet/walletconnect', description: '外部ウォレットとDAppへの接続', locale: 'ja' },
      { title: 'ウォレット操作', url: '/ja/wallet/wallet-operations', description: '取引の実行と資産の管理', locale: 'ja' },
    ];

    // 現在の言語のページのみを検索対象にする
    const filtered = allPages.filter(page => {
      // 言語フィルタリング
      if (page.locale !== currentLocale) {
        return false;
      }
      
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
  }, [query, location.pathname]);

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
                  placeholder={getPlaceholderText()}
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
                  {getNoResultsText(query)}
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
              placeholder={getPlaceholderText()}
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
              {getNoResultsText(query)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
