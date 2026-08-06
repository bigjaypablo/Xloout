import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <Sparkles size={32} className="mx-auto mb-4 text-yellow-400" />
            <h2 className="text-3xl sm:text-4xl font-bold">Discover your influence</h2>
            <p className="text-blue-100 mt-3 max-w-md mx-auto">
              Join 12,000+ Web3 creators who've already claimed their Xloout Score.
            </p>
            <Link to="/connect">
              <button className="mt-8 bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-2xl">
                Get Your Xloout Score <ArrowRight size={18} />
              </button>
            </Link>
            <div className="mt-4 text-xs text-blue-200">
              No credit card required <span className="mx-2">•</span> Free score <span className="mx-2">•</span> 2 min setup
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
