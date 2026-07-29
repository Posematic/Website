"use client";

import { useState } from "react";

const roadmap = [
  {
    label: "3D Reference Posing",
    status: "In progress" as const,
    description:
      "A digital mannequin for posing limbs and camera angle. Pose estimation turns a photo or sketch into joint angles automatically—no tedious limb-by-limb tweaking.",
  },
  {
    label: "3D Facial Reference",
    description:
      "Pose a 3D head for skull anatomy, expressions, and facial features. Adjust manually or pull an expression from a photo using an algorithm.",
  },
  {
    label: "Face & Hand Reference",
    description:
      "Extract usable face and hand poses from photos—expression mapping for faces and pose estimation for hands, without generative output.",
  },
  {
    label: "Gesture Drawing",
    description:
      "Timed drawing drills from 30 seconds to 5 minutes with built-in 2D and 3D reference, a timer, and an in-app canvas.",
  },
  {
    label: "3D Reference Repositories",
    description:
      "A searchable library of pre-made 3D pose models. Browse by scrolling or find similar poses with pose search.",
  },
  {
    label: "2D Reference Boards",
    description:
      "A digital corkboard to organize reference images and in-app poses, exportable as an image.",
  },
  {
    label: "Reference Collections",
    description:
      "Personal libraries of external reference with semantic, stylistic, and pose search.",
  },
] as const;

const defaultIndex = roadmap.findIndex((item) => "status" in item);

export function Roadmap() {
  const [selectedIndex, setSelectedIndex] = useState(
    defaultIndex >= 0 ? defaultIndex : 0,
  );
  const selected = roadmap[selectedIndex];

  return (
    <div>
      <h3 className="text-base font-semibold tracking-tight text-[var(--color-brand-highlight)] laptop:text-[1.35rem] wide:text-[1.45rem]">
        Roadmap
      </h3>
      <div
        className="mt-4 flex flex-wrap gap-2.5 laptop:mt-5"
        role="tablist"
        aria-label="Product roadmap"
      >
        {roadmap.map((item, index) => {
          const isSelected = index === selectedIndex;
          const isInProgress = "status" in item && item.status === "In progress";

          return (
            <button
              key={item.label}
              type="button"
              role="tab"
              id={`roadmap-tab-${index}`}
              aria-selected={isSelected}
              aria-controls="roadmap-panel"
              onClick={() => setSelectedIndex(index)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] font-medium transition-colors laptop:text-sm ${
                isSelected
                  ? "border-[var(--color-brand-purple)]/40 bg-[var(--color-brand-purple)]/10 text-white"
                  : isInProgress
                    ? "border-[var(--color-brand-purple)]/25 bg-[var(--color-brand-purple)]/5 text-[var(--color-text-secondary)] hover:border-[var(--color-brand-purple)]/35 hover:text-white"
                    : "border-[var(--color-border-subtle)] bg-[var(--color-bg-card-dark)] text-[var(--color-text-secondary)] hover:border-white/10 hover:text-white"
              }`}
            >
              {item.label}
              {"status" in item && item.status ? (
                <span className="rounded-full bg-[var(--color-brand-highlight)]/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-brand-highlight)]">
                  {item.status}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
      <div
        id="roadmap-panel"
        role="tabpanel"
        aria-labelledby={`roadmap-tab-${selectedIndex}`}
        className="mt-4 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-card-dark)] px-5 py-4 laptop:mt-5 laptop:px-6 laptop:py-5"
      >
        <p className="text-[0.8125rem] leading-relaxed text-[var(--color-text-secondary)] laptop:text-sm">
          {selected.description}
        </p>
      </div>
    </div>
  );
}
