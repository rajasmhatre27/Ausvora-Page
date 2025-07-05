import React, { useEffect } from "react";
import { Target, Users, BookOpen, ShoppingBag, Lightbulb, Globe, ArrowRight, TrendingUp, Award, ArrowDown, Zap, Shield } from "lucide-react";

const About = () => {
  // Inject styles for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes slideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideDown {
        0% { opacity: 0; transform: translateY(-30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideLeft {
        0% { opacity: 0; transform: translateX(30px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideRight {
        0% { opacity: 0; transform: translateX(-30px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
      .animate-slideUp { animation: slideUp 1s ease-out; }
      .animate-slideDown { animation: slideDown 1s ease-out; }
      .animate-slideLeft { animation: slideLeft 1s ease-out; }
      .animate-slideRight { animation: slideRight 1s ease-out; }
      .animate-float { animation: float 3s ease-in-out infinite; }
      .animation-delay-200 { animation-delay: 0.2s; animation-fill-mode: both; }
      .animation-delay-400 { animation-delay: 0.4s; animation-fill-mode: both; }
      .animation-delay-600 { animation-delay: 0.6s; animation-fill-mode: both; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-white">
      
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.05),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tight animate-slideDown">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600">
              Ausvora
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-light animate-fadeIn animation-delay-200">
            Where E-commerce Meets Digital Excellence
          </p>
          <button 
            onClick={scrollToNextSection}
            className="mt-16 animate-float"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-8 h-8 text-gray-400 hover:text-purple-600 transition-colors" />
          </button>
        </div>
      </section>

      {/* Mission Section - Elegant Full View */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideRight">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                To empower individuals and businesses to unlock the immense potential of the digital economy through innovative e-commerce solutions and expert education.
              </p>
              <div className="mt-8 flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Innovation First</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Trusted Partner</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slideLeft animation-delay-200">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                <Target className="w-16 h-16 text-purple-600 mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Bold Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded to bridge the gap between modern e-commerce opportunities and accessible, high-quality digital marketing education in an era of rapid digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Advantage Section - Professional Layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-slideDown">
              Our Dual Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn animation-delay-200">
              Combining retail excellence with educational expertise
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-purple-50 to-white p-10 rounded-3xl border border-purple-100 hover:border-purple-200 transition-all duration-300 animate-slideUp">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">E-Commerce Retail</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We manage a diverse product portfolio, including books, merchandise, and lifestyle essentials, distributed through leading marketplaces in the USA.
              </p>
              <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
            <div className="group bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border border-blue-100 hover:border-blue-200 transition-all duration-300 animate-slideUp animation-delay-200">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Digital Marketing Training</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Expert-led programs in SEO, social media marketing, performance advertising, content strategy, and e-commerce business management.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                <span>View Programs</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section - Elegant Presentation */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideRight">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
                Leadership
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Shubham Singh</h3>
                  <p className="text-xl text-purple-600 font-medium">Director, Ausvora</p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Based in India, Shubham Singh leads Ausvora with a strong entrepreneurial spirit and a passion for digital innovation. His vision is to position Ausvora as a trusted, customer-centric brand in the global market.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Visionary Leader</span>
                  <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Digital Innovator</span>
                  <span className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Global Perspective</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slideLeft animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-xl">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <div className="text-center mt-8">
                  <p className="text-gray-600 italic text-lg">
                    "Transforming how people approach online business and digital education in the global market."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Clean Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-slideDown">
              Why Choose Ausvora
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn animation-delay-200">
              Excellence in every aspect of digital business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Globe className="w-6 h-6" />, 
                title: "Global E-commerce Solutions", 
                desc: "Comprehensive retail solutions with proven success in international markets",
                color: "purple"
              },
              { 
                icon: <Award className="w-6 h-6" />, 
                title: "Expert-Led Training", 
                desc: "Learn from industry professionals with real-world experience and insights",
                color: "blue"
              },
              { 
                icon: <TrendingUp className="w-6 h-6" />, 
                title: "Flexible Programs", 
                desc: "Affordable and accessible training designed to fit your schedule",
                color: "indigo"
              },
              { 
                icon: <Lightbulb className="w-6 h-6" />, 
                title: "Strategic Consultancy", 
                desc: "Personalized guidance for aspiring digital entrepreneurs",
                color: "purple"
              },
              { 
                icon: <Users className="w-6 h-6" />, 
                title: "Customer Excellence", 
                desc: "Dedicated support with a customer-first approach at every step",
                color: "blue"
              },
              { 
                icon: <Target className="w-6 h-6" />, 
                title: "Proven Expertise", 
                desc: "Track record of success in e-commerce and digital marketing",
                color: "indigo"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`group bg-gray-50 hover:bg-white p-8 rounded-2xl border border-gray-200 hover:border-${item.color}-200 hover:shadow-lg transition-all duration-300 animate-slideUp animation-delay-${(index % 3) * 200}`}
              >
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center text-${item.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;