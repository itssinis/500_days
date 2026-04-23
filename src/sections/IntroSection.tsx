import AnimatedSection from "../components/AnimatedSection";

/**
 * Intro Transition — saludo y presentación de la historia.
 */
export default function IntroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-8 md:px-6 py-24">
      <AnimatedSection className="max-w-2xl text-center">
        <p
          className="font-serif text-base font-bold uppercase tracking-[0.35em] mb-6"
          style={{ color: "var(--color-gold)" }}
        >
          Mi amor
        </p>
        <p
          className="font-serif text-2xl md:text-3xl font-light leading-relaxed italic text-center"
          style={{ color: "var(--color-dark)" }}
        >
          Me pediste que te escribiera algo memorable, así que aquí está, mi primer recuerdo de la primera vez que te vi.
        </p>
        <p
          className="mt-6 text-base md:text-lg font-light leading-relaxed text-justify"
          style={{ color: "var(--color-brown)" }}
        >
          Esta es la historia de nuestros bellos clics; porque no solo fue uno, fueron dos.
        </p>
        <div
          className="mx-auto mt-8 h-px w-16"
          style={{ backgroundColor: "var(--color-gold)" }}
        />
      <br />
      {/* Espacio para imagen*/} 
        <div className="mt-10 flex justify-center">
          <div
            className="w-97 h-80 md:w-140 md:h-80 rounded-2xl overflow-hidden border-2"
            style={{ borderColor: "var(--color-gold)" }}
          >
            <img
              src="/images/intro_section.jpeg"
              alt="Nuestra historia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
