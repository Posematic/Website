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
      className="relative min-h-[100svh] scroll-mt-24 overflow-hidden border-b border-white/[0.06] sm:scroll-mt-28 desktop:scroll-mt-32 wide:scroll-mt-36"
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

<<<<<<< HEAD
      <div
        className={`relative z-10 flex min-h-[100svh] w-full flex-col justify-start pb-16 pt-30 sm:pb-20 sm:pt-28 laptop:justify-center laptop:pb-24 laptop:pt-28 desktop:pb-26 desktop:pt-30 wide:pb-30 wide:pt-34 ${PAGE_MAX} ${PAGE_EDGE}`}
      >
        <div className="grid w-full grid-cols-1 items-center gap-3 laptop:grid-cols-2 laptop:gap-8 wide:gap-12">
          <div className="flex w-full min-w-0 max-w-2xl flex-col items-start text-left px-5 sm:px-6 tablet:px-8 laptop:px-0 wide:max-w-[min(42rem,calc(100%-4rem))]">
            <div className="mb-5 flex w-full min-w-0 items-center justify-start gap-2.5 self-start sm:mb-6 sm:gap-3 laptop:mb-6 laptop:gap-3 wide:mb-6">
              <Image
                src="/images/posematic-default-profile-logo.svg"
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 shrink-0 drop-shadow-md sm:h-10 sm:w-10 laptop:h-10 laptop:w-10 wide:h-12 wide:w-12"
                aria-hidden
              />
              <span className="text-xl font-semibold tracking-tight text-white drop-shadow-md sm:text-[26px] laptop:text-[26px] wide:text-[1.75rem]">
                Posematic
              </span>
            </div>
            <h1 className="w-full min-w-0 text-balance text-[clamp(1.3125rem,4vw+0.5rem,2.05rem)] font-semibold leading-snug tracking-tight text-white drop-shadow-sm sm:text-4xl sm:leading-[1.18] md:text-5xl md:leading-[1.14] laptop:text-[2.75rem] laptop:leading-[1.12] wide:text-[3.2rem] wide:leading-[1.08]">
              Posing that keeps up with your&nbsp;
              <WordCycle
                words={wordCycle}
                className="text-[var(--color-brand-highlight)]"
              />
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)] drop-shadow-sm sm:mt-5 sm:text-base md:text-lg laptop:mt-5 laptop:max-w-xl laptop:text-lg laptop:leading-relaxed wide:max-w-[38rem] wide:text-[1.25rem] wide:leading-relaxed">
              A modern posing app for the modern artist: fast anatomy, modern UI,
              and sketch-to-pose AI that turns rough lines into clear 3D
              reference.
            </p>
            <div className="mt-8 flex w-full min-w-0 flex-wrap items-center justify-start gap-3 sm:mt-9 sm:gap-4">
              <a
                href="#waitlist"
                className="inline-flex max-w-full items-center gap-2 rounded-lg bg-[var(--color-brand-purple)] px-5 py-3 text-[13px] font-medium text-white shadow-[0_12px_40px_rgba(75,59,255,0.35)] transition hover:bg-[var(--color-brand-violet)] sm:px-6 sm:py-3.5 sm:text-[15px] laptop:px-6 laptop:py-3.5 laptop:text-[15px] wide:px-8 wide:py-4 wide:text-lg"
              >
                Get early access
                <ChevronRight className="h-4 w-4 wide:h-[1.125rem] wide:w-[1.125rem]" strokeWidth={2} aria-hidden />
              </a>
            </div>
          </div>
=======
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
<<<<<<< Updated upstream
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
              Get early access
              <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden />
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
=======
>>>>>>> f7ef86b (changes1)

          <div className="flex w-full justify-center laptop:justify-end">
            <div
              className={
<<<<<<< HEAD
                "relative -mt-4 h-[min(60svh,580px)] w-[min(96vw,560px)] max-w-full shrink-0 " +
                "sm:-mt-2 sm:h-[min(58svh,600px)] sm:w-[min(94vw,600px)] " +
                "md:h-[min(58svh,640px)] md:w-[min(94vw,660px)] " +
=======
                "relative -mt-2 h-[min(46svh,400px)] w-[min(96vw,560px)] max-w-full shrink-0 " +
                "sm:h-[min(50svh,460px)] sm:w-[min(94vw,600px)] " +
                "md:h-[min(52svh,520px)] md:w-[min(94vw,660px)] " +
>>>>>>> f7ef86b (changes1)
                "laptop:mt-0 laptop:h-[min(64svh,680px)] laptop:w-full " +
                "xl:h-[min(68svh,740px)] " +
                "2xl:h-[min(72svh,800px)]"
              }
            >
              <Image
                src="/images/823_1x_shots_so.png"
                alt="Posematic app on two tablets: Scenes library and Profile with bento-style settings"
                fill
<<<<<<< HEAD
                className="object-contain object-center brightness-[1.06] drop-shadow-[0_24px_80px_rgba(0,0,0,0.45)] scale-[1.15] sm:scale-[1.18] md:scale-[1.22] laptop:scale-115"
=======
                className="object-contain object-center brightness-[1.06] drop-shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:scale-[1.05] md:scale-[1.08] laptop:scale-125"
>>>>>>> f7ef86b (changes1)
                sizes="(max-width: 1023px) 92vw, (max-width: 1279px) 45vw, (max-width: 1535px) 48vw, 50vw"
                priority
              />
            </div>
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> f7ef86b (changes1)
          </div>
        </div>
      </div>
    </section>
  );
}
