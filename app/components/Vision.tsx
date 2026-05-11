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
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE,
  SECTION_PY,
} from "@/app/lib/pageLayout";

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
      "Turn drawings of faces into readable and accurate facial poses you can maniuplate.",
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
      className={`relative ${SECTION_PY} ${SECTION_EDGE}`}
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
        <div className="mt-10 space-y-10 laptop:mt-12 laptop:space-y-12">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-[var(--color-brand-highlight)] laptop:text-[1.35rem] wide:text-[1.45rem]">
              Reference
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 laptop:mt-5">
              {referenceFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className={`rounded-2xl border p-5 shadow-[0_20px_60px_rgba(10,5,40,0.35)] laptop:p-5 desktop:p-6 wide:p-7 ${
                      f.highlight
                        ? "surface-liquid border-[var(--color-brand-purple)]/30"
                        : "surface-matte border-[var(--color-border-subtle)]"
                    }`}
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
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-[0.9375rem] font-semibold text-white laptop:text-base">
                        {f.title}
                      </h4>
                      {f.highlight ? (
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-brand-highlight)]">
                          Uncommon
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--color-text-secondary)] laptop:text-sm">
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight text-[var(--color-brand-highlight)] laptop:text-[1.35rem] wide:text-[1.45rem]">
              Animation
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 laptop:mt-5">
              {animationFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
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
                      {f.title}
                    </h4>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--color-text-secondary)] laptop:text-sm">
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
