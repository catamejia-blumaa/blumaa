import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useLang } from "@/lib/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-white-chocolate">
        <div className="container text-center py-24">
          <p className="text-blue font-mono font-semibold text-xs uppercase tracking-[0.3em] mb-6">
            404
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-night mb-6 leading-tight">
            {lang === "es" ? "Página no encontrada." : "Page not found."}
          </h1>
          <p className="text-night/60 text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
            {lang === "es"
              ? "Esta página no existe o fue movida. Volvamos a donde importa."
              : "This page doesn't exist or was moved. Let's get you back to where it matters."}
          </p>
          <Button asChild size="lg" className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-8 font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl">
            <Link to="/">
              {lang === "es" ? "Volver al inicio" : "Back to home"} <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
