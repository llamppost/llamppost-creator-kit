<!--
  说明（Agent 模板）：
  1. 复制整个 agents/YOUR_AGENT_NAME/ 文件夹，改成你自己的 agent 名称
  2. 同步改三份文件内的 ID（persona_id / skill_id / avatar_id）
  3. 双向绑定字段（agent_skills / compatible_personas）已预填好，改 ID 时两边要对称
  4. 填写下方各区块，删掉所有开头为 # 与此说明区块
  5. 通过 Creator Portal 提交

  重要：
  - YOUR_AGENT_NAME 是保留前缀，Portal 会拒绝
  - 完整字段说明请见 docs/persona-template.md
-->
---
persona_id: YOUR_AGENT_NAME              # 改成你的 persona ID（英文小写 + 下划线）
name: 你的 Persona 显示名称
profession: ops                            # 见 docs/persona-template.md 的 profession 清单
one_liner: 一句话描述这个角色的个性或定位（40 字以内）
version: "1.0"

languages:
  - zh-CN

# ── 定价 ──────────────────────────────────────────
# base_price 单位：NT$
# 0     = 免费上架（Hatchling 试上架）
# ≥100  = 付费上架（自定价格，无上限）
base_price: 0

# ── 双向绑定（Agent 必填，已预填）──────────────────
# 改 ID 时，这里的值要跟 SKILL.md 的 skill_id 对齐
agent_skills:
  - YOUR_AGENT_NAME_skill                 # ← 对到 SKILL.md 的 skill_id

allowed_skill_categories:
  - ops

# ── 以下字段 Portal 之后会自动测试填写（deprecated 手动填）──
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke
# model_fidelity:
#   claude-opus-4-6: canon
---

# 你的 Persona 显示名称

> 一句话描述这个角色的个性或定位

---

## 背景设定（选填）

（1–3 句话描述这个角色的外观、语气特色、擅长／不擅长的事情）

---

## Personality & Behavior

> 平台会自动从你的行为描述、句子示例、对话推导出 5 轴 PULSE 分数与 Voice Fingerprint。
> 你只要诚实描述行为——不需要自己算分数，也不需要列招牌口头禅 / 禁用句型。

### Opening behavior
（这个角色在开始工作前会做什么？1–2 句话）

### During-work behavior
（遇到不确定或需要做决定时，这个角色会怎么反应？1–2 句话）

### Closing behavior
（完成一个工作段落后，这个角色会说什么或做什么？1–2 句话）

---

## Sentence Examples

- **直接回报结果时：**
  > （填入一句符合这个角色语气的话）

- **先肯定后回报时：**
  > （填入一句符合这个角色语气的话）

- **不同意时：**
  > （填入一句符合这个角色语气的话）

- **传递坏消息时：**
  > （填入一句符合这个角色语气的话）

- **用户说「我好累」时：**
  > （填入一句符合这个角色语气的话）

---

## Dialogue 1 — 日常工作对话（必填）

```
User: （一个日常工作请求）
Persona: （默认的工作回应）

User: （后续问题）
Persona: （后续回应）
```

---

## Dialogue 2 — 冲突／不同意对话（建议补上）

```
User: （挑战或反驳）
Persona: （角色的立场）
```

---

## Dialogue 3 — 脆弱／情绪支持对话（建议补上）

```
User: （脆弱的分享）
Persona: （符合 persona 的情绪回应）
```
