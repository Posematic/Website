/**
 * Shared interaction and surface tokens for section components.
 * Colors and typography still come from globals.css + pageLayout.ts.
 *
 * Feather aesthetic: white pill primary button, glass secondary, neutral
 * black-tinted shadows, and monochrome chrome. The only color accent on the
 * page is the feather gradient (`.text-feather`), used sparingly.
 */

export const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-lavender)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]";

export const CTA_PRIMARY =
  `inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-black shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-[transform,opacity,box-shadow] duration-200 ease-out hover:scale-[1.03] hover:opacity-90 active:scale-[0.98] ${FOCUS_RING} sm:px-7 sm:py-3.5 sm:text-[15px] laptop:px-7 laptop:py-3.5 laptop:text-[15px] wide:px-8 wide:py-4 wide:text-lg`;

export const CTA_PRIMARY_LG =
  `inline-flex min-h-[52px] min-w-[200px] items-center justify-center rounded-full bg-white px-8 text-[15px] font-semibold text-black shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-[transform,opacity,box-shadow] duration-200 ease-out hover:scale-[1.03] hover:opacity-90 active:scale-[0.98] ${FOCUS_RING} desktop:min-h-[54px] desktop:min-w-[220px] desktop:px-10 desktop:text-base wide:text-lg`;

export const CTA_GHOST =
  `inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-white/[0.16] bg-white/[0.08] py-2.5 text-[15px] font-medium leading-none text-white transition-[padding,gap,background-color,border-color,transform] duration-200 ease-out hover:-translate-y-px hover:border-white/30 hover:bg-white/[0.14] active:scale-[0.98] ${FOCUS_RING}`;

export const LINK_MUTED =
  `text-[15px] font-normal text-white/72 transition-colors duration-200 hover:text-white ${FOCUS_RING} rounded-sm`;

export const LINK_MUTED_SM =
  `text-[0.8125rem] text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-white ${FOCUS_RING} rounded-sm`;

export const SECTION_EYEBROW =
  "mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-white/55 desktop:px-3.5 desktop:py-1.5";

export const PANEL_SHELL =
  "grain relative overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] shadow-[0_30px_80px_rgba(0,0,0,0.5)]";

export const CARD_BASE =
  "surface-matte rounded-[20px] border border-[var(--color-border-subtle)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]";

export const CARD_INTERACTIVE =
  "transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_28px_72px_rgba(0,0,0,0.6)]";

export const SHADOW_TINTED =
  "shadow-[0_20px_60px_rgba(0,0,0,0.5)]";
