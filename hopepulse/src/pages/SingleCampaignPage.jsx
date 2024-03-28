import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { FacebookShareButton, TwitterShareButton} from 'react-share';
import CopyLinkButton from '../components/CopyLinkButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleCampaignPage = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/campaigns/${id}`);
        setCampaign(response.data);
      } catch (error) {
        console.error('Error fetching campaign data:', error);
      }
    };

    fetchCampaignData(); // Call the function to fetch campaign data
  }, [id]); // Add id as a dependency to re-fetch data when it changes

  console.log(campaign)
  if (!campaign) {
    return <div>Loading...</div>;
  }

  const startDate = new Date(campaign.start_date);
  const distanceToNow = formatDistanceToNow(startDate, { addSuffix: true });

  return (
    <>
     <Navbar/>
     <div className='flex flex-col mt-12'>
      <span className='text-center text-4xl font-normal'>{campaign.name}</span>
      <div className='flex flex-row mx-auto container space-x-10 p-12'>
        <div className='w-3/5 p-6 flex flex-col'>
          <h1 className='text-lg mt-2 mb-6 flex flex-row'><img src='../images/user.png' alt="User Avatar" className="w-8 h-8 rounded-full"/><span className='underline text-xl mx-2'>{campaign.owner_full_name}</span> is organising this campaign for <span className='ml-2 underline text-xl'>{campaign.beneficiary}</span></h1>
          <hr className='border-primary border-t-2 mb-10'/>
          <div className='flex flex-col'>
            <p className='text-lg mb-6'>{campaign.story}</p>
            <hr className='border-primary border-t-2 mb-10'/>
            <p>Created { distanceToNow }</p>
          </div>
          <h1 className='my-4 text-2xl text-third'> Organizer</h1>
          <div className="flex flex-row space-x-2">
          <img src='../images/user.png' alt="User Avatar" className="w-8 h-8 rounded-full"/>
          <p className='text-lg'>{campaign.owner_full_name}</p>
          </div>
        </div>
        <div className='w-2/6 ring-2container mx-auto bg-white rounded-lg drop-shadow-xl'>
          <div className='flex flex-row ml-4 my-6 text-lg'>
          <p><span className='font-bold text-2xl'>{campaign.current_amount_raised}</span> Dinars raised of {campaign.goal}</p>
          </div>
          <div className="m-auto text-center bg-secondary w-60 rounded-xl hover:bg-third">
            <button>
              <h1 className="text-center mx-4 my-2 font-normal text-2xl"> Donate </h1>
            </button>
          </div>
          <div className="flex items-center justify-center flex-row space-x-6 mt-4 ml-4 m-4">
            <CopyLinkButton />
            <FacebookShareButton url={`http://localhost:5173/campaign/${campaign.id}`}>
              <div className='text-sm font-light hover:bg-gray-50'>
                <FontAwesomeIcon className='w-8 h-8' icon="fa-brands fa-facebook"/>
                <p className="text-sm font-normal">facebook</p>
              </div>
            </FacebookShareButton>
            <TwitterShareButton url={`http://localhost:5173/campaign/${campaign.id}`}>
              <div className='text-sm font-light hover:bg-gray-50'>
                <FontAwesomeIcon className='w-8 h-8' icon="fa-brands fa-square-x-twitter" />
                <p className="text-sm font-normal">twitter</p>
              </div>
            </TwitterShareButton>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default SingleCampaignPage
