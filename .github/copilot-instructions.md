# Copilot Instructions

## Technology Stack
- **Cloud Provider:** Cloudflare
- **Primary Language:** TypeScript
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS + custom CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React

## Coding Standards

### General Principles
- Prefer explicit over implicit
- Write self-documenting code with clear variable names

### Error Handling
- Always handle errors explicitly
- Use custom error types for domain-specific errors
- Log errors with context (correlation IDs, user context)
- Never swallow exceptions silently

### Security Requirements
- Never hardcode secrets, credentials, or API keys
- Validate and sanitize all user inputs
- Follow OWASP guidelines for web applications

## Testing Requirements
- Minimum 80% code coverage for new code
- All public APIs must have unit tests
- Integration tests required for external service calls
- Use Vitest for all tests

## Git Workflow
- Use conventional commits (feat:, fix:, docs:, etc.)
- Branch naming: feature/[ticket-id]-description
- Squash commits before merging
- All PRs require at least one approval

## Documentation
- Update README.md for any new features
- Include inline comments for complex logic
- Create ADRs for significant architectural decisions

## Commit Message Format

Format: `type(scope): description`

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, no code change
- `refactor`: Code change that neither fixes nor adds
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes

### Examples
```
feat(auth): add Azure AD B2C integration
fix(api): handle null response from payment service
docs(readme): add deployment instructions
refactor(utils): extract date formatting to shared module
```

### Breaking Changes
Add `!` after type: `feat(api)!: remove deprecated endpoints`

## Branding Guidelines

### Company Voice
- Professional but approachable
- Use "I" not "we" in documentation
- Avoid jargon when simpler terms exist
- Lead with benefits, not features

### Documentation Standards
- Use sentence case for headings
- Add screenshots for UI documentation
- Keep paragraphs under 4 sentences

### Terminology
- Company name is "PseudoCoding, LLC" - always capitalized

## Commands

```bash
npm run dev      # Dev server at http://localhost:5173 (Vite HMR)
npm run build    # tsc -b && vite build → outputs to dist/
npm run lint     # ESLint (flat config, targets .ts/.tsx)
npm run preview  # Build + serve locally via wrangler dev
npm run deploy   # Build + deploy to Cloudflare Pages via wrangler
```

There are no tests. Lint is the primary validation step.

## Architecture

This is a **single-page, scroll-based portfolio** (no React Router). All navigation uses anchor links that scroll to section IDs.

### Config-driven content

`src/config.ts` is the single source of truth for all portfolio data. Components are pure presentation—they receive typed slices of the config as props and render them. To update content, edit only `config.ts`. The corresponding TypeScript interfaces live in `src/types/index.ts`.

```
src/config.ts ──→ App.tsx ──→ sections/ components
                               (each receives its typed config slice)
```

### Component organization

```
src/components/
  layout/    → Navbar, Footer
  ui/        → Reusable primitives (SectionHeader, ScrollProgress, Icon)
  sections/  → Full-page sections (Hero, Experience, Skills, Projects, …)
```

`App.tsx` composes all sections in order. The section render order is:
Hero → Experience → Education & Certs → Skills → Projects → GitHub Projects → Community → Hobbies → Testimonials → Contact

### Icon registry

`src/components/ui/Icon.tsx` is a manual registry of Lucide icons. Only icons added to this registry are bundled. When adding a new icon, import it from `lucide-react` and add it to the map in `Icon.tsx`.

## Key Conventions

### Tailwind + custom CSS

Tailwind utility classes are primary. Reusable multi-property patterns are defined as `@layer components` in `src/index.css`:

- `.glass-card` / `.glass-card-hover` — glassmorphism surface style
- `.gradient-text` — cyan-to-indigo gradient text
- `.section-wrapper` — standard section padding/max-width (`max-w-7xl px-6 lg:px-12 py-24`)
- `.tech-badge` — cyan-tinted pill label
- `.btn-primary` / `.btn-outline` — CTA button variants

CSS custom properties (e.g. `--accent: #00f5d4`) are defined in `src/index.css` and correspond to the extended cyan palette in `tailwind.config.js`.

Custom fonts are Space Grotesk (`font-sans`) and JetBrains Mono (`font-mono`), loaded from Google Fonts in `index.html`.

### Framer Motion animations

Entry animations follow a consistent pattern:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-40px' }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

`viewport={{ once: true }}` is used on all scroll-triggered animations. Stagger delays use `index * 0.1`.

Spring-based 3D tilt (used in Projects) uses `useMotionValue`, `useSpring`, and `useTransform`.

### TypeScript

Strict mode is on (`noUnusedLocals`, `noUnusedParameters`). Every config shape has a corresponding interface in `src/types/index.ts`. Components are typed with explicit prop interfaces—no `any`.

New content types: add the interface to `types/index.ts`, extend `config.ts`, then consume in the component.

### State management

No external state libraries. `useState` is used only for local UI state (expand/collapse, hover, mobile menu, typing animation index). All content state comes from `config.ts` at build time.

## Deployment

Deployed to **Cloudflare Pages** via Wrangler. `wrangler.jsonc` configures SPA fallback (all unknown routes → `index.html`) and NodeJS compatibility. The compatibility date controls available Cloudflare runtime APIs—update it intentionally.

## Build output

Vite splits the bundle into named chunks for cache efficiency:
- `vendor-react` — React core
- `vendor-motion` — Framer Motion (~250 KB uncompressed, isolated so app changes don't bust its cache)
- `vendor-icons` — Lucide React
- `vendor-utils` — other dependencies

The `chunkSizeWarningLimit` is set to 600 KB to account for the animation library.
