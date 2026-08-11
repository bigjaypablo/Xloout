import React, { useState } from 'react';
import { X, Check, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import XAuthService from '../services/xAuth';

// Custom 𝕏 icon
const XIcon = ({ size = 20, className = "" }) => (
  <span className={`font-bold ${className}`} style={{ fontSize: size }}>
    𝕏
  </span>
);

const XConnectModal = ({ isOpen, onClose, onSuccess }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('idle');

  if (!isOpen) return null;

  const handleConnect = async () => {
    setIsConnecting(true);
    setError(null);
    setConnectionStatus('connecting');

    try {
      // Check if already authenticated
      if (XAuthService.isAuthenticated()) {
        const userData = XAuthService.getStoredUser();
        if (userData) {
          setConnectionStatus('success');
          setTimeout(() => {
            onSuccess({ 
              username: userData.username,
              name: userData.name,
              id: userData.id 
            });
            onClose();
          }, 1500);
          return;
        }
      }

      // Initiate OAuth flow
      console.log('🔑 Initiating X OAuth flow...');
      XAuthService.initiateAuth();
      
      // Note: The component will unmount on redirect
      // The callback page will handle the rest
    } catch (err) {
      console.error('❌ X Connect error:', err);
      setError(err.message || 'Failed to connect X account');
      setConnectionStatus('error');
      setIsConnecting(false);
    }
  };

  const handleRetry = () => {
    setConnectionStatus('idle');
    setError(null);
    setIsConnecting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>

        <div className="text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
            {connectionStatus === 'connecting' ? (
              <Loader2 size={40} className="text-blue-600 animate-spin" />
            ) : connectionStatus === 'success' ? (
              <Check size={40} className="text-green-600" />
            ) : connectionStatus === 'error' ? (
              <AlertCircle size={40} className="text-red-600" />
            ) : (
              <XIcon size={40} className="text-blue-600" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            {connectionStatus === 'connecting' && 'Connecting...'}
            {connectionStatus === 'success' && 'Connected!'}
            {connectionStatus === 'error' && 'Connection Failed'}
            {connectionStatus === 'idle' && 'Connect X'}
          </h2>

          <p className="text-gray-600 mt-2 text-sm">
            {connectionStatus === 'connecting' && 'Redirecting to X for authorization...'}
            {connectionStatus === 'success' && 'Your X account is now connected'}
            {connectionStatus === 'error' && (
              <span className="text-red-600">
                {error || 'Something went wrong. Please try again.'}
              </span>
            )}
            {connectionStatus === 'idle' && 'Link your X account to analyze your social presence'}
          </p>

          {connectionStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-50 rounded-lg text-left text-sm text-red-700">
              <p className="font-semibold">Troubleshooting tips:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Make sure you're logged into X</li>
                <li>Check your internet connection</li>
                <li>Try again in a few moments</li>
                <li>If on mobile, try using Chrome browser</li>
              </ul>
            </div>
          )}

          {connectionStatus === 'idle' && (
            <>
              <div className="mt-6 space-y-3 text-left">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Read your tweets and engagement</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Analyze your audience quality</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Track content impact</p>
                </div>
              </div>

              <button
                onClick={handleConnect}
                disabled={isConnecting}
                className="mt-6 bg-black hover:bg-gray-800 text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 w-full shadow-lg shadow-black/20"
              >
                <XIcon size={18} className="text-white" />
                {isConnecting ? 'Connecting...' : 'Continue with X'}
              </button>

              <p className="mt-4 text-xs text-gray-400">
                You'll be redirected to X to authorize access
              </p>
            </>
          )}

          {connectionStatus === 'error' && (
            <button
              onClick={handleRetry}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default XConnectModal;
