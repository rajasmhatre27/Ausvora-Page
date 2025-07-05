import React, { useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// Hero Section Component - Cleaned and Updated
const HeroSection = () => {
  // Inject styles for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
        100% { transform: translateY(0px) rotate(360deg); }
      }
      @keyframes particle {
        0% { transform: translateY(100vh) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-10vh) translateX(100px); opacity: 0; }
      }
      @keyframes slideDown {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-blob { animation: blob 7s infinite; }
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-particle { animation: particle 15s linear infinite; }
      .animate-slideDown { animation: slideDown 0.8s ease-out; }
      .animate-slideUp { animation: slideUp 0.8s ease-out; }
      .animate-fadeIn { animation: fadeIn 1s ease-out; }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 4s ease infinite;
      }
      .animation-delay-500 { animation-delay: 0.5s; animation-fill-mode: both; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-purple-200/30 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-blue-200/30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 border-4 border-pink-200/30 rounded-lg rotate-12 animate-float animation-delay-4000"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(147, 197, 253, 0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Static Center Glow (no mouse movement) */}
      <div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300/20 to-purple-300/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Wave Pattern at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-48 fill-current text-blue-50/50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto text-center z-10 pt-12 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg mb-8 animate-slideDown">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Welcome to the Digital Revolution</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slideUp">
          <span className="block text-gray-800">Empowering</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
            E-Commerce & Digital Growth
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
          At Ausvora, we're on a mission to help individuals and businesses unlock the immense potential of the digital economy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-500">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg text-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <span className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Explore Our Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-lg font-semibold text-lg text-gray-700 hover:border-purple-400 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            Join Training Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
