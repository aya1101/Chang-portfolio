import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/alexnguyen',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/alexnguyen',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:alex.nguyen@email.com',
      label: 'Email'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/alexnguyen',
      label: 'Twitter'
    }
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">Alex Nguyen</div>
          <p className="text-muted-foreground mb-6">{t('footerRole')}</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                  data-testid={`footer-social-${index}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
              {t('footerCopyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
