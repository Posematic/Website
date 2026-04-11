"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroBackdrop } from "./HeroBackdrop";

const wordCycle = [
  "imagination.",
  "vision.",
  "artwork.",
  "concepts.",
  "illustrations.",
  "animations.",
] as const;

const WORD_CYCLE_MS = 2800;

function WordCycle({
  words,
  intervalMs = WORD_CYCLE_MS,
  className = "",
}: {
  words: readonly string[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words, intervalMs]);

  return (
    <span
      className={`relative inline-grid justify-items-start ${className}`}
      aria-live="polite"
    >
      {words.map((w) => (
        <span
          key={w}
          className="invisible col-start-1 row-start-1 whitespace-nowrap select-none"
          aria-hidden
        >
          {w}
        </span>
      ))}
      <span className="col-start-1 row-start-1 z-1 justify-self-start">
        <span key={index} className="inline-block hero-word-cycle-in text-[var(--color-brand-highlight)]">
          {words[index] ?? ""}
        </span>
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="mission"
      className="relative min-h-[100svh] scroll-mt-24 overflow-hidden border-b border-white/[0.06] sm:scroll-mt-28"
    >
      <HeroBackdrop />

      <div
        className="absolute inset-0 z-[3] bg-gradient-to-b from-[#0c0c14]/50 via-[#0c0c14]/15 to-[#0c0c14]/42"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-r from-[#0c0c14]/90 via-[#0c0c14]/18 to-transparent sm:from-[#0c0c14]/85"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-1 lg:pb-24">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/images/posematic-default-profile-logo.svg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 drop-shadow-md"
              aria-hidden
            />
            <span className="text-2xl font-semibold tracking-tight text-white drop-shadow-md sm:text-[26px]">
              Posematic
            </span>
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[2.75rem]">
            Posing that continues to keep up with your {" "}
            <WordCycle
              words={wordCycle}
              className="text-[var(--color-brand-highlight)]"
            />
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)] drop-shadow-sm">
            A modern posing app for the modern artist: fast anatomy, modern UI,
            and sketch-to-pose AI that turns rough lines into clear 3D
            reference.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-brand-purple)] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_40px_rgba(75,59,255,0.35)] transition hover:bg-[var(--color-brand-violet)]"
            >
              Join the Waitlist
              <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </a>
            <Link
              href="#product"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-white transition hover:text-white/95"
            >
              Watch demo
              <span className="text-[var(--color-brand-highlight)]" aria-hidden>
                ›
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
