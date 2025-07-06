import React, { useState, useRef, useEffect } from "react";
import {
  ShoppingBag,
  GraduationCap,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const ServicesSection = () => {
  const services = [
    {
      id: "ecommerce",
      icon: ShoppingBag,
      title: "E-Commerce Solutions",
      description:
        "Selling curated merchandise, books, and lifestyle products across U.S. marketplaces. We handle everything from product sourcing to fulfillment.",
      features: ["Product Curation", "Marketplace Management", "Order Fulfillment"],
      gradient: "from-violet-500 to-purple-500",
      lightGradient: "from-violet-100 to-purple-100",
      iconBg: "from-violet-400 to-purple-400",
      checkColor: "text-violet-500",
      linkColor: "text-violet-700 hover:text-violet-800",
      path: "/services/ecommerce", // route path
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Digital Marketing Training",
      description:
        "Training marketers and entrepreneurs with practical, job-ready digital marketing skills.",
      features: ["Live Sessions", "Real Projects", "Certifications"],
      gradient: "from-rose-500 to-pink-500",
      lightGradient: "from-rose-100 to-pink-100",
      iconBg: "from-rose-400 to-pink-400",
      checkColor: "text-rose-500",
      linkColor: "text-rose-700 hover:text-rose-800",
      path: "/services/training", // route path
    },
  ];

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-violet-50/20 to-rose-50/20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full py-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-600">
              Core Services
            </span>
          </h2>
          <p className="text-md text-gray-600 max-w-xl mx-auto">
            Empowering your success through innovative e-commerce & digital marketing.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full"
              >
                <div>
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${service.iconBg} rounded-xl flex items-center justify-center shadow-md mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className={`w-4 h-4 ${service.checkColor}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button (Links to route) */}
                <Link
                  to={service.path}
                  className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-gradient-to-r ${service.lightGradient} rounded-full ${service.linkColor} transition hover:shadow-md`}
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
