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
import { PAGE_MAX, SECTION_EDGE, SECTION_PY } from "@/app/lib/pageLayout";
import { SectionHeader } from "./SectionHeader";

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
    <div className="group flex flex-col border-t border-white/10 pt-6 transition-colors duration-200 hover:border-white/25">
      <Icon
        className="h-9 w-9 text-white/85 transition-colors duration-200 group-hover:text-white"
        strokeWidth={1.25}
        aria-hidden
      />
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <h4 className="text-lg font-semibold tracking-[-0.01em] text-white desktop:text-xl">
          {title}
        </h4>
        {highlight ? (
          <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/55">
            Uncommon
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-[1.6] text-white/60 desktop:text-[0.9375rem]">
        {description}
      </p>
    </div>
  );
}

export function Vision() {
  return (
    <section id="vision" className={`relative ${SECTION_PY} ${SECTION_EDGE}`}>
      <div className={PAGE_MAX}>
        <SectionHeader
          eyebrow="Roadmap"
          title="More than a posing app — a reference hub for every artist"
          lede="One place creatives can trust for the body, face, clothing, and more, plus physics and perspective tools most competitors do not ship."
        />

        <div className="mt-16 space-y-16 laptop:mt-20 laptop:space-y-20">
          <div>
            <h3 className="text-feather w-fit text-xl font-bold tracking-[-0.02em] laptop:text-[1.625rem]">
              Reference
            </h3>
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {referenceFeatures.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-feather w-fit text-xl font-bold tracking-[-0.02em] laptop:text-[1.625rem]">
              Animation
            </h3>
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
