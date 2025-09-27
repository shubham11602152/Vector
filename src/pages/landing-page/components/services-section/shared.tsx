import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { workshops, portfolioServices } from "./data";

export function WorkshopsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {workshops.map((w) => (
        <Card key={w.focusArea} className="h-full">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {w.focusArea}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-muted-foreground text-sm">
              {w.benefits}
            </div>
            <div className="text-xs font-medium text-primary">{w.audience}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function PortfolioServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {portfolioServices.map((s) => (
        <Card key={s.service} className="h-full">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{s.service}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-muted-foreground text-sm">
              {s.description}
            </div>
            <div className="text-xs font-medium text-primary">
              Investment: ₹{s.investment}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function WorkshopsTable() {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full text-sm md:text-base ">
        <thead>
          <tr className="bg-accent">
            <th className="p-3 text-left font-semibold">Focus Area</th>
            <th className="p-3 text-left font-semibold">
              Core Benefits &amp; Key Topics Covered
            </th>
            <th className="p-3 text-left font-semibold">Audience</th>
          </tr>
        </thead>
        <tbody>
          {workshops.map((w, index) => (
            <tr
              className={index < workshops.length - 1 ? "border-b" : ""}
              key={w.focusArea}
            >
              <td className="p-3 font-medium">{w.focusArea}</td>
              <td className="p-3">{w.benefits}</td>
              <td className="p-3">{w.audience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PortfolioServicesTable() {
  return (
    <div className="overflow-x-auto  border rounded-lg">
      <table className="min-w-full text-sm md:text-base">
        <thead>
          <tr className="bg-accent">
            <th className="p-3 text-left font-semibold">Service</th>
            <th className="p-3 text-left font-semibold">Description</th>
            <th className="p-3 text-left font-semibold">Investment (INR)</th>
          </tr>
        </thead>
        <tbody>
          {portfolioServices.map((s, index) => (
            <tr
              className={index < portfolioServices.length - 1 ? "border-b" : ""}
              key={s.service}
            >
              <td className="p-3 font-medium">{s.service}</td>
              <td className="p-3">{s.description}</td>
              <td className="p-3">{s.investment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ContactSalesButton({ label = "Contact Sales" }) {
  return (
    <Button asChild variant="secondary" className="w-fit">
      <a href="mailto:flatoutway@gmail.com" className="flex items-center gap-2">
        <Mail size={16} /> {label}
      </a>
    </Button>
  );
}
