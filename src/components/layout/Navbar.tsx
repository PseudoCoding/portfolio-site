/**
 * Navbar
 * ──────
 * Fixed top navigation bar. Backgrounds blur in on scroll.
 * Active section is highlighted via Intersection Observer.
 * Renders a hamburger menu on mobile.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileDown, Terminal } from 'lucide-react';
import { useOsModifier } from '../../hooks/useOsModifier';
import type { SiteMeta } from '../../types';

interface NavbarProps {
  meta: SiteMeta;
}

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#hobbies' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ meta }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');
  const { label: modifierLabel } = useOsModifier();

  // Blur navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo / wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-mono text-base font-bold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
          >
            <span className="text-slate-500">{'// '}</span>
            PseudoCoding
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === href.slice(1);
              return (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a] ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-cyan-400/10"
                    />
                  )}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* Social icons + CTA */}
          <div className="hidden items-center gap-3 xl:flex">
            {/* Command palette trigger */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-palette'))}
              aria-label={`Open command palette (${modifierLabel})`}
              className="flex items-center gap-1.5 rounded-md border border-slate-800 px-2.5 py-1.5 font-mono text-xs text-slate-600 transition-colors hover:border-slate-700 hover:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a]"
            >
              <Terminal size={11} />
              {modifierLabel}
            </button>
            <a
              href={meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={meta.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={meta.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline ml-2 !py-2 !text-xs"
            >
              <FileDown size={14} />
              Résumé
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a] rounded-md xl:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop — click to close */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/60 xl:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.25 }}
              className="fixed inset-y-0 right-0 z-40 w-[min(256px,85vw)] border-l bg-slate-950 border-cyan-400/10 pt-20 px-4 sm:px-6 xl:hidden"
            >
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <button
                    key={href}
                    onClick={() => handleNav(href)}
                    className="rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a]"
                  >
                    {label}
                  </button>
                ))}
                <div className="mt-6 flex gap-4 px-4">
                  <a href={meta.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a] rounded-sm">
                    <Github size={18} />
                  </a>
                  <a href={meta.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a] rounded-sm">
                    <Linkedin size={18} />
                  </a>
                </div>
                <a href={meta.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-4 justify-center">
                  <FileDown size={14} />
                  Résumé
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
