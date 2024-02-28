import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Campaign from '../components/Campaign';
import axios from 'axios';

const CampaignRecievedPage = () => {
  const [userCampaigns, setUserCampaigns] = useState([]);

  useEffect(() => {
    const fetchUserCampaigns = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // Token not found, handle appropriately
          return;
        }

        const response = await axios.get('http://127.0.0.1:8000/api/user-campaigns/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching user campaigns:', error);
      }
    };

    fetchUserCampaigns();
  }, []);

  return (
    <>
      <Navbar scrollToTop={false}/>
      <div className='m-12 flex auto-mx flex-col'>
        <h1 className="text-xl text-center mb-20">Your Campaign Is Now Up and Running</h1>
        <div className="flex flex-wrap">
          {userCampaigns.map(campaign => (
            <div key={campaign.id} className="w-full sm:w-1/2 lg:w-1/3 p-4 relative">
              <Campaign
                campaign={campaign}
                cardClassName="border boder-solid border-third border-2 rounded-lg p-4 relative"
                titleClassName="text-lg font-semibold text-third"
                categoryIconClassName="absolute top-0 right-0"
                descriptionClassName="text-grayish mb-6"
                detailsClassName="flex justify-between"
                labelClassName="text-grayish"
                phoneNumberClassName="text-third"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer scrollToTop={false}/>
    </>
  );
}

export default CampaignRecievedPage;
