import React from 'react';
import { UsersRound, Target, Puzzle, CalendarClock, BarChart3, MessageSquareText } from 'lucide-react';

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
    title: "Коллективное решение проблем",
    description: "Повышение способности вашей команды решать сложные задачи через улучшенное когнитивное взаимодействие.",
    benefits: [
      "Развитие системного решения проблем",
      "Поощрение инновационного мышления",
      "Построение совместного принятия решений"
    ],
    icon: Puzzle
  },
  {
    title: "Обучение делегированию",
    description: "Оптимизация распределения рабочих процессов и развитие эффективных практик делегирования в вашей команде.",
    benefits: [
      "Создание эффективных структур делегирования",
      "Соответствие задач сильным сторонам членов команды",
      "Построение систем ответственности"
    ],
    icon: CalendarClock
  },
  {
    title: "Оптимизация производительности",
    description: "Максимизация продуктивности и эффективности команды при сохранении благополучия и предотвращении выгорания.",
    benefits: [
      "Выявление и устранение препятствий производительности",
      "Внедрение устойчивых практик продуктивности",
      "Создание высокоэффективной командной культуры"
    ],
    icon: BarChart3
  },
  {
    title: "Системы достижения целей",
    description: "Разработка структур для постановки и достижения значимых командных целей с четкими метриками и ответственностью.",
    benefits: [
      "Создание согласованных и мотивирующих целей",
      "Разработка эффективных систем отслеживания прогресса",
      "Формирование командной приверженности результатам"
    ],
    icon: Target
  },
  {
    title: "Улучшение коммуникации",
    description: "Трансформация моделей командного общения для повышения ясности, снижения конфликтов и улучшения сотрудничества.",
    benefits: [
      "Повышение ясности и точности сообщений",
      "Развитие практик активного слушания",
      "Создание эффективных циклов обратной связи"
    ],
    icon: MessageSquareText
  }
];

const TeamServices = () => {
  return (
    <section id="team-services" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Услуги для команд</h2>
          <p className="text-lg text-muted-foreground">
            Научно обоснованные методы, направленные на улучшение командной динамики, совершенствование коммуникации
            и повышение коллективной эффективности в профессиональной среде.
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
