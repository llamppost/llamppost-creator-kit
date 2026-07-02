# Avatar 规格与政策（v1）

语言：简体中文 | [English](../../en/docs/avatar-creation-spec.md) | [繁體中文](../../zh-TW/docs/avatar-creation-spec.md) | [日本語](../../ja/docs/avatar-creation-spec.md)

要发布一个 Avatar，你需要两样东西：**一张图片（avatar.png）** 与 **一份 metadata 文件（metadata.json）**。

---

## 重要：文件夹与 avatar_id 必须是英文

我们的系统**只识别英文标识符**。即使你的角色名称与描述是简体中文、日语或其他语言，下列项目永远必须是英文：

- `avatar_id` 字段
- `creator` 字段
- 你建立的 avatar 文件夹名称（`avatars/<your_avatar_id>/`）
- 格式限制：**小写英文字母 + 数字 + 下划线（`_`）**——不能有空格、大写字母、连字符（`-`）或任何非英文字符

**示例：**

| 正确 | 错误 |
|---------|---------|
| `avatar_id: pi_lang_001` | `avatar_id: 派狼_001` |
| `avatars/night_wolf_001/` | `avatars/Night-Wolf-001/` |
| `creator: shane_lin` | `creator: 林申` |

`metadata.json` 的 `traits` 对象内容、`collection` 名称、角色相关的描述都可以使用任何语言，但 `avatar_id`、`creator`、文件夹名称必须是英文。

**保留前缀**：这份 kit 有两种保留前缀，你的真实上架**都不可以**使用——Portal 会拒绝：

- **`EXAMPLE_`**：参考示例文件，只供阅读——不要复制这种文件夹。
- **`YOUR_`**：空白模板，设计来给你复制改名的——复制后**务必**把文件夹与 `avatar_id` 改成你自己的英文小写 ID。

---

## 快速检查清单

提交前，请确认以下项目都已完成：

- [ ] `avatar.png` 至少 512×512，建议 1024×1024
- [ ] `metadata.json` 包含所有必填字段
- [ ] `avatar_id` 对应到你的 creator ID（不与其他 Avatar 重复）
- [ ] 图片是你的原创作品，或你持有有效的授权文件
- [ ] `universe` 与 `realm` 字段不包含受版权保护的 IP 名称
- [ ] 图片不含任何涉及未成年人的性化内容

---

## A) 图片要求

| 项目 | 规格 |
|------|------|
| 文件名 | `avatar.png`（固定，不可变更） |
| 最小尺寸 | 512 × 512 px |
| 建议尺寸 | 1024 × 1024 px |
| 格式 | PNG（未来可能支持 APNG） |
| 比例 | 正方形（1:1） |

> **注意：** 如果你提交的是动画格式（APNG），某些 AI 界面可能只会显示静态的第一帧。建议同时准备一份静态版本。

---

## B) metadata.json 规格

放在与 `avatar.png` 同一个文件夹内，文件名固定为 `metadata.json`。

> **这是 avatar schema——不是 listing manifest。** Avatar 的 `metadata.json`（`avatar_id`、`collection`、`traits`、`rights` 等）跟单品 Skill / Persona 用的 listing `metadata.json`（`title` / `name`、`cover`、`banner`、`listing.*`）无关，别互相贴错。Avatar 也没有另外的 cover/banner——方形 1:1 的 `avatar.png` 本身就是图片。

### 完整示例

```json
{
  "avatar_id": "kai_001",
  "collection": "weekday_workers",
  "listing_description": "一个专注的工作日上班族，可以让你选进自己的短篇故事里——沉稳、带点疲惫，但靠得住。",
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

### 字段说明

**必填字段：**

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `avatar_id` | string | 唯一 ID，小写 + 下划线，命名后不可更改 |
| `collection` | string | 这个 Avatar 所属的系列（你自己命名） |
| `listing_description` | string | 2–3 句市集商品描述，说明买家会得到什么 + 角色的调性。别留空，否则你的 Avatar 上架时会没有描述。 |
| `species` | string | 角色物种，例如 `human`、`robot`、`animal`、`spirit` |
| `universe` | enum | 世界设定（见下方 Enum 清单） |
| `realm` | enum | 所属领域（见下方 Enum 清单） |
| `base` | string | `original` 或授权 IP 名称 |
| `traits` | object | 视觉特征（自由 key-value，至少 1 组） |
| `rights` | object | 版权信息（见下方） |

**Enum 清单：**

`universe`（世界设定）：

| 值 | 说明 |
|-------|-------------|
| `modern` | 现代世界（当代设定） |
| `ancient` | 古代世界（历史或幻想古风） |
| `future` | 未来世界（科幻、赛博朋克等） |
| `alternate` | 平行世界（异世界、转生等） |

`realm`（所属领域）：

| 值 | 说明 |
|-------|-------------|
| `earth` | 地球／人间界 |
| `outer_space` | 外太空 |
| `heaven` | 天界／神界 |
| `hell` | 冥界／地狱 |

**`rights` 对象字段：**

| 字段 | 说明 |
|-------|-------------|
| `source` | `original` 或 `licensed` 或 `public_domain` |
| `creator` | 你的 creator ID |
| `license` | `llamppost_standard`（大多数情况下用这个） |

---

## C) 版权政策

### 原创作品

如果图片是你的原创作品（包含你全权持有著作权的委托作品），请将 `base` 设为 `original`，并将 `rights.source` 设为 `original`。

### 使用受保护的 IP

如果你的 Avatar 是基于现有的 IP（漫画角色、游戏角色、电影角色等）：

1. 把 `base` 字段设成该 IP 的名称（例如 `"base": "my_licensed_ip"`）
2. 提交时必须附上授权文件
3. `universe` 与 `realm` 字段**不可以直接写 IP 名称**

> 示例：如果你持有某个 IP 的授权，请把 `base` 设成该 IP 名称，但 `universe` 仍应填 `modern` / `ancient` 等——不能写成该 IP 的世界名。

### 公共领域

如果角色来自公共领域（例如历史人物、经典神话），请把 `rights.source` 设为 `public_domain`，并在 `traits` 里清楚注明角色的出处。

---

## D) 未成年人安全政策

**零容忍。**

任何包含涉及未成年人性化内容的 Avatar，都会立刻被下架，且创作者账号将被终止，不论理由为何。

如果角色的年龄模糊，视觉呈现应以成年为默认。

---

## 文件夹结构示例

```
avatars/
  kai_001/
    avatar.png
    metadata.json
```

每一个 Avatar 都使用自己的文件夹，文件夹名称与 `avatar_id` 一致。
