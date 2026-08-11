// X (Twitter) OAuth 2.0 Authentication Service

const X_API_BASE = 'https://api.twitter.com/2';
const X_AUTH_BASE = 'https://twitter.com/i/oauth2';

// Auto-detect environment
const isProduction = window.location.hostname !== 'localhost' && 
                     window.location.hostname !== '127.0.0.1';

const CLIENT_ID = import.meta.env.VITE_X_CLIENT_ID;
const REDIRECT_URI = isProduction 
  ? 'https://bigjaypablo.github.io/Xloout/auth/x/callback'
  : 'http://localhost:5173/auth/x/callback';

const SCOPES = ['tweet.read', 'users.read', 'offline.access'];

export const XAuthService = {
  initiateAuth: () => {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);
    
    localStorage.setItem('x_oauth_state', state);
    localStorage.setItem('x_code_verifier', codeVerifier);

    const authUrl = new URL(`${X_AUTH_BASE}/authorize`);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('client_id', CLIENT_ID);
    authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.append('scope', SCOPES.join(' '));
    authUrl.searchParams.append('state', state);
    authUrl.searchParams.append('code_challenge', codeChallenge);
    authUrl.searchParams.append('code_challenge_method', 'plain');

    window.location.href = authUrl.toString();
  },

  exchangeCode: async (code) => {
    const codeVerifier = localStorage.getItem('x_code_verifier');
    
    try {
      const response = await fetch(`${X_AUTH_BASE}/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          code: code,
          grant_type: 'authorization_code',
          client_id: CLIENT_ID,
          redirect_uri: REDIRECT_URI,
          code_verifier: codeVerifier || 'challenge'
        })
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Token exchange error:', error);
        throw new Error('Failed to exchange code for token');
      }

      const data = await response.json();
      
      localStorage.setItem('x_access_token', data.access_token);
      localStorage.setItem('x_refresh_token', data.refresh_token);
      localStorage.setItem('x_token_expires', Date.now() + (data.expires_in * 1000));
      
      return data;
    } catch (error) {
      console.error('Exchange error:', error);
      throw error;
    }
  },

  getUserInfo: async () => {
    const token = localStorage.getItem('x_access_token');
    if (!token) throw new Error('No access token');
    
    const response = await fetch(`${X_API_BASE}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      const error = await response.text();
      console.error('User info error:', error);
      throw new Error('Failed to get user info');
    }
    
    const data = await response.json();
    
    const userData = {
      id: data.data.id,
      name: data.data.name,
      username: data.data.username,
      profileImageUrl: data.data.profile_image_url,
      followersCount: data.data.public_metrics?.followers_count || 0,
      followingCount: data.data.public_metrics?.following_count || 0,
      tweetCount: data.data.public_metrics?.tweet_count || 0,
      listedCount: data.data.public_metrics?.listed_count || 0,
      verified: data.data.verified || false,
      protected: data.data.protected || false,
      createdAt: data.data.created_at
    };
    
    localStorage.setItem('x_user_data', JSON.stringify(userData));
    return data;
  },

  isAuthenticated: () => {
    const token = localStorage.getItem('x_access_token');
    const expires = localStorage.getItem('x_token_expires');
    if (!token || !expires) return false;
    return Date.now() < parseInt(expires);
  },

  logout: () => {
    localStorage.removeItem('x_access_token');
    localStorage.removeItem('x_refresh_token');
    localStorage.removeItem('x_token_expires');
    localStorage.removeItem('x_oauth_state');
    localStorage.removeItem('x_code_verifier');
    localStorage.removeItem('x_user_data');
    window.location.href = '/';
  },

  getStoredUser: () => {
    const user = localStorage.getItem('x_user_data');
    return user ? JSON.parse(user) : null;
  },

  storeUser: (userData) => {
    localStorage.setItem('x_user_data', JSON.stringify(userData));
  }
};

function generateState() {
  return Math.random().toString(36).substring(2, 15);
}

function generateCodeVerifier() {
  return 'challenge';
}

function generateCodeChallenge(verifier) {
  return verifier;
}

export default XAuthService;
