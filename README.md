# portfolio-site

Personal portfolio site for Devin Houde ([@PseudoCoding](https://github.com/PseudoCoding)).

Built with **React 19 + Vite + TypeScript + Tailwind CSS + Framer Motion**.
Ships as a fully static SPA — no server required.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

---

## Customizing Content

**All site content lives in one file: [`src/config.ts`](src/config.ts)**

You never need to touch a component to update your portfolio. The config is fully typed via [`src/types/index.ts`](src/types/index.ts) — your editor will autocomplete and catch mistakes.

### What you can change:

| Key | What it controls |
|---|---|
| `meta` | Browser title, meta description, GitHub/LinkedIn URLs, résumé PDF path |
| `hero` | Name, handle, rotating taglines, bio paragraphs, CTA buttons |
| `experience` | Timeline entries — company, role, period, summary, highlights, tech badges |
| `skills` | Skill categories and proficiency levels (1–5) |
| `projects` | Project cards — description, highlights, impact, tech, featured flag |
| `community` | Community/leadership cards with metrics |
| `hobbies` | Personal interest tiles |
| `testimonials` | Quote cards — update with real LinkedIn recommendations |
| `contact` | Heading, subheading, optional email |

### Adding your résumé PDF

1. Drop your résumé PDF into `public/resume.pdf`
2. Set `meta.resumeUrl` to `'/resume.pdf'` in `src/config.ts`

The résumé download button and the "Download Résumé" CTA in the Contact section will automatically link to it.

### Changing the color palette

The design uses a **cyan (`#00f5d4`) + indigo** accent palette on a dark slate base.

To retheme, update the CSS custom properties in [`src/index.css`](src/index.css):

```css
:root {
  --accent: #00f5d4;               /* primary accent color */
  --accent-dim: rgba(0, 245, 212, 0.15);
  --accent-border: rgba(0, 245, 212, 0.2);
}
```

And the `cyan` color extension in [`tailwind.config.js`](tailwind.config.js).

### Adding icon names to config

Icon names in `config.ts` (e.g. `"Cloud"`, `"Terminal"`) map to [Lucide React](https://lucide.dev/icons/) component names.
When you add a new icon name, register it in [`src/components/ui/Icon.tsx`](src/components/ui/Icon.tsx) to keep the bundle tree-shakeable.

---

## Automated AI Recommendations

This repository includes a weekly GitHub Actions workflow that automatically opens Pull Requests for **Content**, **Aesthetics**, and **Library** updates based on AI suggestions. We leverage GitHub Models (`permissions: models: read`) to run the inference natively without external API keys.

### Setup Instructions

1. Ensure your GitHub account/organization has access to GitHub Models.
2. The Action will automatically authenticate using the `GITHUB_TOKEN`.
3. The GitHub Action will run automatically every Monday at midnight via cron, using `peter-evans/create-pull-request` to draft PRs. 

> **Note:** You can also trigger the workflow manually from the "Actions" tab in GitHub.

---

## Project Structure

```
src/
├── config.ts              # ← ALL site content lives here
├── types/
│   └── index.ts           # TypeScript interfaces for the config
├── hooks/
│   └── useScrollProgress.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Fixed top nav with active-section tracking
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── SectionHeader.tsx   # Reusable section heading component
│   │   ├── ScrollProgress.tsx  # Gradient scroll-progress bar
│   │   └── Icon.tsx            # Tree-shakeable Lucide icon registry
│   └── sections/
│       ├── Hero.tsx        # Full-viewport hero with typing animation
│       ├── Experience.tsx  # Vertical timeline
│       ├── Skills.tsx      # Animated skill bar grid
│       ├── Projects.tsx    # 3D-tilt project cards
│       ├── Community.tsx   # Community & leadership cards
│       ├── Hobbies.tsx     # Personal interests bento grid
│       ├── Testimonials.tsx
│       └── Contact.tsx     # Social links + résumé download CTA
├── App.tsx                # Wires all sections together
├── main.tsx               # React entry point
└── index.css              # Tailwind + global styles + animations
```

---

## Deployment

The output of `npm run build` is a fully static `dist/` folder. Deploy to any static host:

- **GitHub Pages** — push `dist/` to a `gh-pages` branch or use the Actions workflow
- **Netlify / Vercel** — connect the repo, set build command `npm run build`, publish dir `dist`
- **AWS S3 + CloudFront** — upload `dist/` contents, set `index.html` as the default root object

No redirects are needed since this is a single-page application with no client-side routing.

---

## Tech Stack

| Package | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 7 | Build tool & dev server |
| TypeScript | Type safety across all components |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Scroll animations, typing effect, tilt cards |
| Lucide React | Icon library (tree-shaken via Icon.tsx registry) |
| PostCSS + Autoprefixer | CSS processing |

---

## Bundle Size (production, gzipped)

| Chunk | Size |
|---|---|
| App code | ~69 KB |
| Framer Motion | ~43 KB |
| Icons (selected) | ~3 KB |
| React + React DOM | ~1.4 KB |
| CSS | ~5 KB |
| **Total** | **~122 KB** |
