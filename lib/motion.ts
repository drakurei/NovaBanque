import type { Variants, Transition } from "motion/react";

export const easeEditorial: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeEditorial },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: easeEditorial } },
};

export const stagger = (delay = 0.12): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

export const viewportOnce = { once: true, margin: "-80px" } as const;
