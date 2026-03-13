import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-1' : 'bg-primary py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#inicio" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded bg-accent flex items-center justify-center font-bold text-white">M</div>
            <span className="font-bold text-xl tracking-wide uppercase text-white">MERKANCIA</span>
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#modulos" className="text-gray-300 hover:text-white transition-colors">Módulos</a>
            <a href="#beneficios" className="text-gray-300 hover:text-white transition-colors">Beneficios</a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
              Planes
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md px-2 pt-2 pb-4 space-y-1 shadow-inner absolute w-full left-0 border-b border-white/10">
          <a href="#inicio" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md">Inicio</a>
          <a href="#modulos" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md">Módulos</a>
          <a href="#beneficios" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md">Beneficios</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
