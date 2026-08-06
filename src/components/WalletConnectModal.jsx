import React, { useState } from 'react';
import { X, Wallet, Check, AlertCircle, Loader2, ChevronRight } from 'lucide-react';
import WalletConnectionService from '../services/walletConnection';

const WalletConnectModal = ({ isOpen, onClose, onSuccess }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('idle');

  if (!isOpen) return null;

  const wallets = [
    { name: 'MetaMask', icon: '🦊', color: 'bg-orange-50 text-orange-600' },
    { name: 'Coinbase Wallet', icon: '🔵', color: 'bg-blue-50 text-blue-600' },
    { name: 'WalletConnect', icon: '💎', color: 'bg-purple-50 text-purple-600' },
    { name: 'Phantom', icon: '👻', color: 'bg-purple-50 text-purple-600' }
  ];

  const handleConnect = async (walletName) => {
    setIsConnecting(true);
    setError(null);
    setConnectionStatus('connecting');

    try {
      const result = await WalletConnectionService.connect();
      
      if (result) {
        setConnectionStatus('success');
        setTimeout(() => {
          onSuccess(result);
          onClose();
        }, 1500);
      }
    } catch (err) {
      setError(err.message || 'Failed to connect wallet');
      setConnectionStatus('error');
    } finally {
      setIsConnecting(false);
    }
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
          <div className="w-20 h-20 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
            {connectionStatus === 'connecting' ? (
              <Loader2 size={40} className="text-purple-600 animate-spin" />
            ) : connectionStatus === 'success' ? (
              <Check size={40} className="text-green-600" />
            ) : connectionStatus === 'error' ? (
              <AlertCircle size={40} className="text-red-600" />
            ) : (
              <Wallet size={40} className="text-purple-600" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            {connectionStatus === 'connecting' && 'Connecting...'}
            {connectionStatus === 'success' && 'Wallet Connected! 🎉'}
            {connectionStatus === 'error' && 'Connection Failed'}
            {connectionStatus === 'idle' && 'Connect Wallet'}
          </h2>

          <p className="text-gray-600 mt-2 text-sm">
            {connectionStatus === 'connecting' && 'Please confirm in your wallet...'}
            {connectionStatus === 'success' && 'Your wallet is now connected'}
            {connectionStatus === 'error' && error || 'Something went wrong'}
            {connectionStatus === 'idle' && 'Choose your wallet to connect'}
          </p>

          {connectionStatus === 'idle' && (
            <div className="mt-6 space-y-2">
              {wallets.map((wallet) => (
                <button
                  key={wallet.name}
                  onClick={() => handleConnect(wallet.name)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all group`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{wallet.icon}</span>
                    <span className="font-medium text-gray-900">{wallet.name}</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-400 group-hover:text-purple-600 transition" />
                </button>
              ))}
            </div>
          )}

          {connectionStatus === 'error' && (
            <button
              onClick={() => setConnectionStatus('idle')}
              className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
            >
              Try Again
            </button>
          )}

          <p className="mt-4 text-xs text-gray-400">
            {connectionStatus === 'idle' && 'We never store your private keys'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletConnectModal;
