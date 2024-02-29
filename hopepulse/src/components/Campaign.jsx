import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const Campaign = ({ campaign, cardClassName, titleClassName, categoryIconClassName, descriptionClassName, detailsClassName, labelClassName, phoneNumberClassName }) => {
  const { id, name, category, story, telephone_number } = campaign;
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle click on a campaign
  const handleCampaignClick = () => {
    // Redirect to the single campaign page with the campaign ID
    navigate(`/campaign/${id}`);
  };

  return (
    <div className={`cursor-pointer ${cardClassName} hover:bg-gray-100`} onClick={handleCampaignClick}>
      <div className="content">
        <h3 className={titleClassName}>{name}</h3>
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
        <p className={descriptionClassName}>{story}</p>
        <div className={detailsClassName}>
          <p className={labelClassName}>Telephone Number:</p>
          <p className={phoneNumberClassName}>{telephone_number}</p>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
