import { CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      number: 1,
      title: t('dataAnalystIntern'),
      company: t('techCorpSolutions'),
      period: t('june2024Present'),
      achievements: [
        t('dataAnalystAchievement1'),
        t('dataAnalystAchievement2'),
        t('dataAnalystAchievement3')
      ],
      color: 'bg-primary',
      textColor: 'text-primary-foreground'
    },
    {
      number: 2,
      title: t('researchAssistant'),
      company: t('universityMathDept'),
      period: t('jan2024May2024'),
      achievements: [
        t('researchAchievement1'),
        t('researchAchievement2'),
        t('researchAchievement3')
      ],
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground'
    },
    {
      number: 3,
      title: t('mathTutor'),
      company: t('freelance'),
      period: t('sept2023Dec2023'),
      achievements: [
        t('tutorAchievement1'),
        t('tutorAchievement2'),
        t('tutorAchievement3')
      ],
      color: 'bg-accent',
      textColor: 'text-accent-foreground'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">{t('workExperience')}</h2>
          <p className="text-muted-foreground text-lg">{t('experienceSubtitle')}</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 ${exp.color} rounded-full flex items-center justify-center ${exp.textColor} text-sm font-bold`}>
                  {exp.number}
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-24 bg-primary/30 mt-4"></div>
                )}
              </div>
              
              <Card className="p-6 hover-lift flex-1" data-testid={`experience-card-${index}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1" data-testid={`experience-title-${index}`}>
                      {exp.title}
                    </h3>
                    <p className={`font-medium ${exp.color === 'bg-primary' ? 'text-primary' : exp.color === 'bg-secondary' ? 'text-secondary' : 'text-accent'}`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-muted-foreground text-sm" data-testid={`experience-period-${index}`}>
                    {exp.period}
                  </span>
                </div>
                
                <ul className="text-muted-foreground space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start" data-testid={`achievement-${index}-${achievementIndex}`}>
                      <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
