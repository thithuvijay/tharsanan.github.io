import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'

const PHOTO_DATA = [
  { file: 'IMG_1717', ext: 'jpg', label: 'Nature' },
  { file: 'IMG_1718', ext: 'jpg', label: 'Nature' },
  { file: 'IMG_1727', ext: 'jpg', label: 'Paysage' },
  { file: 'IMG_1729', ext: 'jpg', label: 'Paysage' },
  { file: 'IMG_1693', ext: 'jpg', label: 'Urbain' },
  { file: 'IMG_0909', ext: 'jpg', label: 'Architecture' },
  { file: 'IMG_0910', ext: 'jpg', label: 'Architecture' },
  { file: 'IMG_2811', ext: 'jpg', label: 'Street' },
  { file: 'IMG_2812', ext: 'jpg', label: 'Street' },
  { file: 'IMG_2813', ext: 'jpg', label: 'Street' },
  { file: '053a153c-0145-46ee-b38e-17f9cf95a3c3', ext: 'jpg', label: 'Couleurs' },
  { file: '898500a0-9c3b-4ccd-9abe-c54dfdf14969', ext: 'jpg', label: 'Couleurs' },
  { file: 'IMG_0915 (1)', ext: 'jpg', label: 'Portrait' },
]

export default function Photographie() {
  const navigate = useNavigate()
  const baseUrl = import.meta.env.BASE_URL
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const getThumb = (photo) => `${baseUrl}images/photographie/thumbs/${photo.file}.webp`
  const getFull = (photo) => `${baseUrl}images/photographie/${photo.file}.${photo.ext}`

  // Keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % PHOTO_DATA.length)
      if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + PHOTO_DATA.length) % PHOTO_DATA.length)
      if (e.key === 'Escape') setLightboxIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex])

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <main className="relative bg-primary min-h-screen">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="grid-overlay" />
      </div>

      {/* Header */}
      <div className="section-container pt-40 pb-16 md:pt-48 md:pb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-text-muted hover:text-accent-light transition-all duration-300 group"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-light/30 group-hover:bg-accent-light/5 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Retour</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent-light font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-accent-light/40" />
            Galerie
          </p>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-4">
            Photo<span className="text-accent-light italic">graphie.</span>
          </h1>
          <p className="text-text-muted text-sm md:text-base max-w-lg mt-4">
            À travers l'objectif, je cherche à capturer l'invisible — {PHOTO_DATA.length} instants sélectionnés.
          </p>
        </motion.div>
      </div>

      {/* Photo Grid */}
      <div className="section-container pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {PHOTO_DATA.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.5, ease: 'easeOut' }}
              className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 bg-white/5 group relative cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={getThumb(photo)}
                alt={`${photo.label} — photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <Camera size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-white/80 text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/96 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white p-3 bg-white/10 hover:bg-white/20 rounded-full z-[210] transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null) }}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-3 md:left-8 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white z-[210] transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => (i - 1 + PHOTO_DATA.length) % PHOTO_DATA.length) }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.25 }}
                src={getFull(PHOTO_DATA[lightboxIndex])}
                alt={`Photo ${lightboxIndex + 1}`}
                className="max-w-[82vw] max-h-[82vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Next */}
            <button
              className="absolute right-3 md:right-8 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white z-[210] transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => (i + 1) % PHOTO_DATA.length) }}
            >
              <ChevronRight size={22} />
            </button>

            {/* Counter + label */}
            <div className="absolute bottom-6 flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/70 text-xs font-bold">
              <span className="text-white">{lightboxIndex + 1}</span>
              <span className="text-white/30">/</span>
              <span>{PHOTO_DATA.length}</span>
              <span className="w-px h-3 bg-white/20 mx-1" />
              <span className="text-accent-light">{PHOTO_DATA[lightboxIndex].label}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
