import type { LucideIcon } from "lucide-react";
import {
  Box,
  Camera,
  Grid3x3,
  Layers,
  Shirt,
  Smile,
  Sparkles,
  Video,
  Wind,
} from "lucide-react";

const animationFeatures = [
  {
    icon: Sparkles,
    title: "Sketch to animation",
    description:
      "Turn rough motion intent into editable timing blocks — built for iteration, not rigging busywork.",
  },
  {
    icon: Video,
    title: "Video to animation",
    description:
      "Lift motion from reference and retarget onto your characters with controls that stay honest.",
  },
  {
    icon: Box,
    title: "Custom rig support",
    description:
      "Bring your own rigs where it matters — Posematic aims to be the hub, not a walled garden.",
  },
] as const;

const referenceFeatures: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}> = [
  {
    icon: Smile,
    title: "Sketch to facial pose",
    description:
      "From scribbled expression notes to a readable facial pose you can light and rotate.",
  },
  {
    icon: Camera,
    title: "Image to facial pose",
    description:
      "Infer facial structure from stills when you need a fast match to a photo or film grab.",
  },
  {
    icon: Grid3x3,
    title: "3D perspective grids & live vanishing points",
    description:
      "Draw with perspective scaffolding that updates as you move the camera.",
  },
  {
    icon: Shirt,
    title: "Cloth physics",
    description:
      "Draping that reacts to pose changes — rare in reference tools, essential for costume work.",
    highlight: true,
  },
  {
    icon: Wind,
    title: "Hair physics",
    description:
      "Strand motion that follows head turns — another category gap we are closing for stylists.",
    highlight: true,
  },
  {
    icon: Layers,
    title: "Asaro head references",
    description:
      "Planes you can rotate under studio lighting — fundamentals without the dusty textbook vibe.",
  },
];

export function Vision() {
  return (
    <section
      id="vision"
      className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          More than a posing app — the definitive reference hub for every artist
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-[var(--color-text-secondary)]">
          We are building toward a single place illustrators and{" "}
          <span className="text-white/90">3D animators</span> trust for bodies,
          faces, cloth, and motion — with physics and perspective tools most
          competitors simply do not ship.
        </p>

        <div className="mt-14 space-y-14">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-[var(--color-brand-highlight)]">
              Animation
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {animationFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="surface-matte rounded-2xl border border-[var(--color-border-subtle)] p-6 shadow-[0_20px_60px_rgba(10,5,40,0.35)]"
                  >
                    <div className="icon-ring mb-4 w-fit">
                      <div className="icon-ring-inner h-11 w-11">
                        <Icon
                          className="h-5 w-5 text-white"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {f.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-tight text-[var(--color-brand-highlight)]">
              Reference
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {referenceFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className={`rounded-2xl border p-6 shadow-[0_20px_60px_rgba(10,5,40,0.35)] ${
                      f.highlight
                        ? "surface-liquid border-[var(--color-brand-purple)]/30"
                        : "surface-matte border-[var(--color-border-subtle)]"
                    }`}
                  >
                    <div className="icon-ring mb-4 w-fit">
                      <div className="icon-ring-inner h-11 w-11">
                        <Icon
                          className="h-5 w-5 text-white"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-semibold text-white">
                        {f.title}
                      </h4>
                      {f.highlight ? (
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-brand-highlight)]">
                          Rare
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {f.description}
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
