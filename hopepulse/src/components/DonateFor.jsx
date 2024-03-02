import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const DonateFor = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track the selected category
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
        <div className="absolute top-10 mt-2 py-2 w-48 bg-white shadow-xl">
          <Link to="/category/medical" className={`block px-4 py-2 text-md text-grayish hover:bg-secondary ${selectedCategory === 'medical' ? 'font-bold' : ''}`}
              onClick={() => setSelectedCategory('medical')}><img src='../images/healthcare.png' alt="Health Icon" className="w-6 -mt-1 mr-2 h-6 inline-block" />Medical</Link>
          <Link to="/category/animals" className={`block px-4 py-2 text-md text-grayish hover:bg-secondary ${selectedCategory === 'animals' ? 'font-bold' : ''}`}
              onClick={() => setSelectedCategory('animals')}> <img src='../images/track.png' alt="pet Icon" className="w-6 -mt-1 mr-2 h-6 inline-block" />Animals</Link>
          <Link to="/category/arts and culture" className={`block px-4 py-2 text-md text-grayish hover:bg-secondary ${selectedCategory === 'arts and culture' ? 'font-bold' : ''}`}
              onClick={() => setSelectedCategory('arts and culture')}> <img src='../images/art1.png' alt="Art Icon" className="w-6 -mt-1 mr-2 h-6 inline-block" />Arts and Culture</Link>
          <Link to="/category/environment" className={`block px-4 py-2 text-md text-grayish hover:bg-secondary ${selectedCategory === 'environment' ? 'font-bold' : ''}`}
              onClick={() => setSelectedCategory('environment')}> <img src='../images/planet-earth.png' alt="environment Icon" className="w-6 -mt-1 mr-2 h-6 inline-block" />Environment</Link>
          <Link to="/category/emergency" className={`block px-4 py-2 text-md text-grayish hover:bg-secondary ${selectedCategory === 'emergency' ? 'font-bold' : ''}`}
              onClick={() => setSelectedCategory('emergency')}> <img src='../images/alarm1.png' alt="aemergency Icon" className="w-6 -mt-1 mr-2 h-6 inline-block" />Emergency</Link>
          <Link to="/category/education" className={`block px-4 py-2 text-md text-grayish hover:bg-secondary ${selectedCategory === 'education' ? 'font-bold' : ''}`}
              onClick={() => setSelectedCategory('education')}> <img src='../images/graduation-cap.png' alt="Cap Icon" className="w-6 -mt-1 mr-2 h-6 inline-block" />Education</Link>
        </div>
      )}
      </div>
      </>
  );
};

export default DonateFor;
