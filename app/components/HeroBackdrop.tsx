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

      <div className="pointer-events-none absolute inset-0 z-8 hidden items-center justify-end pr-2 pl-6 sm:pr-4 sm:pl-10 md:flex md:pr-8 md:pl-16 lg:pr-12">
        <div className="relative h-[min(78svh,880px)] w-[min(92vw,600px)] translate-x-8 translate-y-6 sm:h-[min(82svh,920px)] sm:w-[min(88vw,660px)] sm:translate-y-8 md:w-[min(74vw,740px)] lg:w-[min(60vw,800px)]">
          <Image
            src="/images/823_1x_shots_so.png"
            alt="Posematic app on two tablets: Scenes library and Profile with bento-style settings"
            fill
            className="object-contain object-right brightness-[1.06] drop-shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            sizes="(max-width: 768px) 92vw, 60vw"
            priority
          />
        </div>
      </div>
    </>
  );
}
