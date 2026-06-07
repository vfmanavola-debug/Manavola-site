import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-navy-900 flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-display font-bold text-gradient-gold mb-4">404</div>
      <h1 className="text-2xl font-display font-semibold text-white mb-2">Page introuvable</h1>
      <p className="text-white/50 mb-8">Cette page n'existe pas ou a été déplacée.</p>
      <button
        onClick={() => navigate("/")}
        className="btn-primary text-base"
      >
        Retour à l'accueil
      </button>
    </div>
  );
}
