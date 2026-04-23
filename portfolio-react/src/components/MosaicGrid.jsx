import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

export default function MosaicGrid({ sections, animate = true }) {
  const [lbOpen, setLbOpen] = useState(false)
  const [lbImages, setLbImages] = useState([])
  const [lbIndex, setLbIndex] = useState(0)

  const openLb = (images, idx) => {
    setLbImages(images)
    setLbIndex(idx)
    setLbOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLb = () => {
    setLbOpen(false)
    document.body.style.overflow = ''
  }

  const prev = () => setLbIndex((i) => (i - 1 + lbImages.length) % lbImages.length)
  const next = () => setLbIndex((i) => (i + 1) % lbImages.length)

  useEffect(() => {
    if (!lbOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLb()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lbOpen, lbImages.length])

  // Lightbox rendered via Portal so it escapes any parent transform/overflow
  const lightbox = lbOpen ? createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        touchAction: 'none',
      }}
      onClick={closeLb}
    >
      {/* Center block: close button + image + counter */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '90vw',
          maxHeight: '90vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — right above the image */}
        <button
          onClick={closeLb}
          style={{
            alignSelf: 'flex-end',
            marginBottom: '8px',
            padding: '10px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
        >
          <X size={20} />
        </button>

        {/* Image */}
        <img
          src={lbImages[lbIndex]?.src}
          alt={lbImages[lbIndex]?.alt || ''}
          style={{
            maxWidth: '85vw',
            maxHeight: '70vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        />

        {/* Counter below image */}
        <div
          style={{
            marginTop: '12px',
            padding: '6px 16px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(8px)',
          }}
        >
          {lbIndex + 1} / {lbImages.length}
        </div>
      </div>

      {/* Nav arrow left */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        style={{
          position: 'fixed',
          left: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '12px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'white',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          transition: 'background-color 0.2s',
          zIndex: 10000,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Nav arrow right */}
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        style={{
          position: 'fixed',
          right: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '12px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'white',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          transition: 'background-color 0.2s',
          zIndex: 10000,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
      >
        <ChevronRight size={18} />
      </button>
    </div>,
    document.body
  ) : null

  return (
    <>
      {sections.map((section, si) => (
        <div className="py-12" key={si}>
          {(section.tag || section.title) && (
            <div className="section-container pb-8">
              {section.tag && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-xs font-bold uppercase tracking-widest text-accent-light mb-2 block"
                >
                  {section.tag}
                </motion.span>
              )}
              {section.title && (
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold tracking-tight"
                >
                  {section.title}
                </motion.h3>
              )}
            </div>
          )}
          
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.03,
                    ease: "easeOut"
                  }}
                  className={`relative group cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden glass-card aspect-square bg-white/5 ${
                    item.tall ? 'md:row-span-2 md:aspect-auto' : ''
                  } ${item.wide ? 'md:col-span-2 md:aspect-auto' : ''}`}
                  onClick={() => openLb(section.items, idx)}
                >
                  {/* Skeleton */}
                  <div className="absolute inset-0 bg-white/5 animate-pulse" />
                  
                  <img
                    src={item.src}
                    alt={item.alt || ''}
                    className="relative z-10 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-105"
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.style.opacity = '1';
                      // Hide skeleton (the div right before the img)
                      const skeleton = e.target.previousSibling;
                      if (skeleton) skeleton.style.display = 'none';
                    }}
                    // Ensure it shows even if cached
                    ref={(img) => {
                      if (img && img.complete) {
                        img.style.opacity = '1';
                        const skeleton = img.previousSibling;
                        if (skeleton) skeleton.style.display = 'none';
                      }
                    }}
                    style={{ opacity: 0 }}
                  />
                  <div className="absolute inset-0 z-20 bg-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 className="text-white" size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {lightbox}
    </>
  )
}
