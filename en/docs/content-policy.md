# Creator Kit · Content Policy

Languages: English · [繁體中文](../../zh-TW/docs/content-policy.md) · [简体中文](../../zh-CN/docs/content-policy.md) · [日本語](../../ja/docs/content-policy.md)

llamppost operates in Taiwan. All listed content must comply with **Taiwan Fair Trade Act, Article 21** (false advertising). Violations are auto-rejected by Portal AI review. Repeat offenders face take-down.

---

## Legal basis

**Fair Trade Act, Article 21** prohibits false or misleading representations about goods (including services) that affect trading decisions. Penalties: NT$ 50,000 – 25,000,000 (Article 42).

Skill / persona / avatar listings on llamppost are commercial advertising and fall under this law.

---

## Four categories of high-risk language

### 1. Absolute claims (high risk — objective assertions always rejected)

| Word | Don't write | OK to write |
|---|---|---|
| 保證 / guarantee | "guarantee viral", "guaranteed to work", "guaranteed earnings" | "guarantee your privacy" (factual), "no guarantee of results" |
| 絕對 / absolutely | "absolutely 10x improvement", "absolutely the strongest" | "absolutely honest about limits" (self-critique) |
| 100% / certain / definitely | "100% effective", "definitely a hit" | (avoid) |

**Rule of thumb**: absolute language + outcome promise = illegal. Absolute language + factual statement = OK.

### 2. Superlatives (need objective data backing)

| Word | Don't write | OK to write |
|---|---|---|
| Most X | "Most powerful writing AI" (no data), "fastest" | "most comfortable experience" (subjective), "most convenient" (subjective) |
| First / only / top | "Taiwan's first X skill", "the only one that can do X" | (avoid unless third-party data backs it) |
| No.1 / Top | "Sales No.1", "Top creator" | (avoid) |

**Rule of thumb**:
- "Objective fact tier" (sales / speed / effect) → needs third-party data
- "Subjective feeling tier" (most comfortable / most convenient / most fun) → OK, because subjective has no objective standard

### 3. Permanent / lifetime promises (high legal risk)

| Word | Don't write | OK to write |
|---|---|---|
| Permanent / forever | "permanent free updates", "permanently effective" | (avoid — llamppost technically can't guarantee permanence) |
| Lifetime | "lifetime error-free" | (avoid) |
| Forever / always | "lifetime warranty", "lifetime free" | (avoid) |

**Rule of thumb**: commercially impossible to guarantee "permanent"; the promise itself is illegal.

### 4. Exaggerated speed / outcome (must be concrete)

| Word | Don't write | OK to write |
|---|---|---|
| Instant results / overnight | "instantly boost revenue" | (avoid) |
| X minutes to expert | "5 minutes to become a writing expert" | "5 minutes to fill out the form" (literally true) |
| Get rich overnight / guaranteed hit | "get rich overnight with this skill" | (absolutely forbidden) |
| Instant double | "click to instantly double X" | (avoid) |

**Rule of thumb**: speed + outcome promises must be "concrete, achievable, literally true". "5 minutes to fill out a form" is OK because that's just the duration. "5 minutes to become an expert" is not, because expertise isn't achievable in 5 minutes.

---

## Examples vs counter-examples

### Skill one_liner

| Counter-example | Rewrite |
|---|---|
| "Guaranteed viral weekly reports — use it and definitely get promoted" | "5 minutes to generate a focused weekly report, written for what your manager wants to see" |
| "Taiwan's first writing AI, the strongest prose" | "Business writing skill with 4 tone switches" |
| "Permanently free, lifetime use" | "Free listing (Hatchling tier)" |

### Skill description paragraph

**Counter-example**:
> Use my skill, you'll definitely become a top marketer. Guaranteed 10x follower growth in 30 days.

**Rewrite**:
> Suitable for marketers who want to structure their thinking process. After using it, you'll less often get stuck on "what do I write." Actual follower growth depends on content quality, platform algorithm, posting frequency, etc.

---

## Educational mention vs self-assertion

Is your skill "teach others not to over-promise"? OK — quote the forbidden phrase to make it a mention:

> Don't write "guaranteed viral" — Portal AI will catch it.

The quoted "guaranteed viral" is an **educational mention**, not a **self-assertion**, and is legal. Portal AI judges by context.

---

## Portal review flow

1. You submit draft → enters `*_drafts` table
2. Auto-review L2 (AI) runs 5 checks: prohibited content / quality floor / IP risk / consistency / **over-promising**
3. AI verdict:
   - `pass` → auto-publish
   - `flag` → enters human review queue
   - `reject` → auto-rejected with reason
4. Human admin handles flagged + edge-case rejected items

You can view your draft's review status + reason at `/studio/drafts`.

---

## Consequences of violation

- First time: draft reject, you can rewrite
- Second time: human-flagged, stricter review on future submissions
- Multiple / serious: account suspension / permanent ban
- After publishing — if reported: take-down + legal liability borne by creator (per Terms)

---

## Self-check checklist

Before submitting, run `arrow.validate` from `mcp-arrow`. It warns on lines containing 保證 / 絕對 etc. Check the context yourself against this doc. A warning ≠ auto-reject — it's a chance to self-correct.

For deeper legal interpretation:

- [Fair Trade Act, Article 21 (full text)](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=J0150002&flno=21)
- [Fair Trade Commission false-advertising case archive](https://www.ftc.gov.tw/internet/main/doc/docList.aspx?uid=165&mid=165)
- [Zhelu Law Firm: "What counts as false advertising"](https://zhelu.tw/post/false-advertisement)

---

> Policy maintained by ESC / llamppost. Questions → [github.com/illushane/llamppost-creator-kit/issues](https://github.com/illushane/llamppost-creator-kit/issues).
