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

const formSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name is required' }),
  industry: z.string().min(1, { message: 'Industry is required' }),
  location: z.string().min(2, { message: 'Location is required' }),
  spaceType: z.string().min(1, { message: 'Space type is required' }),
  footfall: z.string().min(1, { message: 'Estimated footfall is required' }),
  contactName: z.string().min(2, { message: 'Contact name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  message: z.string().optional(),
});

export default function Partner() {
  const { t } = useLanguage();
  const { toast } = useToast();

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
      title: t('Application Submitted', '申請を受け付けました'),
      description: t(
        "Thank you for your interest. We'll be in touch shortly.",
        "ご関心をお寄せいただきありがとうございます。追ってご連絡いたします。"
      ),
    });
    form.reset();
  }

  const bullets = [
    t("Early access to the technology before commercial launch", "商業ローンチ前の技術への早期アクセス"),
    t("Joint development input on deployment and UX", "導入とUXに関する共同開発への参加"),
    t("Measurable impact data from your own environment", "自社環境からの測定可能なインパクトデータ")
  ];

  const industryOptions = [
    { value: 'retail', label: t('Retail', '小売') },
    { value: 'transit', label: t('Transit & Airports', '交通機関・空港') },
    { value: 'public', label: t('Public Infrastructure', '公共インフラ') },
    { value: 'office', label: t('Office', 'オフィス') },
    { value: 'entertainment', label: t('Entertainment', 'エンターテインメント') },
    { value: 'events', label: t('Events', 'イベント') },
    { value: 'other', label: t('Other', 'その他') },
  ];

  const spaceOptions = [
    { value: 'retail', label: t('Retail Space', '小売スペース') },
    { value: 'public', label: t('Public Space', '公共スペース') },
    { value: 'office', label: t('Office Building', 'オフィスビル') },
    { value: 'venue', label: t('Event Venue', 'イベント会場') },
    { value: 'other', label: t('Other', 'その他') },
  ];

  return (
    <section id="partner" className="bg-[var(--color-navy)] text-white section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            <span className="text-[var(--color-sky)] text-label mb-4 block">
              {t('Partner with Us', 'パートナーシップ')}
            </span>
            <h2 className="text-white mb-6">
              {t('Pilot next-generation recycling infrastructure.', '次世代リサイクルインフラのパイロットを。')}
            </h2>
            <p className="text-lg text-[var(--color-mist)] opacity-90 mb-10">
              {t(
                "We are seeking partners in retail, public, and high-traffic environments to co-develop and test Sorta in real-world settings.",
                "小売、公共、トラフィックの多い環境で、実環境でのSortaの共同開発およびテストを行うパートナーを募集しています。"
              )}
            </p>

            <div className="space-y-6">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-[var(--color-gold)] shrink-0 mt-1" size={24} />
                  <p className="font-medium text-lg">{bullet}</p>
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
                      <FormLabel className="text-[var(--color-mist)]">{t('Company Name', '会社名')}</FormLabel>
                      <FormControl>
                        <Input placeholder="" className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus-visible:ring-[var(--color-gold)]" {...field} data-testid="input-partner-company" />
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
                        <FormLabel className="text-[var(--color-mist)]">{t('Industry', '業界')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus:ring-[var(--color-gold)]" data-testid="select-partner-industry">
                              <SelectValue placeholder={t("Select...", "選択してください")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industryOptions.map(opt => (
                              <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
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
                        <FormLabel className="text-[var(--color-mist)]">{t('Type of Space', 'スペースの種類')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus:ring-[var(--color-gold)]" data-testid="select-partner-space">
                              <SelectValue placeholder={t("Select...", "選択してください")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {spaceOptions.map(opt => (
                              <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
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
                        <FormLabel className="text-[var(--color-mist)]">{t('Location', '所在地')}</FormLabel>
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
                        <FormLabel className="text-[var(--color-mist)]">{t('Est. Daily Footfall', '推定1日訪問者数')}</FormLabel>
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
                        <FormLabel className="text-[var(--color-mist)]">{t('Contact Name', '担当者名')}</FormLabel>
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
                        <FormLabel className="text-[var(--color-mist)]">{t('Email Address', 'メールアドレス')}</FormLabel>
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
                      <FormLabel className="text-[var(--color-mist)]">{t('Message (Optional)', 'メッセージ（任意）')}</FormLabel>
                      <FormControl>
                        <Textarea className="bg-[var(--color-navy)] border-[var(--color-mist)]/30 text-white focus-visible:ring-[var(--color-gold)] resize-none" rows={3} {...field} data-testid="input-partner-message" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4 flex flex-col items-start gap-4">
                  <Button type="submit" className="bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold)]/90 font-bold px-8 py-6 text-lg w-full md:w-auto" data-testid="button-partner-submit">
                    {t('Apply for Pilot', 'パイロットを申請する')}
                  </Button>
                  <button type="button" className="text-[var(--color-sky)] hover:text-white flex items-center gap-2 text-sm font-semibold transition-colors mt-2" data-testid="button-partner-poc">
                    {t('Start a PoC discussion', 'PoC相談を始める')} <ArrowRight size={16} />
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
