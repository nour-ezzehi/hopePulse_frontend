import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormAction from './FormAction';
import ListBox from './ListBox'; // Import the ListBox component
import Logo from './Logo';
import { categories } from '../constants/categories';
import { campaignFields } from '../constants/formFields';
import Input from './Input';
import { cities } from '../constants/cities';
import TextArea from './TextArea';

const handleSubmit = (e) => {
  e.preventDefault();
};

const Campaign = () => {
  const [categorySelected, setcategorySelected] = useState(categories[0]);
  const [citySelected, setcitySelected] = useState(cities[0]);
  const [campaignInfo, setCampaignInfo] = useState({
    campaignName: '',
    campaignDescription: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaignInfo(prevCampaignInfo => ({
      ...prevCampaignInfo,
      [name]: value
    }));
  };  

  return (
    <>
      <div className="flex flex-col justify-center container mx-auto">
        <div className="container mx-auto mt-4 mb-2">
            <Logo />
        </div>
        <div className="w-96 container mx-auto border-2 border-solid my-18 border-primary">
        <form className="my-4 space-y-6" onSubmit={handleSubmit}>
          <div className="text-center container mx-auto">
            <div className="-space-y-2px">
            {campaignFields.map(field => (
              field.id === 'campaignDescription' ? null : (
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={campaignInfo[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                  customClass="mt-4"
                />
              )
            ))}
            </div>
          </div>
          <ListBox selected={categorySelected} setSelected={setcategorySelected} options={categories} labeltext="select a category: "/>
          <ListBox selected={citySelected} setSelected={setcitySelected} options={cities} labeltext="select your city: "/>
          <TextArea
              handleChange={handleChange}
              value={campaignInfo.campaignDescription}
              labelText="Describe your Campaign:"
              labelFor="campaignDescription"
              id="campaignDescription"
              name="campaignDescription"
              isRequired={true}
              placeholder="I am . . ."
              customClass="mt-4"
            />
          <FormAction handleSubmit={handleSubmit} text="Start The Campaign" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Campaign;
