import { useEffect, useState } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DonateFor from '../components/DonateFor'
import { useNavigate } from 'react-router-dom'
import Campaign from '../components/Campaign'
import axios from 'axios'
import FundraiseForAnyone from '../components/FundraiseForAnyone'
  // Function to handle click on a campaign
const ForIndividualsPage = () => {

  const [campaigns, setCampaigns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

useEffect(() => {
  const fetchCampaignsData = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/campaigns/?page=${currentPage}`, {
      });
      
      // Ensure that response.data.results is an array
      if (Array.isArray(response.data.results)) {
        console.log(response.data.results)
        setCampaigns(response.data.results);
        setTotalPages(response.data.total_pages);
      } else {
        console.error('Campaigns data is not an array:', response.data);
      }
  };

    fetchCampaignsData();
  }, [currentPage]);

  const handleCampaignClick = (id) => {
    // Redirect to the single campaign page with the campaign ID
    navigate(`/campaign/${id}`);
  };

  return (
    <>
      <Navbar scrollToTop={false}/>
      <div className='flex flex-row' >
        <div className="w-1/5 mt-12 -ml-12">
          <DonateFor />
        </div>
        <div className='ml-16 flex flex-row w-4/5'>
          <div className='mt-12 ml-12 mb-8'>
            <h1 className='text-3xl mb-8 font-semibold'>Discover these campaigns, be a hope Ambassador. Donate now!</h1>
            <div className='bg-fafafa flex flex-col space-y-8'>
              {/* Render campaigns using the Campaign component */}
              {campaigns.map(campaign => (
                <Campaign
                  key={campaign.id}
                  campaign={campaign}
                  cardClassName="border border-primary border-2 rounded-lg p-4 relative flex flex-col"
                  titleClassName="text-2xl font-semibold text-primary mb-4 border-primary border-b-2"
                  categoryIconClassName="absolute top-0 right-0"
                  descriptionClassName="text-grayish mb-24 text-xl"
                  detailsClassName="flex items-start text-xl"
                  labelClassName="text-grayish mr-2"
                  phoneNumberClassName="text-primary mt-auto"
                  hoverClassName="bg-gray-100"
                  onClick={() => handleCampaignClick(campaign.id)}
                />
              ))}
            </div>
            <div className="max-w-lg container flex justify-center mx-auto mt-6 mb-8">
              <div className="flex flex-row mx-auto">
                <button className={`bg-primary text-white rounded-l-md border-r border-gray-100 py-2 ${currentPage === 1 ? '' : 'hover:bg-secondary hover:text-white'} px-3`} onClick={ () => {setCurrentPage(prevPage => prevPage - 1)}} disabled={currentPage === 1}>
                  <div className="flex flex-row align-middle">
                    <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                    </svg>
                    <p className="ml-2">Prev</p>
                  </div>
                </button>
                <button className={`bg-primary text-white rounded-r-md py-2 border-l border-gray-200 ${currentPage === totalPages ? '' : 'hover:bg-secondary hover:text-white'} px-3`} onClick={() => setCurrentPage(prevPage => prevPage + 1)} disabled={currentPage === totalPages}>
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
          </div>
        </div>
        <FundraiseForAnyone />
      <Footer scrollToTop={false}/>
    </>
  )
}

export default ForIndividualsPage
