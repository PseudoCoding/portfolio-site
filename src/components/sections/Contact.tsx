/**
 * Contact Section
 * ───────────────
 * Final section with a strong CTA, social links, and resume download button.
 * No server required; links to GitHub, LinkedIn, and an optional email.
 * All content driven by config.contact and config.meta.
 */
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown, ArrowUpRight, Calendar } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import type { ContactConfig, SiteMeta } from '../../types';

interface ContactProps {
  contact: ContactConfig;
  meta: SiteMeta;
}

export function Contact({ contact, meta }: ContactProps) {
  return (
    <section id="contact" className="relative pb-32">
      {/* Section divider */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      {/* Bottom glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[600px] -translate-x-1/2"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,245,212,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="section-wrapper">
        <SectionHeader
          eyebrow="get in touch"
          headline={contact.heading}
          sub={contact.subheading}
        />

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="glass-card p-8 text-center">
            <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
              {/* GitHub */}
              <a
                href={meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Github size={16} />
                GitHub
                <ArrowUpRight size={13} className="opacity-60" />
              </a>

              {/* LinkedIn */}
              <a
                href={meta.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={13} className="opacity-60" />
              </a>

              {/* Email: only shown if configured */}
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="btn-outline">
                  <Mail size={16} />
                  {contact.email}
                </a>
              )}
            </div>

            {/* Resume CTA */}
            <div className="border-t border-slate-800 pt-8">
              <p className="mb-4 text-sm text-slate-400">
                Prefer to read a traditional résumé?
              </p>
              <a
                href={meta.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mx-auto"
              >
                <FileDown size={16} />
                Download Résumé
              </a>
              <p className="mt-3 font-mono text-xs text-slate-600">PDF · Always up to date</p>
            </div>
          </div>
        </motion.div>

        {/* Calendly inline embed */}
        {contact.calendlyUrl && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl"
          >
            <div className="glass-card overflow-hidden p-6">
              <div className="mb-4 flex items-center gap-2">
                <Calendar size={16} className="text-cyan-400" />
                <span className="text-sm font-medium text-slate-300">Schedule a Call</span>
              </div>
              <iframe
                src={`${contact.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`}
                title="Schedule a call via Calendly"
                width="100%"
                height="660"
                className="rounded-lg border-0"
                style={{ filter: 'invert(1) hue-rotate(180deg)' }}
                loading="lazy"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
