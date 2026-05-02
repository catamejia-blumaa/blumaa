import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const Index = () => {
  const { lang } = useLang();
  const tr = t[lang].index;

  return (
    <Layout>
      {/* ── Hero ── Blue bg + Crema text ────────────────── */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-blue">
        <div className="container relative z-10 py-24 md:py-32">
          {/* Biro accent — desktop only */}
          <motion.p
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: -5 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-20 right-8 md:right-24 lg:right-36 hidden md:block pointer-events-none font-biro text-crema text-2xl md:text-3xl leading-snug text-center select-none"
          >
            {tr.biroHero}
          </motion.p>

          <motion.div initial="hidden" animate="visible" className="max-w-5xl">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-butter font-mono font-medium text-xs uppercase tracking-[0.3em] mb-6"
            >
              {tr.agencyTag}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.02] sm:leading-[0.92] md:leading-[0.88] mb-8 md:mb-10 text-crema uppercase"
            >
              {tr.heroH1a} <em>{tr.heroH1b}</em> {tr.heroH1c} <em>{tr.heroH1d}</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-crema/80 text-base md:text-xl lg:text-2xl max-w-2xl mb-10 md:mb-12 leading-relaxed"
            >
              {tr.heroBody}
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA: Butter bg + Blue text */}
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-butter text-blue hover:opacity-85 hover:-translate-y-px rounded-pill px-8 md:px-10 py-6 text-sm font-medium transition-all duration-200 shadow-none border-none"
              >
                <Link to="/contact">{tr.heroCta} <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              {/* Ghost CTA: transparent + Crema border */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent text-crema border-[1.5px] border-crema hover:bg-crema/10 hover:-translate-y-px rounded-pill px-8 md:px-10 py-6 text-sm font-medium transition-all duration-200"
              >
                <Link to="/portfolio">{lang === "es" ? "Ver portafolio" : "See portfolio"}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Pain Points ── Crema bg, Butter cards w/ blue border ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-crema">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-serif text-night text-center mb-12 md:mb-16 leading-tight"
          >
            {tr.painTitle}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {tr.pains.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-butter border-[1.5px] border-blue rounded-lg p-6 md:p-8"
              >
                <h3 className="text-lg md:text-xl font-serif text-night mb-3 leading-snug">{pain.title}</h3>
                <p className="text-night/70 text-sm leading-relaxed">{pain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── Crema bg, Blue cards ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-crema">
        <div className="container max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <p className="text-blue font-mono font-medium text-xs uppercase tracking-[0.3em] mb-4">{tr.servicesTag}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-night uppercase leading-tight max-w-4xl">
              {tr.servicesH2a} <em className="text-blue">{tr.servicesH2b}</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {tr.services.map((s, i) => (
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
                  className="group flex flex-col bg-blue rounded-lg p-6 md:p-8 h-full hover:opacity-90 transition-all duration-200 hover:-translate-y-1"
                >
                  <p className="text-butter font-mono text-xs uppercase tracking-[0.2em] mb-4">0{i + 1}</p>
                  <h3 className="text-xl md:text-2xl font-serif text-crema uppercase mb-3">{s.title}</h3>
                  <p className="text-crema/75 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-6 flex items-center gap-1 text-butter text-sm font-medium">
                    {lang === "es" ? "Saber más" : "Learn more"} <ArrowRight size={14} className="mt-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Method ── Butter bg + Blue text (hero swap) ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-butter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 relative"
          >
            <p className="text-blue font-mono font-medium text-xs uppercase tracking-[0.3em] mb-4">
              {tr.methodTag}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-night">
              {tr.methodH2}
              <br />
              <span className="text-night/50 text-base sm:text-xl md:text-2xl font-sans font-normal">
                {tr.methodSub}
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-0 right-0 font-biro text-blue text-xl md:text-2xl leading-snug hidden md:block pointer-events-none select-none"
              style={{ transform: "rotate(3deg)" }}
            >
              {tr.biroMethod.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {tr.methodSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-blue rounded-lg p-6 md:p-8"
              >
                <span className="text-4xl md:text-5xl font-serif text-butter/60">{step.num}</span>
                <h3 className="text-lg md:text-xl font-serif text-crema mt-3 mb-2">{step.title}</h3>
                <p className="text-crema/75 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── Blue bg + Butter btn ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-blue">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-crema uppercase leading-tight mb-6 md:mb-8">
              {tr.ctaH2a} <em>{tr.ctaH2b}</em>
            </h2>
            <p className="text-crema/75 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {tr.ctaBody}
            </p>
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

export default Index;
