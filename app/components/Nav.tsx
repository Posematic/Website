"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { PAGE_EDGE, PAGE_MAX } from "@/app/lib/pageLayout";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#product", label: "Product" },
  { href: "#vision", label: "Features"}, 
  { href: "#team", label: "Team" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  /**
   * `compact` is true once the user has scrolled past the Hero (`#mission`).
   * Drives the wordmark fade-out-to-left and the CTA collapsing to an icon.
   */
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hero = document.getElementById("mission");
    if (!hero) return;

    if (typeof IntersectionObserver === "undefined") {
      const onScroll = () => setCompact(window.scrollY > hero.offsetHeight - 80);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setCompact(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4 ${PAGE_EDGE}`}
    >
      <div className={`relative ${PAGE_MAX}`}>
        <nav
          className="pointer-events-auto relative flex h-16 items-center justify-between gap-4 rounded-xl border border-white/[0.1] bg-[rgba(8,8,15,0.35)] px-4 shadow-[0_12px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150 sm:px-6 laptop:px-8 desktop:h-[4.25rem] desktop:px-10 wide:h-[4.5rem]"
          aria-label="Primary"
        >
          <Link
            href="#mission"
            className="flex min-w-0 shrink items-center gap-2.5 text-[17px] font-medium tracking-tight text-white sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="relative inline-flex h-10 w-10 shrink-0 desktop:h-11 desktop:w-11 wide:h-12 wide:w-12">
              <Image
                src="/images/profile-circle.svg"
                alt=""
                width={95}
                height={90}
                className="h-full w-full object-contain"
                priority
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/posematic-default-profile-logo.svg"
                  alt=""
                  width={55}
                  height={53}
                  className="h-[45%] w-[45%] object-contain"
                  aria-hidden
                />
              </span>
            </span>
            <span
              className={`hidden whitespace-nowrap transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [transform:translateZ(0)] [will-change:opacity,transform] laptop:inline-block ${
                compact
                  ? "laptop:pointer-events-none laptop:-translate-x-3 laptop:opacity-0"
                  : "laptop:translate-x-0 laptop:opacity-100"
              }`}
              aria-hidden={compact}
            >
              Posematic
            </span>
          </Link>

          <ul className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 md:gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href} className="pointer-events-auto">
                <a
                  href={l.href}
                  className="text-[15px] font-normal text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#waitlist"
              aria-label={compact ? "Get early access" : undefined}
              className={`hidden items-center justify-center overflow-hidden whitespace-nowrap rounded-md border border-white/20 bg-white/6 py-2.5 text-[15px] font-medium leading-none text-white/90 transition-[padding,gap,background-color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/30 hover:bg-white/10 sm:inline-flex ${
                compact ? "gap-0 px-2.5" : "gap-2 px-5"
              }`}
            >
              <span
                className={`inline-flex items-center overflow-hidden leading-none transition-[max-width,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  compact ? "max-w-0 opacity-0" : "max-w-[160px] opacity-100"
                }`}
              >
                Get early access
              </span>
              <ChevronRight
                className="h-4 w-4 shrink-0"
                strokeWidth={2}
                aria-hidden
              />
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/10 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </nav>

        <div
          id="mobile-nav"
          className={`pointer-events-auto absolute left-0 right-0 top-[calc(100%+10px)] md:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-[rgba(8,8,15,0.92)] p-2 shadow-[0_20px_60px_rgba(10,5,40,0.5)] backdrop-blur-xl backdrop-saturate-150">
            <ul className="flex flex-col gap-0.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-xl px-4 py-3 text-[15px] text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-white/10 pt-2 sm:hidden">
                <a
                  href="#waitlist"
                  className="block rounded-xl px-4 py-3 text-center text-[15px] font-medium text-white"
                  onClick={() => setOpen(false)}
                >
                  Get early access
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
