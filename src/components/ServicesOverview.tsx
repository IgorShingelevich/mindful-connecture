
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServiceCategory = ({ 
  title, 
  description, 
  icon: Icon, 
  gradient, 
  href 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  gradient: string; 
  href: string;
}) => {
  return (
    <div className={cn(
      "flex flex-col justify-between p-8 rounded-xl shadow-sm border border-border h-full",
      "transition-all duration-300 hover:shadow-md hover:-translate-y-1",
      gradient
    )}>
      <div>
        <div className="p-3 w-fit rounded-lg bg-white/80 mb-4">
          <Icon className="h-8 w-8 text-psychPurple-600" />
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <Button 
        variant="outline" 
        className="mt-6 border-psychPurple-200 text-psychPurple-700 hover:bg-psychPurple-50 w-full justify-between"
        asChild
      >
        <a href={href}>
          Learn More
          <ChevronRight className="h-4 w-4 ml-2" />
        </a>
      </Button>
    </div>
  );
};

const ServicesOverview = () => {
  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Specialized psychological services tailored to the needs of both individuals and teams, 
            helping you achieve your mental health and performance goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ServiceCategory 
            title="Individual Services" 
            description="Personalized therapeutic approaches to help you overcome challenges, build resilience, and thrive in your personal and professional life."
            icon={User}
            gradient="bg-gradient-to-br from-white to-psychPurple-50/50"
            href="#individual-services"
          />
          
          <ServiceCategory 
            title="Team & Group Services" 
            description="Evidence-based interventions to enhance team dynamics, improve communication, resolve conflicts, and boost collective performance."
            icon={Users}
            gradient="bg-gradient-to-br from-white to-psychBlue-50/50"
            href="#team-services"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
