/**
 * useOsModifier
 * ─────────────
 * Returns the platform-appropriate modifier key label for keyboard shortcuts.
 *
 * Mac → "⌘"   (Command)
 * Windows/Linux → "Ctrl"
 *
 * Detection is based on navigator.userAgentData.platform (modern) with
 * navigator.platform as a fallback. Both are read once at module load so
 * the hook is pure (no effects, no state) and safe to call anywhere.
 */

const isMac: boolean = (() => {
  if (typeof navigator === 'undefined') return false;
  const platform =
    (navigator as Navigator & { userAgentData?: { platform: string } })
      .userAgentData?.platform ?? navigator.platform ?? '';
  return /mac/i.test(platform);
})();

export function useOsModifier(): { symbol: string; label: string } {
  return isMac
    ? { symbol: '⌘', label: '⌘K' }
    : { symbol: 'Ctrl', label: 'Ctrl+K' };
}
