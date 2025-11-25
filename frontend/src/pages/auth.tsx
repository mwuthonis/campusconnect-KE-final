const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const auth = {
  // Get access token
  getAccessToken: () => localStorage.getItem('access_token'),
  
  // Get refresh token
  getRefreshToken: () => localStorage.getItem('refresh_token'),
  
  // Get user email
  getUserEmail: () => localStorage.getItem('user_email'),
  
  // Check if user is authenticated
  isAuthenticated: () => !!localStorage.getItem('access_token'),
  
  // Logout user
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_email');
    window.location.href = '/login';
  },
  
  // Refresh access token
  refreshToken: async () => {
    const refreshToken = auth.getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/token/refresh/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (!response.ok) {
        auth.logout();
        throw new Error('Token refresh failed');
      }

      const data = await response.json();
      localStorage.setItem('access_token', data.access);
      return data.access;
    } catch (error) {
      auth.logout();
      throw error;
    }
  },

  // Make authenticated API request
  fetchWithAuth: async (url: string, options: RequestInit = {}) => {
    const token = auth.getAccessToken();
    
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
      },
    });

    // If unauthorized, try to refresh token
    if (response.status === 401) {
      try {
        const newToken = await auth.refreshToken();
        // Retry request with new token
        return fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            'Authorization': `Bearer ${newToken}`,
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        auth.logout();
        throw error;
      }
    }

    return response;
  },
};
export default auth;