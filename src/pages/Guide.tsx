import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  FileText,
  BadgeCheck,
  Wallet,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Camera,
  Clock,
  Compass,
  type LucideIcon,
} from "lucide-react";
import logo from "@/assets/logo.png";

type SectionKey = "inscription" | "kyc" | "mobilemoney";

type Step = {
  num: number;
  title: string;
  text: ReactNode;
  img: string;
  alt: string;
};

type Callout = {
  type: "danger" | "amber" | "green";
  icon: LucideIcon;
  title: string;
  content: ReactNode;
};

const calloutStyles: Record<Callout["type"], { text: string; bg: string; border: string }> = {
  danger: { text: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  green: { text: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
};

type Theme = {
  key: SectionKey;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  bg: string;
  border: string;
  steps: Step[];
  callouts: Callout[];
};

const themes: Theme[] = [
  {
    key: "inscription",
    icon: FileText,
    title: "Fisoratana Anarana",
    subtitle: "6 dingana — hanao account voalohany",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    steps: [
      {
        num: 1,
        title: "Midira ao amin'ny manavola.com ary téléchargeo ny application",
        text: (
          <>
            Sokafy ny navigateur-nao (Chrome, opera mini, browser sns) ary chercheo ny{" "}
            <strong className="text-white/70">manavola.com</strong>. Rehefa tonga eo amin'ny pejy fandraisana ianao
            (page d'accueil), dia tsindrio ny bouton volomparasy "Manavola App" mba ahafahanao mitelecharge ny
            application ao amin'ny findainao.
          </>
        ),
        img: "/guide/landing.jpg",
        alt: "Pejy manavola.com misy ny baoritra fisintonana ny application",
      },
      {
        num: 2,
        title: "Fenoy ny taratasy fisoratana anarana na formulaire",
        text: (
          <>
            Ao amin'ny application rehefa azo ny application dia installeo ka sokafy, tsindrio ny "Inscription".
            Ampidiro ny <strong className="text-white/70">email na mailaka</strong> mbamin'ny{" "}
            <strong className="text-white/70">tenimiafina (mot de passe)</strong> tianao hampiasaina (farafahakeliny 6
            tarehin-tsoratra), dia avy eo soraty indray izy io hanamarinana izany. Raha manana kaody fanentanana
            ianao (code parrainage)? Azonao ampidirina eo amin'ny "J'ai un code parrainage". Farany, mariho ny
            fifanarahana, vakina tsara dia asina croix raha manaiky ianao (CGU) ary tsindrio "Envoyer le code OTP".
          </>
        ),
        img: "/guide/form.jpg",
        alt: "Taratasy fisoratana anarana: mailaka, tenimiafina, CGU",
      },
      {
        num: 3,
        title: "Jereo ny mailakao (email) — hisy kaody tonga ao",
        text: (
          <>
            Sokafy ny email (Gmail, hotmail, yahoo...). Hahita mailaka avy amin'ny MANAVOLA ianao misy ilay{" "}
            <strong className="text-white/70">kaody misy isa 8</strong>. Raha tsy hita ao amin'ny "Boaty message" dia
            Jereo ao amin'ny Spam.
          </>
        ),
        img: "/guide/email.jpg",
        alt: "Mailaka MANAVOLA misy ny kaody OTP",
      },
      {
        num: 4,
        title: "Ampidiro ao amin'ny Application ny kaody 8 chiffre",
        text: (
          <>
            Miverina ao amin'ny application ianao, eo amin'ny "Vérification OTP". Soraty tsirairay ny isa 8, na
            tsindrio ny "Coller le code" raha efa (copié) tao amin'ny findainao ilay kaody.
          </>
        ),
        img: "/guide/otp_empty.jpg",
        alt: "Efijery fanoratana ny kaody OTP, mbola tsy feno",
      },
      {
        num: 5,
        title: "Tsindrio \"Vérifier le code\"",
        text: (
          <>
            Rehefa feno ny efajoro 8 rehetra dia hiova ho <strong className="text-white/70">maitso</strong> izy
            ireo ary hiseho ny hafatra "Code complet — appuyez sur Vérifier". Tsindrio ny baoritra maitso lehibe
            mba hanamarinana ny kaontinao.
          </>
        ),
        img: "/guide/otp_filled.jpg",
        alt: "Kaody OTP feno sy vonona hamarinina",
      },
      {
        num: 6,
        title: "Vita! Efa ao amin'ny kaontinao ianao",
        text: (
          <>
            Miditra ho azy ao amin'ny application ianao ary hahita ny efijery fandraisana, misy ny anaranao eo
            ambony. Vonona ianao hanomboka <strong className="text-white/70">mividy na mivarotra crypto</strong>,
            sy hampiasa ny Mobile Money (Mvola, Orange Money, Airtel Money) mivantana ao amin'ny app!
          </>
        ),
        img: "/guide/home.jpg",
        alt: "Efijery fandraisana rehefa vita ny fisoratana anarana",
      },
    ],
    callouts: [
      {
        type: "danger",
        icon: Lock,
        title: "Zava-dehibe",
        content: (
          <p>
            Aza mizara ny kaody OTP na ny tenimiafinao amin'olon-kafa — na dia mpiasan'ny MANAVOLA aza mangataka
            izany aminao, tsy tokony hatao izany.
          </p>
        ),
      },
      {
        type: "green",
        icon: CheckCircle2,
        title: "Torohevitra",
        content: (
          <ul className="space-y-1.5">
            {[
              "Amarino tsara ny adiresy mailaka nampiasainao — izy io no hampiasaina hidirana amin'ny kaonty.",
              "Safidio tenimiafina matanjaka: afangaro isa, litera lehibe/kely.",
              "Tehirizo ao amin'ny toerana azo itokisana ny mailaka mitana ny kaody, raha mila averina jerena.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        ),
      },
    ],
  },
  {
    key: "kyc",
    icon: BadgeCheck,
    title: "Fanamarinana (KYC)",
    subtitle: "dingana 12 — vérification identité",
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
    steps: [
      {
        num: 1,
        title: "Midira ao amin'ny tabilao \"Profil\"",
        text: <>Eo amin'ny fandraisana na (Accueil), tsindrio ny "Profil" eo amin'ny tabilao ambany, eo ankavanana.</>,
        img: "/guide/kyc/kyc-01-profil-tab.jpg",
        alt: "Efijery fandraisana, tsindrio Profil",
      },
      {
        num: 2,
        title: "Tsindrio ny \"KYC non soumis\"",
        text: (
          <>
            Ao amin'ny Profil, hita eo ambanin'ny anaranao ny toetry ny KYC-nao. Raha mbola tsy voamarina ianao,
            tsindrio ilay hoe "KYC non soumis" mba hanombohana ny dingana.
          </>
        ),
        img: "/guide/kyc/kyc-02-non-soumis.jpg",
        alt: "Tsavolo KYC non soumis eo amin'ny Profil",
      },
      {
        num: 3,
        title: "Fantaro izay ilaina, avy eo tsindrio \"Commencer la vérification\"",
        text: (
          <>
            Omany ireo zavatra ilaina: sary "selfie" mivantana, ny kara-panondro (CIN na Passeport), ary ny
            adiresinao eto Madagasikara. Rehefa vonona ianao, tsindrio ny bouton maintso "Commencer la
            vérification".
          </>
        ),
        img: "/guide/kyc/kyc-03-intro.jpg",
        alt: "Efijery fampahafantarana ny KYC",
      },
      {
        num: 4,
        title: "Safidio ny karatra ampiasainao",
        text: (
          <>
            Safidio na <strong className="text-white/70">CIN</strong> (Carte Nationale d'Identité) na{" "}
            <strong className="text-white/70">Passeport</strong>, avy eo tsindrio "Suivant".
          </>
        ),
        img: "/guide/kyc/kyc-04-type-document.jpg",
        alt: "Safidy CIN na Passeport",
      },
      {
        num: 5,
        title: "Fenoy ny mombamomba sy ampidiro ny sary",
        text: (
          <>
            Soraty ny anaranao feno araka ny amin'ny karatra, sy ny laharana CIN. Tsindrio "Recto" sy "Verso" mba
            hampidirana ny sary CIN anao ambadika sy ambadika. Tsindrio "Suivant" rehefa vita.
          </>
        ),
        img: "/guide/kyc/kyc-05-carte-identite.jpg",
        alt: "Famenoana anarana, laharana CIN, sary recto/verso",
      },
      {
        num: 6,
        title: "Vakio tsara ny torohevitra momba ny vérification de vivacité",
        text: (
          <>
            Alohan'ny hanombohana, vakio ireto: mitadiava toerana misy hazavana ampy, esory ny solomaso sy
            satroka, tazomy eo amin'ny haavon'ny masonao ny findainao.
          </>
        ),
        img: "/guide/kyc/kyc-06-vivacite-instructions.jpg",
        alt: "Torohevitra alohan'ny fanamarinana vivacité",
      },
      {
        num: 7,
        title: "Manomboha ny fanamarinana miaraka amin'ny kamera",
        text: (
          <>
            Alefaso eo anatin'ny "cadre ovale" ny tavanao, ary tsindrio "Appuyer pour commencer" mba hanombohana
            ny fanamarinana mivantana (live).
          </>
        ),
        img: "/guide/kyc/kyc-07-pret-verifier.jpg",
        alt: "Efijery Prêt à vérifier, cadre ovale",
      },
      {
        num: 8,
        title: "Araho ny baiko eo amin'ny efijery",
        text: (
          <>
            Araho tsara ny baiko miseho (ohatra: mitodika, mitsiky, mipi-maso) mandra-pahavitan'ny 100%. Rehefa
            vita dia tsindrio "Suivant".
          </>
        ),
        img: "/guide/kyc/kyc-08-vivacite-camera.jpg",
        alt: "Kamera mivantana mandritra ny vérification de vivacité",
      },
      {
        num: 9,
        title: "Ampidiro ny adiresinao",
        text: (
          <>
            Soraty ny adiresy misy anao (lalana/quartier/lot) sy ny tanàna. Mety hisy fangatahana taratasy
            fanamarinana toerana (justificatif de domicile) any aoriana. Tsindrio "Suivant".
          </>
        ),
        img: "/guide/kyc/kyc-09-adresse.jpg",
        alt: "Famenoana adiresy fonenana",
      },
      {
        num: 10,
        title: "Vita ny fandefasana ny dosie-nao",
        text: (
          <>
            Rehefa lany daholo ny dingana rehetra, dia hiseho ny hafatra "KYC soumis avec succès". Tsindrio
            "Accéder à l'application" mba hiverina any amin'ny application.
          </>
        ),
        img: "/guide/kyc/kyc-10-succes.jpg",
        alt: "KYC soumis avec succès",
      },
      {
        num: 11,
        title: "Miandry ny valiny (24–48 ora)",
        text: (
          <>
            Ao amin'ny Profil, hita eo ny toetra "KYC en attente" — midika izany fa efa mandinika ny dosie-nao ny
            ekipa MANAVOLA. Mety ho 24 ka hatramin'ny 48 ora izany.
          </>
        ),
        img: "/guide/kyc/kyc-11-en-attente.jpg",
        alt: "KYC en attente eo amin'ny Profil",
      },
      {
        num: 12,
        title: "Vita! Voamarina ny kaontinao",
        text: (
          <>
            Rehefa avy nekena ny dosie-nao, dia hiova ho maitso ny tabilao eo amin'ny Profil, misy ny hafatra
            "KYC Vérifié". Afaka mampiasa an'i Manavola tanteraka ianao izao.
          </>
        ),
        img: "/guide/kyc/kyc-12-verifie.jpg",
        alt: "KYC Vérifié eo amin'ny Profil",
      },
    ],
    callouts: [
      {
        type: "amber",
        icon: Camera,
        title: "Mariho tsara",
        content: (
          <p>
            Aza mandefa sary maizina na manjelanjelatra. Tsy ho ekena ny sary tsy mazava, ary hampiala fotoana
            bebe kokoa amin'ny fanamarinana.
          </p>
        ),
      },
      {
        type: "danger",
        icon: Lock,
        title: "Zava-dehibe",
        content: (
          <p>
            Ny CIN na Passeport ampiasainao dia tsy maintsy mbola manan-kery (tsy lany daty), ary ny sary
            mivantana (selfie live) tokony ho anao tokoa — tsy azo ampiasaina ny sarin'olon-kafa.
          </p>
        ),
      },
      {
        type: "green",
        icon: CheckCircle2,
        title: "Torohevitra",
        content: (
          <ul className="space-y-1.5">
            {[
              "Ataovy ao amin'ny toerana mazava tsara ny fakana sary, tsy misy lalovan'ny masoandro mivantana.",
              "Ampiasao ny CIN vaovao indrindra raha manana roa ianao.",
              "Raha nolavina ny dosie-nao, mahazo mandefa indray ianao rehefa nahitsy ny olana nolazain'ny ekipa.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        ),
      },
    ],
  },
  {
    key: "mobilemoney",
    icon: Wallet,
    title: "Liaison Mobile Money",
    subtitle: "4 dingana — MVola, Orange Money, Airtel Money",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    steps: [
      {
        num: 1,
        title: "Midira ao amin'ny \"Mobile Money\" ao amin'ny Profil",
        text: (
          <>
            Ao amin'ny Profil, tsindrio ny "Mobile Money" (ao ambanin'ny "Sécurité") mba hidirana amin'ny
            fitantanana ny kaonty Mobile Money-nao.
          </>
        ),
        img: "/guide/mobilemoney/mm-01-profil-menu.jpg",
        alt: "Profil, tsindrio Mobile Money",
      },
      {
        num: 2,
        title: "Tsindrio \"Lier un numéro\"",
        text: (
          <>
            Raha mbola tsy misy kaonty voalefa ianao, dia hita ny hafatra "Aucun compte lié". Tsindrio ny
            baoritra "+ Lier un numéro" mba hanomboka.
          </>
        ),
        img: "/guide/mobilemoney/mm-02-aucun-compte.jpg",
        alt: "Aucun compte lié, tsindrio Lier un numéro",
      },
      {
        num: 3,
        title: "Safidio ny opérateur, ampidiro ny laharana sy ny anarana",
        text: (
          <>
            Safidio ny opérateur ampiasainao (<strong className="text-white/70">MVola</strong>,{" "}
            <strong className="text-white/70">Orange Money</strong>, na{" "}
            <strong className="text-white/70">Airtel Money</strong>). Avy eo soraty ny laharana finday mifandray
            amin'ilay kaonty, ary ny anarana feno an'ilay tompon'ny kaonty — tsy maintsy mitovy amin'ilay
            voasoratra ao amin'ny mobile money mihitsy. Tsindrio "Lier ce numéro" rehefa vita.
          </>
        ),
        img: "/guide/mobilemoney/mm-03-lier-formulaire.jpg",
        alt: "Formulaire liaison: opérateur, numéro, nom du titulaire",
      },
      {
        num: 4,
        title: "Miandry ny fankatoavana (approbation)",
        text: (
          <>
            Rehefa vita ny fandefasana, dia hita ao amin'ny lisitrao ilay laharana vaovao. Tsy maintsy
            ankatoavin'ny ekipa MANAVOLA aloha izy io (voamarika{" "}
            <strong className="text-white/70">"Approuvé"</strong> sy{" "}
            <strong className="text-white/70">"Disponible"</strong> rehefa vita), vao azo ampiasaina mivantana
            amin'ny fividianana sy fivarotana.
          </>
        ),
        img: "/guide/mobilemoney/mm-04-approuve.jpg",
        alt: "Compte MVola approuvé et disponible",
      },
    ],
    callouts: [
      {
        type: "amber",
        icon: Clock,
        title: "Mariho tsara",
        content: (
          <p>
            Tsy azo ampiasaina avy hatrany ilay laharana — miandry ny fankatoavan'ny ekipa MANAVOLA aloha izy io,
            ohatra ny KYC.
          </p>
        ),
      },
      {
        type: "danger",
        icon: Lock,
        title: "Zava-dehibe",
        content: (
          <p>
            Ny anarana soratanao dia tsy maintsy <strong className="text-white/70">mitovy tanteraka</strong>{" "}
            amin'ilay anarana rehistrina tokoa ao amin'ny MVola/Orange Money/Airtel Money — raha tsy mitovy, mety
            holavina ny fangatahana.
          </p>
        ),
      },
      {
        type: "green",
        icon: CheckCircle2,
        title: "Torohevitra",
        content: (
          <ul className="space-y-1.5">
            {[
              "Azonao atao ny mampiditra hatramin'ny 3 laharana samihafa (3 emplacements).",
              "Ampiasao ny laharana ananao mihitsy, tsy an'olon-kafa, mba tsy hisian'olana amin'ny fankatoavana.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        ),
      },
    ],
  },
];

export default function Guide() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    inscription: false,
    kyc: false,
    mobilemoney: false,
  });

  const toggle = (key: SectionKey) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const openAndScroll = (key: SectionKey) => {
    setOpen((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      document.getElementById(`theme-${key}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

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

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl overflow-hidden bg-white/[0.06] border border-white/[0.12] backdrop-blur-md flex items-center justify-center">
            <img src={logo} alt="Manavola" className="w-full h-full object-cover" />
          </div>
          <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-white/40 mb-3">Manavola</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Torolalana <span className="text-gradient-brand">Application Manavola</span>
          </h1>
          <p className="text-white/40 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Safidio ny lohahevitra tianao jerena eto ambany.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {themes.map((theme) => (
              <button
                key={theme.key}
                onClick={() => openAndScroll(theme.key)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.07] hover:border-violet-500/30 transition-all duration-300"
              >
                <theme.icon className={`w-4 h-4 ${theme.color}`} />
                {theme.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-5">
        {themes.map((theme) => (
          <div key={theme.key} id={`theme-${theme.key}`} className={`glass-card border ${theme.border} rounded-2xl overflow-hidden scroll-mt-20`}>
            <button
              onClick={() => toggle(theme.key)}
              aria-expanded={open[theme.key]}
              className="w-full flex items-center gap-4 px-6 py-4 text-left"
            >
              <div className={`w-10 h-10 rounded-xl ${theme.bg} border ${theme.border} flex items-center justify-center shrink-0`}>
                <theme.icon className={`w-4.5 h-4.5 ${theme.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-display font-bold text-white text-base sm:text-lg leading-tight">{theme.title}</h2>
                <p className="text-xs text-white/35 mt-0.5">{theme.subtitle}</p>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-white/35 shrink-0 transition-transform duration-300 ${open[theme.key] ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open[theme.key] ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className={`px-6 pb-8 pt-2 border-t ${theme.border}`}>
                  {/* Steps timeline */}
                  <div className="relative mt-4">
                    <div
                      className="absolute left-[27px] top-2 bottom-14 w-px"
                      style={{
                        backgroundImage: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.12) 0 8px, transparent 8px 16px)",
                      }}
                    />
                    {theme.steps.map((step) => (
                      <div key={step.num} className="relative pl-[68px] pt-7 first:pt-0">
                        <div
                          className={`absolute left-0 top-7 first:top-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${theme.key === "mobilemoney" ? "from-purple-500 to-brand-600" : theme.key === "kyc" ? "from-brand-500 to-violet-600" : "from-violet-500 to-brand-600"} text-white flex items-center justify-center font-display font-bold text-lg shadow-brand shrink-0`}
                        >
                          {step.num}
                        </div>
                        <h3 className="text-white font-semibold text-base sm:text-lg mb-2 leading-snug">{step.title}</h3>
                        <p className="text-sm text-white/45 leading-relaxed mb-4">{step.text}</p>
                        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2.5 max-w-xs shadow-glass">
                          <img src={step.img} alt={step.alt} className="rounded-xl w-full" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Callouts */}
                  <div className="mt-8 space-y-3">
                    {theme.callouts.map((callout) => {
                      const style = calloutStyles[callout.type];
                      return (
                        <div key={callout.title + callout.type} className={`rounded-xl p-4 border ${style.bg} ${style.border}`}>
                          <h4 className={`flex items-center gap-2 text-sm font-bold mb-2 ${style.text}`}>
                            <callout.icon className="w-4 h-4 shrink-0" />
                            {callout.title}
                          </h4>
                          <div className="text-sm text-white/50 leading-relaxed">{callout.content}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Support CTA */}
        <div className="glass-card border border-white/[0.08] rounded-2xl p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
            <Compass className="w-6 h-6 text-green-400" />
          </div>
          <p className="text-white/45 text-sm leading-relaxed max-w-md mx-auto mb-5">
            Raha misy olana ianao na tsy mazava ny dingana iray? Ny ekipa MANAVOLA dia vonona hanampy anao
            mivantana.
          </p>
          <a
            href="https://wa.me/261346690399"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-[0_4px_24px_rgba(34,197,94,0.35)]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Andefaso message amin'ny WhatsApp
          </a>
        </div>

        <p className="text-center text-xs text-white/20 pt-4">
          © 2026 MANAVOLA — Torolalana feno momba ny Application
        </p>
      </div>
    </div>
  );
}
