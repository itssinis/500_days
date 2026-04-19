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
      <FirstMomentSection />
      <TimeGapSection />
      <SecondMomentSection />
      <LetterSection />
      <ClosingSection />
      <EpilogueSection />
    </div>
  );
}
