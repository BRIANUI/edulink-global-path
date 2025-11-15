import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", country: "", program: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get a Free 3-Minute Review
              </h1>
              <p className="text-xl text-muted-foreground">
                Our team will assess your profile and recommend the best programs and pathways.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone / WhatsApp *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => setFormData({ ...formData, country: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Country of Interest *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="malaysia">Malaysia</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="unsure">Unsure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Select
                        value={formData.program}
                        onValueChange={(value) => setFormData({ ...formData, program: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Current Education Level *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Textarea
                        placeholder="Tell us your goals and current status"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-32"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full h-12 bg-success hover:bg-success/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions? Reach out to us through any of these channels. We respond within 24 hours.
                  </p>
                </div>

                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">EduLink Worldwide</h3>
                        <p className="text-muted-foreground">Khrishna Centre, E4, 3rd Floor</p>
                        <p className="text-muted-foreground">Woodvale Grove, Westlands, Nairobi</p>
                        <p className="text-sm text-muted-foreground mt-3">
                          <strong>Main:</strong> +254 731 367 057
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Canada:</strong> +254 704 595 341
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Malaysia:</strong> +254 777 367 057 / +254 727 367 057
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Email:</strong> info@edulinkmy.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-accent/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <MessageCircle className="h-8 w-8 text-accent" />
                      <div>
                        <h3 className="font-semibold">Prefer WhatsApp?</h3>
                        <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-accent hover:bg-accent/90"
                      onClick={() => window.open("https://wa.me/254731367057?text=Hi%20EduLink%2C%20I%27m%20interested%20in%20studying%20abroad.", "_blank")}
                    >
                      Start WhatsApp Chat
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-border text-center">
                    <CardContent className="pt-6">
                      <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">Call Anytime</p>
                      <p className="text-xs text-muted-foreground">Mon-Sat 9AM-6PM</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border text-center">
                    <CardContent className="pt-6">
                      <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">Email Us</p>
                      <p className="text-xs text-muted-foreground">24hr response time</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
