import { GraduationCap, FileCheck, Plane, DollarSign, RefreshCw, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: GraduationCap,
    title: "Career Counseling & Program Selection",
    description: "One-on-one sessions to match your strengths, academic background, and goals with the right programs and institutions.",
  },
  {
    icon: FileCheck,
    title: "Academic Document Assessment",
    description: "We evaluate all transcripts, certificates, and documents to ensure they meet Canadian and Malaysian admission standards.",
  },
  {
    icon: Shield,
    title: "School Application Support",
    description: "Full guidance through application forms, personal statements, essays, and university submissions.",
  },
  {
    icon: Plane,
    title: "Study Permit & Visa Guidance",
    description: "We support visa submissions through licensed immigration partners. Document checklists, interview prep, and personalized reviews.",
  },
  {
    icon: RefreshCw,
    title: "Pre-Departure Briefing",
    description: "Accommodation, travel, banking, healthcare, cultural adaptation, and what to expect upon arrival.",
  },
  {
    icon: DollarSign,
    title: "Ongoing Support",
    description: "We support students even after arrival: academic challenges, accommodation issues, and immigration pathways.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive, Free Study Abroad Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need — from choosing a program to landing on campus. All services 100% free.
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
