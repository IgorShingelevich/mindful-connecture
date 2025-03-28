
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
        <p className="font-medium text-sm text-psychPurple-700">Преимущества:</p>
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
      "Определение личных триггеров стресса",
      "Разработка индивидуальных механизмов совладания",
      "Формирование долгосрочной устойчивости к стрессу"
    ],
    icon: Battery
  },
  {
    title: "Повышение продуктивности",
    description: "Улучшение концентрации, организации и управления временем для достижения большего с меньшим стрессом.",
    benefits: [
      "Создание персонализированных систем продуктивности",
      "Преодоление проблем с вниманием",
      "Баланс эффективности и благополучия"
    ],
    icon: LineChart
  },
  {
    title: "Повышение эффективности",
    description: "Оптимизация когнитивных способностей и эмоциональной регуляции для достижения максимальной производительности в выбранной области.",
    benefits: [
      "Улучшение качества принятия решений",
      "Развитие творческого решения проблем",
      "Развитие ментальной гибкости"
    ],
    icon: Brain
  },
  {
    title: "Развитие карьеры",
    description: "Сопровождение в карьерных переходах и преодолении трудностей при сохранении психологического благополучия и профессиональной удовлетворенности.",
    benefits: [
      "Прояснение карьерного направления",
      "Разработка стратегий роста",
      "Укрепление профессиональной уверенности"
    ],
    icon: Compass
  },
  {
    title: "Изменение поведения",
    description: "Трансформация нежелательных привычек и поведения в позитивные паттерны, способствующие достижению ваших целей.",
    benefits: [
      "Разрушение устойчивых негативных паттернов",
      "Разработка эффективных систем привычек",
      "Создание устойчивых поведенческих изменений"
    ],
    icon: BrainCircuit
  }
];

const IndividualServices = () => {
  return (
    <section id="individual-services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Индивидуальные услуги</h2>
          <p className="text-lg text-muted-foreground">
            Персонализированные психологические услуги, разработанные для решения ваших уникальных задач,
            улучшения психологического благополучия и помощи в раскрытии вашего полного потенциала.
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
