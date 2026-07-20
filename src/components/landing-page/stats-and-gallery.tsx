"use client";

import React from "react";
import Link from "next/link";
import { VideoComponent } from "@/components/video-component";
import "./stats-and-gallery.css";

type GalleryItem =
  | { type: "image"; src: string; alt: string; aspect: string }
  | { type: "video"; link: string; videoType?: "youtube" | "mp4" };

const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: "/images/image-two.jpg",
    alt: "Wedding couple",
    aspect: "aspect-[3/4]",
  },
  {
    type: "video",
    link: "https://pub-53461864fd004d57ae83c51c9705e60e.r2.dev/Bayo%20%26%20Groomsmen.mp4",
    videoType: "mp4",
  },
  {
    type: "video",
    link: "https://pub-53461864fd004d57ae83c51c9705e60e.r2.dev/Alhaja%20Soremekun%20Funeral%20decoration.mp4",
  },
  {
    type: "image",
    src: "/images/image-one.jpg",
    alt: "Event catering",
    aspect: "aspect-square",
  },
  {
    type: "video",
    link: "https://pub-53461864fd004d57ae83c51c9705e60e.r2.dev/Lateefah%20%26%20Gideon%20afterparty.mp4",
  },
  { type: "video", link: "https://www.youtube.com/embed/L6p9nGrLbOA" },
  {
    type: "image",
    src: "/images/image-three.jpg",
    alt: "Celebration",
    aspect: "aspect-[4/5]",
  },
  { type: "video", link: "https://www.youtube.com/embed/xZfIvhlLYyY" },
  { type: "video", link: "https://www.youtube.com/embed/Xbcb2-vaSQo" },
  { type: "video", link: "https://www.youtube.com/embed/r5pGiuuhZdY" },
  {
    type: "image",
    src: "/images/image-four.jpg",
    alt: "Birthday party",
    aspect: "aspect-square",
  },
  { type: "video", link: "https://www.youtube.com/embed/OCYOto3RzXM" },
  { type: "video", link: "https://www.youtube.com/embed/1OHusrswQZg" },
  {
    type: "image",
    src: "/images/image-five.jpg",
    alt: "Traditional attire",
    aspect: "aspect-[3/4]",
  },
  { type: "video", link: "https://www.youtube.com/embed/hUPo9ddBteo" },
  { type: "video", link: "https://www.youtube.com/embed/8de8vwUM19o" },
];

const filters = ["All", "Images", "Short clips"];

const StatsAndGallery = () => {
  const [filter, setFilter] = React.useState("All");

  // Filter items based on selected pill, then split into columns
  const filtered = galleryItems.filter((item) => {
    if (filter === "Images") return item.type === "image";
    if (filter === "Short clips") return item.type === "video";
    return true; // "All"
  });

  const cols = 3;
  const columns = Array.from({ length: cols }, (_, i) =>
    filtered.filter((_, idx) => idx % cols === i),
  );

  return (
    <>
      <section className="bg-primary text-primary-foreground font-cormorant">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/20 md:grid-cols-4">
          {[
            { n: "30+", l: "Events Planned" },
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
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Gallery
            </span>
            <h2
              className="mt-3 text-4xl md:text-5xl font-cormorant"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Moments We&rsquo;ve Made
              <br />
              Unforgettable
            </h2>
            <p
              className="mx-auto mt-4 max-w-xl text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A glimpse into the celebrations we&rsquo;ve had the honour of
              bringing to life across Nigeria.
            </p>
          </div>

          {/* Filter pills */}
          <div className="mt-8 flex justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-1.5 text-xs font-medium transition ${filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry flex columns */}
          <div className="masonry-grid mt-12">
            {columns.map((col, ci) => (
              <div key={ci} className="masonry-column">
                {col.map((item, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={ci * 100 + i * 50}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className={`masonry-item w-full rounded-lg object-cover ${item.aspect}`}
                      />
                    ) : (
                      <div className="masonry-item w-full rounded-lg overflow-hidden aspect-video">
                        <VideoComponent
                          link={item.link}
                          type={item.videoType}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center" data-aos="fade-up">
            <p className="text-sm text-muted-foreground">
              Ready to add your event to our gallery?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Start Planning Your Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndGallery;
