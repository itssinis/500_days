import AnimatedSection from "../components/AnimatedSection";

/**
 * First Moment — el primer encuentro online y en persona.
 * Layout: texto → imagen 1 → texto → imagen 2 → cierre
 */
export default function FirstMomentSection() {
  return (
    <section className="flex flex-col items-center justify-start px-6 py-28">
      <div className="w-full max-w-xl text-center">

        {/* ── Etiqueta ──────────────────────────────────────────────────── */}
        <AnimatedSection delay={0}>
          <p
            className="font-serif text-base font-bold uppercase tracking-[0.35em] mb-6"
            style={{ color: "var(--color-gold)" }}
          >
            Nuestro primer clic
          </p>
        </AnimatedSection>

        {/* ── Bloque de texto 1 ─────────────────────────────────────────── */}
        <AnimatedSection delay={0.4}>
          <p
            className="mt-8 text-base md:text-lg font-light leading-relaxed text-justify"
            style={{ color: "var(--color-brown)" }}
          >
            No recuerdo exactamente la primera vez que te vi en una pantalla. Sí recuerdo, en cambio, la primera vez que te escribí. Fue cuando nos conocimos como
            grupo de JE 2022. Había publicado un estado, y minutos antes había agregado a varios
            de los JE en mi celular, así que cuando lo subí, lo viste, me respondiste con un
            sticker y yo te respondí con otro. Recuerdo ver tu foto de perfil de ese momento y
            pensar que te veías linda.
          </p>
        </AnimatedSection>

        <br />
        {/* ── Imagen 1 ──────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.55}>
          <div className="mt-20 mb-20 flex justify-center">
            <div
              className="w-64 h-72 md:w-72 md:h-100 rounded-2xl overflow-hidden border-2 shadow-md"
              style={{ borderColor: "var(--color-gold)" }}
            >
              <img
                src="/images/first_conversation.jpeg"
                alt="Primer momento"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
        <br />

        {/* ── Separador fino ────────────────────────────────────────────── */}
        <AnimatedSection delay={0.65}>
          <div
            className="mx-auto mt-12 mb-12 h-px w-10 opacity-50"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
        </AnimatedSection>
        <br />
        {/* ── Bloque de texto 2 ─────────────────────────────────────────── */}
        <AnimatedSection delay={0.7}>
          <p
            className="mt-16 text-base md:text-lg font-light leading-relaxed text-justify"
            style={{ color: "var(--color-brown)" }}
          >
            Nuestro primer clic fue el día en que nos vimos en persona. Mi vuelo había llegado
            temprano. Mientras me encontraba en la parte donde desayunamos los siguientes días, te vi. Bajabas de un carro y a tu lado estaba tu mamá, recuerdo seguirte con la mirada hasta que entraste y hablaste con Sebas. Sabía que te había visto antes, el problema es que soy muy mala para los nombres y no recordaba cuál era el tuyo.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.85}>
          <p
            className="mt-6 text-base md:text-lg font-light leading-relaxed italic text-justify"
            style={{ color: "var(--color-brown)" }}
          >
            Luego preguntaste por la llave de la 308. Mi cuarto. Me dio miedo, no por cómo lo
            preguntaste, sino porque probablemente no fue mi mejor impresión cuando solo te la
            pasé sin decir nada. Tenía miedo de que no nos lleváramos bien.
          </p>
        </AnimatedSection>

        <br />
        {/* ── Imagen 2 ──────────────────────────────────────────────────── */}
        <AnimatedSection delay={1.0}>
          <div className="mt-12 flex justify-center">
            <div
              className="w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border-2 shadow-md"
              style={{ borderColor: "var(--color-gold)" }}
            >
              <img
                src="/images/first_photo.jpeg"
                alt="Primer momento en persona"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
        <br />

        {/* ── Cierre ────────────────────────────────────────────────────── */}
        <AnimatedSection delay={1.15}>
          <div
            className="mx-auto mt-14 h-px w-12"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
        </AnimatedSection>

      </div>
    </section>
  );
}
