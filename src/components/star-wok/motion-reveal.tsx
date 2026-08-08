"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeIn, fadeUp } from "@/lib/motion-variants";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "up";
  delay?: number;
};

export function MotionReveal({
  children,
  className,
  variant = "up",
  delay = 0,
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion();
  const selected = reduceMotion ? fadeIn : variant === "fade" ? fadeIn : fadeUp;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        variants={selected}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
        transition={{ delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
