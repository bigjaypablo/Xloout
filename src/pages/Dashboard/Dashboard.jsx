import React, { useState, useEffect } from 'react';
import { 
  Award, 
  TrendingUp, 
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
  Activity,
  LogOut,
  User,
  Mail,
  CheckCircle,
  ExternalLink,
  Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScoreCard from './components/ScoreCard';
import MetricsBreakdown from './components/MetricsBreakdown';
import ActivityChart from './components/ActivityChart';
import QuickActions from './components/QuickActions';
import RecentActivity from './components/RecentActivity';
import StatsOverview from './components/StatsOverview';
import UserProfile from './components/UserProfile';
import XAuthService from '../../services/xAuth';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserData = async () => {
      console.log('🔍 Dashboard: Loading user data...');
      
      const isAuth = XAuthService.isAuthenticated();
      console.log('  Is authenticated:', isAuth);
      
      if (!isAuth) {
        console.log('  Not authenticated, redirecting to connect...');
        navigate('/connect');
        return;
      }

      let user = XAuthService.getStoredUser();
      console.log('  Stored user data:', user ? 'Found' : 'Not found');
      
      if (!user) {
        console.log('  Fetching user data from API...');
        try {
          await XAuthService.getUserInfo();
          user = XAuthService.getStoredUser();
          console.log('  User data fetched:', user ? 'Success' : 'Failed');
        } catch (error) {
          console.error('Failed to fetch user:', error);
          navigate('/connect');
          return;
        }
      }

      if (user) {
        console.log('  User data loaded:', user.username);
        setUserData(user);
      } else {
        console.log('  No user data available');
        navigate('/connect');
        return;
      }

      setIsLoading(false);
    };

    loadUserData();
  }, [navigate]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await XAuthService.getUserInfo();
      const updatedUser = XAuthService.getStoredUser();
      setUserData(updatedUser);
    } catch (error) {
      console.error('Refresh failed:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to disconnect your X account?')) {
      XAuthService.logout();
      navigate('/');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No user data found. Please try again.</p>
          <button 
            onClick={() => navigate('/connect')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            Go to Connect
          </button>
        </div>
      </div>
    );
  }

  const scoreData = {
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
      totalPosts: userData.tweetCount || 342,
      followers: userData.followersCount || 12500
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="text-xl font-extrabold text-black">𝕏-Kloout</div>
              <div className="hidden sm:block text-sm text-gray-400">/ Dashboard</div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleRefresh}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                disabled={isRefreshing}
              >
                <RefreshCw size={18} className={`${isRefreshing ? 'animate-spin' : ''} text-gray-600`} />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Share2 size={16} />
                Share Profile
              </button>
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-red-50 rounded-full transition-colors text-gray-600 hover:text-red-600"
                title="Disconnect X account"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserProfile userData={userData} />
        <StatsOverview stats={scoreData.stats} />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <ScoreCard 
              score={scoreData.score}
              rank={scoreData.rank}
              rankPosition={scoreData.rankPosition}
              change={scoreData.change}
              badges={scoreData.badges}
            />
          </div>
          <div className="lg:col-span-2">
            <MetricsBreakdown metrics={scoreData.metrics} />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <ActivityChart />
          </div>
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>

        <div className="mt-6">
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
