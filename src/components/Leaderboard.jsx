import React from 'react';
import { Trophy, Medal, TrendingUp, Star, ArrowRight } from 'lucide-react';

const Leaderboard = () => {
  const leaders = [
    { name: '@CryptoNomad', score: 92, rank: 1, change: '+12%' },
    { name: '@Web3Builder', score: 88, rank: 2, change: '+8%' },
    { name: '@DeFiDegen', score: 85, rank: 3, change: '+5%' },
    { name: '@NFTArtist', score: 82, rank: 4, change: '+3%' },
    { name: '@BlockchainDev', score: 79, rank: 5, change: '+7%' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Top creators</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-900">Leaderboard</h2>
          <p className="text-gray-600 mt-2">The most influential Web3 creators ranked by Xloout Score</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-3xl mx-auto">
          <div className="grid grid-cols-12 gap-2 px-6 py-3 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
            <div className="col-span-2">Rank</div>
            <div className="col-span-5">Creator</div>
            <div className="col-span-3 text-right">Score</div>
            <div className="col-span-2 text-right">Change</div>
          </div>
          
          {leaders.map((item) => (
            <div key={item.rank} className="grid grid-cols-12 gap-2 px-6 py-4 border-b border-gray-100 items-center hover:bg-blue-50/50 transition">
              <div className="col-span-2 flex items-center gap-2">
                {item.rank === 1 && <Trophy size={16} className="text-yellow-500" />}
                {item.rank === 2 && <Medal size={16} className="text-gray-400" />}
                {item.rank === 3 && <Medal size={16} className="text-amber-600" />}
                {item.rank > 3 && <span className="text-sm text-gray-400">#{item.rank}</span>}
              </div>
              <div className="col-span-5 font-medium text-sm text-gray-900">{item.name}</div>
              <div className="col-span-3 text-right font-bold text-blue-600">{item.score}</div>
              <div className="col-span-2 text-right text-xs text-green-600 flex items-center justify-end gap-1">
                <TrendingUp size={12} /> {item.change}
              </div>
            </div>
          ))}
          
          <div className="px-6 py-4 text-center border-t border-gray-100">
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition flex items-center justify-center gap-1 mx-auto">
              View full rankings <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
