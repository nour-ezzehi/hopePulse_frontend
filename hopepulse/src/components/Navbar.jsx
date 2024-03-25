import React, { useState, useRef, useEffect, useContext } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { AuthContext } from '../contexts/Authcontext';
import UserAvatarDropdown from './UserAvatarDropdown'; // Import UserAvatarDropdown component
import { UserInformationsContext } from '../contexts/UserInformationsContext';

const Navbar = ({ scrollToTop }) => {
  const { userInfo } = useContext(UserInformationsContext);
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  useEffect(() => {
    setIsProfileComplete(userInfo && userInfo.profile_complete);
  }, [userInfo]);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0 && !isFixed) {
        setIsFixed(true);
      } else if (offset === 0 && isFixed) {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  return (
    <nav className={`flex justify-center items-center space-x-4 px-4 lg:px-8 ${isFixed ? 'fixed top-0 left-0 right-0 bg-fafafa z-50': 'bg-fafafa rounded-full'}`}>
      <div className="flex lg:flex-1 items-center">
        <Logo scrollToTop={scrollToTop}/>
      </div>
      <div className="flex justify-center lg:justify-end lg:flex-1" ref={dropdownRef}>
        <ul className="flex space-x-4 mr-4">
          <li>
            <button onClick={toggleDropdown} className="text-primary hover:text-grayish flex items-center">
              Donate for {showDropdown ? <ChevronUpIcon className="h-5 w-5 inline-block" /> : <ChevronDownIcon className="h-5 w-5 inline-block" />}
            </button>
            {showDropdown && (
              <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                <a href="#" className="block px-4 py-2 text-md text-grayish hover:bg-secondary"> <img src='../images/heart.png' alt="Heart Icon" className="w-4 -mt-1 mr-2 h-4 inline-block" />Charities</a>
                <Link to="/forIndividualsPage" className="block px-4 py-2 text-md text-grayish hover:bg-secondary"> <img src='../images/donation.png' alt="Heart Icon" className="w-4 -mt-1 mr-2 h-4 inline-block" />Individuals</Link>
              </div>
            )}
          </li>
          <li><Link to="/howitworks" className="text-primary hover:text-grayish">How it works</Link></li>
          <AnchorLink href='#contact'><li><a href="#" className="text-primary hover:text-grayish">Contact</a></li></AnchorLink>
        </ul>
      </div>
      {user ? (
         <div className="flex items-center">
          <div className="relative group py-4">
            <UserAvatarDropdown userName={user.username} logout={logout} />
            <span className="absolute bottom-0 right-0 bg-gray-800 text-white text-xs px-1 py-0.5 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">Account</span>
          </div>
         {userInfo && userInfo.profile_complete ? (
           <span className="text-green-500"></span>
         ) : (
           <span className="text-red-500 text-4xl font-bold"></span>
         )}
       </div>
      ) : (
        <div className="py-3">
          <Link to="/login" className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-grayish hover:bg-secondary flex items-center">
            <span>Log in</span>
            <span className="ml-1" aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
