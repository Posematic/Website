import {
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE_NARROW,
  SECTION_PY_TALL,
} from "@/app/lib/pageLayout";
import { CTA_PRIMARY_LG, PANEL_SHELL, SECTION_EYEBROW } from "@/app/lib/uiTokens";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScz8akaagEr8NHcz29AD64vCSobXj0FXuSod1B5kLM5FLDpyg/viewform?usp=preview";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className={`relative scroll-mt-15 sm:scroll-mt-20 ${SECTION_PY_TALL} ${SECTION_EDGE}`}
    >
      <div
        className={`${PANEL_SHELL} mx-auto w-full max-w-5xl p-10 sm:p-12 laptop:p-12 desktop:max-w-[55rem] desktop:p-14 wide:max-w-[60rem] wide:p-16 surface-liquid`}
      >
        <div className="relative z-[1] text-center">
          <div className={`${SECTION_EYEBROW} mx-auto`}>Early access</div>
          <h2 className={SECTION_H2}>Get notified when we launch</h2>
          <p className={`mx-auto mt-4 ${SECTION_LEDE_NARROW}`}>
            Reserve your spot for an early supporter perk when we ship—built for
            artists who want reference that keeps up with their workflow.
          </p>
          <div className="mx-auto mt-10 flex max-w-lg justify-center">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={CTA_PRIMARY_LG}
            >
              Get early access
            </a>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-tertiary)]">
            We only use your email for launch updates and this perk—not a
            newsletter.
          </p>
        </div>
      </div>
    </section>
  );
}
