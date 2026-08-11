import React from 'react';
import { ArrowRight, Sparkles, BadgeCheck, TrendingUp, Award, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom 𝕏 icon component
const XIcon = ({ size = 18, className = "" }) => (
  <span className={`font-bold ${className}`} style={{ fontSize: size }}>
    𝕏
  </span>
);

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-xs font-medium text-blue-700 mb-6">
            <Sparkles size={14} /> Web3 influence intelligence
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Your Web3 Influence <br />
            <span className="text-blue-600">Has A Score.</span>
          </h1>
          <p className="text-lg text-gray-600 mt-6 max-w-lg leading-relaxed">
            Connect your X account and wallet to discover your influence, reputation,
            and ranking among Web3 creators. Real impact, not vanity.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/connect">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-600/25">
                Check My 𝕏-Kloout Score <ArrowRight size={18} />
              </button>
            </Link>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              How it works
            </button>
          </div>
          <div className="flex items-center gap-8 mt-10 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              12k+ creators
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              340+ projects
            </div>
          </div>
        </div>

        {/* Right Column - Score Card */}
        <div className="relative">
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-blue-50 p-2 rounded-full">
                  <XIcon size={18} className="text-blue-600" />
                </div>
                <span className="font-semibold">@CryptoNomad</span>
                <BadgeCheck size={16} className="text-blue-500" />
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">Top 3%</span>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <div>
                <div className="text-4xl font-bold text-blue-600">92</div>
                <div className="text-xs text-gray-500">Influence Score</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp size={14} /> +8%
                </div>
                <div className="text-xs text-gray-500">this month</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <div className="text-xs text-gray-500">Audience Quality</div>
                <div className="font-semibold">95</div>
                <div className="metric-bar-bg mt-1">
                  <div className="metric-bar-fill bg-blue-600" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Content Impact</div>
                <div className="font-semibold">90</div>
                <div className="metric-bar-bg mt-1">
                  <div className="metric-bar-fill bg-blue-600" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">On-chain Rep</div>
                <div className="font-semibold">88</div>
                <div className="metric-bar-bg mt-1">
                  <div className="metric-bar-fill bg-blue-600" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Trust Score</div>
                <div className="font-semibold">94</div>
                <div className="metric-bar-bg mt-1">
                  <div className="metric-bar-fill bg-blue-600" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="badge-pill"><Award size={12} /> Solana Pioneer</span>
              <span className="badge-pill"><Zap size={12} /> Growth Catalyst</span>
              <span className="badge-pill"><ShieldCheck size={12} /> Web3 Thought Leader</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
