import AnimatedSection from "../components/AnimatedSection";

/**
 * Second Moment — el segundo clic: 14 de octubre y 9 de diciembre de 2024.
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
            El segundo clic
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p
            className="font-serif text-2xl md:text-3xl font-light leading-relaxed"
            style={{ color: "var(--color-dark)" }}
          >
            Un 14 de octubre de 2024 fue nuestro segundo bello clic.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p
            className="mt-8 text-base md:text-lg font-light leading-relaxed"
            style={{ color: "var(--color-brown)" }}
          >
            Una noche donde no sabíamos si era broma o no, pero comenzó nuestra historia
            —una conexión que no era de amistad, y que nos llevó a amarnos como lo hacemos hoy en día.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <p
            className="mt-6 text-base md:text-lg font-light leading-relaxed"
            style={{ color: "var(--color-brown)" }}
          >
            Una historia que formalizamos el 9 de diciembre de ese mismo año, a las 3:42 a.m.,
            cuando me realizaste esa pregunta y yo te la devolví.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <p
            className="mt-10 font-serif text-xl md:text-2xl italic font-semibold"
            style={{ color: "var(--color-gold)" }}
          >
            "Y ahí fue cuando decidí que no iba a dejarte ir."
          </p>
        </AnimatedSection>

        <AnimatedSection delay={1.0}>
          <div
            className="mx-auto mt-10 h-px w-16"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
