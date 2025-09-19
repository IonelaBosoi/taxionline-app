import React from 'react';

const VehiclePanel = (props) => {
  const vehicleOptions = [
    {
      type: 'car',
      name: 'UberGo',
      img: 'https://cdn-icons-png.flaticon.com/512/171/171239.png',
      capacity: 4,
      eta: '2 mins away',
      description: 'Affordable, compact rides',
      fare: props.fare.car,
    },
    {
      type: 'auto',
      name: 'UberAuto',
      img: 'https://cdn-icons-png.flaticon.com/512/4781/4781286.png',
      capacity: 3,
      eta: '5 mins away',
      description: 'Affordable Auto rides',
      fare: props.fare.auto,
    },
    {
      type: 'moto',
      name: 'Moto',
      img: 'https://cdn-icons-png.flaticon.com/512/575/575707.png',
      capacity: 1,
      eta: '3 mins away',
      description: 'Affordable motorcycle rides',
      fare: props.fare.moto,
    },
   
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h5
        className="p-1 text-center w-full absolute top-0"
        onClick={() => props.setVehiclePanel(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-center">Choose a Vehicle</h3>

      <div className="flex flex-col gap-3">
        {vehicleOptions.map((vehicle) => (
          <div
            key={vehicle.type}
            onClick={() => {
              props.selectVehicle(vehicle.type);
              props.setConfirmRidePanel(true);
            }}
            className="flex items-center justify-between p-4 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer bg-gray-50"
          >
            <img className="h-12 w-12" src={vehicle.img} alt={vehicle.name} />
            <div className="ml-3 w-1/2">
              <h4 className="font-medium text-base flex items-center justify-between">
                {vehicle.name} <span><i className="ri-user-3-fill"></i>{vehicle.capacity}</span>
              </h4>
              <h5 className="text-sm font-medium text-gray-500">{vehicle.eta}</h5>
              <p className="text-xs text-gray-600">{vehicle.description}</p>
            </div>
            <h2 className="text-lg font-semibold">₹{vehicle.fare}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclePanel;
