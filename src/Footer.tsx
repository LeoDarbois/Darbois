import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-12">
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-[120px] mb-8 flex-wrap">
          <div>
            <h4 className="font-bold mb-4 text-stone-900">Coordonnées</h4>
            <div className="space-y-3 text-stone-600">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-amber-700 flex-shrink-0" />
                <a href="tel:0139302727" className="hover:text-amber-800 transition-colors">
                  01 39 30 27 27
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-amber-700 flex-shrink-0" />
                <a
                  href="mailto:contact@menuiserie-darbois.com"
                  className="hover:text-amber-800 transition-colors break-all"
                >
                  contact@menuiserie-darbois.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-amber-700 mt-1 flex-shrink-0" />
                <span>
                  11 avenue des trois peuples<br />
                  78180 Montigny-le-Bretonneux
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-stone-900">Horaires</h4>
            <div className="text-stone-600 space-y-2">
              <p>Lun–Ven 08:00–12:00 / 13:00–17:00</p>
              <p>Sam–Dim fermé</p>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-200 pt-8 text-center text-stone-500 text-sm space-y-3">
          <p>&copy; {new Date().getFullYear()} Darbois Menuiserie Agencement. Tous droits réservés.</p>
          <div className="flex justify-center items-center gap-2 text-xs">
            <Link
              to="/mentions-legales"
              className="hover:text-amber-700 transition-colors"
            >
              Mentions légales
            </Link>
            <span>·</span>
            <Link
              to="/politique-de-confidentialite"
              className="hover:text-amber-700 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
