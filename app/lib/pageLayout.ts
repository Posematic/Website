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

/**
 * Shared section headings. Feather-style display type: large, heavy, tight
 * tracking, balanced wrap. Fluidly scales from ~36px on phones to ~64px wide.
 */
export const SECTION_H2 =
  "text-balance text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white";

/** Section body copy — 16px on phones, scaling to 20px on wide */
export const SECTION_LEDE =
  "text-base leading-[1.6] text-[var(--color-text-secondary)] sm:text-[1.0625rem] wide:text-xl";

/** Narrow intro copy (~62 characters) for hero-like or marketing ledes */
export const SECTION_LEDE_NARROW =
  "max-w-[62ch] text-base leading-[1.6] text-[var(--color-text-secondary)] sm:text-[1.0625rem] wide:text-xl";

/** Muted supporting line under section headings */
export const SECTION_KICKER =
  "text-sm leading-relaxed text-[var(--color-text-tertiary)] italic";

/** Default vertical padding for standard sections — generous Feather-style rhythm */
export const SECTION_PY =
  "py-16 sm:py-20 laptop:py-28 desktop:py-32 wide:py-40";

/** Taller sections (e.g. waitlist, sketch-to-pose) */
export const SECTION_PY_TALL =
  "py-20 sm:py-24 laptop:py-32 desktop:py-40 wide:py-48";

/** Shorter vertical rhythm (e.g. coming soon band) */
export const SECTION_PY_COMPACT =
  "py-14 sm:py-16 laptop:py-20 desktop:py-24 wide:py-28";
