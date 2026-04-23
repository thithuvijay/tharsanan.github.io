import { Link } from 'react-router-dom'
import { Github, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const linkedinUrl = "https://www.linkedin.com/in/tharsanan-arulananthaselvam/"
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#080e1a] pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xs">
            <Link to="/" className="logo mb-6 block">
              T<span className="text-accent-light">.</span>
            </Link>
            <p className="text-text-muted leading-relaxed mb-8">
              Étudiant en BTS Communication au Lycée Jacques Brel. 
              Communication digitale & design graphique.
            </p>
            <div className="flex items-center gap-5">
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-accent-light/20 transition-all hover:text-accent-light" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              {/* Pointing GitHub icon to LinkedIn as requested by user */}
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-accent-light/20 transition-all hover:text-accent-light" title="GitHub (Redirects to LinkedIn)">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="font-bold mb-6 text-white tracking-tight">Navigation</h4>
              <ul className="space-y-4 text-text-muted text-sm font-medium">
                <li><Link to="/" className="hover:text-accent-light transition-colors">Accueil</Link></li>
                <li><Link to="/projets" className="hover:text-accent-light transition-colors">Projets</Link></li>
                <li><Link to="/cv" className="hover:text-accent-light transition-colors">CV</Link></li>
                <li><Link to="/competences" className="hover:text-accent-light transition-colors">Compétences</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white tracking-tight">Contact</h4>
              <ul className="space-y-4 text-text-muted text-sm font-medium">
                <li><a href="mailto:tharsananarul@gmail.com" className="hover:text-accent-light transition-colors block break-all">tharsananarul@gmail.com</a></li>
                <li><a href="tel:0749878775" className="hover:text-accent-light transition-colors font-bold tracking-tight">07 49 87 87 75</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <p className="text-xs text-text-muted font-medium">
            © 2026 Tharsanan Arulananthaselvam — BTS Communication.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-text-muted hover:text-white transition-colors group"
          >
            Retour en haut 
            <div className="p-2 rounded-full border border-white/10 group-hover:bg-accent-light/20 transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
