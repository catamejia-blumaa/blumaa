import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const About = () => {
  const { lang } = useLang();
  const tr = t[lang].about;

  return (
    <Layout>
      {/* ── Hero ── Crema bg + Night text ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-crema">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-blue font-mono font-medium text-xs uppercase tracking-[0.3em] mb-4"
            >
              {tr.tag}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-night leading-tight mb-8 md:mb-10"
            >
              {tr.heroH1}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-biro text-blue text-xl sm:text-2xl md:text-3xl leading-relaxed text-center select-none"
            >
              {tr.heroBody.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Founder Story ── Blue bg + Crema text ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-blue">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-10 md:gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div
                className="overflow-hidden shadow-xl mx-auto w-40 sm:w-52 md:w-full aspect-square"
                style={{ transform: "rotate(-8deg)", borderRadius: "var(--r-md)" }}
              >
                <img src="/Photo_Cata.jpg" alt={tr.founderName} className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-butter font-mono text-xs uppercase tracking-[0.2em] mb-1">{tr.founderTag1}</p>
                <p className="text-butter font-mono text-xs uppercase tracking-[0.2em] mb-2">{tr.founderTag2}</p>
                <p className="text-crema text-base font-serif">{tr.founderName}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-crema mb-6 md:mb-8 leading-tight">
                {tr.founderH2}
              </h2>
              <div className="space-y-4 md:space-y-6 text-crema/80 text-sm md:text-base lg:text-lg leading-relaxed">
                <p>{tr.founderP1}</p>
                <p>{tr.founderP2}</p>
                <p>{tr.founderP3}</p>
                <p>{tr.founderP4}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pull Quote ── Crema bg ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-crema">
        <div className="container max-w-4xl text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-night leading-tight mb-8"
          >
            {tr.quoteMain} <em className="text-blue">{tr.quoteEmphasis}</em>
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-biro text-blue text-xl sm:text-2xl md:text-3xl leading-relaxed pointer-events-none select-none"
            style={{ transform: "rotate(-1deg)", display: "inline-block" }}
          >
            {tr.biro.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </motion.p>
        </div>
      </section>

      {/* ── The Method ── Butter bg + Blue/Night text ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-butter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <p className="text-blue font-mono font-medium text-xs uppercase tracking-[0.3em] mb-4">{tr.methodTag}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-night">
              {tr.methodH2}
              <br />
              <span className="text-night/50 text-base sm:text-xl md:text-2xl font-sans font-normal">{tr.methodSub}</span>
            </h2>
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

      {/* ── The Way It Works ── Crema bg ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-crema">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 text-center"
          >
            <p className="text-blue font-mono font-medium text-xs uppercase tracking-[0.3em] mb-4">{tr.wayTag}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-night leading-tight">{tr.wayH2}</h2>
          </motion.div>

          {/* Two-column diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-12 md:mb-16"
          >
            {/* Strategy — Butter card with blue border (Butter on Crema → add border) */}
            <div className="bg-butter border-[1.5px] border-blue rounded-lg p-6 md:p-8">
              <p className="text-night/60 font-mono text-xs uppercase tracking-[0.2em] mb-2">{tr.wayThink}</p>
              <h3 className="text-3xl md:text-4xl font-serif text-blue mb-6">Strategy</h3>
              <div className="space-y-2.5 text-sm text-night/70">
                {tr.wayItems1.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand — Blue card */}
            <div className="bg-blue rounded-lg p-6 md:p-8">
              <p className="text-butter font-mono text-xs uppercase tracking-[0.2em] mb-2">{tr.wayBuild}</p>
              <h3 className="text-3xl md:text-4xl font-serif text-crema mb-6">Brand</h3>
              <div className="space-y-2.5 text-sm text-crema/75">
                {tr.wayItems2.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-butter flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p
              className="text-night/80 text-sm md:text-base lg:text-lg leading-relaxed text-center"
              dangerouslySetInnerHTML={{ __html: tr.wayBody }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── Crema bg ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-crema">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <p className="text-blue font-mono font-medium text-xs uppercase tracking-[0.3em] mb-4">{tr.timelineTag}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-night mb-4 leading-tight">{tr.timelineH2}</h2>
            <p className="text-night/70 text-sm md:text-base leading-relaxed">{tr.timelineBody}</p>
          </motion.div>

          <div className="relative">
            {/* Vertical line — desktop */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-blue/20 hidden md:block" />
            <div className="space-y-8 md:space-y-12">
              {tr.timelineSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative md:pl-20 pl-8 border-l-2 border-blue/20 md:border-0"
                >
                  {/* Circle — desktop */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue flex items-center justify-center font-serif text-crema text-base shadow-md hidden md:flex">
                    {step.num}
                  </div>
                  {/* Dot — mobile */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue md:hidden" />
                  <p className="text-blue font-mono text-xs uppercase tracking-widest mb-1">{step.tag}</p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-night mb-3 leading-tight">{step.title}</h3>
                  <div
                    className="text-night/75 text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.body }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── Blue bg + Butter btn ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-blue">
        <div className="container text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-crema mb-8 leading-tight">
              {tr.ctaH2}
            </h2>
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

export default About;
