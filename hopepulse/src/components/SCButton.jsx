import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const SCButton = ({ textColor, buttonColor, hoverColor, heartColor }) => {
  // Construct the class names using template literals
  const buttonClassName = `px-2 py-2 text-${textColor} bg-${buttonColor} font-semibold text-xl shadow-md hover:bg-${hoverColor} flex rounded-md`;

  return (
    <div className="flex justify-start mt-16">
      <Link to='/campaign'>
        <button className={buttonClassName}>
          Start Your Campaign<span className="ml-4"><HeartIcon className={`h-8 w-8 text-${heartColor}`} /></span>
        </button>
      </Link>
    </div>
  );
};

export default SCButton;
