// Wallet Connection Service
// Simulates connecting a crypto wallet

export const WalletConnectionService = {
  // Simulate connecting a wallet
  connect: async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In production, this would use ethers.js or web3.js
    // For demo, we'll simulate a successful connection
    const walletData = {
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      chainId: 1, // Ethereum mainnet
      chainName: 'Ethereum',
      balance: '2.45 ETH',
      ensName: 'cryptonomad.eth',
      transactions: [
        { hash: '0x123...', date: '2024-01-15', type: 'Send', amount: '0.5 ETH' },
        { hash: '0x456...', date: '2024-01-14', type: 'Receive', amount: '1.2 ETH' },
        { hash: '0x789...', date: '2024-01-13', type: 'Swap', amount: '0.3 ETH' }
      ]
    };
    
    // Store connection
    localStorage.setItem('xloout_wallet_connection', JSON.stringify(walletData));
    return walletData;
  },

  // Simulate checking wallet connection
  checkConnection: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const stored = localStorage.getItem('xloout_wallet_connection');
    return stored ? JSON.parse(stored) : null;
  },

  // Simulate disconnecting
  disconnect: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    localStorage.removeItem('xloout_wallet_connection');
    return { success: true };
  },

  // Get stored connection
  getStoredConnection: () => {
    const stored = localStorage.getItem('xloout_wallet_connection');
    return stored ? JSON.parse(stored) : null;
  },

  // Simulate getting transaction history
  getTransactionHistory: async () => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return {
      transactions: [
        { hash: '0x123...', date: '2024-01-15', type: 'Send', amount: '0.5 ETH', status: 'Confirmed' },
        { hash: '0x456...', date: '2024-01-14', type: 'Receive', amount: '1.2 ETH', status: 'Confirmed' },
        { hash: '0x789...', date: '2024-01-13', type: 'Swap', amount: '0.3 ETH', status: 'Pending' }
      ]
    };
  }
};

export default WalletConnectionService;
