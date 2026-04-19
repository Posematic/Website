import {
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE,
  SECTION_PY_TALL,
} from "@/app/lib/pageLayout";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScz8akaagEr8NHcz29AD64vCSobXj0FXuSod1B5kLM5FLDpyg/viewform?usp=preview";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className={`relative scroll-mt-15 sm:scroll-mt-20 ${SECTION_PY_TALL} ${SECTION_EDGE}`}
    >
      <div className="grain relative mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] border border-[var(--color-border-subtle)] p-10 sm:p-12 laptop:p-10 desktop:max-w-[55rem] desktop:p-14 wide:max-w-[60rem] wide:p-16 surface-liquid shadow-[0_20px_60px_rgba(10,5,40,0.5)]">
        <div className="relative z-[1] text-center">
          <h2 className={SECTION_H2}>Get notified when we launch</h2>
          <p className={`mx-auto mt-4 max-w-2xl ${SECTION_LEDE}`}>
            Reserve your spot for an early supporter perk when we ship. Use
            Posematic the way it is meant to be used.
          </p>
          <div className="mx-auto mt-10 flex max-w-lg justify-center">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] min-w-[200px] items-center justify-center rounded-xl bg-[var(--color-brand-purple)] px-8 text-[15px] font-medium text-white transition hover:bg-[var(--color-brand-lavender)] desktop:min-h-[54px] desktop:min-w-[220px] desktop:px-10 desktop:text-base wide:text-lg"
            >
              Get early access
            </a>
          </div>
          <p className="mt-4 text-sm text-[var(--color-text-tertiary)]">
            We only use your email for launch updates and this perk—not a
            newsletter.
          </p>
        </div>
      </div>
    </section>
  );
}
