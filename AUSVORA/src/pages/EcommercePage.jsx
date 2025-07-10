import React from "react";
import {
  ShoppingCart,
  Package,
  Store,
  BarChart3,
  Headphones,
  Search,
} from 'lucide-react';

const EcommercePage = () => {
  const features = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "Product Curation & Research",
      description: "Expert selection of high-demand products with proven market potential"
    },
    {
      icon: <Store className="w-5 h-5" />,
      title: "Marketplace Account Setup",
      description: "Professional setup on Amazon, eBay, Etsy, and other leading platforms"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Listing Optimization",
      description: "SEO-optimized product listings that drive visibility and conversions"
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Inventory & Order Management",
      description: "Streamlined fulfillment processes ensuring timely delivery"
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Customer Support Assistance",
      description: "Professional support team handling inquiries and reviews"
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl mb-6">
              <ShoppingCart className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                E-Commerce Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Selling curated merchandise, books, and lifestyle products across leading U.S. marketplaces. 
              We manage product sourcing, listings, and fulfillment so you can focus on growth.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommercePage;
