import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import LiveTracking from '../components/LiveTracking';

const RidingPage = () => {
  const location = useLocation();
  const { ride } = location.state || {};
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on('ride-ended', () => {
    navigate('/home');
  });

  return (
    <div className="h-screen relative bg-gray-100">
      {/* Home Button */}
      <Link
        to="/home"
        className="fixed right-4 top-4 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>

      {/* Map / Live Tracking */}
      <div className="h-[58%] w-full">
        <LiveTracking ride={ride} type={'user'} />
      </div>

      {/* Bottom Card */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
        {/* Captain Details */}
        <div className="flex items-center justify-between">
          <img
            className="h-12 rounded"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt="vehicle"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">
              {ride?.captain.fullname.firstname}
            </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">
              {ride?.captain.vehicle.plate}
            </h4>
            <p className="text-sm text-gray-600">{ride?.captain.vehicle.vehicleType}</p>
          </div>
        </div>

        {/* Ride Info */}
        <div className="w-full mt-3">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <p className="text-sm -mt-1 text-gray-600">{ride?.destination}</p>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold p-3 rounded-lg transition">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default RidingPage;
