import AnimatedSection from "../components/AnimatedSection";

/**
 * Time Gap — el campamento y los años entre los dos encuentros.
 */
const paragraphs = [
  "Me alegra saber que no fue del todo incómodo. Creo que nuestra unión se dio más en el campamento, el segundo día.",
  "Cuando lloraste en mis piernas. Cuando no supe qué decirte, pero quería estar ahí para ti —en el frío, escuchándote hablar de un man nada que ver.",
  "Cuando te preguntaba cómo se encontraba tu mente. Cuando te empecé a llamar Little Juana. Cuando todo lo que quería era que te encontraras bien y ojalá no me vomitaras encima en un bus.",
  "Pasaron los meses y los años desde la última vez que nos vimos, en ese diciembre de 2022. Y de una forma u otra, el destino volvió a cruzar nuestros caminos.",
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
