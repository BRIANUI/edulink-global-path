import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Universities from "@/components/Universities";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Globe, Trophy, ArrowRight, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Trust Indicators Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">15+</div>
                <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">1,000+</div>
                <p className="text-sm text-muted-foreground font-medium">Students Placed</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">99%</div>
                <p className="text-sm text-muted-foreground font-medium">Visa Success Rate</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground font-medium">Free Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Why Choose Us - Lead Generation Focus */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why 1,000+ Students Trust EduLink Worldwide
              </h2>
              <p className="text-xl text-muted-foreground">
                Your success is our mission. Here's what makes us different.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-8 w-8 text-success mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Completely Free Service</h3>
                  <p className="text-muted-foreground">
                    No hidden fees, no processing charges. We're paid by universities, not by you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Trophy className="h-8 w-8 text-success mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Industry-Leading Success Rate</h3>
                  <p className="text-muted-foreground">
                    99% visa approval rate backed by 15+ years of expertise and licensed professionals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-success mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
                  <p className="text-muted-foreground">
                    One-on-one counseling tailored to your academic goals and financial situation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Globe className="h-8 w-8 text-success mb-4" />
                  <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
                  <p className="text-muted-foreground">
                    From university selection to visa approval to pre-departure briefing—we handle it all.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
                onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Your Free 3-Minute Review <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Join 1,000+ successful students. Get started in less than 2 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Universities />
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free 3-minute profile review and discover your best study abroad options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-success hover:bg-success/90 text-lg"
                onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href="tel:+254731367057">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@edulinkmy.com" className="hover:text-foreground transition-colors">
                  info@edulinkmy.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+254 731 367 057 / +254 704 595 341</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
