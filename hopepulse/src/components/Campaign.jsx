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
    <div className="flex">
      <div className="w-2/6 bg-pink-50 h-screen flex flex-col">
        <div className="flex flex-col text-grayish space-y-2 mt-40 ml-8">
          <h1 className="text-xl font-normal mb-6">Welcome to hopePulse</h1>
          <p className="text-2xl font-bold">Initiate Your Adventure for Hope and POSITIVE change </p>
        </div>
          <div className='ml-8 mt-20'>
            <Link to="/why-start-with-us" className="text-grayish hover:text-primary text-lg underline">Why Start Your Campaign with Us?</Link>
          </div>
      </div>
      <div className='w-4/6'>
        <div className="flex flex-col mx-auto">
          <div className="container mx-auto mt-6 ml-6">
              <Logo />
          </div>
          <div className="w-96 mx-auto border-2 border-solid border-primary">
          <form className="space-y-4 p-2" onSubmit={handleSubmit}>
            <div className="text-center mx-auto">
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
                    customClass=""
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
                customClass="mt-2"
              />
            <FormAction handleSubmit={handleSubmit} text="Start The Campaign" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
