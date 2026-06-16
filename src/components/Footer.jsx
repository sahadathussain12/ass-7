import React from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
          <footer className="bg-[#1f5b4b] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo & Description */}
        <h1 className="text-6xl font-bold mb-4">KeenKeeper</h1>

        <p className="text-gray-300 max-w-3xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Social Links</h3>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
            >
              <FaYoutube size={20} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;