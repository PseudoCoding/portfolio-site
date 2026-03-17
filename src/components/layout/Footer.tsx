/**
 * Footer
 * ──────
 * Minimal footer with copyright, social links, and a "back to top" button.
 */
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import type { SiteMeta } from '../../types';

interface FooterProps {
  meta: SiteMeta;
}

export function Footer({ meta }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/60 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 lg:px-12">
        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} PseudoCoding | Built with React + Vite
        </p>

        <div className="flex items-center gap-5">
          <a
            href={meta.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={meta.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={13} />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
