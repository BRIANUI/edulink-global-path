import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GraduationCap, DollarSign, Clock, Globe, BookOpen, Award, Play } from "lucide-react";
import intiFacade from "@/assets/malaysia/inti-full-facade.webp";
import medicalSurgery from "@/assets/malaysia/medical-surgery.webp";
import biomedicalStudents from "@/assets/malaysia/biomedical-students.webp";
import businessMeeting from "@/assets/malaysia/business-meeting.webp";
import engineeringLab from "@/assets/malaysia/engineering-lab.webp";
import sportsFacilities from "@/assets/malaysia/sports-facilities.webp";
import dentalClinic from "@/assets/malaysia/dental-clinic.webp";
import campusStudy from "@/assets/malaysia/campus-study.webp";

const Malaysia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Study in Malaysia — High Quality, Lower Cost
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  English-taught programs, modern campuses, and international degrees at 70% lower cost.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={intiFacade} 
                  alt="Modern Malaysian university campus - INTI International University with world-class facilities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  Malaysia offers world-class education at a fraction of Western costs. Programs are delivered in English, student life is affordable, and universities offer unique <strong className="text-foreground">twinning programs</strong> where you can study in Malaysia but earn a UK, USA, or Australian degree.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid md:grid-cols-3 gap-6 py-8">
                <Card className="border-border">
                  <CardContent className="pt-6 text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Visa Timeline</h3>
                    <p className="text-sm text-muted-foreground">3 weeks to 1.5 months with correct documentation</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6 text-center">
                    <DollarSign className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Affordable Tuition</h3>
                    <p className="text-sm text-muted-foreground">70% lower than Western countries</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6 text-center">
                    <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">English Taught</h3>
                    <p className="text-sm text-muted-foreground">All programs delivered in English</p>
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
                      <li>• Business & Management</li>
                      <li>• Computer Science & IT</li>
                      <li>• Engineering</li>
                    </ul>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Medicine & Health Sciences</li>
                      <li>• Hospitality & Tourism</li>
                      <li>• Many more disciplines</li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-medium mb-2">Program Levels Available:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Foundation", "Diploma", "Bachelor's", "Master's"].map((level) => (
                        <span key={level} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Twinning Programs */}
              <Card className="border-border bg-accent/5">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Award className="h-6 w-6 text-accent" />
                    Twinning Programs
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Earn UK, Australia, or USA degrees while studying in Malaysia at a fraction of the cost.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">3+0 / 4+0 Programs</h3>
                      <p className="text-sm text-muted-foreground">
                        Full UK/Australia/USA degree completed entirely in Malaysia
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">2+1 / 2+2 Programs</h3>
                      <p className="text-sm text-muted-foreground">
                        Study part of your degree in Malaysia, complete it in the partner country
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Campus Life & Facilities */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    World-Class Campuses & Student Life
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <img 
                          src={medicalSurgery} 
                          alt="Medical students in modern surgery training facility in Malaysia" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-center">State-of-the-Art Medical Facilities</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <img 
                          src={engineeringLab} 
                          alt="Engineering students working on practical projects in Malaysian university lab" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-center">Advanced Engineering Labs</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <img 
                          src={sportsFacilities} 
                          alt="Modern sports facilities and recreational areas at Malaysian universities" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-center">World-Class Sports Facilities</h3>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={biomedicalStudents} 
                          alt="International students collaborating on biomedical studies in Malaysia" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-center">Hands-On Learning Experience</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={campusStudy} 
                          alt="Diverse student community studying together on modern Malaysian campus" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-center">Vibrant Campus Community</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tuition Fees */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Tuition Fees (Annual)
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="font-medium">Diploma Programs</span>
                      <span className="text-muted-foreground">MYR 17,000 – 30,000 / year</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="font-medium">Bachelor's Programs</span>
                      <span className="text-muted-foreground">MYR 25,000 – 60,000 / year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Master's Programs</span>
                      <span className="text-muted-foreground">MYR 30,000 – 70,000 / year</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Student Life Videos */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Play className="h-6 w-6 text-primary" />
                    Experience Student Life in Malaysia
                  </h2>
                  <div className="space-y-8">
                    {/* Video 1 */}
                    <div>
                      <h3 className="font-semibold mb-3">Campus Life at University of Nottingham Malaysia</h3>
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          className="w-full h-full rounded-lg"
                          src="https://www.youtube.com/embed/Zsb7dizFRFs"
                          title="Campus Life at University of Nottingham Malaysia"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </AspectRatio>
                    </div>

                    {/* Video 2 */}
                    <div>
                      <h3 className="font-semibold mb-3">Life as a Taylorian - Sanah Kassam, EduLink Student</h3>
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          className="w-full h-full rounded-lg"
                          src="https://www.youtube.com/embed/BIW9Y7Ol-G4"
                          title="Life as a Taylorian - EduLink Student Sanah Kassam"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </AspectRatio>
                    </div>

                    {/* Video 3 */}
                    <div>
                      <h3 className="font-semibold mb-3">Taylor's University - EduLink Student Ali Interviews Students</h3>
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          className="w-full h-full rounded-lg"
                          src="https://www.youtube.com/embed/SYuhimEx8wA"
                          title="Taylor's University - EduLink Student Ali Interviewing Students"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="text-center pt-8">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => window.open("https://wa.me/254777367057?text=Hi%20EduLink%2C%20I%27m%20interested%20in%20studying%20in%20Malaysia.", "_blank")}
                >
                  Book a Malaysia Consultation →
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

export default Malaysia;
