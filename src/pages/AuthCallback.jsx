import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import XAuthService from '../services/xAuth';

const AuthCallback = () => {
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log('🔐 AuthCallback mounted');
        console.log('📍 Location:', location.pathname + location.search);
        
        // Get the code from the URL
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        const state = params.get('state');
        const errorParam = params.get('error');
        const errorDescription = params.get('error_description');

        console.log('📝 Code received:', code ? 'Yes' : 'No');
        console.log('📝 State received:', state ? 'Yes' : 'No');

        // Check for errors from X
        if (errorParam) {
          console.error('❌ X OAuth Error:', errorParam, errorDescription);
          setStatus('error');
          setError(errorDescription || 'Authentication failed');
          return;
        }

        // Verify state
        const storedState = localStorage.getItem('x_oauth_state');
        console.log('📝 Stored state:', storedState);
        
        if (state && state !== storedState) {
          console.error('❌ State mismatch');
          setStatus('error');
          setError('Invalid state parameter - possible CSRF attack');
          return;
        }

        if (!code) {
          console.error('❌ No code found in URL');
          setStatus('error');
          setError('No authorization code received');
          return;
        }

        console.log('✅ Authorization code received, exchanging for token...');

        // Exchange code for token
        const tokenData = await XAuthService.exchangeCode(code);
        console.log('✅ Token exchange successful');
        console.log('  Access Token:', tokenData.access_token ? 'Received' : 'Missing');

        // Get user info
        const userData = await XAuthService.getUserInfo();
        console.log('✅ User data received:', userData.data.username);
        console.log('  User ID:', userData.data.id);
        console.log('  Name:', userData.data.name);
        console.log('  Followers:', userData.data.public_metrics?.followers_count);

        // Store user data explicitly
        const userToStore = {
          id: userData.data.id,
          name: userData.data.name,
          username: userData.data.username,
          profileImageUrl: userData.data.profile_image_url,
          followersCount: userData.data.public_metrics?.followers_count || 0,
          followingCount: userData.data.public_metrics?.following_count || 0,
          tweetCount: userData.data.public_metrics?.tweet_count || 0,
          listedCount: userData.data.public_metrics?.listed_count || 0,
          verified: userData.data.verified || false,
          protected: userData.data.protected || false,
          createdAt: userData.data.created_at
        };
        
        localStorage.setItem('x_user_data', JSON.stringify(userToStore));
        console.log('✅ User data stored in localStorage');

        // Verify it was stored
        const stored = localStorage.getItem('x_user_data');
        console.log('  Stored user data:', stored ? 'Yes' : 'No');

        setStatus('success');

        // Redirect to dashboard after 1.5 seconds
        console.log('🚀 Redirecting to dashboard...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } catch (err) {
        console.error('❌ Auth callback error:', err);
        setStatus('error');
        setError(err.message || 'Authentication failed');
      }
    };

    handleCallback();
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
        {status === 'loading' && (
          <>
            <Loader2 size={48} className="text-blue-600 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900">Authenticating...</h2>
            <p className="text-gray-600 mt-2">Please wait while we verify your X account</p>
          </>
        )}
        
        {status === 'success' && (
          <>
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900">Connected Successfully</h2>
            <p className="text-gray-600 mt-2">Redirecting to your dashboard...</p>
          </>
        )}
        
        {status === 'error' && (
          <>
            <XCircle size={48} className="text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900">Connection Failed</h2>
            <p className="text-gray-600 mt-2">{error}</p>
            <button
              onClick={() => navigate('/connect')}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;
