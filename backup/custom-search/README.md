# カスタムサーチ機能のバックアップ

## バックアップ日時
2025年1月27日

## バックアップ内容
- `src/theme/SearchBar/` - カスタムサーチコンポーネント
- `src/theme/custom-search-init.js` - カスタムサーチ初期化スクリプト
- `src/plugins/custom-search.js` - カスタムサーチプラグイン

## 機能の説明
このカスタムサーチ機能は以下の特徴を持っていました：

### 機能
- 日本語と英語の両方で検索可能
- モバイルとデスクトップで異なる表示形式
- ページタイトルと説明文での検索
- 検索結果のドロップダウン表示
- キーボードナビゲーション（Enter、Escape）

### 検索対象ページ
- 英語ページ: Home, Browser Overview, Bookmarks, Ad Blocking, etc.
- 日本語ページ: はじめに, ブラウザ概要, ブックマーク, 広告ブロック, etc.

## 復元方法
1. `docusaurus.config.js`でプラグインのコメントアウトを解除
2. ナビバーのHTMLコンテナのコメントアウトを解除
3. CSSでカスタムサーチを表示、デフォルトサーチを非表示に設定

## ファイル構成
```
backup/custom-search/
├── SearchBar/
│   └── index.js
├── custom-search-init.js
├── custom-search.js
└── README.md
```
