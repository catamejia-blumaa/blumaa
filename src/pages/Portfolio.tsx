import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CircleAlert as AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { supabase, type Project } from "@/lib/supabase";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const Portfolio = () => {
  const { lang } = useLang();
  const tr = t[lang].portfolio;

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("id, slug, title, tagline, project_type, thumbnail_url, display_order")
          .order("display_order", { ascending: true });

        if (error) throw error;
        setProjects(data || []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 bg-white-chocolate">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl mb-10 md:mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-blue font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
              {tr.tag}
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-night leading-tight mb-4 md:mb-6">
              {tr.heroH1}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-night/70 text-base md:text-lg leading-relaxed">
              {tr.heroBody}
            </motion.p>
          </motion.div>

          {/* Loading skeleton */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/3] bg-night/10 rounded-xl mb-3 md:mb-4" />
                  <div className="h-3 bg-night/10 rounded w-1/3 mb-2" />
                  <div className="h-5 bg-night/10 rounded w-2/3 mb-1" />
                  <div className="h-4 bg-night/10 rounded w-1/2" />
                </div>
              ))}
            </div>
          )}

          {/* Error state */}
          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <AlertCircle size={36} className="text-night/30" />
              <p className="text-night/60 text-base">{tr.error}</p>
              <Button
                variant="outline"
                className="border-night/20 text-night hover:border-night/50 rounded-full"
                onClick={() => { setError(false); setLoading(true); window.location.reload(); }}
              >
                Try again
              </Button>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && projects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-night/50 text-base">{tr.empty}</p>
            </div>
          )}

          {/* Projects grid */}
          {!loading && !error && projects.length > 0 && (
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
                    <div className="aspect-[4/3] bg-white rounded-xl mb-3 md:mb-4 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-all duration-300 border-2 border-blue/10 group-hover:border-blue">
                      {p.thumbnail_url ? (
                        <img
                          src={p.thumbnail_url}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2 text-blue/30">
                          <div className="w-10 h-10 rounded-full border-2 border-current" />
                          <span className="text-xs font-mono uppercase tracking-widest">{p.project_type}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-blue text-xs font-semibold uppercase tracking-widest mb-1">{p.project_type}</p>
                    <h3 className="text-lg md:text-xl font-serif text-night group-hover:text-blue transition-colors mb-1">{p.title}</h3>
                    <p className="text-night/60 text-sm leading-snug">{p.tagline}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue text-white-chocolate">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6">
              {tr.ctaH2}
            </h2>
            <p className="text-white-chocolate/80 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              {tr.ctaBody}
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-8 md:px-10 font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl">
              <Link to="/contact">{tr.ctaBtn} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
