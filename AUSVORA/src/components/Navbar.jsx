import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, GraduationCap, Briefcase, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled 
        ? "bg-gray-900/95 backdrop-blur-2xl shadow-2xl shadow-purple-500/10" 
        : "bg-gray-900/90 backdrop-blur-xl"
    }`}>
      {/* Gradient accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          scrolled ? "py-3" : "py-4"
        }`}>
          
          {/* Premium Dark Logo */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition duration-700"></div>
            <div className="relative">
              <h1 className="text-3xl font-bold tracking-tight">
                <span className="text-white">Aus</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">vora</span>
              </h1>
              <p className="text-xs text-gray-400 -mt-1 tracking-widest">DIGITAL EXCELLENCE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="/" className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group"
                 onMouseEnter={() => setServicesOpen(true)}
                 onMouseLeave={() => setServicesOpen(false)}>
              <button className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white flex items-center gap-1">
                <span className="relative z-10">Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-64 transform transition-all duration-300 ${
                servicesOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'
              }`}>
                <div className="bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-purple-500/20 border border-gray-700/50 overflow-hidden">
                  <a href="/ecommerce" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300">
                    <ShoppingBag className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="font-medium">E-Commerce Solutions</p>
                      <p className="text-xs text-gray-500">Curated products & marketplace</p>
                    </div>
                  </a>
                  <a href="/training" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300">
                    <GraduationCap className="w-5 h-5 text-pink-400" />
                    <div>
                      <p className="font-medium">Digital Marketing Training</p>
                      <p className="text-xs text-gray-500">Expert-led courses & programs</p>
                    </div>
                  </a>
                  <a href="/consultancy" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300">
                    <Briefcase className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="font-medium">Consultancy Services</p>
                      <p className="text-xs text-gray-500">Grow your online business</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <a href="/about" className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="/contact" className="ml-4 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
              <span className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300">
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="relative p-2.5 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}></span>
                <span className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}></span>
                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-purple-400 transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute inset-x-0 top-full transform transition-all duration-500 ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
      }`}>
        <div className="bg-gray-900/95 backdrop-blur-2xl border-t border-gray-800 shadow-2xl">
          <nav className="p-6 space-y-4">
            <a href="/" onClick={toggleMenu} className="block px-4 py-3 text-gray-300 font-medium rounded-lg bg-gray-800/50 hover:bg-gray-800 hover:text-white transition-all duration-300">
              Home
            </a>
            
            {/* Mobile Services */}
            <div className="space-y-2">
              <p className="px-4 py-2 text-gray-500 text-sm font-semibold uppercase tracking-wider">Services</p>
              <a href="/ecommerce" onClick={toggleMenu} className="flex items-center gap-3 px-4 py-3 text-gray-300 font-medium rounded-lg bg-gray-800/30 hover:bg-gray-800/50 hover:text-white transition-all duration-300">
                <ShoppingBag className="w-5 h-5 text-purple-400" />
                E-Commerce Solutions
              </a>
              <a href="/training" onClick={toggleMenu} className="flex items-center gap-3 px-4 py-3 text-gray-300 font-medium rounded-lg bg-gray-800/30 hover:bg-gray-800/50 hover:text-white transition-all duration-300">
                <GraduationCap className="w-5 h-5 text-pink-400" />
                Digital Marketing Training
              </a>
              <a href="/consultancy" onClick={toggleMenu} className="flex items-center gap-3 px-4 py-3 text-gray-300 font-medium rounded-lg bg-gray-800/30 hover:bg-gray-800/50 hover:text-white transition-all duration-300">
                <Briefcase className="w-5 h-5 text-orange-400" />
                Consultancy Services
              </a>
            </div>
            
            <a href="/about" onClick={toggleMenu} className="block px-4 py-3 text-gray-300 font-medium rounded-lg bg-gray-800/50 hover:bg-gray-800 hover:text-white transition-all duration-300">
              About
            </a>
            
            <a href="/contact" onClick={toggleMenu} className="block w-full text-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;