import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default function TestimonialSection() {
  return (
    <>
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
    </>
  );
}
