import { Button } from "@/components/ui/button";

const reasons = [
  {
    title: "Bespoke Planning",
    description:
      "No two celebrations are the same. Every event is thoughtfully designed around your vision, style, and story.",
  },
  {
    title: "Trusted Industry Partners",
    description:
      "Our carefully curated network of premium vendors ensures exceptional quality, reliability, and seamless execution at every stage.",
  },
  {
    title: "Flawless Execution",
    description:
      "From the first consultation to the final farewell, we manage every detail with precision, allowing you to enjoy your celebration without the stress.",
  },
  {
    title: "Exceptional Guest Experience",
    description:
      "Every touchpoint is intentionally planned to create memorable moments that leave a lasting impression on you and your guests.",
  },
  {
    title: "Clear Communication",
    description:
      "You are aware of what's happening. We provide timely updates, proactive guidance, and complete transparency throughout the planning process.",
  },
  {
    title: "Excellence Without Compromise",
    description:
      "We do not settle for ordinary. Every detail is carefully considered to deliver a celebration that exceeds expectations.",
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
              Why Clients Trust Crimson Events
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every celebration is personal, and so is our approach. We combine
              thoughtful planning, trusted partnerships, and flawless execution
              to create events that feel effortless, elegant, and unforgettable.
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
            Your Dream Celebration
            <br />
            Starts Here
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-dm-sans">
            Every celebration deserves thoughtful planning and flawless
            execution. Share your vision with us, and together, let's create an
            experience that's elegant, meaningful, and truly unforgettable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full cursor-pointer bg-primary text-white hover:bg-primary"
              asChild
            >
              <a href="/contact" className="cursor-pointer">
                Book a Consultation
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full cursor-pointer border-primary text-primary hover:bg-black/10 hover:text-primary"
            >
              <a href="/services" className="cursor-pointer">
                Explore Our Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
