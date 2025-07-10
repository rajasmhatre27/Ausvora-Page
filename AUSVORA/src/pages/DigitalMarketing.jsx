import React from "react";
import {
  BarChart2,
  DollarSign,
  MessageSquare,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

const DigitalMarketing = () => {
  const features = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "SEO & Content Marketing",
      description: "Master organic search strategies and create content that converts",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Social Media Marketing",
      description: "Build engaged communities across all major social platforms",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Paid Advertising (Google, Meta)",
      description: "Run profitable campaigns with advanced targeting techniques",
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: "Performance Analytics",
      description: "Data-driven insights to optimize your marketing ROI",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Personalized Consultancy",
      description: "One-on-one guidance tailored to your business goals",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-xl mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Digital Marketing Training & Consultancy
              </span>
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Practical, job-ready training for aspiring marketers and entrepreneurs. Our
              expert-led programs equip you with the latest digital tools and strategies to
              succeed in today's online economy.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
