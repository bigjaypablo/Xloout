import React, { useState } from 'react';
import { ArrowRight, Check, Loader2, Twitter, Wallet } from 'lucide-react';
import XConnectModal from '../../../components/XConnectModal';
import WalletConnectModal from '../../../components/WalletConnectModal';

const ConnectStep = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  buttonText, 
  onConnect,
  isConnected,
  connectionType // 'twitter' or 'wallet'
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleConnect = () => {
    setShowModal(true);
  };

  const handleModalSuccess = (userData) => {
    onConnect(userData);
    setShowModal(false);
  };

  return (
    <div className="text-center">
      <div className={`
        w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6
        ${isConnected ? 'bg-green-50' : 'bg-blue-50'}
      `}>
        <Icon size={32} className={isConnected ? 'text-green-600' : color} />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-3 max-w-md mx-auto">{description}</p>

      {isConnected ? (
        <div className="mt-8 inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full font-medium">
          <Check size={18} /> Connected Successfully
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="mt-8 bg-blue-600 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-blue-600/20"
        >
          {connectionType === 'twitter' ? <Twitter size={18} /> : <Wallet size={18} />}
          {buttonText} <ArrowRight size={16} />
        </button>
      )}

      {isConnected && (
        <div className="mt-4 text-sm text-gray-500">
          <span className="inline-block animate-bounce mr-1">✓</span> Ready to continue
        </div>
      )}

      {/* Connection Modals */}
      {connectionType === 'twitter' && (
        <XConnectModal 
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSuccess={handleModalSuccess}
        />
      )}
      {connectionType === 'wallet' && (
        <WalletConnectModal 
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSuccess={handleModalSuccess}
        />
      )}
    </div>
  );
};

export default ConnectStep;
