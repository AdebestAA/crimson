"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
import { useQuickForm } from "@/lib/api/use-quick-form";

const STORAGE_KEY = "just-a-min-completed";

const schema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(100, { message: "Full name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a valid phone number" })
    .max(20)
    .regex(/^[+\d\s()-]+$/, {
      message: "Phone number contains invalid characters",
    }),
});

type FormValues = z.infer<typeof schema>;

export function JustAMinModal() {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", phone: "" },
  });

  const { mutate, isPending } = useQuickForm();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") return;
    const done = localStorage.getItem(STORAGE_KEY);
    if (!done) {
      const t = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  const onSubmit = (values: FormValues) => {
    mutate(values, {
      onSuccess: () => {
        localStorage.setItem(STORAGE_KEY, "1");
        setOpen(false);
        form.reset();
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="lg:max-w-lg w-[90%] mx-auto rounded-2xl lg:p-8 py-4 px-2 sm:p-10">
        <DialogHeader className="items-center text-center">
          <DialogTitle className="font-cormorant text-3xl md:text-4xl">
            Just a min!
          </DialogTitle>
          <DialogDescription className="text-sm text-center">
            Before you explore what we have to offer, please take a minute to
            fill this form.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-1"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="rounded-xl  px-4 py-3">
                  <FormLabel className="text-[10px] font-semibold uppercase tracking-wider ">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Adaeze Okonkwo"
                      className="h-8 border-0  pl-2 shadow-none focus-visible:ring-0 bg-muted/60"
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
                <FormItem className="rounded-xl  px-4 py-3">
                  <FormLabel className="text-[10px] font-semibold uppercase tracking-wider rounded-md">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="adaeze@gmail.com"
                      className="h-8 border-0  pl-2 shadow-none focus-visible:ring-0 bg-muted/60 rounded-md"
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
                <FormItem className="rounded-xl  px-4 py-3">
                  <FormLabel className="text-[10px] font-semibold uppercase tracking-wider ">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+234"
                      className="h-8 border-0  pl-2 shadow-none focus-visible:ring-0 bg-muted/60 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isPending}
              className="h-12 w-full rounded-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
              {isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
              )}
              {isPending ? "Submitting..." : "Submit and continue"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
