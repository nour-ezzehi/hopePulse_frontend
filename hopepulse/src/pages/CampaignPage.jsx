import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormAction from '../components/FormAction';
import ListBox from '../components/ListBox';
import Logo from '../components/Logo';
import { categories } from '../constants/categories';
import { campaignFields } from '../constants/formFields';
import Input from '../components/Input';
import { cities } from '../constants/cities';
import TextArea from '../components/TextArea';

const Campaign = () => {
  const [categorySelected, setCategorySelected] = useState(categories[0]);
  const [citySelected, setCitySelected] = useState(cities[0]);
  const [formData, setFormData] = useState({
    campaignName: '',
    campaignDescription: '',
    telephoneNumber: '',
    beneficiary: '',
    budget: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        category: categorySelected.name,
        city: citySelected.name,
      };

      const response = await axios.post('http://127.0.0.1:8000/api/campaigns/', data);
      console.log('Campaign created:', response.data);
      navigate('/campaignReceived')
      // Optionally, you can redirect the user to a different page after successful submission
    } catch (error) {
      console.error('Error creating campaign:', error);
      console.log(error.response.data);  // Print the error response data
    }
  };

  return (
    <>
    <div className="flex">
      <div className="w-2/6 h-screen bg-pink-50 flex flex-col">
        <div className="flex flex-col text-grayish space-y-2 mt-40 ml-8">
          <h1 className="text-xl font-normal mb-6">Welcome to hopePulse</h1>
          <p className="text-2xl font-bold">Initiate Your Adventure for Hope and POSITIVE change</p>
        </div>
        <div className='ml-8 mt-20'>
          <Link to="/why-start-with-us" className="text-grayish hover:text-primary text-lg underline">Why Start Your Campaign with Us?</Link>
        </div>
      </div>
      <div className='w-4/6 bg-fafafa'>
        <div className="flex flex-col mx-auto">
          <div className="mx-auto mt-8 ml-6 mb-8">
            <Logo />
          </div>
          <div className="w-96 mx-auto border-2 border-solid border-primary">
            <form className="space-y-4 p-2" onSubmit={handleSubmit}>
              <div className="mx-auto -mt-2">
                {campaignFields.map(field => (
                  field.id !== 'campaignDescription' && (
                    <Input
                      key={field.id}
                      handleChange={handleChange}
                      value={formData[field.id]}
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
              <ListBox selected={categorySelected} setSelected={setCategorySelected} options={categories} labeltext="Select a category: " />
              <ListBox selected={citySelected} setSelected={setCitySelected} options={cities} labeltext="Select your city: " />
              <TextArea
                handleChange={handleChange}
                value={formData.campaignDescription}
                labelText="Describe your Campaign:"
                labelFor="campaignDescription"
                id="campaignDescription"
                name="campaignDescription"
                isRequired={true}
                placeholder="I am . . ."
                customClass="mt-2"
              />
              <div className='mb-4'>
                <FormAction handleSubmit={handleSubmit} text="Start The Campaign" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Campaign;
