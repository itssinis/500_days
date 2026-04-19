import AnimatedSection from "../components/AnimatedSection";

/**
 * Time Gap — narrativa sobre el tiempo que pasó entre los dos encuentros.
 * Cada párrafo aparece progresivamente al hacer scroll.
 */
const paragraphs = [
  "Pasaron semanas. Meses, incluso. La vida siguió con su rutina, con sus mañanas grises y sus noches de costumbre.",
  "Pero había algo que no encajaba del todo. Como una pieza que sabes que falta, aunque no recuerdes de qué rompecabezas.",
  "A veces, en medio de una conversación cualquiera, aparecía esa sensación. Un recuerdo sin contexto. Un eco de algo que todavía no había pasado.",
  "Y entonces, sin buscarlo —o quizás buscándolo sin saberlo— el destino volvió a cruzar los caminos.",
];

export default function TimeGapSection() {
  return (
    <section
      className="flex min-h-screen items-center justify-center px-6 py-32"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-lg space-y-10 text-center">
        <AnimatedSection delay={0}>
          <p
            className="font-serif text-sm uppercase tracking-[0.3em] mb-10"
            style={{ color: "var(--color-gold)" }}
          >
            El tiempo entre uno y otro
          </p>
        </AnimatedSection>

        {paragraphs.map((text, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <p
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: "var(--color-brown)" }}
            >
              {text}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
