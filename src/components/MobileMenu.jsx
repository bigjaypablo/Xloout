import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const navLinks = ['How It Works', 'Score', 'Creators', 'Projects', 'Rankings'];

  if (!isOpen) return null;

  const handleNavClick = (link) => {
    onClose();
    if (link === 'How It Works') {
      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
    } else if (link === 'Score') {
      navigate('/dashboard');
    } else if (link === 'Creators') {
      navigate('/creators');
    } else if (link === 'Projects') {
      navigate('/projects');
    } else if (link === 'Rankings') {
      navigate('/leaderboard');
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed top-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-out bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" onClick={onClose} className="text-xl font-extrabold text-black">
              𝕏-Kloout
            </Link>
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          <nav className="py-8">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className="text-2xl font-medium text-gray-800 hover:text-blue-600 transition-colors block w-full text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="py-6 border-t border-gray-200/50">
            <Link to="/connect" onClick={onClose}>
              <button className="bg-blue-600 text-white w-full py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                Check My Score <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
