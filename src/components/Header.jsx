import React, { useState } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navLinks = ['How It Works', 'Score', 'Creators', 'Projects', 'Rankings'];

  const handleNavClick = (link) => {
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
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Clickable and returns to homepage */}
            <Link 
              to="/" 
              className="text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-black">𝕏-Kloout</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/connect">
                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-600/20">
                  Check My Score <ArrowRight size={16} />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
