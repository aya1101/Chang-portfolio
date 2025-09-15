import { useState } from 'react';
import { Mail, Linkedin, Github, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/use-language';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactMessageSchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { z } from 'zod';

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
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

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: t('messageSent'),
        description: "I'll get back to you soon!",
      });
      reset();
    },
    onError: () => {
      toast({
        title: t('messageError'),
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('email'),
      value: 'alex.nguyen@email.com',
      description: t('emailDesc'),
      color: 'text-primary',
      bg: 'bg-primary/10',
      href: 'mailto:alex.nguyen@email.com'
    },
    {
      icon: Linkedin,
      title: t('linkedin'),
      value: 'linkedin.com/in/alexnguyen',
      description: t('linkedinDesc'),
      color: 'text-secondary',
      bg: 'bg-secondary/10',
      href: 'https://linkedin.com/in/alexnguyen'
    },
    {
      icon: Github,
      title: t('github'),
      value: 'github.com/alexnguyen',
      description: t('githubDesc'),
      color: 'text-accent',
      bg: 'bg-accent/10',
      href: 'https://github.com/alexnguyen'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">{t('letsConnect')}</h2>
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
                      <div className={`${info.bg} p-3 rounded-full`}>
                        <Icon className={`${info.color} h-5 w-5`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </Card>
                </a>
              );
            })}
          </div>
          
          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t('firstName')}</Label>
                  <Input
                    id="firstName"
                    {...register('firstName')}
                    className="mt-2"
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
                    className="mt-2"
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
                  className="mt-2"
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
                  <SelectTrigger className="mt-2" data-testid="select-subject">
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
                  className="mt-2 resize-none"
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
                disabled={contactMutation.isPending}
                data-testid="submit-contact-form"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  t('sendMessage')
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
