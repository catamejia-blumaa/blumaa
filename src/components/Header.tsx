import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLang();
  const tr = t[lang].nav;

  const navLinks = [
    { label: tr.about, path: "/about" },
    { label: tr.services, path: "/services" },
    { label: tr.contact, path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white-chocolate border-b border-white-chocolate/10 shadow-lg">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src="/Asset_6@4x.png" alt="Blumaa" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-all hover:text-light-yellow relative ${
                location.pathname === link.path ? "text-night" : "text-night/75"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-light-yellow"></span>
              )}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="text-xs font-mono font-semibold tracking-widest text-night/60 hover:text-night transition-colors border border-night/20 rounded-full px-3 py-1 hover:border-night/50"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>

          <Button asChild className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-6 shadow-md hover:shadow-xl transition-all font-semibold hover:scale-105">
            <Link to="/contact">{tr.apply}</Link>
          </Button>
        </nav>

        {/* Mobile toggle — min 44×44 touch target */}
        <button
          className="md:hidden p-2 -mr-2 text-night hover:text-light-yellow transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white-chocolate border-t border-white-chocolate/10 px-4 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-base font-medium hover:text-blue py-3 px-2 transition-colors border-b border-night/5 ${
                location.pathname === link.path ? "text-blue" : "text-night/75"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="block w-full text-center text-sm font-mono font-semibold tracking-widest text-night/60 hover:text-night transition-colors border border-night/20 rounded-full px-4 py-2.5 hover:border-night/50"
            >
              {lang === "en" ? "Ver en Español" : "View in English"}
            </button>
            <Button asChild className="w-full bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full shadow-md font-semibold py-3">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>{tr.apply}</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
