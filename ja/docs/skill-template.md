# Skill テンプレートドキュメント（v1.5）

言語：日本語 | [English](../../en/docs/skill-template.md) | [繁體中文](../../zh-TW/docs/skill-template.md) | [简体中文](../../zh-CN/docs/skill-template.md)

このドキュメントは Skill テンプレートの記入方法を説明します。実際に編集するファイルは、上架方法によって変わります：

- **単品上架**：`skills/YOUR_SKILL_NAME/` をコピー → リネーム → 中の `SKILL.md` を記入
- **Agent 上架**（Persona + Skill + Avatar 三位一体）：`agents/YOUR_AGENT_NAME/` をコピー → 中の `SKILL.md` は双方向バインディング事前記入済み

完全な記入例は `skills/EXAMPLE_social_marketing_post_ideas/` を参照してください。

---

## 重要：フォルダと skill_id は必ず英語

私たちのシステムは**英語の識別子しか認識しません**。skill の本文（`What this skill does`、`Workflow`、`Known limitations` など）を繁体字中国語、日本語、その他どの言語で書いていても、以下の項目は必ず英語でなければなりません：

- `skill_id` フィールド
- 作成する skill フォルダ名（`skills/<your_skill_id>/`）
- 形式の制限：**英小文字 + 数字 + アンダースコア（`_`）**——スペース、大文字、ハイフン（`-`）、非英語文字は使用不可

**例：**

| 正しい | 誤り |
|---------|---------|
| `skill_id: weekly_report_writer` | `skill_id: 週報ジェネレーター` |
| `skills/code_review_zh/` | `skills/Code-Review-中文/` |

skill の `title`（表示名、例：`title: 週報自動ジェネレーター`）、`one_liner`、すべての本文はあなたのターゲットユーザーの言語で書くことができますし、書くべきです。システムは `skill_id` とフォルダ名のみを識別とルーティングに使います——これらは必ず英語です。

**予約済みプレフィックス**：このキットには 2 種類の予約プレフィックスがあります。あなたの本番リスティングは**どちらも使用してはいけません**——Portal が拒否します：

- **`EXAMPLE_`**：参照用サンプルファイル、読み取り専用（例：`EXAMPLE_social_marketing_post_ideas`）——このフォルダはコピーしないでください。
- **`YOUR_`**：空白テンプレート（`YOUR_SKILL_NAME/`、`YOUR_AGENT_NAME/`）、コピーしてリネームするためのもの——コピー後、フォルダと `skill_id` の両方を**必ず**あなた自身の英小文字 ID に変更してください。

---

## クイックリファレンス

| フィールド | 位置 | 必須 | 説明 |
|-------|----------|----------|-------------|
| `skill_id` | metadata.json + SKILL.md YAML | はい | 一意 ID、小文字 + アンダースコア。フォルダ名と一致必須。 |
| `base_price` | metadata.json | はい | NT$、`0`（無料）または `≥100` |
| `title` | metadata.json | はい | 表示名、40 文字以内 |
| `version` | metadata.json | はい | `"1.0"` から開始 |
| `category` | metadata.json | はい | 最大 2 カテゴリ |
| `one_liner` | metadata.json | はい | 一文ピッチ、60 文字以内 |
| `languages` | metadata.json | はい | skill が動作する言語の BCP-47 コード |
| `script_mode` | metadata.json | はい | 下の説明を参照 |
| `listing_description` | metadata.json | 推奨 | マーケットの短い説明 |
| `cover` | metadata.json | 推奨 | `assets/cover-<id>.png`、正方形 1:1 |
| `banner` | metadata.json | 推奨 | `assets/banner-<id>.png`、横長 16:10 |
| `listing.what_it_does` / `listing.what_you_get` / `listing.limitations` | metadata.json | 任意 | コンテンツページの対応する body セクションを上書き |
| What this skill does | SKILL.md body | はい | 3–5 文の説明 |
| Workflow | SKILL.md body | はい | 3–7 ステップ |
| What User needs to provide | SKILL.md body | はい | 箇条書き |
| What User will receive | SKILL.md body | はい | 箇条書き |
| Known limitations | SKILL.md body | はい | 箇条書き |
| Script | SKILL.md body | 任意 | script_spec / script_provided のときのみ記入 |
| `tested_runtimes` / `tested_models` / `test_level` | — | deprecated | Portal が今後自動テストして記入 |

> **各フィールドの場所（Phase-3 の分割）：** `SKILL.md` frontmatter には**実行アイデンティティ**（`skill_id`）のみを残します；`skill_id` + `base_price` は `metadata.json` にもあります（優先読み込み、frontmatter は fallback）。マーケットの*リスティング*が表示するものはすべて `SKILL.md` の隣の **`metadata.json`** にあります。`SKILL.md` の body セクションはそのまま——公開コンテンツページとしてレンダリングされ、`metadata.json` の `listing.*` がそれらを上書きできます。

---

## リスティング manifest（`metadata.json`）

`metadata.json` は skill フォルダ内の `SKILL.md` の隣にあり、マーケットのリスティングが表示するすべてのフィールドを保持します。ファイルレベルでは任意です（`metadata.json` のないバンドルは `SKILL.md` frontmatter にフォールバック）が、Phase-3 の skill ではここがリスティングフィールドの置き場所です。

```json
{
  "skill_id": "weekly_report_writer",
  "title": "週報自動ジェネレーター",
  "one_liner": "今週のタスクリストを入力すると、構造化された週報ドラフトが手に入る",
  "version": "1.0",
  "base_price": 0,
  "languages": ["ja", "en"],
  "category": ["writing", "ops"],
  "script_mode": "workflow_only",
  "listing_description": "マーケットのリスティングに表示される 2–3 文の説明。",
  "cover": "assets/cover-weekly_report_writer.png",
  "banner": "assets/banner-weekly_report_writer.png",
  "listing": {
    "what_it_does": "一段落——SKILL.md の「What this skill does」セクションを上書き。",
    "what_you_get": ["成果物 1", "成果物 2"],
    "limitations": ["制約 1", "制約 2"]
  }
}
```

- `title` / `one_liner` / `version` / `category` / `script_mode` / `listing_description`——意味とルールは下のフィールド別説明と同じで、`metadata.json` に置くようになっただけです。`skill_id` と `base_price` も `metadata.json` にあります（スペックカード）；`skill_id` は互換のため `SKILL.md` frontmatter にも残します。
- `listing.what_it_does`（文字列）、`listing.what_you_get`（文字列配列）、`listing.limitations`（文字列配列）——公開コンテンツページの任意の上書き。省略すると `SKILL.md` の body セクションがそのまま使われます。
- `cover` / `banner`——下を参照。

### cover と banner の画像（`assets/`）

リスティング画像を skill の `assets/` フォルダに配置し、`metadata.json` で宣言します：

| フィールド | ファイル | 比率 | 役割 |
|-------|------|-------|------|
| `cover` | `assets/cover-<skill_id>.png` | 正方形 **1:1** | マーケットカードのサムネイル |
| `banner` | `assets/banner-<skill_id>.png` | 横長 **16:10** | 詳細ページのヒーロー |

- PNG、各 2 MB 以内。比率は小さな許容差（±2%）でチェックされます。
- 画像は**言語ニュートラル**——1 バージョンのみ、言語フォルダごとに用意する必要はありません。（`metadata.json` 自体は**言語ごと**：`title` / `one_liner` / `listing_description` をローカライズ。）
- プラットフォームはファイル名（basename）で画像を照合するため、basename が一意であれば `assets/` のパスプレフィックスは問題ありません。

---

## フィールド逐項説明

### `skill_id`

あなたの skill のシステム内一意識別子。

ルール：
- 英小文字、数字、アンダースコア（`_`）のみ使用可
- スペースや特殊文字は不可
- 一度命名すると変更不可（既に購読しているユーザーに影響）

```yaml
# 良い例
skill_id: social_post_ideas
skill_id: weekly_report_writer
skill_id: code_review_zh

# 悪い例
skill_id: Social Post Ideas   # 大文字とスペースあり
skill_id: my-skill            # ハイフン使用
```

---

### `title`

ユーザーが検索結果と商品ページで見る名前。

- 40 文字以内
- 「何をするか」をはっきり書く——奇をてらわない
- 言語やターゲット層を含めても OK

```yaml
# 良い例
title: Social Marketing：投稿アイデアパック
title: 週報自動ジェネレーター
title: Code Review アシスタント（日本語）
```

---

### `category`

下のリストから最大 2 つ選んでください。1 つ目がメインカテゴリ、2 つ目がサブカテゴリです。

選択可能なカテゴリ：

| カテゴリ ID | 説明 |
|------------|-------------|
| `writing` | ライティング、ドラフト、編集 |
| `research` | 情報収集、整理、分析 |
| `coding` | 開発、デバッグ、code review |
| `data` | データ処理、グラフ、レポート |
| `strategy` | 戦略立案、提案、プレゼン |
| `ops` | プロセス自動化、SOP、スケジューリング |
| `sales` | 営業開発、提案、顧客コミュニケーション |
| `marketing` | マーケティングキャンペーン、広告コピー、SEO |
| `design` | ビジュアル方向性、デザイン仕様、UI/UX |
| `learning` | 教育、解説、ナレッジ整理 |

```yaml
# 良い例（最大 2 つ）
category:
  - marketing
  - writing
```

---

### `one_liner`

ユーザーが検索結果で見る最初の一文。この一文でクリックされるかが決まります。

- 60 文字以内
- 「ユーザーが何を達成できるか」を書く、「このツールが何か」は書かない
- 「AI」「先進的なモデルを使用」のような曖昧な言葉を避ける

```yaml
# 良い例
one_liner: ブランド情報を入力するだけで、ブランドに合った 20 の投稿アイデアとオープニングフックが即座に手に入る

# 悪い例
one_liner: AI 駆動のスマートなソーシャル投稿生成ツール skill
```

---

### `languages`

この skill が実際に動作する言語を BCP-47 コードでリストアップしてください。プラットフォームはこのフィールドを使って検索フィルタリングとディスパッチを行います——`zh-TW` で検索したユーザーには `en` だけを出力する skill は表示されません。

```yaml
languages:
  - zh-TW
  - en
```

> **重要：** 「この skill の output が使う言語」と「ドキュメントを書く言語」は別物です。常に *output* がどの言語になるかを宣言してください。

---

### `base_price`（必須）

この skill のマーケットプレイス価格、単位は **NT$**。

| 値 | 意味 |
|----|------|
| `0` | 無料上架（Hatchling お試し上架、誰でもインストール可能） |
| `≥100` | 有料上架（自由価格、上限なし） |

```yaml
base_price: 0       # 無料
base_price: 180     # NT$ 180
```

> **ルール：** `base_price` は `0` または `100` 以上の整数のみ許可されます。`1`–`99` は Portal が拒否します。

---

### 単品上架にペアリング欄は不要

単品の Skill には、特定の Persona を宣言する欄はありません。プラットフォームが skill の `category` をもとに相性のよい Persona を自動でマッチングするので、クリエイターが手動でペアリングを記入する必要はありません。

> **Agent テンプレート：** Skill と Persona を 1 つの Agent にまとめて販売したいなら、`agents/YOUR_AGENT_NAME/` テンプレートを使ってください——双方向バインディングが事前に記入済みです。

---

### `script_mode`

この skill に実行可能なスクリプトが付属しているか：

| 値 | 説明 |
|-------|-------------|
| `workflow_only` | workflow 説明のみ、スクリプトなし |
| `script_spec` | スクリプト仕様（プラットフォームまたはユーザーが実装） |
| `script_provided` | 実行可能なスクリプトファイル付き |

ほとんどの skill は `workflow_only` から始めることをお勧めします。

---

### `tested_runtimes` / `tested_models` / `test_level`（deprecated 手動記入）

> **これら 3 つのフィールドは v1.5 以降 deprecated（手動記入）としてマークされています。** Portal は今後自動的に cross-model QA を走らせて、test_level や互換モデルリストなど、すべてのテスト関連フィールドを生成します。
>
> 今は未記入でも構いませんし、デフォルト値を書いても構いません。記入した場合プラットフォームはあなたの宣言を初期参考にしますが、すべての test ラベルは最終的に Portal の自動テスト結果が優先されます。

それでも手動で書きたい場合（移行期サポート）：

```yaml
# tested_runtimes:
#   - claude                       # claude | claude_code | gpt | codex |
#                                  # gemini | grok | kimi | llama | deepseek | seeddance
# tested_models:
#   - claude-opus-4-6
# test_level: smoke                # smoke | qa | prod_ready
```

---

## 本文セクションの記入

> **これらの本文セクションがあなたの公開コンテンツページです。** 下の 5 つのセクションは商品ページにレンダリングされ、購入者が購入前に読む内容になります。審査を通すためだけでなく、読者を意識して書いてください。

### 「What this skill does」

3–5 文で次を説明してください：
1. この skill のコア機能
2. どんな人に最適か
3. どんな問題を解決し、どんな価値を提供するか

AI や技術的詳細に触れる必要はありません。

---

### 「Workflow」

3–7 ステップを列挙して、この skill がどう動くかを説明してください。各ステップ 1 文、動詞から始めます。

```markdown
1. ユーザーのブランド情報とターゲットプラットフォームを訊く
2. 投稿の口調とコンテンツ制約を確認する
3. 20 個の投稿アイデアを生成、切り口別にグループ化
4. 必要に応じて、すぐに公開できる完全ドラフトを 3 本生成
```

---

### 「What User needs to provide」と「What User will receive」

**提供が必要なもの：** ユーザーが開始前に準備しておくべきものをリストアップしてください。任意の項目は明示してください。

**受け取るもの：** 数字とフォーマットで具体的な output を描写してください。「20 個のアイデア」は「たくさんのアイデア」より説得力があります。

---

### 「Known limitations」

正直に現在の制限をリストアップしてください。これは自分とユーザーの両方を守ります。

よくある制限タイプ：
- 言語サポート（中国語／英語のみテスト済み）
- 入力長制限
- 適用外のシチュエーション

---

## 完全な記入例

以下は完全に記入された Skill の参考例です：

`SKILL.md` frontmatter（実行アイデンティティのみ——`skill_id`）：

```yaml
---
skill_id: social_post_ideas
---
```

`metadata.json`（リスティングフィールド、`SKILL.md` の隣）：

```json
{
  "skill_id": "social_post_ideas",
  "title": "Social Marketing：投稿アイデアパック",
  "one_liner": "ブランド情報を入力するだけで、ブランドに合った 20 の投稿アイデアとオープニングフックが即座に手に入る",
  "version": "1.0",
  "base_price": 0,
  "languages": ["ja", "en"],
  "category": ["marketing", "writing"],
  "script_mode": "workflow_only",
  "listing_description": "短いブランドブリーフを、それぞれオープニングフック付きの 20 のすぐ使える投稿アイデアに変換。",
  "cover": "assets/cover-social_post_ideas.png",
  "banner": "assets/banner-social_post_ideas.png"
}
```

`SKILL.md` body（公開コンテンツページ——`metadata.json.listing.*` で上書き可能）：

```markdown
# Social Marketing：投稿アイデアパック

> ブランド情報を入力するだけで、ブランドに合った 20 の投稿アイデアとオープニングフックが即座に手に入る

---

## What this skill does

マーケターがブランドに合ったソーシャル投稿アイデアを素早く生成するのを支援、魅力的なフックと複数の切り口付き。
個人起業家と小規模マーケティングチームに最適——コンテンツを頻繁に出す必要があるが、ネタ切れになりがちなチーム。
ブランド情報と目標を入力すれば、数分でそのまま使える 20 個の投稿方向性が手に入ります。

---

## Workflow

1. ブランド名、商品/サービス概要、ターゲットプラットフォーム（Instagram / LinkedIn / X など）を訊く
2. 投稿目標とコンテンツ制約（必須メッセージ、避けたい競合言及など）を確認
3. 20 個の投稿アイデアを生成、切り口別にグループ化（各アイデアにオープニングフック + 展開方向を含む）
4. ユーザーがリクエストしたら、すぐに公開できる完全な投稿ドラフトを 3 本提供

---

## What User needs to provide

- ブランド名と簡単な紹介（2–3 文）
- ターゲット層の描写
- ターゲットプラットフォーム（複数選択可）
- 投稿の口調（プロフェッショナル／カジュアル／ユーモア／インスピレーション等）
- 必須または避けたいキーワード／テーマ（任意）

---

## What User will receive

- 20 個の投稿アイデア（各アイデアに：オープニングフック + 展開角度を含む）
- （任意）すぐに公開できる完全な投稿ドラフト 3 本

---

## Known limitations

- ドラフトの品質はユーザーが提供するブランドの参考材料の詳しさに依存
- すべてのアイデアが特定プラットフォームの現アルゴリズム傾向に合うとは保証できない
```
