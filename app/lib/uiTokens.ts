/**
 * Shared interaction and surface tokens for section components.
 * Colors and typography still come from globals.css + pageLayout.ts.
 */

export const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-lavender)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]";

export const CTA_PRIMARY =
  `inline-flex max-w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-brand-purple)] px-5 py-3 text-[13px] font-medium text-white shadow-[0_12px_40px_rgba(75,59,255,0.35)] transition-[background-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-brand-violet)] hover:shadow-[0_16px_48px_rgba(75,59,255,0.42)] active:translate-y-0 active:scale-[0.98] ${FOCUS_RING} sm:px-6 sm:py-3.5 sm:text-[15px] laptop:px-6 laptop:py-3.5 laptop:text-[15px] wide:px-8 wide:py-4 wide:text-lg`;

export const CTA_PRIMARY_LG =
  `inline-flex min-h-[52px] min-w-[200px] items-center justify-center rounded-xl bg-[var(--color-brand-purple)] px-8 text-[15px] font-medium text-white shadow-[0_12px_40px_rgba(75,59,255,0.35)] transition-[background-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-brand-violet)] hover:shadow-[0_16px_48px_rgba(75,59,255,0.42)] active:translate-y-0 active:scale-[0.98] ${FOCUS_RING} desktop:min-h-[54px] desktop:min-w-[220px] desktop:px-10 desktop:text-base wide:text-lg`;

export const CTA_GHOST =
  `inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white/20 bg-white/[0.06] py-2.5 text-[15px] font-medium leading-none text-white/90 transition-[padding,gap,background-color,border-color,transform] duration-200 ease-out hover:-translate-y-px hover:border-white/30 hover:bg-white/10 active:scale-[0.98] ${FOCUS_RING}`;

export const LINK_MUTED =
  `text-[15px] font-normal text-white/70 transition-colors duration-200 hover:text-white ${FOCUS_RING} rounded-sm`;

export const LINK_MUTED_SM =
  `text-[0.8125rem] text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-white ${FOCUS_RING} rounded-sm`;

export const SECTION_EYEBROW =
  "mb-3 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium tracking-[0.02em] text-[var(--color-brand-highlight)] desktop:px-3 desktop:py-1.5";

export const PANEL_SHELL =
  "grain relative overflow-hidden rounded-[28px] border border-[var(--color-border-subtle)] shadow-[0_20px_60px_rgba(46,27,158,0.32)]";

export const CARD_BASE =
  "surface-matte rounded-[22px] border border-[var(--color-border-subtle)] shadow-[0_20px_60px_rgba(46,27,158,0.28)]";

export const CARD_INTERACTIVE =
  "transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/[0.08] hover:shadow-[0_24px_70px_rgba(46,27,158,0.34)]";

export const SHADOW_TINTED =
  "shadow-[0_20px_60px_rgba(46,27,158,0.32)]";
