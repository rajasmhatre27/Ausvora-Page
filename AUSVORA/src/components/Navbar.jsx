import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, GraduationCap, ChevronDown, Home, Info, Phone, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

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
          <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
            {/* Logo */}
            <a href="/" className="relative group cursor-pointer">
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition duration-700"></div>
              <div className="relative">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  <span className="text-white">Aus</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">vora</span>
                </h1>
                <p className="text-[10px] sm:text-xs text-gray-400 -mt-1 tracking-widest">DIGITAL EXCELLENCE</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <a href="/" className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 rounded-lg group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-md opacity-30"></div>
                </div>
              </a>

              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white flex items-center gap-1">
                  <span className="relative z-10">Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 rounded-lg group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-md opacity-30"></div>
                  </div>
                </button>

                <div className={`absolute top-full left-0 mt-2 w-64 transform transition-all duration-300 ${servicesOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-2 opacity-0 invisible"}`}>
                  <div className="bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-purple-500/20 border border-gray-700/50 overflow-hidden">
                    <a href="/services/ecommerce" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 group">
                      <ShoppingBag className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">E-Commerce Solutions</p>
                        <p className="text-xs text-gray-500">Curated products & marketplace</p>
                      </div>
                    </a>
                    <a href="/services/training" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 group">
                      <GraduationCap className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">Digital Marketing Training</p>
                        <p className="text-xs text-gray-500">Expert-led courses & programs</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <a href="/about" className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white">
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 rounded-lg group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-md opacity-30"></div>
                </div>
              </a>

              <a href="/contact" className="group relative px-5 py-2.5 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 rounded-lg group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-md opacity-30"></div>
                </div>
              </a>

              <button
                onClick={() => setShowForm(true)}
                className="ml-4 relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300 animate-pulse"></div>
                <span className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </nav>

            {/* Mobile/Tablet Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMenu} 
                className="relative p-2.5 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 transition duration-300"></div>
                {isOpen ? (
                  <X className="w-6 h-6 text-white relative z-10" />
                ) : (
                  <Menu className="w-6 h-6 text-white relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className={`lg:hidden fixed inset-x-0 bg-gray-900 transition-all duration-500 overflow-hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`} style={{ top: scrolled ? '64px' : '80px', height: `calc(100vh - ${scrolled ? '64px' : '80px'})` }}>
          <nav className="flex flex-col h-full px-4 py-4 overflow-y-auto">
            <a 
              href="/" 
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 group"
            >
              <Home className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Home</span>
            </a>

            <div className="mt-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300"
              >
                <span className="font-medium">Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="ml-8 mt-2 space-y-2">
                  <a 
                    href="/services/ecommerce" 
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-400 hover:text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-pink-600/10 transition-all duration-300"
                  >
                    <ShoppingBag className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">E-Commerce Solutions</span>
                  </a>
                  <a 
                    href="/services/training" 
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-400 hover:text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-pink-600/10 transition-all duration-300"
                  >
                    <GraduationCap className="w-4 h-4 text-pink-400" />
                    <span className="text-sm">Digital Marketing Training</span>
                  </a>
                </div>
              </div>
            </div>

            <a 
              href="/about" 
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 mt-2 text-gray-300 hover:text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 group"
            >
              <Info className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">About</span>
            </a>

            <a 
              href="/contact" 
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 mt-2 text-gray-300 hover:text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Contact</span>
            </a>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <button
                onClick={() => {
                  setShowForm(true);
                  closeMenu();
                }}
                className="w-full relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
                <span className="relative w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative bg-white rounded-xl max-w-xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh] transform transition-all duration-300">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold transition-colors"
            >
              ×
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Started</h2>
              <p className="text-gray-600">Contact form component would go here</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;