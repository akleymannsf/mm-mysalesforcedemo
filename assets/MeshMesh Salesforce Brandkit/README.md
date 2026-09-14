# MeshMesh × Salesforce — Master Brand Kit

The canonical brand system for MeshMesh work produced for the Salesforce organization. It unifies two sources into one master kit:

1. **The MeshMesh Studio app design system** — `packages/frontend/styles/globals.css` and `apps/desktop` (the coral primary, Geist type, the mesh-lattice logo, radius and surface conventions).
2. **The MeshMesh Salesforce Pilot Impact Report** (Feb 8 – Mar 29, 2026) — the flagship dark editorial expression (near-black canvas, mint metrics, coral section markers, warm amber/copper artwork).

Every output in this kit is generated to match — the same deliverables the MeshMesh brand-kit recipe produces: `brand-config.json`, email/website/report templates + worked examples, an interactive brand-kit artifact, logo variants, and these guidelines.

---

## Contents

```
MeshMesh Salesforce Brandkit/
├── brand-config.json          # Source of truth: colors, type, logo, radius, Tailwind theme, CSS vars
├── README.md                  # This file — brand guidelines
├── assets/
│   ├── logos/
│   │   ├── meshmesh-salesforce-wordmark-wht.svg  # PRIMARY lockup — white, dark bg (web/report/print)
│   │   ├── meshmesh-salesforce-wordmark-blk.svg  # PRIMARY lockup — black, light bg (web/report/print)
│   │   ├── meshmesh-salesforce-wordmark-wht.png  # Same lockup, raster — for EMAIL only (SVG unsupported in email)
│   │   ├── meshmesh-salesforce-wordmark-blk.png  # Same lockup, raster — for email on light bg
│   │   ├── logo-white.svg      # Mark only — white, for dark backgrounds
│   │   ├── logo-dark.svg       # Mark only — #001110, for light backgrounds
│   │   ├── logo-coral.svg      # Mark only — #FA6863 accent
│   │   └── favicon.svg         # 32px coral favicon
│   ├── report-cover-reference.png  # Rendered cover of the source report (visual reference)
│   ├── covers/                 # Official cover / banner art — 3 colorways (.webp web + "… Large.png" hi-res)
│   ├── covers-ideas/           # 10 generated vector cover concepts (1200×1200 PNG + SVG source)
│   └── fonts/                  # Geist + Geist Mono static TTFs (OFL) — for the deck build + font embedding
├── templates/
│   ├── email-template.html     # 600px, inline styles, {{placeholders}}
│   ├── website-template.html   # Responsive landing, CSS variables
│   ├── report-template.html    # Flagship editorial report, Chart.js + mmChart() helper
│   ├── cover-template.html     # 3:2 cover / banner — title overlay on the official cover art
│   ├── deck-template.pptx      # 16:9 PowerPoint deck — branded title / section / content / metric / quote / closing layouts
│   └── deck-builder.py         # python-pptx generator for both decks (regenerate after token changes)
├── examples/
│   ├── email-example.html      # Report-announcement email
│   ├── website-example.html    # Pilot landing page
│   ├── meshmesh-landing.html   # One-page product landing (cover-art hero, marquee, YouTube demo, white metrics)
│   ├── report-example.html     # The real Pilot Impact Report, rendered in-brand
│   ├── cover-example.html      # All 3 cover colorways with title overlays
│   └── deck-example.pptx       # The landing narrative as a filled-in deck
├── messaging/                  # Foundational brand messaging & copy governance (LLM-ready)
│   ├── 01-positioning.md       # Positioning statement & value proposition (audience, category, benefit, proof)
│   ├── 02-messaging-house.md   # Roof + 4 value pillars + proof foundation (binary rules + Do/Don't per pillar)
│   ├── 03-voice-and-tone.md    # Constant voice (10 binary rules) + tone by context
│   ├── 04-lexicon.md           # Approved terms, Forbidden List, competitor rules, mechanics
│   └── brand-governance.xml    # Machine-readable schema — drop into an LLM system prompt
└── artifact/
    └── brand-kit.html          # Interactive visual overview (open in a browser)
```

---

## Color

Dark-first. Light surfaces are provided for email and web where a light canvas is expected.

| Role | Token | Hex | Use |
|---|---|---|---|
| **Primary — Coral** | `primary` | `#FA6863` | The brand signature (exact app primary). CTAs, section markers, links, key numerals, chart bar start. |
| Coral hover / deep | `primaryHover` | `#E5473F` | Button hover, pressed states. |
| **Positive — Mint** | `accent` | `#3AD598` | Metrics, gains, success, "positive" numerals. The green in `~5,509 hours`. |
| **Warm — Amber** | `amber` | `#D38C49` | Editorial accent, cover gradients, chart bar end. From the report artwork. |
| Background | `background` | `#0A0A0A` | Page canvas (dark). Light: `#FFFFFF`. |
| Surface | `surface` | `#141414` | Cards, panels. Elevated: `#1C1C1C`. |
| Foreground | `foreground` | `#FFFFFF` | Headings, primary text on dark. |
| Muted | `muted` | `#A1A1A1` | Body copy, secondary text. |
| Subtle | `subtle` | `#6B6B6B` | Eyebrow labels, captions. |
| Border | `border` | `#262626` | Hairlines, card borders, dividers. |
| Destructive | `destructive` | `#E7000B` | Errors only. |

Full 50–950 tint scales for coral, mint, amber, and neutrals live in `brand-config.json` (`colors.scales`).

**Salesforce endorsement colors** — cloud `#00B3FF` and navy `#001E5B` — are reserved for the co-branded lockup art. Don't use them as UI accents; the palette above owns the interface.

**Data visualization:** horizontal/vertical bars use a **coral → amber** linear gradient (`#FA6863 → #D38C49`) on a `#1C1C1C` track with `#262626` gridlines. Reserve **mint** for positive/aggregate hero figures. Categorical series order: coral, mint, amber, then `#7C9AF0`, `#B57BD6`, `#5FC8D6`.

**Contrast:** On coral and mint buttons, use `#0A0A0A` (near-black) text, not white — both are light enough that dark text passes AA. White text on `#0A0A0A`, muted `#A1A1A1` for body.

---

## Typography

**Geist Sans** (UI + display) and **Geist Mono** (code, tabular figures).

```
font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-family: 'Geist Mono', 'SF Mono', 'Monaco', monospace;
```

Load via Google Fonts (`family=Geist&family=Geist+Mono`); the app itself loads Geist through Adobe Typekit. The system stack is the fallback.

| Style | Size / Line | Weight | Notes |
|---|---|---|---|
| Display | 56px / 1.05 | 300 Light | Tight tracking (−2%). Cover titles. |
| H1 | 40px / 1.1 | 400 Regular | Section titles. |
| H2 | 28px / 1.15 | 500 Medium | Subsection titles. |
| H3 | 20px / 1.3 | 600 Semibold | Card / finding headings. |
| Body | 16px / 1.6 | 400 | Muted neutral for long-form. |
| Eyebrow | 12px / 1.4 | 600 | **UPPERCASE, 0.18em tracking**, subtle or coral. |

Headings run light-to-regular with tight tracking; eyebrows carry the wide-tracked uppercase treatment seen throughout the report.

---

## Logo

**Primary — the co-branded lockup.** The official horizontal lockup is the mesh mark + `MeshMesh` wordmark + the `from [cloud] Salesforce` endorsement. Use it wherever a horizontal logo fits: nav bars, email headers, report covers, hero sections, footers.

- **White lockup** (`…-wordmark-wht.svg`) on dark backgrounds — the default (this kit is dark-first). **Black lockup** (`…-wordmark-blk.svg`) on light.
- **Use the SVG everywhere except email** — web, report, print, and the artifact all reference the vector SVG (crisp at any size). **Email uses the PNG** (`…-wordmark-*.png`): Gmail and Outlook don't render SVG, so email templates point at the raster copy hosted at an absolute https URL.
- The `from Salesforce` endorsement — **cloud `#00B3FF`**, **navy `#001E5B`** — is baked into the lockup art. Never recolor it, separate it, or rebuild it by hand.

**Secondary — the mark alone.** The single-path `evenodd` mesh glyph (white / dark `#001110` / coral `#FA6863`). Use it **only** for square or compact contexts where the lockup won't fit: favicon, avatar, app icon, tight badges.

- Clear space: ≥ ½ the mark's height on all sides. Never stretch, rotate, add effects, or recolor outside the approved variants.
- Email clients require **absolute HTTPS** image URLs — host the PNG and swap the relative path before sending.

---

## Cover & banner art

The official MeshMesh cover art — abstract liquid-glass forms on retro-wave stripes — is used for collection covers, recipe covers, and hero banners. It ships in three colorways (`assets/covers/`), each as a web `.webp` (1536×1024) and a hi-res `… Large.png` (1280×853):

| Colorway | File | Pair with |
|---|---|---|
| **Amber** | `MeshMesh Cover.webp` | Editorial / warm — reports, impact, flagship |
| **Blue** | `MeshMesh Cover 2.webp` | Salesforce-aligned — endorsement, cross-cloud |
| **Teal** | `MeshMesh Cover3.webp` | Data / positive — Data Cloud, metrics, growth |

- **3:2 landscape.** The left ~40% is a **text-safe zone** — keep titles there.
- **Overlay titles with a dark left scrim** so white type reads on every colorway (including the light amber one): `linear-gradient(90deg, rgba(10,10,10,0.74), rgba(10,10,10,0.40) 40%, transparent 66%)`. See `templates/cover-template.html` and `examples/cover-example.html`.
- Use the `.webp` for web/UI, the `… Large.png` for print or high-res. Don't stretch, recolor, or crop out the text-safe zone.
- `assets/covers-ideas/` holds 10 generated **vector cover concepts** — alternates/inspiration, not the official art.

---

## Landing page patterns

Conventions for a one-page marketing/landing site, as built in `examples/meshmesh-landing.html`. Full config lives in `brand-config.json` → `landingPage`.

- **Cover-art hero.** Pin a cover colorway (blue `MeshMesh Cover 2` for the Salesforce-aligned hero) `right center / cover` over the `#0A0A0A` canvas. Layer a **two-part scrim** so left-aligned white type stays legible: a horizontal `linear-gradient(90deg, rgba(10,10,10,0.96) → 0.12)` plus a bottom vertical fade. Keep the **headline solid white — never color or highlight individual words.**
- **White metric numerals.** On the landing page, hero stats and ROI figures are **white**, not mint/coral — the cover art and coral CTAs already carry the color, so white numerals read cleaner. Units and labels stay muted/subtle. (Long-form reports still use coral/mint numerals per the master convention.)
- **Scrolling integration marquee.** Product logos **scroll in a single row** instead of wrapping (which gets chopped off on narrow viewports): two identical tracks translating `0 → -100%` on a loop, edge-faded with `mask-image`, paused on hover, and reduced to `overflow-x:auto` under `prefers-reduced-motion`.
- **Video via YouTube iframe.** Embed demos as a YouTube `<iframe>` (`…/embed/<id>?rel=0`), **not** an inline `<video>` with a remote src — a remote `<video>` degrades document styling in the macOS Quick Look sandbox; an iframe doesn't. (Error 153 only appears over `file://`; serve over http to play.)
- **Footer.** Lead with the white lockup + one-line tagline, a compact two-column link group on the right, and a mono compliance row below. Use a `<div>` for the footer link group, **not `<nav>`** — a global `nav {position:sticky}` header rule will otherwise stick the footer nav to the top of the viewport.
- **Self-contained delivery.** For offline / Quick-Look-safe files, inline the lockup and cover art as base64 data URIs so there are no external subresources.

---

## Voice & Tone

Clean, scannable, confident but not hyped — product-update style (think Stripe / Linear / Vercel changelogs). Lead with outcomes and real numbers. Prefer "agent / agent environment" over "sandbox."

**Avoid:** game-changing, revolutionary, supercharge, seamlessly, leverage, utilize.

The full, enforceable version lives in **`messaging/`** — see below. `messaging/03-voice-and-tone.md` expands this into 10 binary voice rules plus tone-by-context; `messaging/04-lexicon.md` holds the complete Forbidden List and approved terminology.

---

## Messaging & copy (foundational)

The strategic language layer, in `messaging/` — the source of truth for *what MeshMesh says*, engineered so an LLM can apply and validate it. Derived from *Meet MeshMesh* (v.07242026) and the *MeshMesh Product & Technology Overview* (Jul 2026).

| File | What it governs |
|---|---|
| `01-positioning.md` | The canonical positioning statement ("For [audience], MeshMesh is the [category] that delivers [benefit] because [proof]"), the four positioning variables, the approved proof-point library (with qualifiers), the competitive frame, and hard boundaries/disclaimers. |
| `02-messaging-house.md` | The message architecture: one **roof** (core message), four **pillars** (Salesforce-first · autonomous end-to-end · plain-language · compounding intelligence), and a proof **foundation** — each pillar with binary on-message rules, Do/Don't examples, and its allowed proof. |
| `03-voice-and-tone.md` | The **constant voice** as 10 pass/fail rules, plus **tone by context** (marketing, onboarding, execution status, support/error, security/legal, sales/exec) and the business-language translation principle. |
| `04-lexicon.md` | Word-level rules: approved terminology (correct → incorrect), the **Forbidden List**, the "sandbox" nuance, competitor-term handling, and mechanics (numbers, capitalization, punctuation). |
| `brand-governance.xml` | All of the above encoded as a **machine-readable `<brand_governance>` schema** — voice attributes, `<lexicon>` `<term correct="…" incorrect="…"/>` pairs, formatting rules, proof points, and hard constraints. Paste it into an LLM system prompt to generate and check on-brand copy. |

**Design principles** (why these read the way they do): rules are written as **binary/deterministic checks** a model can validate (not descriptive adjectives); every pillar and voice rule ships with **Do/Don't few-shot pairs**; and the whole system is mirrored in a **structured schema** (`brand-governance.xml`) for drop-in use. Config summary: `brand-config.json` → `messaging`.

---

## Using the templates

Each template uses `{{double_brace}}` placeholders. Replace them (or feed through any templating engine) and swap `{{logo_url}}` for a public HTTPS URL.

- **Email** — `templates/email-template.html`. Table-based, inline styles, 600px, dark. Placeholders: `subject, preheader, eyebrow, headline, content, cta_label, cta_url, footer_note, logo_url`.
- **Website** — `templates/website-template.html`. Responsive, CSS variables in `:root`, sticky nav / hero / content / footer.
- **Report** — `templates/report-template.html`. Flagship editorial layout. Build sections from `.section`, `.finding`, `.metric-grid`, and `.chart-wrap` blocks. Charts: call `mmChart(canvasId, labels, values, {max})` for a branded gradient bar chart. See `examples/report-example.html` for the full Pilot Impact Report rendered in-brand.
- **Cover / banner** — `templates/cover-template.html`. A 3:2 hero banner over the official cover art with a title overlay in the text-safe zone. Set the `.cover` `background-image` to a colorway from `assets/covers/`. Placeholders: `cover_image, eyebrow, title, subtitle, logo_url`. See `examples/cover-example.html` for all three colorways.
- **Deck (PPTX)** — `templates/deck-template.pptx`. A 16:9 PowerPoint deck with 11 branded layouts to pick from: cover-art **title** and **closing** slides (70%-scrim + white lockup), **agenda**, **section divider**, bulleted **content**, **two-column**, **process/steps**, four-up **metric** (white numerals, mono labels), **comparison** (Without/With panels, mint accent), **quote**, and centered **statement**. **Geist and Geist Mono are embedded** in the file, so it renders on-brand even where the fonts aren't installed (`assets/fonts/` holds the static TTFs). Edit the placeholder text directly in PowerPoint / Keynote / Google Slides. See `examples/deck-example.pptx` for the landing narrative filled in. Regenerate with `python3 templates/deck-builder.py` (needs `python-pptx`, `pillow`, `fonttools`) after changing brand tokens.

## Salesforce Lightning theme mapping

For the "Configure Salesforce UI Theme" recipe (SLDS 1 exposes three color slots):

| Salesforce slot | Brand token | Hex |
|---|---|---|
| Brand accent (`colors.primary`) | Coral | `#FA6863` |
| Header / navbar (`colors.secondary`) | Ink | `#0A0A0A` |
| Page background (`colors.background`) | Ink | `#0A0A0A` |

(See `brand-config.json` → `salesforceTheme`.)

---

## Publishing

To make this reusable across MeshMesh tasks, publish it as a **brandkit** reference (subType `brandkit`) so agents can attach it — the same way the app's existing "Salesforce Brandkit" reference works. This kit is structured to drop straight into that flow.

_Sources: MeshMesh Studio app design system; MeshMesh Salesforce Pilot Impact Report (Feb 8 – Mar 29, 2026). Master brand kit v1.0 · 2026._
