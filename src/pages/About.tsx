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
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 bg-white-chocolate">
        <div className="container max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-blue font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
              {tr.tag}
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-night leading-tight mb-6 md:mb-8">
              {tr.heroH1}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="font-biro text-blue text-xl sm:text-2xl md:text-3xl leading-relaxed text-center">
              {tr.heroBody.split("\n").map((line, i) => (
                <span key={i}>{line}{i < tr.heroBody.split("\n").length - 1 && <br />}</span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 md:py-24 lg:py-32 bg-blue text-white-chocolate">
        <div className="container max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-8 md:gap-10 lg:gap-12 items-start relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="aspect-square overflow-hidden shadow-xl mx-auto w-48 sm:w-64 md:w-full" style={{ transform: "rotate(-10deg)" }}>
                <img src="/Photo_Cata.jpg" alt={tr.founderName} className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-light-yellow font-mono text-xs uppercase tracking-[0.2em] mb-1">
                  {tr.founderTag1}
                </p>
                <p className="text-light-yellow font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-2">
                  {tr.founderTag2}
                </p>
                <h3 className="text-lg md:text-xl font-serif">{tr.founderName}</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8 leading-tight">
                {tr.founderH2}
              </h2>
              <div className="space-y-4 md:space-y-6 text-white-chocolate/90 text-sm md:text-base lg:text-lg leading-relaxed">
                <p>{tr.founderP1}</p>
                <p>{tr.founderP2}</p>
                <p>{tr.founderP3}</p>
                <p>{tr.founderP4}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 md:py-24 lg:py-32 bg-white-chocolate">
        <div className="container max-w-4xl text-center relative z-10">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-night leading-tight mb-8 md:mb-10"
          >
            {tr.quoteMain} <span className="italic font-bold">{tr.quoteEmphasis}</span>
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-biro text-blue text-xl sm:text-2xl md:text-3xl leading-relaxed pointer-events-none"
            style={{ transform: "rotate(-1deg)" }}
          >
            {tr.biro.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.p>
        </div>
      </section>

      {/* The Method */}
      <section className="py-16 md:py-24 lg:py-32 bg-blue text-white-chocolate">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-16"
          >
            <p className="text-light-yellow font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-3 drop-shadow-sm">
              {tr.methodTag}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif drop-shadow-sm">
              {tr.methodH2}
              <br />
              <span className="text-white-chocolate/70 text-xl md:text-2xl font-sans font-normal">
                {tr.methodSub}
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
                <span className="text-4xl md:text-5xl font-serif text-light-yellow/50">{step.num}</span>
                <h3 className="text-base md:text-xl font-serif mt-2 mb-2 md:mb-3">{step.title}</h3>
                <p className="text-white-chocolate/85 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Way It Works */}
      <section className="py-16 md:py-24 lg:py-32 bg-white-chocolate">
        <div className="container max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-16 text-center"
          >
            <p className="text-blue font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
              {tr.wayTag}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-night leading-tight">
              {tr.wayH2}
            </h2>
          </motion.div>

          {/* Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto">
              {/* Strategy Column */}
              <div className="bg-blue/5 rounded-2xl p-5 md:p-8 border-2 border-blue/20">
                <div className="mb-4 md:mb-6">
                  <p className="text-night/70 text-xs md:text-sm uppercase tracking-wider mb-2 font-semibold">{tr.wayThink}</p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-blue">Strategy</h3>
                </div>
                <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-night/70">
                  {tr.wayItems1.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Column */}
              <div className="bg-blue rounded-2xl p-5 md:p-8 text-white-chocolate border-2 border-blue">
                <div className="mb-4 md:mb-6">
                  <p className="text-light-yellow text-xs md:text-sm uppercase tracking-wider mb-2 font-semibold">{tr.wayBuild}</p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif">Brand</h3>
                </div>
                <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-white-chocolate/80">
                  {tr.wayItems2.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-light-yellow flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
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
              className="text-night/85 text-sm md:text-base lg:text-lg leading-relaxed text-center"
              dangerouslySetInnerHTML={{ __html: tr.wayBody }}
            />
          </motion.div>
        </div>
      </section>

      {/* Start to Finish Timeline */}
      <section className="py-16 md:py-24 lg:py-32 bg-white-chocolate text-night">
        <div className="container max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-16"
          >
            <p className="text-blue font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
              {tr.timelineTag}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6 leading-tight text-night">
              {tr.timelineH2}
            </h2>
            <p className="text-night/80 text-base md:text-lg">
              {tr.timelineBody}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-blue/20 hidden md:block"></div>
            <div className="space-y-8 md:space-y-12">
              {tr.timelineSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative md:pl-20 pl-4 border-l-2 border-blue/20 md:border-0"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue flex items-center justify-center font-serif font-bold text-white-chocolate text-lg shadow-lg hidden md:flex">
                    {step.num}
                  </div>
                  <div className="md:hidden absolute -left-3 top-0 w-5 h-5 rounded-full bg-blue flex items-center justify-center">
                    <span className="text-white-chocolate text-xs font-bold">{step.num}</span>
                  </div>
                  <p className="text-blue text-xs uppercase tracking-widest mb-1 md:mb-2 font-semibold">
                    {step.tag}
                  </p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif mb-2 md:mb-4 leading-tight text-night">
                    {step.title}
                  </h3>
                  <div
                    className="text-night/85 text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.body }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-blue text-white-chocolate">
        <div className="container text-center max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8 leading-tight drop-shadow-sm">
              {tr.ctaH2}
            </h2>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-8 md:px-10 py-5 md:py-6 text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105"
            >
              <Link to="/contact">
                {tr.ctaBtn} <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
