import React from 'react';
import { Check, Award, TrendingUp, ArrowRight, Twitter, Wallet, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessScreen = ({ userData }) => {
  const twitterUsername = userData?.twitter?.username || '@CryptoNomad';
  const walletAddress = userData?.wallet?.address || '••••7890';
  const walletEns = userData?.wallet?.ensName || null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        {/* Success Animation */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
            <Check size={48} className="text-white" />
          </div>
          
          <h1 className="text-4xl font-extrabold text-gray-900">
            Your <span className="text-black">𝕏loout</span> Score is Ready!
          </h1>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            We've analyzed your social presence and on-chain activity to create your personalized influence score.
          </p>
        </div>

        {/* Score Display */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-full">
                <Award size={24} className="text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Xloout Score</div>
                <div className="text-3xl font-bold text-blue-600">92</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Rank</div>
              <div className="font-semibold text-gray-900">Top 3%</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-xs text-gray-500">Audience Quality</div>
              <div className="font-semibold mt-1">95%</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-xs text-gray-500">Content Impact</div>
              <div className="font-semibold mt-1">90%</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-xs text-gray-500">On-chain Rep</div>
              <div className="font-semibold mt-1">88%</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-xs text-gray-500">Trust Score</div>
              <div className="font-semibold mt-1">94%</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Twitter size={16} className="text-blue-400" />
              {twitterUsername}
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Wallet size={16} className="text-purple-400" />
              {walletEns || walletAddress}
            </div>
            {walletEns && (
              <>
                <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User size={16} className="text-green-400" />
                  {walletEns}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link to="/dashboard" className="flex-1">
            <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
              View Dashboard <ArrowRight size={18} />
            </button>
          </Link>
          <button className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
            Share Score
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
