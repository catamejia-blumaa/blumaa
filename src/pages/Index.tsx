import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLang } from "@/lib/LanguageContext";

const serviceIcons = [Sparkles, Rocket, Target];

const Index = () => {
  const { t } = useLang();
  const ix = t.index;

  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-blue text-white-chocolate">
        <div className="container relative z-10 py-20">
          <motion.div initial="hidden" animate="visible" className="max-w-4xl">
            <motion.p variants={fadeUp} custom={0} className="text-light-yellow font-mono font-semibold text-xs uppercase tracking-[0.3em] mb-8 drop-shadow-sm">
              {ix.badge}
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.85] mb-10 text-white-chocolate uppercase max-w-5xl drop-shadow-sm">
              {ix.heroH1a} <span className="italic font-bold">{ix.heroH1b}</span> {ix.heroH1c} <span className="italic font-bold">{ix.heroH1d}</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl lg:text-2xl text-white-chocolate max-w-2xl mb-12 leading-relaxed">
              {ix.heroBody} <span className="italic font-bold text-light-yellow drop-shadow-sm">{ix.heroBodyEmphasis}</span>{ix.heroBodyEnd}
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-6">
              <Button asChild size="lg" className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
                <Link to="/contact">{ix.cta1} <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-dark text-white-chocolate hover:bg-blue-dark/90 rounded-full px-10 py-6 text-base border-2 border-blue-dark hover:scale-105 transition-all shadow-md hover:shadow-lg font-semibold">
                <Link to="/portfolio">{ix.cta2}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-white-chocolate text-night">
        <div className="container max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-night max-w-3xl mx-auto leading-tight mb-4">
              {ix.painTitle}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {ix.pains.map((pain, i) => (
              <motion.div
                key={i}
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
            <p className="text-blue font-mono font-semibold text-xs uppercase tracking-[0.3em] mb-4">{ix.howBadge}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.85] text-night uppercase max-w-4xl">{ix.howH2a} <span className="italic font-bold text-blue">{ix.howH2b}</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {ix.services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                  <Link to="/services" className="block bg-white border-2 border-blue/10 rounded-xl p-8 lg:p-10 hover:border-blue hover:shadow-xl transition-all group h-full hover:scale-105">
                    <Icon className="text-blue mb-6 group-hover:text-light-yellow transition-colors drop-shadow-sm" size={32} />
                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-night mb-3 group-hover:text-blue transition-colors uppercase">{s.title}</h3>
                    <p className="text-night/75 text-base leading-relaxed">{s.desc}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="py-24 md:py-32 bg-blue text-white-chocolate">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-light-yellow font-semibold text-sm uppercase tracking-[0.2em] mb-3 drop-shadow-sm">{ix.methodBadge}</p>
            <h2 className="text-4xl md:text-5xl font-serif drop-shadow-sm">
              {ix.methodH2a}
              <br />
              <span className="text-white-chocolate/70 text-2xl font-sans font-normal">{ix.methodH2b}</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {ix.methodSteps.map((step, i) => (
              <motion.div key={step.num} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="relative rounded-lg p-4 transition-all">
                <span className="text-5xl font-serif text-light-yellow/50">{step.num}</span>
                <h3 className="text-xl font-serif mt-2 mb-3">{step.title}</h3>
                <p className="text-white-chocolate/85 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 lg:py-40 bg-white-chocolate text-night">
        <div className="container max-w-7xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-blue font-mono font-semibold text-xs uppercase tracking-[0.3em] mb-4">{ix.featuredBadge}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[0.85] text-night uppercase max-w-4xl">{ix.featuredH2a} <span className="italic font-bold text-blue">{ix.featuredH2b}</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { name: "Luxe Botanicals", image: "Project 1" },
              { name: "Urban Nest", image: "Project 2" },
              { name: "Peak Performance", image: "Project 3" },
              { name: "Maven & Co", image: "Project 4" },
            ].map((project, i) => (
              <motion.div key={project.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-white rounded-xl flex items-center justify-center border-2 border-blue/20 shadow-lg mb-4 group-hover:border-blue group-hover:shadow-xl transition-all">
                  <span className="text-blue/50 text-sm">{project.image}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-night text-center group-hover:text-blue transition-colors">{project.name}</h3>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <Button asChild variant="outline" className="rounded-full border-2 border-blue-dark text-blue-dark hover:bg-blue-dark hover:text-white-chocolate px-10 py-6 font-semibold hover:scale-105 transition-all shadow-md hover:shadow-lg text-base">
              <Link to="/portfolio">{ix.featuredCta} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 md:py-32 lg:py-40 bg-blue text-white-chocolate">
        <div className="container text-center max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.85] mb-8 text-white-chocolate uppercase drop-shadow-sm">
              {ix.ctaH2a} <span className="italic font-bold">{ix.ctaH2b}</span>
            </h2>
            <p className="text-white-chocolate text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {ix.ctaBody}
            </p>
            <Button asChild size="lg" className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
              <Link to="/contact">{ix.ctaBtn} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
