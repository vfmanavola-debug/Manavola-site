import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Shield, User, Lock, AlertTriangle, Clock, Globe, Mail, Phone, CreditCard, Eye, Gavel, XCircle, HelpCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const articles = [
  {
    id: "article-1",
    number: "01",
    title: "Objet et acceptation",
    icon: FileText,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    content: (
      <div className="space-y-3 text-sm text-white/50 leading-relaxed">
        <p>
          Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de l'application mobile <strong className="text-white/70">MANAVOLA</strong>, plateforme d'échange de cryptomonnaies en Ariary malgache (MGA), développée et exploitée par MANAVOLA.
        </p>
        <p>En accédant à l'application, vous acceptez sans réserve l'intégralité des présentes CGU.</p>
        <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
          <p className="text-sm text-white/60 font-semibold mb-2">MANAVOLA permet à ses utilisateurs :</p>
          <ul className="space-y-1.5">
            {[
              "D'acheter des cryptomonnaies (Bitcoin, USDT, Ethereum, etc.) en Ariary via Mobile Money (MVola, Orange Money, Airtel Money).",
              "De vendre des cryptomonnaies et recevoir des Ariary sur leur compte Mobile Money.",
              "De suivre leurs transactions et l'historique de leurs échanges.",
              "De gérer leur profil et leurs informations KYC.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-500/60 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-white/35 mt-3 italic">Les services sont disponibles 24h/24, 7j/7, sous réserve de maintenance technique.</p>
        </div>
      </div>
    ),
  },
  {
    id: "article-2",
    number: "02",
    title: "Conditions d'accès",
    icon: User,
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-white/50 leading-relaxed">Pour utiliser MANAVOLA, l'utilisateur doit :</p>
        <ul className="space-y-2">
          {[
            { label: "Âge minimum", desc: "Être âgé d'au moins 18 ans." },
            { label: "Mobile Money", desc: "Disposer d'un numéro de téléphone Mobile Money valide à Madagascar." },
            { label: "Email valide", desc: "Fournir une adresse email valide pour la connexion." },
            { label: "Acceptation CGU", desc: "Accepter les présentes CGU et la politique de confidentialité." },
            { label: "KYC", desc: "Compléter la vérification d'identité pour les transactions au-delà des seuils réglementaires." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-xs font-bold text-brand-400 bg-brand-500/10 border border-brand-500/20 px-2 py-1 rounded-lg shrink-0 whitespace-nowrap">{item.label}</span>
              <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/30 italic pt-1">
          Tout compte créé avec de fausses informations sera suspendu immédiatement.
        </p>
      </div>
    ),
  },
  {
    id: "article-3",
    number: "03",
    title: "Création de compte et authentification",
    icon: Lock,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    content: (
      <div className="space-y-3 text-sm text-white/50 leading-relaxed">
        <p>L'inscription se fait via une adresse email. Un code OTP (One-Time Password) à 4 chiffres est envoyé par email pour valider chaque connexion — il n'y a pas de mot de passe traditionnel.</p>
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
          <p className="text-white/60 font-semibold text-sm mb-2">Responsabilité de l'utilisateur</p>
          <p>L'utilisateur est responsable de la confidentialité de son email et de son accès à l'application. Toute activité effectuée depuis son compte lui est entièrement imputée.</p>
        </div>
      </div>
    ),
  },
  {
    id: "article-4",
    number: "04",
    title: "Vérification d'identité (KYC)",
    icon: Eye,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-white/50 leading-relaxed">
          Conformément aux réglementations anti-blanchiment (AML) et contre le financement du terrorisme (CFT), MANAVOLA peut exiger la vérification d'identité :
        </p>
        <ul className="space-y-2">
          {[
            "Pièce d'identité nationale (CIN) ou passeport.",
            "Photo de soi (selfie) tenant la pièce d'identité.",
            "Justificatif de domicile.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/45">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/30 italic">
          Les données KYC sont traitées de manière confidentielle et sécurisée. MANAVOLA se réserve le droit de refuser ou suspendre tout compte en cas de non-conformité.
        </p>
      </div>
    ),
  },
  {
    id: "article-5",
    number: "05",
    title: "Transactions et frais",
    icon: CreditCard,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    content: (
      <div className="space-y-4">
        {[
          {
            sub: "6.1 Délais de traitement",
            desc: "Les transactions sont traitées dans un délai de 15 minutes ouvrables. Tout dépassement de ce délai donne droit à un recours auprès du support client.",
          },
          {
            sub: "6.2 Frais",
            desc: "Des frais de service sont appliqués sur chaque transaction. Ils sont communiqués à l'utilisateur avant la confirmation de chaque ordre et couvrent les coûts opérationnels et les frais de réseau blockchain.",
          },
          {
            sub: "6.3 Limites",
            desc: "Des limites minimales et maximales s'appliquent à chaque transaction. Elles sont consultables dans l'application et peuvent être modifiées par l'administrateur.",
          },
          {
            sub: "6.4 Irrévocabilité",
            desc: "Toute transaction confirmée sur la blockchain est irrévocable. MANAVOLA ne peut être tenu responsable d'une erreur de l'utilisateur (mauvaise adresse, mauvais montant).",
          },
        ].map((item) => (
          <div key={item.sub} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-sm font-semibold text-white/70 mb-1">{item.sub}</p>
            <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "article-6",
    number: "06",
    title: "Risques liés aux cryptomonnaies",
    icon: AlertTriangle,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-white/50 leading-relaxed">L'utilisateur reconnaît et accepte que :</p>
        <ul className="space-y-2">
          {[
            "Les cryptomonnaies sont des actifs hautement volatils dont la valeur peut fluctuer significativement.",
            "Les pertes financières potentielles sont entièrement à la charge de l'utilisateur.",
            "MANAVOLA ne fournit aucun conseil en investissement.",
            "La détention et l'échange de cryptomonnaies peuvent être soumis à des réglementations spécifiques à Madagascar.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/45">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-500/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="p-3.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
          <p className="text-sm font-semibold text-yellow-400">⚠️ Avertissement</p>
          <p className="text-sm text-white/45 mt-1">Il est fortement conseillé de n'investir que des sommes que vous êtes prêt à perdre.</p>
        </div>
      </div>
    ),
  },
  {
    id: "article-7",
    number: "07",
    title: "Obligations de l'utilisateur",
    icon: User,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    content: (
      <div className="space-y-2">
        <p className="text-sm text-white/50 leading-relaxed mb-3">L'utilisateur s'engage à :</p>
        {[
          { label: "Légalité", desc: "Ne pas utiliser MANAVOLA à des fins illicites (blanchiment, financement du terrorisme, fraude)." },
          { label: "Sécurité", desc: "Ne pas tenter de contourner les systèmes de sécurité de la plateforme." },
          { label: "Confidentialité", desc: "Ne pas partager ses identifiants d'accès avec des tiers." },
          { label: "Exactitude", desc: "Fournir des informations exactes et à jour." },
          { label: "Conformité", desc: "Respecter les lois et réglementations malgaches en vigueur." },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded-lg shrink-0">{item.label}</span>
            <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
          </div>
        ))}
        <p className="text-xs text-white/30 italic pt-1">Tout manquement à ces obligations entraînera la suspension ou la suppression définitive du compte.</p>
      </div>
    ),
  },
  {
    id: "article-8",
    number: "08",
    title: "Limitation de responsabilité",
    icon: Shield,
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
    content: (
      <div className="space-y-2">
        <p className="text-sm text-white/50 leading-relaxed mb-3">MANAVOLA ne saurait être tenu responsable :</p>
        <ul className="space-y-2">
          {[
            "Des pertes financières résultant de la volatilité des cryptomonnaies.",
            "Des interruptions de service liées à des cas de force majeure (pannes réseau, cyber-attaques, catastrophes naturelles).",
            "Des erreurs commises par l'utilisateur lors de ses transactions.",
            "Des dysfonctionnements des réseaux Mobile Money (MVola, Orange Money, Airtel Money) indépendants de notre volonté.",
            "Des retards imputables aux réseaux blockchain.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/45">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "article-9",
    number: "09",
    title: "Protection des données personnelles",
    icon: Lock,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    content: (
      <div className="space-y-3 text-sm text-white/50 leading-relaxed">
        <p>MANAVOLA collecte et traite les données personnelles dans le cadre strict de la fourniture de ses services. Les données collectées incluent : nom, prénom, email, numéro de téléphone, documents d'identité et historique des transactions.</p>
        <div className="space-y-1.5">
          <p className="text-white/60 font-semibold text-sm mb-2">Vos données sont :</p>
          {[
            "Stockées de manière sécurisée avec chiffrement.",
            "Jamais vendues à des tiers commerciaux.",
            "Partagées uniquement avec les autorités en cas d'obligation légale.",
            "Conservées conformément aux exigences réglementaires malgaches.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500/60 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/30 italic">Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour plus de détails, consultez notre <a href="/privacy-policy" className="text-violet-400 hover:text-violet-300 transition-colors">Politique de confidentialité</a>.</p>
      </div>
    ),
  },
  {
    id: "article-10",
    number: "10",
    title: "Propriété intellectuelle",
    icon: FileText,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    content: (
      <div className="space-y-3 text-sm text-white/50 leading-relaxed">
        <p>L'application MANAVOLA, son code source, son design, ses marques et logos sont la propriété exclusive de MANAVOLA.</p>
        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <p className="text-sm font-semibold text-purple-400 mb-1">⛔ Interdiction</p>
          <p>Toute reproduction, copie, modification ou distribution sans autorisation écrite préalable est strictement interdite.</p>
        </div>
      </div>
    ),
  },
  {
    id: "article-11",
    number: "11",
    title: "Suspension et résiliation de compte",
    icon: XCircle,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-white/50 leading-relaxed">MANAVOLA se réserve le droit de suspendre ou résilier un compte utilisateur sans préavis en cas de :</p>
        <ul className="space-y-2">
          {[
            "Violation des présentes CGU.",
            "Suspicion d'activité frauduleuse ou illicite.",
            "Non-conformité KYC.",
            "Décision judiciaire ou administrative.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/45">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-500/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/30 italic">L'utilisateur peut clôturer son compte à tout moment en contactant le support. Les fonds disponibles seront restitués selon les procédures en vigueur.</p>
      </div>
    ),
  },
  {
    id: "article-12",
    number: "12",
    title: "Modifications des CGU",
    icon: Eye,
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
    content: (
      <div className="space-y-3 text-sm text-white/50 leading-relaxed">
        <p>MANAVOLA se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront notifiés de toute modification significative via l'application.</p>
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <p className="text-xs text-white/30 italic">La poursuite de l'utilisation de l'application après notification vaut acceptation des nouvelles conditions.</p>
        </div>
      </div>
    ),
  },
  {
    id: "article-13",
    number: "13",
    title: "Droit applicable et juridiction",
    icon: Gavel,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    content: (
      <div className="space-y-3 text-sm text-white/50 leading-relaxed">
        <p>Les présentes CGU sont soumises au <strong className="text-white/70">droit malgache</strong>. Tout litige relatif à leur interprétation ou exécution sera soumis à la compétence exclusive des <strong className="text-white/70">tribunaux de Madagascar</strong>.</p>
        <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <Globe className="w-4 h-4 text-blue-400 shrink-0" />
          <p className="text-sm text-white/50">En cas de litige amiable, l'utilisateur peut contacter : <a href="mailto:support@manavola.com" className="text-blue-400 hover:text-blue-300 transition-colors">support@manavola.com</a></p>
        </div>
      </div>
    ),
  },
  {
    id: "article-14",
    number: "14",
    title: "Contact",
    icon: Mail,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    content: (
      <>
        <p className="text-sm text-white/50 leading-relaxed mb-4">
          Pour toute question relative aux présentes CGU ou à l'utilisation de l'application :
        </p>
        <div className="space-y-2">
          <a href="mailto:support@manavola.com" className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 transition-colors group">
            <Mail className="w-4 h-4 text-green-400 shrink-0" />
            <div>
              <p className="text-xs text-white/30">Email</p>
              <p className="text-sm text-white/60 group-hover:text-violet-400 transition-colors">support@manavola.com</p>
            </div>
          </a>
          <a href="https://wa.me/261346690399" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-green-500/30 transition-colors group">
            <Phone className="w-4 h-4 text-green-400 shrink-0" />
            <div>
              <p className="text-xs text-white/30">WhatsApp</p>
              <p className="text-sm text-white/60 group-hover:text-green-400 transition-colors">+261 34 66 903 99</p>
            </div>
          </a>
        </div>
        <p className="text-xs text-white/30 italic mt-3">Nous nous engageons à répondre dans un délai de 48 heures ouvrables.</p>
      </>
    ),
  },
  {
    id: "article-15",
    number: "15",
    title: "Dispositions finales",
    icon: HelpCircle,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    content: (
      <div className="space-y-3 text-sm text-white/50 leading-relaxed">
        <p>Si une disposition des présentes CGU est déclarée invalide ou inapplicable par une juridiction compétente, les autres dispositions demeureront en vigueur et produiront pleinement leurs effets.</p>
        <p>Le fait pour MANAVOLA de ne pas exercer un droit prévu par les présentes CGU ne constitue pas une renonciation à ce droit.</p>
        <div className="p-3.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-center">
          <p className="text-sm font-semibold text-white/60">© 2026 MANAVOLA — Tous droits réservés</p>
          <p className="text-xs text-white/35 mt-1">Madagascar 🇲🇬</p>
        </div>
      </div>
    ),
  },
];

export default function TermsOfService() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-navy-900/90 backdrop-blur-lg border-b border-white/[0.07]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Retour</span>
          </button>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Manavola" className="w-7 h-7 rounded-lg" />
            <span className="font-display font-bold text-white text-sm hidden sm:block">Manavola</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-600/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-brand-400" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-brand-500/30 to-transparent" />
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Conditions Générales <span className="text-gradient-brand">d'Utilisation</span>
          </h1>
          <p className="text-white/40 text-base leading-relaxed max-w-2xl mb-6">
            Veuillez lire attentivement les conditions ci-dessous avant d'utiliser MANAVOLA. En utilisant nos services, vous acceptez l'ensemble des conditions définies dans ce document.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
            <Clock className="w-3.5 h-3.5 text-white/30" />
            <span className="text-xs text-white/40">Dernière mise à jour : 01 avril 2026</span>
          </div>
        </div>
      </div>

      {/* Summary Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="glass-card border border-brand-500/20 p-5 rounded-2xl">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">En un coup d'œil</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: "🔞", text: "Réservé aux personnes de 18 ans et plus" },
              { icon: "⚡", text: "Transactions traitées en moins de 15 minutes" },
              { icon: "🔒", text: "KYC requis pour les transactions importantes" },
              { icon: "🇲🇬", text: "Conforme au droit malgache (AML/CFT)" },
            ].map((item) => (
              <div key={item.icon} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                <span className="text-base shrink-0">{item.icon}</span>
                <p className="text-xs text-white/45 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-5">
        {articles.map((article) => (
          <div
            key={article.id}
            id={article.id}
            className={`glass-card border ${article.border} rounded-2xl overflow-hidden`}
          >
            {/* Article Header */}
            <div className={`px-6 py-4 border-b ${article.border} flex items-center gap-4`}>
              <div className={`w-10 h-10 rounded-xl ${article.bg} border ${article.border} flex items-center justify-center shrink-0`}>
                <article.icon className={`w-4.5 h-4.5 ${article.color}`} />
              </div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className={`font-display font-bold text-xs ${article.color} tabular-nums`}>Art. {article.number}</span>
                <h2 className="font-display font-bold text-white text-base sm:text-lg leading-tight">{article.title}</h2>
              </div>
            </div>
            {/* Article Content */}
            <div className="px-6 py-5">{article.content}</div>
          </div>
        ))}

        {/* Footer CTA */}
        <div className="glass-card border border-brand-500/20 rounded-2xl p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6 text-brand-400" />
          </div>
          <h3 className="font-display font-bold text-white text-xl mb-2">Une question sur nos CGU ?</h3>
          <p className="text-white/40 text-sm mb-5">Notre équipe est disponible pour vous répondre sous 48h ouvrables.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:support@manavola.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500/10 border border-brand-500/25 text-brand-400 hover:bg-brand-500/20 hover:border-brand-500/50 transition-all text-sm font-semibold"
            >
              <Mail className="w-4 h-4" />
              support@manavola.com
            </a>
            <a
              href="https://wa.me/261346690399"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 hover:bg-green-500/20 hover:border-green-500/50 transition-all text-sm font-semibold"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp +261 34 66 903 99
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-white/20 pt-4">
          © 2026 MANAVOLA — Tous droits réservés. Madagascar 🇲🇬
        </p>
      </div>
    </div>
  );
}
