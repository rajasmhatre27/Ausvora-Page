import React, { useState, useRef, useEffect } from "react";
import { ShoppingBag, GraduationCap, CheckCircle, ChevronRight, Package, Globe, TrendingUp, Shield, Users, Award, BookOpen, Target, Laptop, BarChart, Clock, Zap, X } from "lucide-react";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const detailsRef = useRef(null);

  const services = [
    {
      id: "ecommerce",
      icon: ShoppingBag,
      title: "E-Commerce Solutions",
      description:
        "Selling curated merchandise, books, and lifestyle products across U.S. marketplaces. We handle everything from product sourcing to fulfillment.",
      features: [
        "Product Curation",
        "Marketplace Management",
        "Order Fulfillment",
      ],
      gradient: "from-violet-500 to-purple-500",
      lightGradient: "from-violet-100 to-purple-100",
      iconBg: "from-violet-400 to-purple-400",
      checkColor: "text-violet-500",
      linkColor: "text-violet-700 hover:text-violet-800",
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
    },
  ];

  const ecommerceDetails = {
    mainFeatures: [
      {
        icon: Package,
        title: "Premium Product Curation",
        description: "Hand-picked merchandise, books, and lifestyle products sourced from trusted suppliers"
      },
      {
        icon: Globe,
        title: "Multi-Marketplace Management",
        description: "Active presence on Amazon, eBay, Walmart, and other leading U.S. e-commerce platforms"
      },
      {
        icon: TrendingUp,
        title: "Advanced Inventory Systems",
        description: "Real-time stock tracking and automated reordering for seamless operations"
      },
      {
        icon: Shield,
        title: "Quality Assurance",
        description: "Rigorous quality checks and authentic product verification processes"
      }
    ],
    benefits: [
      "Fast and reliable shipping across USA",
      "30-day money-back guarantee",
      "24/7 customer support",
      "Competitive pricing",
      "Exclusive product launches",
      "Loyalty rewards program"
    ],
    stats: [
      { number: "10,000+", label: "Products Delivered" },
      { number: "2-3 Days", label: "Average Delivery" },
      { number: "5,000+", label: "Happy Customers" },
      { number: "4.8/5", label: "Customer Rating" }
    ]
  };

  const trainingDetails = {
    mainFeatures: [
      {
        icon: Target,
        title: "SEO & SEM Mastery",
        description: "Learn to rank websites and run profitable paid campaigns on Google & social media"
      },
      {
        icon: BarChart,
        title: "Analytics & Data",
        description: "Master Google Analytics, conversion tracking, and data-driven decision making"
      },
      {
        icon: Users,
        title: "Social Media Marketing",
        description: "Build engaged communities and create viral content across all major platforms"
      },
      {
        icon: Laptop,
        title: "E-commerce Setup",
        description: "Launch and scale your own online store from scratch to success"
      }
    ],
    benefits: [
      "Live interactive sessions with industry experts",
      "Real-world projects and case studies",
      "1-on-1 mentorship and guidance",
      "Industry-recognized certifications",
      "Lifetime access to course materials",
      "Job placement assistance"
    ],
    courseInfo: [
      { icon: Clock, label: "Duration", value: "3-6 months intensive" },
      { icon: BookOpen, label: "Format", value: "Live + Recorded" },
      { icon: Users, label: "Batch Size", value: "Max 25 students" },
      { icon: Award, label: "Certificate", value: "Industry recognized" }
    ]
  };

  useEffect(() => {
    if (selectedService && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedService]);

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId === selectedService ? null : serviceId);
  };

  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-violet-50/20 to-rose-50/20 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] z-0">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(139, 92, 246, 0.3)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
            }}
            className="w-full h-full"
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full py-10">
          {/* Title */}
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

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full cursor-pointer"
                >
                  <div>
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${service.iconBg} rounded-xl flex items-center justify-center shadow-md mb-4`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
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
                  <button
                    className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-gradient-to-r ${service.lightGradient} rounded-full ${service.linkColor} transition hover:shadow-md`}
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      {selectedService && (
        <section ref={detailsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="mb-8 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-auto block"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {selectedService === "ecommerce" && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  E-Commerce Solutions - Complete Details
                </h3>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {ecommerceDetails.mainFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="bg-violet-50 rounded-xl p-6">
                        <Icon className="w-8 h-8 text-violet-600 mb-4" />
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Benefits */}
                  <div className="bg-gray-50 rounded-xl p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Why Choose Our E-Commerce?</h4>
                    <ul className="space-y-3">
                      {ecommerceDetails.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {ecommerceDetails.stats.map((stat, index) => (
                      <div key={index} className="bg-violet-100 rounded-xl p-6 text-center">
                        <div className="text-2xl font-bold text-violet-700">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedService === "training" && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Digital Marketing Training & Consultancy - Complete Details
                </h3>
                
                {/* Training Modules */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {trainingDetails.mainFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="bg-rose-50 rounded-xl p-6">
                        <Icon className="w-8 h-8 text-rose-600 mb-4" />
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Benefits */}
                  <div className="bg-gray-50 rounded-xl p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">What You'll Get</h4>
                    <ul className="space-y-3">
                      {trainingDetails.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Course Info */}
                  <div className="bg-rose-50 rounded-xl p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Course Format</h4>
                    <div className="space-y-4">
                      {trainingDetails.courseInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                          <div key={index} className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-rose-600" />
                            <span className="text-gray-700">
                              <strong>{info.label}:</strong> {info.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default ServicesSection;