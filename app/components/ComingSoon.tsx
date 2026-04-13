import { Apple } from "lucide-react";
import { PAGE_EDGE, PAGE_MAX, SECTION_LEDE } from "@/app/lib/pageLayout";

export function ComingSoon() {
  return (
    <section className={`relative py-16 lg:py-20 xl:py-24 2xl:py-28 ${PAGE_EDGE}`}>
      <div
        className={`rounded-[28px] border border-[var(--color-border-subtle)] bg-[rgba(12,12,26,0.6)] px-8 py-12 text-center backdrop-blur-sm sm:px-12 xl:px-16 xl:py-16 2xl:px-20 2xl:py-20 ${PAGE_MAX}`}
      >
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-tertiary)] xl:text-base">
          Coming soon
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl xl:text-4xl 2xl:text-[2.5rem] 2xl:leading-tight">
          Mobile first, then desktop
        </h2>
        <p className={`mx-auto mt-4 max-w-xl ${SECTION_LEDE}`}>
          We are polishing our core posing features, such as, sketch-to-pose, and account flows before
          our full release. Get early access so you can try Posematic as soon as
          it drops. 
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50 xl:px-6 xl:py-3.5 xl:text-base"
          >
            <Apple className="h-5 w-5 xl:h-6 xl:w-6" strokeWidth={1.5} aria-hidden />
            App Store
          </button>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50 xl:px-6 xl:py-3.5 xl:text-base"
          >
            <span className="font-semibold" aria-hidden>
              ▶
            </span>
            Google Play
          </button>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50 xl:px-6 xl:py-3.5 xl:text-base"
          >
            Web (later)
          </button>
        </div>
      </div>
    </section>
  );
}
