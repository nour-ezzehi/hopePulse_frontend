import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/Authcontext';

const Campaign = () => {
  const [userCampaigns, setUserCampaigns] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserCampaigns = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user-campaigns/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you stored the token in local storage
          }
        });
        console.log(response.data)
        setUserCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching user campaigns:', error);
      }
    };

    if (user) {
      fetchUserCampaigns();
    }
  }, [user]);

  return (
    <div>
      <div className="flex flex-wrap">
        {userCampaigns.map(campaign => (
          <div key={campaign.id} className="w-full sm:w-1/2 lg:w-1/3 p-4 relative">
            <div className="border border-gray-200 rounded-lg p-4 relative">
              <h3 className="text-lg font-semibold">{campaign.name}</h3>
              <div className="absolute top-0 right-0">
                {campaign.category === 'medical' && (
                  <img src="../images/first-aid-box.png" alt="Medical Icon" className="w-6 h-6 mt-2 mr-2" />
                )}
                {campaign.category === 'animals' && (
                <img src="../images/footprint.png" alt="Animal Icon" className="w-6 h-6 mt-2 mr-2" />
              )}
                {campaign.category === 'environment' && (
                <img src="../images/save-nature.png" alt="Environment Icon" className="w-6 h-6 mt-2 mr-2" />
              )}
              {campaign.category === 'education' && (
                <img src="../images/mortarboard.png" alt="Education Icon" className="w-6 h-6 mt-2 mr-2" />
              )}
              {campaign.category === 'emergency' && (
                <img src="../images/alarm.png" alt="Emergency Icon" className="w-6 h-6 mt-2 mr-2" />
              )}
              {campaign.category === 'arts and culture' && (
                <img src="../images/art.png" alt="Arts and Culture Icon" className="w-6 h-6 mt-2 mr-2" />
              )}
              </div>
              <p className="text-gray-600 mb-6">{campaign.story}</p>
              <div className="flex justify-between">
                <p className="text-custom-color">Telephone Number:</p>
                <p className="text-grayish">{campaign.telephone_number}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Campaign;
