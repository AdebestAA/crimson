import { Button } from "@/components/ui/button";

const reasons = [
  {
    title: "Cultural Authenticity",
    description:
      "We do not just plan events — we honour traditions. Our team is fluent in the customs, protocols, and nuances of Nigerian celebrations.",
  },
  {
    title: "Premium Vendor Network",
    description:
      "Years of relationships with Nigeria's top caterers, decorators, photographers, and entertainers mean better quality and better rates for you.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise charges. Every naira is accounted for, and every decision is made with your budget in mind.",
  },
  {
    title: "Stress-Free Experience",
    description:
      "We handle the logistics, the drama, and the deadlines. You show up, look stunning, and enjoy every moment.",
  },
  {
    title: "On-Time, Every Time",
    description:
      "Nigerian time? Not on our watch. We run tight schedules so that your events start and end exactly as planned.",
  },
];

const stats = [
  { value: "500+", label: "Events Planned" },
  { value: "10+", label: "Cities Covered" },
  { value: "100%", label: "End-to-End Coordination" },
  { value: "On-Time", label: "Every Time" },
];

export function DifferenceSection() {
  return (
    <section className="bg-background">
      {/* Why choose us */}
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative h-full flex items-center justify-center">
            <img
              src={"/images/couple.jpg"}
              alt="Nigerian wedding couple embracing under a red and white floral arch"
              loading="lazy"
              className="aspect-[4/4] w-full  object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why choose us
            </p>
            <h2 className="text-3xl font-medium font-cormorant leading-tight tracking-tight md:text-5xl">
              The Difference Is in the Details
            </h2>
            <p className="mt-4 text-muted-foreground">
              In a market full of planners, we stand apart because we treat your
              event as if it were our own. Here is what sets us apart when you
              partner with Crimson Events.
            </p>

            <ol className="mt-8 space-y-6">
              {reasons.map((reason, i) => (
                <li key={reason.title} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border-2  text-sm font-semibold bg-primary text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium font-cormorant tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#3F3F3F]">
                      {reason.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 md:py-16 font-cormorant">
          {stats.map((s) => (
            <div key={s.label} className="text-center border-r border-white">
              <div className="font-serif text-3xl  md:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/80 md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-24">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl font-cormorant ">
            Let's Create Something
            <br />
            Unforgettable Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-dm-sans">
            Every great event starts with a conversation. Tell us your vision,
            and we will bring it to life with the care, creativity, and cultural
            pride that defines Crimson Events.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-primary text-white hover:bg-primary"
              asChild
            >
              <a href="#plan">Start Planning Your Event</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-black/10 hover:text-primary"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
