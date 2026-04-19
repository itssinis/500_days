import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  /** Valor final del contador */
  target: number;
  /** Duración en segundos */
  duration?: number;
  /** Si ya debe iniciar la animación */
  start: boolean;
}

/**
 * Contador animado que va de 0 al valor objetivo.
 * Usa Framer Motion para interpolar suavemente el número.
 */
export default function AnimatedCounter({
  target,
  duration = 3,
  start,
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [start, count, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span className="tabular-nums font-serif text-7xl md:text-9xl font-light tracking-tight">
      {display}
    </motion.span>
  );
}
