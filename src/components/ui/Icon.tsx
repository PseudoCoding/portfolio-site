/**
 * Icon Registry
 * ─────────────
 * Centralizes all Lucide icon imports so that only the icons actually used
 * in config.ts are included in the production bundle (tree-shakeable).
 *
 * When you add a new icon name to config.ts, add the import here as well.
 *
 * Usage:
 *   <DynamicIcon name="Cloud" size={18} className="text-cyan-400" />
 */
import {
  // Skill category icons
  Cloud,
  Terminal,
  Layout,
  GitBranch,
  Network,
  Shield,
  Award,
  Monitor,
  Server,
  Package,
  GitMerge,
  Database,
  Activity,
  FlaskConical,
  Bot,
  // Community icons
  Users,
  BookOpen,
  GraduationCap,
  Zap,
  // Hobby icons
  Mountain,
  Wind,
  Box,
  Layers,
  Gamepad2,
  Star,
  // Fallback
  Circle,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

/** Map of icon name strings to Lucide components */
const ICON_REGISTRY: Record<string, React.FC<LucideProps>> = {
  Cloud,
  Terminal,
  Layout,
  GitBranch,
  Network,
  Shield,
  Award,
  Monitor,
  Server,
  Package,
  GitMerge,
  Database,
  Activity,
  FlaskConical,
  Bot,
  Users,
  BookOpen,
  GraduationCap,
  Zap,
  Mountain,
  Wind,
  Box,
  Layers,
  Gamepad2,
  Star,
  Circle,
};

interface DynamicIconProps extends LucideProps {
  /** Must match a key in ICON_REGISTRY (and a pascal-cased Lucide icon name) */
  name: string;
}

/**
 * Renders a Lucide icon by string name.
 * Falls back to a Circle icon if the name is not in the registry.
 */
export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = ICON_REGISTRY[name] ?? Circle;
  return <Icon {...props} />;
}
