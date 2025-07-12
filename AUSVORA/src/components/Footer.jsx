import React from "react";
import {
  ShoppingBag,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "E-Commerce Solutions", href: "/services/ecommerce", icon: ShoppingBag },
    { name: "Digital Marketing Training", href: "/services/training", icon: GraduationCap }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-3xl font-bold">
                  <span className="text-white">Aus</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">vora</span>
                </h3>
              </div>
              <p className="text-gray-400 text-sm">DIGITAL EXCELLENCE</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering e-commerce success and digital marketing excellence. 
                Your trusted partner in the digital journey.
              </p>
              {/* Social icons removed */}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {service.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300">Call us</p>
                    <a href="tel:+918652608396" className="text-white hover:text-purple-400 transition-colors">
                      +91 8652608396
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300">Email us</p>
                    <a href="mailto:ausvoraofficial@gmail.com" className="text-white hover:text-pink-400 transition-colors text-sm">
                      ausvoraofficial@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">USA</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Ausvora. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
