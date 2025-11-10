import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, RefreshCw, CheckCircle2 } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Undergraduate Programs",
    description: "Bachelor's degree programs in Malaysia & Canada",
    features: [
      "3-4 year degree programs",
      "Wide range of disciplines",
      "Affordable tuition fees",
      "Work while you study options",
      "Pathway programs available",
    ],
    destinations: ["Malaysia", "Canada"],
  },
  {
    icon: BookOpen,
    title: "Postgraduate Programs",
    description: "Master's and PhD programs with research opportunities",
    features: [
      "1-2 year Master's programs",
      "Research-based PhD options",
      "Scholarship opportunities",
      "Industry connections",
      "Career advancement focus",
    ],
    destinations: ["Malaysia", "Canada"],
  },
  {
    icon: RefreshCw,
    title: "Transfer Programs",
    description: "Seamless transfers to top institutions",
    features: [
      "Credit transfer assistance",
      "Malaysia to Canada transfers",
      "UK to Canada transfers",
      "Program equivalency evaluation",
      "Reduced study duration",
    ],
    destinations: ["Malaysia", "Canada", "UK"],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Study Abroad Programs
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose from a wide range of undergraduate, postgraduate, and transfer programs in Malaysia and Canada.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="flex flex-col border-border">
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl w-fit">
                      <program.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Available in:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.destinations.map((dest, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {dest}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button
                        className="w-full mt-6 bg-accent hover:bg-accent/90"
                        onClick={() => window.open("https://wa.me/254123456789", "_blank")}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Simple 4-Step Application Process
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    step: "01",
                    title: "Free Consultation",
                    description: "Book a consultation with our expert advisors to discuss your goals and options.",
                  },
                  {
                    step: "02",
                    title: "Document Preparation",
                    description: "We guide you through document collection and help prepare your application.",
                  },
                  {
                    step: "03",
                    title: "University Application",
                    description: "We submit your applications and follow up with universities on your behalf.",
                  },
                  {
                    step: "04",
                    title: "Visa & Departure",
                    description: "Complete visa assistance and pre-departure orientation for a smooth start.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="text-5xl font-bold text-primary/20">
                          {item.step}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
