import React, { useState, useLayoutEffect } from 'react';
import { Clock, Upload, X, Menu, HelpCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

interface ContactProps {
  onNavigateHome: () => void;
  onNavigateSavoirFaire: () => void;
  onNavigatePrestations: () => void;
  onNavigateEntreprise: () => void;
}

function Contact({
  onNavigateHome,
  onNavigateSavoirFaire,
  onNavigatePrestations,
  onNavigateEntreprise,
}: ContactProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    projectType: '',
    message: '',
    consent: false,
  });
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Files:', files);
    alert('Merci pour votre demande. Nous vous recontacterons dans les meilleurs délais.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      projectType: '',
      message: '',
      consent: false,
    });
    setFiles([]);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
  }, []);

  const faqItems = [
    {
      question: 'La prise de cotes et le devis sont-ils gratuits ?',
      answer: 'Oui, nous nous déplaçons gratuitement pour prendre les mesures et établir un devis détaillé sans engagement.',
    },
    {
      question: 'Quels sont les délais de réalisation ?',
      answer: 'Les délais sont estimés en fonction de la complexité du projet et de notre planning. Nous nous efforçons de respecter les contraintes de nos clients.',
    },
    {
      question: 'Quelle est votre zone d\'intervention ?',
      answer: 'Nous intervenons principalement à Paris, dans les Yvelines (78), les Hauts-de-Seine (92) et plus largement dans l\'ouest parisien. Nous pouvons également nous déplacer en province ou à l\'étranger, sur demande.',
    },
    {
      question: 'Quelles sont les étapes préparatoires pour la rédaction du devis ?',
      answer: 'Tout d\'abord, nous convenons d\'un rendez-vous afin de comprendre votre projet. Nous réalisons ensuite la prise de cotes sur place, vous conseillons sur le choix des matériaux et vous accompagnons dans les décisions techniques et esthétiques. À l\'issue de ces échanges, un devis détaillé et personnalisé vous est proposé.',
    },
    {
      question: 'Fournissez-vous un visuel des ouvrages à poser ?',
      answer: 'Les plans de fabrications sont réalisés par notre bureau d\'études après signature du devis et avant démarrage du processus de fabrication.',
    },
    {
      question: 'Quels matériaux utilisez-vous ?',
      answer: 'Les matériaux sont choisis en fonction de chaque projet, selon l\'esthétique recherchée et les contraintes techniques. Nous vous conseillons les essences et panneaux les plus adaptés à votre usage, à l\'environnement et au rendu souhaité.',
    },
    {
      question: 'Travaillez-vous avec des architectes ou décorateurs ?',
      answer: 'Oui, nous travaillons régulièrement en collaboration avec des architectes, décorateurs et maîtres d\'œuvre afin d\'assurer la cohérence technique et esthétique des projets.',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={onNavigateHome}>
            <img
              src="/logo-v.jpg"
              alt="Darbois Menuiserie Agencement – Logo"
              className="h-12 object-contain"
            />
          </div>
          <div className="hidden md:flex space-x-8 text-stone-700">
            <button onClick={onNavigateHome} className="hover:text-amber-800 transition-colors">
              Accueil
            </button>
            <button onClick={onNavigateSavoirFaire} className="hover:text-amber-800 transition-colors">
              Savoir-faire
            </button>
            <button onClick={onNavigatePrestations} className="hover:text-amber-800 transition-colors">
              Prestations
            </button>
            <button onClick={onNavigateEntreprise} className="hover:text-amber-800 transition-colors">
              L'entreprise
            </button>
            <button className="text-amber-800 font-semibold">
              Contact
            </button>
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
              <button
                onClick={onNavigateHome}
                className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded"
              >
                Accueil
              </button>
              <button
                onClick={onNavigateSavoirFaire}
                className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded"
              >
                Savoir-faire
              </button>
              <button
                onClick={onNavigatePrestations}
                className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded"
              >
                Prestations
              </button>
              <button
                onClick={onNavigateEntreprise}
                className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors rounded"
              >
                L'entreprise
              </button>
              <button className="block w-full text-left px-4 py-3 text-amber-800 font-semibold bg-amber-50 rounded">
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="pt-24 px-4 bg-white">
        <section className="w-full py-16 relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: 'url(/images/Banniere_quai_de_tournelle.JPG)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              Contact
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Parlez-nous de votre projet, nous vous répondrons dans les meilleurs délais.
            </p>
          </div>
        </section>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="bg-stone-50 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">
                  Demande de devis
                </h2>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-stone-900 mb-2">
                      Nom / Société *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
                      placeholder="Votre nom ou raison sociale"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-stone-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
                        placeholder="votre@email.fr"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-stone-900 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-stone-900 mb-2">
                        Ville *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
                        placeholder="Votre ville"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-stone-900 mb-2">
                        Type de projet *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="agencement">Agencement sur mesure</option>
                        <option value="interieur">Menuiserie intérieure</option>
                        <option value="exterieur">Menuiserie extérieure</option>
                        <option value="renovation">Rénovation/tertiaire</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-stone-900 mb-2">
                      Description du projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white resize-none"
                      placeholder="Décrivez votre projet : dimensions, matériaux souhaités, contraintes particulières, délais..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-900 mb-2">
                      Photos ou croquis (optionnel)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="files"
                        multiple
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="files"
                        className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-stone-300 rounded-lg hover:border-amber-700 transition-colors cursor-pointer bg-white"
                      >
                        <Upload className="w-5 h-5 mr-2 text-stone-600" />
                        <span className="text-stone-600">Ajouter des fichiers</span>
                      </label>
                    </div>
                    {files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-white px-3 py-2 rounded border border-stone-200"
                          >
                            <span className="text-sm text-stone-700 truncate flex-1">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="ml-2 text-stone-500 hover:text-red-600 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-amber-700 border-stone-300 rounded focus:ring-amber-700"
                    />
                    <label htmlFor="consent" className="ml-3 text-sm text-stone-700">
                      J'accepte que mes données personnelles soient traitées par Darbois Menuiserie Agencement afin de répondre à ma demande, conformément à la{' '}
                      <Link
                        to="/politique-de-confidentialite"
                        className="text-amber-700 hover:text-amber-800 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        politique de confidentialité
                      </Link>. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg"
                  >
                    Envoyer votre demande
                  </button>
                </div>

                <p className="text-sm text-stone-600 mt-6 leading-relaxed">
                  <strong>Conseil :</strong> N'hésitez pas à joindre des photos, croquis ou plans pour nous aider à mieux comprendre votre besoin. Précisez les dimensions approximatives, les matériaux souhaités et vos contraintes de délais.
                </p>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-stone-50 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">
                  Coordonnées
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-stone-900 mb-1">Téléphone</p>
                      <a
                        href="tel:0139302727"
                        className="text-stone-700 hover:text-amber-800 transition-colors text-lg"
                      >
                        01 39 30 27 27
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-stone-900 mb-1">Email</p>
                      <a
                        href="mailto:contact@menuiserie-darbois.com"
                        className="text-stone-700 hover:text-amber-800 transition-colors break-all"
                      >
                        contact@menuiserie-darbois.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-stone-900 mb-1">Adresse</p>
                      <p className="text-stone-700">
                        11 avenue des trois peuples<br />
                        78180 Montigny-le-Bretonneux
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-stone-900 mb-1">Horaires</p>
                      <p className="text-stone-700">
                        Lun–Ven 08:00–12:00 / 13:00–17:00<br />
                        <span className="text-stone-600">Sam–Dim fermé</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-center h-64 bg-stone-200 rounded-lg">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=11+Avenue+des+Trois+Peuples,+78180+Montigny-le-Bretonneux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded transition-colors shadow-lg"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Voir l'itinéraire sur Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-amber-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-2">{item.question}</h3>
                    <p className="text-stone-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
