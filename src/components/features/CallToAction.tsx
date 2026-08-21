import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle, Globe, Smartphone } from "lucide-react";

const ctaOptions = [
  {
    icon: MessageCircle,
    label: "ChatBot Messenger",
    sub: "Via Facebook Messenger",
    color: "text-brand-400",
    bg: "hover:bg-brand-500/10",
    border: "border-brand-500/20",
    href: "https://www.facebook.com/ReynardDC3.0",
  },
  {
    icon: Globe,
    label: "ChatHub Web",
    sub: "Depuis votre navigateur",
    color: "text-violet-400",
    bg: "hover:bg-violet-500/10",
    border: "border-violet-500/20",
    href: "https://manavola.momo-pay.me/",
  },
  {
    icon: Smartphone,
    label: "Manavola App",
    sub: "Android",
    color: "text-purple-400",
    bg: "hover:bg-purple-500/10",
    border: "border-purple-500/20",
    href:"https://github.com/vfmanavola-debug/fichier-App-Manavola/releases/latest/download/manavola.apk",
  },
];

export default function CallToAction() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-navy-800">
      {/* Subtle glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-violet-600/[0.08] blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-card border border-violet-500/20 p-10 md:p-16 text-center overflow-hidden relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-brand-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />

          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs font-semibold text-violet-300 uppercase tracking-wider">
              Commencez dès aujourd'hui
            </span>
          </div>

          <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Prêt à rejoindre{" "}
            <span className="text-gradient-brand">Manavola ?</span>
          </h2>

          <p className="animate-on-scroll text-white/40 text-lg max-w-xl mx-auto mb-10">
            Des milliers de Malgaches font déjà confiance à Manavola pour leurs échanges crypto. C'est votre tour !
          </p>

          {/* Options */}
          <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {ctaOptions.map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border ${opt.border} ${opt.bg} transition-all duration-300 text-left hover:scale-[1.02] group`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0">
                  <opt.icon className={`w-5 h-5 ${opt.color}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{opt.label}</p>
                  <p className="text-xs text-white/35 truncate">{opt.sub}</p>
                </div>
                <ArrowRight className={`w-4 h-4 ${opt.color} ml-auto shrink-0 group-hover:translate-x-1 transition-transform`} />
              </a>
            ))}
          </div>

          <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary flex items-center gap-2 text-base px-8 py-3.5">
              Créer mon compte gratuitement
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
