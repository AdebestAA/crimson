import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";
import { EventPlanningForm } from "@/components/contact/form-component";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero
        ctaPrimaryLabel={"Start Planning"}
        title={
          <>
            Every Extraordinary Event
            <span className="text-primary">Begins With a Conversation </span>
          </>
        }
        description="  Tell us about your celebration, and our team will contact you within 24 hours to begin crafting an experience that is uniquely yours."
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
