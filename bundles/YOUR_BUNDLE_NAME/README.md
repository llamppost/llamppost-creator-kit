# 套装上架（Bundle）

> 「套装」= Persona + Skill + Avatar 三者打包，用户一次入手完整角色商品。

这份文件夹是套装上架的空白模板。**孵化器产出的格式跟这份结构 1:1 对齐**——孵化器跑完丢出来的就是这个样子，只是 `avatar/` 默认是空的，你需要补上自己的 `avatar.png` 才能以套装上架。

---

## 套装 vs 单品

| | 套装（这个文件夹） | 单品 |
|---|---|---|
| 内容 | Persona + Skill + Avatar（三者必备） | Persona、Skill、Avatar 任选一 |
| 双向绑定 | 预先绑好，用户一次安装 | 不适用 |
| 适合场景 | 你做了一个完整角色（人格 + 招牌技能 + 视觉） | 你只有其中一件想试水温 |
| 模板位置 | `bundles/YOUR_BUNDLE_NAME/` | `personas/YOUR_AGENT_NAME/`、`skills/YOUR_SKILL_NAME/` |

---

## 怎么开始

### 1. 复制这整个文件夹并改名

```
复制：   bundles/YOUR_BUNDLE_NAME/
改名：   bundles/your_bundle_name/    ← 英文小写 + 下划线
```

例如：`bundles/night_wolf_strategist/`

### 2. 改三份文件内的 ID（必须对应）

- `persona.md` 里的 `persona_id`
- `SKILL.md` 里的 `skill_id`
- `avatar/metadata.json` 里的 `avatar_id`

**建议用同一个 base name 当前缀**，让三者看起来是一组：

| 文件 | 示例 ID |
|------|---------|
| `persona.md` | `persona_id: night_wolf_strategist` |
| `SKILL.md` | `skill_id: night_wolf_strategist_skill` |
| `avatar/metadata.json` | `avatar_id: night_wolf_strategist_001` |

### 3. 双向绑定 — 已预填，改 ID 时两边要同步

`persona.md` 的 `bundled_skills:` 与 `SKILL.md` 的 `compatible_personas:` 必须对称。Portal 会验证——错一边就拒绝。

```yaml
# persona.md
persona_id: night_wolf_strategist
bundled_skills:
  - night_wolf_strategist_skill   ← 对到 SKILL.md 的 skill_id

# SKILL.md
skill_id: night_wolf_strategist_skill
compatible_personas:
  - night_wolf_strategist          ← 对到 persona.md 的 persona_id
```

### 4. 补上 Avatar

`avatar/` 文件夹默认只有 `metadata.json` placeholder，**没有图片**。

- 把你的 `avatar.png`（至少 512×512，建议 1024×1024，PNG）放进 `avatar/`
- 编辑 `avatar/metadata.json` 填入 `traits`、`universe`、`realm`、`rights` 等字段
- 完整规格见 [`docs/avatar-creation-spec.md`](../../docs/avatar-creation-spec.md)

### 5. 填内容、确认、提交

- 三份文件分别填内容
- 三者语气、设定、世界观必须一致——读起来是同一个角色
- 通过 Creator Portal 提交

---

## 孵化器产出的套装

如果你是从孵化器拿到套装雏形：

1. 解压到 `bundles/<你的_bundle_name>/`
2. 主要字段（行为描述、句子示例、对话、workflow）已预填——你只需要调语气让它更像「你的」角色
3. `avatar/` 是空的，你必须补上 `avatar.png`
4. 双向绑定已预先写好，你只需要把 ID 改成自己的英文小写名称

没补 Avatar 想先试水温？把 `persona.md` 跟 `SKILL.md` 各自搬到 `personas/` 跟 `skills/` 文件夹，当单品上架。
