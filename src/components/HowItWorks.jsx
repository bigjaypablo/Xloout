import React from 'react';
import { Twitter, Wallet, BarChart3, Award, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Twitter,
      title: 'Connect X',
      desc: 'Link your X account to import your social presence',
      color: 'text-blue-600'
    },
    {
      icon: Wallet,
      title: 'Connect Wallet',
      desc: 'Verify your on-chain reputation and activity',
      color: 'text-blue-600'
    },
    {
      icon: BarChart3,
      title: 'AI Analyzes',
      desc: 'Our engine processes social + on-chain signals',
      color: 'text-blue-600'
    },
    {
      icon: Award,
      title: 'Get Score',
      desc: 'Receive your verified 𝕏-Kloout influence score',
      color: 'text-blue-600'
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Simple steps</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-900">Get your 𝕏-Kloout Score in 5 minutes</h2>
          <p className="text-gray-600 mt-3">Connect, analyze, and discover your true Web3 influence.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-12 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                  <step.icon size={28} className={step.color} />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900">{step.title}</div>
                  <div className="text-xs text-gray-500 mt-2">{step.desc}</div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 text-gray-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
