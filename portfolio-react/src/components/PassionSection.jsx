import { motion } from 'framer-motion'
import { Bike, Camera, Gamepad2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'

const passions = [
  {
    id: "gaming",
    title: "Gaming",
    subtitle: "Open World & Immersion",
    desc: "Fan d'univers ouverts comme GTA V, Red Dead Redemption, Watch Dogs… j'aime me perdre dans des mondes immersifs où liberté et narration se rejoignent.",
    icon: Gamepad2,
    color: "text-blue-400",
    bg: "rgba(37, 99, 235, 0.05)",
    hasMore: false
  },
  {
    id: "velo",
    title: "Cyclisme",
    subtitle: "Liberté & Endurance",
    desc: "Le vélo est mon échappatoire. C'est le dépassement de soi, la découverte de nouveaux horizons et une source d'énergie inépuisable.",
    icon: Bike,
    color: "text-emerald-400",
    bg: "rgba(16, 185, 129, 0.05)",
    hasMore: false
  },
  {
    id: "photo",
    title: "Photographie",
    subtitle: "Instants & Lumière",
    desc: "À travers l'objectif, je cherche à capturer l'invisible. La photo nourrit mon œil de communicant et mon sens du détail.",
    icon: Camera,
    color: "text-purple-400",
    bg: "rgba(168, 85, 247, 0.05)",
    hasMore: true
  }
]

export default function PassionSection() {
  const baseUrl = import.meta.env.BASE_URL
  const videoRef = useRef(null)

  // Loop only the first 15 seconds
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.currentTime >= 15) {
        video.currentTime = 0
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-transparent border-y border-white/5">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45) saturate(0.9)' }}
        >
          <source src={`${baseUrl}videos/bmw-bg.mp4`} type="video/mp4" />
        </video>
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
        <div className="absolute inset-0 bg-primary/20" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-light font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-accent-light/40" />
              Mode de Vie
            </p>
            <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8 tracking-tighter">
              Ce qui me <br />
              <span className="highlight italic">fait vibrer.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {passions.map((p, i) => {
            const CardContent = (
              <>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                  <p.icon className={p.color} size={28} />
                </div>
                <h3 className="text-xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-white transition-colors">{p.title}</h3>
                <p className={`text-xs font-bold uppercase tracking-widest ${p.color} mb-4 md:mb-6 opacity-70`}>{p.subtitle}</p>
                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 md:mb-8">{p.desc}</p>
                {p.hasMore && (
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                    Voir mes photos <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 blur-[50px] rounded-full group-hover:bg-white/10 transition-colors" />
              </>
            )

            return p.hasMore ? (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="contents"
              >
                <Link
                  to="/photographie"
                  className="glass-card group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden block cursor-pointer backdrop-blur-md bg-card/70"
                  style={{ background: `linear-gradient(135deg, ${p.bg}, rgba(17,29,48,0.7))` }}
                >
                  {CardContent}
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden backdrop-blur-md bg-card/70"
                style={{ background: `linear-gradient(135deg, ${p.bg}, rgba(17,29,48,0.7))` }}
              >
                {CardContent}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
