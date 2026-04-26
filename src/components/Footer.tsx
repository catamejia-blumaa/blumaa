import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-blue-dark text-white-chocolate py-16">
    <div className="container relative z-10">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src="/Asset_6@4x.png" alt="Blumaa" className="h-10 w-auto mb-4 brightness-0 invert" />
          <p className="text-white-chocolate/80 text-sm leading-relaxed max-w-xs">
            Strategic branding for founders who refuse to blend in.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 text-white-chocolate">Navigate</h4>
          <div className="space-y-2">
            {[
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="block text-sm text-white-chocolate/80 hover:text-white-chocolate transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 text-white-chocolate">Connect</h4>
          <div className="space-y-2 text-sm text-white-chocolate/80">
            <a href="#" className="block hover:text-white-chocolate transition-all">Instagram</a>
            <a href="#" className="block hover:text-white-chocolate transition-all">LinkedIn</a>
            <a href="#" className="block hover:text-white-chocolate transition-all">hello@blumaa.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white-chocolate/20 pt-8 text-center text-xs text-white-chocolate/60">
        © {new Date().getFullYear()} Blumaa. All rights reserved. Strategy over aesthetics, always.
      </div>
    </div>
  </footer>
);

export default Footer;
