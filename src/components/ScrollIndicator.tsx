import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

/**
 * Flecha animada que indica al usuario que puede hacer scroll.
 */
export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <KeyboardArrowDownIcon
        sx={{ fontSize: 40, color: "var(--color-gold)" }}
      />
    </motion.div>
  );
}
