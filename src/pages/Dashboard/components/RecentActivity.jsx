import React from 'react';
import { Activity, Twitter, Wallet, Award } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      icon: Twitter,
      color: 'text-blue-500 bg-blue-50',
      text: 'X account connected',
      time: '2 hours ago'
    },
    {
      icon: Wallet,
      color: 'text-purple-500 bg-purple-50',
      text: 'Wallet verified',
      time: '5 hours ago'
    },
    {
      icon: Award,
      color: 'text-green-500 bg-green-50',
      text: 'Score updated to 92',
      time: '1 day ago'
    },
    {
      icon: Activity,
      color: 'text-orange-500 bg-orange-50',
      text: 'New badge earned',
      time: '3 days ago'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-gray-700">Recent Activity</h3>
        <span className="text-xs text-gray-400">History</span>
      </div>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`p-2 rounded-full ${item.color}`}>
              <item.icon size={14} className={item.color.replace('bg-', 'text-')} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{item.text}</p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 pt-4 border-t border-gray-100 text-sm text-blue-600 hover:text-blue-800 transition font-medium">
        View all activity →
      </button>
    </div>
  );
};

export default RecentActivity;
