import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Target, Users, Lightbulb, HandshakeIcon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About EduLink Worldwide
              </h1>
              <p className="text-xl text-muted-foreground">
                Empowering African students to access affordable, world-class education abroad.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                EduLink Worldwide is East Africa's leading study-abroad consultancy, with over 15 years of experience and more than 1,000 successful student placements. We help students secure admissions in <strong className="text-foreground">Canada and Malaysia</strong> by providing free, personalized, and end-to-end support — from program selection to visa approval and pre-departure preparation.
              </p>
              <p>
                Our mission is to remove friction from the study-abroad process: unclear requirements, slow timelines, and application errors. We use a data-driven approach, experienced counselors, and direct university partnerships to give students the best chance of success.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Quote */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-xl italic text-foreground mb-4">
                "I bring the combined experience of being an international student and a university admissions officer. I understand the challenges and opportunities, and I'm committed to guiding each student with personalized care."
              </blockquote>
              <p className="text-muted-foreground font-medium">— Sandip, Country Manager</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
              {[
                { number: "1,000+", label: "Students Placed" },
                { number: "99%", label: "Visa Success Rate" },
                { number: "15+", label: "Years of Experience" },
                { number: "2", label: "African Offices" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Values
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Excellence",
                    description: "We strive for the highest standards in every service we provide.",
                  },
                  {
                    icon: Heart,
                    title: "Integrity",
                    description: "Honest, transparent guidance with no hidden fees or false promises.",
                  },
                  {
                    icon: Users,
                    title: "Student-Centric",
                    description: "Every decision we make puts our students' success first.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation",
                    description: "We continuously improve our processes to serve students better.",
                  },
                  {
                    icon: HandshakeIcon,
                    title: "Partnership",
                    description: "Strong relationships with universities and immigration partners.",
                  },
                  {
                    icon: Target,
                    title: "Results-Driven",
                    description: "99% visa success rate and 1,000+ successful placements speak for us.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6 text-center">
                      <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
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

export default About;
