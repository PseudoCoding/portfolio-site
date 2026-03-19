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

      {/* Bottom glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[600px] -translate-x-1/2"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(134,227,61,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="section-wrapper">
        <SectionHeader
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
          <div className="glass-card p-6 text-center">
            {/* Primary CTAs — resume first for hiring managers */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={meta.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FileDown size={16} />
                Download Résumé
              </a>

              {contact.email && (
                <a href={`mailto:${contact.email}`} className="btn-outline">
                  <Mail size={16} />
                  Email
                </a>
              )}
            </div>

            {/* Secondary social links */}
            <div className="mt-6 flex items-center justify-center gap-6 border-t border-slate-800 pt-6">
              <a
                href={meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
              >
                <Github size={14} />
                GitHub
                <ArrowUpRight size={12} className="opacity-50" />
              </a>
              <span className="h-px w-6 bg-slate-800" />
              <a
                href={meta.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
              >
                <Linkedin size={14} />
                LinkedIn
                <ArrowUpRight size={12} className="opacity-50" />
              </a>
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
                src={`${contact.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=cbd5e1&primary_color=86e33d`}
                title="Schedule a call via Calendly"
                width="100%"
                className="h-[420px] rounded-lg border-0 md:h-[660px]"
                loading="lazy"
                allowFullScreen
              />
              {contact.email && (
                <p className="mt-3 text-center text-xs text-slate-500">
                  Trouble loading?{' '}
                  <a href={`mailto:${contact.email}`} className="text-cyan-400 hover:underline transition-colors">
                    Email me directly
                  </a>
                </p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
