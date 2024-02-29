import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const UserAvatarDropdown = ({ userName, logout }) => {
  const navigate = useNavigate(); // Initialize navigate function
  const [showDropdown, setShowDropdown] = useState(false); // Initialize showDropdown with false
  const dropdownRef = useRef(null); // Ref to the dropdown element

  // Functions for handling profile click and logout
  const handleProfileClick = () => {
    // Redirect to profile page when profile is clicked
    navigate('/profile');
  };

  const handleLogout = () => {
    // Perform logout actions here, such as clearing local storage, etc.
    logout(); // Call the logout function passed from Navbar
    // Redirect to login page after logout
    navigate('/login');
  };

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center focus:outline-none">
        <img src='../images/avatar-placeholder.png' alt="User Avatar" className="w-8 h-8 rounded-full" />
        <span className="ml-2">{userName}</span>
      </button>
      {showDropdown && ( // Display the dropdown only if showDropdown is true
        <div className="absolute right-0 mt-px w-40 bg-fafafa border rounded-lg shadow-lg">
          <button onClick={handleProfileClick} className="block w-full py-2 px-4 text-left text-grayish hover:bg-secondary">
          <img src='../images/resume.png' alt="Resume Icon" className="w-4 -ml-2 h-4 inline-block" /> profile
          </button>
          <button onClick={handleLogout} className="block w-full py-2 px-4 text-left text-grayish hover:bg-red-300">
          <img src='../images/logout.png' alt="Logout Icon" className="w-4 h-4 -ml-2 inline-block" /> Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatarDropdown;
