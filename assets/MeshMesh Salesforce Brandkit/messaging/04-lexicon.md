# MeshMesh — Lexicon & Copy Dictionary

> **Purpose.** The word-level rulebook. Approved terminology, the Forbidden List, competitor-term handling, and mechanics (capitalization, punctuation, numbers). When the [voice guide](03-voice-and-tone.md) says "use approved terms," this is the list.
>
> **How to use with an LLM.** The tables are deterministic: each row is `correct` vs. `incorrect`. Enforce them as find-and-replace gates. The machine-readable version is in [`brand-governance.xml`](brand-governance.xml) (`<lexicon>` block).

---

## 1. Approved terminology (correct → incorrect)

### Brand & product names

| Correct | Incorrect / never | Note |
|---|---|---|
| **MeshMesh** | Mesh Mesh, Meshmesh, meshmesh, MeshMesh AI | One word, both M's capital. The doc typo "Meshmesh" is wrong. |
| **MeshMesh Studio** | the Studio app, MeshMesh Dashboard | The primary app interface. |
| **MeshMesh from Salesforce** | MeshMesh by Salesforce, MeshMesh (a Salesforce product) | The endorsement lockup phrasing. |
| **Slackbot** | Slack bot, Slack Bot, MeshMesh for Slack | One word (matches source). |
| **Salesforce** | SFDC, salesforce.com, SF | In external copy always "Salesforce." "SFDC" only survives in internal financial labels. |

### Category & concept vocabulary (MeshMesh's proprietary language — use exactly)

| Correct | Incorrect / avoid | Note |
|---|---|---|
| **Headless 360 orchestration platform** / **Headless 360 orchestrator** | headless CRM, 360 platform, orchestration tool | The category. Capitalize "Headless 360." |
| **amorphous agents** | pre-built agents, static agents, bots | Assembled fresh at runtime; no fixed identity. |
| **Three-Context Model** (Execution / Business / Operator context) | 3-context system, context engine (loosely) | Name all three when explaining. |
| **progressive context assembly** | context stuffing, prompt loading | The third-way approach vs. prompt-stuffing / vector search. |
| **knowledge packages** / **structured knowledge** | knowledge base (vector), doc dump | Validated, dependency-aware, not a vector DB. |
| **intelligence flywheel** / **learning flywheel** | the algorithm, our AI magic | Execution Platform + Knowledge Pipeline + Context Acquisition. |
| **co-create a plan** / **plan** | generate a plan, auto-plan, a vibe | It's structure, not loose prompting. |
| **human approval gate** / **human-in-the-loop** | fully hands-off, set-and-forget | Required with any "autonomous" claim. |
| **verified outcomes** | results, deliverables (when precision matters) | The end state — work is done *and* verified. |
| **agent environment** / **secure, isolated environment** | our sandbox (for MeshMesh's own runtime) | See "sandbox" note below. |

### The "sandbox" rule (important nuance)

- ✅ **"Salesforce sandbox"** and **"sandbox syncing"** are correct — they name a Salesforce org type / a real capability.
- ❌ Do **not** call MeshMesh's *own* execution runtime a "sandbox." Use **"secure, isolated environment,"** **"tenant-isolated infrastructure,"** or **"agent environment."**

### Salesforce product names (use official names)

Agentforce · Data Cloud / Data 360 · Marketing Cloud Engagement (MCE) · Marketing Cloud Advanced (MCA) · Marketing Cloud Next · Commerce Cloud · Service Cloud · Sales Cloud · MuleSoft · Tableau Next · Slack · Loyalty Management · Experience Cloud · Financial Services Cloud (FSC) · Manufacturing Cloud · Consumer Goods Cloud.
*Rule:* spell the product out on first use; the parenthetical acronym (MCE, MCA, FSC) is fine thereafter. Never invent a product name.

---

## 2. The Forbidden List (hard gate — never use)

**Hype adjectives / verbs:**
`game-changing` · `game-changer`* · `revolutionary` · `supercharge` · `seamlessly` · `seamless` · `leverage` (verb) · `utilize` · `robust` · `paradigm` · `synergy` · `cutting-edge` · `bleeding-edge` · `disruptive` · `best-in-class` · `world-class` · `next-gen` / `next-generation` · `turnkey` · `frictionless` · `effortless` · `magic` / `magical` · `unparalleled` · `state-of-the-art` · `one-stop shop`

**Overclaim / absolute language (banned in security & legal, avoid elsewhere):**
`100% secure` · `unhackable` · `fully autonomous` (unqualified) · `zero risk` · `guaranteed` · `always` / `never` as reliability claims · `set-and-forget`

**Replace-with guidance:**

| Don't write | Write instead |
|---|---|
| leverage / utilize | use |
| supercharge / turbocharge | accelerate, speed up |
| seamlessly | (delete it — or state the actual result) |
| revolutionary / game-changing | lead with the number instead (e.g., "98% faster") |
| robust | validated, tested, enterprise-grade |
| best-in-class / world-class | cite the proof point |
| fully autonomous | autonomous, with a human approval gate |

> *\***"Game-Changer"** appears as an internal *pilot time-savings tier label* in the validation data. That's fine in an internal results table. It is **not** approved as a marketing adjective — do not write "game-changing."

---

## 3. Competitor & comparison terms

- **Name competitors only for factual contrast**, using the sanctioned frames: *"Cursor, Claude Code, and Copilot know code, not Salesforce."* / *"Other tools stop at code."*
- **Never disparage** a named competitor beyond the supported contrast. No "better than X at everything," no mockery.
- **Agentforce is a partner concept, not a rival.** Always: *"MeshMesh doesn't replace Agentforce — it builds Agentforce… and beyond."* Never position MeshMesh *against* Agentforce.
- Approved comparison set: Cursor, Claude Code, Copilot, "Agentforce Vibes," "Traditional SI." Keep the landscape-table dimensions from [`01-positioning.md` §7](01-positioning.md).

---

## 4. Mechanics

### Numbers & metrics
- **Numerals for all metrics:** `40+`, `387+`, `90%`, `3,500+`, `6,000+`, `100,000+`, `45 min`, `9–12 months`.
- **Multipliers:** lowercase `x`, no space — `11x`, `11.4x`, `10–13x`.
- **Ranges:** en dash, no spaces — `9–12 months`, `120–160 hours`, `$18–24K`.
- **Keep the two speed claims distinct:** `11x ROI` ≠ `11.4x fewer steps`. Never merge or swap.
- **Signature phrase:** "months to minutes" (lowercase, no hyphens) — or "from months to minutes."
- **Money:** format as `$18–24K`, `$100K`; keep internal per-use-case dollar figures out of public copy.

### Capitalization
- Sentence case for headings and UI labels (not Title Case).
- Capitalize proper nouns: **MeshMesh**, **Salesforce**, product/cloud names, **Headless 360**, **Three-Context Model**, **ZIVIS Trust Framework**.
- Do **not** capitalize common concepts mid-sentence: "the plan," "the agent," "an outcome."

### Punctuation
- **Oxford comma** always ("build, test, and document").
- **Em dash** (—) for asides, no surrounding spaces per house style *(kit uses tight em dashes)*; en dash (–) for ranges.
- Avoid exclamation points in marketing/product copy (onboarding may use **one**, sparingly).
- Straight sentences; avoid semicolons in headlines.

### Structure
- Lead sections with the outcome; put proof in tables/bullets.
- Spell out a Salesforce product on first use, acronym after.
- Cite a statistic's source/qualifier in long-form (e.g., "IBM State of Salesforce 2025/26"; "July 2026").

---

## 5. Signature phrases (approved, reusable)

- "Explicit intent in. Enterprise-grade execution out."
- "Define the outcome. Approve the plan. Execute."
- "Other tools stop at code. MeshMesh stops when the work is done and the outcomes are verified."
- "It builds Agentforce… and beyond."
- "Salesforce-native in a way no existing tool can match. Autonomous in a way no human team can match. Improving in a way no static skill can match."
- "Making Salesforce simple."
- "MeshMesh gets better with every run."
- "Configuration is the bottleneck."
