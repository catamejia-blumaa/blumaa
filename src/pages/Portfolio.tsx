import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { supabase, type Project } from "@/lib/supabase";

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Layout>
        <section className="py-16 md:py-24 lg:py-32 bg-white-chocolate">
          <div className="container">
            <div className="text-center text-night/70">Loading projects...</div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
  <Layout>
    <section className="py-16 md:py-24 lg:py-32 bg-white-chocolate">
      <div className="container">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl mb-10 md:mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-blue font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Portfolio</motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-night leading-tight mb-4 md:mb-6">
            Work that speaks louder than words.
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-night/80 text-base md:text-lg leading-relaxed">
            Every project starts with strategy and ends with results. Here's the proof.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <Link to={`/portfolio/${p.slug}`} className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl mb-3 md:mb-4 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-shadow border-2 border-blue/10 group-hover:border-blue relative">
                  {p.thumbnail_url ? (
                    <img
                      src={p.thumbnail_url}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-blue/50 text-xs md:text-sm">Project Image</span>
                  )}
                </div>
                <p className="text-blue text-xs font-semibold uppercase tracking-widest mb-1">{p.project_type}</p>
                <h3 className="text-lg md:text-xl font-serif text-night group-hover:text-blue transition-colors mb-1">{p.title}</h3>
                <p className="text-night/70 text-sm">{p.tagline}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24 bg-blue text-white-chocolate">
      <div className="container text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6 drop-shadow-sm">Want your brand on this page?</h2>
          <p className="text-white-chocolate text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            The next success story could be yours. Let's make it happen.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-8 md:px-10 font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl">
            <Link to="/contact">Start Your Project <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
  );
};

export default Portfolio;
