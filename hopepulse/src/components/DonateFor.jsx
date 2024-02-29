import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const DonateFor = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative flex justify-center lg:justify-end lg:flex-1 w-80 h-16 " ref={dropdownRef}>
      <button onClick={toggleDropdown} className="text-grayish hover:text-grayish flex items-center ml-12 text-2xl">
        <span className='mr-2 hover:text-primary'>Donate for</span> {showDropdown ? <ChevronUpIcon className="h-5 w-5 inline-block" /> : <ChevronDownIcon className="h-5 w-5 inline-block" />}
      </button>
      {showDropdown && (
        <div className="absolute top-12 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
          <Link to="/medical" className="block px-4 py-2 text-md text-grayish hover:bg-secondary"> <img src='../images/healthcare.png' alt="Health Icon" className="w-4 -mt-1 mr-2 h-4 inline-block" />Medical</Link>
          <Link to="/animals" className="block px-4 py-2 text-md text-grayish hover:bg-secondary"> <img src='../images/track.png' alt="pet Icon" className="w-4 -mt-1 mr-2 h-4 inline-block" />Animals</Link>
          <Link to="/artsAndCulture" className="block px-4 py-2 text-md text-grayish hover:bg-secondary"> <img src='../images/art1.png' alt="Art Icon" className="w-4 -mt-1 mr-2 h-4 inline-block" />Arts and Culture</Link>
          <Link to="/environment" className="block px-4 py-2 text-md text-grayish hover:bg-secondary"> <img src='../images/planet-earth.png' alt="environment Icon" className="w-4 -mt-1 mr-2 h-4 inline-block" />Environment</Link>
          <Link to="/emergency" className="block px-4 py-2 text-md text-grayish hover:bg-secondary"> <img src='../images/alarm1.png' alt="aemergency Icon" className="w-4 -mt-1 mr-2 h-4 inline-block" />Emergency</Link>
          <Link to="/education" className="block px-4 py-2 text-md text-grayish hover:bg-secondary"> <img src='../images/graduation-cap.png' alt="Cap Icon" className="w-4 -mt-1 mr-2 h-4 inline-block" />Education</Link>
        </div>
      )}
      </div>
      </>
  );
};

export default DonateFor;
