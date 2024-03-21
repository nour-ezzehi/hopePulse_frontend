import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormAction from '../components/FormAction';
import ListBox from '../components/ListBox';
import { categories } from '../constants/categories';
import { campaignFields } from '../constants/formFields';
import Input from '../components/Input';
import { cities } from '../constants/cities';
import TextArea from '../components/TextArea';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyChooseHopepulse from '../components/WhyChooseHopepulse';
import { AuthContext } from '../contexts/Authcontext';

const UpdateCampaignPage = () => {
  const { id } = useParams();
  const [categorySelected, setCategorySelected] = useState(categories[0]);
  const [citySelected, setCitySelected] = useState(cities[0]);
  const [campaignFieldsState, setCampaignFieldsState] = useState(() => {
    const initialState = {};
    campaignFields.forEach(field => initialState[field.id] = '');
    return initialState;
  });

  const navigate = useNavigate()
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/campaigns/${id}`);
        const campaignData = response.data;
        // Set campaign data to state
        setCampaignFieldsState({
          ...campaignFieldsState,
          ...campaignData,
        });
        setCampaignFieldsState(prevState => ({
          ...prevState,
          campaignDescription: campaignData.story
        }));
        
        const selectedCategory = categories.find(category => category.name === campaignData.category);
        const selectedCity = cities.find(city => city.name === campaignData.city);
        setCategorySelected(selectedCategory || categories[0]);
        setCitySelected(selectedCity || cities[0]);
      } catch (error) {
        console.error('Error fetching campaign data:', error);
      }
    };

    fetchCampaignData();
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCampaignFieldsState({ ...campaignFieldsState, [id]: value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('User:', user);
      const data = {
        ...campaignFieldsState,
        category: categorySelected.name,
        city: citySelected.name,
        owner: user.id,
      };
  
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(`http://127.0.0.1:8000/api/campaigns/${id}/`, data, config);

      console.log('Campaign updated:', response.data);
      navigate('/campaignRecieved');
    } catch (error) {
      console.error('Error creating campaign:', error);
      console.log(error.response.data);
    }
  };

  return (
    <>
    <Navbar scrollToTop={false} />
    <div className="flex mb-6">
      <div className="w-2/6 h-screen bg-pink-50 flex flex-col">
        <div className="flex flex-col text-grayish space-y-2 mt-40 ml-8">
          <h1 className="text-xl font-normal mb-6">Welcome to hopePulse</h1>
          <p className="text-2xl font-bold">Initiate Your Adventure for Hope and POSITIVE change</p>
        </div>
        <div className='ml-8 mt-20'>
          <Link to="/why-start-with-us" className="text-grayish hover:text-primary text-lg underline">Why Start Your Campaign with Us?</Link>
        </div>
      </div>
      <div className='w-4/6 bg-white'>
        <div className="flex flex-col mx-auto mt-12">
          <div className="w-96 mx-auto border-2 border-solid border-primary">
            <form className="space-y-4 p-2" onSubmit={handleSubmit}>
              <div className="mx-auto -mt-2">
                {campaignFields.map(field => (
                  field.id !== 'campaignDescription' && (
                    <Input
                      key={field.id}
                      handleChange={handleChange}
                      value={campaignFieldsState[field.id]}
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
                value={campaignFieldsState.campaignDescription}
                labelText="Describe your Campaign:"
                labelFor="campaignDescription"
                id="campaignDescription" // Update the id to match the campaign description field
                name="campaignDescription" // Update the name to match the campaign description field
                isRequired={true}
                placeholder={campaignFieldsState.campaignDescription || "Enter campaign description..."} // Set the placeholder to the campaign description or a default message
                customClass="mt-2"
              />
              <div className='mb-4'>
                <FormAction handleSubmit={handleSubmit} text="Update your Campaign" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <WhyChooseHopepulse />
    <Footer scrollToTop={false}/>
    </>
  );
};

export default UpdateCampaignPage;
