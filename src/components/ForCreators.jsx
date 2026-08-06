import React from 'react';
import { TrendingUp, Award, ShieldCheck, Sparkles, ArrowRight, Users, Star } from 'lucide-react';

const ForCreators = () => {
  const benefits = [
    { icon: TrendingUp, title: 'Stand out', desc: 'Rank among the top Web3 creators in your ecosystem' },
    { icon: Award, title: 'Unlock opportunities', desc: 'Get discovered by projects looking for real influence' },
    { icon: ShieldCheck, title: 'Build reputation', desc: 'Earn badges and grow your influence over time' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">For creators</span>
            <h2 className="text-3xl font-bold mt-3 text-gray-900">Prove your influence. Get discovered.</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Stop being judged by follower count. Show projects your real impact with a verified Xloout Score.
            </p>
            <div className="space-y-4 mt-6">
              {benefits.map((item, i) => (
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
              Join as a creator <ArrowRight size={16} />
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-yellow-500" />
              <span className="font-semibold text-gray-900">Creator benefits</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm text-gray-600">Verified Score</span>
                <span className="font-semibold text-blue-600">92/100</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm text-gray-600">Rank</span>
                <span className="font-semibold text-blue-600">Top 3%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm text-gray-600">Badges earned</span>
                <span className="font-semibold text-blue-600">12</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm text-gray-600">Discovery views</span>
                <span className="font-semibold text-blue-600">1.4k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCreators;
