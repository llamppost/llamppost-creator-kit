# Avatar 仕様とポリシー（v1）

言語：日本語 | [English](../../en/docs/avatar-creation-spec.md) | [繁體中文](../../zh-TW/docs/avatar-creation-spec.md) | [简体中文](../../zh-CN/docs/avatar-creation-spec.md)

Avatar を公開するには 2 つのものが必要です：**画像ファイル（avatar.png）** と **メタデータファイル（metadata.json）**。

---

## 重要：フォルダと avatar_id は必ず英語

私たちのシステムは**英語の識別子しか認識しません**。キャラクター名や説明が日本語、繁体字中国語、その他のどの言語であっても、以下の項目は**必ず英語**でなければなりません：

- `avatar_id` フィールド
- `creator` フィールド
- 作成する avatar フォルダ名（`avatars/<your_avatar_id>/`）
- 形式の制限：**英小文字 + 数字 + アンダースコア（`_`）**——スペース、大文字、ハイフン（`-`）、非英語文字は使用不可

**例：**

| 正しい | 誤り |
|---------|---------|
| `avatar_id: pi_lang_001` | `avatar_id: 派狼_001` |
| `avatars/night_wolf_001/` | `avatars/Night-Wolf-001/` |
| `creator: shane_lin` | `creator: 林申` |

`metadata.json` の `traits` オブジェクトの内容、`collection` 名、キャラクター関連の記述はどの言語でも使用できますが、`avatar_id`、`creator`、フォルダ名は英語でなければなりません。

**予約済みプレフィックス**：このキットには 2 つの予約プレフィックスがあります。あなたの本番リスティングは**どちらも使用してはいけません**——Portal はそれらを拒否します：

- **`EXAMPLE_`**：参照用サンプルファイル、読み取り専用——このプレフィックスのついたフォルダはコピーしないでください。
- **`YOUR_`**：コピーしてリネームするために設計された空白テンプレート——コピー後、フォルダと `avatar_id` の両方を**必ず**あなた自身の英小文字 ID に変更してください。

---

## クイックチェックリスト

提出前に、以下の項目がすべて完了していることを確認してください：

- [ ] `avatar.png` は最低 512×512、推奨 1024×1024
- [ ] `metadata.json` にすべての必須フィールドが含まれている
- [ ] `avatar_id` はあなたの creator ID に対応している（他の Avatar と重複しない）
- [ ] 画像はあなたのオリジナル作品、または有効なライセンス文書を保有している
- [ ] `universe` と `realm` フィールドに著作権保護された IP 名が含まれていない
- [ ] 画像に未成年者の性的なコンテンツが含まれていない

---

## A) 画像要件

| 項目 | 仕様 |
|------|------|
| ファイル名 | `avatar.png`（固定、変更不可） |
| 最小サイズ | 512 × 512 px |
| 推奨サイズ | 1024 × 1024 px |
| 形式 | PNG（将来 APNG に対応する可能性あり） |
| アスペクト比 | 正方形（1:1） |

> **注意：** アニメーション形式（APNG）を提出する場合、一部の AI インターフェースでは静的な最初のフレームのみが表示されることがあります。静的バージョンも準備しておくことを推奨します。

---

## B) metadata.json 仕様

`avatar.png` と同じフォルダに配置し、ファイル名は `metadata.json` で固定します。

> **これは avatar schema——listing manifest ではありません。** Avatar の `metadata.json`（`avatar_id`、`collection`、`traits`、`rights` など）は、単品の Skill / Persona が使う listing `metadata.json`（`title` / `name`、`cover`、`banner`、`listing.*`）とは無関係です。互いに貼り違えないでください。Avatar には別途の cover/banner はありません——正方形 1:1 の `avatar.png` 自体が画像です。

### 完全な例

```json
{
  "avatar_id": "kai_001",
  "collection": "weekday_workers",
  "listing_description": "あなたのショートストーリーにキャスティングできる、平日のオフィスワーカー——落ち着いていて、少し疲れていて、頼りになる。",
  "species": "human",
  "universe": "modern",
  "realm": "earth",
  "base": "original",
  "traits": {
    "hair": "short_dark",
    "style": "smart_casual",
    "expression": "focused",
    "accessory": "glasses"
  },
  "rights": {
    "source": "original",
    "creator": "your_creator_id",
    "license": "llamppost_standard"
  }
}
```

### フィールドリファレンス

**必須フィールド：**

| フィールド | 型 | 説明 |
|-------|------|-------------|
| `avatar_id` | string | 一意の ID、小文字 + アンダースコア、命名後は変更不可 |
| `collection` | string | この Avatar が属するシリーズ（あなた自身で命名） |
| `listing_description` | string | マーケットのリスティングに表示される 2〜3 文の商品説明。購入者が得られるもの＋キャラの雰囲気。空欄にしない。 |
| `species` | string | キャラクターの種族、例：`human`、`robot`、`animal`、`spirit` |
| `universe` | enum | 世界設定（下の Enum リスト参照） |
| `realm` | enum | 所属領域（下の Enum リスト参照） |
| `base` | string | `original` またはライセンスされた IP 名 |
| `traits` | object | ビジュアル特徴（自由な key-value、最低 1 つ） |
| `rights` | object | 著作権情報（下記参照） |

**Enum リスト：**

`universe`（世界設定）：

| 値 | 説明 |
|-------|-------------|
| `modern` | 現代世界（同時代設定） |
| `ancient` | 古代世界（歴史的またはファンタジー古代） |
| `future` | 未来世界（SF、サイバーパンクなど） |
| `alternate` | 並行世界（異世界、転生など） |

`realm`（領域）：

| 値 | 説明 |
|-------|-------------|
| `earth` | 地球／人間界 |
| `outer_space` | 宇宙 |
| `heaven` | 天界／神界 |
| `hell` | 冥界／地獄 |

**`rights` オブジェクトフィールド：**

| フィールド | 説明 |
|-------|-------------|
| `source` | `original` または `licensed` または `public_domain` |
| `creator` | あなたの creator ID |
| `license` | `llamppost_standard`（ほとんどの場合これを使用） |

---

## C) 著作権ポリシー

### オリジナル作品

画像があなたのオリジナル作品（著作権を完全に保有する委託作品を含む）である場合、`base` を `original` に、`rights.source` を `original` に設定してください。

### 保護された IP の使用

あなたの Avatar が既存の IP（漫画キャラクター、ゲームキャラクター、映画キャラクターなど）に基づいている場合：

1. `base` フィールドをその IP 名に設定します（例：`"base": "my_licensed_ip"`）
2. 提出時にライセンス文書を添付する必要があります
3. `universe` と `realm` フィールドには **IP 名を直接書かないでください**

> 例：ある IP のライセンスを保有している場合、`base` をその IP 名に設定しますが、`universe` は引き続き `modern` / `ancient` などを記入してください——その IP の世界名を書かないでください。

### パブリックドメイン

キャラクターがパブリックドメイン（歴史上の人物、古典神話など）に由来する場合、`rights.source` を `public_domain` に設定し、`traits` でキャラクターの出典を明記してください。

---

## D) 未成年者保護ポリシー

**ゼロトレランス。**

未成年者の性的なコンテンツを含む Avatar は、理由を問わず直ちに削除され、クリエイターのアカウントは終了されます。

キャラクターの年齢が曖昧な場合、ビジュアル表現は成人をデフォルトにしてください。

---

## フォルダ構造の例

```
avatars/
  kai_001/
    avatar.png
    metadata.json
```

各 Avatar は独自のフォルダを使用し、フォルダ名は `avatar_id` と一致します。
