"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  budgetRange?: string;
  details?: string;
};

async function submitContactForm(data: ContactPayload) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error ?? "Something went wrong. Please try again.");
  }

  return json as { success: boolean; id: number };
}

export function useContactForm() {
  return useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast.success("Thanks! We'll be in touch shortly.");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
