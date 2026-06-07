import { Facebook, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const WHATSAPP_NUMBER = "261346690399";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const FACEBOOK_LINK = "https://www.facebook.com/ReynardDC3.0";
const EMAIL = "support@manavola.com";

const footerLinks = {
  produits: [
    { label: "ChatBot Messenger", href: "#produits" },
    { label: "ChatHub", href: "#produits" },
    { label: "Manavola App", href: "#produits" },
  ],
  entreprise: [
    { label: "À propos", href: "#pourquoi" },
    { label: "Comment ça marche", href: "#comment" },
    { label: "Sécurité", href: "#pourquoi" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (href: string) => {
    if (href === "#") return;
    if (href.startsWith("/")) { navigate(href); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-navy-900 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Manavola" className="w-10 h-10 rounded-xl" />
              <span className="font-display font-bold text-2xl text-white">Manavola</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              La plateforme de référence à Madagascar pour échanger et acheter vos cryptomonnaies en Ariary. Rapide, sécurisé et fiable.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                aria-label="Facebook Manavola"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300"
                aria-label="WhatsApp"
              >
                {/* WhatsApp SVG icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/messages/t/ReynardDC3.0`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-brand-500/20 hover:border-brand-500/40 transition-all duration-300"
                aria-label="Messenger"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Produits */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Produits</h4>
            <ul className="space-y-3">
              {footerLinks.produits.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-sm text-white/40 hover:text-violet-400 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-sm text-white/40 hover:text-violet-400 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/40">
                <MapPin className="w-4 h-4 mt-0.5 text-violet-400 shrink-0" />
                <span>Antananarivo, Madagascar</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/40">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-violet-400 transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/40">
                <Phone className="w-4 h-4 text-violet-400 shrink-0" />
                <a
                  href={`tel:+261346690399`}
                  className="hover:text-violet-400 transition-colors"
                >
                  +261 34 66 903 99
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/40 hover:text-violet-400 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-violet-400 shrink-0" />
                  Manavola
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <div className="mt-5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/25 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 text-green-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-green-400">WhatsApp</p>
                  <p className="text-xs text-white/30">+261 34 66 903 99</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.05] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p className="text-xs text-white/25">Plateforme opérationnelle</p>
          </div>
          <p className="text-xs text-white/25">
            © 2023 Manavola. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/privacy-policy")}
              className="text-xs text-white/25 hover:text-violet-400 transition-colors underline underline-offset-2"
            >
              Politique de confidentialité
            </button>
            <button
              onClick={() => navigate("/terms-of-service")}
              className="text-xs text-white/25 hover:text-violet-400 transition-colors underline underline-offset-2"
            >
              CGU
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
