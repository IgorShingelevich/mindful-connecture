
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageUrl?: string;
  rating: number;
  type: 'individual' | 'team';
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Работа с доктором Джонсон изменила мой подход к стрессу и продуктивности. Я заметил значительные улучшения как в рабочей эффективности, так и в личном благополучии.",
    name: "Михаил Чен",
    title: "Продакт-менеджер, IT-индустрия",
    rating: 5,
    type: 'individual'
  },
  {
    quote: "Наша команда руководителей столкнулась с проблемами в коммуникации, которые влияли на продуктивность. Групповые сессии с доктором Джонсон помогли нам разработать структуру эффективного диалога, что полностью преобразило нашу динамику.",
    name: "Эмма Родригес",
    title: "CEO, Маркетинговое агентство",
    rating: 5,
    type: 'team'
  },
  {
    quote: "Я годами боролся с проблемами мотивации и концентрации. Персонализированные стратегии, которые помогла мне разработать доктор Джонсон, создали устойчивые изменения в моей повседневной жизни и карьерном росте.",
    name: "Давид Кумар",
    title: "Программист",
    rating: 5,
    type: 'individual'
  },
  {
    quote: "Доктор Джонсон провела наш командный ретрит и предоставила бесценные идеи о нашей групповой динамике. Теперь у нас есть практические инструменты для разрешения конфликтов и использования разных точек зрения.",
    name: "Сара Томпсон",
    title: "HR-директор, Здравоохранение",
    rating: 5,
    type: 'team'
  },
  {
    quote: "Техники когнитивного улучшения, которым я научился у доктора Джонсон, значительно улучшили мои способности принимать решения под давлением. Действительно меняющая жизнь работа.",
    name: "Джеймс Уилсон",
    title: "Финансовый аналитик",
    rating: 5,
    type: 'individual'
  },
  {
    quote: "Our startup team was growing quickly and experiencing growing pains. Dr. Johnson's targeted interventions helped us maintain our collaborative culture while scaling effectively.",
    name: "Olivia Park",
    title: "Founder, Tech Startup",
    rating: 5,
    type: 'team'
  }
];

const TestimonialCard = ({ quote, name, title, imageUrl, rating, type }: TestimonialProps) => {
  const colorClass = type === 'individual' ? 'bg-psychPurple-50' : 'bg-psychBlue-50';
  const accentColor = type === 'individual' ? 'text-psychPurple-600' : 'text-psychBlue-600';
  
  return (
    <div className={cn(
      "p-6 rounded-xl transition-all",
      colorClass
    )}>
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className={cn("h-4 w-4 fill-current", accentColor)} />
        ))}
      </div>
      
      <blockquote className="text-foreground mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center space-x-3">
        <div className={cn(
          "h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium",
          type === 'individual' ? 'bg-psychPurple-200 text-psychPurple-700' : 'bg-psychBlue-200 text-psychBlue-700'
        )}>
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">{title}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'individual' | 'team'>('all');
  
  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.type === activeTab);
  
  return (
    <section id="testimonials" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What My Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Read about the experiences and outcomes from individuals and teams
            who have worked with me to achieve their goals.
          </p>
          
          <div className="flex justify-center mt-6 space-x-2 p-1 bg-background rounded-lg inline-flex border">
            <Button 
              variant={activeTab === 'all' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('all')}
              className={activeTab === 'all' ? 'bg-psychPurple-600 hover:bg-psychPurple-700' : ''}
            >
              All Testimonials
            </Button>
            <Button 
              variant={activeTab === 'individual' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('individual')}
              className={activeTab === 'individual' ? 'bg-psychPurple-600 hover:bg-psychPurple-700' : ''}
            >
              Individual Clients
            </Button>
            <Button 
              variant={activeTab === 'team' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('team')}
              className={activeTab === 'team' ? 'bg-psychPurple-600 hover:bg-psychPurple-700' : ''}
            >
              Team Clients
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              imageUrl={testimonial.imageUrl}
              rating={testimonial.rating}
              type={testimonial.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
