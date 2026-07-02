# Agent 上架

> 「Agent」= Persona + Skill + Avatar 三者打包成一個 Agent，使用者一次入手完整角色商品。

這份資料夾是 Agent 上架的空白模板。**孵化器產出的格式跟這份結構 1:1 對齊**——孵化器跑完丟出來的就是這個樣子，只是 `avatar/` 預設是空的，你需要補上自己的 `avatar.png` 才能以 Agent 上架。

> **注意——Agent 不使用 listing `metadata.json` 慣例。** 跟單品 Skill / Persona 不同，Agent 的上架欄位（title、one_liner、category、name、languages、version、listing_description 等）留在 `persona.md` 與 `SKILL.md` 的 **frontmatter**。Agent bundle 裡**唯一**的 `metadata.json` 是 `avatar/metadata.json`，用的是 **avatar schema**。不要在 Agent 根目錄加 listing `metadata.json` 或 `assets/` 的 cover/banner。

---

## Agent vs 單品

| | Agent（這個資料夾） | 單品 |
|---|---|---|
| 內容 | Persona + Skill + Avatar（三者必備） | Persona、Skill、Avatar 任選一 |
| 雙向綁定 | 預先綁好，使用者一次安裝 | 不適用 |
| 適合場景 | 你做了一個完整角色（人格 + 招牌技能 + 視覺） | 你只有其中一件想試水溫 |
| 模板位置 | `agents/YOUR_AGENT_NAME/` | `personas/YOUR_AGENT_NAME/`、`skills/YOUR_SKILL_NAME/` |

---

## 怎麼開始

### 1. 複製這整個資料夾並改名

```
複製：   agents/YOUR_AGENT_NAME/
改名：   agents/your_agent_name/    ← 英文小寫 + 底線
```

例如：`agents/night_wolf_strategist/`

### 2. 改三份檔案內的 ID（必須對應）

- `persona.md` 裡的 `persona_id`
- `SKILL.md` 裡的 `skill_id`
- `avatar/metadata.json` 裡的 `avatar_id`

**建議用同一個 base name 當前綴**，讓三者看起來是一組：

| 檔案 | 範例 ID |
|------|---------|
| `persona.md` | `persona_id: night_wolf_strategist` |
| `SKILL.md` | `skill_id: night_wolf_strategist_skill` |
| `avatar/metadata.json` | `avatar_id: night_wolf_strategist_001` |

### 3. 雙向綁定 — 已預填，改 ID 時兩邊要同步

`persona.md` 的 `agent_skills:` 與 `SKILL.md` 的 `compatible_personas:` 必須對稱。Portal 會驗證——錯一邊就拒絕。

```yaml
# persona.md
persona_id: night_wolf_strategist
agent_skills:
  - night_wolf_strategist_skill   ← 對到 SKILL.md 的 skill_id

# SKILL.md
skill_id: night_wolf_strategist_skill
compatible_personas:
  - night_wolf_strategist          ← 對到 persona.md 的 persona_id
```

### 4. 補上 Avatar

`avatar/` 資料夾預設只有 `metadata.json` placeholder，**沒有圖片**。

- 把你的 `avatar.png`（至少 512×512，建議 1024×1024，PNG）放進 `avatar/`
- 編輯 `avatar/metadata.json` 填入 `traits`、`universe`、`realm`、`rights` 等欄位
- 完整規格見 [`docs/avatar-creation-spec.md`](../../docs/avatar-creation-spec.md)

### 5. 填內容、確認、送出

- 三份檔案分別填內容
- 三者語氣、設定、世界觀必須一致——讀起來是同一個角色
- 透過 Creator Portal 送出

---

## 孵化器產出的 Agent

如果你是從孵化器拿到 Agent 雛形：

1. 解壓到 `agents/<你的_agent_name>/`
2. 主要欄位（行為描述、句子範例、對話、workflow）已預填——你只需要調語氣讓它更像「你的」角色
3. `avatar/` 是空的，你必須補上 `avatar.png`
4. 雙向綁定已預先寫好，你只需要把 ID 改成自己的英文小寫名稱

沒補 Avatar 想先試水溫？把 `persona.md` 跟 `SKILL.md` 各自搬到 `personas/` 跟 `skills/` 資料夾，當單品上架。
