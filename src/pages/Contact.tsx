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
    toast.success("Thank you! We'll contact you within 24 hours.");
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
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to start your study abroad journey? Contact us today for a free consultation.
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
                        placeholder="Phone Number *"
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
                    
                    <div>
                      <Textarea
                        placeholder="Your Message (Optional)"
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
                    <div className="flex items-start gap-4 mb-6">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Kenya Office</h3>
                        <p className="text-muted-foreground">Nairobi, Kenya</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Phone: +254 123 456 789
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Email: kenya@edulink.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Uganda Office</h3>
                        <p className="text-muted-foreground">Kampala, Uganda</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Phone: +256 123 456 789
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Email: uganda@edulink.com
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
                      onClick={() => window.open("https://wa.me/254123456789", "_blank")}
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
