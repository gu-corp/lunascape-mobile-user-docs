> [!IMPORTANT]
> このリポジトリは [gu-corp/lunascape-user-guide](https://github.com/gu-corp/lunascape-user-guide) の  に移行し、アーカイブされました。
> 閲覧: <https://docs.lunascape.org/?source=github:gu-corp/lunascape-user-guide@main/mobile> ／ 修正の提案も移行先へお願いします。

# Lunascape Mobile User Manual

This repository contains the Lunascape Mobile user manual in the canonical Lunascape Docs format. The Markdown and image files under `docs/` are the source of truth, and the manual itself needs no site generator and no build step.

## Published site

<https://gu-corp.github.io/lunascape-mobile-user-docs/>

GitHub Pages serves the `gh-pages` branch. That branch holds a **generated** static export — the Lunascape Docs viewer, a copy of `docs/`, the manifest the viewer reads (`lunascape-docs-manifest.json`) and `.nojekyll`. The export is self-contained: no build runs on the server and no API answers behind it, which is why plain GitHub Pages is enough.

Never edit `gh-pages` by hand. Every change belongs in `docs/` on `master`, and reaches the site through a new export.

### Regenerating the site

Publishing is manual today. From a checkout of the Lunascape Docs repository (`gu-corp/lunascape-docs`):

```sh
node scripts/export-web-site.mjs \
  --root /path/to/lunascape-mobile-user-docs/docs \
  --out  ./dist-site \
  --repo github:gu-corp/lunascape-mobile-user-docs@master/docs
```

Replace the contents of `gh-pages` with `dist-site/` and push. `--repo` is what the viewer's edit action uses to open a pull request against this repository; without it the export guesses from the checkout it read.

`examples/workflows/publish-docs-pages.yml` in that repository shows the same export as a GitHub Actions job, for when this moves off a manual step.

> **Known gap.** The Web viewer in Lunascape Docs 0.7.0 does not yet read `navigation` front matter. On the published site every folder descriptor is labelled `INDEX` and pages fall back to a deterministic order instead of `navigation.order`. The VS Code extension already applies both. Keep authoring the metadata as described below; the site picks it up once viewer parity lands.

## Content layout

- `docs/` is the canonical English document root. `introduction.md` opens the manual, `getting-started/` covers downloading and troubleshooting, and `features/` holds one folder per area of the app.
- Each directory's `i18n/ja/` folder contains its Japanese counterparts. For example, `docs/features/browser/ad-blocking.md` is translated at `docs/features/browser/i18n/ja/ad-blocking.md`.
- `docs/lunascape-docs.json` defines the Lunascape Docs workspace.
- Each page owns its INDEX order, and where needed its title, in `navigation` front matter.
- Smartphone screenshots use explicit, portable HTML widths: 360px for tall screens and 560px for wider crops.

## Open in Lunascape Docs

Open any Markdown file under `docs/` with Lunascape Docs. The extension detects `docs/lunascape-docs.json`, opens the complete manual, and provides the INDEX and locale switcher.

English is the default locale. Select `ja` in the locale switcher to open the corresponding file from the nearest `i18n/ja/` folder.

## Authoring

- Add or move pages in the filesystem; no generated sidebar file is used.
- Set a 100-spaced `navigation.order` on default-language pages.
- Set `navigation.title` only where the INDEX label should read differently from the page's H1 — a short "Support" against a descriptive "Help and app information". Where the two would say the same thing the H1 is the title, so there is nothing to keep in sync.
- A folder descriptor has no heading of its own, so it always carries `navigation.title`.
- Localized pages may override `navigation.title` but do not own `navigation.order`.
- Keep translated files and images at the same relative paths under each directory's `i18n/ja/` folder.
- Use a numeric HTML width for screenshots so the chosen size is preserved by Lunascape Docs and GitHub.

```html
<img src="img/example.png" alt="Screen description" width="360" />
```

## History

Until August 2026 this repository was a Docusaurus site deployed to Vercel at `lunascape-mobile-user-docs.vercel.app`. The migration to the Lunascape Docs format removed the generator, so that project can no longer build and its last successful deployment is frozen on pre-migration content.
