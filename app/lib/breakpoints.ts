/**
 * Viewport tiers aligned with `--breakpoint-*` in `app/globals.css` (`@theme inline`).
 *
 * | Tier    | Min width | Tailwind prefix | Typical devices        |
 * |---------|-----------|-----------------|------------------------|
 * | default | 0         | (none)          | Phones, small screens  |
 * | sm      | 640px     | `sm:`           | Large phones, phablets |
 * | tablet  | 768px     | `tablet:`       | Tablets, small landscape |
 * | laptop  | 1024px    | `laptop:`       | Laptops, small desktops |
 * | desktop | 1280px    | `desktop:`      | Standard desktops      |
 * | wide    | 1536px    | `wide:`         | Large / ultrawide      |
 *
 * Prefer `tablet:` / `laptop:` / … for layout; keep `sm:` / `md:` when you need
 * Tailwind’s default steps (e.g. `md:` nav breakpoint at 768px).
 */
export const screensPx = {
  sm: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1536,
} as const;

export type ScreenName = keyof typeof screensPx;

/** `min-width` media query string for `window.matchMedia` / hooks */
export function mediaMin(name: ScreenName): string {
  return `(min-width: ${screensPx[name]}px)`;
}

/** Strictly below this breakpoint’s min-width (e.g. `tablet` → max-width 767px) */
export function mediaBelow(name: ScreenName): string {
  return `(max-width: ${screensPx[name] - 1}px)`;
}
