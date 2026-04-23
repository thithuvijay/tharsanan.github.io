import { motion } from 'framer-motion'
import { Wrench, Shield, Zap, Globe, Layout, Palette, Code2, Globe2, Sparkles } from 'lucide-react'
import Magnetic from '../components/Magnetic'

const skills = [
  { title: "Design Graphique", icon: <Palette size={24} />, desc: "Maîtrise de la suite Adobe (Ps, Ai, Id) pour créer des visuels percutants." },
  { title: "Développement Web", icon: <Code2 size={24} />, desc: "Conception de sites modernes avec React, HTML5 et CSS3/Tailwind." },
  { title: "Communication", icon: <Globe size={24} />, desc: "Élaboration de stratégies de com et gestion des réseaux sociaux." },
  { title: "UI/UX Design", icon: <Layout size={24} />, desc: "Création d'interfaces intuitives centrées sur l'utilisateur." },
  { title: "Motion Design", icon: <Zap size={24} />, desc: "Animations fluides avec After Effects pour dynamiser vos contenus." },
  { title: "Maîtrise des outils", icon: <Wrench size={24} />, desc: "À l'aise avec les logiciels de création, de communication et de gestion." },
]

export default function Competences() {
  const baseUrl = import.meta.env.BASE_URL
  
  const languages = [
    { name: "Français", level: 100, info: "Bilingue — C2", flag: "https://flagcdn.com/w320/fr.png" },
    { name: "Anglais", level: 85, info: "Intermédiaire — B2", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Tamoul", level: 100, info: "Langue maternelle — C2", flag: `${baseUrl}images/te-flag/tamil-eelam.png` },
    { name: "Allemand", level: 25, info: "Débutant — A1", flag: "https://flagcdn.com/w320/de.png" },
  ]

  const software = [
    { name: "Photoshop", level: 95, abbr: "Ps", color: "#31A8FF", desc: "Retouche photo, montage, création visuelle" },
    { name: "After Effects", level: 85, abbr: "Ae", color: "#CF96FD", desc: "Motion design, animations" },
    { name: "Premiere Pro", level: 90, abbr: "Pr", color: "#EA77FF", desc: "Montage vidéo, édition professionnelle" },
    { name: "Illustrator", level: 90, abbr: "Ai", color: "#FF9A00", desc: "Création vectorielle, logos, affiches" },
    { name: "InDesign", level: 80, abbr: "Id", color: "#FF3366", desc: "Mise en page, supports print" },
    { name: "Canva", level: 100, abbr: "Cv", color: "#00C4CC", desc: "Création rapide et efficace" },
    { name: "WordPress", level: 85, abbr: "Wp", color: "#21759B", desc: "Rédaction et gestion de contenu" },
    { name: "HTML & CSS", level: 90, abbr: "</>", color: "#E34F26", desc: "Structure et style web moderne" },
  ]

  return (
    <main className="relative pt-24 md:pt-32 pb-20 overflow-hidden bg-primary">
      <section className="section-container relative z-10">
        {/* Header Section with Entrance Wave */}
        <header className="max-w-3xl mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-accent-light font-bold tracking-[0.3em] uppercase mb-6 text-xs md:text-sm flex items-center gap-3">
              <span className="w-8 h-px bg-accent-light/60" />
              Expertise
            </p>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1] md:leading-[0.95]"
          >
            Mes <span className="text-accent-light italic">Compétences.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-text-muted leading-relaxed"
          >
            Un mix polyvalent entre design créatif, communication stratégique et développement technique.
          </motion.p>
        </header>

        {/* Core Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-32">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-[2.5rem] group hover:border-accent-light/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-light/10 flex items-center justify-center text-accent-light mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-xl">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Software Section */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold mb-16 tracking-tighter"
          >
            Logiciels <span className="highlight italic">maîtrisés</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {software.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.8 }}
                className="glass-card p-8 rounded-[2rem] flex flex-col h-full group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black shadow-2xl transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}
                  >
                    {item.abbr}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                <p className="text-text-muted text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold mb-16 tracking-tighter"
          >
            Langues <span className="highlight italic">parlées</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-[2rem] flex items-center gap-6 group hover:border-accent-light/40 transition-all duration-500"
              >
                <div className="w-16 h-12 rounded-xl overflow-hidden shadow-lg border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{lang.name}</h3>
                  <p className="text-accent-light text-[10px] font-bold uppercase tracking-widest">{lang.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
