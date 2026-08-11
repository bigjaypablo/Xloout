import React from 'react';
import { AlertCircle, Users, Eye, BarChart3 } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    { icon: Users, title: 'Fake Engagement', desc: '42% of influencers have bot followers' },
    { icon: Eye, title: 'Vanity Metrics', desc: 'Likes and follows don\'t equal influence' },
    { icon: BarChart3, title: 'No Real Data', desc: 'No reliable way to measure true impact' },
    { icon: AlertCircle, title: 'Guesswork', desc: 'Creator discovery is based on assumptions' },
  ];

  const solutions = [
    { title: 'Social', desc: 'Authentic engagement analysis' },
    { title: 'On-chain', desc: 'Wallet reputation verification' },
    { title: 'Audience', desc: 'Quality & relevance scoring' },
    { title: 'Impact', desc: 'Campaign performance tracking' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problem Column */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">The problem</span>
            <h2 className="text-3xl font-bold mt-3 text-gray-900">Vanity metrics are broken</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Follower count and likes don't tell the full story. Fake engagement, inactive audiences, 
              and zero conversion ability — projects waste millions on influencers who can't drive results.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {problems.map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <item.icon size={20} className="text-blue-600 mb-2" />
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Column */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">The solution</span>
            <h2 className="text-3xl font-bold mt-3 text-gray-900">𝕏-Kloout Score — real reputation</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We combine social signals, on-chain activity, and audience quality into one verified score. 
              Projects discover creators who actually move the needle.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {solutions.map((item, i) => (
                <div key={i} className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="font-bold text-xl text-blue-600">{item.title}</div>
                  <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
