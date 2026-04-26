import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLang } from "@/lib/LanguageContext";

const About = () => {
  const { t } = useLang();
  const ab = t.about;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-white-chocolate">
        <div className="container max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-blue font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              {ab.badge}
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-serif text-night leading-tight mb-8">
              {ab.h1}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-night/85 text-lg md:text-xl leading-relaxed">
              {ab.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 md:py-32 bg-blue text-white-chocolate">
        <div className="container max-w-6xl relative z-10">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-6">
              <div className="aspect-square bg-blue-dark rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white-chocolate/50 text-sm">Photo</span>
              </div>
              <div>
                <p className="text-light-yellow font-mono text-xs uppercase tracking-[0.2em] mb-1">{ab.founderTag1}</p>
                <p className="text-light-yellow font-semibold text-sm uppercase tracking-[0.2em] mb-2">{ab.founderTag2}</p>
                <h3 className="text-xl font-serif">{ab.founderName}</h3>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">{ab.founderH2}</h2>
              <div className="space-y-6 text-white-chocolate/90 text-base md:text-lg leading-relaxed">
                <p>{ab.founderP1}</p>
                <p>{ab.founderP2}</p>
                <p>{ab.founderP3}</p>
                <p>{ab.founderP4}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-24 md:py-32 bg-white-chocolate">
        <div className="container max-w-4xl text-center relative z-10">
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl font-serif text-night leading-tight">
            {ab.pullquoteA} <span className="italic font-bold">{ab.pullquoteB}</span>
          </motion.blockquote>
        </div>
      </section>

      {/* The Method */}
      <section className="py-24 md:py-32 bg-blue text-white-chocolate">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-light-yellow font-semibold text-sm uppercase tracking-[0.2em] mb-3 drop-shadow-sm">{ab.methodBadge}</p>
            <h2 className="text-4xl md:text-5xl font-serif drop-shadow-sm">
              {ab.methodH2a}
              <br />
              <span className="text-white-chocolate/70 text-2xl font-sans font-normal">{ab.methodH2b}</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {ab.methodSteps.map((step, i) => (
              <motion.div key={step.num} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="relative rounded-lg p-4 transition-all">
                <span className="text-5xl font-serif text-light-yellow/50">{step.num}</span>
                <h3 className="text-xl font-serif mt-2 mb-3">{step.title}</h3>
                <p className="text-white-chocolate/85 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Way It Works */}
      <section className="py-24 md:py-32 bg-white-chocolate">
        <div className="container max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
            <p className="text-blue font-semibold text-sm uppercase tracking-[0.2em] mb-4">{ab.wayBadge}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-night leading-tight">{ab.wayH2}</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-blue/5 rounded-2xl p-8 border-2 border-blue/20">
                <div className="mb-6">
                  <p className="text-night/70 text-sm uppercase tracking-wider mb-2 font-semibold">{ab.strategyLabel}</p>
                  <h3 className="text-4xl md:text-5xl font-serif text-blue">Strategy</h3>
                </div>
                <div className="space-y-3 text-sm text-night/70">
                  {ab.strategyItems.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue rounded-2xl p-8 text-white-chocolate border-2 border-blue">
                <div className="mb-6">
                  <p className="text-light-yellow text-sm uppercase tracking-wider mb-2 font-semibold">{ab.brandLabel}</p>
                  <h3 className="text-4xl md:text-5xl font-serif">Brand</h3>
                </div>
                <div className="space-y-3 text-sm text-white-chocolate/80">
                  {ab.brandItems.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-light-yellow"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <p
              className="text-night/85 text-base md:text-lg leading-relaxed text-center"
              dangerouslySetInnerHTML={{ __html: ab.wayBody }}
            />
          </motion.div>
        </div>
      </section>

      {/* Start to Finish Timeline */}
      <section className="py-24 md:py-32 bg-white-chocolate text-night">
        <div className="container max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-blue font-semibold text-sm uppercase tracking-[0.2em] mb-4">{ab.timelineBadge}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight text-night">{ab.timelineH2}</h2>
            <p className="text-night/80 text-lg">{ab.timelineSubtitle}</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-blue/20 hidden md:block"></div>
            <div className="space-y-12">
              {ab.timelineSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative md:pl-20"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue flex items-center justify-center font-serif font-bold text-white-chocolate text-lg shadow-lg hidden md:flex">
                    {step.num}
                  </div>
                  <div className="md:hidden font-serif font-bold text-blue text-3xl mb-2">{step.num}</div>
                  <p className="text-blue text-xs uppercase tracking-widest mb-2 font-semibold">{step.tag}</p>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 leading-tight text-night">{step.title}</h3>
                  <div className="text-night/85 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: step.body }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-blue text-white-chocolate">
        <div className="container text-center max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight drop-shadow-sm">{ab.ctaH2}</h2>
            <Button asChild size="lg" className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105">
              <Link to="/contact">{ab.ctaBtn} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
