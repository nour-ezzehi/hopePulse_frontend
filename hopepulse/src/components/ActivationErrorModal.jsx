import React from 'react';

const ActivationErrorModal = ({ message, onClose, onResend }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white rounded-lg p-8 shadow-md">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Activation Error</h2>
        <p className="text-lg mb-4">{message}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mr-2"
          onClick={onResend}
        >
          Resend Activation Email
        </button>
        <button
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ActivationErrorModal;
