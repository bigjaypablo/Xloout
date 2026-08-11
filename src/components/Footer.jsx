import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = [
    {
      title: 'Product',
      links: [
        { name: 'How It Works', action: () => scrollToSection('how-it-works') },
        { name: 'Score', path: '/dashboard' },
        { name: 'Creators', path: '/creators' },
        { name: 'Projects', path: '/projects' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', path: '/privacy' },
        { name: 'Terms', path: '/terms' },
        { name: 'Cookies', path: '/cookies' }
      ]
    }
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-extrabold">
              <span className="text-black">𝕏-Kloout</span>
            </Link>
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
                  link.path ? (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block hover:text-blue-600 cursor-pointer transition"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      key={link.name}
                      onClick={link.action}
                      className="block hover:text-blue-600 cursor-pointer transition w-full text-left"
                    >
                      {link.name}
                    </button>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-xs text-gray-400 text-center">
          <span>&copy; 2026 𝕏-Kloout. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
