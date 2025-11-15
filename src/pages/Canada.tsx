import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, DollarSign, Briefcase, Globe, BookOpen, MapPin } from "lucide-react";

const Canada = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Study in Canada — Global Opportunities & Work Experience
              </h1>
              <p className="text-xl text-muted-foreground">
                Top-ranked universities, multicultural campuses, Co-op programs, and PGWP up to 3 years.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  Canada offers world-class education, a welcoming environment, and strong post-study work opportunities. Students can work part-time during studies and full-time during breaks. After graduation, they can apply for the <strong className="text-foreground">Post-Graduation Work Permit (PGWP)</strong> — the most reliable pathway to Canadian permanent residency.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid md:grid-cols-3 gap-6 py-8">
                <Card className="border-border">
                  <CardContent className="pt-6 text-center">
                    <Briefcase className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Work While You Study</h3>
                    <p className="text-sm text-muted-foreground">Part-time during term, full-time during breaks</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6 text-center">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">PGWP Available</h3>
                    <p className="text-sm text-muted-foreground">Work permit up to 3 years after graduation</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6 text-center">
                    <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">PR Pathway</h3>
                    <p className="text-sm text-muted-foreground">Most reliable path to permanent residency</p>
                  </CardContent>
                </Card>
              </div>

              {/* Popular Programs */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Popular Programs
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Business & Commerce</li>
                      <li>• Engineering</li>
                      <li>• IT & Software Development</li>
                    </ul>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Nursing & Health Sciences</li>
                      <li>• Hospitality Management</li>
                      <li>• Many more disciplines</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Tuition & Living Costs */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Tuition Fees (Annual)
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="font-medium">Diploma Programs</span>
                      <span className="text-muted-foreground">CAD 12,000 – 18,000 / year</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="font-medium">Bachelor's Programs</span>
                      <span className="text-muted-foreground">CAD 15,000 – 35,000 / year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Master's Programs</span>
                      <span className="text-muted-foreground">CAD 18,000 – 40,000 / year</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Living Costs</span>
                      <span className="text-muted-foreground">CAD 12,000 – 15,000 / year</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visa Requirements */}
              <Card className="border-border bg-accent/5">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-accent" />
                    Visa Requirements
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Proof of Funds Required</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Approximately <strong>CAD 43,000</strong> must be held for at least 4 months before application.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        This covers tuition and living expenses for the first year.
                      </p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-foreground">
                        We provide full financial documentation guidance to ensure your visa application meets all requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="text-center pt-8">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => window.open("https://wa.me/254704595341?text=Hi%20EduLink%2C%20I%27m%20interested%20in%20studying%20in%20Canada.", "_blank")}
                >
                  Book a Canada Consultation →
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Canada;
