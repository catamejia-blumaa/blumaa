import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { CtaLink, Eyebrow, Polaroid, Reveal, Script } from "@/components/design";
import { stagger } from "@/lib/animations";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/blumaa_branding/", Icon: Instagram, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/blumaa-growth", Icon: Linkedin, external: true },
  { label: "Email", href: "mailto:catalina@blumaagrowth.com", Icon: Mail, external: false },
];

/**
 * About — Tuesday Co "about" + "team" layout, Blumaa identity.
 * Hero (Blue) → Meet Cata (Crema) → Quote (Butter) → Method (Blue)
 * → Way it works (Crema) → Timeline (Butter) → CTA (Blue)
 */
const About = () => {
  const { lang } = useLang();
  const tr = t[lang].about;

  return (
    <Layout>
      {/* ── Hero ── Blue bg + Crema text · photo trio ── */}
      <section className="relative overflow-hidden bg-blue pt-14 text-crema md:pt-24">
        <div className="mx-auto max-w-[1100px] px-5 text-center md:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Eyebrow className="text-butter">{tr.tag}</Eyebrow>
            <h1 className="mt-5 font-serif text-headline uppercase">{tr.heroH1}</h1>
          </motion.div>
          <Reveal delay={0.25} className="mx-auto mt-8 max-w-xl md:mt-10">
            <p className="text-p2 leading-relaxed text-crema/85 md:text-p3">{tr.heroBody}</p>
            <div className="mt-8">
              <CtaLink to="/contact" variant="primary" size="lg">
                {tr.ctaBtn}
              </CtaLink>
            </div>
          </Reveal>
        </div>

        {/* Photo trio — straddles into the Crema section below */}
        <div className="relative mt-14 md:mt-20">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-crema" aria-hidden="true" />
          <div className="relative mx-auto flex max-w-[1000px] items-end justify-center gap-3 px-5 md:gap-6 md:px-8">
            <Polaroid
              src="/Cata_skyline.jpg"
              alt=""
              rotate={-5}
              aspect="1 / 1"
              className="mb-6 hidden w-[26%] flex-shrink-0 sm:block md:mb-10"
            />
            <motion.img
              src="/Cata_landscape.jpg"
              alt="Catalina Mejia"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="aspect-[4/3] w-full rounded-lg object-cover sm:w-[50%]"
              style={{ objectPosition: "50% 30%" }}
            />
            <img
              src="/Favicon_Blumaa_.png"
              alt=""
              aria-hidden="true"
              className="mb-8 hidden w-[16%] max-w-[150px] flex-shrink-0 animate-float motion-reduce:animate-none sm:block md:mb-14"
            />
          </div>
        </div>
      </section>

      {/* ── Meet Cata ── Crema bg ── */}
      <section className="relative overflow-hidden bg-crema py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="text-center">
            <Script as="p" className="-rotate-2 text-script-lg text-pink">
              {tr.founderTag1}
            </Script>
            <Eyebrow className="mt-4 text-blue">{tr.founderTag2}</Eyebrow>
          </Reveal>

          <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-[5fr_6fr] md:gap-16">
            <Reveal y={40} className="md:sticky md:top-24">
              <img
                src="/Cata_portrait.jpg"
                alt={tr.founderName}
                loading="lazy"
                className="aspect-[4/5] w-full max-w-md rounded-lg object-cover md:max-w-none"
              />
            </Reveal>
            <Reveal delay={0.25}>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.02] text-night">{tr.founderH2}</h2>
              <div className="mt-6 space-y-4 text-p2 leading-relaxed text-night/80 md:space-y-5 md:text-p3">
                <p>{tr.founderP1}</p>
                <p>{tr.founderP2}</p>
                <p>{tr.founderP3}</p>
                <p>{tr.founderP4}</p>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-y-[1.5px] border-blue py-5">
                <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-none text-blue">{tr.founderName}</p>
                <div className="flex gap-3">
                  {socials.map(({ label, href, Icon, external }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-blue text-blue transition-colors hover:bg-blue hover:text-crema"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Quote ── Butter bg + Blue text ── */}
      <section className="relative overflow-hidden bg-butter py-20 md:py-32">
        <div className="mx-auto max-w-[1100px] px-5 text-center md:px-8">
          <Reveal>
            <blockquote className="font-serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] text-blue">
              {tr.quoteMain} <em>{tr.quoteEmphasis}</em>
            </blockquote>
            <Script as="p" className="mt-8 inline-block -rotate-1 text-script-md leading-snug text-orange">
              {tr.biro.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </Script>
          </Reveal>
        </div>
      </section>

      {/* ── The Method ── Blue bg + Crema text ── */}
      <section className="bg-blue py-20 text-crema md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="text-center">
            <Eyebrow className="text-butter">{tr.methodTag}</Eyebrow>
            <h2 className="mt-4 font-serif text-headline uppercase">{tr.methodH2}</h2>
            <p className="mx-auto mt-5 max-w-xl text-p2 leading-relaxed text-crema/75 md:text-p3">{tr.methodSub}</p>
          </Reveal>

          <div className="mt-14 grid gap-12 sm:grid-cols-2 md:mt-20 md:gap-10 lg:grid-cols-4">
            {tr.methodSteps.map((step, i) => (
              <Reveal key={step.num} delay={stagger(i, tr.methodSteps.length)}>
                <p className="font-serif text-[3.5rem] leading-none text-butter md:text-[4.5rem]">{step.num}</p>
                <div className="my-5 h-[1.5px] w-full bg-butter" />
                <h3 className="font-serif text-[2rem] leading-none md:text-[2.25rem]">{step.title}</h3>
                <p className="mt-4 text-p1 leading-relaxed text-crema/80 md:text-p2">{step.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center md:mt-20">
            <CtaLink to="/contact" variant="primary">
              {tr.ctaBtn}
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* ── The way it works ── Crema bg ── */}
      <section className="bg-crema py-20 md:py-32">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8">
          <Reveal className="text-center">
            <Eyebrow className="text-blue">{tr.wayTag}</Eyebrow>
            <h2 className="mt-4 font-serif text-headline text-night">{tr.wayH2}</h2>
          </Reveal>

          {/* Strategy (Butter + Blue border on Crema) · Brand (Blue) */}
          <Reveal className="mx-auto mt-12 grid max-w-3xl items-start gap-4 sm:grid-cols-2 md:mt-16 md:gap-6">
            <div className="rounded-lg border-[1.5px] border-blue bg-butter p-6 md:p-8">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-night/60">{tr.wayThink}</p>
              <h3 className="mb-6 font-serif text-h3-mob text-blue md:text-h3">Strategy</h3>
              <ul className="space-y-2.5 text-p1 text-night/75 md:text-p2">
                {tr.wayItems1.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-blue p-6 md:p-8">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-butter">{tr.wayBuild}</p>
              <h3 className="mb-6 font-serif text-h3-mob text-crema md:text-h3">Brand</h3>
              <ul className="space-y-2.5 text-p1 text-crema/80 md:text-p2">
                {tr.wayItems2.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-butter" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-3xl">
            <p
              className="text-center text-p1 leading-relaxed text-night/80 md:text-p2 [&_strong]:font-semibold [&_strong]:text-blue"
              dangerouslySetInnerHTML={{ __html: tr.wayBody }}
            />
          </Reveal>
        </div>
      </section>

      {/* ── Timeline ── Butter bg · numbered rows ── */}
      <section className="bg-butter py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow className="text-blue">{tr.timelineTag}</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.02] text-blue">{tr.timelineH2}</h2>
            <p className="mt-5 text-p2 leading-relaxed text-night/75 md:text-p3">{tr.timelineBody}</p>
          </Reveal>

          <ol className="mt-12 border-t-[1.5px] border-blue md:mt-16">
            {tr.timelineSteps.map((step, i) => (
              <li key={step.num} className="border-b-[1.5px] border-blue">
                <Reveal
                  className="grid gap-4 py-8 md:grid-cols-[110px_minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10 md:py-12"
                >
                  <p className="font-serif text-[3rem] leading-none text-blue md:text-[4.5rem]">{step.num}</p>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue">{step.tag}</p>
                    <h3 className="mt-2 font-serif text-[1.75rem] leading-tight text-blue md:text-[2.25rem]">{step.title}</h3>
                  </div>
                  <div
                    className="text-p1 leading-relaxed text-night/80 md:text-p2 [&_strong]:font-semibold [&_strong]:text-blue"
                    dangerouslySetInnerHTML={{ __html: step.body }}
                  />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA ── Blue bg + Butter button ── */}
      <section className="bg-blue py-20 text-center text-crema md:py-32">
        <div className="mx-auto max-w-[1000px] px-5 md:px-8">
          <Reveal>
            <Eyebrow className="text-butter">{tr.ctaTag}</Eyebrow>
            <h2 className="mt-5 font-serif text-statement uppercase">{tr.ctaH2}</h2>
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

export default About;
