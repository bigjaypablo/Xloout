import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const sections = [
    {
      title: 'Product',
      links: ['How It Works', 'Score', 'Creators', 'Projects']
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Contact']
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Cookies']
    }
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-extrabold">
              <span className="text-black">𝕏loout</span>
            </div>
            <p className="text-sm text-gray-500 mt-3">The Web3 influence intelligence platform.</p>
            <div className="flex gap-4 mt-4">
              <Twitter size={18} className="text-gray-400 hover:text-blue-600 cursor-pointer transition" />
              <Github size={18} className="text-gray-400 hover:text-blue-600 cursor-pointer transition" />
              <Linkedin size={18} className="text-gray-400 hover:text-blue-600 cursor-pointer transition" />
              <Mail size={18} className="text-gray-400 hover:text-blue-600 cursor-pointer transition" />
            </div>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <div className="font-semibold text-sm text-gray-900 mb-4">{section.title}</div>
              <div className="space-y-2 text-sm text-gray-500">
                {section.links.map((link) => (
                  <div key={link} className="hover:text-blue-600 cursor-pointer transition">
                    {link}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-xs text-gray-400 text-center">
          <span>&copy; 2026 𝕏loout. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
