/**
 * Projects Section
 * ────────────────
 * Renders featured project cards (larger) at the top, then the rest in a grid.
 * Cards use a 3D-tilt effect on hover via framer-motion.
 * All data is driven by config.projects.
 */
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import type { Project } from '../../types';

interface ProjectsProps {
  projects: Project[];
}

/** 3D tilt card wrapper */
function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      style={{
        perspective: 800,
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <TiltCard className="h-full">
        <div
          className={`glass-card h-full p-6 flex flex-col transition-colors duration-300 hover:border-cyan-400/40`}
        >
          {/* Title row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="min-w-0">
              {featured && (
                <span className="mono-label mb-1.5 block">
                  <Zap size={10} className="inline mr-1 text-cyan-400" />
                  featured
                </span>
              )}
              <h3 className="text-lg font-bold text-slate-100 leading-snug">{project.title}</h3>
            </div>
            {project.liveUrl || project.githubUrl ? (
        <a
                href={project.liveUrl ?? project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
                className="text-slate-500 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a] rounded-sm shrink-0 mt-0.5"
              >
                <ArrowUpRight size={18} />
              </a>
            ) : null}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-slate-400 mb-4">{project.description}</p>

          {/* Highlights */}
          <ul className="mb-4 space-y-1.5 flex-1">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/50" />
                {h}
              </li>
            ))}
          </ul>

          {/* Impact */}
          {project.impact && (
            <p className="mb-4 text-xs text-cyan-400/70">
              <span className="font-mono">impact →</span> {project.impact}
            </p>
          )}

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Projects({ projects }: ProjectsProps) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative">

      <div className="section-wrapper">
        <SectionHeader
          headline="Projects & Platforms"
          sub="Production systems built at healthcare scale — zero-trust security, event infrastructure, and developer platforms."
        />

        {/* Featured row */}
        {featured.length > 0 && (
          <div className="mb-8 grid gap-6 sm:grid-cols-2">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} featured />
            ))}
          </div>
        )}

        {/* Rest grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + featured.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
