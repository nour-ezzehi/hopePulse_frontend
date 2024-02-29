import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Campaign from '../components/Campaign';
import axios from 'axios';

const CampaignRecievedPage = () => {
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUserCampaigns = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // Token not found, handle appropriately
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8000/api/user-campaigns/?page=${currentPage}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUserCampaigns(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error('Error fetching user campaigns:', error);
      }
    };

    fetchUserCampaigns();
  }, [currentPage]);

  return (
    <>
      <Navbar scrollToTop={false}/>
      <div className='m-12 flex  flex-col'>
        <h1 className="text-xl text-center mb-20">Your Campaign Is Now Up and Running</h1>
        <div className="flex flex-wrap container mx-auto">
        {userCampaigns.map(campaign => (
            <div key={campaign.id} className="sm:w-1/2 lg:w-1/2 p-4 relative">
              <Campaign
                campaign={campaign}
                id={campaign.id}
                cardClassName="border border-third boder-dashed border-2 rounded-lg p-4 relative flex flex-col"
                titleClassName="text-2xl font-semibold text-third mb-4 border-third border-b-2"
                categoryIconClassName="absolute top-0 right-0"
                descriptionClassName="text-grayish mb-24 text-xl"
                detailsClassName="flex items-start text-xl"
                labelClassName="text-grayish mr-2"
                phoneNumberClassName="text-third mt-auto"
              />
            </div>
          ))}
        </div>
        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          <button onClick={() => setCurrentPage(prevPage => prevPage - 1)} disabled={currentPage === 1}>Previous</button>
          <span className="mx-4">Page {currentPage}</span>
          <button onClick={() => setCurrentPage(prevPage => prevPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
      <Footer scrollToTop={false}/>
    </>
  );
}

export default CampaignRecievedPage;
