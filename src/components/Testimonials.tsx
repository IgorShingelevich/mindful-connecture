
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageUrl?: string;
  rating: number;
  type: 'individual' | 'team';
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Working with Dr. Johnson transformed my approach to stress and productivity. I've seen remarkable improvements in both my work performance and personal wellbeing.",
    name: "Michael Chen",
    title: "Product Manager, Tech Industry",
    rating: 5,
    type: 'individual'
  },
  {
    quote: "Our leadership team was facing communication challenges that were impacting productivity. Dr. Johnson's group sessions helped us develop a framework for effective dialogue that has completely transformed our dynamics.",
    name: "Emma Rodriguez",
    title: "CEO, Marketing Agency",
    rating: 5,
    type: 'team'
  },
  {
    quote: "I struggled with motivation and focus for years. The personalized strategies Dr. Johnson helped me develop have made a sustainable difference in my daily life and career progression.",
    name: "David Kumar",
    title: "Software Engineer",
    rating: 5,
    type: 'individual'
  },
  {
    quote: "Dr. Johnson facilitated our team retreat and provided invaluable insights into our group dynamics. We now have practical tools to navigate conflicts and leverage our diverse perspectives.",
    name: "Sarah Thompson",
    title: "HR Director, Healthcare",
    rating: 5,
    type: 'team'
  },
  {
    quote: "The cognitive enhancement techniques I learned from Dr. Johnson have significantly improved my decision-making abilities under pressure. Truly life-changing work.",
    name: "James Wilson",
    title: "Financial Analyst",
    rating: 5,
    type: 'individual'
  },
  {
    quote: "Our startup team was growing quickly and experiencing growing pains. Dr. Johnson's targeted interventions helped us maintain our collaborative culture while scaling effectively.",
    name: "Olivia Park",
    title: "Founder, Tech Startup",
    rating: 5,
    type: 'team'
  }
];

const TestimonialCard = ({ quote, name, title, imageUrl, rating, type }: TestimonialProps) => {
  const colorClass = type === 'individual' ? 'bg-psychPurple-50' : 'bg-psychBlue-50';
  const accentColor = type === 'individual' ? 'text-psychPurple-600' : 'text-psychBlue-600';
  
  return (
    <div className={cn(
      "p-6 rounded-xl transition-all",
      colorClass
    )}>
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className={cn("h-4 w-4 fill-current", accentColor)} />
        ))}
      </div>
      
      <blockquote className="text-foreground mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center space-x-3">
        <div className={cn(
          "h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium",
          type === 'individual' ? 'bg-psychPurple-200 text-psychPurple-700' : 'bg-psychBlue-200 text-psychBlue-700'
        )}>
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">{title}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'individual' | 'team'>('all');
  
  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.type === activeTab);
  
  return (
    <section id="testimonials" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What My Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Read about the experiences and outcomes from individuals and teams
            who have worked with me to achieve their goals.
          </p>
          
          <div className="flex justify-center mt-6 space-x-2 p-1 bg-background rounded-lg inline-flex border">
            <Button 
              variant={activeTab === 'all' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('all')}
              className={activeTab === 'all' ? 'bg-psychPurple-600 hover:bg-psychPurple-700' : ''}
            >
              All Testimonials
            </Button>
            <Button 
              variant={activeTab === 'individual' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('individual')}
              className={activeTab === 'individual' ? 'bg-psychPurple-600 hover:bg-psychPurple-700' : ''}
            >
              Individual Clients
            </Button>
            <Button 
              variant={activeTab === 'team' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('team')}
              className={activeTab === 'team' ? 'bg-psychPurple-600 hover:bg-psychPurple-700' : ''}
            >
              Team Clients
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              imageUrl={testimonial.imageUrl}
              rating={testimonial.rating}
              type={testimonial.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
