import { Clock, Cpu, DollarSign, UserX } from "lucide-react";

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
    title: "Archaic UI/UX",
    quote:
      "“It’s easy to start, but once you need more control, the UI gets confusing and unintuitive.”",
    attribution: "Casual Artist, Hobbyist",
    fix: "We are rebuilding the interface around a modern, easily readable layout you actually understand.",
    variant: "matte" as const,
  },
  {
    icon: UserX,
    title: "Terrible anatomy",
    quote:
      "“I wish the models were more accurate, the models lack useful anatomical landmarks.”",
    attribution: "Professional entertainment artist, Freelance",
    fix: "Anatomy is a core pillar: believable default presets, clearer silhouettes, and physiological posing.",
    variant: "matte" as const,
  },
  {
    icon: DollarSign,
    title: "Expensive for professionals and hobbyists",
    quote:
      "“A lot of the features I need are locked behind paywalls, and they’re just too expensive.”",
    attribution: "From many artists interviewed",
    fix: "Fair tiers with a generous path for students and early supporters. More details to be provided at launch.",
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
          Four pain points we hear a lot, each with how we aim to tackle these problems.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-tertiary)] italic">
          From real testimonies
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {problems.map((p) => {
            const Icon = p.icon;
            const cardClass =
              p.variant === "liquid"
                ? "surface-liquid"
                : "surface-matte bg-[var(--color-bg-card-dark)]";
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
