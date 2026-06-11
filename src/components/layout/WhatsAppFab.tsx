"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/2348013510005"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl animate-whatsapp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
