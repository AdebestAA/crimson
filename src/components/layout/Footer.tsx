import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Weddings",
  "Birthdays",
  "Baby Showers",
  "Funerals",
  "Corporate Events",
  "Social Gatherings",
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-16 text-neutral-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/crimson-logo.png"
              alt="Crimson logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
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
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition text-white hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#989898]">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s} className="text-white">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-neutral-800 px-6 pt-6 text-xs md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Crimson Events.
          <br /> All rights reserved.
        </p>
        <p>Lagos, Nigeria &middot; info@crimsonevents.ng &middot; +234 801 351 0005</p>
      </div>
    </footer>
  );
}
