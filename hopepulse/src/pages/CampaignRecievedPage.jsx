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
      <div className='m-12 flex flex-col'>
        <h1 className="text-xl text-center mb-20">Your Campaign Is Now Up and Running</h1>
        <div className="flex flex-wrap container mx-auto">
        {userCampaigns.map(campaign => (
            <div key={campaign.id} className="sm:w-1/2 lg:w-1/2 p-4 relative">
              <Campaign
                campaign={campaign}
                id={campaign.id}
                cardClassName="border border-third border-2 rounded-lg p-4 relative flex flex-col"
                titleClassName="text-2xl font-semibold text-third mb-4 border-third border-b-2"
                categoryIconClassName="absolute top-0 right-0"
                descriptionClassName="text-grayish mb-24 text-xl"
                detailsClassName="flex items-start text-xl"
                labelClassName="text-grayish mr-2"
                phoneNumberClassName="text-third mt-auto"
                hoverClassName="bg-gray-200"
              />
            </div>
          ))}
        </div>
        <div className="max-w-lg container flex justify-center mx-auto mt-2 mb-8">
          <div className="flex flex-row mx-auto">
            <button className={`bg-third text-white rounded-l-md border-r border-gray-100 py-2 ${currentPage === 1 ? '' : 'hover:bg-primary hover:text-white'} px-3`} onClick={() => setCurrentPage(prevPage => prevPage - 1)} disabled={currentPage === 1}>
              <div className="flex flex-row align-middle">
                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
                <p className="ml-2">Prev</p>
              </div>
            </button>
            <button className={`bg-third text-white rounded-r-md py-2 border-l border-gray-200 ${currentPage === totalPages ? '' : 'hover:bg-primary hover:text-white'} px-3`} onClick={() => setCurrentPage(prevPage => prevPage + 1)} disabled={currentPage === totalPages}>
              <div className="flex flex-row align-middle">
                <span className="mr-2">Next</span>
                <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Footer scrollToTop={false}/>
    </>
    );
};  

export default CampaignRecievedPage;
