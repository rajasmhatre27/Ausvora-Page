import React, { useState } from "react";
import { Target, Shield, Rocket, Heart, TrendingUp, Sparkles, Award, Eye, Zap, Globe, Star } from "lucide-react";

const VisionValuesSection = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  const coreValues = [
    {
      id: 1,
      icon: Shield,
      title: "Integrity & Transparency",
      description: "Building trust through honest practices and open communication",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      shadowColor: "shadow-blue-200"
    },
    {
      id: 2,
      icon: Rocket,
      title: "Innovation-Driven Growth",
      description: "Pioneering solutions that drive digital transformation",
      gradient: "from-purple-400 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      shadowColor: "shadow-purple-200"
    },
    {
      id: 3,
      icon: Heart,
      title: "Client Success First",
      description: "Your achievements are our greatest reward",
      gradient: "from-rose-400 to-rose-600",
      bgGradient: "from-rose-50 to-rose-100",
      shadowColor: "shadow-rose-200"
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Continuous Learning & Development",
      description: "Evolving with the digital landscape to stay ahead",
      gradient: "from-emerald-400 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      shadowColor: "shadow-emerald-200"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(99, 102, 241, 0.3)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
          }}
        />
        
        {/* Decorative shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-indigo-200/20 rounded-2xl rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-purple-200/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Vision Section */}
        <div className="text-center mb-20">
          {/* Vision Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200/50 shadow-lg mb-8">
            <Eye className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wider">Our Vision</span>
          </div>
          
          {/* Vision Statement with Animation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              <Globe className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                To become a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  global leader
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                in e-commerce retail and digital education, creating opportunities for individuals 
                and businesses to grow and succeed in the digital age.
              </p>
              
              {/* Vision highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Global Reach</h4>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Digital Innovation</h4>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-pink-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Success Enabler</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-lg mb-6">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700 uppercase tracking-wider">Our Core Values</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              The Principles That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Guide Us
              </span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredValue(value.id)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300`}></div>
                  
                  {/* Card */}
                  <div className={`relative h-full bg-gradient-to-br ${value.bgGradient} backdrop-blur-sm rounded-2xl p-6 shadow-lg ${value.shadowColor} border border-white/50 transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2`}>
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:rotate-12`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    
                    {/* Description - shows on hover */}
                    <p className={`text-sm text-gray-600 transition-all duration-300 ${
                      hoveredValue === value.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    } overflow-hidden`}>
                      {value.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Sparkles className="w-20 h-20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 blur-3xl"></div>
          <div className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center border border-indigo-100/50">
            <Sparkles className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore, Learn & Grow with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Ausvora
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands who have transformed their digital journey with us. 
              Your success story starts today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Your Journey
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-indigo-200 text-indigo-700 rounded-xl font-semibold hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300">
                <Target className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionValuesSection;