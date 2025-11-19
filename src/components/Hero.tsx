import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    program: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.country || !formData.program) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Thank you! We'll contact you within 24 hours.");
    setFormData({ name: "", country: "", program: "" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animated-gradient opacity-20"></div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students studying abroad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/70 to-background/50" />
      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Your Gateway to <span className="gradient-text">World-Class Education</span> in <span className="gradient-text-accent">Canada</span> & <span className="gradient-text-success">Malaysia</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                <span className="text-primary font-bold">Free, end-to-end</span> study-abroad guidance for African students. <span className="text-success font-bold">15+ years</span> of experience, <span className="text-accent font-bold">1,000+</span> students placed, and a <span className="text-warning font-bold">99% visa</span> success rate.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span className="text-sm font-medium">Free Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span className="text-sm font-medium">99% Visa Success Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span className="text-sm font-medium">Career-Focused Placements</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="glow"
                className="text-lg"
                onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get a Free 3-Minute Review ✨
              </Button>
              <Button
                size="lg"
                variant="glass"
                className="text-lg"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:ml-auto w-full max-w-md animate-fade-in">
            <div className="glass-card rounded-2xl p-8 shadow-2xl hover:shadow-[var(--shadow-colorful)] transition-all duration-300 hover:scale-105 border-l-4 border-primary">
              <h3 className="text-3xl font-black mb-2 gradient-text">Start Your Journey Today</h3>
              <p className="text-muted-foreground mb-6 font-medium">Request a free 3-minute review ⚡</p>
              
              <form onSubmit={handleSubmit} className="space-y-4" id="inquiry-form">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => setFormData({ ...formData, country: value })}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select Your Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kenya">Kenya</SelectItem>
                      <SelectItem value="uganda">Uganda</SelectItem>
                      <SelectItem value="tanzania">Tanzania</SelectItem>
                      <SelectItem value="nigeria">Nigeria</SelectItem>
                      <SelectItem value="ghana">Ghana</SelectItem>
                      <SelectItem value="ethiopia">Ethiopia</SelectItem>
                      <SelectItem value="other">Other African Country</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Select
                    value={formData.program}
                    onValueChange={(value) => setFormData({ ...formData, program: value })}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Program Interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">Undergraduate (Bachelor's)</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate (Master's/PhD)</SelectItem>
                      <SelectItem value="transfer">Transfer Program</SelectItem>
                      <SelectItem value="visa">Visa Assistance Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  variant="glow"
                  size="lg"
                  className="w-full"
                >
                  Get Free Consultation 🚀
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                We respond within 24 hours. No hidden charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
