import { ComingSoon } from "./components/ComingSoon";
import { Explainer } from "./components/Explainer";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Problems } from "./components/Problems";
import { Reveal } from "./components/Reveal";
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
          <Reveal>
            <SketchToPose />
          </Reveal>
          <Reveal>
            <Explainer />
          </Reveal>
          <Reveal>
            <Problems />
          </Reveal>
          <Reveal>
            <Vision />
          </Reveal>
        </div>
        <Reveal>
          <Team />
        </Reveal>
        <Reveal>
          <ComingSoon />
        </Reveal>
        <Reveal>
          <Waitlist />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
