import AnimatedSection from "../components/AnimatedSection";

/**
 * Letter Section — 500 días, declaración de amor y firma.
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
              Han pasado 500 días desde ese sí de ambas el 9 de diciembre de 2024. Hemos pasado
              muchos más desde la primera vez que nos vimos en persona, y aún más desde que supimos
              de la existencia de la otra a través de una cámara.
            </p>
            <p>
              Han sido 500 días maravillosos, días donde aún sigo sin creerme que somos nosotras.
              Que quiero que estés en mi presente y en mi futuro. Que pueda verte todos los días de
              mi vida. Que quiero poder celebrar junto a ti y estar cuando me necesites.
            </p>
            <p>
              Te amo, con todo mi corazón, con toda mi alma, con todo lo que soy.
            </p>
          </div>

          {/* Firma */}
          <div className="mt-10 text-right">
            <p
              className="font-serif text-sm italic"
              style={{ color: "var(--color-brown)" }}
            >
              Tu novia, tu mujer, tu futura esposa,
            </p>
            <p
              className="font-serif text-sm italic mt-1"
              style={{ color: "var(--color-brown)" }}
            >
              la dueña de tus sueños (espero), tu socio, tu amiga, tu bro, tu sarampión.
            </p>
            <p
              className="font-serif text-xl italic mt-3"
              style={{ color: "var(--color-gold)" }}
            >
              Tu Sara.
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
