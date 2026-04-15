import GridDistortion from "./GridDistortion";

export function HeroBackdrop() {
  return (
    <div className="absolute inset-0 z-0 min-h-0" aria-hidden>
      <GridDistortion
        imageSrc="/images/937_1x_shots_so.png"
        grid={800}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
      />
    </div>
  );
}
