---
# ── 実行アイデンティティ + 価格（これらは frontmatter に残す）─────
# マーケット「リスティング表示」のフィールド——title、one_liner、category、
# languages、version、script_mode、listing_description、cover/banner——は
# すべて metadata.json（同フォルダ）に移動しました。この SKILL.md は実行 skill 本体です。
skill_id: YOUR_SKILL_NAME        # あなたの skill ID——英小文字 + アンダースコア（例：social_post_ideas）。フォルダ名と完全一致必須。

# base_price 単位：NT$  ·  0 = 無料上架（Hatchling お試し）  ·  ≥100 = 有料上架（自由価格、上限なし）
base_price: 0
---

<!--
  手順：
  1. skills/YOUR_SKILL_NAME/ フォルダ全体をコピー
  2. フォルダをあなたの skill_id にリネーム——**英小文字 + アンダースコア必須**（例：skills/social_post_ideas/）
  3. 上の skill_id をフォルダ名と完全に一致するよう変更
  4. metadata.json に「リスティングフィールド」を記入——title / one_liner / category /
     languages / version / script_mode / listing_description、および listing.* ブロック。
     さらに cover-<skill_id>.png（1:1）と banner-<skill_id>.png（16:10）を assets/ に配置。
  5. 下の各セクションを記入——これは実行 skill の内容であり、公開コンテンツページにも表示されます。
     （metadata.json で listing.* を設定すると「What this skill does / receive / limitations」の文言を上書きします。）
  6. この説明セクションを削除して、Creator Portal 経由で送信

  重要：
  - skill_id とフォルダ名は**必ず英語**（小文字 + 数字 + アンダースコア）で、両者は完全一致
  - YOUR_SKILL_NAME は予約プレフィックス、このプレフィックスを含む上架は Portal が拒否
  - リスティングフィールドは metadata.json にあります——完全な説明は docs/skill-template.md を参照
-->

# {{title}}

> {{one_liner}}

---

## What this skill does

<!--
  3–5 文でこの skill が何をするか、誰に向いてるか、どんな問題を解決するかを説明。
  「ユーザーが得られる価値」にフォーカス——AI やモデルに触れる必要なし。
-->

（ここに skill の用途を 3–5 文で描写してください）

---

## Workflow

<!--
  3–7 ステップを列挙して、この skill がどう動くかを説明。
  各ステップ 1 文、動詞から始める。
-->

1. （ステップ 1）
2. （ステップ 2）
3. （ステップ 3）

---

## What User needs to provide

<!--
  ユーザーが開始前に準備しておくべきものをリストアップ。
  できるだけ具体的に書く、ユーザーが何を準備すべきか分かるように。
-->

- （必須インプット 1）
- （必須インプット 2）
- （任意インプット——「任意」と明示）

---

## What User will receive

<!--
  ユーザーが受け取る具体的な納品物をリストアップ。
  数字とフォーマットが明確なほど説得力がある。「3 本の完全ドラフト」は「レポート内容」より説得力がある。
-->

- （納品物 1）
- （納品物 2）

---

## Known limitations

<!--
  正直に現在の制限をリストアップ。ユーザーの期待値を設定でき、返金/紛争リスクも下げられる。
-->

- （制限 1）
- （制限 2）

---

## Script（任意）

<!--
  このセクションは script_mode（metadata.json で設定）が script_spec または script_provided のときのみ記入。
  script_mode が workflow_only なら、このセクション全体を削除可能。
-->

### Goal
（このスクリプトが達成する目標）

### Steps
1. （スクリプトステップ 1）
2. （スクリプトステップ 2）

### APIs / Tools used
- （API またはツール名）

### Required environment variables（Secrets）
<!--
  key 名のみリストアップ——**絶対に**実際の値を書かないでください。
-->
- （ENV_KEY_NAME）

### Safety notes
- （何らかのセキュリティ制限やリスクリマインダー）

### Verification
- （このスクリプトが正常に実行されたかをどう確認するか）
