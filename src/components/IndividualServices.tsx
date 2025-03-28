
import React from 'react';
import { Brain, Battery, LineChart, BrainCircuit, Compass, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ElementType;
}

const ServiceCard = ({ title, description, benefits, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white p-6 rounded-xl border border-border shadow-sm">
      <div className="p-3 w-fit rounded-lg bg-psychPurple-50 mb-4">
        <Icon className="h-6 w-6 text-psychPurple-600" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="space-y-2">
        <p className="font-medium text-sm text-psychPurple-700">Benefits:</p>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-psychPurple-600 mr-2">•</span>
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const individualServices = [
  {
    title: "Motivation Building",
    description: "Develop intrinsic motivation and overcome barriers to achieve your personal and professional goals.",
    benefits: [
      "Discover your core drivers and values",
      "Create sustainable motivation strategies",
      "Overcome procrastination and resistance"
    ],
    icon: Sparkles
  },
  {
    title: "Stress Management",
    description: "Learn practical techniques to manage stress effectively and build resilience in challenging situations.",
    benefits: [
      "Identify personal stress triggers",
      "Develop tailored coping mechanisms",
      "Build long-term stress resilience"
    ],
    icon: Battery
  },
  {
    title: "Productivity Improvement",
    description: "Enhance your focus, organization, and time management to achieve more with less stress.",
    benefits: [
      "Create personalized productivity systems",
      "Overcome attention challenges",
      "Balance efficiency and wellbeing"
    ],
    icon: LineChart
  },
  {
    title: "Cognitive Enhancement",
    description: "Optimize your mental processing, decision-making, and problem-solving capabilities.",
    benefits: [
      "Improve decision-making quality",
      "Enhance creative problem-solving",
      "Develop mental flexibility"
    ],
    icon: Brain
  },
  {
    title: "Career Development",
    description: "Navigate career transitions, clarify your professional direction, and overcome workplace challenges.",
    benefits: [
      "Gain clarity on career direction",
      "Develop strategies for growth",
      "Build professional confidence"
    ],
    icon: Compass
  },
  {
    title: "Behavioral Change",
    description: "Transform unwanted habits and behaviors into positive patterns that serve your goals.",
    benefits: [
      "Break persistent negative patterns",
      "Design effective habit systems",
      "Create lasting behavioral change"
    ],
    icon: BrainCircuit
  }
];

const IndividualServices = () => {
  return (
    <section id="individual-services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Individual Services</h2>
          <p className="text-lg text-muted-foreground">
            Personalized psychological services designed to address your unique challenges,
            enhance your mental wellbeing, and help you achieve your fullest potential.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {individualServices.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndividualServices;
