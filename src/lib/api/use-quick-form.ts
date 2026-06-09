import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

type QuickFormPayload = {
  fullName: string;
  email: string;
  phone: string;
};

async function submitQuickForm(data: QuickFormPayload) {
  const res = await fetch("/api/quick-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error ?? "Something went wrong. Please try again.");
  }

  return json as { success: boolean };
}

export function useQuickForm() {
  return useMutation({
    mutationFn: submitQuickForm,
    onSuccess: () => {
      toast.success("Thanks! Enjoy exploring.");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
