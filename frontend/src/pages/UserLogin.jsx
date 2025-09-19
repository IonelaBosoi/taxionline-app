import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLoginPage = () => {
  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        formValues
      );

      if (response.status === 200) {
        const { data } = response;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login to your account</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="bg-[#eee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="bg-[#eee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded px-4 py-2 w-full text-lg transition"
          >
          login
          </button>
        </form>
        <p className="text-center mt-4">
          New here?{' '}
          <Link to={'/signup'} className="text-blue-600">
            Create new Account
          </Link>
        </p>
        <Link
          to={'/captain-login'}
          className="bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center text-black font-semibold mt-5 rounded px-4 py-2 w-full text-lg transition"
        >
          Signup as a Driver
        </Link>
      </div>
    </div>
  );
};

export default UserLoginPage;
