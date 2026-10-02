import { LikeC4View } from 'likec4:react';

export function NetworkPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 border-b border-cyan-300/20 pb-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80">Infrastructure</p>
          <h1 className="text-4xl font-semibold text-slate-50 sm:text-5xl">Network</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            A living map of my home network, documented as code.
          </p>
        </header>

        <section aria-label="Home network architecture" className="h-[min(72vh,760px)] min-h-[440px] overflow-hidden rounded-lg border border-slate-700 bg-white">
          <LikeC4View viewId="network" />
        </section>
      </div>
    </main>
  );
}