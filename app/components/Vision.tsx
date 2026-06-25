import type { LucideIcon } from "lucide-react";
import {
  Box,
  Brush,
  Ear,
  Route,
  ScanSearch,
  Shield,
} from "lucide-react";
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE,
  SECTION_PY,
} from "@/app/lib/pageLayout";

const roadmap = [
  { label: "3D Reference Posing", status: "In progress" },
  { label: "3D Facial Reference" },
  { label: "Face & Hand Reference" },
  { label: "Gesture Drawing" },
  { label: "3D Reference Repositories" },
  { label: "2D Reference Boards" },
  { label: "Reference Collections" },
] as const;

const pillars: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Brush,
    title: "Brush Engine",
    description:
      "Lightweight 2D canvas for quick sketches at the start of every workflow.",
  },
  {
    icon: Box,
    title: "3D Engine",
    description:
      "Real-time 3D viewer for model posing, lighting, and camera control.",
  },
  {
    icon: Route,
    title: "Pose Matching Algorithm",
    description:
      "Maps your sketch to a 3D pose you refine and control. No generative output.",
  },
];

const approach: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Ear,
    title: "Listen first",
    description:
      "We interviewed artists to learn the problem firsthand, before writing a line of code.",
  },
  {
    icon: ScanSearch,
    title: "Identify the pain",
    description:
      "We focused on the core pain point, not the loudest feature request.",
  },
  {
    icon: Shield,
    title: "Artist agency first",
    description:
      "Pro-artist position. No generative AI. Ethically sourced training data. Full artistic control.",
  },
];

export function Vision() {
  return (
    <section
      id="vision"
      className={`relative ${SECTION_PY} ${SECTION_EDGE}`}
    >
      <div className={PAGE_MAX}>
        <h2 className={`max-w-3xl ${SECTION_H2}`}>
          One place for reference
        </h2>
        <p className={`mt-4 max-w-3xl ${SECTION_LEDE}`}>
          Artists should not have to jump between tabs and clunky 3D apps.
          Posematic is building one reference hub for character illustration,
          with artist agency first: no generative AI, ethically sourced data,
          and tools that stay in your hands.
        </p>

        <div className="mt-10 space-y-10 laptop:mt-12 laptop:space-y-12">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-[var(--color-brand-highlight)] laptop:text-[1.35rem] wide:text-[1.45rem]">
              Roadmap
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5 laptop:mt-5">
              {roadmap.map((item) => (
                <span
                  key={item.label}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] font-medium laptop:text-sm ${
                    "status" in item && item.status === "In progress"
                      ? "border-[var(--color-brand-purple)]/40 bg-[var(--color-brand-purple)]/10 text-white"
                      : "border-[var(--color-border-subtle)] bg-[var(--color-bg-card-dark)] text-[var(--color-text-secondary)]"
                  }`}
                >
                  {item.label}
                  {"status" in item && item.status ? (
                    <span className="rounded-full bg-[var(--color-brand-highlight)]/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-brand-highlight)]">
                      {item.status}
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight text-[var(--color-brand-highlight)] laptop:text-[1.35rem] wide:text-[1.45rem]">
              Three pillars
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 laptop:mt-5">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="surface-matte rounded-2xl border border-[var(--color-border-subtle)] p-5 shadow-[0_20px_60px_rgba(10,5,40,0.35)] laptop:p-5 desktop:p-6 wide:p-7"
                  >
                    <div className="icon-ring mb-3 w-fit">
                      <div className="icon-ring-inner h-10 w-10">
                        <Icon
                          className="h-[18px] w-[18px] text-white"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </div>
                    </div>
                    <h4 className="text-[0.9375rem] font-semibold text-white laptop:text-base">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--color-text-secondary)] laptop:text-sm">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight text-[var(--color-brand-highlight)] laptop:text-[1.35rem] wide:text-[1.45rem]">
              How we build
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 laptop:mt-5">
              {approach.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="surface-liquid rounded-2xl border border-[var(--color-border-subtle)] p-5 shadow-[0_20px_60px_rgba(10,5,40,0.35)] laptop:p-5 desktop:p-6 wide:p-7"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-[var(--color-brand-highlight)]">
                        {i + 1}
                      </span>
                      <div className="icon-ring w-fit">
                        <div className="icon-ring-inner h-9 w-9">
                          <Icon
                            className="h-4 w-4 text-white"
                            strokeWidth={1.5}
                            aria-hidden
                          />
                        </div>
                      </div>
                    </div>
                    <h4 className="text-[0.9375rem] font-semibold text-white laptop:text-base">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--color-text-secondary)] laptop:text-sm">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}