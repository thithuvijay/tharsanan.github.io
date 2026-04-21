import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import MosaicGrid from '../components/MosaicGrid'
import useReveal from '../hooks/useReveal'

export default function ProjetsUX() {
  useReveal()
  const btsItems = [
    { src: 'images/site/bts-fdr/1.png', alt: 'BTS REVISIONS 1' },
    { src: 'images/site/bts-fdr/2.png', alt: 'BTS REVISIONS 2' },
    { src: 'images/site/bts-fdr/3.png', alt: 'BTS REVISIONS 3' },
    { src: 'images/site/bts-fdr/4.png', alt: 'BTS REVISIONS 4' },
  ]
  const hopeItems = [
    { src: 'images/site/hope-power/1.png', alt: 'HopePower 1' },
    { src: 'images/site/hope-power/2.png', alt: 'HopePower 2' },
    { src: 'images/site/hope-power/3.png', alt: 'HopePower 3' },
    { src: 'images/site/hope-power/4.png', alt: 'HopePower 4' },
  ]

  return (
    <PageWrapper>
      <div className="projet-hero-wrap">
        <img src="images/couvertures/ui-ux-designs.png" alt="UI/UX Works" />
        <div className="projet-hero-overlay"></div>
        <h1 className="projet-hero-title">UI/UX Works</h1>
      </div>
      <div className="projet-intro">
        <div className="projet-intro-left">
          <h2>Intro</h2>
          <p>Cette section regroupe mes travaux de conception d'interfaces et de développement web. Passionné par l'expérience utilisateur, j'ai réalisé ces projets en mettant l'accent sur l'ergonomie, l'accessibilité et une identité visuelle forte.</p>
        </div>
        <div className="projet-intro-right">
          <div className="projet-meta-block"><span>Domaine</span><p>UI Design, UX Research, Web Dev</p></div>
          <div className="projet-meta-block"><span>Outils</span><p>Figma, HTML, CSS, Javascript</p></div>
          <div className="projet-meta-block"><span>Projets</span><p>2 plateformes interactives</p></div>
        </div>
      </div>

      {/* BTS Revisions */}
      <div className="site-section">
        <div className="site-header">
          <span className="project-tag">Développement Web Site</span>
          <h3 className="site-title">Plateforme de Révision BTS Communication</h3>
          <p className="site-desc">Un outil complet conçu pour centraliser toutes les ressources de révision. L'architecture a été pensée pour une navigation fluide sur mobile et desktop.</p>
          <a href="https://tharsananarul.github.io/fdr-bts-com/" target="_blank" rel="noreferrer" className="btn-primary">Voir le site en direct →</a>
        </div>
        <MosaicGrid sections={[{ items: btsItems }]} animate={false} />
      </div>

      {/* HopePower */}
      <div className="site-section">
        <div className="site-header">
          <span className="project-tag">UI Design · Maquette</span>
          <h3 className="site-title">HopePower</h3>
          <p className="site-desc">Conception d'une interface pour une application axée sur l'énergie durable. Focus sur les contrastes, la lisibilité et l'aspect premium de l'interface.</p>
          <a href="https://tharsananarul.github.io/hopepower/" target="_blank" rel="noreferrer" className="btn-primary">Voir la maquette →</a>
        </div>
        <MosaicGrid sections={[{ items: hopeItems }]} animate={false} />
      </div>

      <div className="projet-next">
        <p>Projet suivant</p>
        <div className="projet-next-cards">
          <Link to="/projets/futsal" className="projet-next-card">
            <img src="images/couvertures/futsal-drancy.png" alt="Futsal Drancy" />
            <div className="projet-next-card-info">Futsal Drancy →</div>
          </Link>
          <Link to="/projets" className="projet-next-card">
            <img src="images/couvertures/alda.png" alt="Tous les projets" />
            <div className="projet-next-card-info">Tous les projets →</div>
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
