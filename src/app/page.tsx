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
    blurb:
      "Bespoke events designed to bring your vision to life with elegance, precision, and unforgettable moments.",
    img: "/images/wedding.jpg",
  },
  {
    title: "Birthdays",
    blurb:
      "From intimate dinners to milestone celebrations, we create unforgettable birthday experiences tailored to your vision.",
    img: "/images/birthdays.jpg",
  },
  {
    title: "Bridal Showers",
    blurb:
      "Elegant bridal showers thoughtfully planned to celebrate love, friendship, and the journey to forever.",
    img: "/images/bridal-shower.jpg",
  },
  {
    title: "Funerals",
    blurb:
      "Dignified farewell ceremonies, thoughtfully planned and seamlessly executed to honour every life with elegance and respect.",
    img: "/images/fun-two.jpg",
  },
  {
    title: "Corporate Events",
    blurb:
      "Seamlessly executed corporate events that inspire, connect, and elevate your brand.",
    img: "/images/corperate-events.jpg",
  },
  {
    title: "Social Gatherings",
    blurb:
      "From anniversaries to private celebrations, we create sophisticated experiences tailored to every special occasion.",
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
              <span className="text-3xl lg:text-5xl"> Every Celebration</span>,
              <br />
              <span className="text-3xl lg:text-5xl"> Perfectly Planned</span>,
              <span className="relative inline-block text-3xl lg:text-5xl">
                Beautifully Remembered
                <span className="absolute inset-x-0 -bottom-1 h-[3px] bg-primary" />
              </span>
              .
            </>
          }
          description="From intimate gatherings to grand celebrations, we curate seamless, luxury experiences that leave lasting impressions"
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
                Every Celebration, Expertly Executed
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Every celebration is unique, and so is our approach. From
                intimate gatherings to grand occasions, we deliver bespoke
                planning, seamless coordination, and exceptional execution
                tailored to every event.
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
                      className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-primary transition group-hover:gap-2"
                    >
                      Discover more{" "}
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
