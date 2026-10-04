import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { CtaLink } from "@/components/design";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/blumaa_branding/", Icon: Instagram, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/blumaa-growth", Icon: Linkedin, external: true },
  { label: "Email", href: "mailto:catalina@blumaagrowth.com", Icon: Mail, external: false },
];

const Footer = () => {
  const { lang } = useLang();
  const tr = t[lang];
  const nav = tr.nav;
  const ft = tr.footer;

  const navLinks = [
    { label: nav.home,     path: "/" },
    { label: nav.services, path: "/services" },
    { label: nav.about,    path: "/about" },
    // { label: nav.portfolio, path: "/portfolio" }, // hidden
    { label: nav.contact,  path: "/contact" },
  ];

  return (
    /* Crema bg + Blue text — the oversized logo closes the page like Tuesday Co's wordmark */
    <footer className="bg-crema text-blue">
      <div className="mx-auto max-w-[1280px] px-5 pb-8 pt-12 md:px-8 md:pt-16">
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:justify-between md:px-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-mono text-xs font-medium uppercase tracking-[0.2em] underline-offset-4 transition-opacity hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-14 flex flex-col items-center text-center md:mt-20">
          <Link to="/" aria-label="Blumaa">
            <img src="/Main_logo_blue_orange.png" alt="Blumaa" className="h-auto w-[78vw] max-w-[540px]" />
          </Link>
          <p className="mt-6 max-w-md text-base leading-relaxed text-night/75">{ft.tagline}</p>

          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row">
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-blue text-blue transition-colors hover:bg-blue hover:text-crema"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <CtaLink to="/contact" variant="dark">
              {nav.apply}
            </CtaLink>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-2 border-t-[1.5px] border-blue/20 pt-6 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-night/60 md:mt-20 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Blumaa · {ft.rights}
          </p>
          <a href="mailto:catalina@blumaagrowth.com" className="normal-case tracking-normal hover:text-blue">
            catalina@blumaagrowth.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
