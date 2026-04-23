import Particles from "./components/Particles";
import HeroSection from "./sections/HeroSection";
import IntroSection from "./sections/IntroSection";
import FirstMomentSection from "./sections/FirstMomentSection";
import TimeGapSection from "./sections/TimeGapSection";
import SecondMomentSection from "./sections/SecondMomentSection";
import LetterSection from "./sections/LetterSection";
import ClosingSection from "./sections/ClosingSection";
import EpilogueSection from "./sections/EpilogueSection";

/**
 * App principal — compone todas las secciones en una sola página
 * con partículas ambientales de fondo.
 */
export default function App() {
  return (
    <div className="relative z-10">
      {/* Partículas sutiles de fondo */}
      <Particles />

      {/* Secciones de la historia */}
      <HeroSection />
      <IntroSection />
      <div className="h-40" aria-hidden="true" />
      <FirstMomentSection />
      <TimeGapSection />
      <SecondMomentSection />
      <div
        className="h-32"
        style={{ background: "linear-gradient(to bottom, var(--color-beige), var(--color-warm))" }}
        aria-hidden="true"
      />
      <LetterSection />
      <ClosingSection />
      <EpilogueSection />
    </div>
  );
}
