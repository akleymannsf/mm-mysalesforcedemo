# MeshMesh — Voice & Tone Guide

> **Voice is constant. Tone flexes by context.** Voice is *who MeshMesh is* — it never changes. Tone is *how that voice adapts* to the reader's situation (onboarding vs. an error vs. a security review).
>
> **How to use with an LLM.** The rules below are written as **binary, checkable constraints**, not adjectives — a model can validate each one against a draft. Treat the Forbidden List and the formatting rules as hard gates. Use the Do/Don't pairs as few-shot exemplars.

---

## 1. Voice — the constant (Stripe / Linear / Vercel register)

MeshMesh sounds **clean, scannable, and confident but not hyped.** It leads with outcomes and real numbers, the way a good product changelog does.

### Voice rules

Most rows are **gates** — pass/fail, enforce them. A few are **principles** (marked *P*) — strong defaults that guide the writing but may be broken when clarity demands. Aim to honor the principles; never quietly ignore them.

| # | Rule | Fails if… |
|---|---|---|
| V1 | Address the reader in **second person** ("you," "your"). | Copy speaks in third person about "users" when it could say "you." |
| V2 | **Lead with an outcome or a number**, not an adjective. | The first clause is a descriptor ("powerful," "innovative") instead of a result. |
| V3 | State metrics as **numerals + unit/multiplier** (`90%`, `11x`, `40+`, `45 min`). | A metric is spelled out ("eleven times") or vague ("dramatically faster"). |
| V4 | **Active voice** in all headlines and CTAs. | A headline uses passive ("is executed by"). |
| V5 | **One claim per sentence.** No stacked superlatives. | Two+ hype claims share a sentence. |
| V6 *(P)* | **Keep sentences short — aim for ~10 words.** Headlines shorter. Less is more. | Sentences run long or complex *by habit* when two short ones would read better. (A longer sentence for genuine clarity is fine.) |
| V7 | **Zero words from the Forbidden List** ([`04-lexicon.md`](04-lexicon.md)). | Any forbidden term appears. |
| V8 | Use **concrete verbs** (plan, build, configure, deploy, test, document). | Hand-wavy verbs ("handles," "empowers," "unlocks") stand in for a real action. |
| V9 | Any **"autonomous"** claim is paired with the **human approval gate**. | "Autonomous" appears with no mention of planning/validation bookends. |
| V10 | Every **statistic in long-form carries its source/qualifier**. | A number is cited without its sample size or source when the format allows one. |
| V11 *(P)* | **Keep it sparse.** Cut every word the sentence still reads without. | A word can be deleted with no loss of meaning. |
| V12 *(P)* | **Plain English, high-school reading level.** | A reader needs a dictionary, or the sentence has clauses within clauses. |
| V13 | **No corporate jargon or flowery words.** | Buzzwords, abstractions, or ornamental language appear (see Forbidden List + LLM-tells). |
| V14 | **Sound human, not generated.** No phrases that read like an LLM wrote them. | Any phrase from the "LLM-tells" blocklist appears (§1a). |

### Do / Don't (voice)

- ✅ *"Ship a Data Cloud IDR in 5 minutes — 96% faster than the manual build."*
- ❌ *"Our revolutionary platform supercharges your Data Cloud workflows."*
- ✅ *"You approve the plan. MeshMesh builds, tests, and documents the rest."*
- ❌ *"MeshMesh seamlessly handles everything so you can leverage next-gen automation."*
- ✅ *"40+ Salesforce products. 387+ features. One plain-language ask."*
- ❌ *"A game-changing, best-in-class solution for all your Salesforce needs."*

### Simplicity examples (V6, V11, V12)

- ✅ *"Describe the outcome. MeshMesh builds it."* (5 words + 3 words)
- ❌ *"Simply articulate your desired business outcome and our platform will orchestrate the end-to-end delivery on your behalf."* (17 words, jargon, flowery)
- ✅ *"You approve the plan. MeshMesh does the rest."*
- ❌ *"Once you have reviewed and signed off on the comprehensive plan, MeshMesh proceeds to autonomously execute each subsequent step."*

---

## 1a. Sound human, not generated

Copy must not read like default LLM output. Cut the patterns below on sight.

**LLM-tell blocklist (never use):**
`delve` / `delve into` · `dive in` / `let's dive in` · `unlock` / `unlock the power of` · `elevate` / `elevate your` · `empower` / `empowering` · `harness` / `harness the power` · `navigate the complexities` · `in today's fast-paced world` · `in the ever-evolving landscape` · `it's important to note` · `it's worth noting` · `when it comes to` · `that's where [X] comes in` · `look no further` · `rest assured` · `whether you're X or Y` · `not only… but also` · `at the end of the day` · `the world of` / `the realm of` · `tapestry` · `testament to` · `boasts` · `designed to` (as filler) · `in conclusion` · `first and foremost` · `a myriad of` · `plethora`

**Rules**
- No throat-clearing openers ("In today's world…", "It's important to note…"). Start with the point.
- No hedge-and-pad ("designed to help you potentially improve…"). State what it does.
- No two-part "not only… but also" constructions. Split into two short sentences.
- No summary sign-offs ("In conclusion…", "At the end of the day…").
- If a sentence could open any vendor's blog post, delete it.

**Do / Don't**
- ✅ *"MeshMesh clears your Salesforce backlog."*
- ❌ *"In today's fast-paced world, MeshMesh empowers you to unlock the full potential of your Salesforce investment."*
- ✅ *"It finds the gaps. It fixes them."*
- ❌ *"MeshMesh is designed to help you navigate the complexities of the ever-evolving Salesforce landscape."*

---

## 2. Tone — the variable (by context)

Same voice, different warmth and pacing. Pick the row that matches the surface.

| Context | Tone dial | What changes | What never changes |
|---|---|---|---|
| **Marketing / landing** | Confident, punchy | Short outcome-led headlines; a number in the first line | Voice rules V1–V10 |
| **Onboarding / first run** | Encouraging, lightly celebratory | Warmer verbs, second-person guidance, one small win called out | No hype words; still ≤10-word sentences |
| **In-product execution status** | Neutral, factual, business-language | Present-progressive titles → past-tense summaries; suppress trivial/internal actions | No technical jargon shown to business users |
| **Support / errors** | Empathetic, plain, solution-first | Acknowledge, then give the next step; no blame, no jargon | Never blame the user; never expose stack traces |
| **Security / legal / risk** | Sober, precise, evidence-backed | Cite frameworks and controls; qualify every claim | No hype, no absolutes ("100% secure" is banned) |
| **Sales / executive** | ROI-forward, benchmarked | Lead with 11x ROI / hours saved; name the source | Numbers keep their qualifiers |

### Tone Do / Don't by context

**Onboarding (celebratory but controlled)**
- ✅ *"Nice — your first Sales Agent is live. Want to add lead routing next?"*
- ❌ *"🎉🎉 CONGRATS!! You just did something AMAZING and revolutionary!!!"*

**Execution status (business-language translation)**
- ✅ In progress: *"Retrieving sales records…"* → Done: *"19 sales records retrieved."*
- ❌ *"Executing SOQL SELECT against Account with 12 WHERE clauses…"*

**Support / error (empathetic, actionable)**
- ✅ *"That deployment didn't complete — a validation rule blocked two records. Here's the fix, and you can retry when ready."*
- ❌ *"Error 500. Operation failed. Try again."* (Cold, no path forward.)
- ❌ *"You entered the wrong value."* (Blames the user.)

**Security / risk (precise, no absolutes)**
- ✅ *"Every run executes on tenant-isolated infrastructure; only business-stripped learnings return to the shared knowledge base. Validated continuously via the ZIVIS Trust Framework."*
- ❌ *"MeshMesh is 100% secure and completely unhackable."*

---

## 3. The translation principle (product copy)

MeshMesh's defining habit: **translate every technical action into business language, in real time.** The reader is a business stakeholder who should learn *what it means*, not *what happened technically*.

| Technical action (never show) | Business translation (always show) |
|---|---|
| `POST /interaction/v1/interactions` (47-field JSON) | "Created your campaign with these segments and this schedule." |
| `Deploy metadata bundle → target org` | "Deployed your Sales Agent to the connected org." |
| `Create S3 DataStream target` | "Created S3 export target for Customer Analytics data." |

**Binary rules:** (1) No API names, HTTP verbs, endpoints, or object API names in business-user surfaces. (2) In-progress = present participle title. (3) Completed = past-tense summary with a count/result. (4) Suppress errors, trivial ops, and internal housekeeping from the business view.

---

## 4. Structural conventions

- **Scannable first.** Prefer short paragraphs, tables, and bulleted proof over prose blocks.
- **Numbers do the persuading.** If a sentence makes a value claim, it should contain a figure.
- **One accent per moment.** Mirror the visual system's single-accent restraint (see README "Voice & Tone"): don't stack every proof point into one sentence.
- **Em dashes** for asides; **Oxford comma** always; sentence case for headings (not Title Case).
- **CTAs are verbs:** "See the demo," "Book a build," "Start a plan" — never "Learn more" alone.

---

## 5. Quick self-check (run before publishing)

1. Does the first line carry an outcome or a number? (V2/V3)
2. Are sentences short (~10 words) and single-idea, unless length aids clarity? (V6)
3. Can any word be cut without losing meaning? (V11)
4. Would a high-schooler read it without stumbling? (V12)
5. Zero Forbidden-List words and zero LLM-tells? (V7, V13, V14, §1a)
6. Every "autonomous" paired with the approval gate? (V9)
7. Every stat qualified/sourced? (V10)
8. Right tone row for this surface? (§2)
9. In product copy — business language, no API/jargon? (§3)

If any answer is "no," revise before shipping.
