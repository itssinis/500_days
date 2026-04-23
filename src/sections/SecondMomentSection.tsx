import AnimatedSection from "../components/AnimatedSection";

/**
 * Second Moment — el segundo clic: 14 de octubre y 9 de diciembre de 2024.
 * Layout: etiqueta → título → texto → imagen 1 → separador → texto → imagen 2 → cita → cierre
 */
export default function SecondMomentSection() {
  return (
    <section
      className="flex flex-col items-center justify-start px-6 py-28"
      style={{
        background:
          "linear-gradient(180deg, var(--color-cream) 0%, var(--color-warm) 40%, var(--color-beige) 100%)",
      }}
    >
      <div className="w-full max-w-xl text-center">

        {/* ── Etiqueta ──────────────────────────────────────────────────── */}
        <AnimatedSection delay={0}>
          <p
            className="font-serif text-base font-bold uppercase tracking-[0.35em] mb-6"
            style={{ color: "var(--color-gold)" }}
          >
            El segundo clic
          </p>
        </AnimatedSection>

        {/* ── Título ────────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.2}>
          <p
            className="font-serif text-2xl md:text-3xl font-light leading-relaxed"
            style={{ color: "var(--color-dark)" }}
          >
            Un 14 de octubre de 2024 fue nuestro segundo bello clic.
          </p>
        </AnimatedSection>

        {/* ── Texto 1 — el 14 de octubre ────────────────────────────────── */}
        <AnimatedSection delay={0.4}>
          <p
            className="mt-8 text-base md:text-lg font-light leading-relaxed text-justify"
            style={{ color: "var(--color-brown)" }}
          >
            Una noche donde no sabíamos si era broma o no, pero comenzó nuestra historia
            —una conexión que no era de amistad, y que nos llevó a amarnos como lo hacemos hoy en día.
          </p>
        </AnimatedSection>
        <br />
        {/* ── Imagen 1 — 14 de octubre ──────────────────────────────────── */}
        <AnimatedSection delay={0.55}>
          <div className="mt-20 mb-20 flex justify-center">
            <div
              className="w-72 h-120 md:w-72 md:h-120 rounded-2xl overflow-hidden border-2 shadow-md"
              style={{ borderColor: "var(--color-gold)" }}
            >
              <img
                src="/images/girlfriends.jpeg"
                alt="14 de octubre de 2024"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
        <br />
        {/* ── Separador ─────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.65}>
          <div
            className="mx-auto mb-12 h-px w-10 opacity-50"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
        </AnimatedSection>

        {/* ── Texto 2 — el 9 de diciembre ───────────────────────────────── */}
        <AnimatedSection delay={0.7}>
          <p
            className="mt-16 text-base md:text-lg font-light leading-relaxed text-justify"
            style={{ color: "var(--color-brown)" }}
          >
            Una historia que formalizamos el 9 de diciembre de ese mismo año, a las 3:42 a.m.,
            cuando me realizaste esa pregunta y yo te la devolví.
          </p>
        </AnimatedSection>
        <br />
        {/* ── Imagen 2 — 9 de diciembre ─────────────────────────────────── */}
        <AnimatedSection delay={0.85}>
          <div className="mt-20 mb-20 flex justify-center">
            <div
              className="w-160 h-40 md:w-160 md:h-40 rounded-2xl overflow-hidden border-2 shadow-md"
              style={{ borderColor: "var(--color-gold)" }}
            >
              <img
                src="/images/second_section.jpeg"
                alt="9 de diciembre de 2024"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* ── Cita final ────────────────────────────────────────────────── 
        <AnimatedSection delay={1.0}>
          <p
            className="mt-4 font-serif text-xl md:text-2xl italic font-semibold"
            style={{ color: "var(--color-gold)" }}
          >
            "Y ahí fue cuando decidí que no iba a dejarte ir."
          </p>
        </AnimatedSection>*/}
<br />

        {/* ── Cierre ────────────────────────────────────────────────────── */}
        <AnimatedSection delay={1.15}>
          <div
            className="mx-auto mt-20 h-px w-16"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
        </AnimatedSection>
          <br />
          <br />
      </div>
    </section>
  );
}
