"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealStyle = CSSProperties & { "--reveal-delay"?: string };

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay (ms) before the transition starts once the element enters the viewport */
  delayMs?: number;
  /** Fraction of the element that must be visible before revealing (0-1). */
  threshold?: number;
  /** Only reveal once; default true so scrolling back up doesn't re-animate. */
  once?: boolean;
};

/**
 * Progressive fade/rise-in wrapper. Uses IntersectionObserver so elements
 * animate in as they scroll into view. Falls back to instantly visible when
 * IntersectionObserver is unavailable or the user prefers reduced motion.
 */
export function Reveal({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.classList.remove("is-visible");
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const style: RevealStyle | undefined =
    delayMs > 0 ? { "--reveal-delay": `${delayMs}ms` } : undefined;

  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
