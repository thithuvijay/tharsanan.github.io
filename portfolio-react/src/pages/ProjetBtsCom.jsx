import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import MosaicGrid from '../components/MosaicGrid'
import useReveal from '../hooks/useReveal'

export default function ProjetBtsCom() {
  useReveal()
  const sections = [{
    items: [
      { src: 'images/bts-com/affichea0.jpg', alt: 'Affiche A0', tall: true },
      { src: 'images/bts-com/affichea0mockup.jpg', alt: 'Affiche A0 mockup' },
      { src: 'images/bts-com/affiche-inscription.jpg', alt: 'Affiche inscription' },
      { src: 'images/bts-com/kakemono.jpg', alt: 'Kakémono', tall: true },
      { src: 'images/bts-com/kakemono-mockup.jpg', alt: 'Kakémono mockup' },
      { src: 'images/bts-com/rollup-mockup.jpg', alt: 'Roll-up mockup' },
      { src: 'images/bts-com/mockuppull.jpg', alt: 'Mockup pull' },
      { src: 'images/bts-com/instgram-mockup.jpg', alt: 'Instagram mockup' },
      { src: 'images/bts-com/postscc01.jpg', alt: 'Post SCC 1' },
      { src: 'images/bts-com/postscc02.jpg', alt: 'Post SCC 2' },
      { src: 'images/bts-com/sdcipost.jpg', alt: 'Post SDCI' },
      { src: 'images/bts-com/expo-com.jpg', alt: 'Expo communication', wide: true },
      { src: 'images/bts-com/expocompost.jpg', alt: 'Expo com post' },
      { src: 'images/bts-com/newsletter.jpg', alt: 'Newsletter' },

    ]
  }]

  return (
    <PageWrapper>
      <div className="projet-hero-wrap">
        <img src="images/couvertures/bts-com.png" alt="BTS Communication" />
        <div className="projet-hero-overlay"></div>
        <h1 className="projet-hero-title">BTS Communication</h1>
      </div>
      <div className="projet-intro">
        <div className="projet-intro-left">
          <h2>Intro</h2>
          <p>Voici quelques projets créatifs réalisés en BTS Communication, principalement des affiches et mockups conçus avec Illustrator et Photoshop. Ces réalisations illustrent mon sens du visuel et ma maîtrise des outils graphiques, développés tout au long de ma formation au Lycée Jacques Brel à La Courneuve.</p>
          <div className="projet-rapports" style={{ padding: 0, marginTop: 32, marginBottom: 20 }}>
            <span className="rapport-label">Documents</span>
            <div className="rapport-card">
              <div className="rapport-info">
                <span className="rapport-annee">BTS Communication</span>
                <h3>Fiches descriptives</h3>
                <p>Détail des projets et réalisations</p>
              </div>
              <a href="documents/fiches descriptives.pdf" download className="rapport-btn">⬇ Télécharger le PDF</a>
            </div>
          </div>
          <br /><h2>Livrables</h2>
          <div className="projet-deliverables">
            {['Affiches','Mockups','Flyers','Newsletter','Kakémono','Roll-up','Publications réseaux sociaux'].map(t => <span className="deliverable-tag" key={t}>{t}</span>)}
          </div>
        </div>
        <div className="projet-intro-right">
          <div className="projet-meta-block"><span>Période</span><p>Janvier 2025 — En cours</p></div>
          <div className="projet-meta-block"><span>Formation</span><p>BTS Communication</p></div>
          <div className="projet-meta-block"><span>École</span><p>Lycée Jacques Brel, La Courneuve</p></div>
          <div className="projet-meta-block"><span>Outils</span><p>Illustrator, Photoshop, InDesign</p></div>
        </div>
      </div>
      <MosaicGrid sections={sections} />
      <div className="projet-next">
        <p>Projet suivant</p>
        <div className="projet-next-cards">
          <Link to="/projets/alda" className="projet-next-card">
            <img src="images/couvertures/alda.png" alt="Alda" />
            <div className="projet-next-card-info">Alda →</div>
          </Link>
          <Link to="/projets/sans-bavures" className="projet-next-card">
            <img src="images/couvertures/sansbavures.png" alt="Sans Bavures" />
            <div className="projet-next-card-info">Sans Bavure →</div>
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
