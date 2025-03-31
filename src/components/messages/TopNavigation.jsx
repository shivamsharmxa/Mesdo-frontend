import { Search, Bell } from "lucide-react";

const TopNavigation = () => {
  return (
    <div className="fixed top-2 left-0 right-0 h-16 bg-white border-b border-gray-200 flex justify-between items-center px-4 z-10 md:px-34 lg:px-44">
      <div className="flex items-center">
        <span className="text-xl font-semibold">Mesdo</span>
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
        <Bell className="text-gray-500 mr-4" />
        <img
          alt="User profile picture"
          className="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150"
          width="40"
          height="40"
        />
      </div>
    </div>
  );
};

export default TopNavigation;
