import type { CSSProperties } from "react";
import Image from "next/image";
import { PAGE_MAX, SECTION_EDGE, SECTION_PY } from "@/app/lib/pageLayout";
import { SectionHeader } from "./SectionHeader";

type MarqueeVars = CSSProperties & { "--marquee-duration"?: string };

type GalleryItem = {
  src: string;
  alt: string;
};

/** Creative pipeline + finished work — framed prints on black. */
const artwork: GalleryItem[] = [
  { src: "/images/sketch1.jpg", alt: "Rough ink gesture sketch of a high side-kick pose" },
  { src: "/images/model1.png", alt: "3D mannequin posed to match the kick sketch" },
  { src: "/images/finalimage.png", alt: "Finished ink illustration of a martial artist mid-kick" },
  { src: "/images/explainer_sketch.jpg", alt: "Line sketch of a seated figure" },
  { src: "/images/explainer_pose.jpg", alt: "3D model posed to match the seated sketch" },
];

/** Product screenshots — the app floating on pure black. */
const appShots: GalleryItem[] = [
  { src: "/images/posematic_ipad_concept.png", alt: "Posematic Profile and Scenes screens on two tablets" },
  { src: "/images/823_1x_shots_so.png", alt: "Posematic Scenes library and Profile on tablets" },
  { src: "/images/497_1x_shots_so.png", alt: "Posematic Profile settings and a figures scene on tablets" },
];

function ArtCard({ item, hidden = false }: { item: GalleryItem; hidden?: boolean }) {
  return (
    <li className="shrink-0" aria-hidden={hidden}>
      <div className="relative h-[clamp(190px,26vh,300px)] aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-bg-card-dark)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <Image
          src={item.src}
          alt={hidden ? "" : item.alt}
          fill
          sizes="300px"
          className="object-cover"
        />
      </div>
    </li>
  );
}

function ShotCard({ item, hidden = false }: { item: GalleryItem; hidden?: boolean }) {
  return (
    <li className="shrink-0" aria-hidden={hidden}>
      <div className="relative h-[clamp(150px,22vh,250px)] aspect-[16/10]">
        <Image
          src={item.src}
          alt={hidden ? "" : item.alt}
          fill
          sizes="(max-width: 768px) 70vw, 440px"
          className="object-contain"
        />
      </div>
    </li>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
  variant,
}: {
  items: GalleryItem[];
  direction: "left" | "right";
  duration: string;
  variant: "art" | "shot";
}) {
  const Card = variant === "art" ? ArtCard : ShotCard;
  return (
    <div className="marquee-mask group w-full overflow-hidden">
      <ul
        className={`flex w-max items-center gap-5 laptop:gap-6 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{ "--marquee-duration": duration } as MarqueeVars}
      >
        {items.map((item) => (
          <Card key={`a-${item.src}`} item={item} />
        ))}
        {items.map((item) => (
          <Card key={`b-${item.src}`} item={item} hidden />
        ))}
      </ul>
    </div>
  );
}

export function Gallery() {
  return (
    <section className={`relative overflow-hidden ${SECTION_PY}`}>
      <div className={SECTION_EDGE}>
        <div className={PAGE_MAX}>
          <SectionHeader
            eyebrow="Gallery"
            title="From a rough line to a finished frame"
            lede="Sketch, pose, and reference — every step lives in one tool built around how artists actually work."
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-5 laptop:mt-16 laptop:gap-7">
        <MarqueeRow items={artwork} direction="left" duration="70s" variant="art" />
        <MarqueeRow items={appShots} direction="right" duration="90s" variant="shot" />
      </div>
    </section>
  );
}
