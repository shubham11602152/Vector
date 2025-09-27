import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  WorkshopsTable,
  PortfolioServicesTable,
  ContactSalesButton,
  WorkshopsGrid,
  PortfolioServicesGrid,
} from "./shared";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Table } from "lucide-react";
import { useState } from "react";

export function ServicesSection() {
  const [serviceLayout, setServiceLayout] = useState<"table" | "grid">("grid");

  const ToggleButtons = () => (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-md bg-muted p-1 border">
        <Button
          variant={serviceLayout === "table" ? "default" : "ghost"}
          size="icon"
          aria-label="Table View"
          onClick={() => setServiceLayout("table")}
          className={serviceLayout === "table" ? "shadow-sm" : ""}
        >
          <Table className="w-5 h-5" />
        </Button>
        <Button
          variant={serviceLayout === "grid" ? "default" : "ghost"}
          size="icon"
          aria-label="Grid View"
          onClick={() => setServiceLayout("grid")}
          className={serviceLayout === "grid" ? "shadow-sm" : ""}
        >
          <LayoutGrid className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-muted py-16 px-4 md:px-8" id="services">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our Services:{" "}
            <span className="text-primary">
              Define Your Direction with Vector
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Vector, we believe that clarity is the catalyst for success. Our
            structured programs and individualized guidance are designed to help
            students, graduates, and professionals align their unique strengths
            with the right opportunities, ensuring every step you take is in the
            right direction.
          </p>
        </div>
        <ToggleButtons />
        {/* Structured Clarity Workshops */}
        <div className="mb-12">
          <Card className="mb-6 shadow-none border">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-semibold">
                Structured Clarity Workshops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Our expert-led workshops deliver focused, high-impact training
                designed for specific milestones—from academic transitions to
                corporate performance.
              </p>
              {serviceLayout === "table" ? (
                <WorkshopsTable />
              ) : (
                <WorkshopsGrid />
              )}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6">
                <span className="text-sm text-muted-foreground">
                  For Workshop Scheduling and Pricing:
                </span>
                <ContactSalesButton />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personalized Guidance & Portfolio Services */}
        <div>
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-semibold">
                Personalized Guidance &amp; Portfolio Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                For those requiring deeper, one-on-one strategy sessions or
                certified documentation of their career direction, we offer
                premium, personalized packages.
              </p>
              {serviceLayout === "table" ? (
                <PortfolioServicesTable />
              ) : (
                <PortfolioServicesGrid />
              )}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6">
                <span className="text-sm text-muted-foreground">
                  We are committed to providing the right guidance to ensure
                  your investment in clarity pays lifelong dividends.
                </span>
                <ContactSalesButton />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
