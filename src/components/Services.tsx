import { GraduationCap, FileCheck, Plane, DollarSign, RefreshCw, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: GraduationCap,
    title: "Undergraduate Admissions",
    description: "Bachelor's degree programs in Malaysia & Canada. Fast-track applications with 100% support.",
  },
  {
    icon: FileCheck,
    title: "Postgraduate Admissions",
    description: "Master's and PhD programs. Research assistance and scholarship guidance included.",
  },
  {
    icon: RefreshCw,
    title: "Transfer Programs",
    description: "Already studying? Transfer to Malaysia, Canada, UK or other destinations seamlessly.",
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description: "99% success rate. Complete documentation support and interview preparation.",
  },
  {
    icon: DollarSign,
    title: "Scholarship Guidance",
    description: "Find and apply for scholarships. Get fee waivers and financial aid support.",
  },
  {
    icon: Shield,
    title: "Free Application Support",
    description: "Zero application fees. We handle everything from documents to admission letters.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Study Abroad Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From application to arrival, we support you at every step of your international education journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
