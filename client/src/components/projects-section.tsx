import { Flower2, Bot, House, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card2';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';

export function ProjectsSection() {
  const { t } = useLanguage();

  const otherProjects = [
    {
      icon: Bot,
      title: t('ayalearningTitle'),
      period: t('ayalearningPeriod'),
      description: t('ayalearningDesc'),
      technologies: ['ReactJS', 'TypeScript', 'NodeJS', 'PostgreSQL', 'LangGraph', 'LLM APIs', 'Live2D'],
      color: 'text-secondary',
      bg: 'bg-secondary/10',
      link: 'https://github.com/aya1101/AyaLearning'
    },
    {
      icon: Flower2,
      title: t('gardeniaTitle'),
      period: t('gardeniaPeriod'),
      description: t('gardeniaDesc'),
      technologies: ['Python', 'ConvNeXt', 'YOLOv8', 'Flask', 'Wikipedia API'],
      color: 'text-accent',
      bg: 'bg-accent/10',
      link: 'https://github.com/aya1101/Gardenia'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4 gradient-text"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(90deg, #1a237e 0%, #ffb7d5 100%)' }}
          >
            {t('featuredProjects')}
          </h2>
          <p className="text-muted-foreground text-lg">{t('projectsSubtitle')}</p>
        </div>
        
        {/* Main Featured Project */}
        <Card className="p-8 mb-12 hover-lift" data-testid="featured-project">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <House className="text-primary h-6 w-6" />
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {t('featuredProject')}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid="featured-project-title">
                <a
                  href="https://c4-app-097.io.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  {t('homemindTitle')}
                  <ExternalLink className="h-5 w-5" />
                </a>
              </h3>
              {/* Project Period */}
              <div className="mb-2 text-muted-foreground text-sm">{t('homemindPeriod')}</div>
              {/* Project Description */}
              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed" data-testid="problem-description">
                  {t('homemindDesc')}
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground text-sm">
                  <li>{t('homemindFeature1')}</li>
                  <li>{t('homemindFeature2')}</li>
                  <li>{t('homemindFeature3')}</li>
                  <li>{t('homemindFeature4')}</li>
                </ul>
              </div>
              <div className="mb-6">
                <div className="font-semibold mb-2">{t('technologies')}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Flutter", "FastAPI", "MQTT", "WebSocket", "PostgreSQL", "Docker", "LLM", "LangGraph", "ZEP"].map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative" data-testid="featured-project-image">
              <img
                src={`${import.meta.env.BASE_URL}thumbnail.jpg`}
                alt="HomeMind AI agent for smart home management"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </Card>
        
        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {otherProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="p-6 hover-lift" data-testid={`other-project-${index}`}>
                <div className={`${project.bg} p-3 rounded-full w-fit mb-4`}>
                  <Icon className={`${project.color} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <div className="text-muted-foreground text-sm mb-3">{project.period}</div>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.color} hover:underline font-medium inline-flex items-center gap-2`}
                    data-testid={`project-link-${index}`}
                  >
                    {t('learnMore')}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
