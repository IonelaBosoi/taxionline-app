import React from 'react';

const LookingForDriver = (props) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h5
        className="p-1 text-center w-full absolute top-0"
        onClick={() => props.setVehicleFound(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 text-center">Looking for a Driver</h3>

      <div className="flex gap-4 flex-col items-center">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="vehicle"
        />

        <div className="w-full mt-5 space-y-2">
          <div className="flex items-center gap-5 p-3 border rounded-lg bg-gray-50">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <p className="text-sm text-gray-600">{props.pickup}</p>
          </div>

          <div className="flex items-center gap-5 p-3 border rounded-lg bg-gray-50">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <p className="text-sm text-gray-600">{props.destination}</p>
          </div>

          <div className="flex items-center gap-5 p-3 border rounded-lg bg-gray-50">
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.fare[props.vehicleType]}</h3>
              <p className="text-sm text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
