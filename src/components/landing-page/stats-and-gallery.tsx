"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import "./stats-and-gallery.css";

const galleryItems = [
  {
    type: "image" as const,
    src: "/images/image-two.jpg",
    alt: "Wedding couple",
    aspect: "aspect-[3/4]",
  },
  {
    type: "placeholder" as const,
    aspect: "aspect-[4/5]",
    shade: "bg-muted",
  },
  {
    type: "image" as const,
    src: "/images/image-one.jpg",
    alt: "Event catering",
    aspect: "aspect-square",
  },
  {
    type: "placeholder" as const,
    aspect: "aspect-[3/4]",
    shade: "bg-muted/60",
  },
  {
    type: "placeholder" as const,
    aspect: "aspect-square",
    shade: "bg-muted/40",
  },
  {
    type: "image" as const,
    src: "/images/image-three.jpg",
    alt: "Celebration",
    aspect: "aspect-[4/5]",
  },
  {
    type: "image" as const,
    src: "/images/image-four.jpg",
    alt: "Birthday party",
    aspect: "aspect-square",
  },
  {
    type: "placeholder" as const,
    aspect: "aspect-[3/4]",
    shade: "bg-muted/20",
  },
  {
    type: "image" as const,
    src: "/images/image-five.jpg",
    alt: "Traditional attire",
    aspect: "aspect-[3/4]",
  },
  {
    type: "placeholder" as const,
    aspect: "aspect-[4/5]",
    shade: "bg-muted/50",
  },
];

function distribute<T>(items: T[], columns: number): T[][] {
  const cols: T[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => cols[i % columns].push(item));
  return cols;
}

const filters = ["All", "Images", "Short clips"] as const;
type Filter = (typeof filters)[number];

const StatsAndGallery = () => {
  const [columns, setColumns] = useState(3);
  const [filter, setFilter] = useState<Filter>("All");

  useEffect(() => {
    const update = () => setColumns(window.innerWidth >= 768 ? 3 : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cols = useMemo(() => distribute(galleryItems, columns), [columns]);

  return (
    <>
      <section className="bg-primary text-primary-foreground font-cormorant">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/20 md:grid-cols-4">
          {[
            { n: "500+", l: "Events Planned" },
            { n: "10+", l: "Cities Covered" },
            { n: "100%", l: "End-to-End Coordination" },
            { n: "On-Time", l: "Every Time" },
          ].map((s) => (
            <div key={s.l} className="px-6 py-8 text-center" data-aos="zoom-in">
              <div className="font-serif text-3xl md:text-4xl">{s.n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/75">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center" data-aos="fade-up">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-cormorant" data-aos="fade-up" data-aos-delay="100">Moments We&rsquo;ve Made<br />Unforgettable</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
              A glimpse into the celebrations we&rsquo;ve had the honour of bringing to life across Nigeria.
            </p>
          </div>

          {/* Filter pills */}
          <div className="mt-8 flex justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  if (f === "Short clips") {
                    alert("Video clips coming soon!");
                    return;
                  }
                  setFilter(f);
                }}
                className={`rounded-full px-5 py-1.5 text-xs font-medium transition ${filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry — JS-balanced columns */}
          <div className="masonry-grid mt-12">
            {cols.map((col, ci) => (
              <div key={ci} className="masonry-column">
                {col.map((item) =>
                  item.type === "image" ? (
                    <img
                      key={item.src}
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className={`masonry-item w-full rounded-lg object-cover ${item.aspect}`}
                    />
                  ) : (
                    <div
                      key={`ph-${item.aspect}-${item.shade}`}
                      className={`masonry-item w-full rounded-lg ${item.aspect} ${item.shade}`}
                    />
                  ),
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center" data-aos="fade-up">
            <p className="text-sm text-muted-foreground">
              Ready to add your event to our gallery?
            </p>
            <Link href="/contact" className="mt-4 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Start Planning Your Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndGallery;
