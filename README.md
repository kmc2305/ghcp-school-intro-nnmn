# 神山高専紹介LP (Astro)

神山まるごと高専の魅力を紹介する、1ページ完結の LP です。
GitHub Pages のサブパス公開を前提に、Astro で静的サイトとして構築しています。

## 使い方

### 前提
- Node.js 22
- npm

### セットアップ
1. 依存関係をインストール

	npm ci

2. 開発サーバー起動

	npm run dev

3. 本番ビルド

	npm run build

4. ビルド結果のローカル確認

	npm run preview

## ディレクトリ構成

- src/pages/index.astro: 1ページLP本体
- src/layouts/BaseLayout.astro: 共通レイアウト、メタ情報、フォント読み込み
- src/components: セクション単位の再利用コンポーネント
- src/content/siteContent.ts: 見出し、本文、CTA、画像パスなどの差し替え元データ
- src/styles/global.css: デザイントークンと全体スタイル
- public/images: 仮画像・OGP画像
- .github/workflows/deploy-pages.yml: GitHub Pages デプロイワークフロー

## コンテンツ差し替えガイド

正式素材に更新する時は、基本的に以下だけ触れば完了します。

1. 文言・リンクを差し替える
- src/content/siteContent.ts の各オブジェクトを編集
- 変更対象: heroContent, philosophySection, campusLifeSection, accessSection, ctaSection

2. 画像を差し替える
- ヒーロー: public/images/hero-placeholder.svg を正式画像に置換
- キャンパスカード: public/images/campus-workshop.svg, public/images/campus-dorm.svg, public/images/campus-community.svg を置換
- OGP: public/images/og-default.svg を正式OGP画像に置換

3. 推奨画像比率
- ヒーロー画像: 16:9 (横長)
- カード画像: 4:3 または 1:1

4. メタ情報を差し替える
- タイトル・説明文: src/content/siteContent.ts の siteMeta
- 追加メタタグ制御: src/layouts/BaseLayout.astro

## GitHub Pages 公開

このリポジトリは GitHub Pages のサブパス公開を前提にしています。

- Astro 設定: astro.config.mjs
  - CI 上で GITHUB_REPOSITORY から base を自動算出
  - 例: リポジトリが owner/repo の場合、base は /repo/

- 公開ワークフロー: .github/workflows/deploy-pages.yml
  - main ブランチへの push で実行
  - npm ci -> npm run build -> Pages へデプロイ

## 補足

- 問い合わせフォームは今回のスコープ外です。
- 404 ページは src/pages/404.astro で用意済みです。
