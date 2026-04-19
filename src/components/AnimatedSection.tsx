import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: ReactNode;
  /** Clase CSS adicional para el wrapper */
  className?: string;
  /** Retraso de la animación en segundos */
  delay?: number;
  /** Dirección desde la que entra el contenido */
  direction?: "up" | "down" | "left" | "right" | "none";
}

/**
 * Componente reutilizable que envuelve cualquier sección
 * con animación de aparición al hacer scroll (Intersection Observer + Framer Motion).
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const offsetMap = {
    up: { x: 0, y: 60 },
    down: { x: 0, y: -60 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = offsetMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
