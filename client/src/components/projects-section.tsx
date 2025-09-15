import { MessageSquare, ExternalLink, Github, Calculator, GraduationCap, Lightbulb, AlertTriangle, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';

export function ProjectsSection() {
  const { t } = useLanguage();

  const otherProjects = [
    {
      icon: Calculator,
      title: t('statisticalAnalysisTool'),
      description: t('statisticalToolDesc'),
      technologies: ['R', 'Shiny', 'ggplot2'],
      color: 'text-secondary',
      bg: 'bg-secondary/10',
      link: '#'
    },
    {
      icon: GraduationCap,
      title: t('gradePredictionModel'),
      description: t('gradeModelDesc'),
      technologies: ['Python', 'Scikit-learn', 'Pandas'],
      color: 'text-accent',
      bg: 'bg-accent/10',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">{t('featuredProjects')}</h2>
          <p className="text-muted-foreground text-lg">{t('projectsSubtitle')}</p>
        </div>
        
        {/* Main Featured Project */}
        <Card className="p-8 mb-12 hover-lift" data-testid="featured-project">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageSquare className="text-primary h-6 w-6" />
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {t('featuredProject')}
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-4" data-testid="featured-project-title">
                {t('socialMediaAnalyzer')}
              </h3>
              
              {/* Problem Section */}
              <div className="mb-6">
                <h4 className="font-semibold text-destructive mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  {t('problem')}
                </h4>
                <p className="text-muted-foreground leading-relaxed" data-testid="problem-description">
                  {t('problemDescription')}
                </p>
              </div>
              
              {/* Solution Section */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-2 flex items-center">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  {t('solution')}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="solution-description">
                  {t('solutionDescription')}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    t('noCodingRequired'),
                    t('realTimeAnalysis'),
                    t('multiPlatformSupport'),
                    t('priorityAlerts')
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm" data-testid={`feature-${index}`}>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Impact Section */}
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2 flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  {t('impact')}
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-primary/10 rounded-lg" data-testid="impact-time-saved">
                    <div className="text-2xl font-bold text-primary">75%</div>
                    <div className="text-xs text-muted-foreground">{t('timeSaved')}</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/10 rounded-lg" data-testid="impact-platforms">
                    <div className="text-2xl font-bold text-secondary">5</div>
                    <div className="text-xs text-muted-foreground">{t('platforms')}</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg" data-testid="impact-accuracy">
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-xs text-muted-foreground">{t('accuracy')}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="flex items-center space-x-2" data-testid="view-demo-button">
                  <ExternalLink className="h-4 w-4" />
                  <span>{t('viewDemo')}</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2" data-testid="source-code-button">
                  <Github className="h-4 w-4" />
                  <span>{t('sourceCode')}</span>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Social Media Sentiment Analyzer Dashboard" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                data-testid="featured-project-image"
              />
              
              {/* Floating Cards for Visual Interest */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg animate-float">
                <div className="text-lg">😊</div>
                <div className="text-xs font-medium mt-1">85% Positive</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-lg shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-lg">⏱️</div>
                <div className="text-xs font-medium mt-1">Real-time</div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
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
                <a 
                  href={project.link} 
                  className={`${project.color} hover:underline font-medium`}
                  data-testid={`project-link-${index}`}
                >
                  {t('learnMore')}
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
