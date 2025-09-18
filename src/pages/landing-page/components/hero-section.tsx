import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <>
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
    </>
  );
}
