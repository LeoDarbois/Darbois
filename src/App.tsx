import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, CheckCircle, Hammer, Wrench, Home, Menu, X, Leaf, Settings, Sun, Briefcase } from 'lucide-react';
import SavoirFaire from './SavoirFaire';
import Prestations from './Prestations';
import Entreprise from './Entreprise';
import Contact from './Contact';
import Footer from './Footer';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

function MainApp() {
  const [currentPage, setCurrentPage] = useState<'home' | 'savoir-faire' | 'prestations' | 'entreprise' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSavoirFaire = () => {
    setCurrentPage('savoir-faire');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPrestations = (hash?: string) => {
    setCurrentPage('prestations');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const navigateToEntreprise = () => {
    setCurrentPage('entreprise');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    setCurrentPage('contact');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (currentPage === 'savoir-faire') {
    return (
      <div className="min-h-screen bg-stone-50">
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={navigateToHome}>
              <img
                src="/logo-v.jpg"
                alt="Darbois Menuiserie Agencement – Logo"
                className="h-12 object-contain"
              />
            </div>
            <div className="hidden md:flex space-x-8 text-stone-700">
              <button onClick={navigateToHome} className="hover:text-amber-800 transition-colors">Accueil</button>
              <button onClick={navigateToSavoirFaire} className="text-amber-800 font-semibold">Savoir-faire</button>
              <button onClick={navigateToPrestations} className="hover:text-amber-800 transition-colors">Prestations</button>
              <button onClick={navigateToEntreprise} className="hover:text-amber-800 transition-colors">L'entreprise</button>
              <button onClick={navigateToContact} className="hover:text-amber-800 transition-colors">Contact</button>
            </div>
            <button
              className="md:hidden text-stone-700 hover:text-amber-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-stone-200">
              <div className="px-4 py-2 space-y-1">
                <button onClick={navigateToHome} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Accueil</button>
                <button onClick={navigateToSavoirFaire} className="block w-full text-left px-4 py-3 text-amber-800 font-semibold bg-amber-50 rounded">Savoir-faire</button>
                <button onClick={navigateToPrestations} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Prestations</button>
                <button onClick={navigateToEntreprise} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">L'entreprise</button>
                <button onClick={navigateToContact} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Contact</button>
              </div>
            </div>
          )}
        </header>
        <SavoirFaire onNavigateToContact={navigateToContact} onNavigateToPrestations={navigateToPrestations} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'prestations') {
    return (
      <div className="min-h-screen bg-stone-50">
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={navigateToHome}>
              <img
                src="/logo-v.jpg"
                alt="Darbois Menuiserie Agencement – Logo"
                className="h-12 object-contain"
              />
            </div>
            <div className="hidden md:flex space-x-8 text-stone-700">
              <button onClick={navigateToHome} className="hover:text-amber-800 transition-colors">Accueil</button>
              <button onClick={navigateToSavoirFaire} className="hover:text-amber-800 transition-colors">Savoir-faire</button>
              <button onClick={navigateToPrestations} className="text-amber-800 font-semibold">Prestations</button>
              <button onClick={navigateToEntreprise} className="hover:text-amber-800 transition-colors">L'entreprise</button>
              <button onClick={navigateToContact} className="hover:text-amber-800 transition-colors">Contact</button>
            </div>
            <button
              className="md:hidden text-stone-700 hover:text-amber-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-stone-200">
              <div className="px-4 py-2 space-y-1">
                <button onClick={navigateToHome} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Accueil</button>
                <button onClick={navigateToSavoirFaire} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Savoir-faire</button>
                <button onClick={navigateToPrestations} className="block w-full text-left px-4 py-3 text-amber-800 font-semibold bg-amber-50 rounded">Prestations</button>
                <button onClick={navigateToEntreprise} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">L'entreprise</button>
                <button onClick={navigateToContact} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Contact</button>
              </div>
            </div>
          )}
        </header>
        <div className="pt-24">
          <Prestations onNavigateToContact={navigateToContact} />
        </div>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'entreprise') {
    return (
      <Entreprise
        onNavigateHome={navigateToHome}
        onNavigatePrestations={navigateToPrestations}
        onNavigateSavoirFaire={navigateToSavoirFaire}
        onNavigateContact={navigateToContact}
      />
    );
  }

  if (currentPage === 'contact') {
    return (
      <Contact
        onNavigateHome={navigateToHome}
        onNavigateSavoirFaire={navigateToSavoirFaire}
        onNavigatePrestations={navigateToPrestations}
        onNavigateEntreprise={navigateToEntreprise}
      />
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={navigateToHome}>
            <img
              src="/logo-v.jpg"
              alt="Darbois Menuiserie Agencement – Logo"
              className="h-12 object-contain"
            />
          </div>
          <div className="hidden md:flex space-x-8 text-stone-700">
            <button onClick={navigateToHome} className="text-amber-800 font-semibold">Accueil</button>
            <button onClick={navigateToSavoirFaire} className="hover:text-amber-800 transition-colors">Savoir-faire</button>
            <button onClick={navigateToPrestations} className="hover:text-amber-800 transition-colors">Prestations</button>
            <button onClick={navigateToEntreprise} className="hover:text-amber-800 transition-colors">L'entreprise</button>
            <button onClick={navigateToContact} className="hover:text-amber-800 transition-colors">Contact</button>
          </div>
          <button
            className="md:hidden text-stone-700 hover:text-amber-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-4 py-2 space-y-1">
              <button onClick={navigateToHome} className="block w-full text-left px-4 py-3 text-amber-800 font-semibold bg-amber-50 rounded">Accueil</button>
              <button onClick={navigateToSavoirFaire} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Savoir-faire</button>
              <button onClick={navigateToPrestations} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Prestations</button>
              <button onClick={navigateToEntreprise} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">L'entreprise</button>
              <button onClick={navigateToContact} className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded">Contact</button>
            </div>
          </div>
        )}
      </header>

      <div className="pt-24 px-4 bg-white">
        <section className="relative h-[50vh] md:h-[65vh] lg:h-[70vh] w-full flex items-center justify-center overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: 'url("/images/atelier-montage.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(1.2) contrast(0.98) saturate(0.98)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/25 rounded-2xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-lg mx-auto" style={{ maxWidth: '1100px', lineHeight: '1.05', wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none' }}>
            Un atelier, des hommes,<br />un savoir-faire
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Depuis notre atelier, nous concevons et fabriquons vos menuiseries sur mesure avec la précision et l'exigence de l'artisanat français.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={navigateToContact}
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded transition-colors shadow-lg"
            >
              Demander un devis
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={navigateToSavoirFaire}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded transition-colors border-2 border-white"
            >
              Découvrir notre savoir-faire
            </button>
          </div>
        </div>
        </section>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/rover.JPG"
                alt="Découpe précise du bois en atelier"
                className="rounded-lg shadow-2xl w-full h-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                Une fabrication maîtrisée,<br />étape par étape
              </h3>
              <p className="text-lg text-stone-700 mb-10 leading-relaxed">
                De la conception à l'installation, nous vous accompagnons avec rigueur et transparence. Chaque réalisation est entièrement assurée par nos équipes.
              </p>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">Prise de cotes & conseils</h4>
                    <p className="text-stone-700">
                      Nous analysons vos besoins, réalisons un relevé précis des mesures et vous conseillons afin de vous orienter vers les solutions les mieux adaptées à votre projet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">Fabrication en atelier</h4>
                    <p className="text-stone-700">
                      Tous nos ouvrages sont réalisés dans notre atelier, avec des bois sélectionnés avec exigence et un suivi qualité constant à chaque étape de fabrication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">Pose et finitions soignées</h4>
                    <p className="text-stone-700">
                      L'installation est réalisée par nos équipes, avec un souci constant du détail et des ajustements nécessaires pour un résultat durable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">Suivi & accompagnement</h4>
                    <p className="text-stone-700">
                      Notre engagement se poursuit après la livraison : nos équipes restent à votre écoute pour assurer le suivi et intervenir si nécessaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Un atelier pensé pour durer,<br />au service du sur-mesure
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-green-50 leading-relaxed">
                Travailler le bois, c'est faire des choix : essences, techniques, organisation. Nous structurons notre activité autour de trois principes : qualité des matériaux, efficacité du processus, réduction de l'impact environnemental.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/95 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900 leading-snug">Bois sélectionnés avec exigence</h3>
              <p className="text-stone-700 leading-relaxed text-base">
                Panneaux et bois massif labellisés FSC et PEFC. Nous privilégions les essences européennes pour une gestion durable des forêts.
              </p>
            </div>
            <div className="bg-white/95 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900 leading-snug">Sur-mesure pour limiter les pertes et tri sélectif des déchets</h3>
              <p className="text-stone-700 leading-relaxed text-base">
                Chaque chantier est optimisé et dimensionné aux cotes exactes du projet afin de limiter notre impact environnemental. Réduction des chutes et des déchets.
              </p>
            </div>
            <div className="bg-white/95 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900 leading-snug">Énergie solaire au siège social</h3>
              <p className="text-stone-700 leading-relaxed text-base">
                Des panneaux photovoltaïques sont installés sur la toiture de notre siège social, avec une capacité de 36 kWp. Cette installation contribue à réduire l'empreinte carbone de notre activité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="prestations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-stone-900 mb-4">
              Nos domaines d'intervention
            </h3>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto">
              Au service des particuliers comme des professionnels, nous mobilisons notre savoir-faire pour répondre aux projets les plus exigeants.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <button
              onClick={() => navigateToPrestations('realisations')}
              className="bg-stone-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer text-left group"
            >
              <div className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{
                backgroundImage: 'url("/images/Agencement_et_menuiserie_sur_mesure.jpg")'
              }} />
              <div className="p-8">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                  Agencement & menuiserie sur mesure
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  Bibliothèques, dressings, cuisines et meubles sur mesure. Nous concevons des agencements parfaitement adaptés à votre usage quotidien.
                </p>
              </div>
            </button>
            <button
              onClick={() => navigateToPrestations('realisations')}
              className="bg-stone-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer text-left group"
            >
              <div className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{
                backgroundImage: 'url("/peps_gosselin_paris_2019_(18).jpg")'
              }} />
              <div className="p-8">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                  Agencement magasins
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  Façades, comptoirs, meubles de présentation et rayonnages. Des aménagements pensés pour valoriser vos produits et optimiser vos espaces professionnels.
                </p>
              </div>
            </button>
            <button
              onClick={() => navigateToPrestations('realisations')}
              className="bg-stone-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer text-left group"
            >
              <div className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{
                backgroundImage: 'url("/darmois_photo_fenetre_rapproche_propre.png")'
              }} />
              <div className="p-8">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                  Menuiserie extérieure bois
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  Fenêtres bois sur mesure, portes d'entrée et volets battants ou persiennes. Des réalisations durables, adaptées aux contraintes extérieures.
                </p>
              </div>
            </button>
            <button
              onClick={() => navigateToPrestations('realisations')}
              className="bg-stone-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer text-left group"
            >
              <div className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{
                backgroundImage: 'url("/images/Salon_Hotel_le_Regent_recadre.JPG")'
              }} />
              <div className="p-8">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                  Rénovation & tertiaire
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  Rénovation en neuf ou en existant, agencement de lieux professionnels, coordination avec les autres corps de métier et finitions soignées.
                </p>
              </div>
            </button>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={navigateToPrestations}
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded transition-colors shadow-lg"
            >
              Découvrir nos prestations
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="entreprise" className="relative py-24 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/pexels-pixabay-301717.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-stone-900/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-serif font-bold mb-6">
            Depuis 1946, une histoire de savoir-faire
          </h3>
          <p className="text-xl text-stone-300 mb-8 leading-relaxed">
            Artisan passionné, René Darbois a posé les fondations de notre expertise depuis 1946. Aujourd'hui à Montigny-le-Bretonneux, nous continuons à marier tradition et innovation pour des réalisations durables et parfaitement exécutées.
          </p>
          <button
            onClick={navigateToEntreprise}
            className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded transition-colors"
          >
            Découvrir notre histoire
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  return null;
}

function App() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToSavoirFaire = () => {
    navigate('/savoir-faire');
  };

  const navigateToPrestations = () => {
    navigate('/prestations');
  };

  const navigateToEntreprise = () => {
    navigate('/entreprise');
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/savoir-faire" element={<SavoirFaire onNavigateToContact={navigateToContact} onNavigateToPrestations={navigateToPrestations} />} />
        <Route path="/prestations" element={<Prestations onNavigateToContact={navigateToContact} />} />
        <Route path="/entreprise" element={<Entreprise onNavigateHome={navigateToHome} onNavigatePrestations={navigateToPrestations} onNavigateSavoirFaire={navigateToSavoirFaire} onNavigateContact={navigateToContact} />} />
        <Route path="/contact" element={<Contact onNavigateHome={navigateToHome} onNavigateSavoirFaire={navigateToSavoirFaire} onNavigatePrestations={navigateToPrestations} onNavigateEntreprise={navigateToEntreprise} />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </>
  );
}

export default App;
