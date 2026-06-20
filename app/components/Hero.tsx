"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { PAGE_EDGE, PAGE_MAX } from "@/app/lib/pageLayout";
import { CTA_GHOST, CTA_PRIMARY } from "@/app/lib/uiTokens";

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
      className={`relative inline-grid min-w-0 max-w-full justify-items-center [word-break:break-word] ${className}`}
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
      <span className="col-start-1 row-start-1 z-1 min-w-0 max-w-full justify-self-center">
        <span
          key={reduceMotion ? words[0] : index}
          className={`text-feather inline-block max-w-full break-words ${reduceMotion ? "" : "hero-word-cycle-in"}`}
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
      className="grain relative isolate min-h-svh scroll-mt-24 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Ambient feather glow on pure black */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-[-12%] h-[58vh] w-[85vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.20),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[6%] left-[12%] h-[40vh] w-[42vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(43,217,197,0.12),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] h-[42vh] w-[42vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,111,177,0.12),transparent_70%)] blur-3xl" />
      </div>

      <div
        className={`relative z-10 flex min-h-svh flex-col items-center pb-24 pt-[clamp(7rem,16vh,11rem)] text-center ${PAGE_MAX} ${PAGE_EDGE}`}
      >
        <div className="hero-reveal" style={heroDelay(40)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white/65 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-teal)]" aria-hidden />
            In development · join early access
          </span>
        </div>

        <h1
          className="hero-reveal mt-7 max-w-[20ch] text-balance text-[clamp(2.5rem,7vw,5.25rem)] font-bold leading-[1.0] tracking-[-0.035em] text-white"
          style={heroDelay(150)}
        >
          <span className="block">References that keep up with your</span>
          <WordCycle words={wordCycle} className="mt-1" />
        </h1>

        <p
          className="hero-reveal mt-6 max-w-[52ch] text-base leading-[1.6] text-white/72 sm:text-lg laptop:text-xl"
          style={heroDelay(280)}
        >
          A modern posing app for the modern artist — fast anatomy, a clean
          interface, and a sketch-to-pose algorithm that turns rough lines into
          clear 3D reference.
        </p>

        <div
          className="hero-reveal mt-9 flex flex-wrap items-center justify-center gap-3"
          style={heroDelay(400)}
        >
          <a href="#waitlist" className={CTA_PRIMARY}>
            Get early access
            <ChevronRight
              className="h-4 w-4 wide:h-[1.125rem] wide:w-[1.125rem]"
              strokeWidth={2}
              aria-hidden
            />
          </a>
          <a href="#vision" className={`${CTA_GHOST} px-6`}>
            Explore features
          </a>
        </div>

        <div
          className="hero-reveal-image relative mt-16 w-full max-w-5xl laptop:mt-20"
          style={heroDelay(440)}
        >
          <div
            className="pointer-events-none absolute inset-x-[8%] top-[6%] -z-10 h-[80%] rounded-[40%] bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.28),rgba(43,217,197,0.10)_45%,transparent_72%)] opacity-70 blur-3xl"
            aria-hidden
          />
          <Image
            src="/images/posematic_ipad_concept.png"
            alt="Posematic running on two tablets: the Scenes library and a Profile screen with bento-style settings"
            width={1400}
            height={900}
            className="h-auto w-full object-contain drop-shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
            sizes="(max-width: 1023px) 95vw, 1024px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
