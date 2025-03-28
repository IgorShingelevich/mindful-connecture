
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
    title: "Первичная консультация",
    description: "Всесторонняя беседа для понимания ваших конкретных проблем, целей и ожиданий.",
    icon: MessageSquare
  },
  {
    number: 2,
    title: "Оценка и анализ",
    description: "Глубокая оценка с использованием проверенных психологических инструментов для выявления паттернов и областей возможностей.",
    icon: ClipboardList
  },
  {
    number: 3,
    title: "Разработка стратегии",
    description: "Индивидуальный план вмешательства, адаптированный для решения ваших конкретных потребностей и достижения желаемых результатов.",
    icon: Lightbulb
  },
  {
    number: 4,
    title: "Реализация",
    description: "Управляемое применение научно обоснованных методик и практик в реальных условиях.",
    icon: Target
  },
  {
    number: 5,
    title: "Мониторинг прогресса",
    description: "Регулярные проверки для измерения улучшений, корректировки стратегий и преодоления препятствий.",
    icon: LineChart
  },
  {
    number: 6,
    title: "Поддержание и рост",
    description: "Долгосрочные стратегии для сохранения позитивных изменений и продолжения самостоятельного развития.",
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
