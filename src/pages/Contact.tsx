import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { Eyebrow, Polaroid, Reveal, Script } from "@/components/design";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

type FormData = {
  name: string;
  email: string;
  business: string;
  website: string;
  service: string;
  stage: string;
  budget: string;
  timeline: string;
  challenge: string;
};

const emptyForm: FormData = {
  name: "", email: "", business: "", website: "",
  service: "", stage: "", budget: "", timeline: "", challenge: "",
};

/* Shared input class — pill shape, blue border per DS */
const inputClass = "bg-crema border-[1.5px] border-blue/30 rounded-pill h-11 text-sm text-night placeholder:text-night/40 focus-visible:ring-0 focus-visible:border-blue focus:shadow-[0_0_0_3px_rgba(38,66,255,0.12)] transition-shadow";
const selectTriggerClass = "bg-crema border-[1.5px] border-blue/30 rounded-pill h-11 text-sm text-night focus:ring-0 focus:border-blue focus:shadow-[0_0_0_3px_rgba(38,66,255,0.12)] transition-shadow";

const Contact = () => {
  const { lang } = useLang();
  const tr = t[lang].contact;
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/26620857/u01v4vy/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name:      formData.name,
          Email:     formData.email,
          Business:  formData.business,
          Website:   formData.website,
          Service:   formData.service,
          Stage:     formData.stage,
          Budget:    formData.budget,
          Timeline:  formData.timeline,
          Challenge: formData.challenge,
        }),
      });
      if (!response.ok) throw new Error("Submit failed");
      toast({ title: tr.toastTitle, description: tr.toastDesc });
      setFormData(emptyForm);
    } catch {
      toast({ title: tr.toastError, description: tr.toastErrorDesc, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* ── Title band ── Butter bg + Blue text · photo straddles into the form section ── */}
      <section className="relative bg-butter pb-28 pt-14 md:pb-40 md:pt-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:grid-cols-[1.5fr_1fr] md:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Eyebrow className="text-blue">{tr.tag}</Eyebrow>
            <h1 className="mt-5 font-serif text-headline uppercase text-blue">{tr.heroH1}</h1>
            <p className="mt-6 max-w-xl text-p2 leading-relaxed text-night/80 md:text-p3">{tr.heroBody}</p>
          </motion.div>
          <div className="relative z-10 hidden md:block">
            <Polaroid
              src="/Cata_portrait.jpg"
              alt="Catalina Mejia"
              rotate={4}
              aspect="4 / 5"
              ring
              priority
              className="ml-auto w-[260px] translate-y-28"
            />
          </div>
        </div>
      </section>

      {/* ── Form + sidebar ── Crema bg ── */}
      <section className="relative bg-crema pb-20 md:pb-32">
        <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
          {/* Script straddles the Butter band above, like Tuesday Co's "Say hello" */}
          <Script
            as="p"
            aria-hidden="true"
            className="pointer-events-none relative z-10 -mt-[0.55em] mb-8 text-[clamp(4rem,12vw,10rem)] leading-none text-pink md:mb-12"
          >
            {tr.scriptHello}
          </Script>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {/* ── Form ── */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:col-span-2 space-y-5 md:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-night font-mono text-xs uppercase tracking-[0.15em]">{tr.labelName}</Label>
                  <Input id="name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} required placeholder="Jane Doe" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-night font-mono text-xs uppercase tracking-[0.15em]">{tr.labelEmail}</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} required placeholder="jane@company.com" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="business" className="text-night font-mono text-xs uppercase tracking-[0.15em]">{tr.labelBusiness}</Label>
                  <Input id="business" value={formData.business} onChange={(e) => updateField("business", e.target.value)} placeholder="Acme Inc." className={inputClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-night font-mono text-xs uppercase tracking-[0.15em]">{tr.labelWebsite}</Label>
                  <Input id="website" value={formData.website} onChange={(e) => updateField("website", e.target.value)} placeholder="https://" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <Label className="text-night font-mono text-xs uppercase tracking-[0.15em]">{tr.labelService}</Label>
                  <Select value={formData.service} onValueChange={(v) => updateField("service", v)}>
                    <SelectTrigger className={selectTriggerClass}><SelectValue placeholder={tr.placeholderService} /></SelectTrigger>
                    <SelectContent className="rounded-lg border-blue/20">
                      {tr.serviceOptions.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-night font-mono text-xs uppercase tracking-[0.15em]">{tr.labelStage}</Label>
                  <Select value={formData.stage} onValueChange={(v) => updateField("stage", v)}>
                    <SelectTrigger className={selectTriggerClass}><SelectValue placeholder={tr.placeholderStage} /></SelectTrigger>
                    <SelectContent className="rounded-lg border-blue/20">
                      {tr.stageOptions.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <Label className="text-night font-mono text-xs uppercase tracking-[0.15em]">{tr.labelBudget}</Label>
                  <Select value={formData.budget} onValueChange={(v) => updateField("budget", v)}>
                    <SelectTrigger className={selectTriggerClass}><SelectValue placeholder={tr.placeholderBudget} /></SelectTrigger>
                    <SelectContent className="rounded-lg border-blue/20">
                      {tr.budgetOptions.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-night font-mono text-xs uppercase tracking-[0.15em]">{tr.labelTimeline}</Label>
                  <Input id="timeline" value={formData.timeline} onChange={(e) => updateField("timeline", e.target.value)} placeholder={tr.placeholderTimeline} className={inputClass} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge" className="text-night font-mono text-xs uppercase tracking-[0.15em]">{tr.labelChallenge}</Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => updateField("challenge", e.target.value)}
                  required
                  rows={5}
                  placeholder={tr.placeholderChallenge}
                  className="bg-crema border-[1.5px] border-blue/30 rounded-lg text-sm text-night placeholder:text-night/40 focus-visible:ring-0 focus-visible:border-blue focus:shadow-[0_0_0_3px_rgba(38,66,255,0.12)] transition-shadow resize-none"
                />
              </div>

              {/* Primary button: Butter bg + Blue text */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-blue text-crema hover:bg-orange hover:text-blue hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 rounded-pill px-10 py-6 text-sm font-medium transition-all duration-200"
              >
                {isSubmitting ? tr.submitting : tr.submit}
              </Button>
            </motion.form>

            {/* ── Sidebar ── */}
            <Reveal delay={0.5} className="space-y-6 md:space-y-8">
              {/* What to expect — Blue card on Crema */}
              <div className="rounded-lg bg-blue p-6 md:p-8">
                <h3 className="mb-5 font-serif text-h3-mob text-crema md:text-h3">{tr.sidebarTitle}</h3>
                <ol className="space-y-3 text-p1 text-crema/80 md:text-p2">
                  {tr.sidebarSteps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 font-mono font-medium leading-relaxed text-butter">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FAQ — Butter card with Blue border on Crema */}
              <div className="space-y-5 rounded-lg border-[1.5px] border-blue bg-butter p-6 md:p-8">
                <h3 className="font-serif text-h3-mob text-night md:text-h3">{tr.faqTitle}</h3>
                {tr.faqs.map((faq, i) => (
                  <div key={i}>
                    <h4 className="mb-1 font-sans text-p1 font-semibold leading-snug text-night">{faq.q}</h4>
                    <p className="text-p1 leading-relaxed text-night/70">{faq.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
