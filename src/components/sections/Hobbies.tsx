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

function HobbyCard({ hobby, index }: { hobby: Hobby; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card p-6"
    >
      <div className="mb-3 text-cyan-400">
        <DynamicIcon name={hobby.icon} size={20} className="text-cyan-400" />
      </div>
      <h3 className="mb-1.5 font-bold text-slate-100">{hobby.name}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{hobby.description}</p>
    </motion.div>
  );
}

export function Hobbies({ hobbies }: HobbiesProps) {
  return (
    <section id="hobbies" className="relative">

      <div className="section-wrapper py-28">
        <SectionHeader
          headline="Beyond the Code"
          sub="The person behind the pull requests — hobbies that sharpen the same skills I use at work."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((h, i) => (
            <HobbyCard key={h.name} hobby={h} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
