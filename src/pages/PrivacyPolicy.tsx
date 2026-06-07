import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, UserCheck, Clock, Globe, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const sections = [
  {
    id: "article-1",
    number: "01",
    title: "Responsable du traitement",
    icon: UserCheck,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    content: (
      <>
        <p className="text-white/50 text-sm leading-relaxed mb-4">
          MANAVOLA, plateforme d'échange de cryptomonnaies en Ariary malgache, est le responsable du traitement de vos données personnelles.
        </p>
        <div className="glass-card border border-violet-500/20 p-4 rounded-xl space-y-2">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">Coordonnées du responsable</p>
          <div className="flex items-center gap-2.5 text-sm text-white/50">
            <Mail className="w-4 h-4 text-violet-400 shrink-0" />
            <a href="mailto:support@manavola.com" className="hover:text-violet-400 transition-colors">support@manavola.com</a>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-white/50">
            <Phone className="w-4 h-4 text-violet-400 shrink-0" />
            <a href="https://wa.me/261346690399" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">+261 34 66 903 99</a>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-white/50">
            <Globe className="w-4 h-4 text-violet-400 shrink-0" />
            <span>Madagascar 🇲🇬</span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "article-2",
    number: "02",
    title: "Données collectées",
    icon: Eye,
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
    content: (
      <div className="space-y-4">
        {[
          {
            sub: "2.1 Données d'identification",
            items: ["Nom d'utilisateur choisi lors de l'inscription", "Adresse email de contact", "Numéro de téléphone Mobile Money"],
          },
          {
            sub: "2.2 Données KYC (Know Your Customer)",
            items: ["Nom et prénom complets", "Adresse postale et ville de résidence", "Numéro de pièce d'identité (CIN ou passeport)", "Photo de votre pièce d'identité (recto/verso)", "Selfie avec pièce d'identité"],
          },
          {
            sub: "2.3 Données financières",
            items: ["Historique des transactions (achats/ventes)", "Montants en Ariary (MGA) et en cryptomonnaies", "Adresses de portefeuilles crypto", "Numéros Mobile Money utilisés pour les transactions"],
          },
          {
            sub: "2.4 Données techniques",
            items: ["Type d'appareil et système d'exploitation", "Version de l'application", "Logs de connexion et d'activité"],
          },
        ].map((group) => (
          <div key={group.sub}>
            <p className="text-sm font-semibold text-white/70 mb-2">{group.sub}</p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/45">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "article-3",
    number: "03",
    title: "Finalités du traitement",
    icon: Shield,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    content: (
      <ul className="space-y-2">
        {[
          "Création et gestion de votre compte utilisateur",
          "Vérification de votre identité (processus KYC)",
          "Traitement et suivi de vos transactions",
          "Prévention de la fraude, du blanchiment d'argent et du financement du terrorisme (AML/CFT)",
          "Conformité avec les obligations légales et réglementaires malgaches",
          "Assistance technique et support client",
          "Envoi de notifications relatives à vos transactions",
          "Amélioration continue de nos services",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-white/50">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500/60 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "article-4",
    number: "04",
    title: "Base légale du traitement",
    icon: Lock,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    content: (
      <div className="space-y-3">
        {[
          { label: "Exécution du contrat", desc: "Traitement des transactions, gestion du compte" },
          { label: "Obligation légale", desc: "Vérification KYC, conformité AML/CFT imposée par la réglementation financière malgache" },
          { label: "Intérêt légitime", desc: "Prévention de la fraude, sécurité de la plateforme, amélioration des services" },
          { label: "Consentement", desc: "Envoi de communications optionnelles (si applicable)" },
        ].map((b) => (
          <div key={b.label} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span className="text-xs font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded-lg shrink-0 whitespace-nowrap">{b.label}</span>
            <p className="text-sm text-white/45 leading-relaxed">{b.desc}</p>
          </div>
        ))}
        <p className="text-xs text-white/30 italic pt-1">
          Vous pouvez retirer votre consentement à tout moment sans que cela n'affecte la licéité du traitement effectué avant ce retrait.
        </p>
      </div>
    ),
  },
  {
    id: "article-5",
    number: "05",
    title: "Durée de conservation",
    icon: Clock,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    content: (
      <div className="space-y-2">
        {[
          { label: "Compte actif", duration: "Durée de l'utilisation", desc: "Pendant toute la durée de votre utilisation de MANAVOLA" },
          { label: "Données KYC", duration: "5 ans", desc: "Après la clôture du compte (obligation légale AML)" },
          { label: "Historique transactions", duration: "5 ans", desc: "À compter de la date de chaque transaction" },
          { label: "Logs de connexion", duration: "12 mois", desc: "Glissants" },
          { label: "Compte clôturé", duration: "5 ans", desc: "Après la clôture pour des raisons légales" },
        ].map((row) => (
          <div key={row.label} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="min-w-[90px]">
              <p className="text-xs font-bold text-blue-400">{row.duration}</p>
              <p className="text-xs text-white/30 mt-0.5">{row.label}</p>
            </div>
            <p className="text-sm text-white/45 leading-relaxed">{row.desc}</p>
          </div>
        ))}
        <p className="text-xs text-white/30 italic pt-1">
          Passé ces délais, vos données sont supprimées de façon sécurisée ou anonymisées.
        </p>
      </div>
    ),
  },
  {
    id: "article-6",
    number: "06",
    title: "Sécurité des données",
    icon: Shield,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    content: (
      <div className="space-y-5">
        <div>
          <p className="text-sm font-semibold text-white/70 mb-2">6.1 Mesures techniques</p>
          <ul className="space-y-1.5">
            {["Chiffrement des données en transit (HTTPS/TLS)", "Stockage sécurisé dans des bases de données chiffrées", "Accès aux données limité au personnel autorisé", "Authentification par mot de passe + code OTP", "Surveillance continue des accès et des activités suspectes"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-white/45">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white/70 mb-2">6.2 Mesures organisationnelles</p>
          <ul className="space-y-1.5">
            {["Politique d'accès minimal (principe du moindre privilège)", "Formation du personnel sur la protection des données", "Procédure de réponse aux incidents de sécurité"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-white/45">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-white/30 italic">
          En cas de violation de données susceptible d'engendrer un risque pour vos droits, vous serez notifié dans les meilleurs délais.
        </p>
      </div>
    ),
  },
  {
    id: "article-7",
    number: "07",
    title: "Partage des données",
    icon: Globe,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    content: (
      <>
        <p className="text-sm text-white/50 leading-relaxed mb-4">
          MANAVOLA <strong className="text-white/70">ne vend jamais</strong> vos données personnelles à des tiers. Vos données peuvent être partagées uniquement dans les cas suivants :
        </p>
        <ul className="space-y-2">
          {[
            { label: "Prestataires techniques", desc: "Hébergeurs et services cloud (uniquement les données nécessaires à leurs missions)" },
            { label: "Autorités compétentes", desc: "En cas d'obligation légale, décision judiciaire ou demande officielle des autorités malgaches" },
            { label: "Prévention de la fraude", desc: "Avec des organismes spécialisés dans la lutte contre la fraude financière" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded-lg shrink-0">{item.label}</span>
              <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "article-8",
    number: "08",
    title: "Transferts internationaux",
    icon: Globe,
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
    content: (
      <p className="text-sm text-white/50 leading-relaxed">
        Dans le cadre de notre infrastructure technique, certaines données peuvent être hébergées sur des serveurs situés en dehors de Madagascar. Ces transferts sont encadrés par des clauses contractuelles types garantissant un niveau de protection adéquat et des certifications et standards de sécurité reconnus internationalement.
        <br /><br />
        En utilisant MANAVOLA, vous acceptez ces transferts nécessaires au bon fonctionnement de la plateforme.
      </p>
    ),
  },
  {
    id: "article-9",
    number: "09",
    title: "Vos droits",
    icon: UserCheck,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {[
            { right: "Droit d'accès", desc: "Obtenir une copie de vos données" },
            { right: "Droit de rectification", desc: "Corriger des données inexactes" },
            { right: "Droit à l'effacement", desc: "Demander la suppression (sous réserve légale)" },
            { right: "Droit à la limitation", desc: "Suspendre le traitement dans certains cas" },
            { right: "Droit à la portabilité", desc: "Recevoir vos données en format structuré" },
            { right: "Droit d'opposition", desc: "Vous opposer à certains traitements" },
          ].map((item) => (
            <div key={item.right} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-xs font-bold text-purple-400 mb-1">{item.right}</p>
              <p className="text-xs text-white/40">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
          <Mail className="w-4 h-4 text-violet-400 shrink-0" />
          <p className="text-sm text-white/50">
            Pour exercer vos droits : <a href="mailto:support@manavola.com" className="text-violet-400 hover:text-violet-300 transition-colors">support@manavola.com</a> — réponse sous 30 jours.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "article-10",
    number: "10",
    title: "Cookies et technologies similaires",
    icon: Lock,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    content: (
      <>
        <p className="text-sm text-white/50 leading-relaxed mb-3">
          L'application MANAVOLA n'utilise pas de cookies au sens traditionnel. Nous utilisons des technologies similaires pour :
        </p>
        <ul className="space-y-1.5 mb-3">
          {["Maintenir votre session de connexion (token sécurisé stocké localement)", "Mémoriser vos préférences d'utilisation", "Analyser les performances de l'application (données agrégées et anonymisées)"].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/45">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/30 italic">Ces données de session sont stockées localement sur votre appareil et ne sont pas partagées avec des tiers à des fins publicitaires.</p>
      </>
    ),
  },
  {
    id: "article-11",
    number: "11",
    title: "Données des mineurs",
    icon: Shield,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    content: (
      <p className="text-sm text-white/50 leading-relaxed">
        MANAVOLA est une plateforme réservée aux personnes âgées d'au moins <strong className="text-white/70">18 ans</strong>. Nous ne collectons pas sciemment de données personnelles concernant des mineurs.
        <br /><br />
        Si vous avez connaissance qu'un mineur a créé un compte sur notre plateforme, veuillez nous contacter immédiatement à <a href="mailto:support@manavola.com" className="text-violet-400 hover:text-violet-300 transition-colors">support@manavola.com</a>.
      </p>
    ),
  },
  {
    id: "article-12",
    number: "12",
    title: "KYC et données sensibles",
    icon: Lock,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    content: (
      <>
        <p className="text-sm text-white/50 leading-relaxed mb-3">
          Les documents d'identité et photos collectés dans le cadre du processus KYC constituent des données sensibles traitées avec le plus grand soin :
        </p>
        <ul className="space-y-1.5">
          {["Stockage dans un espace sécurisé à accès restreint (bucket privé chiffré)", "Accès limité aux agents KYC autorisés uniquement", "Utilisation exclusive aux fins de vérification d'identité", "Conservation conforme aux obligations légales AML/CFT (5 ans)", "Aucun partage avec des tiers non autorisés"].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/45">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-500/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "article-13",
    number: "13",
    title: "Modifications de la politique",
    icon: Eye,
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
    content: (
      <>
        <p className="text-sm text-white/50 leading-relaxed mb-3">
          MANAVOLA se réserve le droit de modifier la présente politique de confidentialité à tout moment. En cas de modification substantielle, vous serez informé via :
        </p>
        <ul className="space-y-1.5 mb-3">
          {["Une notification dans l'application", "Un email envoyé à votre adresse de contact"].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/45">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/30 italic">La poursuite de l'utilisation de MANAVOLA après notification des modifications vaut acceptation de la nouvelle politique.</p>
      </>
    ),
  },
  {
    id: "article-14",
    number: "14",
    title: "Contact et réclamations",
    icon: Mail,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    content: (
      <>
        <p className="text-sm text-white/50 leading-relaxed mb-4">
          Pour toute question, demande d'exercice de vos droits ou réclamation relative à la protection de vos données personnelles :
        </p>
        <div className="space-y-2 mb-4">
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
        <p className="text-xs text-white/30 italic">Nous nous engageons à traiter votre demande dans un délai de 30 jours ouvrables.</p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
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
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-600/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-violet-400" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Politique de <span className="text-gradient-brand">confidentialité</span>
          </h1>
          <p className="text-white/40 text-base leading-relaxed max-w-2xl mb-6">
            MANAVOLA s'engage à protéger vos données personnelles avec le plus haut niveau de sécurité.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
            <Clock className="w-3.5 h-3.5 text-white/30" />
            <span className="text-xs text-white/40">Dernière mise à jour : 01 avril 2026</span>
          </div>
        </div>
      </div>

      {/* Summary Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="glass-card border border-violet-500/20 p-5 rounded-2xl">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">En résumé</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: "🔒", text: "Nous ne vendons jamais vos données à des tiers" },
              { icon: "🛡️", text: "Vos données sont chiffrées et sécurisées" },
              { icon: "✅", text: "KYC obligatoire pour respecter les lois AML/CFT" },
              { icon: "👤", text: "Vous contrôlez vos données : accès, rectification, suppression" },
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
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className={`glass-card border ${section.border} rounded-2xl overflow-hidden`}
          >
            {/* Article Header */}
            <div className={`px-6 py-4 border-b ${section.border} flex items-center gap-4`}>
              <div className={`w-10 h-10 rounded-xl ${section.bg} border ${section.border} flex items-center justify-center shrink-0`}>
                <section.icon className={`w-4.5 h-4.5 ${section.color}`} />
              </div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className={`font-display font-bold text-xs ${section.color} tabular-nums`}>Art. {section.number}</span>
                <h2 className="font-display font-bold text-white text-base sm:text-lg leading-tight">{section.title}</h2>
              </div>
            </div>
            {/* Article Content */}
            <div className="px-6 py-5">{section.content}</div>
          </div>
        ))}

        {/* Footer CTA */}
        <div className="glass-card border border-violet-500/20 rounded-2xl p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-violet-400" />
          </div>
          <h3 className="font-display font-bold text-white text-xl mb-2">Une question sur vos données ?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
            <a
              href="mailto:support@manavola.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500/10 border border-violet-500/25 text-violet-400 hover:bg-violet-500/20 hover:border-violet-500/50 transition-all text-sm font-semibold"
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
