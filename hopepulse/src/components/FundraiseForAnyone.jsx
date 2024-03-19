import React from 'react'
import { Link } from 'react-router-dom'
import { UserInformationsContext } from '../contexts/UserInformationsContext';
import { useContext } from 'react';

const FundraiseForAnyone = () => {
  const { userInfo } = useContext(UserInformationsContext);
  
  if (!userInfo || userInfo.role === 'donor') {
    return null;
  }

  return (
    <div className='my-20 bg-white container mx-auto'>
      <h1 className='text-2xl mb-8 font-bold'>Start your campaign for anyone</h1>
      <ol className="flex flex-col space-y-6">
        <div className='border-b-2 border-third flex flex-row items-center'>
          <div className='mr-20 py-8'>
            <Link to="/campaignsPage">
              <li className='text-2xl font-semibold mb-8 text-grayish'>Fundraise for yourself</li>
              <p className='text-xl font-normal text-grayish'>Start a campaign for yourself, ask for help and let people give you a hand.</p>
            </Link>
          </div>
          <img src='../images/next.png' alt="Next Icon" className="w-8 h-8 ml-auto" /> {/* Use ml-auto to push the icon to the right */}
        </div>
        <div className='border-b-2 border-third flex flex-row items-center'>
          <div className='mr-20 py-8'>
            <Link to="/campaignsPage">
              <li className='text-2xl font-semibold text-grayish mb-8'>Fundraise for someone who needs our help</li>
              <p className='text-xl font-normal text-grayish'>Start a campaign for a beneficiary and raise funds for them.</p>
            </Link>
          </div>
          <img src='../images/next.png' alt="Next Icon" className="w-8 h-8 ml-auto" /> {/* Use ml-auto to push the icon to the right */}
        </div>
        <div className='border-b-2 border-third flex flex-row items-center'>
          <div className='mr-20 py-8'>
            <li className='text-2xl font-semibold text-grayish mb-8'>Fundraise for charity</li>
            <p className='text-xl font-normal text-grayish'><a href="#contact" className='underline hover:text-primary'>Contact us </a>if u have a charity.</p>
          </div>
          <img src='../images/next.png' alt="Next Icon" className="w-8 h-8 ml-auto" /> {/* Use ml-auto to push the icon to the right */}
        </div>
      </ol>
    </div>
  )
}

export default FundraiseForAnyone
