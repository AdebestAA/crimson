"use client";

import { motion } from "framer-motion";
import Hero from "@/components/layout/Hero";
import StatsAndGallery from "@/components/landing-page/stats-and-gallery";
import TestimonialsAndFooter from "@/components/landing-page/testimonials-and-footer";

const categories = [
  {
    title: "Weddings",
    blurb: "Timeless ceremonies crafted with love and precision.",
    img: "/images/wedding.jpg",
  },
  {
    title: "Birthdays",
    blurb: "Memorable celebrations that turn any moment into magic.",
    img: "/images/birthdays.jpg",
  },
  {
    title: "Baby Showers",
    blurb: "Welcoming new life with warmth and elegance.",
    img: "/images/baby-shower.jpg",
  },
  {
    title: "Funerals",
    blurb: "Dignified farewells that honor a life well-lived.",
    img: "/images/funerals.jpg",
  },
  {
    title: "Corporate Events",
    blurb: "Professional gatherings that leave a lasting impression.",
    img: "/images/corperate-events.jpg",
  },
  {
    title: "Social Gatherings",
    blurb: "Warm get-togethers full of joy and connection.",
    img: "/images/social-gathering.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero
        title={
          <>
            Every Moment Deserves
            <br />
            to be{" "}
            <span className="relative inline-block">
              Unforgettable
              <span className="absolute inset-x-0 -bottom-1 h-[3px] bg-primary" />
            </span>
            .
          </>
        }
        description="From intimate gatherings to grand celebrations — we craft experiences that live in hearts forever."
        tagline="NIGERIA'S PREMIER EVENT PLANNERS"
      />

      {/* EVENTS */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Why We Exist
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-cormorant">
              Events We Bring to Life
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Every event type deserves its own magic. We specialize in six
              categories — each handled with the same obsessive attention to
              detail.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {categories.map((c) => (
              <motion.article
                key={c.title}
                className="group cursor-pointer overflow-hidden rounded-md border border-transparent bg-card transition-colors hover:border-primary/20"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px -20px rgba(153,0,0,0.2)" }}
              >
                <div className="aspect-[4/2.5] overflow-hidden rounded-t-md">
                  <motion.img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="px-4 pb-2">
                  <h3 className="mt-5 font-serif text-2xl font-cormorant">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground h-9">
                    {c.blurb}
                  </p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition group-hover:gap-2"
                  >
                    Learn more{" "}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                      aria-hidden
                    >
                      →
                    </motion.span>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Stats and Gallery */}

      <StatsAndGallery />
      <TestimonialsAndFooter />
    </div>
  );
}
