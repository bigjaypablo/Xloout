// X (Twitter) OAuth 2.0 Authentication Service

const X_API_BASE = 'https://api.twitter.com/2';
const X_AUTH_BASE = 'https://twitter.com/i/oauth2';

// Get these from your X Developer Portal
const CLIENT_ID = import.meta.env.VITE_X_CLIENT_ID || 'your_client_id_here';
const CLIENT_SECRET = import.meta.env.VITE_X_CLIENT_SECRET || 'your_client_secret_here';
const REDIRECT_URI = import.meta.env.VITE_X_REDIRECT_URI || 'http://localhost:5173/auth/x/callback';

// Scopes we need for Xloout
const SCOPES = [
  'tweet.read',
  'tweet.write',
  'users.read',
  'follows.read',
  'offline.access'
];

export const XAuthService = {
  // Initiate OAuth 2.0 flow - redirect to X
  initiateAuth: () => {
    const authUrl = new URL(`${X_AUTH_BASE}/authorize`);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('client_id', CLIENT_ID);
    authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.append('scope', SCOPES.join(' '));
    authUrl.searchParams.append('state', generateState());
    authUrl.searchParams.append('code_challenge', generateCodeChallenge());
    authUrl.searchParams.append('code_challenge_method', 'plain');
    
    // Store state for verification
    localStorage.setItem('x_oauth_state', authUrl.searchParams.get('state'));
    
    // Redirect to X
    window.location.href = authUrl.toString();
  },

  // Exchange code for access token
  exchangeCode: async (code) => {
    const response = await fetch(`${X_AUTH_BASE}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
      },
      body: new URLSearchParams({
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code_verifier: 'challenge'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to exchange code for token');
    }

    const data = await response.json();
    
    // Store tokens
    localStorage.setItem('x_access_token', data.access_token);
    localStorage.setItem('x_refresh_token', data.refresh_token);
    localStorage.setItem('x_token_expires', Date.now() + (data.expires_in * 1000));
    
    return data;
  },

  // Get user info from X API
  getUserInfo: async () => {
    const token = localStorage.getItem('x_access_token');
    if (!token) throw new Error('No access token');
    
    const response = await fetch(`${X_API_BASE}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to get user info');
    }
    
    return await response.json();
  },

  // Refresh token
  refreshToken: async () => {
    const refreshToken = localStorage.getItem('x_refresh_token');
    if (!refreshToken) throw new Error('No refresh token');
    
    const response = await fetch(`${X_AUTH_BASE}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
      },
      body: new URLSearchParams({
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }
    
    const data = await response.json();
    localStorage.setItem('x_access_token', data.access_token);
    localStorage.setItem('x_refresh_token', data.refresh_token);
    localStorage.setItem('x_token_expires', Date.now() + (data.expires_in * 1000));
    
    return data;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem('x_access_token');
    const expires = localStorage.getItem('x_token_expires');
    if (!token || !expires) return false;
    return Date.now() < parseInt(expires);
  },

  // Logout
  logout: () => {
    localStorage.removeItem('x_access_token');
    localStorage.removeItem('x_refresh_token');
    localStorage.removeItem('x_token_expires');
    localStorage.removeItem('x_oauth_state');
    localStorage.removeItem('x_user_data');
  },

  // Get stored user
  getStoredUser: () => {
    const user = localStorage.getItem('x_user_data');
    return user ? JSON.parse(user) : null;
  },

  // Store user data
  storeUser: (userData) => {
    localStorage.setItem('x_user_data', JSON.stringify(userData));
  }
};

// Helper functions
function generateState() {
  return Math.random().toString(36).substring(2, 15);
}

function generateCodeChallenge() {
  return 'challenge'; // For demo - use proper PKCE in production
}

export default XAuthService;
