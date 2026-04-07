import { Clock, Cpu, DollarSign, UserX } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Posing takes too long",
    quote:
      "“Contemprary posing apps are too much time to figure out, when I can get references online.”",
    attribution: "— Illustrator, digital artist (Stella Wong)",
    fix: "Posematic cuts iteration time with sketch-first input and controls tuned for speed.",
    variant: "liquid" as const,
  },
  {
    icon: Cpu,
    title: "Archaic UI/UX",
    quote:
      "“It feels like software from another decade — dense panels, mystery meat icons.”",
    attribution: "— Concept artist, games",
    fix: "We are rebuilding the interface around a modern, bento-clear layout you can actually memorize.",
    variant: "matte" as const,
  },
  {
    icon: UserX,
    title: "Terrible anatomy",
    quote:
      "“I wish the models were more accurate, the models lack useful anatomical landmarks.”",
    attribution: "— Professional Entertainment Artists, freelance (Daniel)",
    fix: "Anatomy is a core pillar: believable defaults, clearer silhouettes, and honest posing.",
    variant: "matte" as const,
  },
  {
    icon: DollarSign,
    title: "Expensive for professionals and hobbyists",
    quote:
      "“Monthly pricing stings when you are still building an audience.”",
    attribution: "— Freelance character artist",
    fix: "Fair tiers with a generous path for students and early supporters — details at launch.",
    variant: "liquid" as const,
  },
];

export function Problems() {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Existing posing apps are broken
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Four friction points we commonly hear — each paired with how we
          are responding.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {problems.map((p) => {
            const Icon = p.icon;
            const cardClass =
              p.variant === "liquid"
                ? "surface-liquid"
                : "surface-matte bg-[#0c0c1a]";
            return (
              <article
                key={p.title}
                className={`grain relative flex flex-col rounded-[24px] border border-[var(--color-border-subtle)] p-8 shadow-[0_20px_60px_rgba(10,5,40,0.45)] ${cardClass}`}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="icon-ring shrink-0">
                    <div className="icon-ring-inner h-12 w-12">
                      <Icon
                        className="h-5 w-5 text-white"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    </div>
                  </div>
                  <h3 className="min-w-0 flex-1 text-xl font-semibold leading-snug text-white">
                    {p.title}
                  </h3>
                </div>
                <blockquote className="flex-1 text-[var(--color-text-secondary)] leading-relaxed">
                  {p.quote}
                </blockquote>
                <p className="mt-4 text-sm text-[var(--color-text-tertiary)]">
                  {p.attribution}
                </p>
                <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-relaxed text-[var(--color-brand-highlight)]">
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
