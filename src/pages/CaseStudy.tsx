import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { supabase, type Project, type ProjectImage, type ProjectMetric } from "@/lib/supabase";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [images, setImages] = useState<ProjectImage[]>([]);
  const [metrics, setMetrics] = useState<ProjectMetric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;

      try {
        const { data: projectData, error: projectError } = await supabase
          .from('projects')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (projectError) throw projectError;

        if (!projectData) {
          setLoading(false);
          return;
        }

        setProject(projectData);

        const [imagesResponse, metricsResponse] = await Promise.all([
          supabase
            .from('project_images')
            .select('*')
            .eq('project_id', projectData.id)
            .order('display_order', { ascending: true }),
          supabase
            .from('project_metrics')
            .select('*')
            .eq('project_id', projectData.id)
            .order('display_order', { ascending: true })
        ]);

        if (imagesResponse.data) setImages(imagesResponse.data);
        if (metricsResponse.data) setMetrics(metricsResponse.data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="py-24 md:py-32 text-center container">
          <div className="text-night/70">Loading project...</div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="py-24 md:py-32 text-center container">
          <h1 className="text-3xl md:text-4xl font-serif text-night mb-4">Case study not found</h1>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/portfolio"><ArrowLeft size={16} className="mr-2" /> Back to Portfolio</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24 lg:py-32 bg-white-chocolate">
        <div className="container max-w-4xl">
          <Link to="/portfolio" className="inline-flex items-center text-sm text-blue hover:text-night transition-colors mb-6 md:mb-8 py-2">
            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-blue font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">{project.project_type}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-night mb-3 md:mb-4 leading-tight">{project.title}</h1>
            <p className="text-base md:text-xl text-night/70 mb-6 md:mb-8">{project.tagline}</p>
            {project.website_url && (
              <a
                href={project.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue hover:text-night transition-colors text-sm gap-2 py-2"
              >
                Visit Website <ExternalLink size={14} />
              </a>
            )}
          </motion.div>
          {project.hero_image_url && (
            <div className="mt-8 md:mt-12 aspect-video rounded-xl overflow-hidden border-2 border-blue/10">
              <img
                src={project.hero_image_url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-white-chocolate">
        <div className="container max-w-4xl">
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-night mb-3 md:mb-4">About the Project</h2>
            <p className="text-night/80 leading-relaxed text-sm md:text-base lg:text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6">
              {project.services.map((service, i) => (
                <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 bg-blue/10 text-blue text-xs md:text-sm rounded-full">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
            {project.challenge && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-night mb-3 md:mb-4">The Challenge</h2>
                <p className="text-night/80 leading-relaxed text-sm md:text-base">{project.challenge}</p>
              </motion.div>
            )}
            {project.solution && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-night mb-3 md:mb-4">The Solution</h2>
                <p className="text-night/80 leading-relaxed text-sm md:text-base">{project.solution}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {images.length > 0 && (
        <section className="pb-16 md:pb-24 bg-white-chocolate">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {images.map((img) => (
                <div key={img.id} className="rounded-xl overflow-hidden border-2 border-blue/10">
                  <img
                    src={img.image_url}
                    alt={img.caption || project.title}
                    className="w-full h-full object-cover"
                  />
                  {img.caption && (
                    <p className="text-xs md:text-sm text-night/60 text-center py-2 px-3">{img.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(project.results || metrics.length > 0) && (
        <section className="py-16 md:py-24 bg-blue-dark text-white-chocolate">
          <div className="container max-w-4xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 md:mb-8">The Results</h2>
              {project.results && (
                <p className="text-white-chocolate text-base md:text-lg mb-6 md:mb-8 leading-relaxed">{project.results}</p>
              )}
              {metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {metrics.map((metric) => (
                    <div key={metric.id} className="flex items-start gap-3">
                      <span className="text-light-yellow text-lg mt-0.5 flex-shrink-0">✦</span>
                      <div>
                        <p className="text-white-chocolate font-semibold text-lg md:text-xl mb-1">{metric.metric_value}</p>
                        <p className="text-white-chocolate/80 text-sm">{metric.metric_label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-blue text-white-chocolate">
        <div className="container text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 md:mb-6">Ready to be the next success story?</h2>
          <Button asChild size="lg" className="w-full sm:w-auto bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-8 md:px-10 font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl">
            <Link to="/contact">Start Your Project <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
