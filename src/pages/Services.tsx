import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Marquee from "@/components/Marquee";
import { CtaLink, Eyebrow, Icon, Reveal, Script, StarBullet } from "@/components/design";
import { serviceIcons } from "@/lib/icons";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

/**
 * Services — Tuesday Co "services" layout, Blumaa identity.
 * Hero (Blue) → one section per service, alternating Butter / Crema
 * (title + pitch on one side, script "what's included" list on the other) → CTA (Blue)
 */
const Services = () => {
  const { lang } = useLang();
  const tr = t[lang].services;
  const marquee = t[lang].index.marquee;

  return (
    <Layout>
      {/* ── Hero ── Blue bg + Crema text ── */}
      <section className="relative overflow-hidden bg-blue py-16 text-crema md:py-28">
        <img
          src="/Favicon_Crema.png"
          alt=""
          aria-hidden="true"
          className="absolute right-[6%] top-8 w-12 animate-float motion-reduce:animate-none md:top-16 md:w-20"
        />
        <div className="mx-auto max-w-[1100px] px-5 text-center md:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Eyebrow className="text-butter">{tr.tag}</Eyebrow>
            <h1 className="mt-5 font-serif text-headline uppercase">{tr.heroH1}</h1>
          </motion.div>
          <Reveal delay={0.25} className="mx-auto mt-6 max-w-2xl md:mt-8">
            <p className="text-p2 leading-relaxed text-crema/80 md:text-p3">{tr.heroBody}</p>
          </Reveal>

          {/* Quick jump to each service */}
          <Reveal delay={0.5} className="mt-10 flex flex-wrap justify-center gap-3 md:mt-12">
            {tr.services.map((s, i) => (
              <a
                key={s.title}
                href={`#service-${i + 1}`}
                className="inline-flex h-11 items-center gap-3 rounded-pill border-[1.5px] border-crema px-5 text-sm text-crema transition-colors hover:bg-crema hover:text-blue"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-butter">0{i + 1}</span>
                {s.title}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Service blocks ── alternating Butter / Crema ── */}
      {tr.services.map((s, i) => {
        const onButter = i % 2 === 0;
        const flip = i % 2 === 1;
        return (
          <section
            key={s.title}
            id={`service-${i + 1}`}
            className={`scroll-mt-16 py-20 md:py-32 ${onButter ? "bg-butter" : "bg-crema"}`}
          >
            <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8 lg:gap-24">
              {/* Pitch */}
              <Reveal className={flip ? "md:order-2" : ""}>
                <Icon name={serviceIcons[i]} className="mb-5 h-16 w-16 text-blue md:h-20 md:w-20" />
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue">0{i + 1}</p>
                <h2 className="mt-3 font-serif text-headline leading-[0.95] text-blue">{s.title}</h2>
                <p className="mt-4 font-serif text-[clamp(1.25rem,2vw,1.75rem)] italic leading-snug text-blue">{s.tagline}</p>
                <p className="mt-6 max-w-lg text-p2 leading-relaxed text-night/80 md:text-p3">{s.desc}</p>
                <div className="mt-8">
                  <CtaLink to="/contact" variant="dark" size="lg">
                    {tr.getStarted}
                  </CtaLink>
                </div>
              </Reveal>

              {/* What's included + who it's for */}
              <Reveal delay={0.25} className={flip ? "md:order-1" : ""}>
                <Script as="p" className={`-rotate-2 text-script-lg ${onButter ? "text-orange" : "text-pink"}`}>
                  {tr.included}
                </Script>
                <ul className="mt-6 border-t-[1.5px] border-blue">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-center gap-4 border-b-[1.5px] border-blue py-4 md:py-5">
                      <StarBullet className="h-7 w-7" />
                      <span className="text-p2 text-night md:text-p3">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* Blue card on both Butter and Crema sections (DS card-contrast rule) */}
                <div className="mt-8 rounded-lg bg-blue p-6 text-crema md:p-8">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-butter">{tr.forWho}</p>
                  <p className="text-p1 leading-relaxed text-crema/85 md:text-p2">{s.forWho}</p>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── Blue bg · ticker + Butter button ── */}
      <section className="overflow-hidden bg-blue text-crema">
        <Marquee
          items={marquee}
          className="border-b-[1.5px] border-crema/25 py-4 font-mono text-sm uppercase tracking-[0.15em] text-butter md:text-base"
        />
        <div className="mx-auto max-w-[900px] px-5 py-20 text-center md:px-8 md:py-32">
          <Reveal>
            <h2 className="font-serif text-statement uppercase">{tr.ctaH2}</h2>
            <p className="mx-auto mt-6 max-w-xl text-p2 leading-relaxed text-crema/80 md:text-p3">{tr.ctaBody}</p>
            <div className="mt-10">
              <CtaLink to="/contact" variant="primary" size="lg">
                {tr.ctaBtn}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
