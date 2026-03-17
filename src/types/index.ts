/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Portfolio Type Definitions
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * These interfaces describe the shape of all content used across the site.
 * All site data is provided through `src/config.ts`; these types enforce
 * correctness and provide editor autocompletion when editing the config.
 */

// ─── Site-wide metadata & navigation ─────────────────────────────────────────

export interface SiteMeta {
  /** Browser tab title */
  title: string;
  /** Meta description (SEO / Open Graph) */
  description: string;
  /** GitHub profile URL */
  githubUrl: string;
  /** LinkedIn profile URL */
  linkedinUrl: string;
  /**
   * Path or URL to your résumé PDF.
   * Use a relative path like '/resume.pdf' to host it in the public/ folder,
   * or a full URL to an external host (e.g. Google Drive viewer link).
   */
  resumeUrl: string;
}

// ─── Hero section ─────────────────────────────────────────────────────────────

export interface HeroConfig {
  /** Short greeting shown above the name (e.g. "Hello, I'm") */
  greeting: string;
  /** Full display name */
  name: string;
  /** Monospace handle / alias shown below the name */
  handle: string;
  /**
   * Array of rotating taglines the typing animation cycles through.
   * Keep each one under ~60 chars for best display on mobile.
   */
  taglines: string[];
  /** Short bio paragraphs rendered below the tagline */
  bio: string[];
  /** Primary CTA button */
  cta: { label: string; href: string };
  /** Secondary CTA (e.g. "View Resume") - optional */
  ctaSecondary?: { label: string; href: string };
}

// ─── Experience ───────────────────────────────────────────────────────────────
export interface ExperienceConfig {
  /** Short tagline shown in the section header */
  tagline: string;
  entries: ExperienceEntry[];
}

// ─── Experience section ───────────────────────────────────────────────────────

export interface ExperienceEntry {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  /** Display string, e.g. "2022 – Present" */
  period: string;
  location?: string;
  /** Short paragraph placed at the top of the card */
  summary: string;
  /** Bullet-point achievements; lead with impact metrics where possible */
  highlights: string[];
  /** Badges shown at the bottom of the card */
  technologies: string[];
}

// ─── Skills section ───────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  /**
   * Proficiency level from 1–5.
   * 1 = familiar, 3 = proficient, 5 = expert / deep SME
   */
  level: number;
}

export interface SkillCategory {
  /** Display name for the skill group */
  category: string;
  /** Lucide icon name (Pascal-case component name, e.g. "Cloud", "Terminal") */
  icon: string;
  skills: Skill[];
}

// ─── GitHub / Open-Source projects section ───────────────────────────────────

export interface GitHubProject {
  id: string;
  title: string;
  repo: string;
  description: string;
  languages: string[];
  technologies: string[];
  liveUrl?: string;
  /** If true, card is rendered in a "coming soon" state */
  comingSoon?: boolean;
}

// ─── Projects section ─────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  /** One-liner business/engineering impact statement */
  impact: string;
  technologies: string[];
  /** If true, the card is rendered larger in a featured position */
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

// ─── Community section ────────────────────────────────────────────────────────

export interface CommunityEntry {
  title: string;
  description: string;
  /** Quantifiable metric to highlight, e.g. "500 members" */
  metric?: string;
  /** Lucide icon name */
  icon: string;
}

// ─── Education section ───────────────────────────────────────────────────────

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  /** Display string, e.g. "2012" or "2008 - 2012" */
  year: string;
  /** Optional extra detail lines */
  highlights?: string[];
}

// ─── Certifications section ───────────────────────────────────────────────────

export interface Certification {
  name: string;
  /** Issuing body, e.g. "Microsoft", "AWS" */
  issuer: string;
  /** Year earned */
  year?: string;
  /** Optional credential or badge ID */
  credentialId?: string;
  /** Lucide icon name - defaults to "Award" */
  icon?: string;
}

// ─── Hobbies section ──────────────────────────────────────────────────────────

export interface Hobby {
  name: string;
  /** Lucide icon name */
  icon: string;
  description: string;
}

// ─── Testimonials section ─────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  /**
   * Optional initials for the avatar fallback (e.g. "JD").
   * If omitted, initials are derived from `author` automatically.
   */
  initials?: string;
}

// ─── Contact section ──────────────────────────────────────────────────────────

export interface ContactConfig {
  heading: string;
  subheading: string;
  /** Displayed & linked in the contact section */
  email?: string;
  /** Calendly booking URL — inline embed shown when provided */
  calendlyUrl?: string;
}

// ─── Root config ──────────────────────────────────────────────────────────────

export interface SiteConfig {
  meta: SiteMeta;
  hero: HeroConfig;
  experience: ExperienceConfig;
  education: EducationEntry[];
  certifications: Certification[];
  skills: SkillCategory[];
  projects: Project[];
  githubProjects: GitHubProject[];
  community: CommunityEntry[];
  hobbies: Hobby[];
  testimonials: Testimonial[];
  contact: ContactConfig;
}
