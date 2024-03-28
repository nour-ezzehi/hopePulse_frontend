import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const Campaign = ({ campaign, cardClassName, titleClassName, categoryIconClassName, storyClassName, donationsAreaClassName, labelClassName, organisedForClassName, hoverClassName, amountClassName, donationsClassName }) => {
  const { id, name, category, story } = campaign;
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle click on a campaign
  const handleCampaignClick = () => {
    // Redirect to the single campaign page with the campaign ID
    navigate(`/campaign/${id}`);
  };

  return (
    <div
      className={`cursor-pointer ${cardClassName} ${isHovered ? hoverClassName : ''}`} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      onClick={handleCampaignClick}
    >
        <span className={titleClassName}>{name}</span>
        <div className={categoryIconClassName}>
          {/* Display category icon based on the category */}
          {category === 'medical' && (
            <img src="../images/first-aid-box.png" alt="Medical Icon" className="w-6 h-6 mt-2 mr-2" />
          )}
          {category === 'animals' && (
            <img src="../images/footprint.png" alt="Animal Icon" className="w-6 h-6 mt-2 mr-2" />
          )}
          {category === 'environment' && (
            <img src="../images/save-nature.png" alt="Environment Icon" className="w-6 h-6 mt-2 mr-2" />
          )}
          {category === 'education' && (
            <img src="../images/mortarboard.png" alt="Education Icon" className="w-6 h-6 mt-2 mr-2" />
          )}
          {category === 'emergency' && (
            <img src="../images/alarm.png" alt="Emergency Icon" className="w-6 h-6 mt-2 mr-2" />
          )}
          {category === 'arts and culture' && (
            <img src="../images/art.png" alt="Arts and Culture Icon" className="w-6 h-6 mt-2 mr-2" />
          )}
          {/* Add other category icons similarly */}
        </div>
        <div className={organisedForClassName}><span className='text-lg font-semibold underline mr-2'>organised for: </span><span className='text-lg'>{campaign.beneficiary}</span></div>
        <p className={storyClassName}>{story}</p>
        <div className={donationsAreaClassName}>
          <div className={amountClassName}><span>{campaign.current_amount_raised} <span className='text-lg'>raised</span></span></div>
          <div className={donationsClassName}><span className='text-lg'>donations:</span><span>  {campaign.num_of_donations}</span></div>
        </div>
    </div>
  );
}

export default Campaign;
