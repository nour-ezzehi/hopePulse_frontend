import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './Authcontext'; // Import the AuthContext

export const UserInformationsContext = createContext();

export const UserInformationsProvider = ({ children }) => {
  const { user } = useContext(AuthContext); // Get the current user from AuthContext

  // State to store user information
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserInformation = async () => {
      if (!user) {
        return;
      }
      
      setLoading(true); 
      try {
        if (user) {
          const token = localStorage.getItem('token');
          const response = await axios.get(`http://127.0.0.1:8000/api/users/${user.id}/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserInfo(response.data); // Set user information
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInformation();
  }, []); // Re-run effect whenever the user changes

  return (
    <UserInformationsContext.Provider value={{userInfo, loading}}>
      {children}
    </UserInformationsContext.Provider>
  );
};
