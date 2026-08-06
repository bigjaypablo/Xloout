import React, { useState } from 'react';
import { 
  Award, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Users, 
  Twitter, 
  Wallet,
  Sparkles,
  Clock,
  ChevronRight,
  RefreshCw,
  Share2,
  Calendar,
  Activity
} from 'lucide-react';
import ScoreCard from './components/ScoreCard';
import MetricsBreakdown from './components/MetricsBreakdown';
import ActivityChart from './components/ActivityChart';
import QuickActions from './components/QuickActions';
import RecentActivity from './components/RecentActivity';
import StatsOverview from './components/StatsOverview';

const Dashboard = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Demo data
  const userData = {
    username: '@CryptoNomad',
    score: 92,
    rank: 'Top 3%',
    rankPosition: 342,
    change: '+8%',
    badges: [
      { name: 'Solana Pioneer', icon: '🚀' },
      { name: 'Growth Catalyst', icon: '🔥' },
      { name: 'Web3 Thought Leader', icon: '🧠' },
      { name: 'Early Adopter', icon: '⚡' }
    ],
    metrics: {
      audienceQuality: 95,
      contentImpact: 90,
      onChainRep: 88,
      trustScore: 94
    },
    stats: {
      totalViews: '1.4k',
      engagementRate: '87%',
      totalPosts: '342',
      followers: '12.5k'
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="text-xl font-extrabold text-black">𝕏loout</div>
              <div className="hidden sm:block text-sm text-gray-400">/ Dashboard</div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleRefresh}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <RefreshCw size={18} className={`${isRefreshing ? 'animate-spin' : ''} text-gray-600`} />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                Share Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, <span className="text-blue-600">{userData.username}</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Here's your current influence overview
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <Clock size={14} /> Last updated: Today
            </span>
          </div>
        </div>

        {/* Stats Overview */}
        <StatsOverview stats={userData.stats} />

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Left Column - Score Card */}
          <div className="lg:col-span-1">
            <ScoreCard 
              score={userData.score}
              rank={userData.rank}
              rankPosition={userData.rankPosition}
              change={userData.change}
              badges={userData.badges}
            />
          </div>

          {/* Right Column - Metrics */}
          <div className="lg:col-span-2">
            <MetricsBreakdown metrics={userData.metrics} />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <ActivityChart />
          </div>
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
