import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";

/**
 * Letter Section — 500 días, declaración de amor y firma.
 * Diseño: texto flotante sobre fondo cálido, sin caja, con ornamentos tipográficos.
 */
export default function LetterSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-10 md:px-8 py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--color-warm) 0%, var(--color-cream) 50%, var(--color-beige) 100%)",
      }}
    >
      {/* Ornamento de fondo — comilla tipográfica decorativa */}
      <motion.div
        className="absolute top-16 left-1/2 -translate-x-1/2 font-serif select-none pointer-events-none"
        style={{ fontSize: "18rem", lineHeight: 1, color: "var(--color-gold)", opacity: 0.06 }}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        ❝
      </motion.div>

      <div className="relative z-10 w-full max-w-lg">

        {/* ── Etiqueta ──────────────────────────────────────────────────── */}
        <AnimatedSection delay={0}>
          <p
            className="font-serif text-base font-bold uppercase tracking-[0.35em] mb-14 text-center"
            style={{ color: "var(--color-gold)" }}
          >
            Amor de mi vida,
          </p>
        </AnimatedSection>

        {/* ── Párrafo 1 ─────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.2}>
          <p
            className="text-base md:text-lg font-light leading-relaxed text-justify"
            style={{ color: "var(--color-brown)" }}
          >
            Han pasado 500 días desde ese sí de ambas el 9 de diciembre de 2024. Hemos pasado
            muchos más desde la primera vez que nos vimos en persona, y aún más desde que supimos
            de la existencia de la otra a través de una cámara.
          </p>
        </AnimatedSection>

        {/* ── Separador visual ──────────────────────────────────────────── */}
        <AnimatedSection delay={0.35}>
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px opacity-30" style={{ backgroundColor: "var(--color-gold)" }} />
            <span className="font-serif text-lg opacity-40" style={{ color: "var(--color-gold)" }}>✦</span>
            <div className="flex-1 h-px opacity-30" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
        </AnimatedSection>

        {/* ── Párrafo 2 ─────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.45}>
          <p
            className="text-base md:text-lg font-light leading-relaxed text-justify"
            style={{ color: "var(--color-brown)" }}
          >
            Han sido 500 días maravillosos, días donde aún sigo sin creerme que somos nosotras.
            Que quiero que estés en mi presente y en mi futuro. Que pueda verte todos los días de
            mi vida. Que quiero poder celebrar junto a ti y estar cuando me necesites.
          </p>
        </AnimatedSection>

        {/* ── Párrafo 3 — clímax emocional ─────────────────────────────── */}
        <AnimatedSection delay={0.6}>
          <p
            className="text-base md:text-lg font-light leading-relaxed text-justify"
            style={{ color: "var(--color-brown)" }}
          >
            Te amo, con todo mi corazón, con toda mi alma, con todo lo que soy.
          </p>
        </AnimatedSection>
      <br />
        {/* ── Línea dorada central ──────────────────────────────────────── */}
        <AnimatedSection delay={0.75}>
          <div className="my-10 flex justify-center">
            <div className="h-px w-24" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
        </AnimatedSection>
      <br />
        {/* ── Firma ─────────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.9}>
          <div className="text-right space-y-2">
            <p
              className="font-serif text-lg md:text-xl italic"
              style={{ color: "var(--color-dark)" }}
            >
              Tu novia, tu mujer, tu futura esposa,
            </p>
            <p
              className="font-serif text-lg md:text-xl italic"
              style={{ color: "var(--color-dark)" }}
            >
              la dueña de tus sueños (espero), tu socio, tu amiga, tu bro, tu sarampión.
            </p>
            <p
              className="font-serif text-3xl md:text-4xl italic mt-6"
              style={{ color: "var(--color-gold)" }}
            >
              Tu Sara.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
