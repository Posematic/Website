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
  SECTION_LEDE_NARROW,
  SECTION_PY,
} from "@/app/lib/pageLayout";
import { CARD_BASE, CARD_INTERACTIVE, SECTION_EYEBROW } from "@/app/lib/uiTokens";

const animationFeatures = [
  {
    icon: Sparkles,
    title: "Sketch to animation",
    description:
      "Turn animations into usable reference material with fast previews and iteration.",
  },
  {
    icon: Video,
    title: "Video to animation",
    description:
      "Convert motion videos into reliable poses—animated and ready to reference.",
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
      "Turn face drawings into readable, accurate expressions you can manipulate.",
  },
  {
    icon: Camera,
    title: "Image to face pose",
    description:
      "Match expressions to photos quickly when you need a fast reference.",
  },
  {
    icon: Grid3x3,
    title: "3D perspective grids",
    description:
      "Draw with proper perspective that updates as you move the camera.",
  },
  {
    icon: Shirt,
    title: "Cloth physics",
    description:
      "Draping that reacts to pose and environment changes—uncommon in similar tools.",
    highlight: true,
  },
  {
    icon: Wind,
    title: "Hair physics",
    description:
      "Strand motion that follows head turns and movement—another area we want to nail.",
    highlight: true,
  },
  {
    icon: Layers,
    title: "Asaro head references",
    description:
      "Understand head form with a reference you can rotate under studio lighting.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  highlight = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-[20px] border p-5 laptop:p-5 desktop:p-6 wide:p-7 ${CARD_INTERACTIVE} ${
        highlight
          ? "surface-liquid border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          : `${CARD_BASE}`
      }`}
    >
      <div className="icon-ring mb-3 w-fit">
        <div className="icon-ring-inner h-10 w-10">
          <Icon className="h-[18px] w-[18px] text-white" strokeWidth={1.5} aria-hidden />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-white laptop:text-base">
          {title}
        </h4>
        {highlight ? (
          <span className="rounded-full border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/55">
            Uncommon
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-[0.8125rem] leading-[1.65] text-[var(--color-text-secondary)] laptop:text-sm">
        {description}
      </p>
    </div>
  );
}

export function Vision() {
  return (
    <section id="vision" className={`relative ${SECTION_PY} ${SECTION_EDGE}`}>
      <div className={PAGE_MAX}>
        <div className={SECTION_EYEBROW}>Roadmap</div>
        <h2 className={`max-w-[62ch] ${SECTION_H2}`}>
          More than a posing app: a reference hub built for every artist
        </h2>
        <p className={`mt-4 ${SECTION_LEDE_NARROW}`}>
          We are building toward one place where creatives can trust references
          for the body, face, clothing, and more—plus physics and perspective
          tools most competitors do not ship.
        </p>
        <div className="mt-12 space-y-12 laptop:mt-14 laptop:space-y-14">
          <div>
            <h3 className="text-feather w-fit text-lg font-bold tracking-[-0.02em] laptop:text-[1.5rem] wide:text-[1.625rem]">
              Reference
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {referenceFeatures.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-feather w-fit text-lg font-bold tracking-[-0.02em] laptop:text-[1.5rem] wide:text-[1.625rem]">
              Animation
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {animationFeatures.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
