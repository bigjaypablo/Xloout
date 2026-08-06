import React from 'react';

const MetricsBreakdown = ({ metrics }) => {
  const metricItems = [
    { label: 'Audience Quality', value: metrics.audienceQuality, color: 'bg-blue-600' },
    { label: 'Content Impact', value: metrics.contentImpact, color: 'bg-purple-600' },
    { label: 'On-chain Rep', value: metrics.onChainRep, color: 'bg-green-600' },
    { label: 'Trust Score', value: metrics.trustScore, color: 'bg-orange-600' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-gray-700">Score Breakdown</h3>
        <span className="text-xs text-gray-400">Details</span>
      </div>
      
      <div className="space-y-5">
        {metricItems.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700">{item.label}</span>
              <span className="font-semibold text-gray-900">{item.value}%</span>
            </div>
            <div className="metric-bar-bg">
              <div 
                className={`metric-bar-fill ${item.color}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            Quality
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-purple-600"></span>
            Impact
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-green-600"></span>
            On-chain
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-orange-600"></span>
            Trust
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsBreakdown;
