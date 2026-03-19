import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver — provide a no-op stub
class NoopIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin = '';
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: NoopIntersectionObserver,
});

// jsdom does not implement smooth scroll
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  configurable: true,
  value: () => {},
});
