import { Apple } from "lucide-react";
<<<<<<< HEAD
import {
  PAGE_EDGE,
  PAGE_MAX,
  SECTION_LEDE,
  SECTION_PY_COMPACT,
} from "@/app/lib/pageLayout";

export function ComingSoon() {
  return (
    <section className={`relative ${SECTION_PY_COMPACT} ${PAGE_EDGE}`}>
      <div
        className={`rounded-[28px] border border-[var(--color-border-subtle)] bg-[rgba(12,12,26,0.6)] px-8 py-12 text-center backdrop-blur-sm sm:px-12 desktop:px-14 desktop:py-14 wide:px-16 wide:py-16 ${PAGE_MAX}`}
      >
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-tertiary)] desktop:text-base">
=======
<<<<<<< Updated upstream

export function ComingSoon() {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[var(--color-border-subtle)] bg-[rgba(12,12,26,0.6)] px-8 py-12 text-center backdrop-blur-sm sm:px-12">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-tertiary)]">
=======
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_LEDE,
  SECTION_PY_COMPACT,
} from "@/app/lib/pageLayout";

export function ComingSoon() {
  return (
    <section className={`relative ${SECTION_PY_COMPACT} ${SECTION_EDGE}`}>
      <div
        className={`rounded-[28px] border border-[var(--color-border-subtle)] bg-[rgba(12,12,26,0.6)] px-8 py-12 text-center backdrop-blur-sm sm:px-10 laptop:px-10 laptop:py-10 desktop:px-14 desktop:py-14 wide:px-16 wide:py-16 ${PAGE_MAX}`}
      >
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-tertiary)] desktop:text-base">
>>>>>>> Stashed changes
>>>>>>> f7ef86b (changes1)
          Coming soon
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl desktop:text-[1.75rem] wide:text-[2rem] wide:leading-tight">
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
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50 desktop:px-6 desktop:py-3.5 desktop:text-base"
          >
            <Apple className="h-5 w-5 desktop:h-6 desktop:w-6" strokeWidth={1.5} aria-hidden />
            App Store
          </button>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50 desktop:px-6 desktop:py-3.5 desktop:text-base"
          >
            <span className="font-semibold" aria-hidden>
              ▶
            </span>
            Google Play
          </button>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50 desktop:px-6 desktop:py-3.5 desktop:text-base"
          >
            Web (later)
          </button>
        </div>
      </div>
    </section>
  );
}
