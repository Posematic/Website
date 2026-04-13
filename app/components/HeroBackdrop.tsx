import Image from "next/image";
import GridDistortion from "./GridDistortion";

export function HeroBackdrop() {
  return (
    <>
      <div className="absolute inset-0 z-0 min-h-0" aria-hidden>
        <GridDistortion
          imageSrc="/images/937_1x_shots_so.png"
          grid={800}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
        />
      </div>

      {/* Static Image Background */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <Image
          src="/images/937_1x_shots_so.png"
          alt=""
          fill
          className="object-cover object-center brightness-[1.10] saturate-[1.00]"
          sizes="100vw"
          priority
        />
      </div> */}

      {/* Side mockup only when the viewport is wide enough (lg+) to clear the copy column */}
      <div className="pointer-events-none absolute inset-0 z-8 hidden items-center justify-end pr-2 pl-6 sm:pr-4 sm:pl-10 lg:flex lg:pr-8 lg:pl-16 xl:pr-12">
        <div className="relative h-[min(78svh,880px)] w-[min(92vw,600px)] translate-x-4 translate-y-6 sm:h-[min(82svh,920px)] sm:w-[min(88vw,660px)] sm:translate-y-8 lg:w-[min(52vw,800px)] xl:w-[min(48vw,820px)]">
          <Image
            src="/images/823_1x_shots_so.png"
            alt="Posematic app on two tablets: Scenes library and Profile with bento-style settings"
            fill
            className="object-contain object-right brightness-[1.06] drop-shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            sizes="(min-width: 1024px) 50vw, 96vw"
            priority
          />
        </div>
      </div>
    </>
  );
}
