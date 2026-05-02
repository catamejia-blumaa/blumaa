import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
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
      {/* ── Hero + Form ── Crema bg ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-crema">
        <div className="container">
          {/* Header */}
          <motion.div initial="hidden" animate="visible" className="max-w-2xl mb-12 md:mb-16">
            <motion.div variants={fadeUp} custom={0} className="mb-4 flex">
              <span className="inline-flex items-center font-mono font-medium text-xs uppercase tracking-[0.3em] text-night bg-pool-blue rounded-pill px-4 py-1.5">
                {tr.tag}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-night uppercase leading-tight mb-4 md:mb-6"
            >
              {tr.heroH1}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-night/70 text-sm md:text-lg leading-relaxed">
              {tr.heroBody}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* ── Form ── */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
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
                className="w-full sm:w-auto bg-blue text-crema hover:opacity-85 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 rounded-pill px-10 py-6 text-sm font-medium transition-all duration-200"
              >
                {isSubmitting ? tr.submitting : tr.submit}
              </Button>
            </motion.form>

            {/* ── Sidebar ── */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 md:space-y-8"
            >
              {/* What to expect — Blue card */}
              <div className="bg-blue rounded-lg p-6 md:p-8">
                <h3 className="font-serif text-crema text-lg md:text-xl mb-5">{tr.sidebarTitle}</h3>
                <ol className="space-y-3 text-sm text-crema/80">
                  {tr.sidebarSteps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-butter font-mono font-medium flex-shrink-0 leading-relaxed">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FAQ — Butter card with blue border */}
              <div className="bg-butter border-[1.5px] border-blue rounded-lg p-6 md:p-8 space-y-5">
                <h3 className="font-serif text-night text-lg md:text-xl">{tr.faqTitle}</h3>
                {tr.faqs.map((faq, i) => (
                  <div key={i}>
                    <h4 className="font-sans font-semibold text-xs text-night mb-1 leading-snug">{faq.q}</h4>
                    <p className="text-night/70 text-xs md:text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
