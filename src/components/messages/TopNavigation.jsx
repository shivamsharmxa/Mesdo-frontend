import { useState } from "react";
import { Search, Bell } from "lucide-react";
import MesdoLogo from "../../assets/mesdo_logo.jpeg";
import NotificationApp from "../notification/Notification"; // adjust the path

const TopNavigation = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <div className="fixed top-2 left-0 right-0 h-16 bg-white border-b border-gray-200 flex justify-between items-center px-4 z-10 md:px-34 lg:px-44">
        <div className="flex items-center gap-2 -ml-25">
          <img
            src={MesdoLogo}
            alt="Mesdo Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-semibold text-gray-900">Mesdo</span>
        </div>

        <div className="flex items-center flex-grow mx-4 ml-44">
          <div className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1890FF]"
              size={18}
            />
            <input
              className="w-full pl-12 px-4 py-2 border border-[#E4E5E8] text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-20"
              placeholder="Job title, skills, profile"
              type="text"
            />
          </div>
        </div>

        <div className="flex items-center">
          <button onClick={() => setShowNotifications((prev) => !prev)}>
            <Bell className="text-gray-500 mr-4" />
          </button>
          <img
            alt="User profile picture"
            className="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150"
            width="40"
            height="40"
          />
        </div>
      </div>

      {showNotifications && (
        <div className="fixed top-25 left-[350px] right-0 bottom-0 bg-white z-10 overflow-y-auto shadow-lg">
          <NotificationApp />
        </div>
      )}
    </>
  );
};

export default TopNavigation;
