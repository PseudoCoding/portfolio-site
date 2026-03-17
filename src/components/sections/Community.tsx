/**
 * Community Section
 * ─────────────────
 * Cards highlighting community involvement, org building, and knowledge sharing.
 * Icon field maps to a Lucide icon by pascal-cased name.
 */
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { DynamicIcon } from '../ui/Icon';
import type { CommunityEntry } from '../../types';

interface CommunityProps {
  entries: CommunityEntry[];
}

function CommunityCard({ entry, index }: { entry: CommunityEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover p-6"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/10 text-cyan-400">
          <DynamicIcon name={entry.icon} size={20} className="text-cyan-400" />
        </div>
        {entry.metric && (
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 font-mono text-xs text-cyan-400/90">
            {entry.metric}
          </span>
        )}
      </div>
      <h3 className="mb-2 font-bold text-slate-100">{entry.title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{entry.description}</p>
    </motion.div>
  );
}

export function Community({ entries }: CommunityProps) {
  return (
    <section id="community" className="relative">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="section-wrapper">
        <SectionHeader
          eyebrow="impact"
          headline="Community & Leadership"
          sub="Growing engineering cultures, scaling communities, and investing in the people around me."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {entries.map((e, i) => (
            <CommunityCard key={e.title} entry={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
