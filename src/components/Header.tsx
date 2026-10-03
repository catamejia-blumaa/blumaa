import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import MenuOverlay from "@/components/MenuOverlay";
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
        className="flex items-center gap-1.5 text-xs font-mono font-medium tracking-widest text-crema/80 hover:text-crema transition-colors border-[1.5px] border-crema/30 rounded-pill px-3 py-1.5 hover:border-crema/70"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current.flag}
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-36 bg-crema text-night rounded-lg border-[1.5px] border-blue/20 overflow-hidden z-50"
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

/* 3×3 grid of rounded squares — the menu trigger (same gesture as Tuesday Co) */
const GridIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
    {[2, 9.5, 17].flatMap((y) =>
      [2, 9.5, 17].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="5" height="5" rx="1.4" />),
    )}
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLang();
  const tr = t[lang].nav;

  const navLinks = [
    { label: tr.services, path: "/services" },
    { label: tr.about,    path: "/about" },
    { label: tr.contact,  path: "/contact" },
    // { label: tr.portfolio, path: "/portfolio" }, // hidden
  ];

  /* Close the overlay whenever the route changes */
  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <>
      {/* Blue bar + Crema/Butter content — approved pairing */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 md:px-8">
          <Link to="/" className="flex flex-shrink-0 items-center" aria-label="Blumaa">
            <img src="/Main_logo_cream_pink.png" alt="Blumaa" className="h-7 md:h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={`relative font-mono text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-500 ${
                    active ? "text-butter" : "text-crema/80 hover:text-crema"
                  }`}
                >
                  {link.label}
                  {active && <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-full rounded-full bg-butter" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 md:gap-3">
            <LangDropdown lang={lang as LangCode} setLang={setLang} />
            <Link
              to="/contact"
              className="hidden md:inline-flex h-10 items-center rounded-pill bg-butter px-6 text-sm font-medium text-blue transition-all duration-200 hover:-translate-y-px hover:bg-orange"
            >
              {tr.apply}
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label={tr.menu}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              className="grid h-10 w-10 place-items-center text-crema transition-colors hover:text-butter"
            >
              <GridIcon />
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
