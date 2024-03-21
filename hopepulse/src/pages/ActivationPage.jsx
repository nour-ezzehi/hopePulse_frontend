import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ActivationPage = () => {
  const { uid, token } = useParams();
  const [activationStatus, setActivationStatus] = useState('Activating your account...');
  const navigate = useNavigate()


  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/auth/users/activation/`, { uid, token });
        console.log('Account activated successfully!');
        setActivationStatus('Your account has been successfully activated!');
        navigate('/login');
      } catch (error) {
        console.error('Error activating account:', error);
        setActivationStatus('Error activating your account. Please try again later.');
      }
    };

    activateAccount();
  }, [uid, token]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Account Activation</h1>
        <p className="text-lg mb-4">{activationStatus}</p>
        {activationStatus === 'Activating your account...' && (
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto mb-4"></div>
        )}
        <p className="text-sm text-gray-600">You will be redirected shortly.</p>
      </div>
    </div>
  );
};

export default ActivationPage;
