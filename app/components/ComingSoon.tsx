import { Apple } from "lucide-react";

export function ComingSoon() {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[var(--color-border-subtle)] bg-[rgba(12,12,26,0.6)] px-8 py-12 text-center backdrop-blur-sm sm:px-12">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-tertiary)]">
          Coming soon
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Launching on mobile first — desktop to follow
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
          We are polishing our core posing features, such as, sketch-to-pose, and account flows before
          our full release. Join the waitlist to be first in line.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50"
          >
            <Apple className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            App Store
          </button>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50"
          >
            <span className="font-semibold" aria-hidden>
              ▶
            </span>
            Google Play
          </button>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50"
          >
            Web (later)
          </button>
        </div>
      </div>
    </section>
  );
}
