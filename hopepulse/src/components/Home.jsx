// Import React and other necessary libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Campaign from './Campaign'; // Import the Campaign component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import { Link } from 'react-router-dom';
import SCButton from './SCButton';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const navigate = useNavigate();


  // useEffect hook to fetch campaigns data
  useEffect(() => {
    const fetchCampaignsData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // Handle token not found
          return;
        }
        
        const response = await axios.get(`http://127.0.0.1:8000/api/campaigns/?page=${currentPage}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        // Ensure that response.data.results is an array
        if (Array.isArray(response.data.results)) {
          console.log(response.data.results)
          setCampaigns(response.data.results);
          setTotalPages(response.data.total_pages);
        } else {
          console.error('Campaigns data is not an array:', response.data);
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    };
  
    fetchCampaignsData();
  }, [currentPage]);

  // Function to handle click on a campaign
  const handleCampaignClick = (id) => {
    // Redirect to the single campaign page with the campaign ID
    navigate(`/campaign/${id}`);
  };

  // Render the Home component
  return (
    <div className='mb-40'>
    <div className='flex flex-col container mt-12 ml-12 mb-8 w-3/4'>
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
    <div className='my-20 p-40 bg-third'>
      <h1 className='text-5xl font-bold mb-10 text-fafafa'>🌟 Why Choose hopepulse?</h1>
      <div className="">
        <ol className="flex flex-col space-y-6 text-fafafa">
          <li className='text-4xl font-semibold'>Our team of heart-driven experts stands by your side, ensuring every campaign is infused with empathy and purpose.</li>
          <li className='text-4xl font-semibold'>With our user-friendly interface, donating or fundraising becomes as effortless as a gentle breeze.</li>
          <p className="text-xl">Looking for extra insight? View our <Link className="hover:text-grayish underline underline-offset-1" to="/tutorial">tutorial on writing a moving fundraiser story</Link></p>
        </ol>
        <SCButton textColor="third" heartColor="third" buttonColor="fafafa"/>
      </div>
    </div>
    <div className='my-20 bg-white container mx-auto'>
      <h1 className='text-2xl mb-8 font-bold'>Start your campaign for anyone</h1>
      <ol className="flex flex-col space-y-6">
        <div className='border-b-2 border-third flex flex-row items-center'>
          <div className='mr-20 py-8'>
            <Link to="/campaignsPage">
              <li className='text-4xl font-semibold mb-8 text-grayish'>Fundraise for yourself</li>
              <p className='text-3xl font-normal text-grayish'>Start a campaign for yourself, ask for help and let people give you a hand.</p>
            </Link>
          </div>
          <img src='../images/next.png' alt="Next Icon" className="w-8 h-8 ml-auto" /> {/* Use ml-auto to push the icon to the right */}
        </div>
        <div className='border-b-2 border-third flex flex-row items-center'>
          <div className='mr-20 py-8'>
            <Link to="/campaignsPage">
              <li className='text-4xl font-semibold text-grayish mb-8'>Fundraise for someone who needs our help</li>
              <p className='text-3xl font-normal text-grayish'>Start a campaign for a beneficiary and raise funds for them.</p>
            </Link>
          </div>
          <img src='../images/next.png' alt="Next Icon" className="w-8 h-8 ml-auto" /> {/* Use ml-auto to push the icon to the right */}
        </div>
        <div className='border-b-2 border-third flex flex-row items-center'>
          <div className='mr-20 py-8'>
            <li className='text-4xl font-semibold text-grayish mb-8'>Fundraise for charity</li>
            <p className='text-xl font-normal text-grayish'><a href="#contact" className='underline hover:text-primary'>Contact us </a>if u have a charity.</p>
          </div>
          <img src='../images/next.png' alt="Next Icon" className="w-8 h-8 ml-auto" /> {/* Use ml-auto to push the icon to the right */}
        </div>
      </ol>
    </div>
    <div className='my-20 p-40 bg-third'>
      <h1 className='text-5xl font-bold mb-10 text-fafafa'>🚀 Our Promise to You:</h1>
      <div className="">
        <ol className="flex flex-col space-y-6 text-fafafa">
          <li className='text-4xl font-semibold'>When you raise funds on Hopepulse, you’re not just collecting dollars; you’re weaving a tapestry of hope.</li>
          <li className='text-4xl font-semibold'>Together, we’ll create ripples of change that echo across time and touch countless lives.</li>
          <li className="text-4xl font-semibold">Every donation is a brushstroke, painting a brighter future for someone in need.</li>
        </ol>
        <SCButton textColor="third" heartColor="third" buttonColor="fafafa"/>
      </div>
    </div>
    </div>
  );
};

// Export the Home component as the default export
export default Home;
