import React from 'react';

const Campaign = ({ campaign, cardClassName, titleClassName, categoryIconClassName, descriptionClassName, detailsClassName, labelClassName, phoneNumberClassName }) => {
  const { name, category, story, telephone_number } = campaign;

  return (
    <div className={cardClassName}>
      <div className="content">
        <h3 className={titleClassName}>{name}</h3>
        <div className={categoryIconClassName}>
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
