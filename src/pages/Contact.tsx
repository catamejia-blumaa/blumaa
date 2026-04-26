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

const faqs = [
  { q: "What happens after I apply?", a: "You'll hear back within 48 hours. If it's a good fit, I'll schedule a discovery call to dive deeper." },
  { q: "How long does a typical project take?", a: "Most branding projects run 6,10 weeks. Strategy-only engagements are typically 3,4 weeks." },
  { q: "Do you take on every client?", a: "No, and that's a feature, not a bug. I only take on projects where I know I can deliver real results." },
  { q: "What if I'm not sure what I need?", a: "That's exactly what the discovery call is for. Fill out the form and I'll figure it out with you." },
];

const Contact = () => {
  const { toast } = useToast();
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
        headers: {
          "Content-Type": "application/json",
        },
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

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({ title: "Application received!", description: "I'll be in touch within 48 hours. In the meantime, stalk my portfolio. 😉" });
      setFormData({ name: "", email: "", business: "", website: "", service: "", stage: "", budget: "", timeline: "", challenge: "" });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
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
            <motion.p variants={fadeUp} custom={0} className="text-blue font-semibold text-sm uppercase tracking-[0.2em] mb-4">Apply</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-serif text-night leading-tight mb-6">
              Let's see if we're a fit.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-night/80 text-lg leading-relaxed">
              This isn't a generic contact form, it's the start of a conversation. The more you share, the better I can understand if (and how) I can help.
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
                  <Label htmlFor="name" className="text-night">Your Name *</Label>
                  <Input id="name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} required placeholder="Jane Doe" className="bg-white-chocolate border-blue/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-night">Email *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} required placeholder="jane@company.com" className="bg-white-chocolate border-blue/20" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="business" className="text-night">Business Name</Label>
                  <Input id="business" value={formData.business} onChange={(e) => updateField("business", e.target.value)} placeholder="Acme Inc." className="bg-white-chocolate border-blue/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-night">Current Website</Label>
                  <Input id="website" value={formData.website} onChange={(e) => updateField("website", e.target.value)} placeholder="https://" className="bg-white-chocolate border-blue/20" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-night">Service Interest *</Label>
                  <Select value={formData.service} onValueChange={(v) => updateField("service", v)}>
                    <SelectTrigger className="bg-white-chocolate border-blue/20"><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="rebranding">Rebranding</SelectItem>
                      <SelectItem value="naming">Naming</SelectItem>
                      <SelectItem value="strategy">Brand & Growth Strategy</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-night">Business Stage *</Label>
                  <Select value={formData.stage} onValueChange={(v) => updateField("stage", v)}>
                    <SelectTrigger className="bg-white-chocolate border-blue/20"><SelectValue placeholder="Where are you now?" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idea">Just an idea</SelectItem>
                      <SelectItem value="startup">Early-stage startup</SelectItem>
                      <SelectItem value="established">Established business</SelectItem>
                      <SelectItem value="pivoting">Pivoting / reinventing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-night">Budget Range *</Label>
                  <Select value={formData.budget} onValueChange={(v) => updateField("budget", v)}>
                    <SelectTrigger className="bg-white-chocolate border-blue/20"><SelectValue placeholder="Select range" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10k">$5,000, $10,000</SelectItem>
                      <SelectItem value="10-20k">$10,000, $20,000</SelectItem>
                      <SelectItem value="20-50k">$20,000, $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-night">Timeline</Label>
                  <Input id="timeline" value={formData.timeline} onChange={(e) => updateField("timeline", e.target.value)} placeholder="e.g., Q2 2026 launch" className="bg-white-chocolate border-blue/20" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge" className="text-night">Tell me about your brand challenge *</Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => updateField("challenge", e.target.value)}
                  required
                  rows={5}
                  placeholder="What's not working? What are you trying to achieve? The more context, the better."
                  className="bg-white-chocolate border-blue/20"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 text-base shadow-md hover:shadow-lg transition-all font-semibold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
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
                <h3 className="font-serif text-xl mb-4">What to Expect</h3>
                <ol className="space-y-4 text-sm text-white-chocolate/90">
                  <li className="flex gap-3"><span className="text-pink font-bold">1.</span> You submit this form (takes ~5 min)</li>
                  <li className="flex gap-3"><span className="text-pink font-bold">2.</span> I review and respond within 48 hours</li>
                  <li className="flex gap-3"><span className="text-pink font-bold">3.</span> If it's a fit, I hop on a discovery call with you</li>
                  <li className="flex gap-3"><span className="text-pink font-bold">4.</span> You receive a tailored proposal</li>
                  <li className="flex gap-3"><span className="text-pink font-bold">5.</span> I build something remarkable for you</li>
                </ol>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-xl text-night">FAQ</h3>
                {faqs.map((faq, i) => (
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
