import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const aboutItems = [
  {
    title: "Our Vision",
    description:
      "We empower individuals to reach their full potential in a rapidly evolving world through innovative career solutions.",
    icon: "👁️",
  },
  {
    title: "Our Mission",
    description:
      "We bridge the gap between education and employment by providing insightful resources and personalized guidance.",
    icon: "🚀",
  },
  {
    title: "Our Focus",
    description:
      "We foster a community of learners, educators, and employers to drive meaningful career development.",
    icon: "🎯",
  },
];

export function AboutUsCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <Card className="flex flex-col items-center p-6 text-center shadow-md flex-1 min-w-0">
      <Avatar className="bg-muted" style={{ width: 80, height: 80 }}>
        <AvatarFallback className="text-3xl" style={{ fontSize: 32 }}>
          {icon}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <Separator className="mb-2 w-8 mx-auto" />
      <p className="text-muted-foreground text-sm">{description}</p>
    </Card>
  );
}

export default function AboutUsSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Who We Are</h2>
      <p className="text-muted-foreground text-center mb-8 max-w-xl">
        Driving the future of career development through innovation and insight.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center w-full items-stretch">
        {aboutItems.map((item) => (
          <AboutUsCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
