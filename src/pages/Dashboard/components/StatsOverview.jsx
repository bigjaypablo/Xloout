import React from 'react';
import { Users, Eye, MessageSquare, BarChart3 } from 'lucide-react';

const StatsOverview = ({ stats }) => {
  const statItems = [
    { icon: Eye, label: 'Total Views', value: stats.totalViews },
    { icon: Users, label: 'Followers', value: stats.followers },
    { icon: MessageSquare, label: 'Engagement Rate', value: stats.engagementRate },
    { icon: BarChart3, label: 'Total Posts', value: stats.totalPosts }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-blue-50 rounded-full">
              <item.icon size={16} className="text-blue-600" />
            </div>
            <span className="text-xs text-gray-400">+12%</span>
          </div>
          <div className="mt-3">
            <div className="text-xl font-bold text-gray-900">{item.value}</div>
            <div className="text-xs text-gray-500">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
