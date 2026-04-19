import AnimatedSection from "../components/AnimatedSection";
import FavoriteIcon from "@mui/icons-material/Favorite";

/**
 * Epilogue — mensaje breve de cierre con ícono sutil.
 */
export default function EpilogueSection() {
  return (
    <section
      className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24"
      style={{
        background:
          "linear-gradient(180deg, var(--color-cream) 0%, var(--color-beige) 100%)",
      }}
    >
      <AnimatedSection className="text-center">
        <FavoriteIcon
          sx={{
            fontSize: 28,
            color: "var(--color-gold)",
            opacity: 0.6,
            mb: 3,
          }}
        />
        <p
          className="font-serif text-2xl md:text-3xl font-light italic"
          style={{ color: "var(--color-brown)" }}
        >
          Nos vemos en 2 meses.
        </p>
        <div className="mx-auto mt-6 h-px w-10" style={{ backgroundColor: "var(--color-gold)" }} />
        <p
          className="mt-8 text-xs uppercase tracking-[0.3em]"
          style={{ color: "var(--color-gold)", opacity: 0.5 }}
        >
          500 días contigo
        </p>
      </AnimatedSection>
    </section>
  );
}
