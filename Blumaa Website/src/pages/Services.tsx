import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    title: "Branding",
    tagline: "For businesses that need a brand from scratch.",
    desc: "Starting fresh? I'll build a brand that makes you look as credible as you are. Not a cheap logo that you'll outgrow in six months. A complete brand system built on real strategy , positioning, messaging, and visual identity that positions you as a leader from day one.",
    includes: ["Brand Strategy & Positioning", "Visual Identity Design", "Brand Voice & Messaging", "Brand Guidelines & Asset Library"],
    forWho: "New businesses that refuse to look like amateurs. You want to compete with established players, not look like you're still figuring it out.",
  },
  {
    title: "Rebranding",
    tagline: "For businesses that outgrew their brand.",
    desc: "Your business evolved but your brand didn't keep up. It's making you look smaller, less credible, harder to explain. I'll rebuild everything , strategy, positioning, messaging, visual identity , so your brand finally matches the quality of your work.",
    includes: ["Brand Audit & Analysis", "Repositioning Strategy", "Updated Visual Identity", "Migration & Launch Plan"],
    forWho: "Established businesses tired of looking less impressive than they actually are. Your work is excellent. Your brand doesn't show it.",
  },
  {
    title: "Naming",
    tagline: "For businesses that need the right name.",
    desc: "The wrong name makes everything harder , harder to explain, harder to remember, harder to scale. I don't just brainstorm words. I build names rooted in strategy, tested for memorability, and cleared for trademark availability.",
    includes: ["Naming Strategy & Direction", "Name Generation & Shortlisting", "Linguistic & Cultural Screening", "Trademark Availability Check"],
    forWho: "New ventures or businesses ready for a name that actually means something , not just something that was available on Instagram.",
  },
  {
    title: "Brand & Growth Strategy",
    tagline: "For businesses that can't explain what they do.",
    desc: "You know what you do. But when you try to explain it , on your website, at a networking event, in your elevator pitch , it just doesn't land. I'll find the words, clarify your positioning, and build messaging that makes people finally get it.",
    includes: ["Market & Competitor Analysis", "Audience Personas & Journey Mapping", "Positioning & Messaging Framework", "Growth Roadmap & Launch Strategy"],
    forWho: "Businesses that are tired of people not understanding what they do. The brand is in your head. I'll get it out.",
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 md:py-32 bg-blue">
      <div className="container max-w-3xl relative z-10">
        <motion.div initial="hidden" animate="visible">
          <motion.p variants={fadeUp} custom={0} className="text-light-yellow font-semibold text-sm uppercase tracking-[0.2em] mb-4 drop-shadow-sm">Services</motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-serif text-white-chocolate leading-tight mb-6 drop-shadow-sm">
            The difference? I understand your business first.
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-white-chocolate text-lg leading-relaxed">
            No cookie-cutter templates. No generic packages that work for everyone and no one. Every engagement starts with understanding your business, your market, and what makes you different , then I build a brand that communicates all of that.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Service blocks */}
    {services.map((s, i) => (
      <section key={s.title} className={`py-20 ${i % 2 === 1 ? "bg-white" : "bg-white-chocolate"}`}>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid md:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <span className="text-blue font-semibold text-sm uppercase tracking-[0.2em]">0{i + 1}</span>
              <h2 className="text-3xl md:text-4xl font-serif text-night mt-2 mb-2">{s.title}</h2>
              <p className="text-lg font-serif text-blue italic mb-6">{s.tagline}</p>
              <p className="text-night/85 leading-relaxed mb-8">{s.desc}</p>
              <Button asChild className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-8 shadow-md hover:shadow-lg transition-all font-semibold hover:scale-105">
                <Link to="/contact">Get Started <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="bg-blue-dark text-white-chocolate rounded-xl p-8 mb-6 shadow-xl">
                <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 text-light-yellow">What's Included</h4>
                <ul className="space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="text-light-yellow mt-0.5">✦</span>
                      <span className="text-white-chocolate/95">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border-2 border-blue/10 shadow-md">
                <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-3 text-blue-dark">Who It's For</h4>
                <p className="text-sm text-night/85 leading-relaxed">{s.forWho}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="py-24 bg-blue-dark text-white-chocolate">
      <div className="container text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 drop-shadow-sm">Not sure where to start?</h2>
          <p className="text-white-chocolate text-lg mb-8 max-w-xl mx-auto">
            Let's figure it out together. No sales pitch. No pressure. Just an honest conversation about your business and what you actually need.
          </p>
          <Button asChild size="lg" className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
            <Link to="/contact">Let's Talk <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
