import Image from "next/image";
import { PAGE_EDGE, PAGE_MAX } from "@/app/lib/pageLayout";

const POSING_DEMO = {
  src: "/images/app_posing_posematic.gif",
  alt: "3D mannequin with pose markers transitioning from T-pose to a dynamic pose on a grid",
} as const;

export function Explainer() {
  return (
    <section className={`relative py-16 lg:py-24 ${PAGE_EDGE}`}>
      <div
        className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${PAGE_MAX}`}
      >
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What is a posing app?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            A posing app lets you position a 3D figure (limbs, torso, camera)
            so you can light, frame, and capture reference for illustration or
            animation. It is the bridge between &ldquo;I know what I want to
            draw&rdquo; and &ldquo;I can see it clearly enough to commit ink to
            canvas.&rdquo;
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Posematic treats that bridge as a core product: fast
            iteration, readable anatomy, and workflows that respect how artists and creatives
            actually work.
          </p>
        </div>
        <div
          className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-gradient-to-b from-[#12122a] to-[#0a0a18] surface-matte"
          role="img"
          aria-label={POSING_DEMO.alt}
        >
          <Image
            src={POSING_DEMO.src}
            alt={POSING_DEMO.alt}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
