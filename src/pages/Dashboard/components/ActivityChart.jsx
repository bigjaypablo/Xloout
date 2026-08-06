import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const ActivityChart = () => {
  const data = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 72 },
    { day: 'Wed', value: 68 },
    { day: 'Thu', value: 85 },
    { day: 'Fri', value: 78 },
    { day: 'Sat', value: 92 },
    { day: 'Sun', value: 88 }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">Activity History</h3>
          <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-green-600">
          <TrendingUp size={16} />
          <span>+12%</span>
        </div>
      </div>

      <div className="flex items-end justify-between h-40 gap-2">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-blue-600 rounded-t-lg transition-all duration-500 hover:bg-blue-700"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs text-gray-400">{item.day}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-500">
        <span>↕ 65 - 92</span>
        <span>Average: 78</span>
      </div>
    </div>
  );
};

export default ActivityChart;
