import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";
import { EventPlanningForm } from "@/components/contact/form-component";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero
        title={
          <>
            Ready to Make It <span className="text-primary">Happen?</span>
          </>
        }
        description="Tell us about your event and we'll get back to you within 24 hours with a personalized plan."
        tagline="Reach Out to Us"
        activeNavIndex={3}
        showCta={false}
      />
      <div className="my-8">
        <EventPlanningForm />
      </div>

      {/* <SectionOne /> */}

      <Footer />
    </div>
  );
}
