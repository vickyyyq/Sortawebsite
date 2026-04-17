import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Partner() {
  const { tr } = useLanguage();
  const { toast } = useToast();

  const formSchema = z.object({
    companyName: z.string().min(2, { message: tr('partner', 'validationCompany') }),
    industry: z.string().min(1, { message: tr('partner', 'validationIndustry') }),
    location: z.string().min(2, { message: tr('partner', 'validationLocation') }),
    spaceType: z.string().min(1, { message: tr('partner', 'validationSpaceType') }),
    footfall: z.string().min(1, { message: tr('partner', 'validationFootfall') }),
    contactName: z.string().min(2, { message: tr('partner', 'validationContact') }),
    email: z.string().email({ message: tr('partner', 'validationEmail') }),
    message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      industry: '',
      location: '',
      spaceType: '',
      footfall: '',
      contactName: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: tr('partner', 'toastTitle'),
      description: tr('partner', 'toastDescription'),
    });
    form.reset();
  }

  const bullets = [
    'bullet1' as const,
    'bullet2' as const,
    'bullet3' as const,
  ];

  const industryOptions = [
    { value: 'retail', labelKey: 'industryRetail' as const },
    { value: 'transit', labelKey: 'industryTransit' as const },
    { value: 'public', labelKey: 'industryPublic' as const },
    { value: 'office', labelKey: 'industryOffice' as const },
    { value: 'entertainment', labelKey: 'industryEntertainment' as const },
    { value: 'events', labelKey: 'industryEvents' as const },
    { value: 'other', labelKey: 'industryOther' as const },
  ];

  const spaceOptions = [
    { value: 'retail', labelKey: 'spaceRetail' as const },
    { value: 'public', labelKey: 'spacePublic' as const },
    { value: 'office', labelKey: 'spaceOffice' as const },
    { value: 'venue', labelKey: 'spaceVenue' as const },
    { value: 'other', labelKey: 'spaceOther' as const },
  ];

  return (
    <section id="partner" className="bg-[var(--color-navy)] text-white section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            <span className="text-[var(--color-sky)] text-label mb-4 block">
              {tr('partner', 'overline')}
            </span>
            <h2 className="text-white mb-6">
              {tr('partner', 'heading')}
            </h2>
            <p className="text-lg text-[var(--color-mist)] opacity-90 mb-10">
              {tr('partner', 'body')}
            </p>

            <div className="space-y-6">
              {bullets.map((key) => (
                <div key={key} className="flex gap-4">
                  <CheckCircle2 className="text-[var(--color-gold)] shrink-0 mt-1" size={24} />
                  <p className="font-medium text-lg">{tr('partner', key)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A2635] p-8 md:p-10 rounded-xl border border-[var(--color-mist)]/20 animate-in fade-in duration-1000 delay-300 fill-mode-both">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[var(--color-mist)]">{tr('partner', 'formCompany')}</FormLabel>
                      <FormControl>
                        <Input className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus-visible:ring-[var(--color-gold)]" {...field} data-testid="input-partner-company" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[var(--color-mist)]">{tr('partner', 'formIndustry')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus:ring-[var(--color-gold)]" data-testid="select-partner-industry">
                              <SelectValue placeholder={tr('partner', 'formSelect')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industryOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {tr('partner', opt.labelKey)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="spaceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[var(--color-mist)]">{tr('partner', 'formSpaceType')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus:ring-[var(--color-gold)]" data-testid="select-partner-space">
                              <SelectValue placeholder={tr('partner', 'formSelect')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {spaceOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {tr('partner', opt.labelKey)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[var(--color-mist)]">{tr('partner', 'formLocation')}</FormLabel>
                        <FormControl>
                          <Input className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus-visible:ring-[var(--color-gold)]" {...field} data-testid="input-partner-location" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="footfall"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[var(--color-mist)]">{tr('partner', 'formFootfall')}</FormLabel>
                        <FormControl>
                          <Input className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus-visible:ring-[var(--color-gold)]" {...field} data-testid="input-partner-footfall" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[var(--color-mist)]">{tr('partner', 'formContact')}</FormLabel>
                        <FormControl>
                          <Input className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus-visible:ring-[var(--color-gold)]" {...field} data-testid="input-partner-contact" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[var(--color-mist)]">{tr('partner', 'formEmail')}</FormLabel>
                        <FormControl>
                          <Input type="email" className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus-visible:ring-[var(--color-gold)]" {...field} data-testid="input-partner-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[var(--color-mist)]">{tr('partner', 'formMessage')}</FormLabel>
                      <FormControl>
                        <Textarea className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus-visible:ring-[var(--color-gold)] resize-none" rows={3} {...field} data-testid="input-partner-message" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4 flex flex-col items-start gap-4">
                  <Button
                    type="submit"
                    className="bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold)]/90 font-bold px-8 py-6 text-lg w-full md:w-auto"
                    data-testid="button-partner-submit"
                  >
                    {tr('partner', 'ctaPrimary')}
                  </Button>
                  <button
                    type="button"
                    className="text-[var(--color-sky)] hover:text-white flex items-center gap-2 text-sm font-semibold transition-colors mt-2"
                    data-testid="button-partner-poc"
                  >
                    {tr('partner', 'ctaSecondary')} <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
