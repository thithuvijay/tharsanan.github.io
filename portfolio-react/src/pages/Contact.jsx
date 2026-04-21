import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  useReveal()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const formData = new FormData(e.target)
    formData.append("access_key", "9aabeca0-1cd7-4210-8c95-e2985338c102")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setSent(true)
        e.target.reset()
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (error) {
      alert("Erreur de connexion. Veuillez vérifier votre réseau.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="hero-bg"><div className="blob blob-1"></div><div className="grid-overlay"></div></div>
        <div className="page-hero-content">
          <p className="section-tag fade-in delay-1">Parlons-en</p>
          <h1 className="page-hero-title fade-in delay-2">Un projet en tête ?<br /><span className="highlight">Contacte-moi.</span></h1>
          <p className="page-hero-desc fade-in delay-3">Disponible pour collaborations et projets créatifs.</p>
        </div>
      </section>

      <section className="section contact-page">
        <div className="contact-inner">
          <div className="contact-text reveal">
            <p className="section-tag">Mes coordonnées</p>
            <p className="apropos-desc" style={{ marginBottom: 36 }}>
              Motivé et créatif, je souhaite mettre mes compétences au service de projets innovants.
              N'hésite pas à me contacter !
            </p>
            <div className="contact-links">
              <a href="mailto:tharsananarul@gmail.com" className="contact-link"><span className="link-icon">✉</span>tharsananarul@gmail.com</a>
              <a href="tel:0749878775" className="contact-link"><span className="link-icon">📞</span>07 49 87 87 75</a>
              <a href="https://www.linkedin.com/in/tharsanan-arulananthaselvam/" target="_blank" rel="noreferrer" className="contact-link"><span className="link-icon">in</span>LinkedIn</a>
              <a href="https://www.instagram.com/thithu.arl/" target="_blank" rel="noreferrer" className="contact-link"><span className="link-icon">ig</span>@thithu.arl</a>
            </div>
            <div className="disponibilite"><span className="badge-dot"></span>Disponible pour alternance &amp; collaborations</div>
          </div>

          <form className="contact-form reveal delay-1" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom" placeholder="Ton prénom" required />
              </div>
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name="nom" placeholder="Ton nom" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="ton@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="sujet">Sujet</label>
              <input type="text" id="sujet" name="sujet" placeholder="Stage, collaboration, projet..." />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Dis-moi tout..." required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
              {loading ? '⏳ Envoi...' : 'Envoyer le message'}
            </button>
            {sent && <p className="form-success show">✓ Message envoyé ! Je te réponds très vite.</p>}
          </form>
        </div>
      </section>
    </PageWrapper>
  )
}
