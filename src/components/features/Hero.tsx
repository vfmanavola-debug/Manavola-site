import { useEffect, useRef } from "react";
import { ChevronDown, TrendingUp, Shield, Zap, Download } from "lucide-react";
const badges = [
  { icon: Shield, label: "100% Sécurisé", color: "text-green-400" },
  { icon: TrendingUp, label: "Meilleur taux", color: "text-violet-400" },
  { icon: Zap, label: "Instantané", color: "text-purple-400" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    const el = document.querySelector("#produits");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Clean gradient background — no photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

      {/* Subtle brand glow blobs */}
      <div className="absolute top-1/4 left-1/3 w-[480px] h-[480px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            {/* Headline */}
            <h1 className="animate-on-scroll font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
              Échangez vos{" "}
              <span className="text-gradient-brand">Cryptos</span>
              <br />
              en{" "}
              <span className="relative inline-block">
                <span className="text-gradient-violet">Ariary</span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ background: "linear-gradient(135deg, #8b5cf6, #a855f7)" }} />
              </span>
            </h1>

            {/* Description */}
            <p className="animate-on-scroll text-white/50 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Manavola vous offre la solution la plus simple et sécurisée pour acheter, vendre et échanger vos cryptomonnaies contre des Ariary malgaches — en quelques secondes.
            </p>

            {/* Badges */}
            <div className="animate-on-scroll flex flex-wrap justify-center gap-3 mb-10">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]"
                >
                  <badge.icon className={`w-3.5 h-3.5 ${badge.color}`} />
                  <span className="text-xs font-medium text-white/60">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Premium Download CTA */}
            <div className="animate-on-scroll flex justify-center">
              <a
                  href="https://github.com/vfmanavola-debug/fichier-App-Manavola/releases/latest/download/manavola.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-white text-base overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:shadow-[0_0_60px_rgba(99,102,241,0.55)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] focus:outline-none"
                style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)" }}
              >
                {/* Shimmer overlay */}
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)", backgroundSize: "200% 100%" }} />

                {/* Icon container */}
                <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
                  {/* Android icon */}
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-1C2.67 17 2 17.67 2 18.5v-9C2 8.67 2.67 8 3.5 8S5 8.67 5 9.5v9c0 .83-.67 1.5-1.5 1.5zm17 0c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.66 0-1.3.11-1.9.31L8.64.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.928 5.928 0 0 0 6 7h12a5.93 5.93 0 0 0-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                  </svg>
                </span>

                {/* Text */}
                <span className="relative flex flex-col items-start">
                  <span className="text-white/70 text-[11px] font-semibold uppercase tracking-widest leading-none mb-0.5">Version 2.0.2</span>
                  <span className="text-white text-lg font-bold leading-tight">Manavola App</span>
                </span>

                {/* Arrow */}
                <span className="relative ml-1">
                  <Download className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-300" />
                </span>
              </a>
            </div>


          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center px-4">
        <button
          onClick={handleScroll}
          aria-label="Défiler vers le bas"
          className="group flex flex-col items-center gap-3 focus:outline-none"
        >
          {/* Pill label */}
          <span className="px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 group-hover:bg-white/[0.10] group-hover:border-violet-500/40 transition-all duration-300">
            Découvrir
          </span>
          {/* Animated arrow */}
          <div className="flex flex-col items-center gap-0.5 animate-float">
            <ChevronDown className="w-4 h-4 text-violet-400/60 group-hover:text-violet-400 transition-colors duration-300" />
            <ChevronDown className="w-4 h-4 text-violet-400/30 group-hover:text-violet-400/60 -mt-2 transition-colors duration-300" />
          </div>
        </button>
      </div>
    </section>
  );
}
