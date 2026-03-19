/**
 * Framer Motion mock
 * ──────────────────
 * Replaces animation components with plain HTML equivalents so tests run in
 * jsdom without needing a real browser layout engine.
 */
/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { vi } from 'vitest';

const motion = new Proxy(
  {},
  {
    get: (_target, tag: string) =>
      React.forwardRef(({ children, ...props }: React.HTMLAttributes<HTMLElement> & { [key: string]: unknown }, ref: React.Ref<HTMLElement>) => {
        const safeProps = Object.fromEntries(
          Object.entries(props).filter(
            ([key]) => !['initial', 'animate', 'exit', 'whileInView', 'viewport', 'transition', 'variants', 'whileHover', 'whileTap', 'style'].includes(key) || key === 'style'
          )
        );
        return React.createElement(tag, { ...safeProps, ref }, children);
      }),
  }
);

const useScroll = vi.fn(() => ({
  scrollYProgress: { get: vi.fn(() => 0) },
}));

const useSpring = vi.fn((value: unknown) => value);
const useMotionValue = vi.fn((initial: unknown) => ({ get: vi.fn(() => initial), set: vi.fn() }));
const useTransform = vi.fn(() => ({ get: vi.fn(() => 0) }));
const useReducedMotion = vi.fn(() => false);
const MotionConfig = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export { motion, useScroll, useSpring, useMotionValue, useTransform, useReducedMotion, MotionConfig, AnimatePresence };
