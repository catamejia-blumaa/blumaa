import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";

const services = [
  { title: "Branding", desc: "I start by understanding your business, your market, and what makes you different. Then I build a visual identity that actually communicates it , not just decoration.", icon: Sparkles },
  { title: "Rebranding", desc: "Your business evolved but your brand is stuck in the past. I'll rebuild everything to match the company you've become , and where you're headed.", icon: Rocket },
  { title: "Brand & Growth Strategy", desc: "Can't explain what you do in a way that clicks? I'll find the words, clarify your positioning, and build the messaging that makes people get it.", icon: Target },
];


const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="min-h-screen flex items-center relative overflow-hidden bg-blue text-white-chocolate">
      <div className="container relative z-10 py-20">
        {/* Handwritten annotation */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, y: 10 }}
          animate={{ opacity: 1, rotate: -6, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute top-16 right-8 md:right-20 lg:right-32 hidden md:block pointer-events-none"
        >
          <p className="font-biro text-white-chocolate/70 text-2xl md:text-3xl leading-snug text-center" style={{ transform: "rotate(-6deg)" }}>
            La magia del<br />branding
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p variants={fadeUp} custom={0} className="text-light-yellow font-mono font-semibold text-xs uppercase tracking-[0.3em] mb-8 drop-shadow-sm">
            Branding & Growth Agency
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.85] mb-10 text-white-chocolate uppercase max-w-5xl drop-shadow-sm">
            Your work is <span className="italic font-bold">excellent.</span> Your brand <span className="italic font-bold">doesn't show it.</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl lg:text-2xl text-white-chocolate max-w-2xl mb-12 leading-relaxed">
            You've tried the cheap logo. The DIY tools. The freelancer who didn't quite get it. <span className="italic font-bold text-light-yellow drop-shadow-sm">What you need is someone who understands your business first</span> , then builds a brand that finally matches the quality of your work.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-6">
            <Button asChild size="lg" className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
              <Link to="/contact">Start Your Project <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Pain Points Section */}
    <section className="py-20 md:py-24 lg:py-32 bg-white-chocolate text-night">
      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-night max-w-3xl mx-auto leading-tight mb-4">
            Sound familiar?
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: "Your brand doesn't match your work",
              desc: "You're serving clients, doing great work, making money , but your visual presence makes you look smaller than you are. And you know it's costing you opportunities."
            },
            {
              title: "You can't find the words",
              desc: "You know what you do. But explaining it clearly , on your website, in your bio, at a networking event , feels impossible. The brand is in your head. It just won't come out."
            },
            {
              title: "You've tried cheap and felt worse",
              desc: "The freelance logo that's forgettable. The DIY brand that took weeks and still feels off. You don't need more design. You need someone who understands you first."
            }
          ].map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl md:text-2xl font-serif font-bold text-night mb-4 leading-tight">{pain.title}</h3>
              <p className="text-night/75 leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-24 md:py-32 lg:py-40 bg-white-chocolate text-night">
      <div className="container max-w-7xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 lg:mb-20">
          <p className="text-blue font-mono font-semibold text-xs uppercase tracking-[0.3em] mb-4">How I Fix It</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.85] text-night uppercase max-w-4xl">Strategy first. <span className="italic font-bold text-blue">Then design.</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <Link
                to="/services"
                className="block bg-white border-2 border-blue/10 rounded-xl p-8 lg:p-10 hover:border-blue hover:shadow-xl transition-all group h-full hover:scale-105"
              >
                <s.icon className="text-blue mb-6 group-hover:text-light-yellow transition-colors drop-shadow-sm" size={32} />
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-night mb-3 group-hover:text-blue transition-colors uppercase">{s.title}</h3>
                <p className="text-night/75 text-base leading-relaxed">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* The Method */}
    <section className="py-24 md:py-32 bg-blue text-white-chocolate">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <p className="text-light-yellow font-semibold text-sm uppercase tracking-[0.2em] mb-3 drop-shadow-sm">
            The Method
          </p>
          <h2 className="text-4xl md:text-5xl font-serif drop-shadow-sm">
            How the magic happens.
            <br />
            <span className="text-white-chocolate/70 text-2xl font-sans font-normal">
              (Spoiler: it's not magic. It's method.)
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute top-0 right-0 font-biro text-white-chocolate/60 text-xl md:text-2xl leading-snug hidden md:block pointer-events-none"
            style={{ transform: "rotate(3deg)" }}
          >
            Lo que más importa es<br />que disfrutemos el<br />proceso
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Discover", desc: "Deep dive into your business, audience, and competitors. No fluff research , actionable insights." },
            { num: "02", title: "Define", desc: "Crystallize your positioning, messaging, and brand architecture. This is where clarity happens." },
            { num: "03", title: "Design", desc: "Bring the strategy to life with identity, visuals, and brand assets that command attention." },
            { num: "04", title: "Grow", desc: "Launch strategy, growth playbook, and ongoing support to make sure your brand actually moves the needle." }
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="relative rounded-lg p-4 transition-all"
            >
              <span className="text-5xl font-serif text-light-yellow/50">{step.num}</span>
              <h3 className="text-xl font-serif mt-2 mb-3">{step.title}</h3>
              <p className="text-white-chocolate/85 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="py-24 md:py-32 lg:py-40 bg-blue text-white-chocolate">
      <div className="container text-center max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.85] mb-8 text-white-chocolate uppercase drop-shadow-sm">Ready for a brand that <span className="italic font-bold">finally matches your work?</span></h2>
          <p className="text-white-chocolate text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            No sales pitch. No cookie-cutter packages. Just an honest conversation about your business , what makes it different, where you're going, and how I can build a brand that gets you there.
          </p>
          <Button asChild size="lg" className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
            <Link to="/contact">Let's Talk <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
