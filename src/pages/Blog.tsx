import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How Much Does It Cost to Study in Malaysia?",
    excerpt: "Complete breakdown of tuition fees, living expenses, and hidden costs for African students planning to study in Malaysia.",
    date: "2024-01-15",
    category: "Malaysia",
    readTime: "8 min read",
  },
  {
    title: "Top 10 Affordable Universities in Canada for African Students",
    excerpt: "Discover the best Canadian universities offering quality education at affordable tuition rates, with scholarship opportunities.",
    date: "2024-01-10",
    category: "Canada",
    readTime: "10 min read",
  },
  {
    title: "Step-by-Step Student Visa Process for Malaysia",
    excerpt: "Everything you need to know about the Malaysian student visa application process, from documents to timelines.",
    date: "2024-01-05",
    category: "Visa Guide",
    readTime: "12 min read",
  },
  {
    title: "Student Visa Requirements for Canada: Complete Guide",
    excerpt: "Comprehensive guide to Canadian study permit requirements, processing times, and tips for a successful application.",
    date: "2023-12-28",
    category: "Visa Guide",
    readTime: "15 min read",
  },
  {
    title: "Best Undergraduate Programs in Malaysia for 2024",
    excerpt: "Explore the most in-demand bachelor's degree programs in Malaysian universities and their career prospects.",
    date: "2023-12-20",
    category: "Malaysia",
    readTime: "7 min read",
  },
  {
    title: "Scholarship Opportunities for African Students in Canada",
    excerpt: "Guide to available scholarships, eligibility criteria, and application strategies for African students.",
    date: "2023-12-15",
    category: "Scholarships",
    readTime: "9 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Resources & Guides
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert advice, step-by-step guides, and everything you need to know about studying abroad in Malaysia and Canada.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-border flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <Button variant="ghost" className="gap-2 px-0 hover:gap-3 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our expert advisors are ready to help you with personalized guidance for your study abroad journey.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => window.open("https://wa.me/254123456789", "_blank")}
              >
                Talk to an Advisor
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
