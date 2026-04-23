import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Filter } from 'lucide-react'
import Magnetic from '../components/Magnetic'

const projects = [
  {
    id: 'futsal',
    title: "Futsal Drancy",
    tag: "Web Dev & Communication",
    desc: "Refonte complète de l'identité numérique et création d'une plateforme web pour un club de sport.",
    img: "images/couvertures/futsal-drancy.png",
    path: "/projets/futsal"
  },
  {
    id: 'alda',
    title: "Alda Bière",
    tag: "Branding & Packaging",
    desc: "Création d'un univers de marque artisanal et éco-responsable pour une brasserie locale.",
    img: "images/couvertures/alda.png",
    path: "/projets/alda"
  },
  {
    id: 'ux',
    title: "UI/UX Works",
    tag: "Interface Design",
    desc: "Sélection d'interfaces interactives (BTS Révision, HopePower) axées sur l'expérience utilisateur.",
    img: "images/couvertures/ui-ux-designs.png",
    path: "/projets/ux"
  },
  {
    id: 'sans-bavures',
    title: "Sans Bavures",
    tag: "Audiovisuel & Montage",
    desc: "Production et montage d'un reportage multimédia sur les enjeux de l'information.",
    img: "images/couvertures/sans-bavures.png",
    path: "/projets/sans-bavures"
  },
  {
    id: 'bts-com',
    title: "BTS Com Projects",
    tag: "Stratégie & Design",
    desc: "Portfolio de réalisations académiques et professionnelles durant mon cursus en communication.",
    img: "images/couvertures/bts-com.png",
    path: "/projets/bts-com"
  },
  {
    id: 'perso',
    title: "Créations Perso",
    tag: "Créativité Libre",
    desc: "Explorations graphiques, montages expérimentaux et projets personnels divers.",
    img: "images/couvertures/projets-crea.png",
    path: "/projets/perso"
  }
]

export default function Projets() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <main className="relative pt-24 md:pt-40 pb-20 bg-primary min-h-screen">
      <section className="section-container relative z-10">
        <header className="max-w-4xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-accent-light font-bold tracking-[0.3em] uppercase mb-4 text-[10px] md:text-xs flex items-center gap-3">
              <span className="w-8 h-px bg-accent-light/60" />
              Réalisations
            </p>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-[1]"
          >
            Découvrez <br />
            <span className="highlight italic">mon univers.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm md:text-xl text-text-muted leading-relaxed max-w-2xl font-medium"
          >
            Une collection de projets variés, allant du design d'interface à la stratégie de communication, illustrant ma polyvalence et ma passion pour la création.
          </motion.p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={project.path} className="group flex flex-col bg-card/30 border border-white/5 rounded-[2rem] overflow-hidden hover:border-accent-light/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={`${baseUrl}${project.img}`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    onError={(e) => { e.target.style.opacity = '0.2'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                  <span className="text-accent-light font-bold text-[10px] tracking-widest uppercase mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white tracking-tighter mb-4 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-xs md:text-base leading-relaxed mb-8 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2 font-bold text-[10px] md:text-xs uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                    Explorer <ArrowRight size={14} className="text-accent-light" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
