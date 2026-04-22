# 神山高専紹介サイト 技術設計

## 1. 設計方針

- Astro による静的 1 ページサイトとして構築する。
- UI は Tailwind CSS を中心に実装し、やわらかいポップのトーンをデザイントークンで統一する。
- コンテンツは差し替え容易性を優先し、ページ本体から分離しやすいデータ駆動構造を採る。
- GitHub Pages では GitHub Actions デプロイを採用し、project site 前提で site/base を設定する。

## 2. 想定アーキテクチャ

### 2.1 構成概要

- src/pages/index.astro: 1 ページ全体の組み立て
- src/layouts/BaseLayout.astro: HTML 共通構造、SEO 基本情報、全体背景
- src/components/HeroSection.astro: ヒーロー
- src/components/FeatureSection.astro: 学校の特徴
- src/components/LifeSection.astro: 学生生活
- src/components/LinkCtaSection.astro: 公式サイト導線
- src/data/siteContent.ts: 文言、リンク、画像参照、カード配列などの差し替え元
- public/: 静的アセット、仮画像、将来の支給画像

### 2.2 レンダリングフロー

1. siteContent から各セクションに必要なデータを取得する。
2. index.astro がレイアウトと各セクションコンポーネントを組み立てる。
3. BaseLayout が共通 head と全体トーンを付与する。
4. Astro build が静的ファイルを生成し、GitHub Pages へ配信する。

## 3. セクション設計

| セクション | 目的 | 主な要素 | 差し替え単位 |
| --- | --- | --- | --- |
| Hero | 第一印象と価値訴求 | キャッチコピー、要約、メインビジュアル、CTA | 見出し、説明、画像、CTA |
| Feature | 学校の特徴整理 | 3 から 4 枚程度の特徴カード | カードごとの title、body、icon/image |
| Life | 学生生活の具体像提示 | 日常・学び・コミュニティ等の紹介ブロック | 各ブロックの見出し、本文、画像 |
| Official CTA | 公式情報への遷移 | 外部リンク、補足テキスト | URL、ボタン文言、説明 |

## 4. デザインシステム方針

### 4.1 ビジュアル方向

- トーン: やわらかいポップ
- 印象: 親しみやすいが幼すぎない、明るいが情報は読みやすい
- 背景: 単色ではなく、淡いグラデーションまたは有機的な面表現を使う
- 形状: 大きめの角丸、カードベース、余白を広めに確保

### 4.2 トークン方針

- 色: ベース、アクセント、サブアクセント、文字、面色、境界線を定義する
- 余白: セクション上下、カード内、グリッド間隔の基準値を決める
- タイポグラフィ: 見出し、本文、補助テキストのサイズ階層を定義する
- 影と境界: 柔らかい影を使い、過剰なコントラストを避ける

実装候補:

- Tailwind テーマ拡張で color、spacing、borderRadius を追加
- もしくは BaseLayout 内の CSS 変数に集約し、Tailwind の arbitrary value と併用

## 5. コンテンツモデル

TypeScript イメージ:

```ts
type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  image: {
    src: string;
    alt: string;
  };
};

type CardContent = {
  title: string;
  description: string;
  image?: string;
  alt?: string;
};

type SiteContent = {
  hero: HeroContent;
  features: CardContent[];
  life: CardContent[];
  officialLink: {
    label: string;
    href: string;
    note: string;
  };
};
```

設計意図:

- 文言と画像参照を配列・オブジェクトに寄せることで、差し替え時にコンポーネントを触る範囲を最小化する。
- 初回は siteContent.ts に集約し、将来的に JSON や CMS 連携へ移行しやすくする。

## 6. 画像アセット配置方針

- 仮画像: public/images/placeholders/
- 支給画像: public/images/content/
- 軽量な装飾 SVG: public/images/decor/

運用ルール:

1. セクションごとにサブフォルダを分けず、役割ベースで配置する。
2. 画像ファイル名は用途が分かる命名にする。
3. 本素材未投入時は placeholder を参照し、差し替え候補を siteContent 側に残す。

## 7. GitHub Pages 設定方針

### 7.1 公開 URL

- site: https://kmc2305.github.io
- base: /ghcp-school-intro-nnmn

project site のため、ルート絶対参照を避け、Astro の base を前提としたアセット・リンク生成に揃える。

### 7.2 Astro 設定

- output は static
- adapter は GitHub Pages 向けに必須ではないが、Actions の静的配信前提で問題ない構成にする
- trailingSlash は既定値を維持し、内部リンクはトップページ中心なので単純化する

### 7.3 GitHub Actions workflow

必須ステップ:

1. checkout
2. Node.js 22 セットアップ
3. npm ci
4. npm run build
5. Pages artifact upload
6. deploy-pages

## 8. 将来の素材差し替えフロー

1. 支給文言と画像を受領する。
2. public/images/content/ に画像を配置する。
3. src/data/siteContent.ts の文言、alt、画像参照、公式サイト URL を更新する。
4. npm run build でビルド確認する。
5. GitHub Actions デプロイ後、本番 URL で見た目とリンクを確認する。

## 9. エラーハンドリング設計

| 事象 | 原因 | 対応方針 |
| --- | --- | --- |
| 画像が表示されない | パス誤り、未配置 | placeholder にフォールバックし、alt は常に設定する |
| CSS が崩れる | base path 不一致 | relative/base 対応の参照に統一し、build 後に dist を確認する |
| 公式リンクが誤っている | URL 更新漏れ | siteContent に一元化し、検証項目へ含める |
| モバイルでカードが詰まる | 固定幅や過剰な列数 | 小画面では 1 カラムを基本にする |

## 10. テスト戦略

### 10.1 自動検証

- npm ci: 依存関係の解決確認
- npm run build: 静的ビルド確認
- 必要に応じて Playwright: トップページ表示と公式リンク存在の最小 E2E

### 10.2 手動検証

- モバイル幅とデスクトップ幅でのレイアウト確認
- project site 相当の base path で CSS、画像、導線が壊れないことの確認
- 公式サイトリンクが正しい遷移先を指すことの確認

## 11. 要件トレーサビリティ

| 要件 | 設計反映 |
| --- | --- |
| RQ-01, RQ-14 | HeroSection とデザイントークン方針 |
| RQ-02, RQ-15 | FeatureSection とコンポーネント分割 |
| RQ-03 | LifeSection |
| RQ-04 | LinkCtaSection と siteContent の公式リンク定義 |
| RQ-05, RQ-06 | レスポンシブレイアウトと余白ルール |
| RQ-07, RQ-08, RQ-09 | siteContent 集約、placeholder 運用、画像配置方針 |
| RQ-10, RQ-11, RQ-12, RQ-13 | astro.config の site/base/output と Pages workflow、検証工程 |