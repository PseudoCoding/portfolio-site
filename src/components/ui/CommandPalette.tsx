/**
 * CommandPalette
 * ──────────────
 * Terminal-style command palette, opened with ⌘K / Ctrl+K.
 * Navigate to any section or trigger quick actions (résumé, GitHub, email).
 *
 * Architecture:
 *   - Self-contained: manages its own open/close state via global keydown listener
 *   - Listens for the 'open-palette' CustomEvent for external triggers (e.g. Navbar button)
 *   - Renders into document.body via createPortal
 *   - Spring-physics entry / exit via Framer Motion AnimatePresence
 *   - Full keyboard navigation: ↑↓ to move, Enter to execute, Escape to close
 */
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileDown, Github, Linkedin, Mail, Hash } from 'lucide-react';
import type { SiteMeta, ContactConfig } from '../../types';

interface Command {
  id: string;
  label: string;
  description: string;
  group: 'navigate' | 'actions';
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
}

interface CommandPaletteProps {
  meta: SiteMeta;
  contact: ContactConfig;
}

function CommandItem({
  cmd,
  isSelected,
  onSelect,
  onHover,
}: {
  cmd: Command;
  isSelected: boolean;
  onSelect: () => void;
  onHover: () => void;
}) {
  return (
    <li
      role="option"
      aria-selected={isSelected}
      className={`mx-2 flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 transition-colors ${
        isSelected ? 'bg-cyan-400/10' : 'hover:bg-slate-800/50'
      }`}
      onClick={onSelect}
      onMouseEnter={onHover}
    >
      <span className={`shrink-0 transition-colors ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`}>
        {isSelected ? <ArrowRight size={14} /> : cmd.icon}
      </span>
      <span className={`flex-1 font-mono text-sm transition-colors ${isSelected ? 'text-cyan-400' : 'text-slate-300'}`}>
        {cmd.label}
      </span>
      <span className="hidden max-w-[160px] truncate font-mono text-xs text-slate-600 sm:block">
        {cmd.description}
      </span>
    </li>
  );
}

export function CommandPalette({ meta, contact }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      close();
      // Small delay lets the palette exit animation finish before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    },
    [close],
  );

  const commands = useMemo<Command[]>(
    () => [
      {
        id: 'nav-projects',
        label: 'go projects',
        description: 'Projects & Platforms',
        group: 'navigate',
        icon: <Hash size={13} />,
        action: () => scrollTo('projects'),
        keywords: ['work', 'portfolio'],
      },
      {
        id: 'nav-experience',
        label: 'go experience',
        description: 'Career timeline',
        group: 'navigate',
        icon: <Hash size={13} />,
        action: () => scrollTo('experience'),
        keywords: ['career', 'jobs', 'history'],
      },
      {
        id: 'nav-skills',
        label: 'go skills',
        description: 'Skills & Expertise',
        group: 'navigate',
        icon: <Hash size={13} />,
        action: () => scrollTo('skills'),
        keywords: ['tech', 'stack', 'tools'],
      },
      {
        id: 'nav-github',
        label: 'go github-projects',
        description: 'Open-source work',
        group: 'navigate',
        icon: <Hash size={13} />,
        action: () => scrollTo('github'),
        keywords: ['oss', 'repos'],
      },
      {
        id: 'nav-contact',
        label: 'go contact',
        description: 'Get in touch',
        group: 'navigate',
        icon: <Hash size={13} />,
        action: () => scrollTo('contact'),
        keywords: ['hire', 'reach', 'email'],
      },
      {
        id: 'action-resume',
        label: 'download resume',
        description: 'Open résumé PDF',
        group: 'actions',
        icon: <FileDown size={13} />,
        action: () => { window.open(meta.resumeUrl, '_blank'); close(); },
        keywords: ['cv', 'pdf', 'résumé'],
      },
      {
        id: 'action-github',
        label: 'open github',
        description: 'github.com/PseudoCoding',
        group: 'actions',
        icon: <Github size={13} />,
        action: () => { window.open(meta.githubUrl, '_blank'); close(); },
        keywords: ['code', 'source'],
      },
      {
        id: 'action-linkedin',
        label: 'open linkedin',
        description: 'LinkedIn profile',
        group: 'actions',
        icon: <Linkedin size={13} />,
        action: () => { window.open(meta.linkedinUrl, '_blank'); close(); },
        keywords: ['profile', 'social'],
      },
      ...(contact.email ? [{
        id: 'action-email',
        label: 'send email',
        description: contact.email,
        group: 'actions' as const,
        icon: <Mail size={13} />,
        action: () => { window.location.href = `mailto:${contact.email}`; close(); },
        keywords: ['mail', 'message', 'contact'],
      }] : []),
    ],
    [meta, contact, scrollTo, close],
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (cmd) =>
        cmd.label.includes(q) ||
        cmd.description.toLowerCase().includes(q) ||
        cmd.keywords.some((k) => k.includes(q)),
    );
  }, [commands, query]);

  const filteredNavigate = useMemo(() => filtered.filter((c) => c.group === 'navigate'), [filtered]);
  const filteredActions  = useMemo(() => filtered.filter((c) => c.group === 'actions'),   [filtered]);

  // Reset selection when filtered list changes
  // (done inline in the onChange handler instead of via an effect)

  // Auto-focus input when palette opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 40);
  }, [open]);

  // Scroll selected item into view as keyboard selection changes
  useEffect(() => {
    if (!listRef.current || !open) return;
    const items = listRef.current.querySelectorAll('[role="option"]');
    (items[selectedIndex] as HTMLElement | undefined)?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex, open]);

  // Global ⌘K / Ctrl+K toggle
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // External trigger via CustomEvent (e.g. Navbar button)
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('open-palette', onOpen);
    return () => window.removeEventListener('open-palette', onOpen);
  }, []);

  // Navigation & Escape when open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close(); return; }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        filtered[selectedIndex]?.action();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, filtered, selectedIndex]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cp-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] bg-black/75"
            onClick={close}
            aria-hidden="true"
          />

          {/* Centering wrapper — CSS handles position, motion.div handles animation */}
          <div
            className="fixed left-3 right-3 top-[12vh] z-[61] pointer-events-none sm:left-1/2 sm:right-auto sm:top-1/2 sm:w-[560px] sm:-translate-x-1/2 sm:-translate-y-1/2"
          >
          {/* Palette panel */}
          <motion.div
            key="cp-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.5 }}
            className="pointer-events-auto w-full overflow-hidden rounded-lg border bg-[#0d0d0d]"
            style={{ borderColor: 'rgba(134, 227, 61, 0.25)' }}
          >
            {/* Prompt input */}
            <div
              className="flex items-center gap-3 border-b px-4 py-3.5"
              style={{ borderColor: 'rgba(134, 227, 61, 0.12)' }}
            >
              <span className="shrink-0 font-mono text-sm text-cyan-400">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                placeholder="type a command..."
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                className="flex-1 bg-transparent font-mono text-sm text-slate-100 placeholder-slate-700 outline-none"
                aria-autocomplete="list"
                aria-controls="cp-command-list"
              />
              <kbd className="hidden shrink-0 rounded border border-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-700 sm:block">
                esc
              </kbd>
            </div>

            {/* Command list */}
            {filtered.length === 0 ? (
              <div className="px-4 py-8 text-center font-mono text-sm text-slate-700">
                no commands found
              </div>
            ) : (
              <ul
                id="cp-command-list"
                ref={listRef}
                role="listbox"
                aria-label="Commands"
                className="max-h-[45vh] overflow-y-auto py-2 sm:max-h-[320px]"
              >
                {filteredNavigate.length > 0 && (
                  <>
                    <li className="px-4 pb-1 pt-1.5">
                      <span className="font-mono text-[10px] tracking-widest text-slate-700 uppercase">
                        navigate
                      </span>
                    </li>
                    {filteredNavigate.map((cmd) => {
                      const idx = filtered.indexOf(cmd);
                      return (
                        <CommandItem
                          key={cmd.id}
                          cmd={cmd}
                          isSelected={idx === selectedIndex}
                          onSelect={() => cmd.action()}
                          onHover={() => setSelectedIndex(idx)}
                        />
                      );
                    })}
                  </>
                )}
                {filteredActions.length > 0 && (
                  <>
                    <li className="mt-1 px-4 pb-1 pt-1.5">
                      <span className="font-mono text-[10px] tracking-widest text-slate-700 uppercase">
                        actions
                      </span>
                    </li>
                    {filteredActions.map((cmd) => {
                      const idx = filtered.indexOf(cmd);
                      return (
                        <CommandItem
                          key={cmd.id}
                          cmd={cmd}
                          isSelected={idx === selectedIndex}
                          onSelect={() => cmd.action()}
                          onHover={() => setSelectedIndex(idx)}
                        />
                      );
                    })}
                  </>
                )}
              </ul>
            )}

            {/* Footer hints */}
            <div
              className="flex items-center gap-3 border-t px-4 py-2"
              style={{ borderColor: 'rgba(134, 227, 61, 0.08)' }}
            >
              <span className="hidden font-mono text-[10px] text-slate-700 sm:block">↑↓ navigate</span>
              <span className="hidden font-mono text-[10px] text-slate-700 sm:block">⏎ execute</span>
              <span className="font-mono text-[10px] text-slate-600 sm:ml-auto sm:text-slate-700">// PseudoCoding</span>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
