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
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileDown, ChevronDown } from 'lucide-react';
import type { HeroConfig, SiteMeta } from '../../types';

interface HeroProps {
  hero: HeroConfig;
  meta: SiteMeta;
}

/** Floating ambient blobs rendered behind the content */
function AmbientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top-left teal blob */}
      <div
        className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,212,0.35) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Bottom-right indigo blob */}
      <div
        className="absolute -bottom-48 -right-24 h-[500px] w-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.45) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
}

/** A single character of the cursor-blink indicator */
function Cursor() {
  return (
    <motion.span
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
      className="pointer-events-none absolute inset-0 opacity-40"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,245,212,0.18) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
      }}
    />
  );
}

export function Hero({ hero, meta }: HeroProps) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  /** Typing animation effect */
  const animate = useCallback(() => {
    const full = hero.taglines[taglineIndex];
    if (!isDeleting) {
      if (displayed.length < full.length) {
        setDisplayed(full.slice(0, displayed.length + 1));
      } else {
        // Wait 2s before deleting
        setTimeout(() => setIsDeleting(true), 2000);
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
    const speed = isDeleting ? 35 : 60;
    const timer = setTimeout(animate, speed);
    return () => clearTimeout(timer);
  }, [animate, isDeleting]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      className="scanline-overlay relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
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
          className="text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl"
        >
          {hero.name}
        </motion.h1>

        {/* Handle */}
        <motion.p variants={itemVariants} className="mt-2 font-mono text-sm text-slate-500">
          {hero.handle}
        </motion.p>

        {/* Typing tagline */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex h-12 items-center justify-center"
        >
          <span className="text-xl font-semibold text-cyan-400 sm:text-2xl md:text-3xl">
            {displayed}
            <Cursor />
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
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <span className="h-px w-8 bg-slate-700" />
          <a
            href={meta.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-slate-600"
        >
          <span className="mono-label text-xs">scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
