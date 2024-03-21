import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
  // State to manage the user data
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const login = (credentials) => {
    return new Promise((resolve, reject) => {
      axios.post('http://127.0.0.1:8000/api/login/', credentials)
        .then(response => {
          const userData = response.data.user;
          console.log(userData)
          localStorage.setItem('token', response.data.token);
          setUser(userData);
          checkAuth(); // Call checkAuth to update user state immediately after login
          resolve(true);
        })
        .catch(error => {
          console.error('Login failed:', error);
          reject(error);
        });
    });
  };
  // Function to handle user logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    
  };

  // Function to check if the user is authenticated (e.g., on page load)
  const checkAuth = async () => {
    try {
      
      const token = localStorage.getItem('token');

      if (token) {
        const response = await axios.get('http://127.0.0.1:8000/api/check-auth/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
      }
    } catch (error) {
      console.error('Authentication check failed:', error.message);
      if (error.response && error.response.status === 401) {
        // Clear user state and local storage if token is invalid
        setUser(null);
        localStorage.removeItem('token');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    
    checkAuth();
  }, []);

  const contextValue = {
    user,
    login,
    logout,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
