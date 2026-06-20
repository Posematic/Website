import type { ReactNode } from "react";
import { SECTION_H2, SECTION_LEDE } from "@/app/lib/pageLayout";
import { SECTION_EYEBROW } from "@/app/lib/uiTokens";

/**
 * Shared section header: eyebrow + display heading + lede.
 * Centered by default (Feather rhythm: centered headers over left-aligned grids).
 */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "center",
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div
      className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <div className={`${SECTION_EYEBROW} ${center ? "mx-auto" : ""}`}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className={SECTION_H2}>{title}</h2>
      {lede ? (
        <p
          className={`mt-5 max-w-[60ch] ${SECTION_LEDE} ${center ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
