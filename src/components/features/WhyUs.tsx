import { useEffect, useRef, useState, useCallback } from "react";
import { Shield, Zap, HeadphonesIcon, TrendingUp, Lock, Star, Send, User, MessageSquare, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Sécurité maximale",
    description: "Vos fonds et données personnelles sont protégés par des protocoles de sécurité et une authentification à deux facteurs.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Zap,
    title: "Transactions rapides",
    description: "Échangez en moins de 5 minutes. Notre système automatisé traite vos demandes instantanément, 24h/24.",
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
  },
  {
    icon: TrendingUp,
    title: "Meilleurs taux garantis",
    description: "Nous mettons à jour nos taux en temps réel pour vous garantir les meilleurs prix du marché malgache.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: HeadphonesIcon,
    title: "Support local 24/7",
    description: "Notre équipe malgache est disponible pour vous aider à tout moment. Support en malgache, français et anglais.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Lock,
    title: "Conformité réglementaire",
    description: "Manavola opère en conformité avec les réglementations financières malgaches. Plateforme légale et agréée.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Star,
    title: "Expérience éprouvée",
    description: "Des milliers de Malgaches font confiance à Manavola pour leurs échanges crypto. Rejoignez la communauté.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
];

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
  avatar: string;
}

const STORAGE_KEY = "manavola_reviews";

const defaultReviews: Review[] = [
  {
    id: "1",
    name: "Rakoto Jean",
    text: "Manavola m'a permis d'acheter mes premiers Bitcoins très facilement. Le service est rapide et le support répond vite !",
    rating: 5,
    date: "2025-05-10",
    avatar: "RJ",
  },
  {
    id: "2",
    name: "Voahangy S.",
    text: "J'utilise ChatHub tous les jours pour mes échanges. Interface simple et taux compétitifs. Je recommande vraiment !",
    rating: 5,
    date: "2025-05-15",
    avatar: "VS",
  },
  {
    id: "3",
    name: "Hery M.",
    text: "Le ChatBot Messenger est incroyable, je peux échanger sans même ouvrir un autre site. Très pratique pour les échanges quotidiens !",
    rating: 5,
    date: "2025-05-18",
    avatar: "HM",
  },
  {
    id: "4",
    name: "Fanja R.",
    text: "Service impeccable, transfert en moins de 10 minutes. L'équipe support est très réactive sur WhatsApp. Confiance totale !",
    rating: 5,
    date: "2025-06-01",
    avatar: "FR",
  },
  {
    id: "5",
    name: "Andry T.",
    text: "Meilleurs taux de tout Madagascar. J'ai comparé avec les autres plateformes et Manavola gagne à chaque fois.",
    rating: 5,
    date: "2025-06-10",
    avatar: "AT",
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-MG", { day: "numeric", month: "short", year: "numeric" });
}

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #6366f1, #a855f7)",
  "linear-gradient(135deg, #8b5cf6, #ec4899)",
  "linear-gradient(135deg, #06b6d4, #6366f1)",
  "linear-gradient(135deg, #10b981, #6366f1)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #3b82f6, #8b5cf6)",
];

function getAvatarGradient(id: string): string {
  const idx = parseInt(id) % AVATAR_GRADIENTS.length;
  return AVATAR_GRADIENTS[idx] || AVATAR_GRADIENTS[0];
}

function StarRating({
  value,
  onChange,
  readonly = false,
  size = "md",
}: {
  value: number;
  onChange?: (v: number) => void;
  readonly?: boolean;
  size?: "sm" | "md";
}) {
  const [hovered, setHovered] = useState(0);
  const sz = size === "sm" ? "w-3.5 h-3.5" : "w-6 h-6";

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => !readonly && setHovered(star)}
          onMouseLeave={() => !readonly && setHovered(0)}
          className={`transition-transform duration-150 ${!readonly ? "hover:scale-125 cursor-pointer" : "cursor-default"}`}
          aria-label={`${star} étoile${star > 1 ? "s" : ""}`}
        >
          <Star
            className={`${sz} transition-colors duration-150 ${
              star <= (hovered || value)
                ? "text-violet-400 fill-violet-400"
                : "text-white/20 fill-transparent"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

// ─── Carousel Component ───────────────────────────────────────────────────────
function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [visible, setVisible] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const AUTOPLAY_INTERVAL = 4500;

  const go = useCallback(
    (dir: "prev" | "next") => {
      if (isAnimating || reviews.length === 0) return;
      setDirection(dir === "next" ? "right" : "left");
      setIsAnimating(true);
      setVisible(false);

      setTimeout(() => {
        setCurrent((c) =>
          dir === "next" ? (c + 1) % reviews.length : (c - 1 + reviews.length) % reviews.length
        );
        setVisible(true);
        setTimeout(() => setIsAnimating(false), 350);
      }, 250);
    },
    [isAnimating, reviews.length]
  );

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating || idx === current) return;
      setDirection(idx > current ? "right" : "left");
      setIsAnimating(true);
      setVisible(false);
      setTimeout(() => {
        setCurrent(idx);
        setVisible(true);
        setTimeout(() => setIsAnimating(false), 350);
      }, 250);
    },
    [current, isAnimating]
  );

  // Auto-play
  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => go("next"), AUTOPLAY_INTERVAL);
  }, [go]);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [resetAutoPlay]);

  if (reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-56 glass-card border border-white/[0.08] rounded-2xl">
        <Star className="w-10 h-10 text-white/15 mb-3" />
        <p className="text-white/35 text-sm">Soyez le premier à laisser un avis !</p>
      </div>
    );
  }

  const review = reviews[current];
  const gradient = getAvatarGradient(review.id);

  return (
    <div className="relative select-none">
      {/* Main card */}
      <div
        className="glass-card border border-violet-500/15 rounded-2xl p-8 overflow-hidden min-h-[260px] flex flex-col justify-between"
        style={{
          background: "linear-gradient(145deg, rgba(99,102,241,0.05) 0%, rgba(15,14,26,0.6) 100%)",
        }}
      >
        {/* Quote icon */}
        <div className="absolute top-5 right-6 opacity-[0.06] pointer-events-none">
          <Quote className="w-20 h-20 text-violet-400" />
        </div>

        {/* Content */}
        <div
          className="relative z-10 flex-1 flex flex-col gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateX(0)"
              : direction === "right"
              ? "translateX(-24px)"
              : "translateX(24px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {/* Stars */}
          <StarRating value={review.rating} readonly size="sm" />

          {/* Review text */}
          <p className="text-white/70 text-base leading-relaxed italic flex-1">
            "{review.text}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-lg"
              style={{ background: gradient }}
            >
              <span className="text-sm font-bold text-white">{review.avatar}</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{review.name}</p>
              <p className="text-white/30 text-xs">{formatDate(review.date)}</p>
            </div>
            <div className="ml-auto flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[10px] font-semibold text-green-400">Vérifié</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation + Dots */}
      <div className="flex items-center justify-between mt-4 px-1">
        {/* Prev/Next buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => { go("prev"); resetAutoPlay(); }}
            className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.10] flex items-center justify-center text-white/40 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-200"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => { go("next"); resetAutoPlay(); }}
            className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.10] flex items-center justify-center text-white/40 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-200"
            aria-label="Suivant"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { goTo(idx); resetAutoPlay(); }}
              className="transition-all duration-300 rounded-full focus:outline-none"
              style={{
                width: idx === current ? "24px" : "7px",
                height: "7px",
                background:
                  idx === current
                    ? "linear-gradient(135deg, #6366f1, #a855f7)"
                    : "rgba(255,255,255,0.15)",
              }}
              aria-label={`Avis ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="text-xs text-white/25 tabular-nums">
          {current + 1} / {reviews.length}
        </span>
      </div>

      {/* Progress bar auto-play */}
      <div className="mt-3 h-0.5 rounded-full bg-white/[0.06] overflow-hidden">
        <div
          key={`${current}-progress`}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            animation: `progressBar ${AUTOPLAY_INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState({ name: "", text: "", rating: 0 });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; text?: string; rating?: string }>({});

  // Load reviews from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setReviews(JSON.parse(stored));
      } else {
        setReviews(defaultReviews);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultReviews));
      }
    } catch {
      setReviews(defaultReviews);
    }
  }, []);

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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Nom requis (min. 2 caractères)";
    if (!form.text.trim() || form.text.trim().length < 10) e.text = "Avis requis (min. 10 caractères)";
    if (form.rating === 0) e.rating = "Veuillez sélectionner une note";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name: form.name.trim(),
      text: form.text.trim(),
      rating: form.rating,
      date: new Date().toISOString().split("T")[0],
      avatar: getInitials(form.name.trim()),
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setForm({ name: "", text: "", rating: 0 });
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const avgRating = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  return (
    <section id="pourquoi" ref={ref} className="section-padding relative overflow-hidden bg-navy-900">
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-violet-600/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-brand-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Pourquoi nous</span>
          </div>
          <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Pourquoi choisir <span className="text-gradient-brand">Manavola ?</span>
          </h2>
          <p className="animate-on-scroll text-white/40 text-lg max-w-2xl mx-auto">
            La plateforme crypto la plus fiable et accessible de Madagascar, conçue pour les Malgaches.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className={`animate-on-scroll glass-card-hover border ${reason.border} p-6 group`}
            >
              <div className={`w-12 h-12 rounded-xl ${reason.bg} border ${reason.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className={`w-5 h-5 ${reason.color}`} />
              </div>
              <h3 className="font-display font-semibold text-white text-base mb-2">{reason.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* ── Community Reviews ── */}
        <div className="animate-on-scroll">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                Avis de la <span className="text-gradient-brand">communauté</span>
              </h3>
              <p className="text-white/35 text-sm">Rejoignez des milliers de Malgaches satisfaits</p>
            </div>
            {reviews.length > 0 && (
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.04] border border-violet-500/20 shrink-0">
                <div className="text-center">
                  <p className="font-display font-bold text-3xl text-white leading-none">{avgRating}</p>
                  <p className="text-white/35 text-xs mt-1">/ 5</p>
                </div>
                <div>
                  <StarRating value={Math.round(parseFloat(avgRating))} readonly size="sm" />
                  <p className="text-white/35 text-xs mt-1">{reviews.length} avis</p>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            {/* ── Carousel (left 3 cols) ── */}
            <div className="lg:col-span-3">
              <ReviewCarousel reviews={reviews} />
            </div>

            {/* ── Add Review Form (right 2 cols) ── */}
            <div className="lg:col-span-2">
              <div className="glass-card border border-violet-500/20 p-6">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm">Laisser un avis</h4>
                    <p className="text-white/35 text-xs">Partagez votre expérience</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center">
                      <Star className="w-6 h-6 text-green-400 fill-green-400" />
                    </div>
                    <p className="font-semibold text-white text-sm">Merci pour votre avis !</p>
                    <p className="text-white/35 text-xs">Il apparaît maintenant dans le carrousel.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                        Votre nom
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                          placeholder="Ex: Rakoto Jean"
                          className="w-full bg-white/[0.04] border border-white/[0.10] rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all"
                        />
                      </div>
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                        Note
                      </label>
                      <StarRating
                        value={form.rating}
                        onChange={(v) => { setForm({ ...form, rating: v }); setErrors({ ...errors, rating: undefined }); }}
                      />
                      {errors.rating && <p className="text-red-400 text-xs mt-1">{errors.rating}</p>}
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                        Votre avis
                      </label>
                      <textarea
                        value={form.text}
                        onChange={(e) => { setForm({ ...form, text: e.target.value }); setErrors({ ...errors, text: undefined }); }}
                        placeholder="Partagez votre expérience avec Manavola..."
                        rows={4}
                        className="w-full bg-white/[0.04] border border-white/[0.10] rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all resize-none"
                      />
                      {errors.text && <p className="text-red-400 text-xs mt-1">{errors.text}</p>}
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-3"
                    >
                      <Send className="w-4 h-4" />
                      Publier mon avis
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
