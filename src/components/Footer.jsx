import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center font-bold text-white">M</div>
              <span className="font-bold text-xl tracking-wide uppercase text-white">MERKANCIA</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed mb-6 text-gray-300">
              Soluciones tecnológicas integrales para impulsar el crecimiento de tu negocio en la era digital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#modulos" className="hover:text-accent transition-colors">Módulos</a></li>
              <li><a href="#beneficios" className="hover:text-accent transition-colors">Beneficios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Apps Móviles</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Soluciones Cloud</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">IA &amp; ML</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <a href="mailto:info@vaixs.net" className="hover:text-white transition-colors">info@vaixs.net</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <a href="tel:+59168523589" className="hover:text-white transition-colors">+ (591) 68523589</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span className="text-white">Cochabamba, Bolivia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p className="text-gray-400">© 2026 Vaixs Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors text-gray-400">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors text-gray-400">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
