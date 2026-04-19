import AnimatedSection from "../components/AnimatedSection";

/**
 * First Moment — el primer encuentro, texto emocional mínimo.
 */
export default function FirstMomentSection() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <AnimatedSection delay={0}>
          <p
            className="font-serif text-sm uppercase tracking-[0.3em] mb-6"
            style={{ color: "var(--color-gold)" }}
          >
            El primer encuentro
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p
            className="font-serif text-2xl md:text-3xl font-light leading-relaxed"
            style={{ color: "var(--color-dark)" }}
          >
            Fue un cruce de miradas que no debería haber significado nada.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p
            className="mt-8 text-base md:text-lg font-light leading-relaxed"
            style={{ color: "var(--color-brown)" }}
          >
            Pero algo se quedó. Sin nombre, sin forma.
            Solo una sensación de que el mundo acababa de moverse un centímetro
            hacia un lugar donde todo iba a ser distinto.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div
            className="mx-auto mt-10 h-px w-12"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
