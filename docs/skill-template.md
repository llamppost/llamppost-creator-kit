# Skill テンプレートドキュメント（v1.5）

言語：日本語 | [English](https://github.com/illushane/llamppost-creator-kit/blob/main/docs/skill-template.md) | [繁體中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-TW/docs/skill-template.md) | [简体中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-CN/docs/skill-template.md)

このドキュメントは Skill テンプレートの記入方法を説明します。実際に編集するファイルは、上架方法によって変わります：

- **単品上架**：`skills/YOUR_SKILL_NAME/` をコピー → リネーム → 中の `SKILL.md` を記入
- **フルセット上架**（Persona + Skill + Avatar 三位一体）：`bundles/YOUR_BUNDLE_NAME/` をコピー → 中の `SKILL.md` は双方向バインディング事前記入済み

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
- **`YOUR_`**：空白テンプレート（`YOUR_SKILL_NAME/`、`YOUR_BUNDLE_NAME/`）、コピーしてリネームするためのもの——コピー後、フォルダと `skill_id` の両方を**必ず**あなた自身の英小文字 ID に変更してください。

---

## クイックリファレンス

| フィールド | 位置 | 必須 | 説明 |
|-------|----------|----------|-------------|
| `skill_id` | YAML | はい | 一意 ID、小文字 + アンダースコア |
| `title` | YAML | はい | 表示名、40 文字以内 |
| `version` | YAML | はい | `"1.0"` から開始 |
| `category` | YAML | はい | 最大 2 カテゴリ |
| `one_liner` | YAML | はい | 一文ピッチ、60 文字以内 |
| `languages` | YAML | はい | skill が動作する言語の BCP-47 コード |
| `base_price` | YAML | はい | NT$、`0`（無料）または `≥100` |
| `script_mode` | YAML | はい | 下の説明を参照 |
| `compatible_personas` | YAML | フルセット必須、単品は任意 | バインディング対象の Persona ID |
| What this skill does | Body | はい | 3–5 文の説明 |
| Workflow | Body | はい | 3–7 ステップ |
| What User needs to provide | Body | はい | 箇条書き |
| What User will receive | Body | はい | 箇条書き |
| Known limitations | Body | はい | 箇条書き |
| Script | Body | 任意 | script_spec / script_provided のときのみ記入 |
| `tested_runtimes` / `tested_models` / `test_level` | YAML | deprecated | Portal が今後自動テストして記入 |

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

### `compatible_personas`（フルセット必須、単品は任意）

この skill をある Persona とバンドル販売したい場合、ペアリングする `persona_id` をここにリストしてください。Portal は各 persona の `bundled_skills` フィールドにもこの skill がリストされているかを検証します——両側が一致している必要があります。

```yaml
compatible_personas:
  - kai_weekly_coach
```

この skill が単独販売の場合、このフィールドは省略するか `[]` に設定できます。

> **フルセットテンプレート：** 完全なフルセット（Persona + Skill + Avatar）を上架するなら、`bundles/YOUR_BUNDLE_NAME/` テンプレートを使ってください——双方向バインディングが事前に記入済みで、2 つの単品フォルダを行き来して揃えるよりずっと簡単です。

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

```yaml
---
skill_id: social_post_ideas
title: Social Marketing：投稿アイデアパック
version: "1.0"
category:
  - marketing
  - writing
one_liner: ブランド情報を入力するだけで、ブランドに合った 20 の投稿アイデアとオープニングフックが即座に手に入る

languages:
  - zh-TW
  - en

base_price: 0

script_mode: workflow_only

compatible_personas: []
---
```

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
