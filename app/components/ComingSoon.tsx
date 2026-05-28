import { Apple } from "lucide-react";
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_LEDE_NARROW,
  SECTION_PY_COMPACT,
} from "@/app/lib/pageLayout";
import { PANEL_SHELL, SECTION_EYEBROW } from "@/app/lib/uiTokens";

const PLATFORM_BTN =
  "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/45 cursor-not-allowed desktop:px-6 desktop:py-3.5 desktop:text-base";

export function ComingSoon() {
  return (
    <section className={`relative ${SECTION_PY_COMPACT} ${SECTION_EDGE}`}>
      <div
        className={`${PANEL_SHELL} px-8 py-12 text-center sm:px-10 laptop:px-12 laptop:py-12 desktop:px-14 desktop:py-14 wide:px-16 wide:py-16 surface-matte ${PAGE_MAX}`}
      >
        <div className="relative z-[1]">
          <div className={`${SECTION_EYEBROW} mx-auto`}>Platforms</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl desktop:text-[1.75rem] wide:text-[2rem] wide:leading-tight">
            Mobile first, then desktop
          </h2>
          <p className={`mx-auto mt-4 ${SECTION_LEDE_NARROW}`}>
            We are polishing core posing features—sketch-to-pose and account
            flows—before full release. Join the waitlist to try Posematic as soon
            as it drops.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button type="button" disabled className={PLATFORM_BTN} aria-disabled="true">
              <Apple className="h-5 w-5 desktop:h-6 desktop:w-6" strokeWidth={1.5} aria-hidden />
              App Store
            </button>
            <button type="button" disabled className={PLATFORM_BTN} aria-disabled="true">
              <span className="font-semibold" aria-hidden>
                ▶
              </span>
              Google Play
            </button>
            <button type="button" disabled className={PLATFORM_BTN} aria-disabled="true">
              Web (later)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
