import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

              {/* Student Testimonials */}
              <Card className="border-border bg-primary/5">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    What Our Students Say
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Sanah Kassam */}
                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold text-primary">SK</span>
                          </div>
                          <div>
                            <h3 className="font-semibold">Sanah Kassam</h3>
                            <p className="text-sm text-muted-foreground">EduLink Student at Taylor's University</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground italic">
                          "Studying at Taylor's through EduLink has been an incredible experience. The campus facilities are world-class, and the international community makes you feel at home from day one."
                        </p>
                      </CardContent>
                    </Card>

                    {/* Ali */}
                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold text-primary">A</span>
                          </div>
                          <div>
                            <h3 className="font-semibold">Ali</h3>
                            <p className="text-sm text-muted-foreground">EduLink Student at Taylor's University</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground italic">
                          "The quality of education in Malaysia is exceptional, and the cost is so much more affordable than Western countries. EduLink made the entire application process smooth and stress-free."
                        </p>
                      </CardContent>
                    </Card>

                    {/* Generic Nottingham Student */}
                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold text-primary">M</span>
                          </div>
                          <div>
                            <h3 className="font-semibold">Maria Chen</h3>
                            <p className="text-sm text-muted-foreground">Business Student, Nottingham Malaysia</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground italic">
                          "Getting a UK degree while studying in Malaysia has been the best decision. The campus life is amazing, and I'm building connections with students from all over the world."
                        </p>
                      </CardContent>
                    </Card>

                    {/* EduLink Services */}
                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold text-primary">JM</span>
                          </div>
                          <div>
                            <h3 className="font-semibold">John Mwangi</h3>
                            <p className="text-sm text-muted-foreground">Engineering Student, INTI University</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground italic">
                          "The engineering facilities here rival those in Western universities. Thanks to EduLink, I'm getting top-tier education at a fraction of the cost my friends are paying abroad."
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-center text-muted-foreground mb-8">
                    Everything you need to know about studying in Malaysia
                  </p>
                  
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {/* General Questions */}
                    <AccordionItem value="item-1" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">What does EduLink Worldwide charge for services?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Absolutely nothing! All our services are 100% free of charge. We don't charge processing fees, administrative fees, or any other hidden costs.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">How long does the entire application process take?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        The complete process typically takes around 3 weeks to 1.5 months from application submission to visa approval. However, this can vary depending on the institution, program, and time of year. Some applications and/or visas may be processed faster, while others might take slightly longer.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">What intakes are available?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p className="mb-2">Malaysia offers multiple intakes throughout the year:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Fall Intake (August/September)</li>
                          <li>Winter Intake (January/February)</li>
                          <li>Spring/Summer Intake (May/June)</li>
                        </ul>
                        <p className="mt-2">Availability varies by institution and program.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">Do you support visa applications other than study permits?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        NO, we specialize exclusively in study permits for Malaysia. This focused approach allows us to maintain our industry-leading 99% approval rate and provide expert guidance. For Malaysia: We work hand in hand with the Universities Visa team and ensure timely submissions with accurate document preparation.
                      </AccordionContent>
                    </AccordionItem>

                    {/* Program & Academic Questions */}
                    <AccordionItem value="item-5" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">What levels of study do you support?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p className="mb-2">For Malaysia:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Foundation programs</li>
                          <li>Diploma programs</li>
                          <li>Bachelor's degree programs</li>
                          <li>Master's degree programs</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">Can I work while studying?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        In Malaysia: Due to low and affordable living costs compared to other study destinations, international students don't need to work in Malaysia. However, if they wish, they can work part-time in their designated institute/campus as student helpers.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">What are twinning programs in Malaysia?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p className="mb-2">Malaysian universities offer unique twinning programs that allow you to study in Malaysia while earning a degree from prestigious universities in the UK, Australia, or USA.</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li><strong>2+1 Program:</strong> Study 2 years in Malaysia + complete final year in UK/Australia</li>
                          <li><strong>2+2 Program:</strong> Study 2 years in Malaysia + complete your 3rd and 4th year in USA</li>
                        </ul>
                        <p className="mt-2">This provides world-class education at a fraction of the cost! This also helps you enter prestigious universities in UK/Australia/USA that may be difficult to enter into directly.</p>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Financial Questions */}
                    <AccordionItem value="item-8" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">Do I need to show proof of financial capability?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        No for Malaysia.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">What are the typical tuition costs?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <ul className="space-y-2">
                          <li><strong>Diploma programs:</strong> MYR 17,000 - 30,000 per year</li>
                          <li><strong>Bachelor's programs:</strong> MYR 25,000 - 60,000 per year</li>
                          <li><strong>Master's programs:</strong> MYR 30,000 - 70,000 per year</li>
                        </ul>
                        <p className="mt-2">Note: Education in Malaysia is approximately 70% cheaper than comparable programs in UK/Australia</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">What about accommodation in Malaysia?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p className="mb-2">International students in Malaysia typically choose from:</p>
                        <ol className="list-decimal list-inside space-y-1 ml-2">
                          <li>On-Campus Housing: University-managed dormitories and apartments</li>
                          <li>Off-Campus Apartments: Private rentals near campus</li>
                        </ol>
                        <p className="mt-2">Malaysian accommodation is generally affordable and located near campus facilities.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">What's the difference between my degree in Malaysia vs the degree done in UK?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        None, you will get the same degree. Nowhere on your degree does it say you studied in Malaysia—the degrees come from UK universities.
                      </AccordionContent>
                    </AccordionItem>

                    {/* Application Process */}
                    <AccordionItem value="item-12" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">What documents do I need for application?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p className="mb-2">Typical requirements include:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Valid passport</li>
                          <li>Academic transcripts and certificates</li>
                          <li>Most African countries don't need any English proficiency test</li>
                          <li>CV/Resume (for post grad applicants only)</li>
                          <li>Passport-size photographs</li>
                          <li>Health Declaration form</li>
                        </ul>
                        <p className="mt-2">Our team will provide a detailed checklist based on your chosen institution.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-13" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">Do I need IELTS or TOEFL?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Most institutions do NOT require proof of English proficiency as long as your high schooling was done in English.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-14" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">Can I apply to multiple universities?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        We have the power to do an evaluation of entry before application, meaning before you pay any application fees. Meaning we can book a seat before you apply. With this assurance we can then apply to the one University you prefer.
                      </AccordionContent>
                    </AccordionItem>

                    {/* Visa Questions */}
                    <AccordionItem value="item-15" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">Why is EduLink's visa success rate so high?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p className="mb-2">Our 99% success rate comes from:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Thorough document verification before submission</li>
                          <li>Expert knowledge of visa requirements</li>
                          <li>Personalized application review</li>
                          <li>Strong relationships with licensed immigration professionals</li>
                          <li>15+ years of experience</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-16" className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold text-left">Can my family visit me while I study?</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Yes! Family members can apply for visitor visas to visit you in Malaysia. We provide guidance on the process and required documentation.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-8 p-6 bg-primary/5 rounded-lg text-center">
                    <h3 className="font-semibold text-lg mb-2">Still Have Questions?</h3>
                    <p className="text-muted-foreground mb-4">
                      Can't find the answer you're looking for? Our expert counselors are ready to help!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span>📞 +254 731 367 057 / +254 704 595 341</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📧 info@edulinkmy.com</span>
                      </div>
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
