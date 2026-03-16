import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/LogoMerkancia.png";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  // función para volver al inicio
  const goHome = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("inicio");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-1" : "bg-primary py-2"}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16 items-center">

          {/* LOGO */}
          <div
            onClick={goHome}
            className="flex items-center gap-3 cursor-pointer"
          >

            <img
              src={logo}
              alt="Logo Merkancia"
              className="w-10 h-10 object-contain"
            />

            <span className="font-bold text-xl tracking-wide uppercase text-white">
              MERKANCIA
            </span>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">

            <a
              href="#modulos"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Módulos
            </a>

            <a
              href="#beneficios"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Beneficios
            </a>

            <Link
              to="/precios"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Planes
            </Link>

          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (

        <div className="md:hidden bg-primary/95 backdrop-blur-md px-2 pt-2 pb-4 space-y-1 shadow-inner absolute w-full left-0 border-b border-white/10">

          <div
            onClick={goHome}
            className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md cursor-pointer"
          >
            Inicio
          </div>

          <a
            href="#modulos"
            className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
          >
            Módulos
          </a>

          <a
            href="#beneficios"
            className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
          >
            Beneficios
          </a>

          <Link
            to="/precios"
            className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
          >
            Planes
          </Link>

        </div>

      )}

    </nav>

  );
};

export default Navbar;