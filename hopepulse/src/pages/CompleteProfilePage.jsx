import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import {profileFields} from '../constants/profileFields'
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import axios from 'axios';
import { UserInformationsContext } from '../contexts/UserInformationsContext';

const CompleteProfilePage = () => {
  
  const navigate = useNavigate();
  const fields=profileFields;
  const initialFieldsState = {};
  fields.forEach(field => initialFieldsState[field.id] = null);
  const { userInfo } = useContext(UserInformationsContext);
  const userId = userInfo ? userInfo.id : '';
  const userEmail = userInfo ? userInfo.email : '';
  const [profileState, setProfileState] = useState({
    ...initialFieldsState,
    email: userEmail,
    role: userInfo && userInfo.role || 'donor',

  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  console.log(profileState)
      const updateProfileUrl = `http://127.0.0.1:8000/api/users/${userId}/`;
      // Make the POST request with the authentication token included in the headers
      const response = await axios.put(updateProfileUrl, profileState, config);
      navigate('/')
    } catch (error) {
      console.error('Error completing the profile:', error);
      console.log(error.response.data);
    }
  };

  const handleChange=(e)=>{
      setProfileState({...profileState,[e.target.id]:e.target.value})
  }

  console.log(profileState)
  return (
<>
    <div className="flex">
      <div className="w-2/6 h-screen bg-pink-50 flex flex-col">
        <div className="flex flex-col text-grayish space-y-2 mt-40 ml-8">
          <h1 className="text-xl font-normal mb-6">Welcome to hopePulse</h1>
          <p className="text-2xl font-bold">Complete your profile now and join the movement</p>
        </div>
        <div className='ml-8 mt-20'>
          <Link to="/howitworks" className="text-grayish hover:text-primary text-lg underline">Discover <span className='text-xl text-primary'>hopepulse</span></Link>
        </div>
      </div>
      <div className='w-4/6 bg-fafafa'>
        <div className="flex flex-col mx-auto">
          <div className="mx-auto mt-8 ml-6 mb-8">
            <Logo />
          </div>
          <div className="w-96 mx-auto border-2 border-solid border-primary">
          <form className="w-full mt-8 space-y-4 mx-auto" onSubmit={handleSubmit}>
            <div className="space-y-2px">
              {fields.map(field => (
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={profileState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
            <div className="flex items-center ml-8">
                  <label htmlFor="role" className="mr-2 text-lg">
                    Choose your role:
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={profileState.role}
                    onChange={handleChange}
                    className="border-2 border-primary rounded-md p-1 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="donor">Donor</option>
                    <option value="campaign_creator">Campaign Creator</option>
                  </select>
                </div>
            <TextArea
              handleChange={handleChange}
              value={profileState.bio}
              labelText="Write your biography"
              labelFor="Biography"
              id="biography"
              name="biography"
              isRequired={true}
              placeholder="biography"
              customClass=""
            />
            <div className="flex justify-center mb-4">
              <button
                type="submit"
                className="bg-primary w-40 text-white py-2 text-xl font-bold px-6 rounded-md shadow-md hover:bg-secondary focus:outline-none mt-2 mb-6">
                Save
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CompleteProfilePage
