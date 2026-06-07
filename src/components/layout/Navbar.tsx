import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Produits", href: "#produits" },
  { label: "Comment ça marche", href: "#comment" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-xl border-b border-white/[0.07] shadow-glass"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-2.5 group"
          >
            <img src={logo} alt="Manavola" className="w-9 h-9 rounded-xl" />
            <span className="font-display font-bold text-xl text-white group-hover:text-gradient-brand transition-all">
              Manavola
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => handleNav("#produits")} className="btn-primary text-sm px-5 py-2.5">
              Commencer maintenant
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-all"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-800/98 backdrop-blur-xl border-b border-white/[0.07] px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-white/[0.07]">
              <button onClick={() => handleNav("#produits")} className="btn-primary w-full text-sm py-3">
                Commencer maintenant
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
