import { Mail, Linkedin, Github, Phone, Globe2 } from 'lucide-react';
import { Card } from '@/components/ui/card2';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea2';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select2';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/use-language';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactMessageSchema } from '@shared/schema';
import { z } from 'zod';

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const {
    register,
    handleSubmit, // vẫn giữ để validate
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema.extend({
      email: z.string().email(t('invalidEmail')),
    })),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactInfo = [
    {
      icon: Mail,
      title: t('email'),
      value: 'thuytrang.aya2004@gmail.com',
      description: t('emailDesc'),
      color: 'text-primary',
      bg: 'bg-primary/10',
      href: 'mailto:thuytrang.aya2004@gmail.com'
    },
    {
      icon: Linkedin,
      title: t('linkedin'),
      value: 'linkedin.com/in/thuy-trang-nguyen-k67hus',
      description: t('linkedinDesc'),
      color: 'text-secondary',
      bg: 'bg-secondary/10',
      href: 'https://www.linkedin.com/in/thuy-trang-nguyen-k67hus/'
    },
    {
      icon: Github,
      title: t('github'),
      value: 'github.com/aya1101',
      description: t('githubDesc'),
      color: 'text-accent',
      bg: 'bg-accent/10',
      href: 'https://github.com/aya1101'
    },
    {
      icon: Phone,
      title: t('phone'),
      value: '+84 974 862 811',
      description: t('phoneDesc'),
      color: 'text-green-600',
      bg: 'bg-green-100',
      href: 'tel:+84974862811'
    },
    {
      icon: Globe2,
      title: t('portfolio'),
      value: 'changportfolio-latest.onrender.com',
      description: t('portfolioDesc'),
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      href: 'https://changportfolio-latest.onrender.com/'
    }
  ];

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="contact-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#1a237e" offset="0%" />
            <stop stopColor="#ffb7d5" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
      <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4 gradient-text"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(90deg, #1a237e 0%, #ffb7d5 100%)' }}
          >
            {t('letsConnect')}
          </h2>
          <p className="text-muted-foreground text-lg">{t('contactSubtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  data-testid={`contact-info-${index}`}
                >
                  <Card className="p-6 hover-lift transition-all">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`bg-white p-3 rounded-full`}>
                        <Icon className="h-5 w-5" stroke="url(#contact-gradient)" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
          
          {/* Contact Form */}
          <Card className="p-8">
            <form action="https://formspree.io/f/xyzdqoqb" method="POST" className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t('firstName')}</Label>
                  <Input
                    id="firstName"
                    {...register('firstName')}
                    className="mt-2 gradient-border rounded-lg"
                    data-testid="input-first-name"
                  />
                  {errors.firstName && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-first-name">
                      {t('fieldRequired')}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">{t('lastName')}</Label>
                  <Input
                    id="lastName"
                    {...register('lastName')}
                    className="mt-2 gradient-border rounded-lg"
                    data-testid="input-last-name"
                  />
                  {errors.lastName && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-last-name">
                      {t('fieldRequired')}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="mt-2 gradient-border rounded-lg"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-email">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="subject">{t('subject')}</Label>
                <Select
                  value={watch('subject')} 
                  onValueChange={(value) => setValue('subject', value)}
                >
                  <SelectTrigger className="mt-2 gradient-border rounded-lg" data-testid="select-subject">
                    <SelectValue placeholder={t('subject')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">{t('generalInquiry')}</SelectItem>
                    <SelectItem value="job">{t('jobOpportunity')}</SelectItem>
                    <SelectItem value="collaboration">{t('collaboration')}</SelectItem>
                    <SelectItem value="other">{t('other')}</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-subject">
                    {t('fieldRequired')}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="message">{t('message')}</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  rows={4}
                  className="mt-2 resize-none gradient-border rounded-lg"
                  data-testid="textarea-message"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-message">
                    {t('fieldRequired')}
                  </p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full hover-lift"
                data-testid="submit-contact-form"
              >
                {t('sendMessage')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  </>
  );
}
