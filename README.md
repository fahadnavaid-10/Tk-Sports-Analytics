# 🚀 TK Sports Analytics
A data-driven sports analytics landing site and marketing front-end that showcases verified performance metrics, real-time tracking, and conversion funnels for sports bettors and subscribers. It serves product managers and growth teams who need a lightweight, high-converting UI to present models, capture leads, and track conversions.

---

### 🛠️ Tech Stack & System Architecture
- **Core Languages & Frameworks:** TypeScript + React (Next.js App Router)  
- **Tools & Ecosystem:** Next.js (v16), Tailwind CSS (v4), Chart.js + react-chartjs-2 for charts, PostCSS, npm (package-lock.json present)  
- **Why this stack?** Next.js + Tailwind gives a performant, SEO-friendly marketing site with rapid development and pixel-perfect UI—ideal for high-conversion landing pages that also embed dynamic analytics visuals.

---

### 📊 Repository Insights & Performance Metrics
<p align="left">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=fahadnavaid-10&repo=Tk-Sports-Analytics&theme=tokyonight" height="150" alt="Repo Pin" />
  <img src="https://github-readme-stats.vercel.app/api?username=fahadnavaid-10&show_icons=true&theme=tokyonight&count_private=true" height="150" alt="GitHub Stats" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=fahadnavaid-10&repo=Tk-Sports-Analytics&layout=compact&theme=tokyonight" height="150" alt="Top Languages" />
</p>

---

### 📂 Repository File Structure
```text
├── .gitignore               # Ignored files & build artifacts
├── AGENTS.md                # Notes / agent-driven automation doc (project-specific)
├── CLAUDE.md                # Integrations / model notes (project-specific)
├── README.md                # This file (marketing + run instructions)
├── app/                     # Next.js App Router pages (layout.tsx, page.tsx, CSS)
│   ├── page.tsx             # App entry that composes sections (Hero, CTA, FAQ, etc.)
│   └── globals.css          # Global styles and theme tokens
├── components/              # Reusable UI sections (Hero, CTA, Timer, Charts, Footer)
│   ├── HeroSection.tsx      # Hero + ticker + animated counters
│   ├── CountdownTimer.tsx   # Urgency component (dynamic)
│   └── SocialProofSection.tsx
├── lib/                     # Small client-side utilities (analytics pixel)
│   └── pixel.ts             # Meta/Facebook Pixel integration + event helpers
├── public/                  # Static assets (images, favicon)
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS config (Tailwind integration)
├── package.json             # Scripts & dependencies (Next, React, Chart.js)
├── package-lock.json        # Exact dependency tree
├── tsconfig.json            # TypeScript config
├── eslint.config.mjs        # Lint rules
```

Notes
- app/page.tsx orchestrates UX by composing Hero, Countdown, SocialProof, Stats, CTA, and Footer components.
- components/* contains multiple production-ready UI sections with animations, progressive counters, and Chart.js usage for visual analytics.
- lib/pixel.ts integrates Meta Pixel events for PageView, Lead, and custom Telegram CTA tracking — useful for growth experiments.

---
