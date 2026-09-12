# Ansel Dong — Personal Portfolio Website

A modern, high-polish personal portfolio website for Ansel Dong—a middle-school student applying to high schools, focusing on software development, robotics, music, and athletics.

Designed with inspiration from **Apple**, **Linear**, and **Stripe**: minimal, clean, generous whitespace, sharp typography, glassmorphic headers, subtle borders, and smooth transitions.

---

## Live Site & URL

- **Production URL**: [https://anseldong.github.io](https://anseldong.github.io)
- **Primary Sections**:
  - **Home**: Personal greeting, focus areas, spotlight projects, and live exploration status.
  - **Projects**: Filterable catalog (Software, Hardware, Experimental) with 7-step engineering case study breakdowns.
  - **Robotics**: 4-season VEX IQ timeline (SAESPride, Cheese Sandwich, Eureka³, Indiana Jones), awards, rankings, and engineering takeaways.
  - **Apps**: Mini developer portfolio highlighting published iOS applications (4,400+ total downloads, Mix & Match Calculator, Rapid Relay Calculator, GoodNeighbor).
  - **Music**: Clarinet in Saint Andrew’s Symphonic Band (earned first-ever gold plaque) and Piano (ABRSM Grade 6 Distinction, Grade 7 Merit).
  - **Swimming**: Santa Clara Swim Club competitive career (4+ years), 14-year-old Far Westerns medals, championship qualifying times, and reflections on incremental grit.
  - **About**: Core philosophy on curiosity and building, STEM interests, math competition record (BmMT, AMC 8, Math Kangaroo #1), and community service.
  - **Résumé**: High-density digital résumé strictly reflecting the source Google Doc with clean print-to-PDF styles (`@media print`).
  - **How I Build**: 7-step engineering cycle: Idea → Why → Prototype → Break It → Fix It → Ship → What did I learn?

---

## Architecture & Codebase Structure

```text
anseldong.github.io/
├── index.html                   # HTML entry point with SEO & theme preload script
├── package.json                 # Node dependencies (React 19, Vite, Tailwind CSS, Lucide)
├── tailwind.config.js           # Custom design tokens, dark mode, typography
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite bundler configuration
├── public/                      # Static assets & .nojekyll flag
├── src/
│   ├── types/
│   │   └── portfolio.ts         # Strongly-typed data interfaces
│   ├── data/
│   │   └── portfolioData.ts     # SINGLE SOURCE OF TRUTH for all content & awards
│   ├── components/
│   │   ├── Navbar.tsx           # Glassmorphic persistent header & mobile drawer
│   │   ├── Footer.tsx           # Product-style footer with deep links
│   │   ├── ThemeToggle.tsx      # System / Light / Dark mode toggle
│   │   ├── Badge.tsx            # Reusable status and category pills
│   │   ├── SectionHeader.tsx    # Standardized section headings
│   │   └── ProjectModal.tsx     # 7-step engineering deep-dive dialog
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── RoboticsPage.tsx
│   │   ├── AppsPage.tsx
│   │   ├── MusicPage.tsx
│   │   ├── SwimmingPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ResumePage.tsx
│   │   └── HowIBuildPage.tsx
│   ├── App.tsx                  # Hash routing & view controller
│   ├── main.tsx                 # React entry point
│   └── index.css                # Tailwind directives & print media rules
└── .github/workflows/
    └── deploy.yml               # Automated GitHub Pages deployment action
```

---

## How to Update Portfolio Content

To update any accomplishments, app download metrics, awards, or new projects:
1. Open [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).
2. Edit the corresponding entry (e.g. `PERSONAL_INFO`, `PROJECTS_DATA`, `ROBOTICS_SEASONS`, `APPS_DATA`, `MUSIC_DATA`, `SWIMMING_DATA`, `MATHEMATICS_DATA`, `SERVICE_EXPERIENCE_DATA`).
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio achievements"
   git push origin main
   ```
   GitHub Actions will automatically build and deploy the updated site to `https://anseldong.github.io`.

---

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Builds static assets into the `dist/` folder.

---

## Features & Accessibility

- **System / Dark / Light Mode**: Auto-detects system theme and persists user preferences.
- **Deep Linking**: URL hash routes (`#projects`, `#robotics`, `#apps`, `#music`, `#swimming`, `#about`, `#resume`, `#how-i-build`) allow admissions reviewers to link directly to specific sections.
- **Printable Résumé**: Clicking "Print / Save as PDF" cleanly formats the résumé without web navigation headers, footers, or dark background fills.
- **Accessible & Responsive**: Fully responsive from 375px mobile screens to large desktop monitors, with keyboard navigation and reduced-motion support.
