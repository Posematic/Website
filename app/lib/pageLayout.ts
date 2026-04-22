/**
 * Layout tokens for page chrome and sections.
 * Semantic breakpoints: `tablet:` `laptop:` `desktop:` `wide:` (see `app/globals.css` + `breakpoints.ts`).
 * Tailwind defaults `sm:` / `md:` still work where you need finer steps (e.g. Hero typography).
 *
 * Content rail: `max-w-7xl` (80rem) from `laptop` through typical desktop widths. A mid breakpoint
 * `desktop:max-w-[1400px]` was overriding that from 1280px up, so the main-like cap only showed in
 * 1024–1279px — removing it; only `wide:` (1536px+) widens the rail.
 */
export const PAGE_EDGE =
  "px-3 sm:px-6 laptop:px-10 desktop:px-12 wide:px-16";

/** Wider gutters than PAGE_EDGE so section content sits visibly inset from the nav rail */
export const SECTION_EDGE =
  "px-3 sm:px-6 tablet:px-10 laptop:px-18 desktop:px-38 wide:px-35";

/** 7xl-style rail from `sm`/`laptop` until `wide:`; ultrawide gets the 1580px cap */
export const PAGE_MAX =
  "mx-auto w-full max-w-[min(1240px,calc(100%-1.75rem))] sm:max-w-[min(1320px,calc(100%-2.75rem))] laptop:max-w-[min(80rem,calc(100%-2.5rem))] wide:max-w-[min(1580px,calc(100%-4.25rem))]";

/** Shared section headings — compact on phones, scales up through breakpoints */
export const SECTION_H2 =
  "text-[1.625rem] font-semibold leading-snug tracking-tight text-white sm:text-[1.75rem] tablet:text-[1.875rem] laptop:text-[1.875rem] desktop:text-[2rem] wide:text-[2.25rem] wide:leading-[1.1]";

/** Section body copy — 16px on phones, a touch larger on sm, caps at 18px on wide */
export const SECTION_LEDE =
  "text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-[1.0625rem] wide:text-lg";

/** Default vertical padding for standard sections */
export const SECTION_PY =
  "py-12 laptop:py-14 desktop:py-16 wide:py-20";

/** Taller sections (e.g. waitlist, sketch-to-pose) */
export const SECTION_PY_TALL =
  "py-16 laptop:py-18 desktop:py-20 wide:py-24";

/** Shorter vertical rhythm (e.g. coming soon band) */
export const SECTION_PY_COMPACT =
  "py-12 laptop:py-14 desktop:py-16 wide:py-20";
