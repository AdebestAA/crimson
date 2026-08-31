"use client";

import { motion } from "framer-motion";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

const services = [
  {
    tag: "Weddings",
    title: "Wedding Planning, Perfectly Executed",
    copy: "Your wedding deserves more than a beautiful celebration, it deserves an effortless planning experience. Whether you are planning a traditional ceremony, a white wedding, or a grand reception, we manage every detail with care, precision, and professionalism, so you can be fully present and enjoy every unforgettable moment.",
    bullets: [
      "Venue sourcing and selection",
      "Budget planning and management",
      "Vendor sourcing, coordination, and negotiation",
      "Wedding design consultation and mood board creation",
      "Catering coordination and menu planning",
      "Photography and videography coordination",
      "Bridal party coordination and scheduling",
      "Guest management and RSVP tracking",
      "Entertainment and production coordination",
      "Detailed timeline creation and event-day coordination",
    ],
    cta: "Plan My Wedding",
    img: "/images/wedding-event-service-two.jpg",
    img2: "/images/wedding-event-service.jpg",
    reverse: false,
  },
  {
    tag: "Birthdays",
    title: "Birthday Celebrations, Thoughtfully Planned",
    copy: "Every birthday marks a milestone worth celebrating. Whether it's a child's first birthday, a Sweet 16, an 18th, a 21st, a milestone 40th or 50th, or an intimate private celebration, we design experiences that are personal, joyful, and beautifully executed from start to finish.",
    bullets: [
      "Theme development and event concept creation",
      "Venue sourcing and selection",
      "Vendor sourcing, coordination, and negotiation",
      "Event styling consultation and mood board creation",
      "Catering and beverage coordination",
      "Entertainment and activity planning",
      "Invitation management and guest RSVP coordination",
      "Photography, videography, and photo booth coordination",
      "Detailed event timeline and on-the-day coordination",
      "Surprise planning and special moment execution",
    ],
    cta: "Plan My Birthday Celebration",
    img: "/images/birthday-one.jpg",
    img2: "/images/birthday-three.avif",
    reverse: true,
  },
  {
    tag: "BRIDAL SHOWERS",
    title: "Bridal Showers, Thoughtfully Planned",
    copy: "Celebrate the bride-to-be with an elegant and memorable gathering designed to honor this special season. From intimate brunches to sophisticated soirées, we plan bridal showers that are stylish, personal, and effortlessly executed.",
    bullets: [
      "Theme development and event concept creation",
      "Venue sourcing and selection",
      "Event styling consultation and mood board creation",
      "Vendor sourcing, coordination, and negotiation",
      "Catering and beverage coordination",
      "Entertainment, games, and activity planning",
      "Guest invitation and RSVP management",
      "Photography and videography coordination",
      "Detailed event timeline and on-the-day coordination",
    ],
    cta: "Plan My Baby Shower",
    img: "/images/bridal-shower-two.jpg",
    img2: "/images/bridal-shower.jpg",
    reverse: false,
  },
  {
    tag: "FUNERAL & MEMORIAL SERVICES",
    title: "A Dignified Farewell",
    copy: "Saying goodbye to a loved one is never easy. During such a difficult time, families deserve the space to grieve, reflect, and honour a life well lived. We provide thoughtful planning and seamless coordination with compassion, discretion, and the utmost respect, ensuring every detail is handled with care.",
    bullets: [
      "Venue sourcing and coordination",
      "Memorial service planning and logistics",
      "Order of service design and printing",
      "Vendor sourcing and coordination",
      "Tribute coordination",
      "Transportation and guest logistics",
      "Catering coordination for reception or post-service gatherings",
      "Guest management and seating coordination",
      "Liaison with religious, cultural, and family representatives",
      "Detailed event timeline and on-the-day coordination",
    ],
    cta: "Speak With Us Privately",
    img: "/images/fun-one.avif",
    img2: "/images/fun-two.jpg",
    reverse: true,
  },
  {
    tag: "CORPORATE EVENTS",
    title: "Corporate Events, Seamlessly Executed",
    copy: "Every corporate event is an opportunity to strengthen your brand, engage your audience, and create meaningful connections. From product launches and conferences to annual galas, award ceremonies, executive retreats, and company celebrations, we deliver professionally planned experiences that leave a lasting impression.",
    bullets: [
      "Event strategy and brand alignment",
      "Venue sourcing and selection",
      "Vendor sourcing, coordination, and negotiation",
      "Audio-visual and production coordination",
      "Speaker, MC, and entertainment coordination",
      "Event branding and signage coordination",
      "Guest registration and attendee management",
      "Catering and hospitality coordination",
      "Photography and videography coordination",
      "Detailed event timeline and on-site event management",
      "Post-event reporting and feedback",
    ],
    cta: "Plan My Corporate Event",
    img: "/images/coperate-one.jpg",
    img2: "/images/coperate-two.jpg",
    reverse: false,
  },
  {
    tag: "SOCIAL GATHERINGS",
    title: "Social Gatherings, Thoughtfully Planned",
    copy: "Every gathering is an opportunity to celebrate life's special moments and create lasting memories. Whether it's a reunion, housewarming, cultural celebration, dinner party, or private soirée, we curate stylish, seamless experiences tailored to your vision and your guests.",
    bullets: [
      "Event concept development and planning",
      "Venue sourcing and selection",
      "Vendor sourcing, coordination, and negotiation",
      "Event styling consultation and mood board creation",
      "Catering and beverage coordination",
      "Entertainment and music coordination",
      "Guest invitation and RSVP management",
      "Photography and videography coordination",
      "Activity and programme planning",
      "Detailed event timeline and on-the-day coordination",
    ],
    cta: "Plan My Social Event",
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
            Thoughtfully Curated <span className="text-primary">Services</span>
          </>
        }
        description="We offer comprehensive event planning services designed to create seamless, sophisticated, and unforgettable celebrations."
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
            Celebrations We Bring to Life
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every celebration tells a unique story, and every story deserves
            thoughtful planning. From intimate gatherings to grand celebrations,
            we create seamless, beautifully executed events across six distinct
            categories, each tailored to your vision and delivered with
            precision, creativity, and exceptional attention to detail.
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
