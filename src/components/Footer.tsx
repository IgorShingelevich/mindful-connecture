
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Information */}
          <div className="md:col-span-1">
            <a href="#" className="inline-block">
              <span className="text-2xl font-bold text-psychPurple-700">MindfulConnections</span>
            </a>
            <p className="text-muted-foreground mt-4">
              Expert psychological services for individuals and teams, helping you achieve your 
              mental wellbeing and performance goals.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Services</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">About</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#individual-services" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Individual Therapy</a></li>
              <li><a href="#team-services" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Team Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Workshops & Training</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Speaking Engagements</a></li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>1234 Wellness Avenue, Suite 500</li>
              <li>San Francisco, CA 94102</li>
              <li>(555) 123-4567</li>
              <li>dr.johnson@mindfulconnections.com</li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-psychPurple-100 text-psychPurple-600 hover:bg-psychPurple-200 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-psychPurple-100 text-psychPurple-600 hover:bg-psychPurple-200 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-psychPurple-100 text-psychPurple-600 hover:bg-psychPurple-200 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-psychPurple-100 text-psychPurple-600 hover:bg-psychPurple-200 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-psychPurple-100 text-psychPurple-600 hover:bg-psychPurple-200 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MindfulConnections. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-psychPurple-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
