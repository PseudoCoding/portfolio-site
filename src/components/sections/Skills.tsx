/**
 * Skills Section
 * ──────────────
 * Renders skill categories as flat groups of tech-badge pills.
 * Skills are sorted by proficiency (highest first); opacity signals relative depth
 * without quantification theater. No bars, no cards, no level labels.
 * The icon field maps to a Lucide icon by pascal-cased name.
 */
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { DynamicIcon } from '../ui/Icon';
import type { SkillCategory } from '../../types';

interface SkillsProps {
  skills: SkillCategory[];
}

function SkillGroup({ category, index }: { category: SkillCategory; index: number }) {
  const sorted = useMemo(
    () => [...category.skills].sort((a, b) => b.level - a.level),
    [category.skills],
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
          <DynamicIcon name={category.icon} size={18} className="text-cyan-400" />
        </div>
        <h3 className="font-mono text-sm tracking-wider text-slate-400 uppercase">
          {category.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {sorted.map((skill) => (
          <span
            key={skill.name}
            className="tech-badge"
            style={{ opacity: skill.level >= 4 ? 1 : skill.level === 3 ? 0.7 : 0.45 }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="relative">
      <div className="section-wrapper">
        <SectionHeader
          headline="Skills & Expertise"
          sub="Cloud infrastructure to frontend delivery — with depth at every layer of the stack."
        />

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <SkillGroup key={cat.category} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
