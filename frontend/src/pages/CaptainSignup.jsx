import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainpSignupPage = () => {
  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = {
      fullname: {
        firstname: formData.get('first-name'),
        lastname: formData.get('last-name'),
      },
      email: formData.get('email'),
      password: formData.get('password'),
      vehicle: {
        color: formData.get('vehicle-color'),
        plate: formData.get('vehicle-plate'),
        capacity: formData.get('vehicle-capacity'),
        vehicleType: formData.get('vehicle-type'),
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      formValues
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Rider Account</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div>
            <h3 className="text-base font-medium mb-2">What's your name</h3>
            <div className="flex gap-4 mb-5">
              <input
                type="text"
                name="first-name"
                required
                placeholder="First name"
                className="bg-[#eee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-sm"
              />
              <input
                type="text"
                name="last-name"
                placeholder="Last name"
                className="bg-[#eee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-sm"
              />
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-2">Email</h3>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="bg-[#eee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            />
          </div>

          <div>
            <h3 className="text-base font-medium mb-2">Vehicle Details</h3>
            <div className="flex gap-4 mb-2">
              <input
                type="text"
                name="vehicle-color"
                required
                placeholder="Color"
                className="bg-[#eee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-sm"
              />
              <input
                type="text"
                name="vehicle-plate"
                placeholder="Plate"
                className="bg-[#eee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-sm"
              />
            </div>
            <div className="flex gap-4 mb-5">
              <input
                type="number"
                name="vehicle-capacity"
                required
                placeholder="Capacity"
                className="bg-[#eee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-sm"
              />
              <select
                name="vehicle-type"
                required
                className="bg-[#eee] w-1/2 rounded px-4 py-2 border text-lg"
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-2">Password</h3>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="bg-[#eee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded px-4 py-2 w-full text-lg transition"
          >
            Create Rider Account
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link to={'/captain-login'} className="text-blue-600">
            Login here
          </Link>
        </p>

        <p className="text-[10px] leading-tight mt-6 text-center">
          This site is protected by reCAPTCHA and the{' '}
          <span className="underline">Google Privacy Policy</span> and{' '}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainpSignupPage;
