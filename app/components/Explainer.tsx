export function Explainer() {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What is a posing app?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            A posing app lets you position a 3D figure — limbs, torso, camera —
            so you can light, frame, and capture reference for illustration or
            animation. It is the bridge between &ldquo;I know what I want to
            draw&rdquo; and &ldquo;I can see it clearly enough to commit ink to
            canvas.&rdquo;
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Posematic treats that bridge as a core product: fast
            iteration, readable anatomy, and workflows that respect how artists and creatives
            actually work.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div
            className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-gradient-to-b from-[#12122a] to-[#0a0a18] p-5 surface-matte"
            role="img"
            aria-label="Placeholder: 3D figure in a neutral standing pose for artist reference"
          >
            <div className="mx-auto mb-6 h-40 w-24 rounded-lg bg-gradient-to-t from-white/10 to-white/5" />
            <p className="text-center text-xs font-medium uppercase tracking-wider text-white/40">
              Neutral pose
            </p>
          </div>
          <div
            className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-gradient-to-b from-[#12122a] to-[#0a0a18] p-5 surface-matte sm:mt-8"
            role="img"
            aria-label="Placeholder: 3D figure in a dynamic action pose for artist reference"
          >
            <div className="mx-auto mb-6 h-36 w-28 rotate-6 rounded-lg bg-gradient-to-t from-[var(--color-brand-violet)]/30 to-white/5" />
            <p className="text-center text-xs font-medium uppercase tracking-wider text-white/40">
              Action pose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
