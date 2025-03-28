
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Expert Psychological Services for <span className="text-psychPurple-600">Individuals & Teams</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Specialized therapeutic approaches to help you and your team achieve mental wellbeing and peak performance.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-psychPurple-600 hover:bg-psychPurple-700 text-white px-6 py-6">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-psychPurple-200 text-psychPurple-700 hover:bg-psychPurple-50 px-6 py-6">
                Explore Services
              </Button>
            </div>
            
            <div className="pt-4 flex items-center text-sm text-muted-foreground">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full bg-psychPurple-200 flex items-center justify-center text-psychPurple-700 font-medium">J</div>
                <div className="w-8 h-8 rounded-full bg-psychBlue-200 flex items-center justify-center text-psychBlue-700 font-medium">S</div>
                <div className="w-8 h-8 rounded-full bg-psychPurple-200 flex items-center justify-center text-psychPurple-700 font-medium">M</div>
              </div>
              <span>Trusted by 200+ individuals and teams</span>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-psychPurple-200/50 to-psychBlue-200/50 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Professional psychologist" 
                className="w-full h-full object-cover object-center z-10 mix-blend-overlay"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 z-20">
                <p className="text-lg font-medium">Dr. Sarah Johnson, PhD</p>
                <p className="text-sm text-muted-foreground">Clinical Psychologist • 15+ Years Experience</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-psychPurple-100 rounded-full blur-3xl opacity-70 z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-psychBlue-100 rounded-full blur-3xl opacity-70 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
