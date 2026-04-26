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

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLang();
  const ct = t.contact;

  const [formData, setFormData] = useState({
    name: "", email: "", business: "", website: "",
    service: "", stage: "", budget: "", timeline: "", challenge: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/26620857/u01v4vy/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Business: formData.business,
          Website: formData.website,
          Service: formData.service,
          Stage: formData.stage,
          Budget: formData.budget,
          Timeline: formData.timeline,
          Challenge: formData.challenge,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast({ title: ct.successTitle, description: ct.successDesc });
      setFormData({ name: "", email: "", business: "", website: "", service: "", stage: "", budget: "", timeline: "", challenge: "" });
    } catch {
      toast({ title: ct.errorTitle, description: ct.errorDesc, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <Layout>
      <section className="py-24 md:py-32 bg-white-chocolate">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-blue font-semibold text-sm uppercase tracking-[0.2em] mb-4">{ct.badge}</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-serif text-night leading-tight mb-6">
              {ct.h1}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-night/80 text-lg leading-relaxed">
              {ct.intro}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-night">{ct.nameLabel}</Label>
                  <Input id="name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} required placeholder="Jane Doe" className="bg-white-chocolate border-blue/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-night">{ct.emailLabel}</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} required placeholder="jane@company.com" className="bg-white-chocolate border-blue/20" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="business" className="text-night">{ct.businessLabel}</Label>
                  <Input id="business" value={formData.business} onChange={(e) => updateField("business", e.target.value)} placeholder="Acme Inc." className="bg-white-chocolate border-blue/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-night">{ct.websiteLabel}</Label>
                  <Input id="website" value={formData.website} onChange={(e) => updateField("website", e.target.value)} placeholder="https://" className="bg-white-chocolate border-blue/20" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-night">{ct.serviceLabel}</Label>
                  <Select value={formData.service} onValueChange={(v) => updateField("service", v)}>
                    <SelectTrigger className="bg-white-chocolate border-blue/20"><SelectValue placeholder={ct.selectService} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="branding">{ct.serviceOptions.branding}</SelectItem>
                      <SelectItem value="rebranding">{ct.serviceOptions.rebranding}</SelectItem>
                      <SelectItem value="naming">{ct.serviceOptions.naming}</SelectItem>
                      <SelectItem value="strategy">{ct.serviceOptions.strategy}</SelectItem>
                      <SelectItem value="not-sure">{ct.serviceOptions.notSure}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-night">{ct.stageLabel}</Label>
                  <Select value={formData.stage} onValueChange={(v) => updateField("stage", v)}>
                    <SelectTrigger className="bg-white-chocolate border-blue/20"><SelectValue placeholder={ct.selectStage} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idea">{ct.stageOptions.idea}</SelectItem>
                      <SelectItem value="startup">{ct.stageOptions.startup}</SelectItem>
                      <SelectItem value="established">{ct.stageOptions.established}</SelectItem>
                      <SelectItem value="pivoting">{ct.stageOptions.pivoting}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-night">{ct.budgetLabel}</Label>
                  <Select value={formData.budget} onValueChange={(v) => updateField("budget", v)}>
                    <SelectTrigger className="bg-white-chocolate border-blue/20"><SelectValue placeholder={ct.selectBudget} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10k">{ct.budgetOptions["5-10k"]}</SelectItem>
                      <SelectItem value="10-20k">{ct.budgetOptions["10-20k"]}</SelectItem>
                      <SelectItem value="20-50k">{ct.budgetOptions["20-50k"]}</SelectItem>
                      <SelectItem value="50k+">{ct.budgetOptions["50k+"]}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-night">{ct.timelineLabel}</Label>
                  <Input id="timeline" value={formData.timeline} onChange={(e) => updateField("timeline", e.target.value)} placeholder={ct.timelinePlaceholder} className="bg-white-chocolate border-blue/20" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge" className="text-night">{ct.challengeLabel}</Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => updateField("challenge", e.target.value)}
                  required
                  rows={5}
                  placeholder={ct.challengePlaceholder}
                  className="bg-white-chocolate border-blue/20"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 text-base shadow-md hover:shadow-lg transition-all font-semibold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? ct.submitting : ct.submit}
              </Button>
            </motion.form>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-blue-dark text-white-chocolate rounded-xl p-8 shadow-lg">
                <h3 className="font-serif text-xl mb-4">{ct.sidebarH3}</h3>
                <ol className="space-y-4 text-sm text-white-chocolate/90">
                  {ct.sidebarSteps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-pink font-bold">{i + 1}.</span> {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-xl text-night">{ct.faqTitle}</h3>
                {ct.faqs.map((faq, i) => (
                  <div key={i}>
                    <h4 className="font-sans font-semibold text-sm text-night mb-1">{faq.q}</h4>
                    <p className="text-night/80 text-sm leading-relaxed">{faq.a}</p>
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
