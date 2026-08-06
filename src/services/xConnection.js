// X (Twitter) Connection Service
// This simulates the OAuth flow for connecting X accounts

export const XConnectionService = {
  // Simulate initiating OAuth flow
  initiateConnection: async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, this would redirect to X OAuth
    // For demo, we'll simulate a successful connection
    return {
      success: true,
      user: {
        id: '123456789',
        username: 'CryptoNomad',
        name: 'Crypto Nomad',
        avatar: 'https://pbs.twimg.com/profile_images/...',
        followers: 12500,
        following: 342,
        verified: true,
        joinDate: '2021-03-15'
      },
      accessToken: 'mock_access_token_xyz123',
      refreshToken: 'mock_refresh_token_abc456'
    };
  },

  // Simulate checking connection status
  checkConnection: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check if we have a stored connection
    const stored = localStorage.getItem('xloout_x_connection');
    if (stored) {
      return JSON.parse(stored);
    }
    return null;
  },

  // Simulate disconnecting
  disconnect: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    localStorage.removeItem('xloout_x_connection');
    return { success: true };
  },

  // Store connection data
  storeConnection: (data) => {
    localStorage.setItem('xloout_x_connection', JSON.stringify(data));
  },

  // Get stored connection
  getStoredConnection: () => {
    const stored = localStorage.getItem('xloout_x_connection');
    return stored ? JSON.parse(stored) : null;
  },

  // Simulate getting user timeline (for demo)
  getTimeline: async () => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      posts: [
        { id: 1, content: 'Just discovered my Xloout score! 🚀', date: '2024-01-15', engagement: 342 },
        { id: 2, content: 'Web3 builders are changing the world', date: '2024-01-14', engagement: 256 },
        { id: 3, content: 'On-chain reputation matters', date: '2024-01-13', engagement: 189 }
      ]
    };
  }
};

export default XConnectionService;
