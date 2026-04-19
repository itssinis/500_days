import AnimatedSection from "../components/AnimatedSection";

/**
 * Intro Transition — frase puente entre el hero y la historia.
 */
export default function IntroSection() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-24">
      <AnimatedSection className="max-w-2xl text-center">
        <p
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-snug italic"
          style={{ color: "var(--color-brown)" }}
        >
          No fue un solo momento… fueron dos.
        </p>
        <div
          className="mx-auto mt-8 h-px w-16"
          style={{ backgroundColor: "var(--color-gold)" }}
        />
      </AnimatedSection>
    </section>
  );
}
