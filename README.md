# Lunascape Mobile User Manual

This repository contains the Lunascape Mobile user manual in the canonical Lunascape Docs format. Markdown and image files are the source of truth; no site generator or build step is required.

## Content layout

- `docs/` is the canonical English document root.
- Each directory's `i18n/ja/` folder contains its Japanese counterparts. For example, `docs/browser/ad-blocking.md` is translated at `docs/browser/i18n/ja/ad-blocking.md`.
- `docs/lunascape-docs.json` defines the Lunascape Docs workspace.
- Each page owns its INDEX title and order in `navigation` front matter.
- Smartphone screenshots use explicit, portable HTML widths: 360px for tall screens and 560px for wider crops.

## Open in Lunascape Docs

Open any Markdown file under `docs/` with Lunascape Docs. The extension detects `docs/lunascape-docs.json`, opens the complete manual, and provides the INDEX and locale switcher.

English is the default locale. Select `ja` in the locale switcher to open the corresponding file from the nearest `i18n/ja/` folder.

## Authoring

- Add or move pages in the filesystem; no generated sidebar file is used.
- Set `navigation.title` and a 100-spaced `navigation.order` on default-language pages.
- Localized pages may override `navigation.title` but do not own `navigation.order`.
- Keep translated files and images at the same relative paths under each directory's `i18n/ja/` folder.
- Use a numeric HTML width for screenshots so the chosen size is preserved by Lunascape Docs and GitHub.

```html
<img src="img/example.png" alt="Screen description" width="360" />
```
