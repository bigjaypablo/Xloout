import React from 'react';
import { X, ArrowRight } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const navLinks = ['How It Works', 'Score', 'Creators', 'Projects', 'Rankings'];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Menu Panel - Slides from top with glass effect */}
      <div className="fixed top-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-out bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with close button */}
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-extrabold text-black">𝕏loout</span>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-8">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-2xl font-medium text-gray-800 hover:text-blue-600 transition-colors block"
                    onClick={onClose}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom CTA */}
          <div className="py-6 border-t border-gray-200/50">
            <button className="bg-blue-600 text-white w-full py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
              Check My Score <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
