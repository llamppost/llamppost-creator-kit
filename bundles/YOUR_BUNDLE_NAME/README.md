# フルセット上架（Bundle）

> 「フルセット」= Persona + Skill + Avatar の 3 つをパッケージ、ユーザーは一度に完成したキャラクター商品を入手できます。

このフォルダはフルセット上架の空白テンプレートです。**インキュベーターが出力するフォーマットはこの構造と 1:1 で揃っています**——インキュベーターが走り終わって吐き出すのはこの形そのものです、ただし `avatar/` はデフォルトで空、あなた自身の `avatar.png` を補わないとフルセット上架はできません。

---

## フルセット vs 単品

| | フルセット（このフォルダ） | 単品 |
|---|---|---|
| 内容 | Persona + Skill + Avatar（3 つ必須） | Persona、Skill、Avatar から 1 つ |
| 双方向バインディング | 事前にバインド済み、ユーザーは一度にインストール | 適用外 |
| 適したシチュエーション | 完成したキャラクター（人格 + 看板スキル + ビジュアル）ができた | そのうち 1 つだけ作って様子を見たい |
| テンプレート位置 | `bundles/YOUR_BUNDLE_NAME/` | `personas/YOUR_AGENT_NAME/`、`skills/YOUR_SKILL_NAME/` |

---

## 始め方

### 1. このフォルダ全体をコピーしてリネーム

```
コピー：   bundles/YOUR_BUNDLE_NAME/
リネーム： bundles/your_bundle_name/    ← 英小文字 + アンダースコア
```

例：`bundles/night_wolf_strategist/`

### 2. 3 ファイル内の ID を変更（必ず対応）

- `persona.md` 内の `persona_id`
- `SKILL.md` 内の `skill_id`
- `avatar/metadata.json` 内の `avatar_id`

**3 つに同じ base name をプレフィックスに使うことを推奨**、1 セットに見せるため：

| ファイル | サンプル ID |
|------|---------|
| `persona.md` | `persona_id: night_wolf_strategist` |
| `SKILL.md` | `skill_id: night_wolf_strategist_skill` |
| `avatar/metadata.json` | `avatar_id: night_wolf_strategist_001` |

### 3. 双方向バインディング — 事前記入済み、ID 変更時に両側を同期

`persona.md` の `bundled_skills:` と `SKILL.md` の `compatible_personas:` は対称でなければなりません。Portal が検証します——片方間違えれば拒否されます。

```yaml
# persona.md
persona_id: night_wolf_strategist
bundled_skills:
  - night_wolf_strategist_skill   ← SKILL.md の skill_id に対応

# SKILL.md
skill_id: night_wolf_strategist_skill
compatible_personas:
  - night_wolf_strategist          ← persona.md の persona_id に対応
```

### 4. Avatar を補う

`avatar/` フォルダはデフォルトで `metadata.json` placeholder のみ、**画像なし**。

- あなたの `avatar.png`（最低 512×512、推奨 1024×1024、PNG）を `avatar/` に配置
- `avatar/metadata.json` を編集して `traits`、`universe`、`realm`、`rights` などのフィールドを記入
- 完全な仕様は [`docs/avatar-creation-spec.md`](../../docs/avatar-creation-spec.md) を参照

### 5. 内容を記入、確認、送信

- 3 ファイルにそれぞれ内容を記入
- 3 つの口調、設定、世界観は必ず一致——同じキャラクターのように読めること
- Creator Portal 経由で送信

---

## インキュベーターが出力したフルセット

インキュベーターからフルセット雛形を受け取った場合：

1. `bundles/<あなたの_bundle_name>/` に展開
2. 主要フィールド（行動描写、例文、対話、workflow）は事前記入済み——口調を「あなたの」キャラクターらしく調整するだけ
3. `avatar/` は空、`avatar.png` を補う必要あり
4. 双方向バインディングは事前に書かれている、ID を自分の英小文字名に変えるだけ

Avatar を補わずまず様子を見たい？`persona.md` と `SKILL.md` をそれぞれ `personas/` と `skills/` フォルダに移して、単品として上架してください。
