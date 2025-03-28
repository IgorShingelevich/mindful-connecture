
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-psychPurple-500 to-psychPurple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Mental Wellbeing and Performance?
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Take the first step toward positive change by scheduling a consultation today.
            Together, we'll create a personalized plan to help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-psychPurple-700 hover:bg-psychPurple-50">
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More About Services
            </Button>
          </div>
          
          <p className="mt-8 text-sm opacity-80">
            Not ready to commit? Contact me directly at <strong>(555) 123-4567</strong> or 
            <strong> dr.johnson@mindfulconnections.com</strong> with any questions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
