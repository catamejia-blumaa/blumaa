import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white-chocolate border-b border-white-chocolate/10 shadow-lg">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img src="/Asset_6@4x.png" alt="Blumaa" className="h-10 w-auto" />
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
          <Button asChild className="bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full px-6 shadow-md hover:shadow-xl transition-all font-semibold hover:scale-105">
            <Link to="/contact">Apply Now</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-night hover:text-light-yellow transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white-chocolate border-t border-white-chocolate/10 px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-base font-medium hover:text-light-yellow py-2 transition-colors ${
                location.pathname === link.path ? "text-blue" : "text-blue/75"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full bg-light-yellow text-night hover:bg-light-yellow/90 rounded-full shadow-md font-semibold">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Apply Now</Link>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
