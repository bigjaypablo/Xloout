// X (Twitter) Connection Service
export const XConnectionService = {
  initiateConnection: async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
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

  checkConnection: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const stored = localStorage.getItem('xloout_x_connection');
    if (stored) {
      return JSON.parse(stored);
    }
    return null;
  },

  disconnect: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    localStorage.removeItem('xloout_x_connection');
    return { success: true };
  },

  storeConnection: (data) => {
    localStorage.setItem('xloout_x_connection', JSON.stringify(data));
  },

  getStoredConnection: () => {
    const stored = localStorage.getItem('xloout_x_connection');
    return stored ? JSON.parse(stored) : null;
  },

  getTimeline: async () => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      posts: [
        { id: 1, content: 'Just discovered my X-Kloout score!', date: '2024-01-15', engagement: 342 },
        { id: 2, content: 'Web3 builders are changing the world', date: '2024-01-14', engagement: 256 },
        { id: 3, content: 'On-chain reputation matters', date: '2024-01-13', engagement: 189 }
      ]
    };
  }
};

export default XConnectionService;
