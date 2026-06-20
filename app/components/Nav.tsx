"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PAGE_EDGE, PAGE_MAX } from "@/app/lib/pageLayout";
import { FOCUS_RING, LINK_MUTED } from "@/app/lib/uiTokens";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#product", label: "Product" },
  { href: "#vision", label: "Features" },
  { href: "#team", label: "Team" },
] as const;

/** Compact white pill, sized for the bar (Feather "Buy now" primary-pill). */
const NAV_CTA = `inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-[transform,opacity] duration-200 ease-out hover:scale-[1.03] hover:opacity-90 active:scale-[0.98] ${FOCUS_RING}`;

export function Nav() {
  const [open, setOpen] = useState(false);
  /** True once the page has scrolled at all — drives transparent → frosted. */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const frosted = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-out ${
        frosted
          ? "border-white/10 bg-black/60 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className={`${PAGE_MAX} ${PAGE_EDGE}`}>
        <nav
          className="relative flex h-16 items-center justify-between gap-4"
          aria-label="Primary"
        >
          <Link
            href="#mission"
            className={`flex min-w-0 shrink items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-white ${FOCUS_RING} rounded-lg`}
            onClick={() => setOpen(false)}
          >
            <span className="relative inline-flex h-9 w-9 shrink-0">
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
            <span className="whitespace-nowrap">Posematic</span>
          </Link>

          <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={LINK_MUTED}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a href="#waitlist" className={`${NAV_CTA} hidden sm:inline-flex`}>
              Get early access
            </a>
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-[background-color,transform] duration-200 hover:bg-white/10 active:scale-[0.98] md:hidden ${FOCUS_RING}`}
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
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/10 md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className={`${PAGE_MAX} ${PAGE_EDGE} py-3`}>
          <ul className="flex flex-col gap-0.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`block rounded-xl px-3 py-3 text-[15px] text-white/85 transition-colors duration-200 hover:bg-white/5 hover:text-white ${FOCUS_RING}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-white/10 pt-3 sm:hidden">
              <a
                href="#waitlist"
                className={`block rounded-full bg-white px-4 py-3 text-center text-[15px] font-semibold text-black transition-opacity duration-200 hover:opacity-90 ${FOCUS_RING}`}
                onClick={() => setOpen(false)}
              >
                Get early access
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
