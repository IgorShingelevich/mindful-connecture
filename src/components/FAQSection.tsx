
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItemProps {
  question: string;
  answer: string;
  category: 'general' | 'individual' | 'team';
}

const faqs: FAQItemProps[] = [
  {
    question: "What types of issues do you typically help with?",
    answer: "I specialize in a range of psychological challenges including stress management, motivation, productivity, career development, team dynamics, and organizational behavior. My approach is adaptable to both personal growth objectives and professional development goals.",
    category: 'general'
  },
  {
    question: "How long do sessions typically last?",
    answer: "Individual sessions are 50 minutes, while team or group sessions typically run 90-120 minutes depending on the number of participants and the complexity of the issues being addressed.",
    category: 'general'
  },
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes, I provide secure video sessions for both individual and team clients. These are conducted through a HIPAA-compliant platform that ensures your privacy while providing the flexibility of remote access.",
    category: 'general'
  },
  {
    question: "What is your cancellation policy?",
    answer: "I request at least 48 hours notice for cancellations to avoid the full session fee. I understand emergencies happen, so exceptions can be made in truly urgent situations.",
    category: 'general'
  },
  {
    question: "How often do we need to meet for individual therapy?",
    answer: "Most individual clients begin with weekly sessions to build momentum. As progress is made, we may transition to bi-weekly or monthly sessions. The frequency is always tailored to your specific needs and goals.",
    category: 'individual'
  },
  {
    question: "How long does it typically take to see results from individual therapy?",
    answer: "Many clients report noticeable improvements after 4-6 sessions, though this varies based on your specific goals and challenges. For lasting change, a commitment of 3-6 months is often beneficial.",
    category: 'individual'
  },
  {
    question: "Do you prescribe medication?",
    answer: "As a psychologist, I don't prescribe medication, but I work collaboratively with psychiatrists and can provide referrals if medication might be beneficial as part of your treatment plan.",
    category: 'individual'
  },
  {
    question: "How are team sessions structured?",
    answer: "Team interventions typically begin with an assessment phase involving observations and interviews. This is followed by customized workshops, facilitated discussions, and practical exercises designed to address your team's specific challenges and goals.",
    category: 'team'
  },
  {
    question: "What's the optimal team size for your group services?",
    answer: "My team interventions are most effective with groups of 4-15 people. For larger organizations, I can work with representative teams or design a scaled approach that creates meaningful change across the organization.",
    category: 'team'
  },
  {
    question: "How do you measure success with team interventions?",
    answer: "Success is measured through a combination of qualitative feedback and quantitative metrics aligned with your goals. These might include improved communication scores, reduced conflict, enhanced productivity metrics, or team satisfaction surveys.",
    category: 'team'
  }
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'general' | 'individual' | 'team'>('all');
  
  const filteredFAQs = activeCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);
  
  return (
    <section id="faq" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about my services, approach, and what to expect
            when working together.
          </p>
        </div>
        
        <div className="mb-8 flex justify-center gap-2 flex-wrap">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${activeCategory === 'all' 
                ? 'bg-psychPurple-600 text-white' 
                : 'bg-white text-muted-foreground hover:bg-psychPurple-50'}`}
          >
            All Questions
          </button>
          <button 
            onClick={() => setActiveCategory('general')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${activeCategory === 'general' 
                ? 'bg-psychPurple-600 text-white' 
                : 'bg-white text-muted-foreground hover:bg-psychPurple-50'}`}
          >
            General
          </button>
          <button 
            onClick={() => setActiveCategory('individual')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${activeCategory === 'individual' 
                ? 'bg-psychPurple-600 text-white' 
                : 'bg-white text-muted-foreground hover:bg-psychPurple-50'}`}
          >
            Individual Services
          </button>
          <button 
            onClick={() => setActiveCategory('team')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${activeCategory === 'team' 
                ? 'bg-psychPurple-600 text-white' 
                : 'bg-white text-muted-foreground hover:bg-psychPurple-50'}`}
          >
            Team Services
          </button>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl border shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
