import { Code, Heart, Trophy, PenTool, Sprout, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';

export function ActivitiesSection() {
  const { t } = useLanguage();

  const activities = [
    {
      icon: Code,
      title: t('codingClubPresident'),
      description: t('codingClubDesc'),
      tag: t('leadership'),
      color: 'text-primary',
      bg: 'bg-primary/10',
      tagColor: 'bg-primary/20 text-primary'
    },
    {
      icon: Heart,
      title: t('mathVolunteerTutor'),
      description: t('volunteerTutorDesc'),
      tag: t('communityService'),
      color: 'text-secondary',
      bg: 'bg-secondary/10',
      tagColor: 'bg-secondary/20 text-secondary'
    },
    {
      icon: Trophy,
      title: t('hackathonParticipant'),
      description: t('hackathonDesc'),
      tag: t('competition'),
      color: 'text-accent',
      bg: 'bg-accent/10',
      tagColor: 'bg-accent/20 text-accent'
    },
    {
      icon: PenTool,
      title: t('techBlogWriter'),
      description: t('blogWriterDesc'),
      tag: t('contentCreation'),
      color: 'text-chart-4',
      bg: 'bg-chart-4/10',
      tagColor: 'bg-chart-4/20 text-chart-4'
    },
    {
      icon: Sprout,
      title: t('environmentalDataProject'),
      description: t('environmentalProjectDesc'),
      tag: t('research'),
      color: 'text-chart-5',
      bg: 'bg-chart-5/10',
      tagColor: 'bg-chart-5/20 text-chart-5'
    },
    {
      icon: Users,
      title: t('peerMentorProgram'),
      description: t('peerMentorDesc'),
      tag: t('mentorship'),
      color: 'text-primary',
      bg: 'bg-primary/10',
      tagColor: 'bg-primary/20 text-primary'
    }
  ];

  return (
    <section id="activities" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">{t('activitiesInvolvement')}</h2>
          <p className="text-muted-foreground text-lg">{t('activitiesSubtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card key={index} className="p-6 hover-lift" data-testid={`activity-card-${index}`}>
                <div className={`${activity.bg} p-4 rounded-full w-fit mb-4 mx-auto`}>
                  <Icon className={`${activity.color} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center" data-testid={`activity-title-${index}`}>
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-center mb-4" data-testid={`activity-description-${index}`}>
                  {activity.description}
                </p>
                <div className="text-center">
                  <Badge className={activity.tagColor} data-testid={`activity-tag-${index}`}>
                    {activity.tag}
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
