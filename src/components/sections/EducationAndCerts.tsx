/**
 * EducationAndCerts Section
 * ─────────────────────────
 * Two-column layout: Education on the left, Certifications on the right.
 * Additional certifications can be added to config.certifications at any time.
 * Additional degrees can be added to config.education at any time.
 */
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { DynamicIcon } from '../ui/Icon';
import type { EducationEntry, Certification } from '../../types';

interface EducationAndCertsProps {
  education: EducationEntry[];
  certifications: Certification[];
}

function EducationCard({ entry, index }: { entry: EducationEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover p-6"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
          <GraduationCap size={20} className="text-cyan-400" />
        </div>
        <div>
          <p className="text-xs font-mono text-cyan-400/80">{entry.institution}</p>
          <h3 className="font-bold text-slate-100 leading-snug">
            {entry.degree} in {entry.field}
          </h3>
        </div>
        <span className="ml-auto shrink-0 rounded-full border border-slate-700 px-3 py-1 font-mono text-xs text-slate-400">
          {entry.year}
        </span>
      </div>
    </motion.div>
  );
}

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="glass-card-hover p-6 flex items-start gap-4"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
        <DynamicIcon name={cert.icon ?? 'Award'} size={20} className="text-cyan-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-100 leading-snug">{cert.name}</p>
        <p className="mt-0.5 text-sm text-slate-400">{cert.issuer}</p>
        {cert.credentialId && (
          <p className="mt-1 font-mono text-xs text-slate-500">ID: {cert.credentialId}</p>
        )}
      </div>
      {cert.year && (
        <span className="shrink-0 font-mono text-xs text-cyan-400/70">{cert.year}</span>
      )}
    </motion.div>
  );
}

export function EducationAndCerts({ education, certifications }: EducationAndCertsProps) {
  return (
    <section id="education" className="relative">

      <div className="section-wrapper py-16">
        <SectionHeader
          headline="Education & Certifications"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Education column */}
          <div>
            <h3 className="mono-label mb-5">// education</h3>
            <div className="space-y-4">
              {education.map((e, i) => (
                <EducationCard key={e.institution} entry={e} index={i} />
              ))}
            </div>
          </div>

          {/* Certifications column */}
          <div>
            <h3 className="mono-label mb-5">// certifications</h3>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <CertCard key={c.name} cert={c} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
