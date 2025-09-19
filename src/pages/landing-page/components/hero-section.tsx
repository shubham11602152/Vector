import Silk from "@/components/effects/background/Silk";
import { Button } from "@/components/ui/button";

function HeroBackground() {
  return (
    <Silk
      speed={5}
      scale={1}
      color={"2969FF"}
      noiseIntensity={1.5}
      rotation={0}
    />
  );
}

function HeroContent() {
  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight text-balance max-w-2xl text-center">
        Define Your Direction
      </h1>
      <p className="text-muted-foreground text-lg max-w-xl text-center">
        Success isn't just about working hard—it's about working in the right
        direction. Vector is the platform that helps you cut through the noise,
        clarify your goals, and plot a clear path forward, so every move counts.
      </p>
      <div className="flex gap-4">
        <Button size="lg" className="mt-4">
          Get Started
        </Button>
        <Button size="lg" variant="outline" className="mt-4">
          Learn More
        </Button>
      </div>
    </>
  );
}

export { HeroBackground, HeroContent };
