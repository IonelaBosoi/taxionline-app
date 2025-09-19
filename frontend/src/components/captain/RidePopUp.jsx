import React from 'react';

const RidePopUp = (props) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg max-w-md mx-auto">
      <h5
        className="p-1 text-center w-full mb-5"
        onClick={() => props.setRidePopupPanel(false)}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 text-center">New Ride Available!</h3>

      <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mb-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/7067/7067706.png"
            alt="user"
          />
          <h2 className="text-lg font-medium">
            {props.ride?.user.fullname.firstname + ' ' + props.ride?.user.fullname.lastname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">{props?.ride?.distance.toFixed(2)} KM</h5>
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

      <div className="mt-5 w-full flex flex-col gap-2">
        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true);
            props.confirmRide();
          }}
          className="w-full bg-yellow-500 text-white font-semibold p-3 rounded-lg"
        >
          Accept
        </button>

        <button
          onClick={() => props.setRidePopupPanel(false)}
          className="w-full bg-gray-300 text-gray-700 font-semibold p-3 rounded-lg"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
