import React from 'react';
import { Search, Target, Users, ArrowRight, Filter, TrendingUp } from 'lucide-react';

const ForProjects = () => {
  const features = [
    { icon: Target, title: 'Targeted discovery', desc: 'Filter by ecosystem, score, audience quality, and more' },
    { icon: Users, title: 'Campaign impact', desc: 'Measure creator performance with real data' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Preview */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Search size={18} className="text-blue-600" />
                <span className="font-semibold text-gray-900">Find creators</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium">Solana</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium">Influence &gt; 80</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium">Audience quality</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: '@CryptoNomad', score: 92 },
                  { name: '@Web3Builder', score: 88 },
                  { name: '@DeFiDegen', score: 85 },
                ].map((creator, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                    <span className="text-sm font-medium text-gray-900">{creator.name}</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium">Score {creator.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">For projects</span>
            <h2 className="text-3xl font-bold mt-3 text-gray-900">Discover creators who deliver</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Stop guessing. Find verified creators with real influence, quality audiences, and proven impact.
            </p>
            <div className="space-y-4 mt-6">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon size={20} className="text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all hover:scale-105 mt-8 flex items-center gap-2 shadow-lg shadow-blue-600/20">
              Find creators <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForProjects;
