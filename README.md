# 神山まるごと高専 紹介サイト

Astro + Tailwind CSS で構築した、神山まるごと高専の 1 ページ紹介サイトです。
GitHub Pages の project site として公開する前提で設定しています。

## 技術スタック

- Astro
- Tailwind CSS
- Node.js 22
- GitHub Actions (Pages デプロイ)

## セットアップ

```bash
npm ci
```

## ローカル開発

```bash
npm run dev
```

- 開発サーバー: `http://localhost:4321`

## ビルド

```bash
npm run build
```

- 出力先: `dist/`
- `astro.config.mjs` で `site` と `base` を project site 向けに設定済み

## プレビュー

```bash
npm run preview
```

## ディレクトリ構成

```text
.
├── public/
│   └── images/placeholders/   # 仮画像
├── src/
│   ├── components/            # セクション単位の UI
│   ├── data/siteContent.ts    # 文言・リンク・画像参照
│   ├── layouts/BaseLayout.astro
│   ├── pages/index.astro
│   └── styles/global.css
└── .github/workflows/deploy-pages.yml
```

## コンテンツ差し替え

1. 文章・リンク・画像パスは `src/data/siteContent.ts` を編集します。
2. 支給画像は `public/images/content/` を作成して配置し、`siteContent.ts` の `src` を差し替えます。
3. 画像未提供時は `public/images/placeholders/` を利用したまま運用できます。

## GitHub Pages 公開

`/.github/workflows/deploy-pages.yml` によって、`main` ブランチへの push 時に Pages デプロイを実行します。

実施手順:

1. GitHub リポジトリの Settings > Pages で Source を `GitHub Actions` に設定
2. `main` へ push
3. Actions の `Deploy Astro site to GitHub Pages` 成功後に公開 URL を確認

## 仕様ドキュメント

- 要件: `spec/requirements.md`
- 設計: `spec/design.md`
- タスク: `spec/tasks.md`