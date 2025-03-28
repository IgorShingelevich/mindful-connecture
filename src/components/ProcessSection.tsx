
import React from 'react';
import { MessageSquare, ClipboardList, Lightbulb, Target, LineChart, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  isLast?: boolean;
}

const steps: Omit<ProcessStepProps, 'isLast'>[] = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "A comprehensive discussion to understand your specific challenges, goals, and expectations.",
    icon: MessageSquare
  },
  {
    number: 2,
    title: "Assessment & Analysis",
    description: "In-depth evaluation using validated psychological tools to identify patterns and opportunity areas.",
    icon: ClipboardList
  },
  {
    number: 3,
    title: "Strategy Development",
    description: "Custom intervention plan tailored to address your specific needs and achieve your desired outcomes.",
    icon: Lightbulb
  },
  {
    number: 4,
    title: "Implementation",
    description: "Guided application of evidence-based techniques and practices in real-world contexts.",
    icon: Target
  },
  {
    number: 5,
    title: "Progress Monitoring",
    description: "Regular check-ins to measure improvement, adjust strategies, and overcome obstacles.",
    icon: LineChart
  },
  {
    number: 6,
    title: "Maintenance & Growth",
    description: "Long-term strategies to sustain positive changes and continue development independently.",
    icon: CheckCircle
  }
];

const ProcessStep = ({ number, title, description, icon: Icon, isLast }: ProcessStepProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-psychPurple-100 text-psychPurple-700 font-medium">
          {number}
        </div>
        {!isLast && (
          <div className="h-full w-0.5 bg-psychPurple-100 my-2"></div>
        )}
      </div>
      
      <div className="pt-1 pb-8">
        <div className="flex items-center mb-2">
          <Icon className="mr-2 h-5 w-5 text-psychPurple-600" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">My Approach</h2>
          <p className="text-lg text-muted-foreground">
            A structured, evidence-based methodology designed to create meaningful and 
            sustainable improvements in your mental wellbeing and performance.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
