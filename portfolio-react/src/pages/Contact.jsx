import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, MessageSquare, Phone, Sparkles } from 'lucide-react'
import Magnetic from '../components/Magnetic'

export default function Contact() {
  const linkedinUrl = "https://www.linkedin.com/in/tharsanan-arulananthaselvam/"

  return (
    <main className="relative pt-24 md:pt-32 pb-20 min-h-screen bg-primary">
      <section className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-48">
          {/* Left Column: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-accent-light font-bold tracking-[0.3em] uppercase mb-6 text-xs md:text-sm flex items-center gap-3">
                <span className="w-8 h-px bg-accent-light/60" />
                Contact
              </p>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl font-black mb-8 tracking-tight md:tracking-tighter leading-[1.1] md:leading-[0.9] font-heading"
            >
              Parlons de votre <br />
              <span className="text-accent-light italic">prochain projet.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-text-muted mb-16 leading-relaxed max-w-md font-medium"
            >
              Que vous ayez une idée précise ou que vous souhaitiez explorer des possibilités, 
              je suis là pour vous accompagner.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, label: "Email", val: "tharsananarul@gmail.com", href: "mailto:tharsananarul@gmail.com" },
                { icon: <Linkedin />, label: "LinkedIn", val: "Tharsanan Arul", href: linkedinUrl },
                { icon: <Phone />, label: "Téléphone", val: "07 49 87 87 75", href: "tel:+33749878775" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                >
                  <Magnetic>
                    <a href={item.href} target={item.href.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="flex items-center gap-6 group">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent-light/40 transition-all shadow-xl group-hover:scale-110 duration-500">
                        <div className="text-accent-light">{item.icon}</div>
                      </div>
                      <div>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-lg font-bold group-hover:text-accent-light transition-colors">{item.val}</p>
                      </div>
                    </a>
                  </Magnetic>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-12 rounded-[3.5rem] bg-card/50 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-3xl"
          >
            <div className="absolute top-0 right-0 p-8 text-white/5 -rotate-12 translate-x-4 -translate-y-4">
              <MessageSquare size={120} />
            </div>
            
            <form className="relative z-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Nom complet</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent-light transition-all text-white placeholder:text-slate-600 focus:bg-white/10"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent-light transition-all text-white placeholder:text-slate-600 focus:bg-white/10"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Sujet</label>
                <input 
                  type="text" 
                  placeholder="Collaboration, Opportunité, Question..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent-light transition-all text-white placeholder:text-slate-600 focus:bg-white/10"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Comment puis-je vous aider ?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent-light transition-all text-white placeholder:text-slate-600 resize-none focus:bg-white/10"
                ></textarea>
              </div>

              <Magnetic>
                <button type="button" className="btn-premium w-full gap-3 text-lg py-6 shadow-xl shadow-accent-light/10 group">
                  Envoyer le message 
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
