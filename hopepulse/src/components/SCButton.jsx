import React from 'react';
import PropTypes from 'prop-types';
import { HeartIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserInformationsContext } from '../contexts/UserInformationsContext';

const SCButton = ({ textColor, heartColor, buttonColor}) => {
  const { userInfo } = useContext(UserInformationsContext);
  const buttonClassName = `px-2 py-2 text-${textColor} bg-${buttonColor} font-semibold text-xl shadow-md flex rounded-md hover:bg-grayish`;

  if (!userInfo || userInfo.role === 'donor') {
    return null;
  }

  return (
    <div className="flex justify-start mt-16">
      <Link to='/campaignsPage'>
        <button className={buttonClassName}>
          Start Your Campaign<span className="ml-4"><HeartIcon className={`h-8 w-8 text-${heartColor}`} /></span>
        </button>
      </Link>
    </div>
  );
};

// PropTypes
SCButton.propTypes = {
  textColor: PropTypes.string.isRequired,
  heartColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};

export default SCButton;
