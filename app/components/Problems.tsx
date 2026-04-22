import { Clock, Cpu, DollarSign, UserX } from "lucide-react";
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE,
  SECTION_PY,
} from "@/app/lib/pageLayout";

const problems = [
  {
    icon: Clock,
    title: "Posing takes too long",
    quote:
      "Posing apps take too long to figure out when I can grab references online.”",
    attribution: "Illustrator, Digital Artist",
    fix: "Posematic cuts iteration time with sketch-first input and controls tuned for speed.",
    variant: "liquid" as const,
  },
  {
    icon: Cpu,
    title: "Archaic & Inefficient UI/UX",
    quote:
      "“It’s easy to start, but once you need more control, the UI gets confusing and unintuitive.”",
    attribution: "Casual Artist, Hobbyist",
    fix: "We are rebuilding the interface around a modern, easily readable layout you actually understand.",
    variant: "matte" as const,
  },
  {
    icon: UserX,
    title: "Inaccurate anatomy",
    quote:
      "“I wish the models were more accurate, the models lack useful anatomical landmarks.”",
    attribution: "Professional entertainment artist, Freelance",
    fix: "Anatomy is a core pillar: believable default presets, clearer silhouettes, and physiological posing.",
    variant: "matte" as const,
  },
  {
    icon: DollarSign,
    title: "Expensive for casuals and professionals",
    quote:
      "“A lot of the features I need are locked behind paywalls, and they’re just too expensive.”",
    attribution: "From many artists interviewed",
    fix: "Fair tiers with a generous path for students and early supporters. More details to be provided at launch.",
    variant: "liquid" as const,
  },
];

export function Problems() {
  return (
    <section className={`relative ${SECTION_PY} ${SECTION_EDGE}`}>
      <div className={PAGE_MAX}>
        <h2 className={`max-w-2xl ${SECTION_H2}`}>
          Existing posing apps are broken
        </h2>
        <p className={`mt-4 max-w-2xl ${SECTION_LEDE}`}>
          Four pain points we hear a lot, each with how we aim to tackle these problems.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-tertiary)] italic">
          From real testimonies
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {problems.map((p) => {
            const Icon = p.icon;
            const cardClass = "surface-matte bg-[var(--color-bg-card-dark)]";
            return (
              <article
                key={p.title}
                className={`grain relative flex flex-col rounded-[22px] border border-[var(--color-border-subtle)] p-6 shadow-[0_20px_60px_rgba(10,5,40,0.45)] laptop:p-6 desktop:p-7 wide:p-9 ${cardClass}`}
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
                  <h3 className="min-w-0 flex-1 text-lg font-semibold leading-snug text-white laptop:text-[1.125rem] desktop:text-[1.25rem] wide:text-[1.375rem]">
                    {p.title}
                  </h3>
                </div>
                <blockquote className="flex-1 text-sm text-[var(--color-text-secondary)] leading-relaxed laptop:text-[0.9375rem] desktop:text-base wide:text-[1.0625rem]">
                  {p.quote}
                </blockquote>
                <p className="mt-3 text-xs text-[var(--color-text-tertiary)] desktop:text-sm">
                  {p.attribution}
                </p>
                <p className="mt-4 border-t border-white/10 pt-4 text-[0.8125rem] leading-relaxed text-[var(--color-brand-highlight)] laptop:mt-5 laptop:pt-5 desktop:text-sm">
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
