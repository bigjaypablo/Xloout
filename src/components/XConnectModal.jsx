import React, { useState } from 'react';
import { X, Twitter, Check, AlertCircle, Loader2 } from 'lucide-react';
import XConnectionService from '../services/xConnection';

const XConnectModal = ({ isOpen, onClose, onSuccess }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('idle'); // idle, connecting, success, error

  if (!isOpen) return null;

  const handleConnect = async () => {
    setIsConnecting(true);
    setError(null);
    setConnectionStatus('connecting');

    try {
      // Simulate OAuth flow
      const result = await XConnectionService.initiateConnection();
      
      if (result.success) {
        // Store connection
        XConnectionService.storeConnection(result.user);
        setConnectionStatus('success');
        
        // Notify parent
        setTimeout(() => {
          onSuccess(result.user);
          onClose();
        }, 1500);
      } else {
        throw new Error('Connection failed');
      }
    } catch (err) {
      setError(err.message || 'Failed to connect X account');
      setConnectionStatus('error');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>

        {/* Content */}
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
              <Twitter size={40} className="text-blue-600" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            {connectionStatus === 'connecting' && 'Connecting...'}
            {connectionStatus === 'success' && 'Connected! 🎉'}
            {connectionStatus === 'error' && 'Connection Failed'}
            {connectionStatus === 'idle' && 'Connect X'}
          </h2>

          <p className="text-gray-600 mt-2 text-sm">
            {connectionStatus === 'connecting' && 'Redirecting to X...'}
            {connectionStatus === 'success' && 'Your X account is now connected'}
            {connectionStatus === 'error' && error || 'Something went wrong'}
            {connectionStatus === 'idle' && 'Link your X account to analyze your social presence'}
          </p>

          {connectionStatus === 'idle' && (
            <div className="mt-6 space-y-3 text-left">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">Analyze your social engagement</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">Measure audience quality</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">Track content impact</p>
              </div>
            </div>
          )}

          {connectionStatus === 'error' && (
            <button
              onClick={handleConnect}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          )}

          {connectionStatus === 'idle' && (
            <button
              onClick={handleConnect}
              disabled={isConnecting}
              className="mt-6 bg-black hover:bg-gray-800 text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 w-full shadow-lg shadow-black/20"
            >
              <Twitter size={18} />
              {isConnecting ? 'Connecting...' : 'Continue with X'}
            </button>
          )}

          {connectionStatus === 'idle' && (
            <p className="mt-4 text-xs text-gray-400">
              You'll be redirected to X to authorize access
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default XConnectModal;
