import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE,
  SECTION_PY,
} from "@/app/lib/pageLayout";
import { PreviewPlayer } from "./PreviewPlayer";

const POSING_DEMO = {
  src: "/images/posematic_posing_ver2.mp4",
  poster: "/images/posematic_posing_poster.webp",
  alt: "3D pose reference mannequin transitioning from a T-pose to a dynamic pose on a grid",
} as const;

export function Explainer() {
  return (
    <section className={`relative ${SECTION_PY} ${SECTION_EDGE}`}>
      <div
        className={`grid gap-10 laptop:grid-cols-2 laptop:items-center laptop:gap-9 desktop:gap-12 wide:gap-16 ${PAGE_MAX}`}
      >
        <div>
          <h2 className={SECTION_H2}>Starting with posing</h2>
          <p className={`mt-4 ${SECTION_LEDE}`}>
            Posing is our first focus. Contemporary posing apps exist,
            but most are slow and hard to use.
          </p>
          <p className={`mt-3 ${SECTION_LEDE}`}>
            A posing app lets you position a 3D figure, set the camera, and
            capture reference for your work. Posematic owns that step in the
            pipeline: ideation, reference, finalization.
          </p>
          <p className={`mt-3 ${SECTION_LEDE}`}>
            We are shipping a feature-complete posing app at launch, with Pose
            Matching built in from the start.
          </p>
        </div>
        <figure className="min-w-0 w-full">
          <div className="relative aspect-[3.25/3] w-full overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-gradient-to-b from-[#12122a] to-[#0a0a18] surface-matte">
            <PreviewPlayer
              src={POSING_DEMO.src}
              poster={POSING_DEMO.poster}
              alt={POSING_DEMO.alt}
            />
          </div>
          {/* <figcaption className={`mt-4 text-center ${SECTION_LEDE}`}>
            Source: Magic Poser
          </figcaption> */}
        </figure>
      </div>
    </section>
  );
}
