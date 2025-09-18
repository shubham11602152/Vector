import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type PricingPlan = {
  name: string;
  price: string;
  features: string[];
  cta: string;
  ctaVariant?: "default" | "secondary";
  highlight?: boolean;
  description?: string;
};

const plans: PricingPlan[] = [
  {
    name: "Free Plan",
    price: "$0/mo",
    features: [
      "1 project",
      "Community support",
      "Basic analytics",
      "Limited components",
    ],
    cta: "Get started for free",
    ctaVariant: "secondary",
    description: "Perfect for trying out Acme UI with basic features.",
  },
  {
    name: "Professional Plan",
    price: "$29/mo",
    features: [
      "Unlimited projects",
      "Priority support",
      "Advanced analytics",
      "All components",
      "Custom themes",
    ],
    cta: "Get started",
    ctaVariant: "default",
    highlight: true,
    description: "For teams and professionals who need more power.",
  },
  {
    name: "Basic Plan",
    price: "$9/mo",
    features: [
      "5 projects",
      "Email support",
      "Standard analytics",
      "Most components",
    ],
    cta: "Get started",
    ctaVariant: "default",
    description: "A step up for individuals and small teams.",
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card
      className={`flex flex-col h-full ${
        plan.highlight ? "border-2 border-primary shadow-lg scale-105" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {plan.name}
          {plan.highlight && (
            <span className="ml-2 px-2 py-0.5 text-xs rounded bg-primary text-primary-foreground">
              Most Popular
            </span>
          )}
        </CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <div className="text-4xl font-bold mb-2">{plan.price}</div>
          <ul className="mb-4 space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={plan.ctaVariant || "default"} className="w-full">
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function PricingSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20" id="pricing">
      <h2 className="text-3xl font-bold text-center mb-4">Pricing</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Choose the plan that fits your needs. Upgrade, downgrade, or cancel
        anytime.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
