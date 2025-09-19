import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignupPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

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
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      formValues
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Create your account</h2>
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
            <h3 className="text-base font-medium mb-2">What's your email</h3>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="bg-[#eee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            />
          </div>

          <div>
            <h3 className="text-base font-medium mb-2">Enter password</h3>
            <input
              type="password"
              name="password"
              required
              placeholder="password"
              className="bg-[#eee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded px-4 py-2 w-full text-lg transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link to={'/login'} className="text-blue-600">
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

export default UserSignupPage;
