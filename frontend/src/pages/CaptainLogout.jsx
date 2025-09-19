import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CaptainLogoutPage = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/captain/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/captain-login');
        }
      });
  }, [token, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-6">Logging out...</h2>
        <p className="text-gray-600 mb-4">
          Please wait while we log you out from your driver account.
        </p>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded px-4 py-2 w-full text-lg transition"
          onClick={() => navigate('/captain-login')}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default CaptainLogoutPage;
