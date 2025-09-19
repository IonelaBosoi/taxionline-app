import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const submitHander = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        params: {
          rideId: props.ride._id,
          otp: otp,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    if (response.status === 200) {
      props.setConfirmRidePopupPanel(false);
      props.setRidePopupPanel(false);
      navigate('/captain-riding', { state: { ride: props.ride } });
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg max-w-md mx-auto">
      <h5
        className="p-1 text-center w-full mb-5"
        onClick={() => props.setRidePopupPanel(false)}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 text-center">
        Confirm this ride to Start
      </h3>

      <div className="flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mb-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/7067/7067706.png"
            alt="user"
          />
          <h2 className="text-lg font-medium capitalize">
            {props.ride?.user.fullname.firstname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-user-fill"></i>
          <p className="text-sm -mt-1 text-gray-600">{props.ride?.pickup}</p>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination}</p>
        </div>
        <div className="flex items-center gap-5 p-3">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>

      <form onSubmit={submitHander} className="mt-5 flex flex-col gap-3">
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          type="text"
          className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full"
          placeholder="Enter OTP"
        />

        <button className="w-full text-lg bg-yellow-500 text-white font-semibold p-3 rounded-lg">
          Confirm
        </button>
        <button
          type="button"
          onClick={() => {
            props.setConfirmRidePopupPanel(false);
            props.setRidePopupPanel(false);
          }}
          className="w-full bg-red-600 text-lg text-white font-semibold p-3 rounded-lg"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ConfirmRidePopUp;
