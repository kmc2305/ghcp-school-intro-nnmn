## Plan: 神山高専紹介サイト初期構築

神山まるごと高専の紹介ページを、Astro + Tailwind CSS の1ページ構成を基本案として新規構築し、GitHub Pages の project site に公開できる状態まで整える。デザインは「やわらかいポップ」を軸に、学校の特徴・学生生活・公式サイト導線を含む。文章と画像素材は存在する前提だが置き場所未確定のため、差し替えしやすいコンテンツ構造で設計する。

**Steps**
1. Phase 1: 要件定義と仕様整理。spec/requirements.md を新規作成し、EARS 記法で要件を定義する。対象ユーザー、1ページ構成、必須セクション、GitHub Pages project site 前提、素材差し替え前提、公式サイト導線必須を明文化する。
2. Phase 1: 技術設計。spec/design.md を新規作成し、Astro 構成、Tailwind の利用方針、セクション構成、画像アセット配置、GitHub Pages の site/base 設定方針、将来の素材差し替えフローを整理する。Step 1 に依存。
3. Phase 1: 実装タスク化。spec/tasks.md を新規作成し、初期化、UI 実装、素材投入、Pages workflow、検証の順でタスク分解する。Step 2 に依存。
4. Phase 2: Astro プロジェクト初期化。package.json、astro.config.mjs または astro.config.ts、src/pages/index.astro、src/layouts、src/components、public 配下を追加し、Node.js 22 で npm run build が通る最小構成を作る。Step 3 に依存。
5. Phase 2: デザインシステム整備。やわらかいポップの配色、角丸、タイポグラフィ、背景表現、余白ルールを CSS 変数または Tailwind テーマ拡張で定義する。ヒーロー、特徴、学生生活、リンク導線の再利用しやすいコンポーネントに分ける。Step 4 に依存。
6. Phase 2: トップページ実装。src/pages/index.astro に1ページ構成を実装し、学校の特徴セクション、学生生活セクション、公式サイト導線を含める。素材未投入時でも成立する仮文言・プレースホルダー構成にし、後から差し替えやすいデータ構造を採用する。Step 5 に依存。
7. Phase 2: 素材組み込み。提供素材がある場合は public 配下または src/assets 配下へ整理し、本文と画像を差し込む。素材が未提供なら仮素材のままにして差し替え箇所を明確化する。Step 6 に依存。
8. Phase 3: GitHub Pages 対応。astro.config で site と base を project site 用に設定し、.github/workflows 配下に GitHub Actions の Pages デプロイ workflow を追加する。Step 4 と並行検討可能だが、確定実装は Step 6 以降。
9. Phase 3: 品質確認。npm run build、必要なら npm run dev によるレイアウト確認、リンク確認、base パス起因の崩れ確認を行う。Playwright は必要に応じてトップ表示と主要リンクの最小 E2E を追加する。Step 7 と Step 8 に依存。
10. Phase 4: 仕上げ。README.md に開発方法と GitHub Pages 公開方法を追記し、spec/tasks.md の完了状態を更新する。Step 9 に依存。

**Relevant files**
- /workspaces/ghcp-school-intro-nnmn/.github/copilot-instructions.md — Astro、Tailwind、Playwright、Node.js 22 のプロジェクト制約
- /workspaces/ghcp-school-intro-nnmn/.github/instructions/spec-driven.instructions.md — requirements/design/tasks を維持する進行ルール
- /workspaces/ghcp-school-intro-nnmn/.github/skills/github-pages-astro/SKILL.md — GitHub Pages の site/base/workflow 設計基準
- /workspaces/ghcp-school-intro-nnmn/README.md — セットアップと公開手順の追記対象
- /workspaces/ghcp-school-intro-nnmn/spec/requirements.md — 新規作成、要件定義
- /workspaces/ghcp-school-intro-nnmn/spec/design.md — 新規作成、UI/公開設計
- /workspaces/ghcp-school-intro-nnmn/spec/tasks.md — 新規作成、実装タスク管理
- /workspaces/ghcp-school-intro-nnmn/package.json — 新規作成、依存関係とスクリプト
- /workspaces/ghcp-school-intro-nnmn/astro.config.mjs — 新規作成、site/base/output 設定
- /workspaces/ghcp-school-intro-nnmn/src/pages/index.astro — 新規作成、トップページ本体
- /workspaces/ghcp-school-intro-nnmn/src/components/ — 新規作成、ヒーローや紹介セクションの分割先
- /workspaces/ghcp-school-intro-nnmn/public/ — 新規作成、画像などの静的アセット配置
- /workspaces/ghcp-school-intro-nnmn/.github/workflows/ — 新規作成、Pages デプロイ workflow

**Verification**
1. npm ci が成功することを確認する。
2. npm run build が成功し、dist 出力が生成されることを確認する。
3. project site 用の base で CSS、画像、内部リンクが崩れないことを確認する。
4. GitHub Actions の Pages workflow が成功し、公開 URL でトップページが表示されることを確認する。
5. 公式サイト導線が正しい URL に遷移することを確認する。
6. モバイル幅とデスクトップ幅でヒーロー、カード、リンク導線が破綻しないことを確認する。

**Decisions**
- 推奨構成は1ページのランディング形式。理由は現時点の要望が紹介ページ中心で、最短で公開価値が出るため。
- GitHub Pages は GitHub Actions デプロイを採用する。Astro の build が必要なため branch 公開より安全。
- デザインは「やわらかいポップ」。過度に子どもっぽくせず、学校の信頼感は維持する。
- 素材置き場所が未回答のため、初回実装は差し替え容易性を優先する。

**Further Considerations**
1. 素材が未入庫なら、まずは仮文言とプレースホルダー画像で UI と公開基盤を先行実装するのがよい。
2. もし複数ページ構成にしたくなった場合は、特徴詳細や学生生活詳細を個別ページへ切り出す拡張余地を残す。
3. 公式サイト URL が未確定なので、実装前にリンク先だけは最終確認が必要。