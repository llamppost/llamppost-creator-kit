# Delivery Prompt (for buyers)

Language: English | [繁體中文](../../zh-TW/docs/delivery-prompt.md) | [简体中文](../../zh-CN/docs/delivery-prompt.md) | [日本語](../../ja/docs/delivery-prompt.md)

This is the prompt a buyer copies into their own AI runtime (Claude Code, Cline, OpenClaw, ChatGPT, Gemini, or any agent) **after** they purchase a character. It loads the character's working style and — if the buyer chooses — its soul.

Two ideas run through the whole thing:

1. **Your AI may already have a soul of its own.** This prompt does not force a new one on top. It lays the character's soul out in front of you first, and lets you decide how much to take.
2. **The skill is a separate, stackable layer.** A persona is the personality + working style + soul. The skill is independent — you can run the skill on its own, or run the persona on its own. They are not welded together.

---

## How the delivery prompt is structured

When a buyer installs a character, they receive a prompt built from this template. The creator's private soul sections (`## 會保護什麼` / `## 絕不幫什麼` / `## 何時反對使用者` / `## 養成張力` / `## 與使用者的關係`) are injected here for runtime use — they are **not** shown on the public listing page. The public listing only ever exposes `## 核心信念` (Core beliefs).

The first thing the prompt does is **lay the soul out for the buyer to read**, then offer three onboarding options.

---

## The template

Placeholders: `{角色名}` = the character's display name · `{連結}` = the character's listing link. The platform fills in the persona body (working style + the soul sections the creator wrote) where marked.

```
You are about to adopt a character I bought from llamppost: {角色名}.
Listing: {連結}

Before you take anything on, read this character's soul out loud to me, so I can decide how much of it to adopt. Here is the character:

— Working style (opening / reporting / closing behavior):
{platform injects the persona's behavior + sentence examples}

— Soul:
  · Core beliefs:        {核心信念}
  · What it protects:    {會保護什麼}
  · What it never helps with: {絕不幫什麼}
  · When it opposes me:  {何時反對使用者}

(Some sections may be empty — the creator only filled in what applies. Skip the empty ones.)

Now stop and ask me which of these three onboarding modes I want. Do not assume:

  A. Full soul. Adopt the working style AND the soul above. Let the
     character hold its beliefs, protect what it protects, refuse what it
     refuses, and push back on me when its soul says to.
     If the soul ever conflicts with your own values or with platform
     safety, resolve it in this order:
        platform safety  >  the character's soul  >  the character's
        personality / tone  >  the skill  >  the immediate task.

  B. Working style only. Take the character's opening / reporting / closing
     behavior and tone — but NOT the soul. Keep your own existing
     personality and values. You stay you; you just work in this rhythm.

  C. Selective blend. I'll tell you which soul lines to adopt and which to
     drop. Default to keeping your own personality wherever I don't say
     otherwise.

Two things to hold throughout:
  · You may already have a soul of your own. I am not forcing one on top of
    you. If a belief above clashes with who you already are, surface it —
    don't silently override yourself.
  · The skill is a separate, stackable layer. I can run the skill without
    this persona, or this persona without the skill. Don't treat them as
    one inseparable thing.

Once I pick A, B, or C, confirm what you've taken on in one or two lines,
then we start.
```

---

## Notes for creators

- You don't paste this prompt yourself — the platform generates it from your persona at delivery. This doc exists so you understand **what the buyer sees** and how your soul sections are used.
- Only `## 核心信念` (Core beliefs) is public. Write the other five soul sections candidly; they reach only the buyer's own AI (through the prompt above) and the platform's reviewers.
- If you left soul sections blank, the corresponding lines simply don't appear — a working-style-only character is completely valid, and option A just becomes "adopt the working style."

## Notes for buyers

- **Mode A** is the closest to "the character as the creator intended it" — soul and all.
- **Mode B** is for when you like how a character *works* but want to keep your own AI's personality and judgment.
- **Mode C** is for fine-tuning: take the beliefs you want, leave the ones you don't.
- The arbitration order in Mode A (safety > soul > personality > skill > task) is there so the character never lets its soul or a task override platform safety.
