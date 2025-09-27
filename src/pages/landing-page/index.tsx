import VerticalLayout from "@/components/layouts/vertical-layout";
import TestimonialSection from "./components/testimonial-section";
import { HeroBackground, HeroContent } from "./components/hero-section";
import PricingSection from "./components/pricing-section";
import ServicesSection from "./components/services-section/index";

export default function LandingPage() {
  return (
    <VerticalLayout>
      {/* Silk background covers header + hero */}
      <div className="absolute inset-0 -z-10 w-full h-[700px] md:h-[700px] invert brightness-80 dark:invert-0 ">
        <HeroBackground />
      </div>
      <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12">
        <HeroContent />
      </section>
      <ServicesSection />

      <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12">
        {/* Testimonial Section (structure only, marquee effect next) */}
        <section className="w-full mt-20">
          <TestimonialSection />
        </section>
      </section>
      <PricingSection />
    </VerticalLayout>
  );
}
