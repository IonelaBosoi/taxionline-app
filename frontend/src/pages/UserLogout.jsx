import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogoutPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } catch (error) {
        console.error('Logout failed', error);
      }
    };
    logoutUser();
  }, [navigate, token]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-6">Logging out...</h2>
        <p className="text-gray-600">You will be redirected to the login page shortly.</p>
        <button
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded px-4 py-2 mt-6 w-full transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default UserLogoutPage;
