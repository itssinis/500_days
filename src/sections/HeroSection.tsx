import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "../components/AnimatedCounter";
import ScrollIndicator from "../components/ScrollIndicator";

/**
 * Hero Section — pantalla completa con título, subtítulo,
 * contador animado de 0→500 y flecha de scroll.
 */
export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      style={{
        background:
          "linear-gradient(135deg, var(--color-cream) 0%, var(--color-beige) 50%, var(--color-warm) 100%)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 12s ease infinite",
      }}
    >
      {/* Contador animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-4 flex items-baseline gap-2"
        style={{ color: "var(--color-gold)" }}
      >
        <AnimatedCounter target={500} duration={3.5} start={mounted && inView} />
      </motion.div>

      {/* Título */}
      <motion.h1
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-center"
        style={{ color: "var(--color-dark)" }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        días contigo
      </motion.h1>

      <br />

      {/* Subtítulo */}
      <motion.p
        className="mt-6 max-w-lg text-center text-lg md:text-xl font-light italic"
        style={{ color: "var(--color-brown)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        y todavía siento que esto apenas empieza
      </motion.p>

      {/* Línea decorativa */}
      <motion.div
        className="mt-8 h-px w-24"
        style={{ backgroundColor: "var(--color-gold)" }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
      />

      <ScrollIndicator />
    </section>
  );
}
