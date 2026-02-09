import VerticalLayout from "@/components/layouts/vertical-layout";
import FunnelDialog from "@/components/funnel-dialog";
import Banner from "@/components/banner";
import useAppContext from "@/hooks/useAppContext";
import { useTheme } from "@/hooks/use-theme";
import TestimonialSection from "./components/testimonial-section";
import { HeroBackground, HeroContent } from "./components/hero-section";
import { useNavigate } from "react-router-dom";
import PricingSection from "./components/pricing-section";
import ServicesSection from "./components/services-section/index";
import AboutUsSection from "./components/about-us-section";

function LandingPage() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppContext();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
      return;
    }
    navigate("/onboarding");
  };

  return (
    <>
      <Banner
        message={() => (
          <>
            Black Friday Sale! Get 50% off on all premium plans. Use code{" "}
            <b>"BLACKFRIDAY"</b> at checkout.
          </>
        )}
        textColor={theme === "dark" ? "#F9FAFB" : "#000000"}
      />
      <FunnelDialog
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSubmit={(data) => {
          // You can replace this with your own submit logic
          // eslint-disable-next-line no-console
          console.log("Funnel Data Submitted:", data);
        }}
      />
      <VerticalLayout>
        {/* Silk background covers header + hero */}
        <div className="absolute inset-0 -z-10 w-full h-[700px] md:h-[700px] invert brightness-80 dark:invert-0 ">
          <HeroBackground />
        </div>
        <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12">
          {/* Pass handler to HeroContent for Get Started button */}
          <HeroContent onGetStarted={handleGetStarted} />
        </section>
        <AboutUsSection />
        <ServicesSection />

        <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12">
          {/* Testimonial Section (structure only, marquee effect next) */}
          <section className="w-full mt-20">
            <TestimonialSection />
          </section>
        </section>
        <PricingSection />
      </VerticalLayout>
    </>
  );
}

export default LandingPage;
