import React from "react";
import VerticalLayout from "@/components/layouts/vertical-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TestimonialSection from "./components/testimonial-section";
import HeroSection from "./components/hero-section";
import PricingSection from "./components/pricing-section";

export default function LandingPage() {
  return (
    <VerticalLayout>
      <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12">
        <HeroSection />
      </section>
      <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full ">
          <Card>
            <CardHeader>
              <CardTitle>Modern Design</CardTitle>
              <CardDescription>
                Beautiful, accessible components for any project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                All components follow best practices and modern design trends,
                so your app looks great out of the box.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Easy Customization</CardTitle>
              <CardDescription>
                Style and extend with Tailwind CSS and variants.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Change colors, spacing, and more with simple props or your own
                Tailwind classes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Production Ready</CardTitle>
              <CardDescription>
                Tested, accessible, and ready for real users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Every component is built for accessibility and performance, so
                you can ship with confidence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Section (structure only, marquee effect next) */}
        <section className="w-full mt-20">
          <TestimonialSection />
        </section>
      </section>
      {/* <section className="w-full max-w-5xl mx-auto py-20" id="pricing"> */}
      <PricingSection />
      {/* </section> */}
    </VerticalLayout>
  );
}
