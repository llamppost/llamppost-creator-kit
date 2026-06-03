---
skill_id: YOUR_SKILL_NAME        # あなたの skill ID に変更（英小文字 + アンダースコア必須、例：social_post_ideas）
title: あなたの Skill の表示名     # ユーザーが検索結果で見る名前（40 文字以内、どの言語でも可）
version: "1.0"
category:
  - writing                       # メインカテゴリ（必須、リストから 1 つ選択）
  # - research                    # サブカテゴリ（任意、最大もう 1 つ選択）
one_liner: この skill がユーザーのどんな問題を解決するかを一文で（60 文字以内）

languages:                        # この skill が実際に動作する言語（BCP-47 コード、必須）
  - ja
  # - en

# ── 価格設定 ──────────────────────────────────────
# base_price 単位：NT$
# 0     = 無料上架（Hatchling お試し上架）
# ≥100  = 有料上架（自由価格、上限なし）
base_price: 0

# ── 以下のフィールドは Portal が今後自動テストして記入 ────────────
# 今は未記入でも、デフォルト値でも構いません。記入したらプラットフォームは
# あなたの宣言を初期参考にしますが、すべての fidelity / test ラベルは
# 最終的に Portal の自動テスト結果が優先されます。
# deprecated（手動記入）→ Portal cross-model QA が自動で上書き
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke               # smoke | qa | prod_ready

script_mode: workflow_only        # workflow_only（説明のみ）| script_spec（仕様）| script_provided（スクリプト付属）

compatible_personas: []           # 任意。この skill がバインドする persona ID——standalone 販売なら [] のままで OK
---

<!--
  手順：
  1. skills/YOUR_SKILL_NAME/ フォルダ全体をコピー
  2. フォルダをあなたの skill_id にリネーム——**英小文字 + アンダースコア必須**（例：skills/social_post_ideas/）
  3. 上の YAML の skill_id をフォルダ名と完全に一致するよう変更
  4. 上の他の YAML フィールドを記入、# で始まる行はすべて削除
  5. 下の各セクションを記入
  6. この説明セクションを削除して、Creator Portal 経由で送信

  重要：
  - skill_id とフォルダ名は**必ず英語**（小文字 + 数字 + アンダースコア）
  - YOUR_SKILL_NAME は予約プレフィックス、このプレフィックスを含む上架は Portal が拒否
  - 完全なフィールド説明は docs/skill-template.md を参照
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
  このセクションは script_mode が script_spec または script_provided のときのみ記入。
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
