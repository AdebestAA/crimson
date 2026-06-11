"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const defaultLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

type NavProps = {
  links?: { label: string; href: string }[];
  activeIndex?: number;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Nav({
  links = defaultLinks,
  activeIndex = 0,
  ctaLabel = "Start Planning",
  ctaHref = "/contact",
}: NavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 text-white md:px-6 md:py-6">
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <img
          src="/assets/crimson-logo.png"
          alt="Crimson logo"
          className="h-14 md:h-auto"
        />
      </Link>

      {/* Desktop links */}
      <div className="hidden items-center gap-x-6 md:flex">
        <ul className="flex items-center gap-8 text-sm">
          {links.map((link, i) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`transition hover:text-primary ${i === activeIndex ? "text-primary" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={ctaHref}
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          {ctaLabel}
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[99999] transition-opacity duration-300 md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-background p-6 shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={() => setOpen(false)}
            className="mb-8 ml-auto block"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
          <ul className="flex flex-col gap-5">
            {links.map((link, i) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-lg font-medium transition ${i === activeIndex ? "text-primary" : "text-foreground hover:text-primary"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-8 block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </nav>
  );
}
