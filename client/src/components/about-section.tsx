import { Code, TrendingUp, Cog, Users } from 'lucide-react';
import { Card } from '@/components/ui/card2';
import { useLanguage } from '@/hooks/use-language';

export function AboutSection() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Code,
      title: t('programming'),
      description: t('programmingSkills'),
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    {
      icon: TrendingUp,
      title: t('dataAnalysis'),
      description: t('dataAnalysisSkills'),
      color: 'text-secondary',
      bg: 'bg-secondary/10'
    },
    {
      icon: Cog,
      title: t('automation'),
      description: t('automationSkills'),
      color: 'text-accent',
      bg: 'bg-accent/10'
    },
    {
      icon: Cog,
      title: t('language'),
      description: t('languagesSkills'),
      color: 'text-accent',
      bg: 'bg-accent/10'
    },
    {
      icon: Users,
      title: t('softSkills'),
      description: t('softSkillsList'),
      color: 'text-chart-4',
      bg: 'bg-chart-4/10'
    },
    {
      icon: Cog,
      title: t('otherSkills'),
      description: t('otherSkillsList'),
      color: 'text-chart-5',
      bg: 'bg-chart-5/10'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4 gradient-text"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(90deg, #1a237e 0%, #ffb7d5 100%)' }}
          >
            {t('aboutMe')}
          </h2>
          <p className="text-muted-foreground text-lg">{t('aboutSubtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" data-testid="about-text-1">
              {t('aboutText1')}
            </p>
            
            <p className="text-lg leading-relaxed" data-testid="about-text-2">
              {t('aboutText2')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover-lift"
                  data-testid={`skill-card-${index}`}
                >
                  <div className={`${skill.bg} p-3 rounded-full w-fit mb-3 flex items-center justify-center`}>
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop stopColor="#1a237e" offset="0%" />
                          <stop stopColor="#ffb7d5" offset="100%" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Icon className="h-6 w-6" stroke="url(#about-gradient)" />
                  </div>
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
