/**
 * SectionHeader
 * ─────────────
 * A reusable section header with an eyebrow label, headline, and optional sub-copy.
 * Animates in when it enters the viewport via framer-motion.
 */
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  sub?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  headline,
  sub,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      className={`mb-16 max-w-2xl ${alignClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="mono-label mb-3 block">// {eyebrow}</span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl lg:text-5xl">
        {headline}
      </h2>
      {sub && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{sub}</p>
      )}
    </motion.div>
  );
}
