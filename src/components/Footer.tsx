import { Link } from "react-router-dom";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const Footer = () => {
  const { lang } = useLang();
  const tr = t[lang];
  const nav = tr.nav;
  const ft = tr.footer;

  const navLinks = [
    { label: nav.about, path: "/about" },
    { label: nav.services, path: "/services" },
    { label: nav.contact, path: "/contact" },
  ];

  return (
    <footer className="bg-blue-dark text-white-chocolate py-10 md:py-16">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 lg:gap-12 mb-7 md:mb-12">
          <div>
            <img src="/Asset_6@4x.png" alt="Blumaa" className="h-8 md:h-10 w-auto mb-3 md:mb-4 brightness-0 invert" />
            <p className="text-white-chocolate/80 text-xs md:text-sm leading-relaxed max-w-xs">
              {ft.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-widest mb-3 md:mb-4 text-white-chocolate">{ft.navigate}</h4>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="block text-xs md:text-sm text-white-chocolate/80 hover:text-white-chocolate transition-all py-1.5">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-widest mb-3 md:mb-4 text-white-chocolate">{ft.connect}</h4>
            <div className="space-y-1 text-xs md:text-sm text-white-chocolate/80">
              <a href="#" className="block hover:text-white-chocolate transition-all py-1.5">Instagram</a>
              <a href="#" className="block hover:text-white-chocolate transition-all py-1.5">LinkedIn</a>
              <a href="#" className="block hover:text-white-chocolate transition-all py-1.5">hello@blumaa.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white-chocolate/20 pt-5 md:pt-6 text-center text-xs text-white-chocolate/60">
          © {new Date().getFullYear()} Blumaa. {ft.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
