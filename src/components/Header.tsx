import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const LANGUAGES = [
  {
    code: "es",
    label: "Español",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" className="w-5 h-3.5 rounded-sm" aria-hidden="true">
        <rect width="20" height="7" fill="#FCD116"/>
        <rect width="20" height="3.5" y="7" fill="#003580"/>
        <rect width="20" height="3.5" y="10.5" fill="#CE1126"/>
      </svg>
    ),
  },
  {
    code: "en",
    label: "English",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" className="w-5 h-3.5 rounded-sm" aria-hidden="true">
        <rect width="20" height="14" fill="#B22234"/>
        <rect width="20" height="1.077" y="1.077" fill="#fff"/>
        <rect width="20" height="1.077" y="3.231" fill="#fff"/>
        <rect width="20" height="1.077" y="5.385" fill="#fff"/>
        <rect width="20" height="1.077" y="7.538" fill="#fff"/>
        <rect width="20" height="1.077" y="9.692" fill="#fff"/>
        <rect width="20" height="1.077" y="11.846" fill="#fff"/>
        <rect width="8" height="7.538" fill="#3C3B6E"/>
        {/* stars simplified */}
        <circle cx="1.3" cy="1.1" r="0.4" fill="#fff"/>
        <circle cx="2.6" cy="1.1" r="0.4" fill="#fff"/>
        <circle cx="3.9" cy="1.1" r="0.4" fill="#fff"/>
        <circle cx="5.2" cy="1.1" r="0.4" fill="#fff"/>
        <circle cx="6.5" cy="1.1" r="0.4" fill="#fff"/>
        <circle cx="1.95" cy="2.1" r="0.4" fill="#fff"/>
        <circle cx="3.25" cy="2.1" r="0.4" fill="#fff"/>
        <circle cx="4.55" cy="2.1" r="0.4" fill="#fff"/>
        <circle cx="5.85" cy="2.1" r="0.4" fill="#fff"/>
        <circle cx="1.3" cy="3.1" r="0.4" fill="#fff"/>
        <circle cx="2.6" cy="3.1" r="0.4" fill="#fff"/>
        <circle cx="3.9" cy="3.1" r="0.4" fill="#fff"/>
        <circle cx="5.2" cy="3.1" r="0.4" fill="#fff"/>
        <circle cx="6.5" cy="3.1" r="0.4" fill="#fff"/>
        <circle cx="1.95" cy="4.1" r="0.4" fill="#fff"/>
        <circle cx="3.25" cy="4.1" r="0.4" fill="#fff"/>
        <circle cx="4.55" cy="4.1" r="0.4" fill="#fff"/>
        <circle cx="5.85" cy="4.1" r="0.4" fill="#fff"/>
        <circle cx="1.3" cy="5.1" r="0.4" fill="#fff"/>
        <circle cx="2.6" cy="5.1" r="0.4" fill="#fff"/>
        <circle cx="3.9" cy="5.1" r="0.4" fill="#fff"/>
        <circle cx="5.2" cy="5.1" r="0.4" fill="#fff"/>
        <circle cx="6.5" cy="5.1" r="0.4" fill="#fff"/>
        <circle cx="1.95" cy="6.1" r="0.4" fill="#fff"/>
        <circle cx="3.25" cy="6.1" r="0.4" fill="#fff"/>
        <circle cx="4.55" cy="6.1" r="0.4" fill="#fff"/>
        <circle cx="5.85" cy="6.1" r="0.4" fill="#fff"/>
      </svg>
    ),
  },
] as const;

type LangCode = "es" | "en";

const LangDropdown = ({ lang, setLang }: { lang: LangCode; setLang: (l: LangCode) => void }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-widest text-night/60 hover:text-night transition-colors border border-night/20 rounded-full px-2.5 py-1 hover:border-night/50"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current.flag}
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-night/10 overflow-hidden z-50" role="listbox">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={lang === l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`flex items-center gap-2.5 w-full px-3 py-2.5 text-sm font-medium transition-colors hover:bg-night/5 ${lang === l.code ? "text-night font-semibold" : "text-night/70"}`}
            >
              {l.flag}
              <span>{l.label}</span>
              {lang === l.code && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-night/40" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

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

          <LangDropdown lang={lang as LangCode} setLang={setLang} />

          <Button asChild className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-6 shadow-md hover:shadow-xl transition-all font-semibold hover:scale-105">
            <Link to="/contact">{tr.apply}</Link>
          </Button>
        </nav>

        {/* Mobile right controls */}
        <div className="md:hidden flex items-center gap-2">
          <LangDropdown lang={lang as LangCode} setLang={setLang} />
          <button
            className="p-2 -mr-2 text-night hover:text-light-yellow transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
          <div className="pt-4">
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
