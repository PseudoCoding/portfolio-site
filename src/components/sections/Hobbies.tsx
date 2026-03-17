/**
 * Hobbies Section
 * ───────────────
 * A bento-grid of personal interests; shows the human behind the engineer.
 * Each tile has an icon, name, and short description.
 * Icon field maps to a Lucide icon by pascal-cased name.
 */
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { DynamicIcon } from '../ui/Icon';
import type { Hobby } from '../../types';

interface HobbiesProps {
  hobbies: Hobby[];
}

/** Subtle gradient hues cycling across hobby tiles */
const GRADIENTS = [
  'from-cyan-400/15 to-indigo-500/10',
  'from-indigo-500/15 to-purple-500/10',
  'from-emerald-400/15 to-cyan-400/10',
  'from-orange-400/12 to-rose-500/8',
  'from-violet-500/15 to-indigo-400/10',
  'from-sky-400/15 to-cyan-400/8',
];

function HobbyCard({ hobby, index }: { hobby: Hobby; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`glass-card bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} p-6 cursor-default`}
    >
      <div className="mb-3 text-cyan-400">
        <DynamicIcon name={hobby.icon} size={24} className="text-cyan-400" />
      </div>
      <h3 className="mb-1.5 font-bold text-slate-100">{hobby.name}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{hobby.description}</p>
    </motion.div>
  );
}

export function Hobbies({ hobbies }: HobbiesProps) {
  return (
    <section id="hobbies" className="relative">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="section-wrapper">
        <SectionHeader
          eyebrow="outside the IDE"
          headline="Beyond the Code"
          sub="The person behind the pull requests. Curiosity doesn't stop at the keyboard."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((h, i) => (
            <HobbyCard key={h.name} hobby={h} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
