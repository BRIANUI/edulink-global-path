import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award, Heart } from "lucide-react";

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
                About EduLink
              </h1>
              <p className="text-xl text-muted-foreground">
                Empowering African students to achieve their international education dreams since 2015.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To make quality international education accessible and affordable for every African student, 
                    providing comprehensive support from application to graduation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To become Africa's most trusted education consultancy, known for exceptional service, 
                    transparency, and life-changing outcomes for students and their families.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
              {[
                { number: "500+", label: "Students Placed" },
                { number: "99%", label: "Visa Success Rate" },
                { number: "15+", label: "Partner Universities" },
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

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose EduLink?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "100% Free Application Support",
                    description: "No hidden charges. We handle all application fees and paperwork at no cost to you.",
                  },
                  {
                    title: "99% Visa Success Rate",
                    description: "Our expert team has helped hundreds of students secure their visas successfully.",
                  },
                  {
                    title: "Expert Counselors",
                    description: "Certified education consultants with deep knowledge of Malaysian and Canadian systems.",
                  },
                  {
                    title: "Trusted Partnerships",
                    description: "Direct partnerships with 15+ top universities ensure priority processing.",
                  },
                  {
                    title: "End-to-End Support",
                    description: "From first consultation to airport pickup, we're with you every step of the way.",
                  },
                  {
                    title: "Two African Offices",
                    description: "Local presence in Kenya and Uganda means personalized, accessible service.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Offices
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Kenya Office</h3>
                        <p className="text-muted-foreground mb-2">Nairobi, Kenya</p>
                        <p className="text-sm text-muted-foreground mb-1">
                          Phone: +254 123 456 789
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Email: kenya@edulink.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Uganda Office</h3>
                        <p className="text-muted-foreground mb-2">Kampala, Uganda</p>
                        <p className="text-sm text-muted-foreground mb-1">
                          Phone: +256 123 456 789
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Email: uganda@edulink.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
