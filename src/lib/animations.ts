import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/** Sibling delays spread over 0 → 0.5s (Tuesday Co staggers a row of three at 0 / 0.25 / 0.5s). */
export const stagger = (index: number, count: number) => (count > 1 ? (index / (count - 1)) * 0.5 : 0);
