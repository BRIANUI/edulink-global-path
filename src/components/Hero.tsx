import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students studying abroad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/60 to-background/40" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Gateway to World-Class Education in <span className="text-primary">Canada</span> & <span className="text-primary">Malaysia</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Free, end-to-end study-abroad guidance for African students. 15+ years of experience, 1,000+ students placed, and a 99% visa success rate.
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
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get a Free 3-Minute Review
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href="/comparison">
                  Compare Malaysia vs Canada →
                </a>
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:ml-auto w-full max-w-md">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Start Your Journey Today</h3>
              <p className="text-muted-foreground mb-6">Request a free 3-minute review</p>
              
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
                
                <Button type="submit" className="w-full h-12 bg-success hover:bg-success/90">
                  Get Free Consultation
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
