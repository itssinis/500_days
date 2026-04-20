import AnimatedSection from "../components/AnimatedSection";

/**
 * Intro Transition — saludo y presentación de la historia.
 */
export default function IntroSection() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-24">
      <AnimatedSection className="max-w-2xl text-center">
        <p
          className="font-serif text-sm uppercase tracking-[0.3em] mb-6"
          style={{ color: "var(--color-gold)" }}
        >
          Mi amor
        </p>
        <p
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-snug italic"
          style={{ color: "var(--color-brown)" }}
        >
          No me pediste que te escribiera algo memorable, pero quiero hacerlo.
        </p>
        <p
          className="mt-6 text-lg md:text-xl font-light leading-relaxed"
          style={{ color: "var(--color-dark)" }}
        >
          Esta es la historia de nuestros bellos clics; porque no solo fue uno, fueron dos.
        </p>
        <div
          className="mx-auto mt-8 h-px w-16"
          style={{ backgroundColor: "var(--color-gold)" }}
        />
      </AnimatedSection>
    </section>
  );
}
