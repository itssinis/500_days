import AnimatedSection from "../components/AnimatedSection";

/**
 * Second Moment — el segundo encuentro, tono más intenso,
 * con cambio sutil de fondo cálido.
 */
export default function SecondMomentSection() {
  return (
    <section
      className="flex min-h-screen items-center justify-center px-6 py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--color-cream) 0%, var(--color-warm) 40%, var(--color-beige) 100%)",
      }}
    >
      <div className="max-w-xl text-center">
        <AnimatedSection delay={0}>
          <p
            className="font-serif text-sm uppercase tracking-[0.3em] mb-6"
            style={{ color: "var(--color-gold)" }}
          >
            El segundo encuentro
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p
            className="font-serif text-2xl md:text-3xl font-light leading-relaxed"
            style={{ color: "var(--color-dark)" }}
          >
            Esta vez no fue casualidad. Esta vez, algo dentro de los dos supo
            que era ahora o nunca.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p
            className="mt-8 text-base md:text-lg font-light leading-relaxed"
            style={{ color: "var(--color-brown)" }}
          >
            El mundo seguía girando igual que siempre, pero nosotros ya no
            éramos los mismos. Algo había cambiado —quizás todo— y en ese
            instante lo supimos.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <p
            className="mt-10 font-serif text-xl md:text-2xl italic font-semibold"
            style={{ color: "var(--color-gold)" }}
          >
            "Y ahí fue cuando decidí que no iba a dejarte ir."
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <div
            className="mx-auto mt-10 h-px w-16"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
