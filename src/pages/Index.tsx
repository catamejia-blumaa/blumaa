import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const serviceIcons = [Sparkles, Rocket, Target];

const Index = () => {
  const { lang } = useLang();
  const tr = t[lang].index;

  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-blue text-white-chocolate">
        <div className="container relative z-10 pt-10 pb-16 md:py-20">
          {/* Handwritten annotation — desktop only */}
          <motion.div
            initial={{ opacity: 0, rotate: -6, y: 10 }}
            animate={{ opacity: 1, rotate: -6, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-16 right-8 md:right-20 lg:right-32 hidden md:block pointer-events-none"
          >
            <p className="font-biro text-white-chocolate text-2xl md:text-3xl leading-snug text-center" style={{ transform: "rotate(-6deg)" }}>
              {tr.biroHero}
            </p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center">
            <motion.p variants={fadeUp} custom={0} className="text-light-yellow font-mono font-semibold text-xs uppercase tracking-[0.3em] mb-6 md:mb-8 drop-shadow-sm">
              {tr.agencyTag}
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-[2.75rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.95] sm:leading-[0.9] md:leading-[0.85] mb-7 md:mb-10 text-white-chocolate uppercase max-w-5xl mx-auto drop-shadow-sm">
              {tr.heroH1a} <span className="italic font-bold">{tr.heroH1b}</span> {tr.heroH1c} <span className="italic font-bold">{tr.heroH1d}</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm sm:text-base md:text-xl lg:text-2xl text-white-chocolate max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
              {tr.heroBody}
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-6 sm:px-8 md:px-10 py-5 md:py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
                <Link to="/contact">{tr.heroCta} <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-white-chocolate text-night">
        <div className="container max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-normal text-night max-w-3xl mx-auto leading-tight mb-4">
              {tr.painTitle}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-8 lg:gap-12">
            {tr.pains.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-night mb-2 md:mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: pain.title }} />
                <p className="text-night/75 leading-relaxed text-sm">{pain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-24 lg:py-32 bg-white-chocolate text-night">
        <div className="container max-w-7xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 md:mb-16 lg:mb-20">
            <p className="text-blue font-mono font-semibold text-xs uppercase tracking-[0.3em] mb-3 md:mb-4">{tr.servicesTag}</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.95] md:leading-[0.85] text-night uppercase max-w-4xl">
              {tr.servicesH2a} <span className="italic font-bold text-blue">{tr.servicesH2b}</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
            {tr.services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                >
                  <Link
                    to="/services"
                    className="block bg-white border-2 border-blue/10 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 hover:border-blue hover:shadow-xl transition-all group h-full hover:scale-105"
                  >
                    <Icon className="text-blue mb-4 md:mb-6 group-hover:text-light-yellow transition-colors drop-shadow-sm" size={24} />
                    <h3 className="text-base md:text-xl lg:text-2xl font-serif font-bold text-night mb-2 md:mb-3 group-hover:text-blue transition-colors uppercase">{s.title}</h3>
                    <p className="text-night/75 text-xs md:text-sm lg:text-base leading-relaxed">{s.desc}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="py-12 md:py-24 lg:py-32 bg-blue text-white-chocolate">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-16 relative"
          >
            <p className="text-light-yellow font-semibold text-xs uppercase tracking-[0.2em] mb-2 md:mb-3 drop-shadow-sm">
              {tr.methodTag}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif drop-shadow-sm">
              {tr.methodH2}
              <br />
              <span className="text-white-chocolate/70 text-base sm:text-xl md:text-2xl font-sans font-normal">
                {tr.methodSub}
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-0 right-0 font-biro text-white-chocolate text-xl md:text-2xl leading-snug hidden md:block pointer-events-none"
              style={{ transform: "rotate(3deg)" }}
            >
              {tr.biroMethod.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {tr.methodSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="relative rounded-lg p-3 md:p-4 transition-all"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-light-yellow/50">{step.num}</span>
                <h3 className="text-sm sm:text-base md:text-xl font-serif mt-1 md:mt-2 mb-1 md:mb-3">{step.title}</h3>
                <p className="text-white-chocolate/85 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 md:py-24 lg:py-32 bg-blue text-white-chocolate">
        <div className="container text-center max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.95] md:leading-[0.85] mb-5 md:mb-8 text-white-chocolate uppercase drop-shadow-sm">
              {tr.ctaH2a} <span className="italic font-bold">{tr.ctaH2b}</span>
            </h2>
            <p className="text-white-chocolate text-sm sm:text-base md:text-lg lg:text-xl mb-7 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              {tr.ctaBody}
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-6 sm:px-8 md:px-10 py-5 md:py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
              <Link to="/contact">{tr.ctaBtn} <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
