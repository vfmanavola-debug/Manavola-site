import { useEffect, useRef } from "react";
import { Users, ArrowLeftRight, Clock, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10 000+",
    label: "Utilisateurs actifs",
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
  },
  {
    icon: ArrowLeftRight,
    value: "50M+ Ar",
    label: "Volume échangé / mois",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Clock,
    value: "< 5 min",
    label: "Temps de transaction",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Globe,
    value: "3",
    label: "Plateformes disponibles",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
    <section ref={ref} className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-violet-500/20" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`animate-on-scroll glass-card-hover p-6 text-center border ${stat.border}`}
            >
              <div className={`w-12 h-12 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className={`font-display font-bold text-2xl sm:text-3xl ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/40 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
