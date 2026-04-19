import AnimatedSection from "../components/AnimatedSection";

/**
 * Closing Section — mensaje final minimalista.
 */
export default function ClosingSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <AnimatedSection className="max-w-2xl text-center">
        <p
          className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-snug"
          style={{ color: "var(--color-dark)" }}
        >
          Si el primero fue casualidad…
          <br />
          el segundo fue una decisión.
        </p>
        <p
          className="mt-8 font-serif text-xl md:text-2xl italic"
          style={{ color: "var(--color-gold)" }}
        >
          Y yo te sigo eligiendo.
        </p>
        <div
          className="mx-auto mt-10 h-px w-20"
          style={{ backgroundColor: "var(--color-gold)" }}
        />
      </AnimatedSection>
    </section>
  );
}
