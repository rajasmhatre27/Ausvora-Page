import React, { useState, useEffect } from "react";
import {
  Menu,
  ShoppingBag,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../pages/ContactForm";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-2xl shadow-2xl shadow-purple-500/10"
            : "bg-gray-900/90 backdrop-blur-xl"
        }`}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? "py-3" : "py-4"}`}>
            <Link to="/" className="relative group cursor-pointer">
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition duration-700"></div>
              <div className="relative">
                <h1 className="text-3xl font-bold tracking-tight">
                  <span className="text-white">Aus</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">vora</span>
                </h1>
                <p className="text-xs text-gray-400 -mt-1 tracking-widest">DIGITAL EXCELLENCE</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link to="/" className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white flex items-center gap-1">
                  <span className="relative z-10">Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <div className={`absolute top-full left-0 mt-2 w-64 transform transition-all duration-300 ${servicesOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-2 opacity-0 invisible"}`}>
                  <div className="bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-purple-500/20 border border-gray-700/50 overflow-hidden">
                    <Link to="/services/ecommerce" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300">
                      <ShoppingBag className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="font-medium">E-Commerce Solutions</p>
                        <p className="text-xs text-gray-500">Curated products & marketplace</p>
                      </div>
                    </Link>
                    <Link to="/services/training" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300">
                      <GraduationCap className="w-5 h-5 text-pink-400" />
                      <div>
                        <p className="font-medium">Digital Marketing Training</p>
                        <p className="text-xs text-gray-500">Expert-led courses & programs</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/about" className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white">
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link to="/contact" className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <button
                onClick={() => setShowForm(true)}
                className="ml-4 relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
                <span className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </nav>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="relative p-2.5 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative bg-white rounded-xl max-w-xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh] animate-slideUp">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
            <ContactForm/>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
