"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "@/components/layout/Nav";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=75&fm=webp",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=75&fm=webp",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=75&fm=webp",
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

export default function Hero({
  title,
  description,
  tagline,
  activeNavIndex = 0,
  showCta = true,
  ctaPrimaryLabel = "Start Planning",
  ctaPrimaryHref = "/contact",
  ctaSecondaryLabel = "See Our Work",
  ctaSecondaryHref = "/services",
}: HeroProps) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setImgIndex((p) => (p + 1) % HERO_IMAGES.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-dvh w-full">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${HERO_IMAGES[imgIndex]}')`,
        }}
      />

      {/* Nav */}
      <div className="relative">
        <Nav activeIndex={activeNavIndex} />
      </div>

      {/* Hero content */}
      <div className="relative flex items-center justify-center" style={{ minHeight: "calc(100dvh - 80px)" }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-12 text-center text-white md:px-6 md:py-16">
          {tagline && (
            <span
              data-aos="fade-down"
              data-aos-delay="300"
              className="mb-4 inline-block rounded-full border border-white/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur-sm md:mb-6 md:px-4 md:text-xs"
            >
              {tagline}
            </span>
          )}

          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className="font-serif text-5xl leading-tight md:text-5xl lg:text-7xl"
          >
            {title}
          </h1>

          {description && (
            <p
              data-aos="fade-up"
              data-aos-delay="700"
              className="mt-4 max-w-xl text-lg text-white/80 md:mt-6 md:text-lg"
            >
              {description}
            </p>
          )}

          {showCta && (
            <div
              data-aos="fade-up"
              data-aos-delay="900"
              className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4 md:mt-8"
            >
              <Link
                href={ctaPrimaryHref}
                className="block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary-light"
              >
                {ctaPrimaryLabel}
              </Link>
              <Link
                href={ctaSecondaryHref}
                className="block rounded-full border border-white/50 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                {ctaSecondaryLabel}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === imgIndex ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
}
