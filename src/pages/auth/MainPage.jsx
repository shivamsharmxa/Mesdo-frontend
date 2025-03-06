import { FcGoogle } from "react-icons/fc"; // Import Google Icon
import mesdoLogo from "../../assets/mesdo_logo.jpeg";
import mainLogo from "../../assets/MainPage.png";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="absolute top-5 left-5 flex items-center">
        <img alt="Mesdo logo" className="w-10 h-10 mr-2" src={mesdoLogo} />
        <span className="text-xl font-medium">Mesdo</span>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-24">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Connecting Healthcare, Empowering Professionals
          </h1>
          <p className="text-mid text-gray-600 mb-8">
            A comprehensive platform for healthcare professionals to network,
            exchange knowledge, search for jobs and stay up to date with
            industry news.
          </p>
          <div className="space-y-4 w-full max-w-sm mx-auto md:mx-0">
            <button className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
              <FcGoogle className="mr-2 text-xl" />
              Sign Up with Google
            </button>
            <button className="w-full py-3 px-4 bg-[#1890FF] text-white rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
            <button className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            alt="Healthcare professional illustration"
            className="w-full max-w-lg"
            src={mainLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
