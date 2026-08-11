import React from 'react';
import { Award, TrendingUp, TrendingDown, Zap, Flame, Brain, Star } from 'lucide-react';

const ScoreCard = ({ score, rank, rankPosition, change, badges }) => {
  const circumference = 2 * Math.PI * 45;
  const progress = (score / 100) * circumference;
  const isPositive = change.startsWith('+');

  const badgeIcons = {
    'Solana Pioneer': Zap,
    'Growth Catalyst': Flame,
    'Web3 Thought Leader': Brain,
    'Early Adopter': Star
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-700">𝕏-Kloout Score</h3>
        <Award size={20} className="text-blue-600" />
      </div>

      <div className="relative flex items-center justify-center">
        <svg className="w-40 h-40 transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r="45"
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute text-center">
          <div className="text-4xl font-extrabold text-gray-900">{score}</div>
          <div className="text-xs text-gray-500">out of 100</div>
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="text-lg font-semibold text-gray-900">{rank}</div>
        <div className="text-sm text-gray-500">Rank #{rankPosition}</div>
        <div className={`flex items-center justify-center gap-1 mt-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {change} this month
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Badges Earned
        </div>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => {
            const IconComponent = badgeIcons[badge.name] || Award;
            return (
              <span key={index} className="badge-pill">
                <IconComponent size={12} className="mr-1" />
                {badge.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
