"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/layout/Nav";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80",
];

type HeroProps = {
  title: ReactNode;
  description?: string;
  tagline?: string;
  activeNavIndex?: number;
  showCta?: boolean;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
};

const heroItem = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Hero({
  title,
  description,
  tagline,
  activeNavIndex = 0,
  showCta = true,
  ctaPrimaryLabel = "Start Planning",
  ctaPrimaryHref = "/contact",
  ctaSecondaryLabel = "See Our Work",
  ctaSecondaryHref = "#gallery",
}: HeroProps) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setImgIndex((p) => (p + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[480px] w-full overflow-hidden md:min-h-[640px]">
      {/* Background — instant swap, no flash */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${HERO_IMAGES[imgIndex]}')`,
        }}
      />

      <div className="relative z-10">
        <Nav activeIndex={activeNavIndex} />

        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center px-4 pt-12 pb-16 text-center text-white md:px-6 md:pt-16 md:pb-24"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {tagline && (
            <motion.span
              className="mb-4 inline-block rounded-full border border-white/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur-sm md:mb-6 md:px-4 md:text-xs"
              variants={heroItem}
              custom={0}
            >
              {tagline}
            </motion.span>
          )}

          <motion.h1
            className="font-serif text-3xl leading-tight md:text-5xl lg:text-7xl"
            variants={heroItem}
            custom={1}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              className="mt-4 max-w-xl text-sm text-white/80 md:mt-6 md:text-lg"
              variants={heroItem}
              custom={2}
            >
              {description}
            </motion.p>
          )}

          {showCta && (
            <motion.div
              className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4 md:mt-8"
              variants={heroItem}
              custom={3}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={ctaPrimaryHref}
                  className="block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary-light"
                >
                  {ctaPrimaryLabel}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={ctaSecondaryHref}
                  className="block rounded-full border border-white/50 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  {ctaSecondaryLabel}
                </Link>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === imgIndex ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
