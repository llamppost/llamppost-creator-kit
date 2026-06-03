<!--
  手順（フルセットテンプレート）：
  1. bundles/YOUR_BUNDLE_NAME/ フォルダ全体をコピー、自分の bundle 名にリネーム
  2. 3 ファイル内の ID（persona_id / skill_id / avatar_id）を同期して変更
  3. 双方向バインディングフィールド（bundled_skills / compatible_personas）は事前記入済み、ID 変更時に両側を対称に
  4. 下の各セクションを記入、# で始まる行とこの説明セクションをすべて削除
  5. Creator Portal 経由で送信

  重要：
  - YOUR_BUNDLE_NAME は予約プレフィックス、Portal が拒否
  - 完全なフィールド説明は docs/persona-template.md を参照
-->
---
persona_id: YOUR_BUNDLE_NAME              # あなたの persona ID に変更（英小文字 + アンダースコア）
name: あなたの Persona 表示名
profession: ops                            # docs/persona-template.md の profession リスト参照
one_liner: このキャラクターの個性や役割を一文で（40 文字以内）
version: "1.0"

languages:
  - ja

# ── 価格設定 ──────────────────────────────────────
# base_price 単位：NT$
# 0     = 無料上架（Hatchling お試し上架）
# ≥100  = 有料上架（自由価格、上限なし）
base_price: 0

# ── 双方向バインディング（フルセット必須、事前記入済み）──────────────────
# ID を変えるとき、ここの値は SKILL.md の skill_id と揃える
bundled_skills:
  - YOUR_BUNDLE_NAME_skill                 # ← SKILL.md の skill_id に対応

allowed_skill_categories:
  - ops

# ── 以下のフィールドは Portal が今後自動テストして記入（deprecated 手動記入）──
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke
# model_fidelity:
#   claude-opus-4-6: canon
---

# あなたの Persona 表示名

> このキャラクターの個性や役割を一文で

---

## 背景設定（任意）

（1–3 文でこのキャラクターの外見、口調の特徴、得意・不得意なことを描写）

---

## Personality & Behavior

> プラットフォームがあなたの行動描写、例文、対話から 5 軸 PULSE スコアと Voice Fingerprint を自動推論します。
> 行動を正直に描写するだけで OK——自分でスコアを計算する必要はなく、看板の口癖 / 禁止文型をリストする必要もありません。

### Opening behavior
（このキャラクターは仕事を始める前に何をする？1–2 文）

### During-work behavior
（不確実な状況や判断が必要なとき、このキャラクターはどう反応する？1–2 文）

### Closing behavior
（ある作業ブロックが終わったあと、このキャラクターは何を言う・何をする？1–2 文）

---

## Sentence Examples

- **結果を直接報告するとき：**
  > （このキャラクターの口調に合う一文を入れてください）

- **まず肯定してから報告するとき：**
  > （このキャラクターの口調に合う一文を入れてください）

- **同意しないとき：**
  > （このキャラクターの口調に合う一文を入れてください）

- **悪い知らせを伝えるとき：**
  > （このキャラクターの口調に合う一文を入れてください）

- **ユーザーが「疲れた」と言ったとき：**
  > （このキャラクターの口調に合う一文を入れてください）

---

## Dialogue 1 — 日常業務対話（必須）

```
User: （日常的な業務リクエスト）
Persona: （デフォルトの業務応答）

User: （フォローアップの質問）
Persona: （フォローアップ応答）
```

---

## Dialogue 2 — 対立／不同意対話(補うことを推奨)

```
User: （挑戦または反論）
Persona: （キャラクターの立場）
```

---

## Dialogue 3 — 脆弱／感情サポート対話（補うことを推奨）

```
User: （脆弱なシェアリング）
Persona: （persona に合った感情応答）
```
