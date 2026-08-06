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
      const params = new URLSearchParams(location.hash.substring(1));
      // GitHub Pages uses hash-based routing
      const code = params.get('code');
      const state = params.get('state');
      const storedState = localStorage.getItem('x_oauth_state');

      // For regular browser URL (non-hash)
      const urlParams = new URLSearchParams(location.search);
      const urlCode = urlParams.get('code');
      const urlState = urlParams.get('state');

      const finalCode = code || urlCode;
      const finalState = state || urlState;

      // Verify state
      if (finalState !== storedState) {
        setStatus('error');
        setError('Invalid state parameter - possible CSRF attack');
        return;
      }

      if (!finalCode) {
        setStatus('error');
        setError('No authorization code received');
        return;
      }

      try {
        // Exchange code for token
        const tokenData = await XAuthService.exchangeCode(finalCode);
        
        // Get user info
        const userData = await XAuthService.getUserInfo();
        XAuthService.storeUser(userData.data);
        
        setStatus('success');
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } catch (err) {
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
            <h2 className="text-xl font-bold text-gray-900">Connected Successfully!</h2>
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
