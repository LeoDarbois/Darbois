import React from 'react';
import { ChevronRight, Ruler, Hammer, Settings, CheckCircle } from 'lucide-react';

interface SavoirFaireProps {
  onNavigateToContact: () => void;
  onNavigateToPrestations: () => void;
}

function SavoirFaire({ onNavigateToContact, onNavigateToPrestations }: SavoirFaireProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="pt-24 px-4 bg-white">
        <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/5974337/pexels-photo-5974337.jpeg?auto=compress&cs=tinysrgb&w=1600)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 rounded-2xl" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
              Le savoir-faire Darbois
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Chaque ouvrage est fabriqué dans notre atelier avant d'être installé chez vous. Ici, nous contrôlons chaque étape, du débit du bois aux finitions, pour vous garantir un travail précis, durable et conforme à vos attentes.
            </p>
          </div>
        </section>
      </div>

      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                La précision au cœur du geste
              </h3>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Chaque pièce produite dans notre atelier porte en elle l'attention minutieuse que nous accordons aux réglages, aux mesures et aux finitions. Notre exigence ne tolère aucune approximation. Ici, la précision est essentielle.
              </p>
              <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                Dans un métier où le millimètre compte, nous mettons notre expérience au service de réalisations durables, fonctionnelles et esthétiques.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800 font-medium">Assemblages justes et résistants dans le temps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800 font-medium">Finitions nettes, sans compromis sur les détails</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800 font-medium">Pose au millimètre pour un résultat impeccable</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-stone-100 rounded-lg shadow-2xl overflow-hidden">
              <img
                src="/images/scie-bois-atelier.jpg"
                alt="Menuisier réglant la machine combinée toupie Martin dans l'atelier Darbois"
                className="w-full h-[500px] object-cover"
                loading="lazy"
                onError={(e) => {
                  console.error('Image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/travail-bois-toupie.jpg"
                alt="Menuisier ajustant une pièce de bois avec précision"
                className="rounded-lg shadow-2xl w-full h-[550px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                Le geste artisanal,<br />au cœur du travail du bois
              </h2>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Dans la menuiserie, la précision commence dès le réglage. Chaque machine, chaque angle, chaque mesure est contrôlé au millimètre pour garantir la cohérence de l'ensemble de la pièce.
              </p>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Nous travaillons des bois vivants, sensibles à l'humidité et à la température. C'est pourquoi la préparation, le calibrage et l'ajustement sont essentiels : rien n'est laissé au hasard.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                C'est cette rigueur qui fait la différence entre un travail correct et un travail parfaitement exécuté.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              Fabrication en atelier
            </h2>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed mb-12">
              La matière première est sélectionnée avec soin. Nous traçons et débitons chaque pièce selon les mesures relevées, en contrôlant rigoureusement l'absence de défauts ou de nœuds susceptibles d'altérer l'ouvrage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-14 h-14 bg-amber-700 rounded-full flex items-center justify-center mb-6">
                <Ruler className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Débit et préparation</h3>
              <p className="text-stone-700 leading-relaxed">
                Nous sélectionnons la matière première, traçons les découpes et débitons le bois selon les cotes relevées. Chaque pièce est inspectée pour détecter les défauts ou les nœuds qui pourraient fragiliser l'ouvrage.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-14 h-14 bg-amber-700 rounded-full flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Usinage et façonnage</h3>
              <p className="text-stone-700 leading-relaxed">
                Dégauchissage, rabotage, toupillage, mortaisage : chaque pièce est travaillée avec précision pour garantir des dimensions exactes et des surfaces parfaitement planes.
              </p>
              <p className="text-stone-700 leading-relaxed mt-4">
                Nous combinons savoir-faire artisanal et machines spécialisées pour assurer une qualité constante.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-14 h-14 bg-amber-700 rounded-full flex items-center justify-center mb-6">
                <Hammer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Assemblage et contrôle</h3>
              <p className="text-stone-700 leading-relaxed">
                Chaque élément est assemblé dans notre atelier pour contrôler ajustement, solidité et géométrie. Rien ne quitte l'atelier sans avoir été minutieusement vérifié.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/images/scie-panneau-atelier.jpg"
              alt="Menuisier travaillant à la scie circulaire dans l'atelier Darbois"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
            <img
              src="/images/defonceuse-bois.jpg"
              alt="Menuisier réglant la machine combinée toupie Martin dans l'atelier"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/Rabot.png"
                alt="Ajustements et finitions précises"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                Ajustements & finitions
              </h2>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Le travail du bois évolue avec le temps. Nous intervenons pour les réglages, reprises et entretiens nécessaires à la pérennité de vos menuiseries. La pose est réalisée par nos équipes internes, garantissant continuité, précision et exigence jusqu'aux finitions.
              </p>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Ce que cela comprend :</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Réglages de portes, fenêtres et placards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Reprises de finitions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Réparations de menuiseries existantes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Interventions après sinistre</span>
                </li>
              </ul>
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded transition-colors"
              >
                Demander un devis
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Vous avez un projet ?
          </h2>
          <p className="text-xl text-amber-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Que ce soit pour de la menuiserie intérieure ou extérieure, un agencement sur mesure ou une rénovation, nous sommes à votre écoute pour étudier votre besoin et vous proposer une solution adaptée.
          </p>
          <button
            onClick={onNavigateToContact}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-amber-800 font-bold text-lg rounded hover:bg-stone-100 transition-colors shadow-xl"
          >
            Demander un devis
            <ChevronRight className="ml-2 w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default SavoirFaire;
