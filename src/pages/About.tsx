import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";

const timelineSteps = [
  {
    num: "01",
    tag: "First things first",
    title: "We see if we're a fit",
    body: "Fill out the application and I'll reach out to schedule a call. This isn't a sales call , it's an honest conversation about your brand, your goals, and whether we're the right match. <strong>I only take on clients I'm fully committed to.</strong> Once we're aligned, a deposit locks in your spot and we get started.",
  },
  {
    num: "02",
    tag: "Strategy",
    title: "I get inside your world",
    body: "You'll fill out a deep-dive questionnaire , think of it as a brain dump about everything your business is and wants to be. Then we get on a call to go deeper. <strong>This is where I start seeing things you might not have put into words yet.</strong> And that's exactly the point.",
  },
  {
    num: "03",
    tag: "Strategy",
    title: "Your brand gets a north star",
    body: "Everything I uncover becomes a clear strategy document , your positioning, your audience, your edge, and the creative direction that will speak to the right people. This is the brief that makes every design decision <strong>intentional, not accidental.</strong>",
  },
  {
    num: "04",
    tag: "Design",
    title: "Your brand finds its look",
    body: "Using the strategy as my guide, I develop two creative directions , mood, palette, typography, and tone. This is the moment things start to feel real. You pick the direction that clicks, and we move forward with full clarity and zero second-guessing.",
  },
  {
    num: "05",
    tag: "Design",
    title: "I bring it all to life",
    body: "This is where the magic happens. Logo, secondary marks, colour system, typography, visual language, patterns, photography direction , built into one cohesive identity. Delivered with a full presentation so you understand <strong>not just what it looks like, but why every choice was made.</strong>",
  },
  {
    num: "06",
    tag: "You're ready",
    title: "The stage is set",
    body: "You walk away with everything , final files across web, print, and social, plus a custom brand guide so your brand stays consistent no matter who's using it. <strong>You don't just get assets. You get a system, and the confidence to use it.</strong>",
  },
];

const methodSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep dive into your business, audience, and competitors. No fluff research , actionable insights.",
  },
  {
    num: "02",
    title: "Define",
    desc: "Crystallize your positioning, messaging, and brand architecture. This is where clarity happens.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Bring the strategy to life with identity, visuals, and brand assets that command attention.",
  },
  {
    num: "04",
    title: "Grow",
    desc: "Launch strategy, growth playbook, and ongoing support to make sure your brand actually moves the needle.",
  },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 md:py-32 bg-white-chocolate">
      <div className="container max-w-4xl relative z-10">
        <motion.div initial="hidden" animate="visible">
          <motion.p variants={fadeUp} custom={0} className="text-blue font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            About Blumaa
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-serif text-night leading-tight mb-8">
            You know you're better than your brand makes you look.
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-night/85 text-lg md:text-xl leading-relaxed">
            You've tried the cheap logo. The DIY tools. The freelancer who didn't quite understand your business. What you actually need is someone who takes the time to understand what you do, who you serve, and what makes you different , before designing a single thing. That someone is me.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Founder Story */}
    <section className="py-24 md:py-32 bg-blue text-white-chocolate">
      <div className="container max-w-6xl relative z-10">
        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="aspect-square bg-blue-dark rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white-chocolate/50 text-sm">Photo</span>
            </div>
            <div>
              <p className="text-light-yellow font-mono text-xs uppercase tracking-[0.2em] mb-1">
                hi, I'm Cata
              </p>
              <p className="text-light-yellow font-semibold text-sm uppercase tracking-[0.2em] mb-2">
                Who's behind this
              </p>
              <h3 className="text-xl font-serif">Founded by Catalina Mejia</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">
              I started Blumaa because I kept seeing the same problem.
            </h2>
            <div className="space-y-6 text-white-chocolate/90 text-base md:text-lg leading-relaxed">
              <p>
                Great businesses. Talented founders. Real results for their clients. But their branding? It made them look smaller, less credible, harder to understand.
              </p>
              <p>
                They'd tried the cheap options , a logo from Fiverr, a DIY website, a freelancer who missed the mark. And they felt worse after because they'd spent money and time and still didn't have a brand they were proud of.
              </p>
              <p>
                Here's what I learned: the problem wasn't the design. It was that nobody took the time to understand their business first. Nobody asked the hard questions. Nobody did the strategy work that makes great design possible.
              </p>
              <p>
                That's what I do at Blumaa. I start with understanding , your market, your positioning, what makes you different. Then I build a brand that communicates all of that. The result is a brand that doesn't just look professional. It positions you as the obvious choice in your market.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Pull Quote */}
    <section className="py-24 md:py-32 bg-white-chocolate">
      <div className="container max-w-4xl text-center relative z-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-night leading-tight mb-10"
        >
          The gap between the quality of your work and the strength of your brand? <span className="italic font-bold">That's what I close.</span>
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-biro text-blue text-2xl md:text-3xl leading-relaxed pointer-events-none"
          style={{ transform: "rotate(-1deg)" }}
        >
          We work together to build a brand with strategy<br />that actually represents your business.
        </motion.p>
      </div>
    </section>

    {/* The Method */}
    <section className="py-24 md:py-32 bg-blue text-white-chocolate">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-light-yellow font-semibold text-sm uppercase tracking-[0.2em] mb-3 drop-shadow-sm">
            The Method
          </p>
          <h2 className="text-4xl md:text-5xl font-serif drop-shadow-sm">
            How the magic happens.
            <br />
            <span className="text-white-chocolate/70 text-2xl font-sans font-normal">
              (Spoiler: it's not magic. It's method.)
            </span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-8">
          {methodSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="relative rounded-lg p-4 transition-all"
            >
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            The way it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-night leading-tight">
            Strategy first, then brand
          </h2>
        </motion.div>

        {/* Visual Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Strategy Column */}
            <div className="bg-blue/5 rounded-2xl p-8 border-2 border-blue/20">
              <div className="mb-6">
                <p className="text-night/70 text-sm uppercase tracking-wider mb-2 font-semibold">First, we think</p>
                <h3 className="text-4xl md:text-5xl font-serif text-blue">Strategy</h3>
              </div>
              <div className="space-y-3 text-sm text-night/70">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue"></div>
                  <span>Audience research</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue"></div>
                  <span>Positioning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue"></div>
                  <span>Messaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue"></div>
                  <span>Creative direction</span>
                </div>
              </div>
            </div>

            {/* Brand Column */}
            <div className="bg-blue rounded-2xl p-8 text-white-chocolate border-2 border-blue">
              <div className="mb-6">
                <p className="text-light-yellow text-sm uppercase tracking-wider mb-2 font-semibold">Then, we build</p>
                <h3 className="text-4xl md:text-5xl font-serif">Brand</h3>
              </div>
              <div className="space-y-3 text-sm text-white-chocolate/80">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-light-yellow"></div>
                  <span>Visual identity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-light-yellow"></div>
                  <span>Logo & marks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-light-yellow"></div>
                  <span>Color & typography</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-light-yellow"></div>
                  <span>Brand assets</span>
                </div>
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
          <p className="text-night/85 text-base md:text-lg leading-relaxed text-center">
            Here's the truth: jumping straight to design is like building a house without a foundation. It looks fine on the surface, but it won't last. At Blumaa, I do the hard work first , understanding your market, clarifying your positioning, and defining what makes you different. <strong>Then I build a brand that communicates all of that.</strong> The result? A brand that doesn't just look good. It drives real business results.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Start to Finish Timeline */}
    <section className="py-24 md:py-32 bg-white-chocolate text-night">
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Start to Finish
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight text-night">
            Here's exactly what working together looks like
          </h2>
          <p className="text-night/80 text-lg">
            No surprises, no mystery. Just a clear path from where you are to a brand you're proud of.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-blue/20 hidden md:block"></div>

          <div className="space-y-12">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Circle number */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue flex items-center justify-center font-serif font-bold text-white-chocolate text-lg shadow-lg hidden md:flex">
                  {step.num}
                </div>

                {/* Mobile number */}
                <div className="md:hidden font-serif font-bold text-blue text-3xl mb-2">
                  {step.num}
                </div>

                <p className="text-blue text-xs uppercase tracking-widest mb-2 font-semibold">
                  {step.tag}
                </p>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 leading-tight text-night">
                  {step.title}
                </h3>
                <div
                  className="text-night/85 text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.body }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 bg-blue text-white-chocolate">
      <div className="container text-center max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight drop-shadow-sm">
            Ready to build something that actually works?
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all font-semibold hover:scale-105"
          >
            <Link to="/contact">
              Let's talk <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
