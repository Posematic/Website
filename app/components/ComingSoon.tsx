import { SiAppstore, SiGoogleplay } from "react-icons/si";
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_LEDE,
  SECTION_PY_COMPACT,
} from "@/app/lib/pageLayout";
import { PANEL_SHELL } from "@/app/lib/uiTokens";

export function ComingSoon() {
  return (
    <section className={`relative ${SECTION_PY_COMPACT} ${SECTION_EDGE}`}>
      <div
        className={`${PANEL_SHELL} px-8 py-12 text-center sm:px-10 laptop:px-12 laptop:py-12 desktop:px-14 desktop:py-14 wide:px-16 wide:py-16 surface-matte ${PAGE_MAX}`}
      >
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-tertiary)] desktop:text-base">
          Coming soon
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl desktop:text-[1.75rem] wide:text-[2rem] wide:leading-tight">
          Mobile first, then desktop
        </h2>
        <p className={`mx-auto mt-4 max-w-xl ${SECTION_LEDE}`}>
          We are polishing our core posing features, such as, sketch-to-pose, and account flows before
          our full release. Get development updates so you can try Posematic as soon as
          it drops. 
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50 desktop:px-6 desktop:py-3.5 desktop:text-base"
          >
            <SiAppstore className="h-5 w-5 desktop:h-6 desktop:w-6" aria-hidden />
            App Store
          </button>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50 desktop:px-6 desktop:py-3.5 desktop:text-base"
          >
            <SiGoogleplay className="h-5 w-5 desktop:h-6 desktop:w-6" aria-hidden />
            Google Play
          </button>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/50 desktop:px-6 desktop:py-3.5 desktop:text-base"
          >
            Web (later)
          </button>
        </div>
      </div>
    </section>
  );
}
