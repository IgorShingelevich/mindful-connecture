
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be implemented here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Ready to start your journey towards improved mental wellbeing and performance?
                  Contact me today to schedule a consultation or learn more about my services.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-psychPurple-50 mr-4">
                    <Phone className="h-5 w-5 text-psychPurple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-psychPurple-50 mr-4">
                    <Mail className="h-5 w-5 text-psychPurple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">dr.johnson@mindfulconnections.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-psychPurple-50 mr-4">
                    <MapPin className="h-5 w-5 text-psychPurple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office Location</h3>
                    <p className="text-muted-foreground">
                      1234 Wellness Avenue, Suite 500<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-psychPurple-50 mr-4">
                    <Clock className="h-5 w-5 text-psychPurple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM (by appointment)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="firstName" 
                      required 
                      placeholder="Your first name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="lastName" 
                      required 
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="space-y-2 mb-4">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="Your phone number (optional)"
                  />
                </div>
                
                <div className="space-y-2 mb-4">
                  <label htmlFor="service" className="text-sm font-medium">
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <select 
                    id="service" 
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="individual">Individual Therapy</option>
                    <option value="team">Team/Group Services</option>
                    <option value="consultation">Initial Consultation</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="Please share your questions or describe your needs"
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-psychPurple-600 hover:bg-psychPurple-700"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  I typically respond to inquiries within 24-48 business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
