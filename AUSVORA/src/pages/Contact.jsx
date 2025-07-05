import React, { useEffect, useState } from "react";
import { Phone, Mail, Send, ArrowDown, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

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
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      @keyframes scaleIn {
        0% { transform: scale(0.9); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
      .animate-slideUp { animation: slideUp 1s ease-out; }
      .animate-slideDown { animation: slideDown 1s ease-out; }
      .animate-float { animation: float 3s ease-in-out infinite; }
      .animate-scaleIn { animation: scaleIn 0.5s ease-out; }
      .animation-delay-200 { animation-delay: 0.2s; animation-fill-mode: both; }
      .animation-delay-400 { animation-delay: 0.4s; animation-fill-mode: both; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.05),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight animate-slideDown">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600">
              Get in Touch
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-light animate-fadeIn animation-delay-200">
            We're here to help you succeed in the digital economy
          </p>
          <button 
            onClick={scrollToNextSection}
            className="mt-16 animate-float"
            aria-label="Scroll to contact information"
          >
            <ArrowDown className="w-8 h-8 text-gray-400 hover:text-purple-600 transition-colors" />
          </button>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-slideDown">
              Direct Contact
            </h2>
            <p className="text-xl text-gray-600 animate-fadeIn animation-delay-200">
              Reach out to us through your preferred channel
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group animate-slideUp">
              <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
                <a href="tel:+918652608396" className="text-2xl text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  +91 8652 608 396
                </a>
                <p className="text-gray-500 mt-3">Monday - Saturday, 9 AM - 6 PM IST</p>
              </div>
            </div>
            <div className="group animate-slideUp animation-delay-200">
              <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
                <a href="mailto:ausvoraofficial@gmail.com" className="text-xl text-gray-700 hover:text-blue-600 transition-colors font-medium break-all">
                  ausvoraofficial@gmail.com
                </a>
                <p className="text-gray-500 mt-3">We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-slideUp">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We’d love to hear from you! Whether you have a question about our products, want to enroll in our digital marketing training, or need tailored consultancy for your online business — our team is here to help.
              </p>
            </div>

            <div className="animate-slideUp animation-delay-200">
              {showSuccess && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 animate-scaleIn">
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <p className="font-medium">Thank you! We'll be in touch soon.</p>
                  </div>
                </div>
              )}

              <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What Are You Looking For? *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="ecommerce">E-Commerce Product Inquiry</option>
                      <option value="training">Digital Marketing Training</option>
                      <option value="consultancy">Consultancy Services</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
