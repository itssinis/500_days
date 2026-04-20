import AnimatedSection from "../components/AnimatedSection";

/**
 * First Moment — el primer encuentro online y en persona.
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
            El primer clic
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p
            className="font-serif text-2xl md:text-3xl font-light leading-relaxed"
            style={{ color: "var(--color-dark)" }}
          >
            No recuerdo exactamente la primera vez que te vi en una pantalla.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p
            className="mt-8 text-base md:text-lg font-light leading-relaxed"
            style={{ color: "var(--color-brown)" }}
          >
            Sí recuerdo, en cambio, la primera vez que te escribí. Habías publicado un estado,
            te respondí con un sticker y tú me respondiste con otro. Recuerdo ver tu foto de
            perfil de ese momento y pensar que te veías linda.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <p
            className="mt-6 text-base md:text-lg font-light leading-relaxed"
            style={{ color: "var(--color-brown)" }}
          >
            Nuestro primer clic fue el día en que nos vimos en persona. Mi vuelo había llegado
            temprano. Mientras estaba en el área del desayuno, te vi bajar de un carro con tu mamá
            —te seguí con la mirada hasta que entraste y hablaste con Sebas. Sabía que te había
            visto antes, el problema es que soy muy mala para los nombres.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <p
            className="mt-6 text-base md:text-lg font-light leading-relaxed italic"
            style={{ color: "var(--color-dark)" }}
          >
            Luego preguntaste por la llave de la 308. Mi cuarto. Me dio miedo —no por cómo lo
            preguntaste, sino porque probablemente no fue mi mejor impresión cuando solo te la
            pasé sin decir nada. Tenía miedo de que no nos lleváramos bien.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={1.0}>
          <div
            className="mx-auto mt-10 h-px w-12"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
