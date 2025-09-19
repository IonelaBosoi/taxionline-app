import axios from 'axios';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLoginPage = () => {
  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      formValues
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Captain Login</h2>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div>
            <h3 className="text-base font-medium mb-2">Email</h3>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="bg-[#eee] rounded px-4 py-2 w-full border text-lg placeholder:text-sm"
            />
          </div>

          <div>
            <h3 className="text-base font-medium mb-2">Password</h3>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="bg-[#eee] rounded px-4 py-2 w-full border text-lg placeholder:text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded px-4 py-2 w-full text-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Join a fleet?{' '}
          <Link to={'/captain-signup'} className="text-blue-600">
            Register as Driver
          </Link>
        </p>

        <Link
          to={'/login'}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold mt-4 rounded px-4 py-2 w-full text-lg flex items-center justify-center transition"
        >
          Sign as a User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLoginPage;
