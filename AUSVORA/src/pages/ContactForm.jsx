// ContactForm.jsx
import React from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="animate-slideUp animation-delay-200">
      <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
        <form
          action="https://formspree.io/f/xzzgnaqw"
          method="POST"
          className="space-y-6"
        >
          {/* Optional hidden fields */}
          <input type="hidden" name="_subject" value="New message from Ausvora Website" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thanks for reaching out! We'll get back to you soon."
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
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
                required
                className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell us more about your requirements..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
          >
            Send Message
            <Send className="w-5 h-5 ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
