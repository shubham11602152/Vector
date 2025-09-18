import React from "react";
import VerticalLayout from "@/components/layouts/vertical-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PricingSection from "./landing-page/components/pricing-section";

export default function LandingPage() {
  // Testimonial data
  const testimonials = [
    {
      name: "Jane Doe",
      title: "Product Designer",
      company: "Acme Corp",
      quote:
        "Acme UI made it so easy to build a beautiful dashboard. The components are modern, accessible, and easy to customize!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "John Smith",
      title: "Frontend Engineer",
      company: "Techify",
      quote:
        "I love how fast I can ship features now. The registry has everything I need, and the docs are fantastic.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Patel",
      title: "Startup Founder",
      company: "Launchly",
      quote:
        "We built our MVP in days, not weeks. The Acme UI components are a game changer for startups!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Carlos Ruiz",
      title: "Full Stack Dev",
      company: "DevHouse",
      quote:
        "The accessibility and performance out of the box is amazing. Highly recommend for any serious project.",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Emily Chen",
      title: "UI Engineer",
      company: "PixelWorks",
      quote:
        "Customizing the look and feel was a breeze. The variants system is so powerful!",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  return (
    <VerticalLayout>
      <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-balance max-w-2xl text-center">
          Welcome to Acme UI
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl text-center">
          Build beautiful, modern web apps with ready-to-use components from the
          Acme registry. Fast, accessible, and customizable.
        </p>
        <Button size="lg" className="mt-4">
          Get Started
        </Button>
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
          <h2 className="text-3xl font-bold text-center mb-8">
            What people are saying
          </h2>
          <div className="relative overflow-hidden flex items-center">
            {/* Marquee effect: duplicate testimonials for seamless loop */}
            <div
              className="testimonial-marquee gap-6 py-4"
              style={{ alignItems: "center", height: "100%" }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <Card
                  key={i}
                  className="w-[320px] max-w-xs flex-shrink-0 overflow-hidden flex flex-col justify-center"
                  style={{ boxSizing: "border-box" }}
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                      <CardTitle className="text-base leading-tight">
                        {t.name}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {t.title} @ {t.company}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="overflow-hidden text-ellipsis whitespace-normal">
                    <p className="text-sm italic line-clamp-3">“{t.quote}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </section>
      <PricingSection />
    </VerticalLayout>
  );
}
