import React from "react";
import {
  ShoppingBag,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "ecommerce",
      icon: ShoppingBag,
      title: "E-Commerce Solutions",
      description:
        "Selling curated merchandise, books, and lifestyle products across U.S. marketplaces. We handle everything from product sourcing to fulfillment.",
      gradient: "from-violet-500 to-purple-500",
      lightGradient: "from-violet-100 to-purple-100",
      iconBg: "from-violet-400 to-purple-400",
      checkColor: "text-violet-500",
      linkColor: "text-violet-700 hover:text-violet-800",
      path: "/services/ecommerce",
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Digital Marketing Training",
      description:
        "Training marketers and entrepreneurs with practical, job-ready digital marketing skills.",
      gradient: "from-rose-500 to-pink-500",
      lightGradient: "from-rose-100 to-pink-100",
      iconBg: "from-rose-400 to-pink-400",
      checkColor: "text-rose-500",
      linkColor: "text-rose-700 hover:text-rose-800",
      path: "/services/training",
    },
  ];

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-violet-50/20 to-rose-50/20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full py-8 sm:py-10 lg:py-12">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 px-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-600">
              Core Services
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto px-4">
            Empowering your success through innovative e-commerce & digital marketing.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full"
              >
                <div>
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${service.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center shadow-md mb-3 sm:mb-4`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <a
                  href={service.path}
                  className={`inline-flex items-center gap-2 text-sm sm:text-base font-medium px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r ${service.lightGradient} rounded-full ${service.linkColor} transition hover:shadow-md self-start`}
                >
                  Learn More <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;