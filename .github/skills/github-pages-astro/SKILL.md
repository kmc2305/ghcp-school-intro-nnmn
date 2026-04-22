---
name: github-pages-astro
description: 'GitHub Pages を構築・公開するときに使う Skill。Astro サイトの Pages デプロイ、GitHub Actions による公開設定、Pages ソース選択、カスタムドメイン設定、公開後の確認や切り分けに使う。Use when setting up GitHub Pages, Astro deployment, GitHub Actions Pages workflow, or troubleshooting publish failures.'
argument-hint: 'リポジトリ名、公開方式、カスタムドメイン有無、困っている点を書く'
user-invocable: true
disable-model-invocation: false
---

# GitHub Pages for Astro

## この Skill が行うこと

GitHub Pages でサイトを公開するために、構成の確認、公開方式の選定、GitHub Actions の設定、公開後の確認までを順に進める。

このリポジトリでは Astro を前提にし、標準的には GitHub Actions を使った公開を優先する。

## 使う場面

- GitHub Pages の新規構築を始めるとき
- Astro サイトを GitHub Pages に公開したいとき
- Pages の公開元を branch か GitHub Actions か判断したいとき
- 独自ドメインを設定したいとき
- 公開済みだが 404 やアセット切れが起きているとき

## 事前確認

1. リポジトリが GitHub 上にあり、Pages を有効化できることを確認する。
2. Astro プロジェクトなら静的出力でビルドできることを確認する。
3. 公開先 URL が project site か user site かを確認する。
4. カスタムドメインの有無を確認する。

## 判断ポイント

### 1. 公開方式を決める

- Astro や他のビルド工程が必要な静的サイトなら GitHub Actions を優先する。
- 単純な HTML/CSS/JS だけで build 不要なら branch 公開も検討できる。

### 2. ベースパスを決める

- user site なら通常 `/` を使う。
- project site なら通常 `/<repository-name>/` をベースパスにする。
- カスタムドメインを使うなら `/` に戻せる場合が多い。

### 3. カスタムドメイン設定の有無を決める

- 独自ドメインが必要なら DNS と CNAME の設定手順を追加する。
- 不要なら GitHub 提供ドメインで検証を進める。

## 手順

### A. 現状を確認する

1. `package.json`、`astro.config.*`、`.github/workflows/` の有無を確認する。
2. 既存の GitHub Pages 関連設定があるか確認する。
3. project site ならリポジトリ名を控える。

### B. Astro 設定を整える

1. `site` を本番 URL に合わせる。
2. project site の場合は `base` を `/<repository-name>/` に設定する。
3. 静的出力が前提なら `output: "static"` を確認する。
4. `npm run build` が成功することを確認する。

### C. GitHub Pages を GitHub Actions で公開する

1. `.github/workflows/` に Pages 用 workflow を作成する。
2. workflow では checkout、Node.js セットアップ、依存関係のインストール、Astro build、Pages artifact の upload、deploy を行う。
3. GitHub の Pages 設定で source が GitHub Actions になっていることを確認する。

### D. branch 公開を使う場合

1. build 不要な構成だけで採用する。
2. GitHub の Pages 設定で branch と folder を選ぶ。
3. 出力物を公開ブランチへ反映する運用を定める。

### E. 公開後の確認

1. Actions が成功していることを確認する。
2. 本番 URL でトップページが表示されることを確認する。
3. CSS、画像、内部リンクが壊れていないことを確認する。
4. project site ならベースパス由来の 404 がないことを確認する。

### F. カスタムドメインを設定する場合

1. DNS レコードを GitHub の案内に従って設定する。
2. `CNAME` を必要に応じて用意する。
3. HTTPS が有効になるまで待って再確認する。

## トラブルシュート

- 404 になる: `site` と `base` の組み合わせ、workflow の deploy 対象、Pages 設定の source を見直す。
- CSS や画像が崩れる: 絶対パスになっていないか、project site で `base` が抜けていないか確認する。
- Actions は成功するが反映されない: Pages の source と deployment history を確認する。
- 独自ドメインで開けない: DNS 伝播、CNAME、HTTPS 設定を確認する。

## 完了条件

- `npm run build` が通る。
- GitHub Pages の設定で公開方式が意図どおりになっている。
- 本番 URL で主要ページと静的アセットが正常に表示される。
- カスタムドメインを使う場合は HTTPS でアクセスできる。

## 参照資料

- [GitHub Pages 公式ドキュメント一覧](./references/official-docs.md)

## この Skill を呼ぶ例

- `/github-pages-astro Astro を GitHub Pages に公開したい`
- `/github-pages-astro project site 前提で base 設定と workflow を作りたい`
- `/github-pages-astro 公開後に 404 になる原因を切り分けたい`