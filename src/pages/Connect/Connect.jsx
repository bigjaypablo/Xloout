import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Twitter, Wallet, Award, Check, Sparkles } from 'lucide-react';
import ConnectStep from './components/ConnectStep';
import SuccessScreen from './components/SuccessScreen';
import XConnectionService from '../../services/xConnection';
import WalletConnectionService from '../../services/walletConnection';

// Custom 𝕏 icon
const XIcon = ({ size = 20, className = "" }) => (
  <span className={`font-bold ${className}`} style={{ fontSize: size }}>
    𝕏
  </span>
);

const Connect = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isConnected, setIsConnected] = useState({
    twitter: false,
    wallet: false
  });
  const [userData, setUserData] = useState({
    twitter: null,
    wallet: null
  });

  const steps = [
    {
      title: 'Connect X',
      description: 'Link your X account to analyze your social presence',
      icon: XIcon,
      color: 'text-blue-600',
      isComplete: isConnected.twitter
    },
    {
      title: 'Connect Wallet',
      description: 'Verify your on-chain reputation and activity',
      icon: Wallet,
      color: 'text-purple-600',
      isComplete: isConnected.wallet
    },
    {
      title: 'Generate Score',
      description: 'AI analyzes your influence and creates your score',
      icon: Award,
      color: 'text-green-600',
      isComplete: false
    }
  ];

  const handleConnectTwitter = (data) => {
    setIsConnected(prev => ({ ...prev, twitter: true }));
    setUserData(prev => ({ ...prev, twitter: data }));
    setTimeout(() => {
      setCurrentStep(1);
    }, 500);
  };

  const handleConnectWallet = (data) => {
    setIsConnected(prev => ({ ...prev, wallet: true }));
    setUserData(prev => ({ ...prev, wallet: data }));
    setTimeout(() => {
      setCurrentStep(2);
    }, 500);
  };

  const handleGenerateScore = () => {
    setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (currentStep === 3) {
    return <SuccessScreen userData={userData} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-xs font-medium text-blue-700 mb-4">
            <Sparkles size={14} /> Get Started
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Connect Your Accounts
          </h1>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            Link your X account and wallet to discover your <span className="font-semibold text-black">𝕏-Kloout</span> Score
          </p>
        </div>

        <div className="flex justify-between items-center mb-12 max-w-md mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'}
                ${step.isComplete ? 'bg-green-600' : ''}
                transition-all duration-500
              `}>
                {step.isComplete ? (
                  <Check size={20} />
                ) : typeof step.icon === 'function' ? (
                  <step.icon size={20} />
                ) : (
                  <step.icon size={20} />
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`
                  w-16 h-0.5 mx-2
                  ${index < currentStep ? 'bg-blue-600' : 'bg-gray-200'}
                  transition-all duration-500
                `} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          {currentStep === 0 && (
            <ConnectStep
              title="Connect Your X Account"
              description="We'll analyze your social presence, engagement quality, and audience authenticity."
              icon={XIcon}
              color="text-blue-600"
              buttonText="Connect X"
              onConnect={handleConnectTwitter}
              isConnected={isConnected.twitter}
              connectionType="twitter"
            />
          )}

          {currentStep === 1 && (
            <ConnectStep
              title="Connect Your Wallet"
              description="Verify your on-chain reputation, NFT holdings, and DeFi activity."
              icon={Wallet}
              color="text-purple-600"
              buttonText="Connect Wallet"
              onConnect={handleConnectWallet}
              isConnected={isConnected.wallet}
              connectionType="wallet"
            />
          )}

          {currentStep === 2 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 animate-pulse">
                <Award size={36} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Generate Your Score</h2>
              <p className="text-gray-600 mt-3 max-w-md mx-auto">
                Our AI will analyze your social signals and on-chain activity to create your personalized <span className="font-semibold text-black">𝕏-Kloout</span> Score.
              </p>
              <button
                onClick={handleGenerateScore}
                className="mt-8 bg-blue-600 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-blue-600/20"
              >
                Generate Score <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-6 max-w-md mx-auto">
          <button
            onClick={handleBack}
            className={`text-sm font-medium flex items-center gap-1 transition ${
              currentStep > 0 ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 cursor-not-allowed'
            }`}
            disabled={currentStep === 0}
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span className="text-sm text-gray-400">
            Step {currentStep + 1} of 3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Connect;
