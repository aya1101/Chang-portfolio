import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/thuy-trang-nguyen-k67hus/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/aya1101',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:thuytrang.aya2004@gmail.com',
      label: 'Email'
    }
    /**
     {
      icon: Twitter,
      href: 'https://twitter.com/alexnguyen',
      label: 'Twitter'
    }
     */
    
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#1a237e] to-[#ffb7d5] bg-clip-text text-transparent mb-4" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('fullName')}</div>
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
                  className="gradient-contact-icon transition-colors"
                  aria-label={link.label}
                  data-testid={`footer-social-${index}`}
                >
                  <Icon className="h-5 w-5 gradient-contact-icon" />
                </a>
              );
            })}
          </div>
          
        </div>
      </div>
    </footer>
  );
}
