/**
 * ScrollProgress
 * ──────────────
 * A 2px gradient bar fixed to the top of the viewport that fills
 * left-to-right as the user scrolls down the page.
 */
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX }}
    />
  );
}
