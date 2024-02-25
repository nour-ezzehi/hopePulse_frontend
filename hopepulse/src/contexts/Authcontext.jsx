import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
  // State to manage the user data
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  // Function to handle user login
  const login = (credentials) => {
    return new Promise((resolve, reject) => {
      axios.post('http://127.0.0.1:8000/api/login/', credentials)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          setUser(token); // Or set the user state with user data if it's included in the response
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

  // Run checkAuth on component mount
  useEffect(() => {
    
    checkAuth();
  }, []);

  // The context value that will be provided to components
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
