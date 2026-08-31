import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";
import {
  CalendarCheck,
  Lightbulb,
  MapPin,
  Users,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { DifferenceSection } from "@/components/contact/difference-section";

const services = [
  {
    icon: CalendarCheck,
    title: "Full Event Planning & Coordination",
    description:
      "From concept to the final farewell, we oversee every detail to ensure your celebration unfolds seamlessly, allowing you to enjoy every moment with complete peace of mind.",
  },
  {
    icon: Lightbulb,
    title: "Concept Development & Mood Board Curation",
    description:
      "We transform your ideas into a cohesive design concept, curating bespoke mood boards that beautifully reflect your style, personality, and vision.",
  },
  {
    icon: MapPin,
    title: "Venue Sourcing",
    description:
      "We source exceptional venues that complement your vision, negotiating the best options to suit your style, guest experience, and budget.",
  },
  {
    icon: Users,
    title: "Vendor Curation",
    description:
      "We carefully select and coordinate trusted industry professionals, ensuring every vendor aligns with your vision and delivers excellence from start to finish.",
  },
  {
    icon: ClipboardList,
    title: "Day-of Coordination",
    description:
      "Relax and be fully present while we manage every timeline, vendor, and behind-the-scenes detail, ensuring your event runs flawlessly from beginning to end.",
  },
  {
    icon: Sparkles,
    title: "Guest Experience & Logistics",
    description:
      "From guest arrivals to seating arrangements and event flow, we thoughtfully coordinate every touchpoint for a seamless experience.",
  },
  {
    icon: Sparkles,
    title: "Budget Planning & Management",
    description:
      "Thoughtful budget planning that maximizes value without compromising on elegance, quality, or your overall vision.",
  },
  {
    icon: Sparkles,
    title: "Guest Experience & Logistics",
    description:
      "From guest arrivals to seating arrangements and event flow, we thoughtfully coordinate every touchpoint for a seamless experience.",
  },
  {
    icon: Sparkles,
    title: "Production & Event Styling Oversight",
    description:
      "We oversee every design element and production detail, ensuring your celebration is beautifully executed exactly as envisioned.",
  },
  {
    icon: Sparkles,
    title: "Timeline & Logistics Management",
    description:
      "A carefully planned schedule that keeps every moment flowing effortlessly, from setup through the final send-off.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero
        title={
          <>
            Because every unforgettable celebration begins with thoughtful
            planning
          </>
        }
        description=""
        tagline="WHERE EXTRAORDINARY CELEBRATIONS BEGIN"
        activeNavIndex={1}
        showCta={false}
      />

      <section className="bg-background px-4">
        {/* About */}
        <div className="mx-auto  px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Who we are
              </p>
              <h2 className="text-3xl font-semibold font-cormorant leading-tight tracking-tight md:text-5xl">
                Creating Timeless Celebrations, <br /> One Story at a Time
              </h2>
              <div className="mt-6 space-y-4 text-sm ">
                <p>
                  At Crimson Events, we believe every celebration tells a story
                  worth remembering. With a passion for thoughtful planning and
                  refined execution, we transform ideas into extraordinary
                  experiences that are as beautiful as they are meaningful.
                </p>
                <p>
                  Whether it's an intimate gathering, a lavish wedding, or a
                  corporate affair, we oversee every detail with precision,
                  creativity, and care. From the first consultation to the final
                  farewell, we ensure every moment flows seamlessly, allowing
                  you to be fully present while we bring your vision to life.
                </p>
                <p>
                  Because at Crimson Events, we don't just plan events, we
                  create experiences that linger in hearts long after the last
                  guest has gone.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={"/images/women.jpg"}
                alt="Elegant women in matching blue aso-ebi at a Crimson Events celebration"
                loading="lazy"
                className="aspect-[4/3] w-full  object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-muted/40">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What we offer
              </p>
              <h2 className="text-3xl font-semibold font-cormorant tracking-tight md:text-5xl">
                End-to-End Excellence
              </h2>
              <p className="mt-4 ">
                From the first conversation to the final guest departure, we
                handle every detail so you can simply be present in your moment.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {services.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-card p-6  transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold font-cormorant tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DifferenceSection />

      <Footer />
    </div>
  );
}
