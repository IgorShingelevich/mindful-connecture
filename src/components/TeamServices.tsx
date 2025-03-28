
import React from 'react';
import { UsersRound, Target, PuzzlePiece, CalendarClock, BarChart3, MessageSquareText } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ElementType;
}

const ServiceCard = ({ title, description, benefits, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white p-6 rounded-xl border border-border shadow-sm">
      <div className="p-3 w-fit rounded-lg bg-psychBlue-50 mb-4">
        <Icon className="h-6 w-6 text-psychBlue-600" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="space-y-2">
        <p className="font-medium text-sm text-psychBlue-700">Benefits:</p>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-psychBlue-600 mr-2">•</span>
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const teamServices = [
  {
    title: "Team Dynamics Development",
    description: "Build cohesive team relationships and improve collaboration through evidence-based interventions.",
    benefits: [
      "Strengthen trust and psychological safety",
      "Improve team communication patterns",
      "Develop constructive conflict resolution"
    ],
    icon: UsersRound
  },
  {
    title: "Collective Problem Solving",
    description: "Enhance your team's capacity to tackle complex challenges through improved cognitive collaboration.",
    benefits: [
      "Develop structured problem-solving approaches",
      "Maximize cognitive diversity in teams",
      "Overcome common decision-making biases"
    ],
    icon: PuzzlePiece
  },
  {
    title: "Task Delegation Training",
    description: "Optimize workflow distribution and develop effective delegation practices within your team.",
    benefits: [
      "Create effective delegation frameworks",
      "Match tasks to team member strengths",
      "Build accountability systems"
    ],
    icon: CalendarClock
  },
  {
    title: "Performance Optimization",
    description: "Maximize team productivity and effectiveness while maintaining wellbeing and preventing burnout.",
    benefits: [
      "Identify and remove performance blockers",
      "Implement sustainable productivity practices",
      "Create high-performance team culture"
    ],
    icon: BarChart3
  },
  {
    title: "Goal Achievement Systems",
    description: "Develop frameworks for setting and achieving meaningful team goals with clear metrics and accountability.",
    benefits: [
      "Create aligned and motivating goals",
      "Design effective progress tracking systems",
      "Build team commitment to outcomes"
    ],
    icon: Target
  },
  {
    title: "Communication Enhancement",
    description: "Transform team communication patterns to improve clarity, reduce conflict, and enhance collaboration.",
    benefits: [
      "Improve message clarity and precision",
      "Develop active listening practices",
      "Create effective feedback loops"
    ],
    icon: MessageSquareText
  }
];

const TeamServices = () => {
  return (
    <section id="team-services" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Team & Group Services</h2>
          <p className="text-lg text-muted-foreground">
            Specialized interventions designed to enhance team functioning, improve group dynamics,
            and help organizations achieve their collective potential.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamServices.map((service, index) => (
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

export default TeamServices;
