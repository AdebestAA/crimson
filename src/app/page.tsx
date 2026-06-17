"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/layout/Hero";
import StatsAndGallery from "@/components/landing-page/stats-and-gallery";
import TestimonialsAndFooter from "@/components/landing-page/testimonials-and-footer";
import { JustAMinModal } from "@/components/modals/just-a-min-modal";

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
    img: "/images/baby-shower-two.jpeg",
  },
  {
    title: "Funerals",
    blurb: "Dignified farewells that honor a life well-lived.",
    img: "/images/funeral-two.avif",
  },
  {
    title: "Corporate Events",
    blurb: "Professional gatherings that leave a lasting impression.",
    img: "/images/corperate-events.jpg",
  },
  {
    title: "Social Gatherings",
    blurb: "Warm get-togethers full of joy and connection.",
    img: "/images/social-gathering.avif",
  },
];

export default function Home() {
  return (
    <>
      <JustAMinModal />
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
            <div className="mb-14 text-center" data-aos="fade-up">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">
                Why We Exist
              </span>
              <h2
                className="mt-3 text-4xl md:text-5xl font-cormorant"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Events We Bring to Life
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Every event type deserves its own magic. We specialize in six
                categories — each handled with the same obsessive attention to
                detail.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((c, i) => (
                <motion.article
                  key={c.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="group cursor-pointer overflow-hidden rounded-md border border-transparent bg-card transition-colors hover:border-primary/20"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 50px -20px rgba(153,0,0,0.2)",
                  }}
                >
                  <div className="aspect-[4/2.5] overflow-hidden rounded-t-md">
                    <motion.img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className={` h-full w-full ${c.title === "Birthdays" ? "object-cover" : "object-cover"}`}
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
                    <Link
                      href="/services"
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
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* <VideoSection /> */}
        <StatsAndGallery />
        <TestimonialsAndFooter />
      </div>
    </>
  );
}

// function VideoSection() {
//   return (
//     <div className="aspect-video h-60 w-70 overflow-hidden rounded-lg">
//       <iframe
//         className="h-full w-full"
//         src="https://www.youtube.com/embed/7rxOOFvwU60"
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       />
//     </div>
//   );
// }
