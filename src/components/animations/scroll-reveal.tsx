"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// ── Rich animation variants ──

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export const flipIn: Variants = {
  hidden: { opacity: 0, rotateX: 90, scale: 0.9 },
  visible: { opacity: 1, rotateX: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export const flipInLeft: Variants = {
  hidden: { opacity: 0, rotateY: -90, perspective: 1200 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const flipInRight: Variants = {
  hidden: { opacity: 0, rotateY: 90, perspective: 1200 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const rotateZoom: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] } },
};

export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 15 } },
};

const variantMap: Record<string, Variants> = {
  "fade-up": fadeUp,
  "slide-left": slideLeft,
  "slide-right": slideRight,
  "zoom-in": zoomIn,
  flip: flipIn,
  "flip-left": flipInLeft,
  "flip-right": flipInRight,
  "rotate-zoom": rotateZoom,
  bounce: bounceIn,
};

type Props = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantMap;
  delay?: number;
  once?: boolean;
  amount?: number;
};

export function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  once = true,
  amount = 0.2,
}: Props) {
  const v = variantMap[variant];

  return (
    <motion.div
      className={className}
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px", amount }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

// ── Stagger container ──
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ── Hover effects ──
export function HoverScale({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function HoverGlow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ boxShadow: "0 0 30px rgba(153,0,0,0.3)" }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
