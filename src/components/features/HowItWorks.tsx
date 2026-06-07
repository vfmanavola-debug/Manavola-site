import { useEffect, useRef } from "react";
import { UserPlus, MessageSquare, ArrowLeftRight, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Créez votre compte",
    description: "Inscrivez-vous en quelques secondes sur la plateforme de votre choix : Messenger, ChatHub ou l'application mobile.",
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Initiez votre échange",
    description: "Indiquez le montant et le type de crypto que vous souhaitez acheter ou vendre. Notre système calcule le taux optimal.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    step: "03",
    icon: ArrowLeftRight,
    title: "Effectuez le transfert",
    description: "Suivez les instructions pour effectuer votre paiement en Ariary ou envoyer vos cryptos. Tout est guidé étape par étape.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Recevez vos fonds",
    description: "Une fois la transaction vérifiée, recevez vos cryptos ou vos Ariary en moins de 5 minutes. Confirmation immédiate.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
];

export default function HowItWorks() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="comment" ref={ref} className="section-padding relative overflow-hidden bg-navy-800">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Processus</span>
          </div>
          <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Comment ça <span className="text-gradient-violet">marche ?</span>
          </h2>
          <p className="animate-on-scroll text-white/40 text-lg max-w-2xl mx-auto">
            En 4 étapes simples, effectuez vos échanges crypto-Ariary en toute sécurité et en quelques minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.step} className="animate-on-scroll relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-violet-500/20 to-transparent z-0 -translate-y-1/2" />
              )}
              <div className={`relative glass-card border ${step.border} p-6 hover:-translate-y-1 transition-transform duration-300`}>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-navy-700 border border-white/[0.08] flex items-center justify-center">
                  <span className={`text-xs font-bold font-display ${step.color}`}>{step.step}</span>
                </div>
                <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center mb-4`}>
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="animate-on-scroll mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm text-white/50">
              Toutes les transactions sont vérifiées et sécurisées par notre équipe dédiée
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
