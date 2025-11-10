import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mwangi",
    country: "Kenya",
    program: "Computer Science, Malaysia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote: "EduLink made my dream come true! They handled everything from application to visa. Now I'm studying at a top university in Malaysia.",
    rating: 5,
  },
  {
    name: "Emmanuel Ochieng",
    country: "Uganda",
    program: "Business Administration, Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "The team was professional and supportive. Got my visa approved in 4 weeks! Highly recommend for any African student.",
    rating: 5,
  },
  {
    name: "Amina Hassan",
    country: "Tanzania",
    program: "Nursing, Malaysia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote: "Free application support saved my family so much money. EduLink's guidance was invaluable throughout the entire process.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories from African Students
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of students who have successfully started their international education journey with EduLink.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                
                <p className="text-sm font-medium text-primary">{testimonial.program}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
