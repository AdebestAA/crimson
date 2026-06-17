"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaWhatsapp } from "react-icons/fa";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  CalendarIcon,
  Quote,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useContactForm } from "@/lib/api/use-contact-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navLinks = ["Home", "About", "Services", "Contact"];
const categories = [
  {
    title: "Weddings",
    blurb: "Timeless ceremonies crafted with love and precision.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=75&fm=webp",
  },
  {
    title: "Birthdays",
    blurb: "Memorable celebrations that turn any moment into magic.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=75&fm=webp",
  },
  {
    title: "Baby Showers",
    blurb: "Welcoming new life with warmth and elegance.",
    img: "https://images.unsplash.com/photo-1530747884674-879d5573f0d9?auto=format&fit=crop&w=600&q=75&fm=webp",
  },
  {
    title: "Funerals",
    blurb: "Dignified farewells that honor a life well-lived.",
    img: "https://images.unsplash.com/photo-1528822855841-c1a956dc1bd9?auto=format&fit=crop&w=600&q=75&fm=webp",
  },
  {
    title: "Corporate Events",
    blurb: "Professional gatherings that leave a lasting impression.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=75&fm=webp",
  },
  {
    title: "Social Gatherings",
    blurb: "Warm get-togethers full of joy and connection.",
    img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=75&fm=webp",
  },
];

const testimonials = [
  {
    quote: `Thank you so much for everything
Mudi and I are grateful
Everything came out really perfect....people have been going on and on  about how beautiful the wedding went`,
    name: "Chinwe & Mudi",
    event: "Wedding",
    img: "/images/test-one.jpg",
  },
  {
    quote: `Hello Dami, thank you so much, well done, It was a great success.

Really appreciate your effort`,
    name: "The Soremekun children",
    event: "Corporate Gala, Abuja",
    img: "/images/test-one.jpg",
  },
  {
    quote: (
      <>
        It's such a relief when you have a team that truly has your back so you
        can actually enjoy your big day.
        <br />
        Choosing you “Dami” and the entire CRIMSON EVENTS team was the best
        decision we made for our wedding. From the very beginning, Dami, you
        took our vision and turned it into something better than we could have
        imagined, not minding our wahala😁. Planning a wedding is inherently
        high pressure, but you handled every complex detail with total command
        and grace. You are a powerhouse who ensures every vendor is on point and
        every minute of the timeline is honored.
        <br />
        Ten Stars for you beibe!💋🙌🏾
        <br />
        My bridal assistant, Victoria, was equally amazing. She was my absolute
        guardian angel for the day. She was there before I even knew I needed
        something, keeping me hydrated, fixing my train, and making sure I felt
        confident. Having her by my side meant I didn't have to worry about a
        single thing. She was always one step ahead with exactly what I needed,
        allowing me to stay present and calm throughout the morning, and yeah,
        she got me a pack of gifts😊
        <br />
        If you want a team that is professional, creative, and genuinely cares
        about your day, look no further!"CRIMSON EVENTS is the right choice👌🏾
        This team is organized, responsive, and incredibly talented. They didn't
        just plan a wedding; they protected our peace of mind so we could focus
        on each other.
        <br />
        We really can't thank you enough for your incredible work, and for
        making our wedding day so special and memorable🙏🏾 May God bless you, for
        the way you served us on our wedding day. We pray that God grants you
        continued success in your business. Thank you for being such a vital
        part of our beginning. Cheers 🥂
        <br />
        With love and appreciation, Seyi and Adeola #SAlutetoforever25
      </>
    ),
    name: "Seyi and Adeola",
    event: "Birthday, Port Harcourt",
    img: "/images/test-one.jpg",
  },
  {
    quote: `Thank you so much for yesterday Dami, Faith was an amazing assistant. 

I was so pleased.`,
    name: "Fadekemi and Seun",
    event: "Birthday, Port Harcourt",
    img: "/images/test-one.jpg",
  },
  {
    quote: `Hello Dami. Thank you sooooo much. I'll still send a separate appreciation note. I know I stressed you all through this process 😅`,
    name: "Funmi and Adebayo",
    event: "Birthday, Port Harcourt",
    img: "/images/test-one.jpg",
  },
  {
    quote: `Good morning my sis, I'm doing fine. Thank you so much for sending it and thank you so much for a beautiful mixer well put together. Till date everyone can't stop talking about it. All my events na you go dey plan am now, Everything I wan Dey do for Naija now.`,
    name: "Irene and Chidera's Welcome mixer",
    event: "Birthday, Port Harcourt",
    img: "/images/test-one.jpg",
  },
  {
    quote: (
      <>
        We reached out to Crimson Events in April, My wife and I wanted a very
        soft, intimate, and relaxed celebration where our friends and family
        could simply enjoy the moment without any stress. We knew we needed
        someone who could truly understand our vision and bring it to life.
        <br />
        I remembered attending my brother's wedding (Lateefah & Gideon) and
        being amazed by how everything came together so beautifully. When it was
        our turn, we wanted that same magic, and Crimson Events delivered beyond
        our expectations.
        <br />
        From the planning stages to the execution, the team was incredibly
        resourceful, thoughtful, and attentive to every detail. What stood out
        the most was their ability to understand us as individuals and as a
        couple. They didn't just plan an event; they created an experience that
        reflected who we are.
        <br />
        Most importantly, my wife was completely stress-free throughout the
        entire process, and that meant everything to me. Knowing that we could
        trust the team to handle everything allowed us to truly enjoy our
        special day.
        <br />I would wholeheartedly recommend Crimson Events to anyone looking
        for an event planner who is professional, intentional, and committed to
        creating unforgettable experiences.
      </>
    ),
    name: "Chidinma & Joel",
    event: "Birthday, Port Harcourt",
    img: "/images/test-one.jpg",
  },
  {
    quote: (
      <>
        Oh my goodness, I don't even know where to start! Dami was an amazing
        planner and did such an incredible job. She was very attentive and
        literally brought my vision to life. The moment I walked in, all I could
        say was, 'Oh wow! My goodness! It was everything I had imagined and
        more.
        <br />
        Everyone had something beautiful to say about the event. Dami is so
        dedicated, and you can truly see the passion she puts into her work. I
        am so happy and completely fulfilled with how everything turned out.
        <br />
        I had watched her work at my friend's Welcome Mixer (Irene & Chidera)
        and I just knew she was the right person for mine. She listened
        carefully, understood my thoughts, and executed everything perfectly.
        She exceeded my expectations in every way.
        <br />
        Thank you so much to Dami and the entire team for making my event so
        special. I truly appreciate all your hard work and dedication. I
        definitely look forward to working with you again for future events.
      </>
    ),
    name: "Mashii",
    event: "Birthday, Port Harcourt",
    img: "/images/test-one.jpg",
  },
];

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please select a date"),
  guestCount: z
    .number({ error: "Please enter guest count" })
    .int("Must be a whole number")
    .min(1, "At least 1 guest"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: 0,
    },
  });

  const { mutate, isPending } = useContactForm();

  const onSubmit = (values: ContactFormValues) => {
    mutate(values, {
      onSuccess: () => form.reset(),
    });
  };

  const labelClasses =
    "text-xs font-medium uppercase tracking-wide text-muted-foreground";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-xl bg-background p-8 shadow-sm ring-2 ring-border md:ring-1"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClasses}>Full Name</FormLabel>
                <FormControl>
                  <Input
                    className="h-10"
                    placeholder="Adaeze Okonkwo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClasses}>Email Address</FormLabel>
                <FormControl>
                  <Input
                    className="h-10"
                    type="email"
                    placeholder="adaeze@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClasses}>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    className="h-10"
                    type="tel"
                    placeholder="+234"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClasses}>Event Type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="min-h-10 w-full">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Wedding">Wedding</SelectItem>
                    <SelectItem value="Birthday">Birthday</SelectItem>
                    <SelectItem value="Corporate">Corporate</SelectItem>
                    <SelectItem value="Conference">Conference</SelectItem>
                    <SelectItem value="Anniversary">Anniversary</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className={labelClasses}>Event Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <button
                        type="button"
                        className={cn(
                          "flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-input bg-transparent px-3 text-sm transition-colors hover:bg-muted/30",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value
                          ? format(new Date(field.value), "PPP")
                          : "Pick a date"}
                        <CalendarIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
                      </button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(d) => field.onChange(d ? d.toISOString() : "")}
                      disabled={{ before: new Date() }}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guestCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClasses}>Guest Count</FormLabel>
                <FormControl>
                  <Input
                    className="h-10"
                    type="number"
                    placeholder="approx. 100"
                    value={field.value || ""}
                    onChange={(e) => {
                      const raw = e.target.value;
                      field.onChange(raw === "" ? undefined : Number(raw));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="mt-6 w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          {isPending && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
          )}
          {isPending ? "Sending..." : "Start Planning"}
        </Button>
        <p className="mt-4 text-center text-xs">
          <a
            href="https://wa.me/2349112670005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary hover:underline"
          >
            Can't wait? Send us a message on WhatsApp
            <FaWhatsapp className="h-4 w-4 text-green-500" />
          </a>
        </p>
      </form>
    </Form>
  );
}

const TestimonialsAndFooter = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setFade(false);
      setTimeout(() => {
        setCurrent(index);
        setFade(true);
      }, 200);
    },
    [current],
  );

  const prev = useCallback(
    () => goTo(current === 0 ? testimonials.length - 1 : current - 1),
    [current, goTo],
  );

  const next = useCallback(
    () => goTo(current === testimonials.length - 1 ? 0 : current + 1),
    [current, goTo],
  );

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <>
      {/* TESTIMONIALS */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">
            What Our Clients Say
          </span>
          <h2 className="mt-3  text-4xl md:text-5xl font-cormorant">
            Stories That Warm Our Hearts
          </h2>

          {/* Testimonial Slide */}
          <div className="mx-auto mt-12  lg:w-4/5 w-full rounded-lg px-4 py-10  ">
            <div
              className={`transition-opacity duration-200 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="lg:flex items-start text-base leading-relaxed text-white/90 gap-x-4">
                <p className="flex items-center justify-center">
                  {" "}
                  <span className="shrink-0 text-white/40">
                    <Quote className="h-10 w-10" />
                  </span>
                </p>
                <p className="pt-2  text-center w-full">{t.quote}</p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                {/* <img
                  src={t.img}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                /> */}
                <div className="text-left">
                  <div className="text-sm font-bold uppercase">{t.name}</div>
                  {/* <div className="text-[11px] text-white/60">
                    Featured at {t.event}
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Arrows + Dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all ${
                    i === current
                      ? "h-1.5 w-6 bg-white"
                      : "h-1.5 w-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="text-xs uppercase   text-primary font-semibold">
                Get in Touch
              </span>
              <h2 className="mt-2  text-3xl  md:text-4xl font-cormorant">
                Lets Start Planning
                <br />
                Your Event
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Share a few details and our team will reach out within 24 hours
                to begin crafting your perfect event. No commitment required —
                just a conversation.
              </p>
              <ul className="mt-2 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  +234 801 351 0005
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  crimsonevents@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  Lagos, Nigeria
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 py-16 text-neutral-400">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src="/assets/crimson-logo.png" alt="logo" />
            </div>

            <p className="mt-4 max-w-xs text-sm italic">
              "Planning memories, one event at a time."
            </p>
            <div className="mt-6 flex gap-3">
              {["IG", "F", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700 text-xs text-neutral-300 transition hover:border-primary hover:text-primary"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#989898]">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => {
                const href = l === "Home" ? "/" : `/${l.toLowerCase()}`;
                return (
                  <li key={l}>
                    <Link
                      href={href}
                      className="transition text-white hover:text-primary"
                    >
                      {l}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#989898]">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {categories.map((c) => (
                <li key={c.title} className="text-white">
                  {c.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-neutral-800 px-6 pt-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Crimson Events.
            <br /> All rights reserved.
          </p>
          <p>Lagos, Nigeria · info@crimsonevents.ng · +234 801 351 0005</p>
        </div>
      </footer>
    </>
  );
};

export default TestimonialsAndFooter;
