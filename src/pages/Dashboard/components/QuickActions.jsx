import React from 'react';
import { Twitter, Wallet, RefreshCw, Share2, Link, Sparkles } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: Twitter, label: 'Connect X', color: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
    { icon: Wallet, label: 'Connect Wallet', color: 'bg-purple-50 text-purple-600 hover:bg-purple-100' },
    { icon: RefreshCw, label: 'Refresh Score', color: 'bg-green-50 text-green-600 hover:bg-green-100' },
    { icon: Share2, label: 'Share Profile', color: 'bg-orange-50 text-orange-600 hover:bg-orange-100' },
    { icon: Link, label: 'Copy Link', color: 'bg-gray-50 text-gray-600 hover:bg-gray-100' },
    { icon: Sparkles, label: 'Get Badges', color: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all hover:scale-105 ${action.color}`}
          >
            <action.icon size={20} />
            <span className="text-xs font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
