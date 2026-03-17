/**
 * Experience Section
 * ──────────────────
 * Renders a vertical timeline of career entries from config.experience.
 * Each card animates in as it enters the viewport.
 * Featured with:
 *   • Period badge + company name
 *   • Role headline
 *   • Summary paragraph
 *   • Collapsible highlights list
 *   • Technology badge strip
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Building2, Calendar } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import type { ExperienceEntry, ExperienceConfig } from '../../types';

interface ExperienceProps {
  config: ExperienceConfig;
}

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative pl-8 group"
    >
      {/* Timeline spine */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 group-last:bg-gradient-to-b group-last:from-slate-800 group-last:to-transparent" />
      {/* Timeline dot */}
      <div className="absolute left-[-4.5px] top-5 h-2.5 w-2.5 rounded-full border-2 border-cyan-400 bg-slate-950 ring-4 ring-slate-950" />

      <div className="glass-card p-6 mb-8 transition-all duration-300 hover:border-cyan-400/35">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 size={14} className="text-slate-500 shrink-0" />
              <span className="text-sm font-semibold text-cyan-400">{entry.company}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100">{entry.role}</h3>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
            <Calendar size={12} />
            {entry.period}
          </div>
        </div>

        {/* Summary */}
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{entry.summary}</p>

        {/* Toggle highlights */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 flex items-center gap-1.5 text-xs font-medium text-cyan-400/80 hover:text-cyan-400 transition-colors"
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.span>
          {expanded ? 'Hide' : 'Show'} highlights
        </button>

        {/* Highlights */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2 border-t border-slate-800 pt-4">
            {entry.highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-slate-400">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.technologies.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience({ config }: ExperienceProps) {
  return (
    <section id="experience" className="relative">
      <div className="section-wrapper">
        <SectionHeader
          eyebrow="career"
          headline="Experience"
          sub={config.tagline}
          align="left"
        />

        <div className="mt-8">
          {config.entries.map((entry, i) => (
            <ExperienceCard key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
