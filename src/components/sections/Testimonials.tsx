/**
 * Testimonials Section
 * ─────────────────────
 * Renders testimonial quote cards from config.testimonials.
 * Falls back to initials avatar when no photo is provided.
 *
 * To add real testimonials, update config.testimonials with actual quotes
 * from LinkedIn recommendations or colleagues.
 */
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import type { Testimonial } from '../../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function getInitials(author: string): string {
  return author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const initials = t.initials ?? getInitials(t.author);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.13 }}
      className="glass-card p-6 flex flex-col gap-4 hover:border-cyan-400/30 transition-all duration-300"
    >
      {/* Quote icon */}
      <Quote size={22} className="text-cyan-400/40" />

      {/* Quote text */}
      <p className="flex-1 text-sm leading-relaxed text-slate-300 italic">"{t.quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/20 font-mono text-xs font-bold text-cyan-300">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-100">{t.author}</p>
          <p className="text-xs text-slate-500">
            {t.role}
            <span className="dot-sep" />
            {t.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="relative">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="section-wrapper">
        <SectionHeader
          eyebrow="words from others"
          headline="Recommendations"
          sub="What colleagues and collaborators say. Update these in src/config.ts with real quotes from LinkedIn or peers."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author + i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
