import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ scrollToRef }) => {
  const navigate = useNavigate();

  const handleScroll = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinProgram = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bungee&family=Dancing+Script:wght@400..700&family=Manrope:wght@400;600;700&family=Space+Grotesk:wght@300..700&family=Waterfall&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bungee&family=Molengo&family=Waterfall&display=swap');
      .font-anton { font-family: 'Anton', sans-serif; }
      .font-dancing { font-family: 'Dancing Script', cursive; }
      .font-waterfall { font-family: 'Waterfall', cursive; }
      .font-spaceGrotesk { font-family: 'Space Grotesk', sans-serif; }
      .font-manrope { font-family: 'Manrope', sans-serif; }
      .bungee-regular {
        font-family: "Bungee", sans-serif;
        font-weight: 400;
        font-style: normal;
      }
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
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }

      .animate-blob { animation: blob 7s infinite; }
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-slideDown { animation: slideDown 0.8s ease-out; }
      .animate-slideUp { animation: slideUp 0.8s ease-out; }
      .animate-fadeIn { animation: fadeIn 1s ease-out; }
      .animate-gradient { background-size: 200% 200%; animation: gradient 4s ease infinite; }
      .animate-shimmer { background-size: 200% 100%; animation: shimmer 3s linear infinite; }
      .animation-delay-500 { animation-delay: 0.5s; animation-fill-mode: both; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background and floating elements omitted for brevity */}

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto text-center z-10 pt-12 pb-20">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight tracking-tight animate-slideDown font-anton">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-700 to-pink-700 animate-shimmer relative inline-block bungee-regular">
            AUSVORA
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 opacity-50 blur-sm"></span>
          </span>
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight animate-slideUp font-dancing">
          <span className="block text-gray-800">Empowering</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient ">
            E-Commerce & Digital Growth
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeIn font-manrope">
          At Ausvora, we're on a mission to help individuals and businesses unlock the immense potential of the digital economy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-500">
          {/* Scroll Button */}
          <button
            onClick={handleScroll}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg text-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-manrope"
          >
            <span className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Explore Our Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Navigate Button */}
          <button
            onClick={handleJoinProgram}
            className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-lg font-semibold text-lg text-gray-700 hover:border-purple-400 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-manrope"
          >
            Join Training Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
