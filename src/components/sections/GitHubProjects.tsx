/**
 * GitHub Projects Section
 * ───────────────────────
 * Renders public GitHub / open-source project cards.
 * Live repos show language pills, tech badges, and links.
 * Coming-soon repos render in a dimmed state.
 */
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Clock } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import type { GitHubProject } from '../../types';

interface GitHubProjectsProps {
  projects: GitHubProject[];
}

function ProjectCard({ project, index }: { project: GitHubProject; index: number }) {
  const repoUrl = `https://github.com/${project.repo}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="h-full"
    >
      <div
        className={`glass-card h-full p-6 flex flex-col transition-colors duration-300 ${
          project.comingSoon
            ? 'opacity-50 border-dashed'
            : 'hover:border-cyan-400/40'
        }`}
      >
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <Github size={16} className="text-slate-500 shrink-0" />
            <h3 className="text-lg font-bold text-slate-100 leading-snug truncate">{project.title}</h3>
          </div>

          {!project.comingSoon && (
            <div className="flex items-center gap-2 shrink-0 mt-0.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${project.title}`}
                  className="text-slate-500 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
                >
                  <ArrowUpRight size={18} />
                </a>
              )}
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
                aria-label={`GitHub repo for ${project.title}`}
              >
                <Github size={16} />
              </a>
            </div>
          )}

          {project.comingSoon && (
            <span className="flex items-center gap-1 text-xs font-medium text-slate-500 shrink-0 mt-0.5">
              <Clock size={12} />
              coming soon
            </span>
          )}
        </div>

        {/* Repo path */}
        {!project.comingSoon && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-slate-500 hover:text-cyan-400/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a] rounded-sm mb-3 block truncate"
          >
            {project.repo}
          </a>
        )}

        {/* Description */}
        <p className="text-sm leading-relaxed text-slate-400 mb-4 flex-1">{project.description}</p>

        {/* Language pills */}
        {project.languages.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.languages.map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-0.5 text-xs font-medium text-cyan-300/80"
              >
                {lang}
              </span>
            ))}
          </div>
        )}

        {/* Tech badges */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function GitHubProjects({ projects }: GitHubProjectsProps) {
  const live = projects.filter((p) => !p.comingSoon);
  const comingSoon = projects.filter((p) => p.comingSoon);

  return (
    <section id="github" className="relative">

      <div className="section-wrapper">
        <SectionHeader
          headline="GitHub Projects"
          sub="Open-source tools, templates, and experiments. Browse the code, fork what's useful."
        />

        {/* Live repos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {live.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Coming soon */}
        {comingSoon.length > 0 && (
          <>
            <div className="mt-12 mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-800" />
              <span className="mono-label text-slate-600">// coming soon</span>
              <div className="h-px flex-1 bg-slate-800" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {comingSoon.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i + live.length} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
