import { Fragment } from "react";
<<<<<<< HEAD
import {
  PAGE_EDGE,
  PAGE_MAX,
=======
<<<<<<< Updated upstream
=======
import {
  PAGE_MAX,
  SECTION_EDGE,
>>>>>>> f7ef86b (changes1)
  SECTION_H2,
  SECTION_LEDE,
  SECTION_PY_TALL,
} from "@/app/lib/pageLayout";
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> f7ef86b (changes1)
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
  "min-w-0 flex-1 max-w-[290px] desktop:max-w-[300px] wide:max-w-[320px]";

export function SketchToPose() {
  return (
<<<<<<< HEAD
    <section className={`relative ${SECTION_PY_TALL} ${PAGE_EDGE}`}>
      <div
        className={`grain relative overflow-hidden rounded-[28px] border border-[var(--color-border-subtle)] p-8 sm:p-12 laptop:p-14 desktop:p-16 wide:p-20 surface-liquid shadow-[0_20px_60px_rgba(10,5,40,0.5)] ${PAGE_MAX}`}
      >
=======
<<<<<<< Updated upstream
    <section className="relative px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-[var(--color-border-subtle)] p-8 sm:p-12 lg:p-16 surface-liquid shadow-[0_20px_60px_rgba(10,5,40,0.5)]">
=======
    <section className={`relative ${SECTION_PY_TALL} ${SECTION_EDGE}`}>
      <div
        className={`grain relative overflow-hidden rounded-[28px] border border-[var(--color-border-subtle)] p-8 sm:p-10 laptop:p-10 desktop:p-14 wide:p-18 surface-liquid shadow-[0_20px_60px_rgba(10,5,40,0.5)] ${PAGE_MAX}`}
      >
>>>>>>> Stashed changes
>>>>>>> f7ef86b (changes1)
        <div className="relative z-[1]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--color-brand-highlight)] desktop:px-4 desktop:py-1.5 desktop:text-sm">
            <Sparkles className="h-3.5 w-3.5 desktop:h-4 desktop:w-4" strokeWidth={1.5} aria-hidden />
            Flagship
          </div>
          <h2 className={`max-w-3xl ${SECTION_H2}`}>
            Sketch to pose, powered by machine learning and proven algorithms.
          </h2>
          <p className={`mt-4 max-w-2xl ${SECTION_LEDE}`}>
            We are empowering the next generation of posing apps: go from a
            sketch to a believable pose, then keep iterating without disrupting
            your creative flow.
          </p>

          {/* Mobile: stack each stage (box + text) then arrow */}
          <div className="mt-12 flex flex-col items-center tablet:hidden">
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
                  <h3 className="text-lg font-semibold text-white desktop:text-xl">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-tertiary)] desktop:text-base">
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

          <div className="mt-12 hidden tablet:flex tablet:flex-nowrap tablet:items-start tablet:justify-center tablet:gap-x-2 laptop:gap-x-4">
            {stages.map((stage, i) => (
              <Fragment key={stage.title}>
                <div className={`${STAGE_COL} text-center`}>
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
                  <h3 className="text-lg font-semibold text-white desktop:text-lg wide:text-xl">
                    {stage.title}
                  </h3>
                  <p className="mt-1 pb-3 text-sm text-[var(--color-text-tertiary)] laptop:pb-0 desktop:text-base">
                    {stage.caption}
                  </p>
                </div>
                {i < stages.length - 1 ? (
                  <div
                    className="flex shrink-0 items-center justify-center self-center pb-14 px-1 text-[var(--color-brand-highlight)] laptop:px-3"
                    aria-hidden
                  >
                    <ArrowRight className="h-8 w-8" strokeWidth={2} />
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
