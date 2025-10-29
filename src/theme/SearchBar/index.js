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

    // ページのタイトルとURLを検索対象として使用
    const allPages = [
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
    ];

    const filtered = allPages.filter(page => 
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                  placeholder="Search documentation..."
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
                  No results found for "{query}"
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
              placeholder="Search documentation..."
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
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
