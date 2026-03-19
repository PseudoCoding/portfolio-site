/**
 * Skills Section
 * ──────────────
 * Renders skill categories from config.skills.
 * Each category is a card containing animated skill bars.
 * The icon field maps to a Lucide icon by name (pascal-cased).
 */
import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { DynamicIcon } from '../ui/Icon';
import type { SkillCategory } from '../../types';

interface SkillsProps {
  skills: SkillCategory[];
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const prefersReducedMotion = useReducedMotion();
  const pct = (level / 5) * 100;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{['', 'Familiar', 'Learning', 'Proficient', 'Advanced', 'Expert'][level]}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          className="h-full w-full rounded-full origin-left"
          style={{ background: 'var(--accent)' }}
          initial={{ scaleX: prefersReducedMotion ? pct / 100 : 0 }}
          whileInView={{ scaleX: pct / 100 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>
    </div>
  );
}

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10">
          <DynamicIcon name={category.icon} size={20} className="text-cyan-400" />
        </div>
        <h3 className="font-semibold text-slate-100">{category.category}</h3>
      </div>

      <div className="space-y-4">
        {useMemo(() => [...category.skills].sort((a, b) => b.level - a.level), [category.skills]).map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1 + i * 0.06} />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="relative">
      {/* Subtle section divider glow */}

      <div className="section-wrapper">
        <SectionHeader
          headline="Skills & Expertise"
          sub="Cloud infrastructure to frontend delivery — with depth at every layer of the stack."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <SkillCategoryCard key={cat.category} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
