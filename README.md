# llamppost クリエイターキット（Creator Kit）

<img src="assets/llamppost_webicon.svg" alt="llamppost" width="96" />

llamppost マーケットプレイスで、あなたの Persona、Skill、Avatar を作成して公開しましょう。

---

## 重要：フォルダと ID は必ず英語

私たちのシステムは**英語の識別子しか認識しません**。ペルソナやスキルの本文を日本語、繁体字中国語、その他どの言語で書いていても、以下の項目は必ず英語でなければなりません：

- すべての `*_id` フィールド（`skill_id`、`persona_id`、`avatar_id`、`creator` など）
- すべてのフォルダ名（`personas/<folder>`、`skills/<folder>`、`avatars/<folder>`）
- 形式の制限：**英小文字 + 数字 + アンダースコア（`_`）**——スペース、大文字、ハイフン（`-`）、非英語文字は使用不可

**例：**

| 正しい | 誤り |
|---------|---------|
| `persona_id: pi_lang` | `persona_id: 派狼` |
| `skills/weekly_report_writer/` | `skills/週報ジェネレーター/` |
| `avatar_id: night_wolf_001` | `avatar_id: Night-Wolf-001` |

ペルソナの**表示名**（YAML の `name` フィールド、例：`name: 派狼`）、すべての本文、対話、例文、Voice Fingerprint のシグネチャフレーズ——これらはあなたのペルソナが実際に話している言語で書くことができますし、書くべきです。システムはフォルダ名と `*_id` フィールドのみを識別とルーティングに使うので、これらは英語でなければなりません。

**予約済みプレフィックス**：このキットには 2 種類の予約プレフィックスがあります。あなたの本番リスティングは**どちらも使用してはいけません**——Portal が拒否します：

- **`EXAMPLE_`**：参照用サンプルファイル、読み取り専用（例：`EXAMPLE_pi_lang`、`EXAMPLE_social_marketing_post_ideas`）——このプレフィックス付きのフォルダはコピーしないでください。
- **`YOUR_`**：コピーしてリネームするための空白テンプレート（例：`YOUR_AGENT_NAME`、`YOUR_SKILL_NAME`）——コピー後、フォルダと `*_id` の両方を**必ず**あなた自身の英小文字 ID に変更してください。

---

## 言語

- 日本語：このページ
- English：[README.md](https://github.com/illushane/llamppost-creator-kit/tree/main)
- 繁體中文：[README.md](https://github.com/illushane/llamppost-creator-kit/tree/zh-TW)
- 简体中文：[README.md](https://github.com/illushane/llamppost-creator-kit/tree/zh-CN)

---

## はじめての方へ

**[→ 上架ガイド v1](docs/listing-ready-v1.md)**

このガイドは 3 つのコアコンセプト、どこから始めればいいか、各ステップの進め方を説明します。

**[→ AI 補助でテンプレートを書くためのプロンプト集](docs/ai-prompts.md)**

Claude、ChatGPT、その他の AI アシスタントにテンプレートを書いてもらいたい場合、このファイルには 4 種類のすぐ使えるプロンプトが用意されています——Avatar のみ / Skill のみ / Persona のみ / Agent——コピペで即使えます。

---

## クイックナビ

| やりたいこと | 行き先 |
|-----------|--------|
| Skill / Persona / Avatar の違いを理解する | [上架ガイド](docs/listing-ready-v1.md) |
| 新しい Skill を作る（単品） | `skills/YOUR_SKILL_NAME/` をコピーして、[Skill テンプレートドキュメント](docs/skill-template.md)を参照 |
| 新しい Persona を作る（単品） | `personas/YOUR_AGENT_NAME/` をコピーして、[Persona テンプレートドキュメント](docs/persona-template.md)を参照 |
| Avatar 画像と metadata をアップロードする | [Avatar 仕様とポリシー](docs/avatar-creation-spec.md)を参照 |
| Agent（Persona + Skill + Avatar）を上架する | `agents/YOUR_AGENT_NAME/` をコピー、双方向バインディングは事前に記入済み |
| AI 補助でテンプレートを書く | [AI プロンプト集](docs/ai-prompts.md)（コピペで即使用） |
| プラットフォームルールを読む | [プラットフォームポリシー](policy/policy.ja.md) |

---

## 単品 vs Agent

- **単品上架**：Persona、Skill、Avatar のうちどれか 1 つを公開。お試しで様子を見たいとき、または 1 つだけ完成しているときに向いています。
- **Agent 上架**：Persona + Skill + Avatar の 3 つを 1 つの Agent にまとめます。双方向バインディングは事前に記入済み、ユーザーは完成したキャラクター商品を一度に入手できます。**インキュベーターが吐き出すフォーマットは Agent テンプレートと 1:1 で揃っています**——Avatar を補えばすぐ上架できます。

---

## マーケットでの機能（Kit ファイルではなく Portal で操作）

これらは Creator Portal で公開するときに操作します。Kit ファイルの変更は不要です：

- **商品サムネイル**：任意のサムネイル（PNG、16:10 推奨）をアップロードでき、マーケットのカードと商品ページに表示されます。アップロードしない場合は、自動生成された頭文字のプレースホルダーが表示されます。
- **公開コンテンツページ**：SKILL.md の本文セクションが、購入者が商品ページで読むコンテンツページとしてレンダリングされます。しっかり書いてください。
- **いつでも編集＋スキルパック**：公開済み商品のコンテンツページ、サムネイル、名前、説明はいつでも編集でき、公開済みの skill を複数まとめて**スキルパック**にもできます——すべて Studio →「我的上架（マイ出品）」で操作します。

詳細は[上架ガイド](docs/listing-ready-v1.md)を参照してください。

---

## フォルダ構成

```
creator-kit/
├── docs/
│   ├── listing-ready-v1.md      # 上架ガイド（ここから始める）
│   ├── ai-prompts.md            # AI 補助でテンプレートを書くためのプロンプト集
│   ├── skill-template.md        # Skill テンプレートドキュメント
│   ├── persona-template.md      # Persona テンプレートドキュメント
│   └── avatar-creation-spec.md  # Avatar 仕様とポリシー
├── personas/                                # 単品 Persona
│   ├── YOUR_AGENT_NAME/                    # 空白テンプレート——コピーしてリネームし、自分の Persona を作る
│   │   └── persona.md
│   └── EXAMPLE_pi_lang/                    # 参照用サンプル Persona（このフォルダ名はコピーしないでください）
│       └── persona.md
├── skills/                                  # 単品 Skill
│   ├── YOUR_SKILL_NAME/                    # 空白テンプレート——コピーしてリネームし、自分の Skill を作る
│   │   ├── SKILL.md
│   │   └── examples/
│   └── EXAMPLE_social_marketing_post_ideas/  # 参照用サンプル Skill（このフォルダ名はコピーしないでください）
│       └── SKILL.md
├── agents/                                  # Agent（Persona + Skill + Avatar 三位一体）
│   └── YOUR_AGENT_NAME/                    # Agent テンプレート——双方向バインディング事前記入済み
│       ├── README.md                       # Agent の使い方
│       ├── persona.md                      # Persona（バインディングは同フォルダの SKILL.md を指す）
│       ├── SKILL.md                        # Skill（バインディングは同フォルダの persona.md を指す）
│       └── avatar/                         # Avatar（必須）
│           ├── README.md
│           └── metadata.json               # placeholder 記入済み——あなたの avatar.png を配置してください
├── policy/
│   └── policy.ja.md             # プラットフォームポリシー
└── assets/
    └── llamppost_webicon.svg
```

---

## ライセンス

All rights reserved.
