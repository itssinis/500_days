import AnimatedSection from "../components/AnimatedSection";

/**
 * Letter Section — carta digital con tipografía serif elegante.
 */
export default function LetterSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-32">
      <AnimatedSection className="w-full max-w-md" delay={0.1}>
        <div
          className="rounded-sm p-10 md:p-14 shadow-sm"
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(4px)",
            borderTop: "3px solid var(--color-gold)",
          }}
        >
          {/* Encabezado */}
          <p
            className="font-serif text-sm uppercase tracking-[0.25em] mb-8"
            style={{ color: "var(--color-gold)" }}
          >
            Una carta para ti
          </p>

          {/* Cuerpo de la carta */}
          <div
            className="font-serif text-base md:text-lg font-light leading-relaxed space-y-6"
            style={{ color: "var(--color-dark)" }}
          >
            <p>
              No sé exactamente cuándo pasó. Tal vez fue la primera vez
              que me miraste sin decir nada y yo entendí todo. O tal vez fue
              mucho antes, cuando ni siquiera sabía que te estaba buscando.
            </p>
            <p>
              Lo que sí sé es que desde ese día, cada mañana tiene un sentido
              distinto. No perfecto —nunca lo prometí— pero sí honesto.
              Real. Nuestro.
            </p>
            <p>
              Han pasado 500 días. Y si me preguntaras cuántos más quiero,
              te diría que me quedo corto con cualquier número.
            </p>
            <p className="italic" style={{ color: "var(--color-brown)" }}>
              Gracias por quedarte. Gracias por elegirme. Gracias por ser ese
              segundo momento que lo cambió todo.
            </p>
          </div>

          {/* Firma */}
          <div className="mt-10 text-right">
            <p
              className="font-serif text-lg italic"
              style={{ color: "var(--color-gold)" }}
            >
              Con todo lo que soy,
            </p>
            <div
              className="mt-4 ml-auto h-px w-20"
              style={{ backgroundColor: "var(--color-gold)" }}
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
