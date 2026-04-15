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
  SECTION_PY,
} from "@/app/lib/pageLayout";
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> f7ef86b (changes1)

const animationFeatures = [
  {
    icon: Sparkles,
    title: "Sketch to animation",
    description:
      "Turn animations into useable reference material. We aim for fast previews and iteration.",
  },
  {
    icon: Video,
    title: "Video to animation",
    description:
      "Take motion videos and convert it into reliable poses, animated and all.",
  },
  {
    icon: Box,
    title: "Custom rig support",
    description:
      "Bring your own rigs where it matters. We aim to support a wide range of rig types.",
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
    title: "Sketch to face pose",
    description:
      "Turn doodles of faces into a readable adn accurate facial pose you can maniuplate.",
  },
  {
    icon: Camera,
    title: "Image to face pose",
    description:
      "Find the right image to the right expressions. Especially when you need a fast match to a photo.",
  },
  {
    icon: Grid3x3,
    title: "3D perspective grids & live vanishing points",
    description:
      "Draw with proper perspective that updates as you move the camera.",
  },
  {
    icon: Shirt,
    title: "Cloth physics",
    description:
      "Draping that reacts to changes in the environment. Uncommon in similar tools.",
    highlight: true,
  },
  {
    icon: Wind,
    title: "Hair physics",
    description:
      "Strand motion that follows head turns and movements. Another area we want to nail.",
    highlight: true,
  },
  {
    icon: Layers,
    title: "Asaro head references",
    description:
      "Undertand the human head, providing a reference you can rotate under studio lighting.",
  },
];

export function Vision() {
  return (
    <section
      id="vision"
<<<<<<< HEAD
      className={`relative ${SECTION_PY} ${PAGE_EDGE}`}
=======
<<<<<<< Updated upstream
      className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
=======
      className={`relative ${SECTION_PY} ${SECTION_EDGE}`}
>>>>>>> Stashed changes
>>>>>>> f7ef86b (changes1)
    >
      <div className={PAGE_MAX}>
        <h2 className={`max-w-3xl ${SECTION_H2}`}>
          More than a posing app: a reference hub built for every artist
        </h2>
        <p className={`mt-4 max-w-3xl ${SECTION_LEDE}`}>
          We are building toward a single place where creatives{" "}
          {/* {" "}
          <span className="text-white/90">3D animators</span>   
          */}
          can trust their references of the body, face, clothing, and more, plus
          physics and perspective tools most competitors simply do not ship.
        </p>
        <div className="mt-14 space-y-14">
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold tracking-tight text-[var(--color-brand-highlight)] xl:text-4xl wide:text-[1.35rem]">
=======
<<<<<<< Updated upstream
            <h3 className="text-lg font-semibold tracking-tight text-[var(--color-brand-highlight)]">
=======
            <h3 className="text-lg font-semibold tracking-tight text-[var(--color-brand-highlight)] xl:text-3xl wide:text-[1.35rem]">
>>>>>>> Stashed changes
>>>>>>> f7ef86b (changes1)
              Reference
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {referenceFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className={`rounded-2xl border p-6 shadow-[0_20px_60px_rgba(10,5,40,0.35)] xl:p-7 wide:p-8 ${
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
                          Uncommon
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

          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold tracking-tight text-[var(--color-brand-highlight)] xl:text-xl wide:text-[1.35rem]">
=======
<<<<<<< Updated upstream
            <h3 className="text-lg font-semibold tracking-tight text-[var(--color-brand-highlight)]">
=======
            <h3 className="text-lg font-semibold tracking-tight text-[var(--color-brand-highlight)] xl:text-3xl wide:text-[1.35rem]">
>>>>>>> Stashed changes
>>>>>>> f7ef86b (changes1)
              Animation
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {animationFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="surface-matte rounded-2xl border border-[var(--color-border-subtle)] p-6 shadow-[0_20px_60px_rgba(10,5,40,0.35)] xl:p-7 wide:p-8"
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
        </div>
      </div>
    </section>
  );
}
