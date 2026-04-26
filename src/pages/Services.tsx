import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const Services = () => {
  const { lang } = useLang();
  const tr = t[lang].services;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-24 lg:py-32 bg-blue">
        <div className="container max-w-3xl relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-light-yellow font-semibold text-xs uppercase tracking-[0.2em] mb-3 md:mb-4 drop-shadow-sm">{tr.tag}</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-white-chocolate leading-tight mb-3 md:mb-6 drop-shadow-sm">
              {tr.heroH1}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-white-chocolate text-sm md:text-lg leading-relaxed">
              {tr.heroBody}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service blocks */}
      {tr.services.map((s, i) => (
        <section key={i} className={`py-10 md:py-16 lg:py-20 ${i % 2 === 1 ? "bg-white" : "bg-white-chocolate"}`}>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-start"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <span className="text-blue font-semibold text-xs uppercase tracking-[0.2em]">0{i + 1}</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-night mt-1 md:mt-2 mb-1 md:mb-2">{s.title}</h2>
                <p className="text-sm md:text-lg font-serif text-blue italic mb-3 md:mb-6">{s.tagline}</p>
                <p className="text-night/85 leading-relaxed mb-5 md:mb-8 text-sm md:text-base">{s.desc}</p>
                <Button asChild className="w-full sm:w-auto bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-4 sm:px-6 md:px-8 shadow-md hover:shadow-lg transition-all font-semibold hover:scale-105 text-sm">
                  <Link to="/contact">{tr.getStarted} <ArrowRight className="ml-2" size={14} /></Link>
                </Button>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="bg-blue-dark text-white-chocolate rounded-xl p-4 md:p-8 mb-3 md:mb-6 shadow-xl">
                  <h4 className="font-sans font-semibold text-xs uppercase tracking-widest mb-2 md:mb-4 text-light-yellow">{tr.included}</h4>
                  <ul className="space-y-2 md:space-y-3">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm">
                        <span className="text-light-yellow mt-0.5 flex-shrink-0">✦</span>
                        <span className="text-white-chocolate/95">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 md:p-8 border-2 border-blue/10 shadow-md">
                  <h4 className="font-sans font-semibold text-xs uppercase tracking-widest mb-2 md:mb-3 text-blue-dark">{tr.forWho}</h4>
                  <p className="text-xs md:text-sm text-night/85 leading-relaxed">{s.forWho}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-12 md:py-24 bg-blue-dark text-white-chocolate">
        <div className="container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif mb-3 md:mb-6 drop-shadow-sm">{tr.ctaH2}</h2>
            <p className="text-white-chocolate text-sm md:text-lg mb-5 md:mb-8 max-w-xl mx-auto">
              {tr.ctaBody}
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-6 sm:px-8 md:px-10 shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105 text-sm sm:text-base">
              <Link to="/contact">{tr.ctaBtn} <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
