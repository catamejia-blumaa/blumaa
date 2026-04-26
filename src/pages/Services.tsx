import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLang } from "@/lib/LanguageContext";

const Services = () => {
  const { t } = useLang();
  const sv = t.services;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-blue">
        <div className="container max-w-3xl relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-light-yellow font-semibold text-sm uppercase tracking-[0.2em] mb-4 drop-shadow-sm">{sv.badge}</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-serif text-white-chocolate leading-tight mb-6 drop-shadow-sm">
              {sv.h1}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-white-chocolate text-lg leading-relaxed">
              {sv.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service blocks */}
      {sv.list.map((s, i) => (
        <section key={i} className={`py-20 ${i % 2 === 1 ? "bg-white" : "bg-white-chocolate"}`}>
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
                  <Link to="/contact">{sv.getStarted} <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="bg-blue-dark text-white-chocolate rounded-xl p-8 mb-6 shadow-xl">
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 text-light-yellow">{sv.whatsIncluded}</h4>
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
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-3 text-blue-dark">{sv.whoItsFor}</h4>
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
            <h2 className="text-4xl md:text-5xl font-serif mb-6 drop-shadow-sm">{sv.ctaH2}</h2>
            <p className="text-white-chocolate text-lg mb-8 max-w-xl mx-auto">{sv.ctaBody}</p>
            <Button asChild size="lg" className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
              <Link to="/contact">{sv.ctaBtn} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
