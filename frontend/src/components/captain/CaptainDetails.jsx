import React, { useContext } from 'react';
import { CaptainDataContext } from '../../context/CaptainContext';

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg max-w-md mx-auto">
      {/* Captain Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/7067/7067706.png"
            alt="captain"
          />
          <h4 className="text-lg font-medium capitalize">
            {captain?.fullname.firstname} {captain?.fullname.lastname}
          </h4>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-semibold text-yellow-500">
            ₹{captain?.totalEarning}
          </h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex p-4 mt-6 bg-gray-100 rounded-xl justify-between items-center">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-timer-2-line text-yellow-500"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line text-yellow-500"></i>
          <h5 className="text-lg font-medium">{captain?.totalTrips}</h5>
          <p className="text-sm text-gray-600">Total Trips</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line text-yellow-500"></i>
          <h5 className="text-lg font-medium">{captain?.totalDistance.toFixed(2)}</h5>
          <p className="text-sm text-gray-600">Total Distance</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
