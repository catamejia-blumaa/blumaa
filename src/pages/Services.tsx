import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

/* One accent per service: Pink, Orange, Pool, Pink */
const SERVICE_ACCENTS = ["#FF62A1", "#FF8231", "#B6ECFF", "#FF62A1"] as const;

const Services = () => {
  const { lang } = useLang();
  const tr = t[lang].services;

  return (
    <Layout>
      {/* ── Hero ── Blue bg + Crema text + Pool Blue orb ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-blue relative overflow-hidden">
        {/* Pool Blue decorative orb */}
        <div
          className="absolute -bottom-20 right-0 w-80 h-80 rounded-full opacity-15 pointer-events-none translate-x-1/2"
          style={{ background: "#B6ECFF" }}
        />
        <div className="container max-w-3xl relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-butter font-mono font-medium text-xs uppercase tracking-[0.3em] mb-4"
            >
              {tr.tag}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-crema uppercase leading-tight mb-5 md:mb-6"
            >
              {tr.heroH1}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-crema/75 text-sm md:text-lg leading-relaxed">
              {tr.heroBody}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Service blocks ── alternating Crema / Butter ── */}
      {tr.services.map((s, i) => {
        const isEven = i % 2 === 0;
        const accent = SERVICE_ACCENTS[i];
        return (
          <section key={i} className={`py-12 md:py-20 lg:py-24 ${isEven ? "bg-crema" : "bg-butter"}`}>
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start"
              >
                {/* Text side */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  {/* Accent numbered pill */}
                  <span
                    className="inline-block font-mono font-semibold text-xs rounded-pill px-3 py-1 mb-4 tracking-[0.2em]"
                    style={{ background: accent, color: accent === "#B6ECFF" ? "#2642FF" : "#231F20" }}
                  >
                    0{i + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-night mb-2 uppercase leading-tight">
                    {s.title}
                  </h2>
                  <p className="text-base md:text-lg font-serif text-blue italic mb-5 md:mb-6">{s.tagline}</p>
                  <p className="text-night/80 leading-relaxed mb-7 md:mb-8 text-sm md:text-base">{s.desc}</p>
                  <Button
                    asChild
                    className="w-full sm:w-auto bg-blue text-crema hover:opacity-85 hover:-translate-y-px rounded-pill px-8 py-5 text-sm font-medium transition-all duration-200"
                  >
                    <Link to="/contact">{tr.getStarted} <ArrowRight className="ml-2" size={14} /></Link>
                  </Button>
                </div>

                {/* Cards side */}
                <div className={`space-y-4 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  {/* Included — Blue card with accent top stripe */}
                  <div className="bg-blue rounded-lg overflow-hidden">
                    <div className="h-1" style={{ background: accent }} />
                    <div className="p-6 md:p-8">
                      <h4
                        className="font-mono font-medium text-xs uppercase tracking-[0.2em] mb-4"
                        style={{ color: accent }}
                      >
                        {tr.included}
                      </h4>
                      <ul className="space-y-2.5">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-crema/90">
                            <span className="mt-0.5 flex-shrink-0 leading-none" style={{ color: accent }}>✦</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* For who — Crema/Butter card with border */}
                  <div className={`rounded-lg p-6 md:p-8 border-[1.5px] ${isEven ? "bg-butter border-blue" : "bg-crema border-blue"}`}>
                    <h4 className="text-blue font-mono font-medium text-xs uppercase tracking-[0.2em] mb-3">{tr.forWho}</h4>
                    <p className="text-sm text-night/80 leading-relaxed">{s.forWho}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── Blue bg + Butter btn + Pink orb ── */}
      <section className="py-16 md:py-24 bg-blue relative overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: "#FF62A1" }}
        />
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-crema mb-4 md:mb-6">{tr.ctaH2}</h2>
            <p className="text-crema/75 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">{tr.ctaBody}</p>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-butter text-blue hover:opacity-85 hover:-translate-y-px rounded-pill px-10 py-6 text-sm font-medium transition-all duration-200"
            >
              <Link to="/contact">{tr.ctaBtn} <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
