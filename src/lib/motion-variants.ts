import type { Variants } from "framer-motion";

const gentleEase = [0.22, 1, 0.36, 1] as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: gentleEase } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: gentleEase } },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: gentleEase } },
};

export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: (delay = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, delay, ease: gentleEase },
  }),
};

export const carouselSlide: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.48, ease: gentleEase } },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
    transition: { duration: 0.32, ease: gentleEase },
  }),
};

export const mobilePanel: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.24, ease: gentleEase } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: gentleEase } },
};
