"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { PAGE_EDGE, PAGE_MAX } from "@/app/lib/pageLayout";
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
      className={`relative inline-grid min-w-0 max-w-full justify-items-start [word-break:break-word] ${className}`}
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
      <span className="col-start-1 row-start-1 z-1 min-w-0 max-w-full justify-self-start">
        <span key={index} className="inline-block max-w-full break-words hero-word-cycle-in text-[var(--color-brand-highlight)]">
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
      className="relative min-h-[100svh] scroll-mt-24 overflow-hidden border-b border-white/[0.06] sm:scroll-mt-28 xl:scroll-mt-36 2xl:scroll-mt-40"
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

      <div
        className={`relative z-10 flex min-h-[100svh] w-full flex-col justify-start gap-3 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:justify-center lg:gap-0 lg:pb-24 xl:pb-28 xl:pt-32 2xl:pb-32 2xl:pt-36 ${PAGE_MAX} ${PAGE_EDGE}`}
      >
        <div className="flex w-full min-w-0 max-w-2xl flex-col items-start text-left lg:max-w-[min(36rem,calc(100%-2rem))] xl:max-w-[min(42rem,calc(100%-3rem))] 2xl:max-w-[min(48rem,calc(100%-4rem))]">
          <div className="mb-5 flex w-full min-w-0 items-center justify-start gap-2.5 self-start sm:mb-6 sm:gap-3 xl:mb-7">
            <Image
              src="/images/posematic-default-profile-logo.svg"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 shrink-0 drop-shadow-md sm:h-10 sm:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14"
              aria-hidden
            />
            <span className="text-xl font-semibold tracking-tight text-white drop-shadow-md sm:text-[26px] xl:text-3xl 2xl:text-[2rem]">
              Posematic
            </span>
          </div>
          <h1 className="w-full min-w-0 text-pretty text-[clamp(1.3125rem,4vw+0.5rem,2.05rem)] font-semibold leading-snug tracking-tight text-white drop-shadow-sm sm:text-4xl sm:leading-[1.18] md:text-5xl md:leading-[1.14] lg:text-[2.75rem] lg:leading-[1.12] xl:text-[3.25rem] xl:leading-[1.1] 2xl:text-[3.75rem] 2xl:leading-[1.08]">
            Posing that keeps up with your&nbsp;
            <WordCycle
              words={wordCycle}
              className="text-[var(--color-brand-highlight)]"
            />
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)] drop-shadow-sm sm:mt-5 sm:text-base md:text-lg lg:max-w-2xl lg:text-xl xl:text-[1.35rem] xl:leading-relaxed 2xl:max-w-[40rem]">
            A modern posing app for the modern artist: fast anatomy, modern UI,
            and sketch-to-pose AI that turns rough lines into clear 3D
            reference.
          </p>
          <div className="mt-8 flex w-full min-w-0 flex-wrap items-center justify-start gap-3 sm:mt-9 sm:gap-4">
            <a
              href="#waitlist"
              className="inline-flex max-w-full items-center gap-2 rounded-lg bg-[var(--color-brand-purple)] px-5 py-3 text-[13px] font-medium text-white shadow-[0_12px_40px_rgba(75,59,255,0.35)] transition hover:bg-[var(--color-brand-violet)] sm:px-6 sm:py-3.5 sm:text-[15px] lg:px-7 lg:py-3.5 lg:text-base xl:px-8 xl:py-4 xl:text-lg 2xl:px-10 2xl:py-[1.125rem] 2xl:text-xl"
            >
              Get early access
              <ChevronRight className="h-4 w-4 xl:h-5 xl:w-5" strokeWidth={2} aria-hidden />
            </a>
            {/* <Link
              href="#product"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-white transition hover:text-white/95"
            >
              Watch demo
              <span className="text-[var(--color-brand-highlight)]" aria-hidden>
                ›
              </span>
            </Link> */}
          </div>
        </div>

        <div className="flex w-full justify-center lg:hidden">
          <div className="relative h-[min(40svh,360px)] w-[min(92vw,420px)] max-w-full shrink-0 md:h-[min(40svh,420px)] md:w-[min(94vw,540px)]">
            <Image
              src="/images/823_1x_shots_so.png"
              alt="Posematic app on two tablets: Scenes library and Profile with bento-style settings"
              fill
              className="origin-top scale-[1.1] object-contain object-center brightness-[1.06] drop-shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:scale-[1.2]"
              sizes="(max-width: 1023px) 92vw, 0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
