import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MarketplacesSection = () => {
  const marketplaces = [
    { id: 1, name: 'AbeBooks', logo: '/abebooks.png' },
    { id: 2, name: 'Alibris', logo: '/alibris.png' },
    { id: 3, name: 'Amazon', logo: '/amazon.png' },
    { id: 4, name: 'eBay', logo: '/ebay.png' },
    { id: 5, name: 'Google', logo: '/google.png' },
    { id: 6, name: 'Instagram', logo: '/instagram.png' },
    { id: 7, name: 'Walmart', logo: '/walmart.png' },
    { id: 8, name: 'TextbookX', logo: '/api/placeholder/150/60' },
    { id: 9, name: 'Online Sports', logo: '/api/placeholder/150/60' },
  ];

  const duplicatedMarketplaces = [...marketplaces, ...marketplaces];

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;600;700&family=Space+Grotesk:wght@300..700&display=swap');
      .font-anton { font-family: 'Anton', sans-serif; }
      .font-spaceGrotesk { font-family: 'Space Grotesk', sans-serif; }
      .font-manrope { font-family: 'Manrope', sans-serif; }

      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }

      .animate-shimmer { background-size: 200% 100%; animation: shimmer 3s linear infinite; }
      .animate-gradient { background-size: 200% 200%; animation: gradient 4s ease infinite; }
      .animate-blob { animation: blob 7s infinite; }

      .marketplace-logo {
        height: 60px;
        width: auto;
        max-width: 140px;
        object-fit: contain;
        object-position: center;
        transition: transform 0.3s ease;
      }

      .marketplace-logo.big-logo {
        transform: scale(1.3);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-blue-100/20 to-purple-100/20 rounded-full animate-blob" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 font-anton">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-700 to-pink-700 animate-shimmer relative inline-block">
              Marketplaces
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 opacity-50 blur-sm"></span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-manrope">
            Expanding your reach across leading global platforms
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 via-white/80 to-transparent z-10 pointer-events-none"></div>

          <div className="flex">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -50 * marketplaces.length],
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedMarketplaces.map((marketplace, index) => {
                const isBigLogo = ['Google', 'Instagram', 'AbeBooks'].includes(marketplace.name);
                return (
                  <div
                    key={`${marketplace.id}-${index}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg w-56 h-40 flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-purple-100/50">
                      <div className="flex items-center justify-center mb-4 h-16 w-full">
                        <img
                          src={marketplace.logo}
                          alt={marketplace.name}
                          className={`marketplace-logo ${isBigLogo ? 'big-logo' : ''}`}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = e.target.nextSibling;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="hidden marketplace-logo bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg items-center justify-center text-white font-bold text-sm"
                        >
                          {marketplace.name}
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 font-spaceGrotesk text-center">
                        {marketplace.name}
                      </span>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/0 via-blue-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:via-blue-400/10 group-hover:to-pink-400/10 transition-all duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplacesSection;
