import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full">
        
        <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8 text-gray-200">
            We'd love to hear from you! Reach out via the form or directly
            through our contact info.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-cyan-300" />
              <span>support@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-cyan-300" />
              <span>+880 123 456 789</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-cyan-300" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        <div className="p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-xl hover:bg-cyan-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
