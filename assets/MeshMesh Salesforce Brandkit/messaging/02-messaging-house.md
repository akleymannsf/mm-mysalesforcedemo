# MeshMesh — Messaging House

> **Purpose.** The pillar architecture that turns the [positioning](01-positioning.md) into repeatable messaging. One roof (the core message), four pillars (value themes), and a foundation (proof). Every headline, section, or agent-generated claim should ladder up to a pillar and rest on the foundation.
>
> **How to use with an LLM.** Each pillar below carries (a) a one-line claim, (b) **binary rules** for staying on-message, (c) **Do / Don't** paired examples, and (d) the proof it's allowed to cite. Feed the pillar block relevant to the task; enforce the Do/Don't pairs as few-shot exemplars.

---

## 🏠 The roof — core message

> **MeshMesh collapses Salesforce setup from months to minutes. You define the outcome, approve the plan, and MeshMesh executes it end-to-end — and gets better with every run.**

Short forms (all approved, pick by space):
- **"Explicit intent in. Enterprise-grade execution out."**
- **"Define the outcome. Approve the plan. Execute."**
- **"Making Salesforce simple."**
- **"It builds Agentforce… and beyond."**

**Binary rules for the roof**
1. The roof line must contain **either** the words "months to minutes" **or** a specific speed multiplier/percentage.
2. It must name the mechanism as **plan → execute** (never "generate," never "auto-magically").
3. It must be **≤ 20 words** in headline use.

---

## 🎯 The Maestro frame — strategic umbrella

**The Maestro Vision: "We make the complex, Salesforce simple."**

**Maestro** is Salesforce's new AI-native, agent-driven initiative to make using and implementing *any* Salesforce product simple. **MeshMesh is part of Maestro — the engine proving it works, today.** Maestro sets the direction; MeshMesh is the running proof: real users, real orgs, real outcomes, right now.

**The Maestro value motion:** **Diagnose → Fix → Innovate.**
- **Diagnose** — assess the org; surface tech debt, gaps, and opportunities.
- **Fix** — clear the backlog: configure, build, deploy, and verify.
- **Innovate** — move past keeping the lights on to net-new capability.

**Binary rules for the Maestro frame**
1. Lead with **Maestro** for strategic/executive or vision-level pieces; lead with **MeshMesh** when the piece is about the product doing the work.
2. Approved line: *"Maestro is the vision. MeshMesh is the engine proving it works, today."*
3. Never conflate the two motions: **Diagnose → Fix → Innovate** is the Maestro value arc; **Define → Approve → Execute** is how a single MeshMesh task runs.

---

## 🏛 Pillar 1 — Salesforce-first, not code-first

**Claim:** MeshMesh knows Salesforce — 40+ products, 387+ features — the way generic AI tools know only code.

**Binary rules**
- Always attribute the depth to Salesforce specifically (name a cloud or feature when possible).
- When contrasting with Cursor / Claude Code / Copilot, use the sanctioned frame: *"know code, not Salesforce."*
- Never claim MeshMesh writes better generic code than a coding assistant — that's not the axis.

**Do / Don't**
- ✅ *"MeshMesh understands multi-org architecture, sandbox syncing, and governor limits — not just Apex syntax."*
- ❌ *"MeshMesh is a smarter coding copilot for Salesforce developers."*
- ✅ *"Cursor and Copilot know code. MeshMesh knows Salesforce."*
- ❌ *"MeshMesh beats Cursor at everything."* (Disparaging, unsupported.)

**Proof it may cite:** 40+ products / 387+ features; browser automation for screens with no API; multi-org deploy + UAT; the landscape table.

---

## 🏛 Pillar 2 — Autonomous end-to-end execution (it finishes the job)

**Claim:** Other tools stop at code. MeshMesh executes all the way to a verified outcome — plan, build, configure, deploy, test, document, iterate.

**The eight stages (name them in order when detailing):**
1. **Plan** — co-creates the detailed build plan with you.
2. **Build** — Apex, LWC, flows, validation rules, metadata.
3. **Configure** — navigates the Setup UI via an autonomous browser.
4. **Deploy** — pushes to orgs, sandbox syncing, CI/CD.
5. **Test** — end-to-end UAT with a pass/fail report.
6. **Document** — auto-generates references, guides, PDFs.
7. **Iterate** — takes feedback mid-session, self-corrects.
8. **Outcomes** — verified outcomes + ROI proof-of-value.

**Binary rules**
- Any "autonomous" claim in the same section must be paired with the **human approval gate** (planning + validation bookends).
- Use "executes" / "builds" / "configures" / "deploys" — concrete verbs — never "handles everything for you" hand-waving.
- Browser automation is described as *first-class execution*, never "screen scraping."

**Do / Don't**
- ✅ *"MeshMesh navigates the Setup UI via an embedded browser — even screens with no API — then verifies the result with a screenshot."*
- ❌ *"MeshMesh scrapes Salesforce screens to click around for you."*
- ✅ *"You approve the plan; MeshMesh runs the build autonomously and pauses before any state-changing action."*
- ❌ *"Set it and forget it — MeshMesh changes your production org on its own."* (Violates the approval-gate rule.)

**Proof it may cite:** the 8-stage pipeline; 11.4x fewer steps; browser-beyond-the-API; auto-generated docs; pass/fail UAT.

---

## 🏛 Pillar 3 — Built for business users, in plain language

**Claim:** Describe the outcome in plain English. MeshMesh handles the technical complexity and reports back in business language — outcomes, not API calls.

**Binary rules**
- Customer-facing product copy describes the **business result**, never the technical action. (See translation rule in [`03-voice-and-tone.md`](03-voice-and-tone.md).)
- "No technical expertise needed" is allowed **only** for the user's input side (describing intent), never as a claim that the work itself is trivial.
- Use present-progressive titles for in-progress actions ("Retrieving sales records…") and past-tense summaries on completion ("19 sales records retrieved").

**Do / Don't**
- ✅ *"Created your campaign with these segments and this schedule."*
- ❌ *"POST /interaction/v1/interactions with a 47-field JSON body succeeded."*
- ✅ *"Describe what you need in plain language — no APIs, objects, or dependencies to learn."*
- ❌ *"Simply leverage our intuitive interface to seamlessly configure your org."* (Forbidden words; hype.)

**Proof it may cite:** real-time business-language translation; interface-agnostic access (Studio, Slack, Lightning, IDE, MCP); "any user, any tool."

---

## 🏛 Pillar 4 — Compounding intelligence (it gets better with every run)

**Claim:** MeshMesh isn't static. A three-context model and a learning flywheel make every run deepen the platform's Salesforce knowledge, your organization's context, and each user's preferences.

**The Three-Context Model (name all three when explaining):**
- **Execution context** — what the agent knows about the platform (deepens each run; platform knowledge only, no tenant data).
- **Business context** — what it knows about *your* organization (naming, approvals, patterns).
- **Operator context** — what it knows about *you* (role, defaults, working style).

**Binary rules**
- "Learns / improves / compounds" claims must be grounded in the flywheel or three-context model — never vague "AI that gets smarter."
- Never imply cross-tenant data sharing. Only **business-stripped learnings** flow to the shared knowledge base; execution happens on tenant-isolated workers.
- "Amorphous agents" = assembled fresh at runtime; never "pre-built" or "pre-configured."

**Do / Don't**
- ✅ *"Every run deepens three independent context models — the platform, your org, and you — so the next task starts smarter."*
- ❌ *"Our revolutionary AI keeps getting smarter automatically."* (Forbidden word; vague; no mechanism.)
- ✅ *"Learnings flow back business-stripped — your data never crosses tenant boundaries."*
- ❌ *"MeshMesh shares what it learns across all customers to improve for everyone."* (Misstates tenant isolation.)

**Proof it may cite:** three-context model; intelligence flywheel (Execution Platform / Knowledge Pipeline / Context Acquisition); knowledge packages = thousands of agent-hours; tenant isolation.

---

## 🧱 The foundation — shared proof base

Every pillar rests on this. (Full library with qualifiers lives in [`01-positioning.md` §5](01-positioning.md).)

- **Speed:** months → minutes; 90% time back; 11.4x fewer steps (Jul 2026).
- **Scale:** 40+ products, 387+ features, 3,500+ daily users, 6,000+ tasks.
- **ROI:** ~100,000+ hours saved, 11x ROI.
- **Trust:** human approval gate; tenant isolation; ZIVIS Trust Framework (13 dimensions); 600+ adversarial test scenarios; OWASP LLM Top 10; SOC 2 readiness.

**Representative task table (approved, public-safe speed %):**

| Use case | With MeshMesh | Without | Faster |
|---|---|---|---|
| RFP → POC & Response | 45 min | ~40 hrs | 98% |
| Agentforce Quickstart | 15 min | ~10 hrs | 98% |
| Marketing Cloud Quickstart | 10 min | ~6 hrs | 97% |
| Account Solution Cloning | 60 min | ~20 hrs | 96% |
| Data 360 Quickstart | 45 min | ~10 hrs | 93% |
| Loyalty Program Setup | 15 min | ~10 hrs | 97% |
| Custom LWC from Screenshot (Service) | 10 min | ~8 hrs | 98% |

---

## Message-to-audience map

| Audience | Lead pillar | Lead proof |
|---|---|---|
| Solution Engineers / Technical Architects | Pillar 2 (finishes the job) | 8-stage pipeline; 11.4x fewer steps |
| FDEs / Professional Services | Pillar 1 (Salesforce-first) | multi-org deploy + UAT; 40+ products |
| Customer Success / Account Managers | Pillar 3 (plain language) | business-language translation; time back |
| Exec / economic buyer | Roof + foundation | 11x ROI; ~100,000+ hours saved |
| Security / risk reviewer | Pillar 4 + Trust foundation | tenant isolation; ZIVIS; 600+ adversarial tests |
