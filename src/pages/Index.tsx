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
        <div className="container relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-light-yellow font-mono font-semibold text-xs uppercase tracking-[0.3em] mb-8 drop-shadow-sm">
              {tr.agencyTag}
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.85] mb-10 text-white-chocolate uppercase max-w-5xl drop-shadow-sm">
                {tr.heroH1a} <span className="italic font-bold">{tr.heroH1b}</span>
                <br />
                <span className="relative inline-block">
                  {/* Biro above this line */}
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="font-biro not-italic font-normal text-white-chocolate text-lg md:text-2xl lg:text-3xl leading-none pointer-events-none absolute -top-8 md:-top-10 lg:-top-12 left-0"
                    style={{ transform: "rotate(-4deg)", whiteSpace: "nowrap" }}
                  >
                    {tr.biroHero}
                  </motion.span>
                  {tr.heroH1c}
                </span>{" "}<span className="italic font-bold">{tr.heroH1d}</span>
              </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl lg:text-2xl text-white-chocolate max-w-2xl mb-12 leading-relaxed">
              {tr.heroBody.split(" , ").map((part, i, arr) => (
                i === 1 ? <span key={i}><span className="italic font-bold text-light-yellow drop-shadow-sm"> , {part}</span>{arr[2] ? "" : ""}</span> : (i === 0 ? part : "")
              ))}
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-6">
              <Button asChild size="lg" className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
                <Link to="/contact">{tr.heroCta} <ArrowRight className="ml-2" size={18} /></Link>
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
              {tr.painTitle}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {tr.pains.map((pain, i) => (
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
            <p className="text-blue font-mono font-semibold text-xs uppercase tracking-[0.3em] mb-4">{tr.servicesTag}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.85] text-night uppercase max-w-4xl">
              {tr.servicesH2a} <span className="italic font-bold text-blue">{tr.servicesH2b}</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
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
                    className="block bg-white border-2 border-blue/10 rounded-xl p-8 lg:p-10 hover:border-blue hover:shadow-xl transition-all group h-full hover:scale-105"
                  >
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            <p className="text-light-yellow font-semibold text-sm uppercase tracking-[0.2em] mb-3 drop-shadow-sm">
              {tr.methodTag}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif drop-shadow-sm">
              {tr.methodH2}
              <br />
              <span className="text-white-chocolate/70 text-2xl font-sans font-normal">
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
          <div className="grid md:grid-cols-4 gap-8">
            {tr.methodSteps.map((step, i) => (
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.85] mb-8 text-white-chocolate uppercase drop-shadow-sm">
              {tr.ctaH2a} <span className="italic font-bold">{tr.ctaH2b}</span>
            </h2>
            <p className="text-white-chocolate text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {tr.ctaBody}
            </p>
            <Button asChild size="lg" className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
              <Link to="/contact">{tr.ctaBtn} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
