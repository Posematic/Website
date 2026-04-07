import Image from "next/image";

/**
 * Full-bleed 937 background; 823 tablet mockup on the right (z-[8] above scrims in Hero).
 */
export function HeroBackdrop() {
  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <Image
          src="/images/937_1x_shots_so.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      <div
        className="absolute inset-0 z-[1] bg-[var(--color-bg-primary)]/5"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-[8] flex items-center justify-end pr-2 pl-6 sm:pr-4 sm:pl-10 md:pr-8 md:pl-16 lg:pr-12">
        <div className="relative h-[min(75svh,820px)] w-[min(92vw,560px)] sm:h-[min(78svh,860px)] sm:w-[min(88vw,620px)] md:w-[min(72vw,680px)] lg:w-[min(58vw,720px)]">
          <Image
            src="/images/823_1x_shots_so.png"
            alt="Posematic app on two tablets: Scenes library and Profile with bento-style settings"
            fill
            className="object-contain object-right drop-shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            sizes="(max-width: 768px) 92vw, 58vw"
            priority
          />
        </div>
      </div>
    </>
  );
}
