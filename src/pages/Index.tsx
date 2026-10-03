import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import Marquee from "@/components/Marquee";
import { CtaLink, Eyebrow, Polaroid, Reveal, Script } from "@/components/design";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

/**
 * Home — Tuesday Co layout, Blumaa identity.
 * Section rhythm (Blue ↔ Butter hero pair, Crema as the rest):
 * Hero (Blue) → Statement (Butter) → Hello (Crema) → Services list (Butter)
 * → Strategy-first band (Blue) → Pain cards (Crema) → Method (Butter) → CTA (Blue)
 */
const Index = () => {
  const { lang } = useLang();
  const tr = t[lang].index;
  const nav = t[lang].nav;
  const about = t[lang].about;
  const services = t[lang].services.services;

  return (
    <Layout>
      {/* ── Hero ── Blue bg · oversized logo · photos straddle into the Butter band ── */}
      <section className="relative overflow-hidden bg-blue">
        <div className="mx-auto max-w-[1280px] px-5 pt-10 text-center md:px-8 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mx-auto w-[88%] max-w-[800px] sm:w-[72%] md:w-[64%]"
          >
            <img src="/Main_logo_cream_pink.png" alt="Blumaa" className="h-auto w-full" />
            <p className="mt-1 text-right font-serif text-[clamp(1.4rem,4.2vw,3.5rem)] italic leading-none text-butter">
              {tr.agencyTag.toLowerCase()}
            </p>
          </motion.div>
        </div>

        <div className="relative mt-8 md:mt-12">
          {/* Butter band — same colour as the next section, so the photos bridge the two */}
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-butter" aria-hidden="true" />
          <div className="relative mx-auto flex max-w-[1100px] items-end justify-center gap-3 px-5 md:gap-6 md:px-8">
            <Polaroid
              src="/Cata_skyline.jpg"
              alt=""
              rotate={-4}
              aspect="1 / 1"
              priority
              className="mb-6 hidden w-[24%] flex-shrink-0 sm:block md:mb-10"
            />
            <motion.img
              src="/Cata_landscape.jpg"
              alt="Catalina Mejia, founder of Blumaa"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="aspect-[4/3] w-full rounded-lg object-cover sm:w-[56%]"
              style={{ objectPosition: "50% 30%" }}
            />
            <img
              src="/Favicon_Blumaa_.png"
              alt=""
              aria-hidden="true"
              className="mb-8 hidden w-[15%] max-w-[150px] flex-shrink-0 animate-float motion-reduce:animate-none sm:block md:mb-14"
            />
          </div>
        </div>
      </section>

      {/* ── Statement ── Butter bg + Blue text ── */}
      <section className="relative overflow-hidden bg-butter pb-20 pt-14 md:pb-32 md:pt-20">
        <img
          src="/Favicon_blue.png"
          alt=""
          aria-hidden="true"
          className="absolute right-[5%] top-8 w-12 animate-float motion-reduce:animate-none md:top-14 md:w-20"
        />
        <img
          src="/Favicon_blue.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-10 left-[4%] hidden w-10 animate-float motion-reduce:animate-none md:block"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="relative mx-auto max-w-[1240px] text-center">
            <h1 className="font-serif text-statement uppercase text-blue [text-wrap:balance]">
              {tr.heroH1a} <em>{tr.heroH1b}</em> {tr.heroH1c} <em>{tr.heroH1d}</em>
            </h1>
            <Script
              as="p"
              className="pointer-events-none relative z-10 mt-1 -rotate-3 text-script-lg leading-none text-orange md:mt-0"
            >
              {tr.biroHero}
            </Script>
          </div>
          <Reveal className="mx-auto mt-10 max-w-xl text-center md:mt-14">
            <p className="text-p2 leading-relaxed text-night/80 md:text-p3">{tr.heroBody}</p>
            <div className="mt-8">
              <CtaLink to="/contact" variant="dark" size="lg">
                {tr.heroCta}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Hello ── Crema bg · oversized script behind the intro ── */}
      <section className="relative overflow-hidden bg-crema pb-20 pt-32 md:py-32">
        <Script
          as="p"
          aria-hidden="true"
          className="pointer-events-none absolute right-[4%] top-4 text-script-xl text-pink md:top-8"
        >
          {tr.helloScript}
        </Script>
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:grid-cols-[5fr_6fr] md:gap-16 md:px-8">
          <Reveal>
            <img
              src="/Cata_portrait.jpg"
              alt={about.founderName}
              loading="lazy"
              className="aspect-[4/5] w-full max-w-md rounded-lg object-cover md:max-w-none"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Eyebrow className="mb-4 text-blue">{about.founderTag1}</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.02] text-night">{tr.aboutTeaserH2}</h2>
            <p className="mt-6 max-w-lg text-p2 leading-relaxed text-night/80 md:text-p3">{tr.aboutTeaserBody}</p>
            <div className="mt-8">
              <CtaLink to="/about" variant="dark">
                {tr.aboutTeaserCta}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services list ── Butter bg + Blue text ── */}
      <section className="bg-butter py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <Reveal>
            <Eyebrow className="text-blue">{nav.services}</Eyebrow>
            <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none text-blue">{tr.servicesListH2}</h2>
          </Reveal>

          <ul className="mt-10 border-t-[1.5px] border-blue md:mt-14">
            {services.map((s, i) => (
              <li key={s.title} className="border-b-[1.5px] border-blue">
                <Link
                  to={`/services#service-${i + 1}`}
                  className="group flex items-center gap-4 py-6 text-blue transition-colors duration-300 hover:bg-blue hover:text-butter md:-mx-4 md:gap-8 md:px-4 md:py-9"
                >
                  <span className="w-9 flex-shrink-0 font-mono text-xs tracking-[0.2em] md:w-12 md:text-sm">0{i + 1}.</span>
                  <span className="flex-1 font-serif text-row">{s.title}</span>
                  <span className="hidden max-w-[260px] text-right text-sm leading-snug lg:block">{s.tagline}</span>
                  <ArrowUpRight
                    size={28}
                    className="flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Strategy first ── Blue bg · ticker + oversized Butter type ── */}
      <section className="relative overflow-hidden bg-blue text-crema">
        <Marquee
          items={tr.marquee}
          className="border-b-[1.5px] border-crema/25 py-4 font-mono text-sm uppercase tracking-[0.15em] text-butter md:text-base"
        />
        <div className="mx-auto max-w-[1100px] px-5 py-20 text-center md:px-8 md:py-32">
          <Reveal>
            <h2 className="font-serif text-statement uppercase text-butter">
              <span className="block">{tr.servicesH2a}</span>
              <span className="block italic">{tr.servicesH2b}</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-p2 leading-relaxed text-crema/85 md:text-p3">{tr.featuredBody}</p>
            <div className="mt-10">
              <CtaLink to="/services" variant="primary" size="lg">
                {tr.featuredCta}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pain points ── Crema bg → Blue cards (DS card-contrast rule) ── */}
      <section className="bg-crema py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="text-center">
            <h2 className="font-serif text-headline uppercase text-night">{tr.painTitle}</h2>
          </Reveal>

          <div className="mt-20 grid gap-x-6 gap-y-20 md:mt-28 md:grid-cols-3">
            {tr.pains.map((pain, i) => (
              <Reveal key={pain.title} delay={i * 0.1} className="h-full">
                <div className="relative h-full rounded-lg bg-blue px-6 pb-8 pt-16 text-crema md:px-8 md:pb-10 md:pt-20">
                  <div className="absolute left-1/2 top-0 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-butter md:h-28 md:w-28">
                    <img src="/Favicon_blue.png" alt="" aria-hidden="true" className="h-12 w-12 object-contain md:h-14 md:w-14" />
                  </div>
                  <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.3em] text-butter">0{i + 1}</p>
                  <h3 className="text-center font-serif text-h3-mob leading-tight md:text-[1.9rem]">{pain.title}</h3>
                  <p className="mt-4 text-center text-p1 leading-relaxed text-crema/80 md:text-p2">{pain.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Method ── Butter bg + Blue text (hero swap) ── */}
      <section className="relative overflow-hidden bg-butter pt-20 md:pt-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <Reveal className="relative text-center">
            <Eyebrow className="text-blue">{tr.methodTag}</Eyebrow>
            <h2 className="mt-4 font-serif text-display uppercase text-blue md:mt-7">{tr.methodH2}</h2>
            <p className="mx-auto mt-6 max-w-xl text-p2 leading-relaxed text-night/70 md:text-p3">{tr.methodSub}</p>
            <Script
              as="p"
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-6 hidden rotate-3 text-p3 leading-snug text-orange lg:block"
            >
              {tr.biroMethod.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </Script>
          </Reveal>
        </div>

        {/* Moving strip of the four steps — Tuesday's gallery band, in type */}
        <Marquee
          items={tr.methodSteps.map((s) => s.title)}
          speed={55}
          className="mt-14 border-y-[1.5px] border-blue py-5 font-serif text-[clamp(2rem,5vw,4rem)] italic leading-none text-blue md:mt-20"
        />

        <div className="mx-auto max-w-[1280px] px-5 pb-20 pt-14 md:px-8 md:pb-32 md:pt-20">
          <div className="grid gap-12 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {tr.methodSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue">{step.num}</p>
                <h3 className="mt-3 font-serif text-[2rem] leading-none text-blue md:text-[2.25rem]">{step.title}</h3>
                <div className="my-5 h-[1.5px] w-full bg-blue" />
                <p className="text-p1 leading-relaxed text-night/80 md:text-p2">{step.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center md:mt-20">
            <CtaLink to="/about" variant="dark">
              {tr.methodCta}
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── Blue bg · Pink accent script · Butter button ── */}
      <section className="relative overflow-hidden bg-blue py-20 text-crema md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:grid-cols-[6fr_5fr] md:gap-16 md:px-8">
          <Reveal>
            <Script as="p" className="mb-2 -rotate-3 text-script-lg text-pink">
              {tr.ctaScript}
            </Script>
            <h2 className="font-serif text-headline uppercase text-crema">
              {tr.ctaH2a} <em className="text-butter">{tr.ctaH2b}</em>
            </h2>
            <p className="mt-6 max-w-xl text-p2 leading-relaxed text-crema/80 md:text-p3">{tr.ctaBody}</p>
            <div className="mt-8">
              <CtaLink to="/contact" variant="primary" size="lg">
                {tr.ctaBtn}
              </CtaLink>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center">
            <img
              src="/Secondary_cream_pink.png"
              alt="Blumaa"
              loading="lazy"
              className="h-auto w-[70%] max-w-[360px] animate-float motion-reduce:animate-none"
            />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
