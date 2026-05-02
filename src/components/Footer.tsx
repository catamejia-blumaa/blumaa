import { Link } from "react-router-dom";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import BlumaaLogo from "@/components/BlumaaLogo";

const Footer = () => {
  const { lang } = useLang();
  const tr = t[lang];
  const nav = tr.nav;
  const ft = tr.footer;

  const navLinks = [
    { label: nav.about,     path: "/about" },
    { label: nav.services,  path: "/services" },
    { label: nav.portfolio, path: "/portfolio" },
    { label: nav.contact,   path: "/contact" },
  ];

  return (
    /* Blue bg + Crema text — approved pairing */
    <footer className="bg-blue py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div>
            <BlumaaLogo variant="crema-star-pink" height={36} className="mb-4" />
            <p className="text-crema/75 text-xs md:text-sm leading-relaxed max-w-xs">
              {ft.tagline}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-mono font-medium text-xs uppercase tracking-[0.2em] mb-4 text-butter">{ft.navigate}</h4>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-xs md:text-sm text-crema/70 hover:text-crema transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono font-medium text-xs uppercase tracking-[0.2em] mb-4 text-butter">{ft.connect}</h4>
            <div className="space-y-1 text-xs md:text-sm text-crema/70">
              <a href="https://www.instagram.com/blumaa_branding/" target="_blank" rel="noopener noreferrer" className="block hover:text-crema transition-colors py-1">Instagram</a>
              <a href="https://www.linkedin.com/company/blumaa-growth" target="_blank" rel="noopener noreferrer" className="block hover:text-crema transition-colors py-1">LinkedIn</a>
              <a href="mailto:catalina@blumaagrowth.com" className="block hover:text-crema transition-colors py-1">catalina@blumaagrowth.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-crema/15 pt-6 text-center">
          <p className="font-mono text-xs text-crema/50 uppercase tracking-[0.15em]">
            © {new Date().getFullYear()} Blumaa · {ft.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
