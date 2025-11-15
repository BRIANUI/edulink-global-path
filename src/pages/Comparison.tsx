import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, ArrowRight, DollarSign, GraduationCap, Briefcase } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Comparison = () => {
  const [budget, setBudget] = useState<string>("");
  const [programType, setProgramType] = useState<string>("");
  const [careerGoal, setCareerGoal] = useState<string>("");
  const [showResults, setShowResults] = useState(false);

  const handleCompare = () => {
    if (budget && programType && careerGoal) {
      setShowResults(true);
    }
  };

  const getRecommendation = () => {
    if (!budget || !programType || !careerGoal) return null;

    const budgetScore = {
      malaysia: 0,
      canada: 0
    };

    // Budget scoring
    if (budget === "low") {
      budgetScore.malaysia = 10;
      budgetScore.canada = 3;
    } else if (budget === "medium") {
      budgetScore.malaysia = 8;
      budgetScore.canada = 6;
    } else {
      budgetScore.malaysia = 6;
      budgetScore.canada = 8;
    }

    // Career goal scoring
    if (careerGoal === "pr") {
      budgetScore.canada += 10;
      budgetScore.malaysia += 2;
    } else if (careerGoal === "international") {
      budgetScore.malaysia += 8;
      budgetScore.canada += 8;
    } else if (careerGoal === "return-home") {
      budgetScore.malaysia += 7;
      budgetScore.canada += 6;
    } else if (careerGoal === "work-abroad") {
      budgetScore.canada += 9;
      budgetScore.malaysia += 5;
    }

    return budgetScore.canada > budgetScore.malaysia ? "canada" : "malaysia";
  };

  const recommendation = getRecommendation();

  const comparisonData = [
    {
      category: "Annual Tuition (Bachelor's)",
      malaysia: "MYR 25,000 - 60,000 ($5,500 - $13,200)",
      canada: "CAD 15,000 - 35,000 ($11,000 - $26,000)",
      malaysiaWins: budget === "low" || budget === "medium"
    },
    {
      category: "Living Costs per Year",
      malaysia: "MYR 12,000 - 24,000 ($2,600 - $5,300)",
      canada: "CAD 12,000 - 15,000 ($8,800 - $11,000)",
      malaysiaWins: true
    },
    {
      category: "Work While Studying",
      malaysia: "Part-time during breaks (20hrs/week)",
      canada: "Part-time during term (20hrs/week), full-time during breaks",
      malaysiaWins: false
    },
    {
      category: "Post-Study Work Permit",
      malaysia: "Limited options",
      canada: "PGWP up to 3 years",
      malaysiaWins: false
    },
    {
      category: "Pathway to PR",
      malaysia: "Very limited",
      canada: "Strong pathway through Express Entry",
      malaysiaWins: false
    },
    {
      category: "English Proficiency",
      malaysia: "IELTS often waived for English-medium students",
      canada: "IELTS/TOEFL required (6.0-6.5+)",
      malaysiaWins: true
    },
    {
      category: "Visa Processing Time",
      malaysia: "3 weeks - 1.5 months",
      canada: "4 - 12 weeks",
      malaysiaWins: true
    },
    {
      category: "Twinning Programs",
      malaysia: "Available (UK/USA/AUS degrees in Malaysia)",
      canada: "Not applicable",
      malaysiaWins: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Malaysia vs Canada: Which is Right for You?
              </h1>
              <p className="text-xl text-muted-foreground">
                Get personalized recommendations based on your budget, program interests, and career goals.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Tool */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">Find Your Best Fit</CardTitle>
                  <p className="text-muted-foreground">Answer three quick questions to get your personalized recommendation</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      What's your annual budget (tuition + living)?
                    </label>
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Under $15,000 USD/year</SelectItem>
                        <SelectItem value="medium">$15,000 - $30,000 USD/year</SelectItem>
                        <SelectItem value="high">Over $30,000 USD/year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      What program are you interested in?
                    </label>
                    <Select value={programType} onValueChange={setProgramType}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select program level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      What's your primary career goal?
                    </label>
                    <Select value={careerGoal} onValueChange={setCareerGoal}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your career goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pr">Settle abroad permanently (PR/citizenship)</SelectItem>
                        <SelectItem value="work-abroad">Work abroad for 3-5 years</SelectItem>
                        <SelectItem value="international">Gain international experience</SelectItem>
                        <SelectItem value="return-home">Return home after studies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={handleCompare}
                    disabled={!budget || !programType || !careerGoal}
                    className="w-full h-12 bg-accent hover:bg-accent/90"
                  >
                    Compare & Get Recommendation
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              {showResults && recommendation && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Recommendation Card */}
                  <Card className={`border-2 ${recommendation === "malaysia" ? "border-primary" : "border-accent"}`}>
                    <CardContent className="pt-6">
                      <div className="text-center space-y-4">
                        <div className={`inline-flex px-4 py-2 rounded-full ${recommendation === "malaysia" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"} font-semibold`}>
                          Recommended for You
                        </div>
                        <h2 className="text-3xl font-bold">
                          Study in {recommendation === "malaysia" ? "Malaysia" : "Canada"}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                          {recommendation === "malaysia" 
                            ? "Based on your budget and goals, Malaysia offers excellent value with quality education at 70% lower cost. You'll get international degrees through twinning programs and a multicultural experience."
                            : "Based on your goals, Canada is ideal for you. With PGWP up to 3 years and strong PR pathways, Canada offers the best long-term opportunities for settling abroad and career growth."
                          }
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center pt-4">
                          <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                            <NavLink to={recommendation === "malaysia" ? "/malaysia" : "/canada"}>
                              Learn More About {recommendation === "malaysia" ? "Malaysia" : "Canada"}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </NavLink>
                          </Button>
                          <Button 
                            size="lg" 
                            variant="outline"
                            onClick={() => window.open(`https://wa.me/${recommendation === "malaysia" ? "254777367057" : "254704595341"}?text=Hi%20EduLink%2C%20I%27m%20interested%20in%20studying%20in%20${recommendation === "malaysia" ? "Malaysia" : "Canada"}.`, "_blank")}
                          >
                            Get Free Consultation
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Detailed Comparison Table */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-center">Detailed Comparison</h3>
                    <div className="space-y-3">
                      {comparisonData.map((item, index) => (
                        <Card key={index} className="border-border">
                          <CardContent className="pt-6">
                            <div className="grid md:grid-cols-3 gap-4 items-center">
                              <div className="font-semibold">{item.category}</div>
                              <div className="flex items-start gap-2">
                                {item.malaysiaWins ? (
                                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                )}
                                <div>
                                  <div className="text-sm font-medium mb-1">Malaysia</div>
                                  <div className="text-sm text-muted-foreground">{item.malaysia}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                {!item.malaysiaWins ? (
                                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                )}
                                <div>
                                  <div className="text-sm font-medium mb-1">Canada</div>
                                  <div className="text-sm text-muted-foreground">{item.canada}</div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Still Unsure CTA */}
                  <Card className="border-border bg-secondary/50">
                    <CardContent className="pt-6 text-center">
                      <h3 className="text-xl font-bold mb-2">Still unsure which is right for you?</h3>
                      <p className="text-muted-foreground mb-6">
                        Book a free consultation with our expert advisors. We'll assess your unique situation and help you make the best choice.
                      </p>
                      <Button 
                        size="lg"
                        className="bg-accent hover:bg-accent/90"
                        onClick={() => window.open("https://wa.me/254731367057?text=Hi%20EduLink%2C%20I%27d%20like%20help%20choosing%20between%20Malaysia%20and%20Canada.", "_blank")}
                      >
                        Get Free Consultation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Initial State - Quick Facts */}
              {!showResults && (
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">🇲🇾</span>
                        Malaysia at a Glance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">70% lower cost than Western countries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Earn UK/USA/AUS degrees through twinning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Fast visa processing (3 weeks - 1.5 months)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Multicultural, English-speaking environment</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">🇨🇦</span>
                        Canada at a Glance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">PGWP up to 3 years after graduation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Clear pathway to permanent residency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Work while studying (20hrs/week)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Top-ranked universities globally</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Comparison;
