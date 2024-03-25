import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserInformationsContext } from '../contexts/UserInformationsContext';

const UserAvatarDropdown = ({ userName, logout }) => {
  const { userInfo } = useContext(UserInformationsContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
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
          <Link to={userInfo && userInfo.profile_complete ? "ProfilePage" : "CompleteProfile"}>
            <button className="block w-full py-2 px-4 text-left text-grayish hover:bg-secondary">
              <img src="../images/resume.png" alt="Resume Icon" className="w-4 -ml-2 h-4 inline-block" />
              <span className="ml-2">{userInfo && userInfo.profile_complete ? "Profile" : <span className="text-red-500 font-bold">Profile !!</span>}</span>
            </button>
          </Link>
          {userInfo.role == 'campaign_creator' && (
          <Link to='/myCampaigns'>
            <button className="block w-full py-2 px-4 text-left text-grayish hover:bg-primary">
              <span className='ml-2'> My Campaigns </span>
            </button>
          </Link>
      )}
          <button onClick={handleLogout} className="block w-full py-2 px-4 text-left text-grayish hover:bg-red-300">
          <img src='../images/logout.png' alt="Logout Icon" className="w-4 h-4 -ml-2 inline-block" /> <span className='ml-2'> Sign Out </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatarDropdown;
