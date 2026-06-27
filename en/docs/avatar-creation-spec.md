# Avatar Spec & Policy (v1)

Language: English | [繁體中文](../../zh-TW/docs/avatar-creation-spec.md) | [简体中文](../../zh-CN/docs/avatar-creation-spec.md) | [日本語](../../ja/docs/avatar-creation-spec.md)

To publish an Avatar, you need two things: **an image file (avatar.png)** and **a metadata file (metadata.json)**.

---

## Important: folder and avatar_id must be English

Our system **only understands English identifiers**. Even if your character name and description are in Traditional Chinese, Japanese, or any other language, the following MUST always be English:

- The `avatar_id` field
- The `creator` field
- The avatar folder name you create (`avatars/<your_avatar_id>/`)
- Format: **lowercase English letters + digits + underscores (`_`)** — no spaces, no uppercase, no hyphens, no non-English characters

**Examples:**

| Correct | Wrong |
|---------|---------|
| `avatar_id: pi_lang_001` | `avatar_id: 派狼_001` |
| `avatars/night_wolf_001/` | `avatars/Night-Wolf-001/` |
| `creator: shane_lin` | `creator: 林申` |

The `traits` object contents, `collection` name, and any character descriptions in `metadata.json` CAN be in any language, but `avatar_id`, `creator`, and the folder name MUST be English.

**Reserved prefixes**: This kit has two reserved prefixes. Your real listings MUST NOT use either — Portal will reject them:

- **`EXAMPLE_`**: reference example files, read-only — do NOT copy folders with this prefix.
- **`YOUR_`**: blank templates designed to be copied and renamed — after copying, you MUST rename both the folder and `avatar_id` to your own English lowercase ID.

---

## Quick Checklist

Before submitting, confirm all items are complete:

- [ ] `avatar.png` is at least 512×512, recommended 1024×1024
- [ ] `metadata.json` includes all required fields
- [ ] `avatar_id` matches your creator ID (no duplicates with other Avatars)
- [ ] Image is your original work, or you hold valid license documents
- [ ] `universe` and `realm` fields do not contain copyrighted IP names
- [ ] Image does not contain any sexualized content involving minors

---

## A) Image Requirements

| Item | Spec |
|------|------|
| Filename | `avatar.png` (fixed, cannot be changed) |
| Minimum size | 512 × 512 px |
| Recommended size | 1024 × 1024 px |
| Format | PNG (APNG may be supported later) |
| Aspect ratio | Square (1:1) |

> **Note:** If you submit an animated format (APNG), some AI interfaces may only display the static first frame. It's recommended to also have a static version ready.

---

## B) metadata.json Spec

Place in the same folder as `avatar.png`, with the fixed filename `metadata.json`.

### Complete Example

```json
{
  "avatar_id": "kai_001",
  "collection": "weekday_workers",
  "listing_description": "A focused weekday office worker you can cast into your own short stories — calm, a little tired, dependable.",
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

### Field Reference

**Required fields:**

| Field | Type | Description |
|-------|------|-------------|
| `avatar_id` | string | Unique ID, lowercase + underscores, cannot be changed after naming |
| `collection` | string | The series this Avatar belongs to (your own naming) |
| `listing_description` | string | 2–3 sentence description shown on the marketplace listing — what the buyer gets and the character's vibe. Don't leave blank, or your Avatar shows up with no description. |
| `species` | string | Character species, e.g. `human`, `robot`, `animal`, `spirit` |
| `universe` | enum | World setting (see Enum list below) |
| `realm` | enum | Domain (see Enum list below) |
| `base` | string | `original` or licensed IP name |
| `traits` | object | Visual traits (free-form key-value, at least 1) |
| `rights` | object | Copyright info (see below) |

**Enum list:**

`universe` (world setting):

| Value | Description |
|-------|-------------|
| `modern` | Modern world (contemporary setting) |
| `ancient` | Ancient world (historical or fantasy ancient) |
| `future` | Future world (sci-fi, cyberpunk, etc.) |
| `alternate` | Parallel world (alternative, isekai, etc.) |

`realm` (domain):

| Value | Description |
|-------|-------------|
| `earth` | Earth / human realm |
| `outer_space` | Outer space |
| `heaven` | Heavenly realm / divine realm |
| `hell` | Underworld / hell |

**`rights` object fields:**

| Field | Description |
|-------|-------------|
| `source` | `original` or `licensed` or `public_domain` |
| `creator` | Your creator ID |
| `license` | `llamppost_standard` (use this in most cases) |

---

## C) Copyright Policy

### Original works

If the image is your original work (including commissioned work where you hold full copyright), set `base` to `original` and `rights.source` to `original`.

### Using protected IP

If your Avatar is based on existing IP (comic characters, game characters, movie characters, etc.):

1. Set the `base` field to the IP name (e.g., `"base": "my_licensed_ip"`)
2. You must provide license documents when submitting
3. `universe` and `realm` fields **must not contain IP names directly**

> Example: If you hold a license for an IP, set `base` to the IP name, but `universe` should still be `modern` / `ancient` / etc. — not the IP's world name.

### Public domain

If the character comes from the public domain (e.g., historical figures, classical mythology), set `rights.source` to `public_domain` and clearly note the character's source in `traits`.

---

## D) Minor Safety Policy

**Zero tolerance.**

Any Avatar containing sexualized content involving minors will be immediately removed and the creator's account terminated, regardless of reason.

If a character's age is ambiguous, the visual presentation should default to adult.

---

## Folder Structure Example

```
avatars/
  kai_001/
    avatar.png
    metadata.json
```

Each Avatar uses its own folder, with the folder name matching `avatar_id`.
