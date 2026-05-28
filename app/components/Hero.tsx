"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { PAGE_EDGE, PAGE_MAX } from "@/app/lib/pageLayout";
import { CTA_PRIMARY } from "@/app/lib/uiTokens";
import { HeroBackdrop } from "./HeroBackdrop";

/**
 * Inline CSS variable typing helper for `--hero-delay` so we can drive the
 * staggered entrance from JSX without disabling TypeScript.
 */
type HeroDelayStyle = CSSProperties & { "--hero-delay"?: string };
const heroDelay = (ms: number): HeroDelayStyle => ({ "--hero-delay": `${ms}ms` });

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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (words.length <= 1 || reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words, intervalMs, reduceMotion]);

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
        <span
          key={reduceMotion ? words[0] : index}
          className={`inline-block max-w-full break-words text-[var(--color-brand-highlight)] ${reduceMotion ? "" : "hero-word-cycle-in"}`}
        >
          {words[reduceMotion ? 0 : index] ?? ""}
        </span>
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="mission"
      className="grain relative min-h-[100svh] scroll-mt-24 overflow-hidden border-b border-white/[0.06] sm:scroll-mt-28 desktop:scroll-mt-32 wide:scroll-mt-36"
    >
      <HeroBackdrop />

      <div
        className="absolute inset-0 z-[3] bg-gradient-to-b from-[var(--color-bg-primary)]/50 via-[var(--color-bg-primary)]/15 to-[var(--color-bg-primary)]/42"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-r from-[var(--color-bg-primary)]/90 via-[var(--color-bg-primary)]/18 to-transparent sm:from-[var(--color-bg-primary)]/85"
        aria-hidden
      />

      <div
        className={`relative z-10 flex min-h-[100svh] w-full flex-col justify-start pb-[4.5rem] pt-30 sm:pb-20 sm:pt-28 laptop:justify-center laptop:pb-26 laptop:pt-28 desktop:pb-28 desktop:pt-30 wide:pb-32 wide:pt-34 ${PAGE_MAX} ${PAGE_EDGE}`}
      >
        <div className="grid w-full grid-cols-1 items-center gap-4 laptop:grid-cols-2 laptop:gap-10 wide:gap-12">
          <div className="flex w-full min-w-0 max-w-2xl flex-col items-start text-left px-5 sm:px-6 tablet:px-8 laptop:px-0 wide:max-w-[min(42rem,calc(100%-4rem))]">
            <div
              className="hero-reveal mb-5 flex w-full min-w-0 items-center justify-start gap-2.5 self-start sm:mb-6 sm:gap-3 laptop:mb-7 laptop:gap-3 wide:mb-7"
              style={heroDelay(60)}
            >
              <Image
                src="/images/posematic-default-profile-logo.svg"
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 shrink-0 drop-shadow-[0_4px_12px_rgba(46,27,158,0.35)] sm:h-10 sm:w-10 laptop:h-10 laptop:w-10 wide:h-12 wide:w-12"
                aria-hidden
              />
              <span className="text-xl font-semibold tracking-[-0.02em] text-white drop-shadow-md sm:text-[26px] laptop:text-[26px] wide:text-[1.75rem]">
                Posematic
              </span>
            </div>
            <h1
              className="hero-reveal w-full min-w-0 text-balance text-[clamp(1.3125rem,4vw+0.5rem,2.05rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-white drop-shadow-sm sm:text-4xl sm:leading-[1.14] md:text-5xl md:leading-[1.1] laptop:text-[2.875rem] laptop:leading-[1.08] wide:text-[3.25rem] wide:leading-[1.06]"
              style={heroDelay(180)}
            >
              Redefining references that keep up with your&nbsp;
              <WordCycle words={wordCycle} />
            </h1>
            <p
              className="hero-reveal mt-4 max-w-[34ch] text-sm leading-[1.65] text-[var(--color-text-secondary)] drop-shadow-sm sm:mt-5 sm:text-base md:text-[1.0625rem] laptop:mt-6 laptop:max-w-[36ch] laptop:text-lg laptop:leading-[1.65] wide:max-w-[38ch] wide:text-[1.1875rem]"
              style={heroDelay(320)}
            >
              A modern posing app for the modern artist: fast anatomy, modern UI,
              and sketch-to-pose algorithm that turns rough lines into clear 3D
              reference.
            </p>
            <div
              className="hero-reveal mt-8 flex w-full min-w-0 flex-wrap items-center justify-start gap-3 sm:mt-9 sm:gap-4"
              style={heroDelay(460)}
            >
              <a href="#waitlist" className={CTA_PRIMARY}>
                Get early access
                <ChevronRight
                  className="h-4 w-4 wide:h-[1.125rem] wide:w-[1.125rem]"
                  strokeWidth={2}
                  aria-hidden
                />
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center laptop:justify-end">
            <div
              className="hero-reveal-image relative -mt-2 h-[min(46svh,400px)] w-[min(96vw,560px)] max-w-full shrink-0 sm:h-[min(50svh,460px)] sm:w-[min(94vw,600px)] md:h-[min(52svh,520px)] md:w-[min(94vw,660px)] laptop:mt-0 laptop:h-[min(64svh,680px)] laptop:w-full xl:h-[min(68svh,740px)] 2xl:h-[min(72svh,800px)]"
              style={heroDelay(260)}
            >
              <div
                className="pointer-events-none absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-brand-indigo)_0%,transparent_72%)] opacity-45 blur-3xl"
                aria-hidden
              />
              <Image
                src="/images/posematic_ipad_concept.png"
                alt="Posematic app on two tablets: Scenes library and Profile with bento-style settings"
                fill
                className="object-contain object-center brightness-[1.06] drop-shadow-[0_28px_90px_rgba(46,27,158,0.38)] sm:scale-[1.07] md:scale-[1.10] laptop:scale-140"
                sizes="(max-width: 1023px) 95vw, (max-width: 1279px) 50vw, (max-width: 1535px) 55vw, 60vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
