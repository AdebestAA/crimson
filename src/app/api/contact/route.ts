import { NextResponse } from "next/server";
import { z } from "zod";
import { insertSubmission } from "@/db/schema";

const bodySchema = z.object({
  fullName: z.string().min(2).max(255),
  email: z.string().email().max(255),
  phone: z.string().min(7).max(50),
  eventType: z.string().min(1).max(100),
  eventDate: z.string().min(1),
  guestCount: z.number().int().min(1).max(100000),
  budgetRange: z.string().optional(),
  details: z.string().max(2000).optional(),
});

export async function POST(request: Request) {
  try {
    const raw = await request.json();

    const parsed = bodySchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const id = await insertSubmission(parsed.data);

    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
