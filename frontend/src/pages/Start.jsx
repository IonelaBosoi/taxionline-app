import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      {/* Image in center */}
      <img
        src="https://img.freepik.com/premium-vector/online-taxi-ordering-service-driver-yellow-taxi-passenger-transportation-people-man-with-suitcase-city-cab-vector-illustration-isolated-background_608021-1323.jpg"
        alt="Taxi"
        className="w-full max-w-md object-contain mb-8"
      />

      {/* White content box */}
      <div className="bg-white py-6 px-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-3xl font-semibold mb-4">Start the taxi reservation process</h2>
        <Link
          to={'/login'}
          className="flex items-center justify-center w-full bg-yellow-500 text-black py-3 rounded mt-5 hover:bg-yellow-600 transition"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
