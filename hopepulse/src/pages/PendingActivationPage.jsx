import React from 'react';
import { Link } from 'react-router-dom';

const PendingActivationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md py-8 px-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Account Activation Pending</h2>
        <p className="text-gray-700 mb-4">
          Your account activation is pending. You cannot login until your account has been activated.
          Please check your email for activation instructions or contact support for assistance.
        </p>
        <Link to="/login" className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-secondary">
          login
        </Link>
      </div>
    </div>
  );
};

export default PendingActivationPage;
