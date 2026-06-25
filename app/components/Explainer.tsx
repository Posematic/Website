import Image from "next/image";
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE,
  SECTION_PY,
} from "@/app/lib/pageLayout";

const POSING_DEMO = {
  src: "/images/posematic_posing_ver2.gif",
  alt: "3D mannequin with pose markers transitioning from T-pose to a dynamic pose on a grid",
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
            Posing is our first focus. Contemprary posing apps exist,
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
            <Image
              src={POSING_DEMO.src}
              alt={POSING_DEMO.alt}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
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
