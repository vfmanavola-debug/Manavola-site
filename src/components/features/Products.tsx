import { useEffect, useRef } from "react";
import { MessageCircle, Globe, Smartphone, ArrowRight, Check } from "lucide-react";
import productMessenger from "@/assets/product-messenger-v2.jpg";
import productChathub from "@/assets/product-chathub-v2.jpg";
import productApp from "@/assets/product-app-v2.jpg";

const products = [
  {
    id: "messenger",
    icon: MessageCircle,
    name: "ChatBot Messenger",
    tagline: "Échangez via Facebook Messenger",
    description:
      "Discutez directement avec notre bot automatique sur Facebook Messenger. Envoyez votre demande d'échange, obtenez le taux en temps réel et finalisez votre transaction — sans quitter votre application préférée.",
    image: productMessenger,
    accent: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
    featuredBorder: "",
    features: [
      "Disponible 24h/24, 7j/7",
      "Réponse automatique instantanée",
      "Taux mis à jour en temps réel",
      "Accessible depuis Facebook",
    ],
    cta: "Ouvrir sur Messenger",
    badge: "Facebook",
    href: "https://www.facebook.com/ReynardDC3.0",
  },
  {
    id: "chathub",
    icon: Globe,
    name: "ChatHub",
    tagline: "Chatbot web indépendant",
    description:
      "La même puissance que notre ChatBot Messenger, mais directement sur notre site web. Aucun compte Facebook requis. Accédez au service depuis n'importe quel navigateur et effectuez vos échanges simplement.",
    image: productChathub,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    featuredBorder: "ring-1 ring-violet-500/40",
    features: [
      "Indépendant de Facebook",
      "Interface web intuitive",
      "Compatible tous navigateurs",
      "Historique des transactions",
    ],
    cta: "Accéder au ChatHub",
    badge: "Web",
    featured: true,
    href: "https://manavola.momo-pay.me/",
  },
  {
    id: "app",
    icon: Smartphone,
    name: "Manavola App",
    tagline: "L'application mobile dédiée",
    description:
      "Une application mobile complète, sécurisée et fiable pour gérer tous vos échanges crypto-Ariary. Conçue pour une expérience utilisateur optimale avec des notifications en temps réel.",
    image: productApp,
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    featuredBorder: "",
    features: [
      "Application mobile Android",
      "Sécurité renforcée (2FA)",
      "Notifications push instantanées",
      "Portefeuille intégré",
    ],
    cta: "Télécharger l'App",
    badge: "Mobile",
    href: "https://github.com/vfmanavola-debug/fichier-App-Manavola/releases/latest/download/manavola.apk",
  },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="produits" ref={ref} className="section-padding bg-navy-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Nos Produits</span>
          </div>
          <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            3 façons d'échanger vos <span className="text-gradient-brand">cryptos</span>
          </h2>
          <p className="animate-on-scroll text-white/40 text-lg max-w-2xl mx-auto">
            Choisissez la solution qui vous convient le mieux. Toutes offrent la même sécurité et les mêmes taux compétitifs.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`animate-on-scroll relative group glass-card border ${product.border} overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 ${
                product.featured ? `${product.featuredBorder} shadow-brand lg:scale-105` : ""
              }`}
            >
              {product.featured && (
                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}>
                  Populaire
                </div>
              )}

              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${product.bg}`} style={{ background: product.id === "messenger" ? "linear-gradient(90deg, #6366f1, transparent)" : product.id === "chathub" ? "linear-gradient(90deg, #8b5cf6, transparent)" : "linear-gradient(90deg, #a855f7, transparent)" }} />

              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-navy-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
                <div className={`absolute bottom-4 left-4 px-2.5 py-1 rounded-lg ${product.bg} border ${product.border}`}>
                  <span className={`text-xs font-bold ${product.accent}`}>{product.badge}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${product.bg} border ${product.border} flex items-center justify-center shrink-0`}>
                    <product.icon className={`w-5 h-5 ${product.accent}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg leading-tight">{product.name}</h3>
                    <p className={`text-xs font-medium ${product.accent}`}>{product.tagline}</p>
                  </div>
                </div>

                <p className="text-white/40 text-sm leading-relaxed mb-5">{product.description}</p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/50">
                      <Check className={`w-4 h-4 shrink-0 ${product.accent}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={product.href}
                  target={product.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 border ${product.border} ${product.bg} ${product.accent} hover:scale-[1.02] group/btn`}
                >
                  {product.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
