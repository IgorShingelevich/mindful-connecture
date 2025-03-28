
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-psychPurple-500 to-psychPurple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы трансформировать свое психическое благополучие и эффективность?
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Сделайте первый шаг к позитивным изменениям, записавшись на консультацию сегодня.
            Вместе мы создадим персонализированный план, который поможет вам достичь ваших целей.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-psychPurple-700 hover:bg-psychPurple-50">
              Записаться на консультацию
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать больше об услугах
            </Button>
          </div>
          
          <p className="mt-8 text-sm opacity-80">
            Не готовы принять решение? Свяжитесь со мной напрямую по телефону <strong>(555) 123-4567</strong> или 
            по email <strong>dr.johnson@mindfulconnections.com</strong> с любыми вопросами.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
