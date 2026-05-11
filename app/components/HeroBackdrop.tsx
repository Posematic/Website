// import GridDistortion from "./GridDistortion";
import Image from "next/image"

const HERO_BACKGROUND = "/images/937_1x_shots_so.png" as const;

export function HeroBackdrop() {
  return (
    <Image
      src = {HERO_BACKGROUND}
      alt="background image"
      fill
      className="object-cover object-center"
      sizes="100vw"
      priority
    />

    // Currently disabling the cursor effects because of issues on the mobile side of the website
    // Possible memory limit issue, or some other issue when rapidly zooming in on ios
    // <div className="absolute inset-0 z-0 min-h-0" aria-hidden>
    //   <GridDistortion
    //     imageSrc="/images/937_1x_shots_so.png"
    //     grid={800}
    //     mouse={0.1}
    //     strength={0.15}
    //     relaxation={0.9}
    //   />
    // </div>
  );
}
