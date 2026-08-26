import { BrainCircuit, BookOpen, ExternalLink, Globe2, Heart, Sparkles, Trophy, Users } from 'lucide-react';
import { Card } from '@/components/ui/card2';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';

export function ActivitiesSection() {
  const { t } = useLanguage();

  const groups = [
    {
      title: t('researchExperienceHeading'),
      items: [
        {
          icon: BrainCircuit,
          title: t('kneeResearchTitle'),
          description: t('kneeResearchDesc'),
          meta: t('kneeResearchMeta'),
          link: undefined,
          tag: t('research')
        },
        {
          icon: Trophy,
          title: t('admissionResearchTitle'),
          description: t('admissionResearchDesc'),
          meta: t('admissionResearchMeta'),
          link: undefined,
          tag: t('award')
        }
      ]
    },
    {
      title: t('certificatesAwardsHeading'),
      items: [
        {
          icon: Sparkles,
          title: t('futureDesignTitle'),
          description: t('futureDesignDesc'),
          meta: t('futureDesignMeta'),
          link: 'https://drive.google.com/file/d/1HvOHzs8WVxr6_CV4OZsqACtgMCps_pHP/view?usp=sharing',
          tag: t('award')
        },
        {
          icon: Globe2,
          title: t('globalProgramTitle'),
          description: t('globalProgramDesc'),
          meta: t('globalProgramMeta'),
          link: 'https://drive.google.com/file/d/1T507jZVhV9zyrAPgrYUaUSnjVBdkNNTa/view?usp=sharing',
          tag: t('certificate')
        },
        {
          icon: Globe2,
          title: t('aiWinterCampTitle'),
          description: t('aiWinterCampDesc'),
          meta: t('aiWinterCampMeta'),
          link: 'https://drive.google.com/file/d/1v_z1_kl9PMqxFdxQzOjD3LpeNdpJWS2J/view?usp=sharing',
          tag: t('certificate')
        },
        {
          icon: BookOpen,
          title: t('vietnamSummerSchoolTitle'),
          description: t('vietnamSummerSchoolDesc'),
          meta: t('vietnamSummerSchoolMeta'),
          link: 'https://drive.google.com/file/d/1dEp8bvXMBIalogOebkU43Ek-RC7QTeW_/view?usp=sharing',
          tag: t('certificate')
        },
        {
          icon: BrainCircuit,
          title: t('agenticAiSchoolTitle'),
          description: t('agenticAiSchoolDesc'),
          meta: t('agenticAiSchoolMeta'),
          link: 'https://drive.google.com/file/d/10Oj9X6epN6sU9LZaSw-tpa9-g2fk1CKr/view?usp=drive_link',
          tag: t('certificate')
        },
        {
          icon: BookOpen,
          title: t('samsungCampusTitle'),
          description: t('samsungCampusDesc'),
          meta: t('samsungCampusMeta'),
          link: 'https://drive.google.com/file/d/1DS_pQsUt7KLUbf-E-NPAdUdSNiRY2tyP/view?usp=drive_link',
          tag: t('certificate')
        }
      ]
    },
    {
      title: t('extracurricularHeading'),
      items: [
        {
          icon: Users,
          title: t('husClubTitle'),
          description: t('husClubDesc'),
          link: undefined,
          tag: t('leadership')
        },
        {
          icon: Heart,
          title: t('ulisClubTitle'),
          description: t('ulisClubDesc'),
          link: undefined,
          tag: t('community')
        },
        {
          icon: Users,
          title: t('mathOpenDayTitle'),
          description: t('mathOpenDayDesc'),
          link: undefined,
          tag: t('volunteering')
        }
      ]
    }
  ];

  return (
    <section id="activities" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4 gradient-text"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(90deg, #1a237e 0%, #ffb7d5 100%)' }}
          >
            {t('activitiesInvolvement')}
          </h2>
          <p className="text-muted-foreground text-lg">{t('activitiesSubtitle')}</p>
        </div>

        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-2xl font-semibold mb-6">{group.title}</h3>
              <div className={`grid md:grid-cols-2 ${group.items.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-8`}>
                {group.items.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <Card key={activity.title} className="p-6 hover-lift">
                      <div className="bg-primary/10 p-4 rounded-full w-fit mb-4 mx-auto">
                        <Icon className="text-primary h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3 text-center">
                        {activity.link ? (
                          <a href={activity.link} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-2">
                            {activity.title}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : activity.title}
                      </h4>
                      <p className="text-muted-foreground text-center mb-4">{activity.description}</p>
                      {'meta' in activity && activity.meta && (
                        <p className="text-muted-foreground/50 text-center text-xs italic mb-4">{activity.meta}</p>
                      )}
                      <div className="text-center">
                        <Badge className="bg-primary/20 text-primary">{activity.tag}</Badge>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
