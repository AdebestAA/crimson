import { ScrambleText } from "@/components/animations/scramble-text";

export function SectionOne() {
  return (
    <>
      {/* STORY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">
                Our Story
              </span>
              <h2 className="mt-3 text-4xl leading-tight font-cormorant">
                <ScrambleText text="Crafting Unforgettable Moments Since 2014" />
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Crimson Events was born from a simple belief: every celebration
                deserves to be extraordinary. What started as a small team of
                three passionate planners in Lagos has grown into one of
                Nigeria's most trusted event management firms.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We've orchestrated over 500 events — from intimate garden
                weddings to large-scale corporate galas — and each one carries
                our signature touch: meticulous attention to detail, creative
                flair, and an unwavering commitment to excellence.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 font-cormorant">
                {[
                  { value: "500+", label: "Events Delivered" },
                  { value: "10+", label: "Years Experience" },
                  { value: "8", label: "Cities Covered" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl text-primary">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="mt-10 rounded-lg border-l-4 border-primary bg-muted/30 p-5">
                <p className="text-sm italic leading-relaxed text-foreground/80">
                  &ldquo;At Crimson, we don't just plan events — we create
                  experiences that live in hearts forever. Every detail matters,
                  and every moment counts.&rdquo;
                </p>
                <footer className="mt-3 text-xs font-medium text-primary">
                  — Amara Obi, Founder & Lead Planner
                </footer>
              </blockquote>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=75&fm=webp"
                alt="Crimson Events team"
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              What Drives Us
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-cormorant">
              <ScrambleText text="Our Core Values" />
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Attention to Detail",
                desc: "We believe greatness lives in the details. From floral arrangements to lighting cues, nothing escapes our notice.",
              },
              {
                title: "Creativity & Innovation",
                desc: "No two events are the same. We bring fresh ideas and bold concepts to every project we touch.",
              },
              {
                title: "Reliability & Trust",
                desc: "When you hand us your vision, we guard it like our own. We show up, deliver, and exceed expectations — every single time.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-8"
              >
                <h3 className=" text-xl font-cormorant">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
