"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#product", label: "Product" },
  { href: "#team", label: "Team" },
  // { href: "#waitlist", label: "Waitlist" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="relative mx-auto w-full max-w-[min(1240px,calc(100%-1.5rem))] sm:max-w-[min(1320px,calc(100%-2.5rem))]">
        <nav
          className="pointer-events-auto flex h-16 items-center justify-between gap-4 rounded-xl border border-white/[0.1] bg-[rgba(8,8,15,0.35)] px-4 shadow-[0_12px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150 sm:h-[4.5rem] sm:px-8 lg:px-10"
          aria-label="Primary"
        >
          <Link
            href="#mission"
            className="flex min-w-0 shrink items-center gap-2.5 text-[17px] font-medium tracking-tight text-white sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="relative inline-flex h-10 w-10 shrink-0 sm:h-12 sm:w-12">
              <Image
                src="/images/profile-circle.svg"
                alt=""
                width={95 }
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
            <span className="truncate">Posematic</span>
          </Link>

          <ul className="hidden items-center gap-6 md:gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
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
              href="#product"
              className="hidden rounded-md border border-white/20 bg-white/6 px-5 py-2.5 text-[15px] font-medium text-white/90 transition-colors hover:border-white/30 hover:bg-white/10 sm:inline-flex"
            >
              Join Waitlist
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
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
