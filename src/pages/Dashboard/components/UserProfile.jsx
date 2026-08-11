import React from 'react';
import { Twitter, CheckCircle, Calendar, Users, User } from 'lucide-react';

const UserProfile = ({ userData }) => {
  if (!userData) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {userData.profileImageUrl ? (
            <img 
              src={userData.profileImageUrl} 
              alt={userData.name}
              className="w-20 h-20 rounded-full border-2 border-gray-200"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <User size={32} className="text-blue-600" />
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl font-bold text-gray-900">{userData.name}</h2>
            {userData.verified && (
              <CheckCircle size={16} className="text-blue-500" />
            )}
            <span className="text-sm text-gray-500">@{userData.username}</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{userData.followersCount.toLocaleString()} followers</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>Joined {new Date(userData.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Twitter size={14} className="text-blue-400" />
              <span>X connected</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-6 text-sm">
          <div>
            <div className="text-xs text-gray-500">Tweets</div>
            <div className="font-semibold">{userData.tweetCount.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Following</div>
            <div className="font-semibold">{userData.followingCount.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Listed</div>
            <div className="font-semibold">{userData.listedCount.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
