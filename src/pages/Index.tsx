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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-card"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
              Trusted by <span className="gradient-text">Thousands</span> of Students
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2 animate-fade-up">
                <div className="text-5xl md:text-6xl font-black gradient-text">15+</div>
                <p className="text-base text-muted-foreground font-semibold">Years Experience</p>
              </div>
              <div className="space-y-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-5xl md:text-6xl font-black gradient-text-accent">1,000+</div>
                <p className="text-base text-muted-foreground font-semibold">Students Placed</p>
              </div>
              <div className="space-y-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-5xl md:text-6xl font-black gradient-text-success">99%</div>
                <p className="text-base text-muted-foreground font-semibold">Visa Success Rate</p>
              </div>
              <div className="space-y-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="text-5xl md:text-6xl font-black text-warning">100%</div>
                <p className="text-base text-muted-foreground font-semibold">Free Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Why Choose Us - Lead Generation Focus */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Why <span className="gradient-text">1,000+ Students</span> Trust <span className="gradient-text-accent">EduLink Worldwide</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Your success is our mission. Here's what makes us <span className="text-primary font-bold">different</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-l-4 border-success glass-card hover:shadow-[var(--shadow-glow-success)] transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-10 w-10 text-success mb-4 animate-bounce-in" />
                  <h3 className="text-2xl font-bold mb-3 text-success">Completely Free Service</h3>
                  <p className="text-muted-foreground text-base">
                    No hidden fees, no processing charges. We're paid by universities, not by you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-warning glass-card hover:shadow-[0_0_60px_hsl(var(--warning)_/_0.5)] transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="pt-6">
                  <Trophy className="h-10 w-10 text-warning mb-4 animate-bounce-in" style={{ animationDelay: "0.1s" }} />
                  <h3 className="text-2xl font-bold mb-3 text-warning">Industry-Leading Success Rate</h3>
                  <p className="text-muted-foreground text-base">
                    99% visa approval rate backed by 15+ years of expertise and licensed professionals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary glass-card hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="pt-6">
                  <Users className="h-10 w-10 text-primary mb-4 animate-bounce-in" style={{ animationDelay: "0.2s" }} />
                  <h3 className="text-2xl font-bold mb-3 text-primary">Personalized Guidance</h3>
                  <p className="text-muted-foreground text-base">
                    One-on-one counseling tailored to your academic goals and financial situation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-accent glass-card hover:shadow-[var(--shadow-glow-accent)] transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="pt-6">
                  <Globe className="h-10 w-10 text-accent mb-4 animate-bounce-in" style={{ animationDelay: "0.3s" }} />
                  <h3 className="text-2xl font-bold mb-3 text-accent">End-to-End Support</h3>
                  <p className="text-muted-foreground text-base">
                    From university selection to visa approval to pre-departure briefing—we handle it all.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-4 animate-fade-up">
              <Button
                size="lg"
                variant="glow"
                className="text-lg px-10"
                onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Your Free 3-Minute Review <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-base text-muted-foreground font-medium">
                Join <span className="text-primary font-bold">1,000+ successful students</span>. Get started in less than 2 minutes. ⚡
              </p>
            </div>
          </div>
        </div>
      </section>

      <Universities />
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10 animated-gradient"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 animate-fade-up">
              Ready to Start Your <span className="gradient-text">Journey</span>?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-medium animate-fade-up">
              Get a <span className="text-primary font-bold">free 3-minute</span> profile review and discover your <span className="text-accent font-bold">best study abroad</span> options. 🌍
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-scale-in">
              <Button
                size="lg"
                variant="glow"
                className="text-lg"
                onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Free Consultation ✨
              </Button>
              <Button
                size="lg"
                variant="glass"
                asChild
              >
                <a href="tel:+254731367057">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now 📞
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-base text-muted-foreground font-medium animate-fade-up">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@edulinkmy.com" className="hover:text-primary transition-colors">
                  info@edulinkmy.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
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
