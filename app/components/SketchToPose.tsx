import { Fragment } from "react";
import { PAGE_EDGE, PAGE_MAX } from "@/app/lib/pageLayout";
import Image from "next/image";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

const stages = [
  {
    title: "Sketch",
    caption: "Rough lines, fast intent",
    src: "/images/sketch1.jpg",
    alt: "Rough ink sketch of a figure in a high side kick pose",
  },
  {
    title: "Pose",
    caption: "ML lifts it into 3D",
    src: "/images/model1.png",
    alt: "3D mannequin posed to match the sketch",
  },
  {
    title: "Final",
    caption: "Draw with real reference",
    src: "/images/finalimage.png",
    alt: "Sketch with 3D model aligned for reference",
  },
] as const;

/** Same width for image + caption columns so titles line up under the boxes */
const STAGE_COL = "w-full max-w-[290px] min-w-0 shrink-0";

export function SketchToPose() {
  return (
    <section className={`relative py-20 lg:py-28 ${PAGE_EDGE}`}>
      <div
        className={`grain relative overflow-hidden rounded-[28px] border border-[var(--color-border-subtle)] p-8 sm:p-12 lg:p-16 surface-liquid shadow-[0_20px_60px_rgba(10,5,40,0.5)] ${PAGE_MAX}`}
      >
        <div className="relative z-[1]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--color-brand-highlight)]">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            Flagship
          </div>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Sketch to pose, powered by machine learning and proven algorithms.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            We are empowering the next generation of posing apps: go from a
            sketch to a believable pose, then keep iterating without disrupting
            your creative flow.
          </p>

          {/* Mobile: stack each stage (box + text) then arrow */}
          <div className="mt-12 flex flex-col items-center md:hidden">
            {stages.map((stage, i) => (
              <Fragment key={stage.title}>
                <div className="flex w-full max-w-[280px] flex-col items-center text-center">
                  <div
                    className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-bg-card-dark)]"
                    role="img"
                    aria-label={stage.alt}
                  >
                    <Image
                      src={stage.src}
                      alt={stage.alt}
                      fill
                      sizes="(max-width: 768px) 280px, 290px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">
                    {stage.caption}
                  </p>
                </div>
                {i < stages.length - 1 ? (
                  <div
                    className="flex shrink-0 justify-center py-4 text-[var(--color-brand-highlight)]"
                    aria-hidden
                  >
                    <ArrowDown className="h-7 w-7" strokeWidth={1.25} />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>

          <div className="mt-12 hidden md:block">
            <div className="flex flex-wrap items-center justify-center gap-x-2 lg:gap-x-4">
              {stages.map((stage, i) => (
                <Fragment key={`box-${stage.title}`}>
                  <div className={STAGE_COL}>
                    <div
                      className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-bg-card-dark)]"
                      role="img"
                      aria-label={stage.alt}
                    >
                      <Image
                        src={stage.src}
                        alt={stage.alt}
                        fill
                        sizes="(max-width: 768px) 280px, 290px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {i < stages.length - 1 ? (
                    <div
                      className="flex shrink-0 items-center justify-center px-2 text-[var(--color-brand-highlight)] lg:px-4"
                      aria-hidden
                    >
                      <ArrowRight className="h-8 w-8" strokeWidth={2} />
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-start justify-center gap-x-2 lg:gap-x-4">
              {stages.map((stage, i) => (
                <Fragment key={`copy-${stage.title}`}>
                  <div className={`${STAGE_COL} text-center`}>
                    <h3 className="text-lg font-semibold text-white">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">
                      {stage.caption}
                    </p>
                  </div>
                  {i < stages.length - 1 ? (
                    <div
                      className="w-12 shrink-0 lg:w-16"
                      aria-hidden
                    />
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
