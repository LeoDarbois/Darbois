import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, Upload, X, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getGalleryImagesByFolder, createFolderMapping, getCoverImage } from './utils/galleryLoader';

interface PrestationsProps {
  onNavigateToContact: () => void;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tag: string;
  image: string;
  material: string;
  location: string;
  detail: string;
  galleryFolder?: string;
}

const Prestations: React.FC<PrestationsProps> = ({ onNavigateToContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
    prestation: '',
    consent: false
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre demande. Nous vous recontacterons rapidement pour échanger sur votre projet.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openGallery = (project: Project) => {
    const folderName = createFolderMapping(project.title);
    if (!folderName) {
      setSelectedProject(project);
      return;
    }

    const images = getGalleryImagesByFolder(folderName);

    if (images.length === 0) {
      setGalleryImages([]);
      setGalleryOpen(true);
      document.body.style.overflow = 'hidden';
      return;
    }

    setGalleryImages(images);
    setCurrentImageIndex(0);
    setImageLoadError(false);
    setGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setGalleryImages([]);
    setCurrentImageIndex(0);
    setImageLoadError(false);
    document.body.style.overflow = 'unset';
  };

  const handleImageError = () => {
    if (galleryImages.length > 1) {
      nextImage();
    } else {
      setImageLoadError(true);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!galleryOpen) return;

      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryOpen, galleryImages.length]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Bibliothèque sur mesure',
      description: 'Agencement mural intégré en chêne massif',
      tag: 'Sur mesure',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Chêne massif',
      location: 'Paris 16ème',
      detail: 'Bibliothèque sur mesure avec éclairage LED intégré et finition vernie mate',
      galleryFolder: 'bibliotheque-sur-mesure'
    },
    {
      id: 2,
      title: 'Cuisine, salle de bain',
      description: 'Aménagement sur mesure de cuisines et salles de bain',
      tag: 'Agencement',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Contreplaqué bouleau',
      location: 'Versailles',
      detail: 'Optimisation des espaces, mobilier intégré, finitions personnalisées',
      galleryFolder: 'cuisine-salle-de-bain'
    },
    {
      id: 3,
      title: 'Habillage mural bois & plafond',
      description: 'Lambris muraux et plafonds',
      tag: 'Finition',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Frêne naturel',
      location: 'Boulogne-Billancourt',
      detail: 'Continuité des matériaux entre murs et plafonds, esthétique haut de gamme avec finition huilée naturelle',
      galleryFolder: 'habillage-mural-bois-et-plafond'
    },
    {
      id: 4,
      title: 'Aménagement bureau',
      description: 'Poste de travail intégré avec rangements',
      tag: 'Sur mesure',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Chêne et métal',
      location: 'Neuilly-sur-Seine',
      detail: 'Bureau sur mesure avec caissons intégrés et gestion câbles',
      galleryFolder: 'amenagement-bureau'
    },
    {
      id: 5,
      title: 'Porte intérieure & escalier bois',
      description: 'Fabrication et pose de portes et escaliers bois',
      tag: 'Pose',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Chêne et vitrage',
      location: 'Saint-Germain-en-Laye',
      detail: 'Harmonie des éléments, travail artisanal avec vitrage trempé et finition teintée noyer',
      galleryFolder: 'porte-interieure-et-escalier-bois'
    },
    {
      id: 6,
      title: 'Rangement intégré, Agencement',
      description: 'Meuble TV et bibliothèque basse',
      tag: 'Agencement',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Noyer américain',
      location: 'Montreuil',
      detail: 'Ensemble TV avec tiroirs et niches ouvertes en noyer massif',
      galleryFolder: 'rangement-integre'
    },
    {
      id: 7,
      title: 'Aménagement lieu de vente',
      description: 'Agencement sur mesure pour commerces et boutiques',
      tag: 'Sur mesure',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Hêtre massif',
      location: 'Maisons-Laffitte',
      detail: 'Agencement complet pour espaces professionnels : comptoirs, présentoirs, mobilier adapté à l\'expérience client',
      galleryFolder: 'amenagement-lieu-de-vente'
    },
    {
      id: 8,
      title: 'Dressing sur mesure',
      description: 'Aménagement chambre parentale',
      tag: 'Agencement',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Chêne cérusé',
      location: 'Le Vésinet',
      detail: 'Dressing complet avec penderies, étagères et tiroirs intégrés',
      galleryFolder: 'dressing-sur-mesure'
    },
    {
      id: 9,
      title: 'Fenêtres et portes extérieures',
      description: 'Menuiserie extérieure double vitrage',
      tag: 'Pose',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Douglas traité',
      location: 'Fontainebleau',
      detail: 'Fenêtre bois avec double vitrage et finition lasure grise',
      galleryFolder: 'fenetre-et-porte-exterieure'
    },
    {
      id: 10,
      title: 'Mobilier',
      description: '',
      tag: 'Sur mesure',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Chêne massif',
      location: 'Paris',
      detail: 'Mobilier sur mesure en bois massif avec finitions soignées',
      galleryFolder: 'mobilier'
    },
    {
      id: 11,
      title: 'Façades',
      description: 'Habillages et façades de commerces',
      tag: 'Pose',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Bois composite',
      location: 'Paris',
      detail: 'Façade de commerce avec habillage bois et vitrine',
      galleryFolder: 'facade'
    },
    {
      id: 12,
      title: 'Comptoirs',
      description: 'Comptoirs d\'accueil, de vente et bars sur mesure',
      tag: 'Sur mesure',
      image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Chêne massif',
      location: 'Paris',
      detail: 'Comptoir sur mesure en bois massif avec finition vernie et plateau en épaisseur',
      galleryFolder: 'comptoir'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="px-4 bg-white">
        <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: 'url(/images/Banniere_Servant.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 rounded-2xl" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
              Nos Prestations
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Tous nos projets sont imaginés sur mesure, réalisés avec exactitude dans notre atelier, puis posés avec minutie sur site. Nous vous guidons du premier contact à la livraison, en partenariat avec architectes et décorateurs pour garantir une cohérence globale du projet.
            </p>
          </div>
        </section>
      </div>

      <section className="bg-white py-12 sticky top-20 z-40 border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <button onClick={() => scrollToSection('agencement')} className="px-4 py-2 text-stone-700 hover:text-amber-800 hover:bg-stone-50 rounded transition-colors">
              Agencement & menuiserie sur mesure
            </button>
            <button onClick={() => scrollToSection('menuiserie-interieure')} className="px-4 py-2 text-stone-700 hover:text-amber-800 hover:bg-stone-50 rounded transition-colors">
              Agencement magasins
            </button>
            <button onClick={() => scrollToSection('menuiserie-exterieure')} className="px-4 py-2 text-stone-700 hover:text-amber-800 hover:bg-stone-50 rounded transition-colors">
              Menuiserie extérieure bois
            </button>
            <button onClick={() => scrollToSection('renovation')} className="px-4 py-2 text-stone-700 hover:text-amber-800 hover:bg-stone-50 rounded transition-colors">
              Rénovation & tertiaire
            </button>
          </nav>
        </div>
      </section>

      <section id="agencement" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/Agencement_et_menuiserie_sur_mesure.jpg"
                alt="Agencement sur mesure - cuisine contemporaine"
                onClick={() => scrollToSection('realisations')}
                className="rounded-lg shadow-2xl w-full h-[500px] cursor-pointer hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                Agencement et menuiserie sur mesure
              </h2>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Nous concevons et fabriquons des espaces de rangement parfaitement adaptés à votre usage quotidien. Chaque élément est pensé pour optimiser l'espace disponible, avec des finitions soignées et des matériaux durables.
              </p>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Ce que cela comprend :</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Placards et dressings sur mesure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Bibliothèques et étagères intégrées</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Blocs-portes intérieurs bois</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Rangements sous escaliers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Mobilier</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Cuisines sur mesure</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection('devis')}
                className="inline-flex items-center px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded transition-colors"
              >
                Demander un devis
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="menuiserie-interieure" className="py-24 bg-stone-100 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                Agencement magasins
              </h2>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Nous concevons et fabriquons des agencements de magasins sur mesure pour structurer les espaces de vente et mettre en valeur les produits.
                Façades, mobilier, comptoirs et rayonnages sont réalisés dans notre atelier, selon les contraintes de chaque projet.
              </p>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Ce que cela comprend :</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Façades</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Meubles caisses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Habillages muraux</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Comptoirs arrière</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Rayonnages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Meubles de présentation de produits</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection('devis')}
                className="inline-flex items-center px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded transition-colors"
              >
                Demander un devis
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/peps_gosselin_paris_2019_(18).jpg"
                alt="Agencement magasins - façade commerce Gosselin Paris"
                onClick={() => scrollToSection('realisations')}
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover cursor-pointer hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menuiserie-exterieure" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/darmois_photo_fenetre_rapproche_propre.png"
                alt="Menuiserie extérieure bois - Fenêtres en bois sur mesure"
                onClick={() => scrollToSection('realisations')}
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover cursor-pointer hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                Menuiserie extérieure bois
              </h2>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Pour vos projets extérieurs, nous travaillons le bois avec les essences adaptées aux contraintes climatiques. Fabrication artisanale, assemblages résistants et finitions durables.
              </p>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Ce que cela comprend :</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Fenêtres bois sur mesure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Portes d'entrée</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Volets battants ou persiennes</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection('devis')}
                className="inline-flex items-center px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded transition-colors"
              >
                Demander un devis
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="renovation" className="py-24 bg-stone-100 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                Rénovation & tertiaire
              </h2>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Nous intervenons sur tout type de chantier, du particulier au tertiaire, en rénovation ou en neuf. Respect des délais, coordination avec les autres corps de métier et tenue de chantier.
              </p>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Ce que cela comprend :</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Création et réhabilitation de boiseries anciennes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Aménagement de bureaux et espaces professionnels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Agencement de commerces et boutiques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Travaux en site occupé avec coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-stone-800">Finitions et mise en conformité</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection('devis')}
                className="inline-flex items-center px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded transition-colors"
              >
                Demander un devis
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/images/Salon_Hotel_le_Regent_recadre.JPG"
                alt="Rénovation et travaux tertiaires"
                onClick={() => scrollToSection('realisations')}
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover cursor-pointer hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Notre méthode de travail
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              De la première visite à la pose finale, nous vous accompagnons avec rigueur et transparence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-3xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Prise de cotes & conseils</h3>
              <p className="text-stone-300 leading-relaxed">
                Nous nous déplaçons chez vous pour comprendre votre besoin, prendre les mesures exactes et vous conseiller sur les solutions les mieux adaptées à votre projet et à votre budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-3xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Fabrication en atelier</h3>
              <p className="text-stone-300 leading-relaxed">
                Chaque élément est conçu et fabriqué dans notre atelier en Île-de-France, avec des essences de bois sélectionnées et un contrôle rigoureux à chaque étape.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-3xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Pose et finitions soignées</h3>
              <p className="text-stone-300 leading-relaxed">
                Nous assurons la pose complète de vos menuiseries, réalisée exclusivement par nos propres poseurs. Les ajustements sont effectués avec précision pour un résultat parfait et pérenne. Chantier propre et respect des délais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
              Ce qui fait la différence chez Darbois
            </h2>
            <p className="text-lg text-stone-700 max-w-3xl mx-auto">
              Notre rigueur quotidienne se reflète dans des réalisations durables et des clients pleinement satisfaits, grâce à une fabrication et une pose entièrement assurées en interne par nos équipes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-stone-900 mb-3">Assemblages justes</h3>
              <p className="text-stone-700">
                Assemblages traditionnels à tenons et mortaises, queues d'aronde, tourillons collés. Résistance dans le temps garantie.
              </p>
            </div>
            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-stone-900 mb-3">Finitions nettes</h3>
              <p className="text-stone-700">
                Ponçage soigné, ajustages au millimètre, raccords invisibles. Aucun compromis sur les détails.
              </p>
            </div>
            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-stone-900 mb-3">Tenue de chantier</h3>
              <p className="text-stone-700">
                Protection des lieux, nettoyage quotidien, respect des horaires. Intervention discrète et professionnelle.
              </p>
            </div>
            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-stone-900 mb-3">Pose maîtrisée</h3>
              <p className="text-stone-700">
                Ajustements fins pour un résultat impeccable. Les portes ferment sans bruit, les tiroirs coulissent sans effort.
              </p>
            </div>
            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-stone-900 mb-3">Fabrication sur mesure</h3>
              <p className="text-stone-700">
                Chaque projet est unique. Nous adaptons nos réalisations à vos contraintes d'espace et à vos besoins d'usage.
              </p>
            </div>
            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-stone-900 mb-3">Durabilité</h3>
              <p className="text-stone-700">
                Essences de bois sélectionnées, assemblages résistants, finitions protectrices. Nos réalisations traversent le temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="realisations" className="py-24 bg-stone-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
              Réalisations
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets récents. Chaque réalisation est unique et adaptée aux besoins spécifiques de nos clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {projects.map((project) => {
              const folderName = createFolderMapping(project.title);
              const coverImage = folderName ? getCoverImage(folderName) : '';
              const displayImage = coverImage || project.image;

              return (
                <div
                  key={project.id}
                  onClick={() => openGallery(project)}
                  className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={displayImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className={project.description ? "p-4" : "p-4 pb-5"}>
                    <h3 className={`font-bold text-stone-900 text-sm md:text-base ${project.description ? "mb-1" : ""}`}>
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-stone-600 text-xs md:text-sm line-clamp-1">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection('devis')}
              className="inline-flex items-center px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              Vous avez un projet similaire ? Demandez un devis
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

{galleryOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-stone-100 transition-colors z-10"
          >
            <X className="w-6 h-6 text-stone-900" />
          </button>

          {galleryImages.length === 0 ? (
            <div
              className="bg-white rounded-lg p-12 max-w-md text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Aucune photo disponible
              </h3>
              <p className="text-stone-600">
                Les photos de cette réalisation seront bientôt disponibles.
              </p>
            </div>
          ) : imageLoadError ? (
            <div
              className="bg-white rounded-lg p-12 max-w-md text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Impossible de charger les images
              </h3>
              <p className="text-stone-600">
                Une erreur s'est produite lors du chargement des images.
              </p>
            </div>
          ) : (
            <>
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-stone-100 transition-colors z-10"
                  >
                    <ChevronLeft className="w-6 h-6 text-stone-900" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-stone-100 transition-colors z-10"
                  >
                    <ChevronRight className="w-6 h-6 text-stone-900" />
                  </button>
                </>
              )}

              <div
                className="max-w-7xl w-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4 text-center">
                  <p className="text-white text-lg font-semibold">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </p>
                </div>

                <div className="relative w-full flex items-center justify-center">
                  <img
                    key={galleryImages[currentImageIndex]}
                    src={galleryImages[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="rounded-lg shadow-2xl"
                    style={{
                      animation: 'fadeIn 0.3s ease-in-out',
                      maxHeight: '80vh',
                      maxWidth: '90vw',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                    onError={handleImageError}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-stone-100 transition-colors z-10"
              >
                <X className="w-6 h-6 text-stone-900" />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto max-h-[60vh] object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4">
                <h3 className="text-3xl font-serif font-bold text-stone-900">
                  {selectedProject.title}
                </h3>
              </div>
              <p className="text-lg text-stone-700 mb-6">
                {selectedProject.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-stone-900 mb-2">Matériau</h4>
                  <p className="text-stone-700">{selectedProject.material}</p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-2">Lieu</h4>
                  <p className="text-stone-700">{selectedProject.location}</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Particularité</h4>
                <p className="text-stone-700">{selectedProject.detail}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-stone-200">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    scrollToSection('devis');
                  }}
                  className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded transition-colors"
                >
                  Demander un projet similaire
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="devis" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
              Demander un devis
            </h2>
            <p className="text-lg text-stone-700">
              Racontez-nous votre projet, accompagné éventuellement de vos documents ou croquis. Nous vous contacterons rapidement pour en discuter et vous proposer un devis détaillé.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-stone-50 rounded-lg shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                  className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
                  placeholder="Votre nom ou raison sociale"
                />
              </div>
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
                  className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
                  placeholder="votre@email.fr"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                  className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
                  placeholder="06 12 34 56 78"
                />
              </div>
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
                  className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
                  placeholder="Votre ville"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="prestation" className="block text-sm font-semibold text-stone-900 mb-2">
                Type de prestation *
              </label>
              <select
                id="prestation"
                name="prestation"
                required
                value={formData.prestation}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
              >
                <option value="">Sélectionnez une prestation</option>
                <option value="agencement">Agencement sur mesure</option>
                <option value="menuiserie-interieure">Menuiserie intérieure</option>
                <option value="menuiserie-exterieure">Menuiserie extérieure</option>
                <option value="renovation">Rénovation & tertiaire</option>
                <option value="autre">Autre / Je ne sais pas</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-stone-900 mb-2">
                Description de votre projet *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
                placeholder="Décrivez-nous votre projet en quelques lignes : type de menuiserie, dimensions approximatives, matériaux souhaités, délais..."
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-900 mb-2">
                Photos ou croquis (optionnel)
              </label>
              <div className="border-2 border-dashed border-stone-300 rounded-lg p-8 text-center hover:border-amber-700 transition-colors cursor-pointer bg-white">
                <Upload className="w-12 h-12 text-stone-400 mx-auto mb-3" />
                <p className="text-stone-600 mb-2">
                  Cliquez pour ajouter des fichiers
                </p>
                <p className="text-sm text-stone-500">
                  Photos, plans, croquis... (formats acceptés : JPG, PNG, PDF)
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => console.log('Files:', e.target.files)}
                />
              </div>
            </div>
            <div className="flex items-start mb-6">
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
                J'accepte que mes données soient traitées par Darbois Menuiserie Agencement dans le cadre de ma demande de devis. Vos données ne seront jamais transmises à des tiers. *
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-4 rounded transition-colors shadow-lg"
            >
              Envoyer ma demande de devis
            </button>
            <p className="text-sm text-stone-600 mt-4 text-center">
              Vos données sont traitées de manière confidentielle et ne seront jamais transmises à des tiers.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Prestations;
