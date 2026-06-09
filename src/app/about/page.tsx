import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";
import { EventPlanningForm } from "@/components/contact/form-component";
// src/components/AboutSection.tsx
import {
  CalendarCheck,
  Lightbulb,
  MapPin,
  Users,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import aboutImage from "@/assets/about-memory-makers.jpg";
import { DifferenceSection } from "@/components/contact/difference-section";

const services = [
  {
    icon: CalendarCheck,
    title: "Full Event Planning & Coordination",
    description:
      "End-to-end management of your event, from conception to execution.",
  },
  {
    icon: Lightbulb,
    title: "Concept Development & Mood-board Curation",
    description:
      "Translating your ideas into a bold visual direction that reflects your style.",
  },
  {
    icon: MapPin,
    title: "Venue Sourcing",
    description:
      "Access to premium venues across Lagos, Abuja, Port Harcourt, and beyond — negotiated to your brief.",
  },
  {
    icon: Users,
    title: "Vendor Curation",
    description:
      "We hand-pick and manage the best caterers, photographers, DJs, and entertainers in the industry.",
  },
  {
    icon: ClipboardList,
    title: "Day-of Coordination",
    description:
      "Structured, scheduled, and managed timelines to guarantee a seamless flow on the day.",
  },
  {
    icon: Sparkles,
    title: "Guest Experience",
    description:
      "RSVP management, guest hospitality, transportation, and personalized touches for every attendee.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero
        title={<>Built on Passion, Rooted in Culture</>}
        description=""
        tagline="OUR STORY"
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
                More Than Planners —<br />
                We Are Memory Makers
              </h2>
              <div className="mt-6 space-y-4 text-sm ">
                <p>
                  At Crimson Dress, we believe the most unforgettable moments
                  deserve more than a checklist — they demand intention, beauty,
                  and a touch of magic. We are the minds behind celebrations
                  that feel effortless, rich, stunning, and lasting impressions.
                </p>
                <p>
                  We take your ideas, your style, and your story, then transform
                  them into superior cues that tell truly one of a kind. From
                  bare spaces to breathtaking settings, every detail is
                  carefully curated to create an atmosphere your guests will
                  talk about long after the event is over.
                </p>
                <p>
                  Whether you are a simple, secret-keeping deeply about a story,
                  moments are woven. We don't just plan events, we craft
                  memories under climate and bring elegance to life in a way
                  that feels seamless, personal, and unforgettable. At Crimson
                  Events, your special moments are our masterpiece.
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
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.45_0.18_25)]/10 text-primary">
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
