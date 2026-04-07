import { ComingSoon } from "./components/ComingSoon";
import { Explainer } from "./components/Explainer";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Problems } from "./components/Problems";
import { SketchToPose } from "./components/SketchToPose";
import { Team } from "./components/Team";
import { Vision } from "./components/Vision";
import { Waitlist } from "./components/Waitlist";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div id="product" className="scroll-mt-3 sm:scroll-mt-3">
          <SketchToPose />
          <Explainer />
          <Problems />
          <Vision />
        </div>
        <Team />
        <ComingSoon />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
