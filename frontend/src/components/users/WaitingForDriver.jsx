import React from 'react';

const WaitingForDriver = (props) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h5
        className="p-1 text-center w-full absolute top-0"
        onClick={() => props.waitingForDriver(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 text-center">Driver Assigned</h3>

      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm mb-5">
        <img
          className="h-16 w-16 rounded-full object-cover"
          src="https://cdn-icons-png.flaticon.com/512/171/171239.png"
          alt="driver"
        />
        <div className="text-right flex flex-col items-end">
          <h2 className="text-lg font-medium capitalize">
            {props.ride?.captain.fullname.firstname}
          </h2>
          <h4 className="text-xl font-semibold -mt-1">{props.ride?.captain.vehicle.plate}</h4>
          <p className="text-sm text-gray-600">{props.ride?.captain.vehicle.model || 'Maruti Suzuki Alto'}</p>
          <h5 className="text-lg font-semibold mt-1">OTP: {props.ride?.otp}</h5>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-5 p-3 border-b rounded-xl">
          <i className="ri-map-pin-user-fill text-xl"></i>
          <p className="text-sm text-gray-600">{props.ride?.pickup}</p>
        </div>
        <div className="flex items-center gap-5 p-3 border-b rounded-xl">
          <i className="ri-map-pin-2-fill text-xl"></i>
          <p className="text-sm text-gray-600">{props.ride?.destination}</p>
        </div>
        <div className="flex items-center gap-5 p-3 rounded-xl">
          <i className="ri-currency-line text-xl"></i>
          <div>
            <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
            <p className="text-sm text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
