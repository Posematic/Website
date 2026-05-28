import { Clock, Cpu, DollarSign, UserX } from "lucide-react";
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_H2,
  SECTION_KICKER,
  SECTION_LEDE_NARROW,
  SECTION_PY,
} from "@/app/lib/pageLayout";
import { CARD_BASE, CARD_INTERACTIVE, SECTION_EYEBROW } from "@/app/lib/uiTokens";

const problems = [
  {
    icon: Clock,
    title: "Posing takes too long",
    quote:
      "Posing apps take too long to figure out when I can grab references online.",
    attribution: "Illustrator, digital artist",
    fix: "Posematic cuts iteration time with sketch-first input and controls tuned for speed.",
  },
  {
    icon: Cpu,
    title: "Archaic and inefficient UI",
    quote:
      "It's easy to start, but once you need more control, the UI gets confusing and unintuitive.",
    attribution: "Casual artist, hobbyist",
    fix: "We are rebuilding the interface around a readable layout you actually understand.",
  },
  {
    icon: UserX,
    title: "Inaccurate anatomy",
    quote:
      "I wish the models were more accurate—the models lack useful anatomical landmarks.",
    attribution: "Professional entertainment artist, freelance",
    fix: "Anatomy is a core pillar: believable presets, clearer silhouettes, and physiological posing.",
  },
  {
    icon: DollarSign,
    title: "Expensive for casuals and pros",
    quote:
      "A lot of the features I need are locked behind paywalls, and they're just too expensive.",
    attribution: "From artists we interviewed",
    fix: "Fair tiers with a generous path for students and early supporters. More at launch.",
  },
];

export function Problems() {
  return (
    <section className={`relative ${SECTION_PY} ${SECTION_EDGE}`}>
      <div className={PAGE_MAX}>
        <div className={SECTION_EYEBROW}>Why we exist</div>
        <h2 className={`max-w-[62ch] ${SECTION_H2}`}>
          Existing posing apps are broken
        </h2>
        <p className={`mt-4 ${SECTION_LEDE_NARROW}`}>
          Four pain points we hear often—and how we aim to address each one.
        </p>
        <p className={`mt-3 ${SECTION_KICKER}`}>From real testimonies</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className={`grain relative flex flex-col p-6 laptop:p-6 desktop:p-7 wide:p-9 ${CARD_BASE} ${CARD_INTERACTIVE}`}
              >
                <div className="mb-4 flex items-center gap-3 laptop:mb-5 desktop:gap-4">
                  <div className="icon-ring shrink-0">
                    <div className="icon-ring-inner h-11 w-11 desktop:h-12 desktop:w-12">
                      <Icon
                        className="h-[18px] w-[18px] text-white desktop:h-5 desktop:w-5"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    </div>
                  </div>
                  <h3 className="min-w-0 flex-1 text-lg font-semibold leading-snug tracking-[-0.01em] text-white laptop:text-[1.125rem] desktop:text-[1.25rem] wide:text-[1.375rem]">
                    {p.title}
                  </h3>
                </div>
                <blockquote className="flex-1 text-sm leading-[1.65] text-[var(--color-text-secondary)] laptop:text-[0.9375rem] desktop:text-base wide:text-[1.0625rem]">
                  &ldquo;{p.quote}&rdquo;
                </blockquote>
                <p className="mt-3 text-xs text-[var(--color-text-tertiary)] desktop:text-sm">
                  — {p.attribution}
                </p>
                <p className="mt-4 border-t border-white/10 pt-4 text-[0.8125rem] leading-[1.65] text-[var(--color-brand-highlight)] laptop:mt-5 laptop:pt-5 desktop:text-sm">
                  <span className="font-medium text-white">Our fix: </span>
                  {p.fix}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
