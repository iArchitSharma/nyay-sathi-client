// authService.js
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'token';

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const login = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:8081/auth/login', credentials);
    const token = response.data.token;

    // Decode the token to get the user's information
    const decodedToken = jwt_decode(token);

    // Verify that 'username' is included in the payload
    if (decodedToken && decodedToken.username && decodedToken.type) {
      const username = decodedToken.username;
      const type = decodedToken.type;

      console.log(type);

      // Store the username in local storage along with the token
      localStorage.setItem('username', username);
      localStorage.setItem('type', type);
    } else {
      // Handle the case where 'username' is missing in the token payload
      // You can log an error or handle it as needed.
    }

    setToken(token);
    return token;
  } catch (error) {
    throw error;
  }
};


export const logout = () => {
  removeToken();
  // Remove the stored username
  localStorage.removeItem('username');
};

// Add token validation and refresh logic as needed
