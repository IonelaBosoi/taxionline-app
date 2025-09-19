import React from 'react';

const ConfirmRide = (props) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg max-w-md mx-auto">
      <h5
        className="p-1 text-center w-full mb-5"
        onClick={() => props.setConfirmRidePanel(false)}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 text-center">Confirm your Ride</h3>

      <div className="flex gap-2 justify-center flex-col items-center">
        {props?.vehicleType === 'car' && (
          <img
            className="h-20 mb-4"
            src="https://cdn-icons-png.flaticon.com/512/171/171239.png"
            alt="car"
          />
        )}
        {props?.vehicleType === 'moto' && (
          <img
            className="h-20 mb-4"
            src="https://cdn-icons-png.flaticon.com/512/575/575707.png"
            alt="moto"
          />
        )}
        {props?.vehicleType === 'auto' && (
          <img
            className="h-20 mb-4"
            src="https://cdn-icons-png.flaticon.com/512/4781/4781286.png"
            alt="auto"
          />
        )}

        <div className="w-full mt-2">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <p className="text-sm -mt-1 text-gray-600">{props.pickup}</p>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <p className="text-sm -mt-1 text-gray-600">{props.destination}</p>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.fare[props.vehicleType]}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
            props.createRide();
          }}
          className="w-full mt-5 bg-yellow-500 text-white font-semibold p-3 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
