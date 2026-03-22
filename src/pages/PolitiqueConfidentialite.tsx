import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../Footer';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-v.jpg"
              alt="Darbois Menuiserie Agencement – Logo"
              className="h-12 object-contain"
            />
          </Link>
        </nav>
      </header>

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[800px] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>

          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-12">
            Politique de confidentialité
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                1. Préambule
              </h2>
              <p className="text-stone-700 mb-4">
                La présente politique de confidentialité informe les utilisateurs du site sur la manière dont leurs données personnelles sont collectées et traitées.
              </p>
              <p className="text-stone-700">
                DARBOIS s'engage à respecter le Règlement Général sur la Protection des Données (RGPD) et la loi Informatique et Libertés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                2. Responsable du traitement
              </h2>
              <div className="space-y-2 text-stone-700">
                <p className="font-semibold">DARBOIS</p>
                <p>SAS au capital de 252 000 €</p>
                <p>11 avenue des 3 Peuples</p>
                <p>78180 Montigny-le-Bretonneux</p>
                <p>France</p>
                <p className="mt-4">Téléphone : 01 39 30 27 27</p>
                <p>Email : contact@menuiserie-darbois.com</p>
                <p className="mt-4">Représentée par Laurent Vaudier.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                3. Données collectées
              </h2>
              <p className="text-stone-700 mb-4">
                Dans le cadre des formulaires de contact ou de demande de devis, les données suivantes peuvent être collectées :
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse du projet</li>
                <li>Description du projet</li>
                <li>Documents ou photos transmis volontairement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                4. Finalités
              </h2>
              <p className="text-stone-700 mb-4">
                Les données sont utilisées uniquement pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-4 mb-4">
                <li>Répondre aux demandes</li>
                <li>Établir un devis</li>
                <li>Organiser un rendez-vous</li>
                <li>Assurer le suivi commercial</li>
                <li>Respecter les obligations légales en cas de relation contractuelle</li>
              </ul>
              <p className="text-stone-700">
                Aucune donnée n'est vendue ou cédée à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                5. Base légale
              </h2>
              <p className="text-stone-700 mb-4">
                Le traitement repose sur :
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-4">
                <li>Le consentement de l'utilisateur</li>
                <li>L'intérêt légitime de l'entreprise</li>
                <li>Les obligations légales en cas de relation commerciale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                6. Durée de conservation
              </h2>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-4">
                <li>3 ans maximum pour une demande sans suite</li>
                <li>10 ans pour les documents liés à une relation contractuelle</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                7. Hébergement des données
              </h2>
              <p className="text-stone-700 mb-4">
                Les données sont hébergées chez :
              </p>
              <div className="space-y-2 text-stone-700 mb-4">
                <p className="font-semibold">IONOS SARL</p>
                <p>7 place de la Gare</p>
                <p>57200 Sarreguemines</p>
                <p>France</p>
              </div>
              <p className="text-stone-700">
                Aucun transfert hors Union Européenne n'est effectué.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                8. Sécurité
              </h2>
              <p className="text-stone-700 mb-4">
                DARBOIS met en œuvre des mesures adaptées :
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-4">
                <li>Site sécurisé HTTPS</li>
                <li>Accès restreint aux données</li>
                <li>Messagerie professionnelle sécurisée</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                9. Droits des utilisateurs
              </h2>
              <p className="text-stone-700 mb-4">
                Conformément au RGPD, vous disposez :
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-4 mb-4">
                <li>D'un droit d'accès</li>
                <li>D'un droit de rectification</li>
                <li>D'un droit d'effacement</li>
                <li>D'un droit d'opposition</li>
                <li>D'un droit à la limitation du traitement</li>
              </ul>
              <p className="text-stone-700 mb-4">
                Pour exercer vos droits : contact@menuiserie-darbois.com
              </p>
              <p className="text-stone-700">
                Vous pouvez également saisir la CNIL (
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-800 underline"
                >
                  www.cnil.fr
                </a>
                ).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                10. Cookies
              </h2>
              <p className="text-stone-700 mb-4">
                Le site utilise uniquement des cookies strictement nécessaires à son fonctionnement technique.
              </p>
              <p className="text-stone-700 mb-4">
                Aucun cookie de mesure d'audience, de suivi publicitaire ou de profilage n'est installé.
              </p>
              <p className="text-stone-700 mb-4">
                Aucun bandeau de consentement n'est requis dans cette configuration.
              </p>
              <p className="text-stone-700">
                Si des outils de mesure d'audience ou services tiers sont ajoutés ultérieurement, la présente politique sera mise à jour et un dispositif de consentement sera mis en place conformément aux recommandations de la CNIL.
              </p>
            </section>

            <div className="text-center text-sm text-stone-500 mt-12 pt-8 border-t border-stone-200">
              Dernière mise à jour : 24 février 2026
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
