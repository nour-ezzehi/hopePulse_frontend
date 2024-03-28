import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Campaign from './Campaign';
import { useNavigate } from 'react-router-dom';
import SCButton from './SCButton';
import DonateFor from './DonateFor';
import FundraiseForAnyone from './FundraiseForAnyone';
import WhyChooseHopepulse from './WhyChooseHopepulse';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const navigate = useNavigate();


  // useEffect hook to fetch campaigns data
  useEffect(() => {
    const fetchCampaignsData = async () => {
        
        const response = await axios.get(`http://127.0.0.1:8000/api/campaigns/?page=${currentPage}`, {
        });
        
        if (Array.isArray(response.data.results)) {
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
console.log(campaigns)
  return (
    <>
    <div className='flex flex-row mb-40 mx-auto'>
    <div className='mt-12 mb-8 w-9/12 ml-8'>
      <h1 className='text-3xl mb-8 font-semibold'>Discover these campaigns, be a hope Ambassador. Donate now!</h1>
      <div className='flex flex-row space-x-4'>
        {campaigns.map(campaign => (
          <Campaign
            key={campaign.id}
            campaign={campaign}
            cardClassName="border border-primary border-2 rounded-lg p-4 relative flex flex-col basis-1/3"
            titleClassName="text-2xl font-bold text-primary text-center border-primary border-b-2 block mb-4"
            organisedForClassName="text-grayish mb-8"
            categoryIconClassName="absolute top-0 right-0"
            storyClassName="text-grayish mb-12 text-xl"
            hoverClassName="bg-gray-100"
            donationsAreaClassName="flex flex-row justify-between absolute bottom-0"
            donationsClassName=""
            amountClassName="mr-32"
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
    <div className='w-3/12 mt-12'>
    <DonateFor />
      </div>
    </div>
    <WhyChooseHopepulse />
    <FundraiseForAnyone />
    <div className='my-20 p-40 bg-third'>
      <h1 className='text-3xl font-bold mb-10 text-fafafa'>🚀 Our Promise to You:</h1>
      <div className="">
        <ol className="flex flex-col space-y-6 text-fafafa">
          <li className='text-3xl font-semibold'>When you raise funds on hopepulse, you’re not just collecting dollars; you’re weaving a tapestry of hope.</li>
          <li className='text-3xl font-semibold'>Together, we’ll create ripples of change that echo across time and touch countless lives.</li>
          <li className="text-3xl font-semibold">Every donation is a brushstroke, painting a brighter future for someone in need.</li>
        </ol>
        <SCButton textColor="third" heartColor="third" buttonColor="fafafa"/>
      </div>
    </div>
    </>
  );
};

export default Home;
