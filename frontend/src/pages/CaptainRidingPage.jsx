import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FinishRide from '../components/captain/FinishRide';
import LiveTracking from '../components/LiveTracking';

const CaptainRidingPage = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  const location = useLocation();
  const rideData = location.state?.ride;

  useGSAP(
    function () {
      gsap.to(finishRidePanelRef.current, {
        transform: finishRidePanel ? 'translateY(0)' : 'translateY(100%)',
      });
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative flex flex-col justify-end bg-gray-100">
      {/* Map / Live Tracking */}
      <div className="h-screen fixed w-screen top-0">
        <LiveTracking ride={rideData} type={'captain'} />
      </div>

      {/* Top Bar - removed Uber logo */}
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full shadow"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* Bottom Ride Card */}
      <div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-4"
      >
        <h4 className="text-xl font-semibold text-center">{'4 KM away'}</h4>
        <button
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold p-3 rounded-lg transition"
          onClick={() => setFinishRidePanel(true)}
        >
          Complete Ride
        </button>
      </div>

      {/* Finish Ride PopUp */}
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <FinishRide ride={rideData} setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRidingPage;
