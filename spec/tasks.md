# 神山高専紹介サイト 実装タスク

## 1. 進行方針

- フェーズは 1) 仕様確定 2) UI 実装 3) Pages 公開 4) 検証と仕上げ の順に進める。
- 本タスクは requirements/design/tasks のトレーサビリティを維持する。
- 素材未確定のため、UI と公開基盤を先行し、素材差し替えは後段で吸収する。

## 2. タスク一覧

| ID | ステータス | タスク | 期待成果 | 依存 |
| --- | --- | --- | --- | --- |
| T1 | 完了 | requirements.md を作成する | EARS 記法の要件、制約、受け入れ基準、信頼度が整理されている | なし |
| T2 | 完了 | design.md を作成する | 構成、デザイン方針、Pages 設定、差し替えフローが定義されている | T1 |
| T3 | 完了 | tasks.md を作成する | 実装順序と依存関係が整理されている | T2 |
| T4 | 完了 | Astro プロジェクトを初期化する | package.json、astro.config、src、public の最小構成が揃う | T3 |
| T5 | 完了 | Tailwind CSS とデザイントークンを整備する | やわらかいポップの基調スタイルが再利用可能になる | T4 |
| T6 | 完了 | 1 ページ UI を実装する | ヒーロー、特徴、学生生活、公式導線を含むトップページが表示される | T5 |
| T7 | 完了 | コンテンツデータ構造を分離する | 仮文言・仮画像から本素材へ差し替えやすい状態になる | T6 |
| T8 | 完了 | 素材を組み込む | 提供素材が未確定のため、placeholder 素材で成立する状態にした | T7 |
| T9 | 完了 | GitHub Pages workflow を追加する | GitHub Actions で Pages へデプロイできる | T4, T6 |
| T10 | 完了 | ビルドと表示検証を行う | npm ci、npm run build、base path 前提の静的出力確認が完了した | T8, T9 |
| T11 | 完了 | README を更新する | 開発方法と公開方法が日本語で整理される | T10 |

## 3. フェーズ別詳細

### Phase 1: 仕様確定

#### T1 requirements.md を作成する

- 内容: 対象ユーザー、1 ページ構成、必須セクション、GitHub Pages 前提、素材差し替え前提、公式サイト導線必須を EARS 記法へ落とし込む
- 完了条件: 受け入れ基準とエッジケースが明記されている

#### T2 design.md を作成する

- 内容: Astro 構成、Tailwind 利用方針、セクション構成、画像配置、site/base、workflow 方針、差し替えフローを設計する
- 完了条件: requirements との対応表が含まれている

#### T3 tasks.md を作成する

- 内容: 実装順、依存関係、検証項目をタスク化する
- 完了条件: 次工程で迷わない粒度に分解されている

### Phase 2: UI 実装

#### T4 Astro プロジェクトを初期化する

- 内容: package.json、astro.config.mjs、src/pages/index.astro、src/layouts、src/components、public を追加する
- 完了条件: Node.js 22 で npm run build が通る最小構成になる

#### T5 Tailwind CSS とデザイントークンを整備する

- 内容: 配色、角丸、余白、背景、タイポグラフィを定義する
- 完了条件: セクション間で再利用できるスタイル規約が整う

#### T6 1 ページ UI を実装する

- 内容: Hero、Feature、Life、Official CTA を実装する
- 完了条件: 仮素材でも破綻しないトップページが成立する

#### T7 コンテンツデータ構造を分離する

- 内容: 文言・リンク・画像参照をデータファイルへ集約する
- 完了条件: 将来の差し替えがコンポーネント修正なしでも進めやすい

#### T8 素材を組み込む

- 内容: 支給素材があれば配置し、未提供なら placeholder を維持する
- 完了条件: 差し替え箇所が明示されている

### Phase 3: Pages 公開

#### T9 GitHub Pages workflow を追加する

- 内容: GitHub Actions に checkout、Node 22、npm ci、build、artifact upload、deploy-pages を定義する
- 完了条件: project site 前提の Pages デプロイが構成上成立する

#### T10 ビルドと表示検証を行う

- 内容: npm ci、npm run build、必要時 npm run dev、base path 確認、主要リンク確認を行う
- 完了条件: CSS、画像、内部リンク、外部リンクの問題がない

### Phase 4: 仕上げ

#### T11 README を更新する

- 内容: セットアップ手順、ローカル開発、GitHub Pages 公開手順を追記する
- 完了条件: 新規参加者が README だけで開発と公開の流れを理解できる

## 4. 検証チェックリスト

- npm ci が成功する
- npm run build が成功し dist が生成される
- project site 用 base で CSS、画像、内部リンクが崩れない
- 公式サイト導線が正しい URL を指す
- モバイル幅とデスクトップ幅で主要 UI が破綻しない

## 5. 未確定事項

- 公式サイト URL の最終値
- 支給文章と支給画像の配置場所
- Playwright の最小 E2E を初期段階で追加するかどうか

## 6. 次の着手点

- 実装フェーズは完了
- 次の着手点は本素材（文言・画像・公式サイト URL 最終値）の反映と公開後確認

## 7. 実行サマリー

- Astro/Tailwind 構成、1 ページ UI、データ分離構成を追加した
- GitHub Pages 用 workflow を追加した
- `npm run build` が成功し、`dist/` 出力を確認した