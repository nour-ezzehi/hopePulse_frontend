import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { UserInformationsContext } from '../contexts/UserInformationsContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {

  const navigate = useNavigate()
  const { userInfo } = useContext(UserInformationsContext);
if (userInfo)
  console.log(userInfo)
  if (!userInfo) {
    return <div>Loading...</div>; // Render a loading indicator if userInfo is not available yet
  }

  const handleDeleteAccount = async (e) => {
    try {
      // Set the headers with the authentication token
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      // Make the DELETE request to the API endpoint with the headers
      const response = await axios.delete(`http://127.0.0.1:8000/api/users/${userInfo.id}/`, config);
  
      // Check if the request was successful
      if (response.status === 204) {
        console.log('User account deleted successfully.');
        navigate('/login')
      } else {
        console.error('Failed to delete user account:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user account:', error);
    }
  };

  return (
    <>
      <div className="flex">
        <div className='w-5/6 bg-fafafa'>
          <div className="flex flex-col mx-auto">
            <div className="mx-auto mt-8 ml-6">
              <Logo />
            </div>
            <div className="flex flex-col items-start justify-center py-2 m-32 ml-72 space-y-8">
                <div className="">
                  <div className='flex flex-row space-x-20'>
                  <h2 className="text-2xl text-grayish"><span className='mr-4 font-bold'>First Name:</span>{`${userInfo.first_name}`}</h2>
                  <h2 className="text-2xl text-grayish"><span className='mr-4 font-bold'>Last Name:</span>{`${userInfo.last_name}`}</h2>
                  </div>
                  <div>
                    <div className='flex flex-row space-x-8 mt-8 mb-8'>
                    <h1 className="text-grayish text-2xl"><span className='text-2xl font-bold mr-4'> Role: </span> {userInfo.role || 'N/A'}</h1>
                    <p className="text-grayish text-xl">
                      <strong className='font-bold text-2xl'><span className='text-2xl font-bold mr-4'>CIN:</span></strong> {userInfo.cin || 'N/A'}
                    </p>
                    </div>
                  <div className='flex flex-row space-x-20'>
                    <p className="text-grayish text-xl">
                      <strong className='font-bold text-2xl'><span className='text-2xl font-bold mr-4'>Email:</span></strong> {userInfo.email}
                    </p>
                    <p className="text-grayish text-xl">
                      <strong className='font-bold text-2xl'><span className='text-2xl font-bold mr-4'>Phone Number:</span></strong> {userInfo.telephone_number || 'N/A'}
                    </p>
                  </div>
                  </div>
                  <p className="text-grayish text-xl mt-8"><span className='text-2xl font-bold mr-4'> Biography: </span> {userInfo.biography || 'No biography provided.'}</p>
                  </div>
                  </div>
                </div>
                <div className="flex justify-end m-8">
                  <button onClick={handleDeleteAccount} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-grayish">Delete Account</button>
                </div>
              </div>
        <div className="w-1/6 h-screen bg-fafafa flex flex-col">
          <div className="flex flex-row text-grayish space-y-2 mt-8 ml-8">
            <img src='../images/avatar-placeholder.png' alt="User Avatar" className="w-10 h-10 rounded-full mt-3" />
            <span className="ml-4 text-4xl">{userInfo.username}</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProfilePage
