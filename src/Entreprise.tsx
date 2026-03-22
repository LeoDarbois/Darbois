import React, { useState } from 'react';
import { Check, X, Menu } from 'lucide-react';
import Footer from './Footer';

interface EntrepriseProps {
  onNavigateHome: () => void;
  onNavigatePrestations: () => void;
  onNavigateSavoirFaire: () => void;
  onNavigateContact: () => void;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1946",
    title: "Création de l'entreprise",
    description: "René Darbois débute son activité artisanale en janvier 1946. L'entreprise est immatriculée au RCS de Versailles le 30 décembre 1958. Les bureaux ainsi que l'atelier sont implantés à Viroflay.",
  },
  {
    year: "1967",
    title: "Reprise de l'entreprise",
    description: "La société a été reprise par José Araujo (grand-père du dirigeant actuel), puis par Filomène et Michel Vaudier. Un deuxième atelier a été créé à Savigny-sur-Orge en 1969.",
  },
  {
    year: "1970–1990",
    title: "Développement du savoir-faire",
    description: "Consolidation de l'expertise en menuiserie traditionnelle et développement d'un savoir-faire reconnu pour la qualité des finitions et la précision du travail du bois.",
  },
  {
    year: "1999",
    title: "Installation à Montigny-le-Bretonneux",
    description: "Déménagement dans un nouvel atelier moderne à Montigny-le-Bretonneux (78), qui devient le siège et l'atelier de fabrication de l'entreprise.",
  },
  {
    year: "2000–2010",
    title: "Modernisation de l'atelier",
    description: "Acquisition d'équipements professionnels de haute précision pour améliorer la qualité de fabrication tout en conservant les techniques artisanales.",
  },
  {
    year: "2011",
    title: "Nomination à la présidence",
    description: "Initiateur de l'évolution de la société depuis 1999, Laurent Vaudier est nommé président.",
  },
  {
    year: "2025",
    title: "Atelier & durabilité",
    description: "Installation de panneaux solaires sur le toit de l'atelier pour produire une partie de l'énergie nécessaire à la fabrication. Une démarche pragmatique pour réduire notre impact environnemental.",
  }
];

const values = [
  {
    title: "Exigence",
    description: "Nous choisissons des matériaux de premier choix et appliquons des standards élevés à chaque étape du projet."
  },
  {
    title: "Précision et pose maîtrisée",
    description: "Nos réalisations sont fabriquées avec exactitude et installées avec rigueur pour garantir un ajustement parfait."
  },
  {
    title: "Finitions soignées",
    description: "Chaque détail est travaillé avec minutie pour assurer un rendu esthétique durable et élégant."
  },
  {
    title: "Écoute des clients",
    description: "Nous analysons chaque besoin afin de concevoir des solutions sur mesure, adaptées aux usages et aux contraintes."
  },
  {
    title: "Force de proposition",
    description: "Nous apportons un regard technique et créatif pour optimiser les choix fonctionnels et esthétiques. Notre bureau d'études réalise des recherches de matériaux et de solutions techniques afin d'élaborer des plans de fabrication précis et adaptés à chaque projet."
  },
  {
    title: "Collaboration avec architectes & décorateurs",
    description: "Nous intégrons nos réalisations dans une vision globale en coordination étroite avec les architectes et décorateurs."
  }
];

export default function Entreprise({ onNavigateHome, onNavigatePrestations, onNavigateSavoirFaire, onNavigateContact }: EntrepriseProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={onNavigateHome}>
            <img
              src="/logo-v.jpg"
              alt="Darbois Menuiserie Agencement – Logo"
              className="h-12 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-stone-700">
            <button onClick={onNavigateHome} className="hover:text-amber-800 transition-colors">Accueil</button>
            <button onClick={onNavigateSavoirFaire} className="hover:text-amber-800 transition-colors">Savoir-faire</button>
            <button onClick={onNavigatePrestations} className="hover:text-amber-800 transition-colors">Prestations</button>
            <button className="text-amber-800 font-semibold">L'entreprise</button>
            <button onClick={onNavigateContact} className="hover:text-amber-800 transition-colors">Contact</button>
          </div>

          <button
            className="md:hidden text-stone-700 hover:text-amber-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-4 py-2 space-y-1">
              <button onClick={onNavigateHome} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Accueil</button>
              <button onClick={onNavigateSavoirFaire} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Savoir-faire</button>
              <button onClick={onNavigatePrestations} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Prestations</button>
              <button className="block w-full text-left px-4 py-3 text-amber-800 font-semibold bg-amber-50 rounded">L'entreprise</button>
              <button onClick={onNavigateContact} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Contact</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="pt-24 px-4 bg-white">
        <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: 'url(/images/Banniere_Moulure.JPG)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl" />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-lg sm:text-xl mb-4 font-light tracking-wide">Depuis 1946</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight">L'entreprise</h1>
            <p className="text-xl sm:text-2xl font-light max-w-3xl mx-auto">
              Près de 80 ans d'expertise en menuiserie bois sur mesure
            </p>
          </div>
        </section>
      </div>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">Notre histoire</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-4">
            Fondée en 1946, la société Darbois est une entreprise familiale implantée en Île-de-France. Nous avons traversé les décennies en cultivant un savoir-faire artisanal exigeant et en nous adaptant aux évolutions techniques sans jamais renoncer à la qualité.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            Depuis notre atelier de Montigny-le-Bretonneux, nous concevons et réalisons des menuiseries sur mesure répondant aux exigences de précision et de qualité pour les projets résidentiels et professionnels.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4 text-center">Notre parcours</h2>
          <p className="text-center text-stone-600 mb-12">Les étapes clés de notre histoire</p>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line (Desktop only) */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-amber-700/30 mx-4 hidden xl:block" style={{ top: '40px' }}></div>

            {/* Static Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-4 px-4">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex flex-col">
                  {/* Timeline Dot */}
                  <div className="flex justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-amber-700 border-4 border-white shadow-lg relative z-10"></div>
                  </div>

                  {/* Timeline Card */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                    {event.image ? (
                      <div className="h-40 overflow-hidden bg-stone-200">
                        <img
                          src={event.image}
                          alt={event.imageAlt || event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-40 bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center">
                        <div className="text-5xl font-light text-amber-700/20">{event.year}</div>
                      </div>
                    )}

                    <div className="p-4 flex flex-col flex-grow">
                      <div className="text-amber-700 font-medium text-xs mb-2">{event.year}</div>
                      <h3 className="text-base font-medium text-stone-800 mb-2" style={{ wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none', lineHeight: '1.3' }}>{event.title}</h3>
                      <p className="text-stone-600 text-xs flex-grow" style={{ lineHeight: '1.4' }}>{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-12 text-center">Nos valeurs</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-medium text-stone-800 mb-3">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'atelier aujourd'hui */}
      <section className="py-20 px-4 bg-stone-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.7fr_1.15fr] gap-10 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl order-1 md:order-1">
              <img
                src="/images/atelier-montage-autre-vu.JPG"
                alt="Atelier de montage Darbois"
                className="w-full h-auto object-cover"
                style={{ filter: 'brightness(1.2) contrast(0.98) saturate(0.98)' }}
              />
            </div>
            <div className="flex flex-col justify-center px-2 order-2 md:order-2">
              <h2 className="text-3xl md:text-4xl font-light mb-6">L'atelier aujourd'hui</h2>
              <p className="text-stone-300 leading-relaxed mb-4">
                Installé à Montigny-le-Bretonneux (78), notre atelier est équipé de machines professionnelles
                permettant un travail du bois précis et maîtrisé.
              </p>
              <p className="text-stone-300 leading-relaxed">
                Nous y réalisons l'ensemble de nos ouvrages, du débit des matériaux aux finitions,
                en combinant techniques traditionnelles et outils modernes, avant une pose soignée
                chez nos clients.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl order-3 md:order-3">
              <img
                src="/images/atelier-cote-machines.JPG"
                alt="Vue de l'atelier Darbois côté machines"
                className="w-full h-auto object-cover"
                style={{ filter: 'brightness(1.2) contrast(0.98) saturate(0.98)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Durabilité */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">Une approche durable</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            En 2025, nous avons fait installer des panneaux solaires sur le toit de notre atelier.
            Cette installation nous permet de produire une partie de l'énergie nécessaire à la fabrication
            de nos menuiseries.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            Il ne s'agit pas d'un engagement spectaculaire, mais d'une démarche pragmatique pour réduire
            notre impact environnemental tout en maintenant la qualité de notre travail. Nous continuons
            à privilégier des bois issus de forêts gérées durablement et à optimiser nos processus de fabrication
            pour limiter les déchets.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Un projet en menuiserie ?</h2>
          <p className="text-xl mb-8 text-amber-50">
            Nous serions ravis d'échanger avec vous sur votre projet et de vous accompagner dans sa réalisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onNavigateContact}
              className="bg-white text-amber-700 px-8 py-3 rounded hover:bg-amber-50 transition-colors font-medium"
            >
              Demander un devis
            </button>
            <button
              onClick={onNavigateContact}
              className="border-2 border-white text-white px-8 py-3 rounded hover:bg-amber-800 transition-colors font-medium"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
