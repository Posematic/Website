import { Fragment } from "react";
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE,
  SECTION_PY_TALL,
} from "@/app/lib/pageLayout";
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

/** Columns shrink to fit on tablet; fixed max on larger screens */
const STAGE_COL =
  "min-w-0 flex-1 max-w-[240px] desktop:max-w-[256px] wide:max-w-[280px]";

export function SketchToPose() {
  return (
    <section className={`relative ${SECTION_PY_TALL} ${SECTION_EDGE}`}>
      <div
        className={`grain relative overflow-hidden rounded-[28px] border border-[var(--color-border-subtle)] p-8 sm:p-11 laptop:p-12 desktop:p-14 wide:p-18 surface-liquid shadow-[0_20px_60px_rgba(10,5,40,0.5)] ${PAGE_MAX}`}
      >
        <div className="relative z-[1]">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-[var(--color-brand-highlight)] desktop:px-3 desktop:py-1 desktop:text-xs">
            <Sparkles className="h-3 w-3 desktop:h-3.5 desktop:w-3.5" strokeWidth={1.5} aria-hidden />
            Flagship
          </div>
          <h2 className={`max-w-3xl ${SECTION_H2}`}>
            Sketch to pose, powered by machine learning and proven algorithms.
          </h2>
          <p className={`mt-3 max-w-2xl ${SECTION_LEDE}`}>
            We are empowering the next generation of posing apps: go from a
            sketch to a believable pose, then keep iterating without disrupting
            your creative flow.
          </p>

          {/* Mobile: stack each stage (box + text) then arrow */}
          <div className="mt-8 flex flex-col items-center tablet:hidden">
            {stages.map((stage, i) => (
              <Fragment key={stage.title}>
                <div className="flex w-full max-w-[240px] flex-col items-center text-center">
                  <div
                    className="relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-[var(--color-bg-card-dark)]"
                    role="img"
                    aria-label={stage.alt}
                  >
                    <Image
                      src={stage.src}
                      alt={stage.alt}
                      fill
                      sizes="(max-width: 768px) 240px, 256px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-white desktop:text-lg">
                    {stage.title}
                  </h3>
                  <p className="mt-0.5 text-[0.8125rem] text-[var(--color-text-tertiary)] desktop:text-sm">
                    {stage.caption}
                  </p>
                </div>
                {i < stages.length - 1 ? (
                  <div
                    className="flex shrink-0 justify-center py-3 text-[var(--color-brand-highlight)]"
                    aria-hidden
                  >
                    <ArrowDown className="h-6 w-6" strokeWidth={1.25} />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>

          <div className="mt-8 hidden tablet:flex tablet:flex-nowrap tablet:items-start tablet:justify-center tablet:gap-x-2 laptop:gap-x-3">
            {stages.map((stage, i) => (
              <Fragment key={stage.title}>
                <div className={`${STAGE_COL} text-center`}>
                  <div
                    className="relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-[var(--color-bg-card-dark)]"
                    role="img"
                    aria-label={stage.alt}
                  >
                    <Image
                      src={stage.src}
                      alt={stage.alt}
                      fill
                      sizes="(max-width: 768px) 240px, 256px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-white desktop:text-[1.0625rem] wide:text-lg">
                    {stage.title}
                  </h3>
                  <p className="mt-0.5 pb-2 text-[0.8125rem] text-[var(--color-text-tertiary)] laptop:pb-0 desktop:text-sm">
                    {stage.caption}
                  </p>
                </div>
                {i < stages.length - 1 ? (
                  <div
                    className="flex shrink-0 items-center justify-center self-center pb-12 px-1 text-[var(--color-brand-highlight)] laptop:px-2"
                    aria-hidden
                  >
                    <ArrowRight className="h-6 w-6 desktop:h-7 desktop:w-7" strokeWidth={2} />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
