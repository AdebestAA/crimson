"use client";

import { motion } from "framer-motion";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

const services = [
  {
    tag: "Weddings",
    title: "Weddings Planning Done Right",
    copy: "Your wedding day is the most important day of your life — and we treat it that way. From traditional ceremonies to white weddings and receptions, we handle every detail so you can be present and rest.",
    bullets: [
      "Full venue scouting and decoration",
      "Traditional and white wedding coordination",
      "Catering management and menu curation",
      "Photography and videography coordination",
      "Bridal party logistics and scheduling",
      "Live entertainment and DJ management",
      "Guest management and RSVP tracking",
      "Day-of coordination and timeline management",
    ],
    cta: "Plan My Wedding",
    img: "/images/wedding-event-service-two.jpg",
    img2: "/images/wedding-event-service.jpg",
    reverse: false,
  },
  {
    tag: "Birthdays",
    title: "Birthdays Planning Done Right",
    copy: "Whether it's a child's first birthday, a sweet sixteen, or a landmark 50th — we create birthday celebrations that feel personal, joyful, and utterly unforgettable. From age reveals to live magic.",
    bullets: [
      "Theme conceptualization and design",
      "Venue selection and decoration",
      "Custom-tiered and dessert table coordination",
      "Entertainment and activity planning",
      "Invitation design and guest management",
      "Photography and photo-booth setup",
      "Catering and beverage management",
      "Surprise element planning",
    ],
    cta: "Plan My Birthday",
    img: "/images/birthday-one.jpg",
    img2: "/images/birthday-three.avif",
    reverse: true,
  },
  {
    tag: "BRIDAL SHOWERS",
    title: "Baby Showers Planning Done Right",
    copy: "Welcoming a new life into the world is one of the most beautiful moments a family can share. We create warm, intimate baby shower experiences that celebrate the mother and the miracle of new beginnings.",
    bullets: [
      "Soft, elegant theme design and styling",
      "Venue decoration with floral arrangements",
      "Custom dessert table and cake coordination",
      "Gender reveal planning (if desired)",
      "Games and activity facilitation",
      "Gift registry coordination",
      "Photography and memory book setup",
      "Catering and refreshment management",
    ],
    cta: "Plan My Baby Shower",
    img: "/images/bridal-shower-two.png",
    img2: "/images/bridal-shower.png",
    reverse: false,
  },
  {
    tag: "FUNERAL SERVICES",
    title: "A Dignified Farewell",
    copy: "Grief is sacred. When you've lost someone dear, the last thing you should worry about is logistics. We handle every arrangement with the utmost care, sensitivity, and respect - so your family can focus on remembering and healing.",
    bullets: [
      "Venue sourcing and dignified setup",
      "Order of service design and printing",
      "Floral arrangements and tribute dispalys",
      "Catering for post-service gatherings",
      "Transportation and logistics coordination",
      "Photography and memory preservation",
      "Guest management and seating",
      "Liaison with religious and cultural leaders",
    ],
    cta: "Speak With us Quitely",
    img: "/images/fun-one.avif",
    img2: "/images/fun-two.jpg",
    reverse: true,
  },
  {
    tag: "CORPORATE EVENTS",
    title: "Corporate Events Planning Done Right",
    copy: "Your brand deserves and event that reflects its excellence. From product launches and annual galas, to conferences and team retreats, we deliver corporate events that impress clients, inspire teams, and elevate your brand.",
    bullets: [
      "Event concept and brand alignment",
      "Venue sourcing and AV setup",
      "Speaker and MC coordination",
      "Branded decor and signage",
      "Catering and hospitality management",
      "Guest registration and badge management",
      "Photograohy and media coverage",
      "Post-event reporting and feedback",
    ],
    cta: "Plan My Corporate Event",
    img: "/images/coperate-one.jpg",
    img2: "/images/coperate-two.jpg",
    reverse: false,
  },
  {
    tag: "SOCIAL GATHERINGS",
    title: "Social Gatherings Planning Done Right",
    copy: "Life's best moments happen when people come together. Reunions, house warmings, cultural festivals, dinner parties - we bring the same premium touch to every social occasion, big or small.",
    bullets: [
      "Event theme and concept development",
      "Venue decoration and ambiance design",
      "Catering and bar management",
      "Entertainment and music curation",
      "Invitation and RSVP management",
      "Photography and social media content",
      "Activity and game planning",
      "Day-of coordination",
    ],
    cta: "Plan My Corporate Event",
    img: "/images/social-gathering.avif",
    img2: "/images/social-two.jpg",
    reverse: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero
        title={
          <>
            Our <span className="text-primary">Services</span>
          </>
        }
        description="From weddings to corporate galas — we bring every celebration to life with precision, creativity, and care."
        tagline="What We Offer"
        activeNavIndex={2}
        showCta={false}
      />

      <section className="bg-background py-24">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase font-medium text-primary">
            Why We Exist
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl font-cormorant">
            Events We Bring to Life
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every event type deserves its own magic. We specialize in six
            categories — each handled with the same obsessive attention to
            detail.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl space-y-20 px-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              className="grid items-center gap-10 rounded-2xl p-6 md:grid-cols-2 md:p-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {/* Images — flip in from alternating sides */}
              <motion.div
                className={s.reverse ? "md:order-2" : ""}
                variants={{
                  hidden: {
                    opacity: 0,
                    rotateY: s.reverse ? 90 : -90,
                    perspective: 1200,
                  },
                  visible: {
                    opacity: 1,
                    rotateY: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
              >
                <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
                  <motion.img
                    src={s.img}
                    alt={s.tag}
                    loading="lazy"
                    className="absolute left-0 top-0 h-[88%] w-[48%] -rotate-[6deg] rounded-2xl object-cover shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <motion.img
                    src={s.img2}
                    alt={s.tag}
                    loading="lazy"
                    className="absolute right-10 h-[88%] w-[48%] rotate-[6deg] rounded-2xl object-cover shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>
              </motion.div>

              {/* Content — slide in from opposite side */}
              <motion.div
                className={s.reverse ? "md:order-1" : ""}
                variants={{
                  hidden: { opacity: 0, x: s.reverse ? -60 : 60 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
              >
                <motion.span
                  className="text-xs uppercase text-primary font-semibold"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.2 } },
                  }}
                >
                  {s.tag}
                </motion.span>
                <h3 className="mt-3 font-serif font-medium text-3xl md:text-4xl font-cormorant">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>

                <motion.ul
                  className="mt-6 space-y-2.5 text-sm"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.06 } },
                  }}
                >
                  {s.bullets.map((b) => (
                    <motion.li
                      key={b}
                      className="flex items-start gap-2"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-foreground/80">{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.button
                  className="mt-7 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {s.cta}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
