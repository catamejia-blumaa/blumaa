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
        className="flex items-center gap-1.5 text-xs font-mono font-medium tracking-widest text-night/60 hover:text-night transition-colors border-[1.5px] border-night/20 rounded-pill px-3 py-1.5 hover:border-night/50"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current.flag}
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-36 bg-crema rounded-lg shadow-xl border border-night/10 overflow-hidden z-50"
          role="listbox"
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={lang === l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`flex items-center gap-2.5 w-full px-3 py-2.5 text-sm transition-colors hover:bg-blue/5 ${lang === l.code ? "text-night font-semibold" : "text-night/70"}`}
            >
              {l.flag}
              <span>{l.label}</span>
              {lang === l.code && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue" />}
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
    { label: tr.about,     path: "/about" },
    { label: tr.services,  path: "/services" },
    { label: tr.portfolio, path: "/portfolio" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crema border-b border-night/8 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src="/Main_loco_blue_pink.png" alt="Blumaa" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors relative ${
                location.pathname === link.path
                  ? "text-blue"
                  : "text-night/70 hover:text-night"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-blue rounded-full" />
              )}
            </Link>
          ))}

          <LangDropdown lang={lang as LangCode} setLang={setLang} />

          {/* CTA: Dark button — Blue bg + Crema text */}
          <Button
            asChild
            className="bg-blue text-crema hover:opacity-85 hover:-translate-y-px rounded-pill px-6 text-sm font-medium transition-all duration-200 h-9"
          >
            <Link to="/contact">{tr.apply}</Link>
          </Button>
        </nav>

        {/* Mobile right controls */}
        <div className="md:hidden flex items-center gap-2">
          <LangDropdown lang={lang as LangCode} setLang={setLang} />
          <button
            className="p-2 -mr-1 text-night hover:text-blue transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-crema border-t border-night/8 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center py-3 px-2 text-base font-medium border-b border-night/6 transition-colors ${
                location.pathname === link.path ? "text-blue" : "text-night/75 active:text-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-5">
            <Button
              asChild
              className="w-full bg-blue text-crema hover:opacity-85 rounded-pill text-sm font-medium h-11 transition-all duration-200"
            >
              <Link to="/contact" onClick={() => setMobileOpen(false)}>{tr.apply}</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
