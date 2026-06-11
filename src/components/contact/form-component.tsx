"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaWhatsapp } from "react-icons/fa";
import { Loader2, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { useContactForm } from "@/lib/api/use-contact-form";

const eventTypes = [
  "Wedding",
  "Birthday",
  "Corporate",
  "Conference",
  "Anniversary",
  "Other",
] as const;

const budgetRanges = [
  "Under ₦5,000",
  "₦5,000 - ₦15,000",
  "₦15,000 - ₦50,000",
  "₦50,000 - ₦100,000",
  "₦100,000+",
] as const;

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(100, { message: "Full name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[+\d\s()-]+$/, {
      message: "Phone number contains invalid characters",
    }),
  eventType: z.enum(eventTypes, { message: "Please select an event type" }),
  eventDate: z
    .string()
    .min(1, { message: "Please select an event date" })
    .refine((v) => !Number.isNaN(new Date(v).getTime()), {
      message: "Please enter a valid date",
    })
    .refine((v) => new Date(v) >= new Date(new Date().toDateString()), {
      message: "Event date cannot be in the past",
    }),
  guestCount: z
    .number({ error: "Please enter the guest count" })
    .int("Guest count must be a whole number")
    .min(1, "There must be at least 1 guest")
    .max(100000, "Guest count is too large"),
  budgetRange: z.enum(budgetRanges, {
    message: "Please select a budget range",
  }),
  details: z
    .string()
    .trim()
    .max(1000, { message: "Please keep this under 1000 characters" })
    .optional()
    .or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

export function EventPlanningForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      eventDate: "",
      details: "",
    },
  });

  const { mutate, isPending } = useContactForm();

  const onSubmit = (values: FormValues) => {
    mutate(values, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl lg:border-2 lg:border-border bg-card p-6 shadow-sm md:border md:p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold uppercase tracking-wider">
                    Full Name
                  </FormLabel>
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
                  <FormLabel className="text-xs font-semibold uppercase tracking-wider">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-10"
                      type="email"
                      placeholder="adaeze@gmail.com"
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
                  <FormLabel className="text-xs font-semibold uppercase tracking-wider">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-10"
                      type="tel"
                      placeholder="+234 813 821 0833"
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
                  <FormLabel className="text-xs font-semibold uppercase tracking-wider">
                    Event Type
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="min-h-10 w-full">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {eventTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
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
                  <FormLabel className="text-xs font-semibold uppercase tracking-wider">
                    Event Date
                  </FormLabel>
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
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={(d) =>
                          field.onChange(d ? d.toISOString() : "")
                        }
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
                  <FormLabel className="text-xs font-semibold uppercase tracking-wider">
                    Guest Count
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-10"
                      type="number"
                      min={1}
                      placeholder="e.g. 300"
                      value={field.value ?? ""}
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

          <FormField
            control={form.control}
            name="budgetRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider">
                  Budget Range
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {budgetRanges.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider">
                  Tell Us More About Your Event
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Share your vision, theme ideas, special requirements..."
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
            {isPending ? "Sending..." : "Start Planning"}
          </Button>

          <div className="text-center">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Can't wait? Send us a message on WhatsApp
              <FaWhatsapp className="h-4 w-4 text-green-500" />
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
}
