import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQ = () => {
  const malaysiaFAQs = [
    {
      question: "What does EduLink charge for its services?",
      answer: "All our services are 100% FREE. We do not charge students for consultations, applications, document processing, or visa guidance. Our services are funded by our partner universities."
    },
    {
      question: "How long does the application process take?",
      answer: "The complete process from application submission to visa approval typically takes 3 weeks to 1.5 months with correct documentation."
    },
    {
      question: "What intakes are available?",
      answer: "Malaysian universities typically offer 3 intakes per year: January/February, May/June, and September/October. Some programs may have additional intakes."
    },
    {
      question: "Do you support visas other than study permits?",
      answer: "Yes, we provide guidance for student visas (study permits), and we can also assist with visa extensions and other related immigration matters through our licensed partners."
    },
    {
      question: "What levels of study are offered?",
      answer: "We support applications for Foundation programs, Diploma, Bachelor's degrees, Master's degrees, and PhD programs across all disciplines."
    },
    {
      question: "Can I work while studying in Malaysia?",
      answer: "Yes, international students in Malaysia can work part-time (up to 20 hours per week) during semester breaks and holidays with proper authorization from their institution and immigration."
    },
    {
      question: "What are twinning programs?",
      answer: "Twinning programs allow you to earn UK, Australian, or USA degrees while studying in Malaysia. 3+0/4+0 programs are completed entirely in Malaysia, while 2+1/2+2 programs involve studying part of the degree in Malaysia and completing it in the partner country."
    },
    {
      question: "Do I need proof of funds for a Malaysian student visa?",
      answer: "Yes, proof of funds is required to show you can cover tuition and living expenses. The exact amount varies by program and duration. We provide detailed guidance on financial documentation."
    },
    {
      question: "What are the tuition fees in Malaysia?",
      answer: "Diploma programs: MYR 17,000-30,000/year, Bachelor's: MYR 25,000-60,000/year, Master's: MYR 30,000-70,000/year. Fees vary by institution and program."
    },
    {
      question: "What accommodation options are available?",
      answer: "Students can choose from on-campus hostels, university-affiliated accommodations, or private rentals. Monthly costs range from MYR 300-800 depending on location and facilities."
    },
    {
      question: "What documents are required for application?",
      answer: "Typically: academic transcripts and certificates, passport copy, passport-sized photos, English language test results (if required), personal statement, and reference letters. Requirements vary by program level."
    },
    {
      question: "Do I need IELTS to study in Malaysia?",
      answer: "Many Malaysian universities accept students without IELTS if they completed their previous education in English. However, some programs may require English proficiency tests. We assess your specific situation during consultation."
    }
  ];

  const canadaFAQs = [
    {
      question: "What does EduLink charge for its services?",
      answer: "All our services are 100% FREE. We do not charge students for consultations, applications, document processing, or visa guidance."
    },
    {
      question: "How long does the Canadian visa process take?",
      answer: "Study permit processing times vary by country and season, typically ranging from 4-12 weeks. We help ensure your application is complete and properly documented to avoid delays."
    },
    {
      question: "What intakes are available for Canadian programs?",
      answer: "Most Canadian institutions offer 3 intakes: Fall (September - main intake), Winter (January), and Summer (May). Fall intake has the most program options."
    },
    {
      question: "Do I need IELTS or TOEFL for Canada?",
      answer: "Yes, most Canadian institutions require English proficiency tests. Minimum scores vary by institution and program, typically IELTS 6.0-6.5 or equivalent TOEFL scores for undergraduate programs."
    },
    {
      question: "Can I work while studying in Canada?",
      answer: "Yes, international students can work part-time (up to 20 hours/week) during academic sessions and full-time during scheduled breaks without a separate work permit."
    },
    {
      question: "What is PGWP (Post-Graduation Work Permit)?",
      answer: "PGWP allows graduates of eligible Canadian institutions to work in Canada for up to 3 years after graduation. It's the most common pathway to permanent residency and requires completing a program of at least 8 months duration."
    },
    {
      question: "What are the tuition and living costs in Canada?",
      answer: "Tuition: Diploma CAD 12,000-18,000/year, Bachelor's CAD 15,000-35,000/year, Master's CAD 18,000-40,000/year. Living costs: approximately CAD 12,000-15,000/year depending on location."
    },
    {
      question: "How much proof of funds do I need for a Canadian student visa?",
      answer: "You need approximately CAD 43,000 (covering first year tuition and living expenses) held in your account for at least 4 months before application. We provide detailed financial documentation guidance."
    },
    {
      question: "What happens if my visa application is rejected?",
      answer: "If your visa is rejected, we review the refusal reasons and help you address them. You can reapply with a strengthened application. We have a 99% success rate due to thorough preparation."
    },
    {
      question: "What accommodation options are available in Canada?",
      answer: "Options include on-campus residence, homestays, shared apartments, or private rentals. Costs vary by city: CAD 400-1,500/month depending on location and type."
    },
    {
      question: "Can I bring my family with me to Canada?",
      answer: "Yes, you can apply for dependent visas for your spouse and children. Your spouse may also be eligible for an open work permit while you study."
    },
    {
      question: "Is health insurance mandatory for international students in Canada?",
      answer: "Yes, health insurance is mandatory. Some provinces provide public health coverage to international students, while others require private insurance. Costs range from CAD 600-900/year."
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about studying in Malaysia and Canada.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="malaysia" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="malaysia">Malaysia FAQs</TabsTrigger>
                  <TabsTrigger value="canada">Canada FAQs</TabsTrigger>
                </TabsList>
                
                <TabsContent value="malaysia">
                  <Accordion type="single" collapsible className="w-full">
                    {malaysiaFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`malaysia-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="canada">
                  <Accordion type="single" collapsible className="w-full">
                    {canadaFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`canada-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
