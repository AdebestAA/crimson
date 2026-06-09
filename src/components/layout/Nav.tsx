"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-white md:px-6 md:py-6">
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <img src="/assets/crimson-logo.png" alt="Crimson logo" className="h-8 md:h-auto" />
      </Link>

      {/* Desktop links */}
      <div className="hidden items-center gap-x-4 md:flex">
        <ul className="flex items-center gap-8 text-sm">
          {links.map((link, i) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`transition hover:text-primary ${
                  i === activeIndex ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={ctaHref}
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
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
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="absolute inset-0 bg-black/60"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-64 bg-background p-6 shadow-xl"
              variants={{
                hidden: { x: "100%" },
                visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
              }}
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
                  <motion.li
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.05 } },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block text-lg font-medium transition ${
                        i === activeIndex
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
                }}
              >
                <Link
                  href={ctaHref}
                  onClick={() => setOpen(false)}
                  className="mt-8 block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  {ctaLabel}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
