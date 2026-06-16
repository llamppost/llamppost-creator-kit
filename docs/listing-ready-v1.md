# 上架ガイド v1.5

言語：日本語 | [English](https://github.com/illushane/llamppost-creator-kit/blob/main/docs/listing-ready-v1.md) | [繁體中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-TW/docs/listing-ready-v1.md) | [简体中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-CN/docs/listing-ready-v1.md)

このガイドは最初の商品を公開するまでをステップバイステップで案内します。一度にすべてを準備する必要はありません——**まず 1 つ選んで始めましょう**。

> **AI でテンプレートを書きたい？** [docs/ai-prompts.md](ai-prompts.md) のすぐ使えるプロンプトを Claude / ChatGPT / Gemini にコピペしてください——Avatar / Skill / Persona / Agent の 4 種類があります。

---

## 重要：フォルダと ID は必ず英語

手を動かす前にこのセクションを読んでください——このルールに例外はありません。

私たちのシステムは**英語の識別子しか認識しません**。ペルソナやスキルの本文を繁体字中国語、日本語、その他どの言語で書いていても、以下の項目は必ず英語でなければなりません：

- すべての `*_id` フィールド（`skill_id`、`persona_id`、`avatar_id`、`creator` など）
- すべてのフォルダ名（`personas/<folder>`、`skills/<folder>`、`agents/<folder>`、`avatars/<folder>`）
- 形式の制限：**英小文字 + 数字 + アンダースコア（`_`）**——スペース、大文字、ハイフン（`-`）、非英語文字は使用不可

**例：**

| 正しい | 誤り |
|---------|---------|
| `persona_id: pi_lang` | `persona_id: 派狼` |
| `skills/weekly_report_writer/` | `skills/週報ジェネレーター/` |
| `agents/night_wolf_strategist/` | `agents/夜狼ストラテジスト/` |
| `avatar_id: night_wolf_001` | `avatar_id: Night-Wolf-001` |

ペルソナの**表示名**（YAML の `name` フィールド、例：`name: 派狼`）、すべての本文、対話、例文——これらはあなたのペルソナが実際に使う言語で書くことができますし、書くべきです。システムはフォルダ名と `*_id` フィールドのみを識別とルーティングに使うので、これらは必ず英語です。

**予約済みプレフィックス**：このキットには 2 種類の予約プレフィックスがあります。あなたの本番リスティングは**どちらも使用してはいけません**——Portal が拒否します：

- **`EXAMPLE_`**：参照用サンプルファイル、読み取り専用（例：`EXAMPLE_pi_lang`、`EXAMPLE_social_marketing_post_ideas`）——このフォルダはコピーしないでください。
- **`YOUR_`**：空白テンプレート（例：`YOUR_AGENT_NAME`、`YOUR_SKILL_NAME`）、コピーしてリネームするためのもの——コピー後、フォルダと `*_id` の両方を**必ず**あなた自身の英小文字 ID に変更してください。

---

## 2 種類の上架方法

### 単品上架

| | |
|---|---|
| **誰向け** | Persona、Skill、Avatar のうちどれか 1 つだけ作って様子を見たい人 |
| **テンプレート** | `personas/YOUR_AGENT_NAME/`、`skills/YOUR_SKILL_NAME/` のどちらか |
| **特徴** | 3 つは独立して公開可能、ユーザーは個別に入手 |

### Agent 上架（Persona + Skill + Avatar 三位一体）

| | |
|---|---|
| **誰向け** | 完全なキャラクター（人格 + 看板スキル + ビジュアル）を作り、1 つの Agent にまとめて売りたい人 |
| **テンプレート** | `agents/YOUR_AGENT_NAME/`（双方向バインディング事前記入済みの 3 ファイル + avatar/ サブフォルダ） |
| **特徴** | 一度に公開、双方向バインディング事前記入、Avatar 必須（なければ単品に分解するしかない） |
| **インキュベーターの出力** | Agent テンプレートのフォーマットと 1:1 で揃う、Avatar を補えば即上架可能 |

---

## 3 つのコアコンセプト

始める前に、llamppost で公開できる 3 種類の商品を理解しましょう：

### Persona
「これはどんな人か」を描写します——個性、口調、価値観、底線、そしてどんなタイプの仕事が得意か。ユーザーは Persona に基づいて、あなたのキャラクターとインタラクトするか決めます。

### Skill
「この人が具体的に何ができるか」を描写します——workflow、ユーザーが何を提供すべきか、何を受け取るか。Skill は単独販売も、Persona と 1 つの Agent にまとめて販売することも可能です。

### Avatar
「この人がどんな見た目か」を描写します——画像仕様と `metadata.json`、プラットフォーム上でのキャラクターのビジュアル表現を決定します。

単品上架では**そのうち 1 つだけ公開**できます。Agent 上架では 3 つすべて必須です。

---

## どこから始めればいい？

| あなたが持っているもの… | こちらから |
|-------------|-----------|
| はっきりした workflow やサービス | **単品 Skill** |
| 識別性のあるキャラクターの口調や個性 | **単品 Persona** |
| 完成したキャラクターイラスト | **単品 Avatar** |
| 人格 + 看板スキル + ビジュアル、3 つすべて揃ってる | **Agent（agents/）** |
| インキュベーターから出てきた雛形 | **Agent**（Avatar を補えば OK） |

---

## 単品 Skill を公開する

### ステップ 1：テンプレートフォルダをコピー

```
コピー：   skills/YOUR_SKILL_NAME/
リネーム： skills/your_skill_id/      ← 英小文字 + アンダースコア、例：skills/weekly_report_writer/
```

フォルダの中に `SKILL.md` が 1 つあります——このファイルだけ記入すれば OK。リネーム後、`SKILL.md` 内の `skill_id` もフォルダ名と完全に一致するよう変更してください。

### ステップ 2：YAML ヘッダーを記入

```yaml
---
skill_id: weekly_report_writer      ← あなたの skill ID に変更（英小文字 + アンダースコア）
title: 週報自動ジェネレーター         ← あなたの skill 名に変更
version: "1.0"
category:
  - writing                         ← メインカテゴリ（カテゴリリスト参照）
  - ops                             ← サブカテゴリ（任意）
one_liner: あなたの週次タスクリストを入力すると、構造化された週報ドラフトが自動で手に入る

languages:
  - zh-TW
  - en

base_price: 0                       ← NT$。0 = 無料；≥100 = 有料（自由設定）

script_mode: workflow_only          ← そのまま（スクリプト付属でない限り）

compatible_personas: []             ← 単品上架なら [] のまま
---
```

> **カテゴリリスト：** writing、research、coding、data、strategy、ops、sales、marketing、design、learning

### ステップ 3：本文セクションを記入

YAML の下に 5 つのセクションがあり、それぞれにコメントによる説明（`<!-- グレー文字 -->`）が付いています。記入後はコメントを削除して構いません。

**最重要の 2 セクション：**

「**What User needs to provide**」——できるだけ具体的に書いてください、ユーザーが何を準備すべきか分かるように。
「**What User will receive**」——数字を使ってください。「3 本のレポートドラフト」は「レポート内容」より説得力があります。

### ステップ 4：テンプレートコメントを削除、フォーマット確認、送信

```
- [ ] すべての必須 YAML フィールドが記入されている
- [ ] 5 つの本文セクションに実際の内容がある（テンプレートのデフォルト値ではない）
- [ ] 残ったコメントや説明文がない
- [ ] フォルダ名と skill_id が一致している
- [ ] base_price が 0 または ≥100
```

Creator Portal 経由で送信してください。

---

## 単品 Persona を公開する

### ステップ 1：テンプレートフォルダをコピー

```
コピー：   personas/YOUR_AGENT_NAME/
リネーム： personas/your_persona_id/  ← 英小文字 + アンダースコア
```

完全なフィールド説明は [persona-template.md](persona-template.md) を、完全な記入例は `personas/EXAMPLE_pi_lang/persona.md` を参照してください。

### ステップ 2：YAML ヘッダーを記入

```yaml
---
persona_id: kai_weekly_coach
name: Kai
profession: ops                    ← 1 つだけ選択（profession リスト参照）
one_liner: 頭の中の混沌を、実行可能な週次プランに変える
version: "1.0"

languages:
  - zh-TW
  - en

base_price: 0                      ← NT$。0 = 無料；≥100 = 有料

agent_skills: []                 ← 単品上架なら []

allowed_skill_categories:
  - ops
  - writing
---
```

> **Profession リスト：** life、pa、ops、people、sales、mktg、tech、strat、fitness_coach、life_coach、learning_coach、religion_mentor、intimacy_consultant、teacher_tutor、companion_partner、companion_ex

### ステップ 3：個性と行動、例文、対話例を記入

これが Persona のコアです。プラットフォームはあなたの behavior 描写と対話から「5 軸 PULSE スタイルスコア」と Voice Fingerprint を自動推論します。ユーザーはこれらを使ってフィルタリングとマッチングができ、プラットフォームも persona が異なる AI エンジン上でキャラ内に留まるかの検証に使います。

**自分でスコアや fingerprint を計算する必要はありません——インタラクション行動を正直に描写するだけ。対話部分は 1 段必須、残りの 2 段は補うことを推奨します**（補えば補うほど、シチュエーションが広いほど、プラットフォームの「cross-model 一貫性」評点が高くなります）。完全な構造は [persona-template.md](persona-template.md) を参照。

参考フォーマット：

```markdown
## Opening behavior
仕事を始める前に、Kai はまず今日の最重要 3 件を確認し、見落とされがちな潜在リスクを 1 つ指摘します。

## During-work behavior
要件が不明瞭なとき、Kai はまず仮説を投げて確認を求めます——相手に最初から説明させたりはしません。

## Closing behavior
1 つの作業ブロックが終わるたびに、Kai は能動的に「今日やったこと、次にやること」の簡潔なサマリーをまとめます。

## Sentence examples
- 結果を直接報告：「終わった。ここに 3 件、もう一度確認したほうがいいかも：……」
- まず肯定してから報告：「方向ははっきりしてる。あなたの考えに基づいて、こんな調整をしました：……」
- 同意しないとき：「あなたの考えは理解した。ただ 1 つ確認しておきたいことがある：……」
- 悪い知らせを伝える：「ちょっと知っておいてほしい状況がある、ただバックアップも用意した：……」
- ストレスへの応答：「今かなりストレスかかってる感じだね。まず今日いちばん急ぐことから並べていこうか？」
```

### ステップ 4：Creator Portal 経由で送信

---

## 単品 Avatar を公開する

### ステップ 1：画像を準備

- ファイル名：`avatar.png`
- サイズ：最小 512×512、推奨 1024×1024
- フォーマット：PNG、1:1

### ステップ 2：metadata.json を準備

完全な schema とポリシーは [avatar-creation-spec.md](avatar-creation-spec.md) を参照。

### ステップ 3：Creator Portal 経由で送信

---

## Agent（Persona + Skill + Avatar）を公開する

### ステップ 1：Agent テンプレートフォルダをコピー

```
コピー：   agents/YOUR_AGENT_NAME/
リネーム： agents/your_agent_name/   ← 英小文字 + アンダースコア
```

中には事前にパッケージング済み：

```
agents/your_agent_name/
├── README.md            ← Agent の使い方
├── persona.md           ← agent_skills が同フォルダ SKILL.md を指す形で事前記入
├── SKILL.md             ← compatible_personas が同フォルダ persona.md を指す形で事前記入
└── avatar/
    ├── README.md        ← Avatar 補足説明
    └── metadata.json    ← placeholder 記入済み
```

### ステップ 2：3 ファイルの ID を同期して変更（必ず対応）

| ファイル | 変更するフィールド | 例 |
|------|-----------|------|
| `persona.md` | `persona_id` | `night_wolf_strategist` |
| `SKILL.md` | `skill_id` | `night_wolf_strategist_skill` |
| `avatar/metadata.json` | `avatar_id` | `night_wolf_strategist_001` |

**3 つに同じ base name をプレフィックスに使うことを推奨**——1 セットの商品に見えるように。

### ステップ 3：双方向バインディングを揃える

`persona.md` の `agent_skills:` と `SKILL.md` の `compatible_personas:` は対称でなければなりません。Portal が検証します——片方間違えれば拒否されます。テンプレートは事前記入済み、ID を変更するときは両側を同期：

```yaml
# persona.md
persona_id: night_wolf_strategist
agent_skills:
  - night_wolf_strategist_skill   ← SKILL.md の skill_id に対応

# SKILL.md
skill_id: night_wolf_strategist_skill
compatible_personas:
  - night_wolf_strategist          ← persona.md の persona_id に対応
```

### ステップ 4：Avatar を補う

`avatar/` フォルダはデフォルトで画像なし：

- あなたの `avatar.png`（最低 512×512）を `avatar/` に配置
- `avatar/metadata.json` を編集して `traits`、`universe`、`realm`、`rights` などのフィールドを記入
- 完全な仕様と著作権ポリシーは [avatar-creation-spec.md](avatar-creation-spec.md) を参照

> **Avatar の準備がなくて、まず様子を見たい？** `persona.md` と `SKILL.md` をそれぞれ `personas/` と `skills/` フォルダに移して、別々の単品として上架してください。Avatar を準備してから Agent として再上架。

### ステップ 5：Creator Portal 経由で送信

最終チェック：

```
- [ ] 3 つの ID すべてがフォルダ名と対応している
- [ ] 双方向バインディングの両側が揃っている（agent_skills ↔ compatible_personas）
- [ ] persona.md / SKILL.md / avatar/metadata.json すべて記入完了
- [ ] avatar/ 内に avatar.png がある（placeholder ではない）
- [ ] 3 ファイルが同じキャラクターのように読める（口調、設定一致）
- [ ] base_price が 0 または ≥100
```

---

## FAQ

**Q：公開前にどのくらいテストが必要？**
プラットフォームが今後自動で cross-model QA を走らせて fidelity ラベルとテストレベルを出力します。今は自分でテストの厳密性を宣言する必要はありません——アップロードすれば OK。

**Q：複数の Skill を同時に公開できる？**
できます。各 Skill は独立したフォルダとファイルで、お互いに干渉しません。

**Q：Persona には必ず Avatar が必要？**
単品上架では不要、Agent 上架では 3 つすべて必須。

**Q：公開後にコンテンツを更新できる？**
できます。更新後 Creator Portal 経由で再送信、`version` を上げてください（例：`"1.0"` → `"1.1"`）。

**Q：なぜ `base_price` に 1–99 が入れられない？**
マーケットプレイスの価格シグナルを明瞭に保つためです。無料お試し上架（`0`）にするか、最低 NT$ 100 から始めるか、どちらかです。
