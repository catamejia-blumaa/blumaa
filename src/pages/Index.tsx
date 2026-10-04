import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import Marquee from "@/components/Marquee";
import PhotoStrip from "@/components/PhotoStrip";
import { CtaLink, Eyebrow, Icon, PatternBg, Polaroid, Reveal, Script, type IconName } from "@/components/design";
import { stagger } from "@/lib/animations";
import { serviceIcons } from "@/lib/icons";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

/**
 * Home — Tuesday Co layout, Blumaa identity.
 * Section rhythm (Blue ↔ Butter hero pair, Crema as the rest):
 * Hero (Blue) → Statement (Butter) → Hello (Crema) → Services list (Butter)
 * → Strategy-first band (Blue) → Pain cards (Crema) → Method (Butter) → CTA (Blue)
 */
const painIcons: IconName[] = ["photo-b", "kindle", "phone"];
const stripPhotos = [
  "/photos/gal-sea.jpg", "/photos/gal-cafe.jpg", "/photos/gal-candy.jpg", "/photos/gal-greenhouse.jpg",
  "/photos/gal-plane.jpg", "/photos/gal-terrace.jpg", "/photos/gal-house.jpg", "/photos/gal-flatlay.jpg",
  "/photos/gal-watermelon.jpg",
];

const Index = () => {
  const { lang } = useLang();
  const tr = t[lang].index;
  const nav = t[lang].nav;
  const about = t[lang].about;
  const services = t[lang].services.services;

  return (
    <Layout>
      {/* ── Hero ── Blue bg · headline + subtitle · photos straddle into the Butter band ── */}
      <section className="relative overflow-hidden bg-blue">
        <div className="mx-auto max-w-[1280px] px-5 pt-14 text-center md:px-8 md:pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-[1100px] font-serif text-statement uppercase text-crema"
          >
            <span className="block">{tr.heroLead1}</span>
            <span className="block italic text-butter">{tr.heroLead2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-6 max-w-2xl text-p2 leading-relaxed text-crema/85 md:mt-8 md:text-p3"
          >
            {tr.heroSub}
          </motion.p>
        </div>

        <div className="relative mt-10 md:mt-16">
          {/* Butter band — same colour as the next section, so the photos bridge the two */}
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-butter" aria-hidden="true" />
          <div className="relative mx-auto flex max-w-[1100px] items-end justify-center gap-3 px-5 md:gap-6 md:px-8">
            <Polaroid
              src="/photos/hero-plate.jpg"
              alt=""
              rotate={-4}
              aspect="1 / 1"
              priority
              className="mb-6 hidden w-[24%] flex-shrink-0 sm:block md:mb-10"
            />
            <motion.img
              src="/photos/hero-wink.jpg"
              alt="Catalina Mejia, founder of Blumaa"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="aspect-[4/3] w-full rounded-lg object-cover sm:w-[56%]"
              style={{ objectPosition: "50% 40%" }}
            />
            <img
              src="/Favicon_Blumaa_orange.png"
              alt=""
              aria-hidden="true"
              className="mb-8 hidden w-[15%] max-w-[150px] flex-shrink-0 animate-float motion-reduce:animate-none sm:block md:mb-14"
            />
          </div>
        </div>
      </section>

      {/* ── Statement ── Butter bg + Blue text ── */}
      <section className="relative overflow-hidden bg-butter pb-20 pt-14 md:pb-32 md:pt-20">
        {/* Two loose line icons (DS: max 2–3 per section) */}
        <Icon
          name="sunshine"
          className="absolute right-[5%] top-8 h-14 w-14 animate-float text-blue motion-reduce:animate-none md:top-14 md:h-24 md:w-24"
        />
        <Icon
          name="coffee-mug"
          className="absolute bottom-10 left-[4%] hidden h-20 w-20 animate-float text-blue motion-reduce:animate-none md:block"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="relative mx-auto max-w-[1240px] text-center">
            <h2 className="font-serif text-statement uppercase text-blue [text-wrap:balance]">
              {tr.heroH1a} <em>{tr.heroH1b}</em> {tr.heroH1c} <em>{tr.heroH1d}</em>
            </h2>
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
          className="pointer-events-none absolute right-[4%] top-4 text-script-xl text-orange md:top-8"
        >
          {tr.helloScript}
        </Script>
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:grid-cols-[5fr_6fr] md:gap-16 md:px-8">
          <Reveal y={40}>
            {/* Blue checker peeks out behind the photo, like an offset frame */}
            <div className="relative max-w-md md:max-w-none">
              <div className="absolute inset-0 translate-x-4 translate-y-4 overflow-hidden rounded-lg md:translate-x-8 md:translate-y-8">
                <PatternBg name="blue" />
              </div>
              <img
                src="/photos/hello-sunset.jpg"
                alt={about.founderName}
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-lg object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.25}>
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
                  className="group flex items-center gap-4 py-6 text-blue transition-colors duration-500 hover:bg-blue hover:text-butter md:-mx-4 md:gap-8 md:px-4 md:py-9"
                >
                  <span className="w-9 flex-shrink-0 font-mono text-xs tracking-[0.2em] md:w-12 md:text-sm">0{i + 1}.</span>
                  <span className="flex-1 font-serif text-row">{s.title}</span>
                  <span className="hidden max-w-[260px] text-right text-sm leading-snug lg:block">{s.tagline}</span>
                  <Icon name={serviceIcons[i]} className="hidden h-12 w-12 flex-shrink-0 sm:block md:h-16 md:w-16" />
                  <ArrowUpRight
                    size={28}
                    className="flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
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

      {/* ── Pain points ── Pool bg → Blue cards (DS card-contrast rule) ── */}
      <section className="bg-pool py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="text-center">
            <h2 className="font-serif text-headline uppercase text-night">{tr.painTitle}</h2>
          </Reveal>

          <div className="mt-20 grid gap-x-6 gap-y-20 md:mt-28 md:grid-cols-3">
            {tr.pains.map((pain, i) => (
              <Reveal key={pain.title} delay={stagger(i, tr.pains.length)} className="h-full">
                <div className="relative h-full rounded-lg bg-blue px-6 pb-8 pt-16 text-crema md:px-8 md:pb-10 md:pt-20">
                  <div className="absolute left-1/2 top-0 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-butter md:h-28 md:w-28">
                    <Icon name={painIcons[i]} className="h-12 w-12 text-blue md:h-14 md:w-14" />
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
              <Reveal key={step.num} delay={stagger(i, tr.methodSteps.length)}>
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

      {/* ── Moments ── hand-drawn checker backdrop · slow photo drift (summer, travel, coffee: the brand's mood) ── */}
      <section className="relative overflow-hidden py-10 md:py-16">
        <PatternBg name="pink" />
        <div className="relative">
          <PhotoStrip photos={stripPhotos} />
        </div>
      </section>

      {/* ── CTA ── Blue bg · Orange accent script · Butter button ── */}
      <section className="relative overflow-hidden bg-blue py-20 text-crema md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:grid-cols-[6fr_5fr] md:gap-16 md:px-8">
          <Reveal>
            <Script as="p" className="mb-2 -rotate-3 text-script-lg text-orange">
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
          <Reveal y={40} delay={0.25} className="flex justify-center">
            <img
              src="/Secondary_cream_orange.png"
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
