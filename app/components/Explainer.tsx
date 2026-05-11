import Image from "next/image";
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE,
  SECTION_PY,
} from "@/app/lib/pageLayout";

const POSING_DEMO = {
  src: "/images/app_posing_posematic.gif",
  alt: "3D mannequin with pose markers transitioning from T-pose to a dynamic pose on a grid",
} as const;

export function Explainer() {
  return (
    <section className={`relative ${SECTION_PY} ${SECTION_EDGE}`}>
      <div
        className={`grid gap-10 laptop:grid-cols-2 laptop:items-center laptop:gap-9 desktop:gap-12 wide:gap-16 ${PAGE_MAX}`}
      >
        <div>
          <h2 className={SECTION_H2}>What is a posing app?</h2>
          <p className={`mt-4 ${SECTION_LEDE}`}>
            A posing app lets you position a 3D figure (limbs, torso, camera)
            so you can light, frame, and capture reference for illustration or
            animation. It is the bridge between &ldquo;I know what I want to
            draw&rdquo; and &ldquo;I can see it clearly enough to commit ink to
            canvas.&rdquo;
          </p>
          <p className={`mt-3 ${SECTION_LEDE}`}>
            Posematic treats that bridge as a core product: fast
            iteration, readable anatomy, and workflows that respect how artists and creatives
            actually work.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-tertiary)] italic">
            Disclaimer: Using Magic Poser to give context, placeholder, all credit to Wombat Studios
          </p>
        </div>
        <figure className="min-w-0 w-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-gradient-to-b from-[#12122a] to-[#0a0a18] surface-matte">
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
