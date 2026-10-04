import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Instagram, Linkedin, Mail, X } from "lucide-react";
import { Eyebrow, CtaLink, PatternBg, Polaroid } from "@/components/design";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

/**
 * Full-screen menu (Tuesday Co "full-menu" overlay): big serif links,
 * a photo on the left, contact points + a Blue card on the right.
 * Butter bg → Blue card (DS card-contrast rule).
 */
const MenuOverlay = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { lang } = useLang();
  const tr = t[lang];
  const location = useLocation();
  const closeRef = useRef<HTMLButtonElement>(null);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  /* Tuesday Co: full menu fades (0.5s) on desktop, the mobile menu slides in from the left (0.5s) */
  const offscreen = isMobile && !reduceMotion ? { x: "-100%" } : { opacity: 0 };

  const links = [
    { label: tr.nav.home, path: "/" },
    { label: tr.nav.about, path: "/about" },
    { label: tr.nav.services, path: "/services" },
    { label: tr.nav.contact, path: "/contact" },
  ];

  /* Lock page scroll, close on Esc, move focus to the close button */
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={tr.nav.menu}
          className="fixed inset-0 z-[60] overflow-y-auto bg-butter text-blue"
          initial={offscreen}
          animate={{ opacity: 1, x: 0 }}
          exit={offscreen}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
        >
          {/* Fixed so the checker stays put while a short screen scrolls the menu */}
          <PatternBg name="butter" className="fixed" />
          <div className="relative mx-auto flex min-h-full max-w-[1280px] flex-col px-5 md:px-8">
            {/* Top bar */}
            <div className="flex h-16 flex-shrink-0 items-center justify-between">
              <Link to="/" onClick={onClose} className="flex items-center">
                <img src="/Main_logo_blue_orange.png" alt="Blumaa" className="h-7 md:h-8 w-auto" />
              </Link>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label={tr.nav.close}
                className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-blue transition-colors hover:bg-blue hover:text-butter"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid flex-1 items-center gap-10 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)] md:gap-8 md:py-12">
              {/* Photo */}
              <div className="hidden md:block">
                <Polaroid
                  src="/photos/menu-mug.jpg"
                  alt=""
                  rotate={-4}
                  aspect="4 / 5"
                  ring
                  className="mx-auto max-w-[280px]"
                />
              </div>

              {/* Links */}
              <nav aria-label={tr.nav.menu}>
                <ul>
                  {links.map((link, i) => {
                    const active = location.pathname === link.path;
                    return (
                      <motion.li
                        key={link.path}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                        className="border-b-[1.5px] border-blue/20 last:border-b-0"
                      >
                        <Link
                          to={link.path}
                          onClick={onClose}
                          aria-current={active ? "page" : undefined}
                          className="group flex items-baseline gap-4 py-2 font-serif text-[clamp(2.75rem,8vw,5.5rem)] uppercase leading-none transition-all duration-500 hover:translate-x-2 md:py-3"
                        >
                          <span className="w-8 flex-shrink-0 font-mono text-xs tracking-[0.2em]">0{i + 1}</span>
                          <span className={active ? "italic" : ""}>{link.label}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Connect + CTA */}
              <div className="space-y-8">
                <div>
                  <Eyebrow className="mb-4">{tr.footer.connect}</Eyebrow>
                  <ul className="space-y-3 text-base">
                    <li>
                      <a
                        href="https://www.instagram.com/blumaa_branding/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 transition-opacity duration-500 hover:opacity-70"
                      >
                        <Instagram size={18} /> Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/blumaa-growth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 transition-opacity duration-500 hover:opacity-70"
                      >
                        <Linkedin size={18} /> LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:catalina@blumaagrowth.com"
                        className="inline-flex items-center gap-3 break-all transition-opacity duration-500 hover:opacity-70"
                      >
                        <Mail size={18} /> catalina@blumaagrowth.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-blue p-6 text-crema">
                  <p className="mb-5 text-base leading-snug text-crema/85">{tr.footer.tagline}</p>
                  <CtaLink to="/contact" variant="primary" className="w-full">
                    {tr.nav.apply}
                  </CtaLink>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
