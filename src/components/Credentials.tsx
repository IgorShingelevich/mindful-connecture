
import React from 'react';
import { Award, BookOpen, BriefcaseBusiness, GraduationCap, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const credentials = [
  {
    category: "Education & Certification",
    icon: GraduationCap,
    items: [
      {
        title: "Ph.D. in Clinical Psychology",
        description: "Stanford University - Specialization in Cognitive Behavioral Therapy",
        year: "2008"
      },
      {
        title: "Licensed Clinical Psychologist",
        description: "State Board of Psychology - License #PSY12345",
        year: "2010"
      },
      {
        title: "Certified in Organizational Psychology",
        description: "American Psychological Association",
        year: "2012"
      },
      {
        title: "Advanced Training in Mindfulness-Based Interventions",
        description: "Center for Mindfulness in Medicine",
        year: "2015"
      }
    ]
  },
  {
    category: "Professional Experience",
    icon: BriefcaseBusiness,
    items: [
      {
        title: "15+ Years Clinical Experience",
        description: "Working with individuals and teams across diverse backgrounds and industries",
        year: ""
      },
      {
        title: "Organizational Consultant",
        description: "Fortune 500 companies including Google, Microsoft, and Adobe",
        year: "2014-Present"
      },
      {
        title: "Director of Psychological Services",
        description: "Bay Area Wellness Center",
        year: "2010-2018"
      },
      {
        title: "Guest Lecturer",
        description: "Stanford University, Department of Psychology",
        year: "2013-Present"
      }
    ]
  },
  {
    category: "Publications & Recognition",
    icon: BookOpen,
    items: [
      {
        title: "Author, 'The Connected Mind'",
        description: "Bestselling book on cognitive enhancement and mental wellbeing",
        year: "2018"
      },
      {
        title: "Research Publication",
        description: "25+ peer-reviewed articles in leading psychology journals",
        year: ""
      },
      {
        title: "Excellence in Therapy Award",
        description: "American Psychological Association",
        year: "2019"
      },
      {
        title: "Regular Contributor",
        description: "Psychology Today and Harvard Business Review",
        year: "2015-Present"
      }
    ]
  }
];

const CredentialItem = ({ title, description, year }: { title: string; description: string; year: string }) => {
  return (
    <div className="border-l-2 border-psychPurple-200 pl-4 py-2">
      <div className="flex justify-between items-start">
        <h4 className="font-medium">{title}</h4>
        {year && <span className="text-sm text-muted-foreground">{year}</span>}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const CredentialCategory = ({ 
  category, 
  items, 
  icon: Icon 
}: { 
  category: string; 
  items: Array<{ title: string; description: string; year: string }>; 
  icon: React.ElementType 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-psychPurple-50">
          <Icon className="h-5 w-5 text-psychPurple-600" />
        </div>
        <h3 className="text-xl font-semibold">{category}</h3>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <CredentialItem
            key={index}
            title={item.title}
            description={item.description}
            year={item.year}
          />
        ))}
      </div>
    </div>
  );
};

const Credentials = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="inline-block p-1.5 rounded-lg bg-psychPurple-100 text-psychPurple-700 font-medium text-sm mb-4">
                About Dr. Johnson
              </div>
              <h2 className="text-3xl font-bold mb-4">Credentials & Experience</h2>
              <p className="text-muted-foreground mb-6">
                With over 15 years of professional experience and extensive academic training,
                I bring evidence-based approaches to help individuals and teams achieve their goals.
              </p>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-psychPurple-100">
                  <Trophy className="h-5 w-5 text-psychPurple-600" />
                </div>
                <div>
                  <h4 className="font-medium">250+ Individuals Helped</h4>
                  <p className="text-sm text-muted-foreground">Across various challenges</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-psychPurple-100">
                  <Award className="h-5 w-5 text-psychPurple-600" />
                </div>
                <div>
                  <h4 className="font-medium">40+ Teams Transformed</h4>
                  <p className="text-sm text-muted-foreground">From startups to corporations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 grid md:grid-cols-1 gap-6">
            {credentials.map((category, index) => (
              <CredentialCategory
                key={index}
                category={category.category}
                items={category.items}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
