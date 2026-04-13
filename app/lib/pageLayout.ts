/**
 * Horizontal alignment with `Nav`: outer inset + max width scale up on xl / 2xl
 * so ultrawide layouts use more of the viewport.
 */
export const PAGE_EDGE = "px-3 sm:px-5 lg:px-10 xl:px-12 2xl:px-16";

export const PAGE_MAX =
  "mx-auto w-full max-w-[min(1240px,calc(100%-1.5rem))] sm:max-w-[min(1320px,calc(100%-2.5rem))] xl:max-w-[min(1500px,calc(100%-3rem))] 2xl:max-w-[min(1760px,calc(100%-4rem))]";

/** Shared section headings / intros for wide screens */
export const SECTION_H2 =
  "text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl 2xl:text-[2.75rem] 2xl:leading-[1.08]";

export const SECTION_LEDE =
  "text-lg leading-relaxed text-[var(--color-text-secondary)] xl:text-xl 2xl:text-[1.35rem] 2xl:leading-relaxed";
