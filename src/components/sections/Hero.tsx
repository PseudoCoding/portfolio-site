/**
 * Hero Section
 * ────────────
 * Full-viewport landing section with:
 *   • Animated background grid + radial glow
 *   • Typed tagline cycling through config.hero.taglines
 *   • Name, handle, bio, and CTA buttons
 *   • Floating tech-stack pill strip
 *   • Scroll cue at the bottom
 *
 * All content is driven by config.hero.
 */
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileDown } from 'lucide-react';
import type { HeroConfig, SiteMeta } from '../../types';

interface HeroProps {
  hero: HeroConfig;
  meta: SiteMeta;
}

/** Floating ambient blobs rendered behind the content */
function AmbientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Single top-center phosphor green glow */}
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[min(700px,150vw)] -translate-x-1/2 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(134,227,61,0.4) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
    </div>
  );
}

/** A single character of the cursor-blink indicator */
function Cursor() {
  return (
    <motion.span
      aria-hidden="true"
      className="ml-0.5 inline-block h-7 w-0.5 bg-cyan-400 align-middle"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
    />
  );
}

/** Dot-grid SVG pattern tiled across the section background */
function DotGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-30"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(134,227,61,0.22) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
      }}
    />
  );
}

/** Staggered entrance animation variants — defined at module level to avoid re-creation on render */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Hero({ hero, meta }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  // Ref to clean up the 2-second pause timer between type/delete cycles
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** Typing animation effect — skipped when user prefers reduced motion */
  const animate = useCallback(() => {
    if (!hero.taglines.length) return;
    const full = hero.taglines[taglineIndex];
    if (!isDeleting) {
      if (displayed.length < full.length) {
        setDisplayed(full.slice(0, displayed.length + 1));
      } else {
        // Pause 2s before deleting; store the timer so it can be cleaned up
        pauseTimerRef.current = setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      if (displayed.length > 0) {
        setDisplayed(displayed.slice(0, -1));
      } else {
        setIsDeleting(false);
        setTaglineIndex((i) => (i + 1) % hero.taglines.length);
      }
    }
  }, [displayed, isDeleting, taglineIndex, hero.taglines]);

  useEffect(() => {
    // Clean up pause timer on unmount
    return () => {
      if (pauseTimerRef.current !== null) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  useEffect(() => {
    // Skip the typing animation entirely for users who prefer reduced motion
    if (prefersReducedMotion) return;
    const speed = isDeleting ? 35 : 60;
    const timer = setTimeout(animate, speed);
    return () => clearTimeout(timer);
  }, [animate, isDeleting, prefersReducedMotion]);

  // For reduced motion: show the first tagline statically without typing
  const visibleTagline = prefersReducedMotion ? (hero.taglines[0] ?? '') : displayed;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <AmbientBlobs />
      <DotGrid />

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p variants={itemVariants} className="mono-label mb-4 text-base">
          {hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl lg:text-8xl"
        >
          {hero.name}
        </motion.h1>

        {/* Handle */}
        <motion.p variants={itemVariants} className="mt-4 font-mono text-sm text-slate-500">
          {hero.handle}
        </motion.p>

        {/* Typing tagline */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex min-h-12 items-center justify-center"
        >
          {/* Visual typing animation — hidden from assistive technology */}
          <span aria-hidden="true" className="text-xl font-semibold text-cyan-400 sm:text-2xl md:text-3xl">
            {visibleTagline}
            {!prefersReducedMotion && <Cursor />}
          </span>
          {/* Screen reader gets the complete current tagline, announced once on change */}
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            {hero.taglines[taglineIndex]}
          </span>
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="mt-8 space-y-3">
          {hero.bio.map((para, i) => (
            <p key={i} className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 text-balance">
              {para}
            </p>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href={hero.cta.href} className="btn-primary">
            {hero.cta.label}
            <ArrowRight size={16} />
          </a>
          {hero.ctaSecondary && (
            <a
              href={hero.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FileDown size={16} />
              {hero.ctaSecondary.label}
            </a>
          )}
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <a
            href={meta.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
          >
            <Github size={16} />
            GitHub
          </a>
          <span className="h-px w-8 bg-slate-700" />
          <a
            href={meta.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
