import NavItem from "./NavItem";
import { Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-70 ml-15 bg-white fixed inset-y-0 left-0 z-30 p-4 overflow-y-auto mt-24 mb-9">
      <div className="mx-1 p-3 bg-gray-50 border rounded-lg shadow-sm flex items-center justify-between mb-5 border-[#FFFFFF]">
        <div className="flex items-center space-x-3">
          <Settings className="h-8 w-8 text-blue-500" />
          <div>
            <h2 className="text-sm font-medium text-gray-800">Hospital</h2>
            <p className="text-[11px] text-gray-500 cursor-pointer hover:underline">
              Switch to personal
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-500 rounded-full">
          <span className="text-[11px]">▼</span>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Main Menu
        </h3>
        <ul className="space-y-2">
          <NavItem icon={<Settings size={18} />} text="Dashboard" />
          <NavItem icon={<Settings size={18} />} text="Profile" />
          <NavItem icon={<Settings size={18} />} text="Recruitment" />
          <NavItem icon={<Settings size={18} />} text="Feed" />
          <NavItem
            icon={<Settings size={18} />}
            text="Messages"
            active={true}
          />
        </ul>
      </div>

      <div className="mb-5">
        <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Others
        </h3>
        <ul className="space-y-2">
          <NavItem icon={<Settings size={18} />} text="Candidate Search" />
          <NavItem icon={<Settings size={18} />} text="Analytics" />
        </ul>
      </div>

      <div className="mb-5">
        <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Preferences
        </h3>
        <ul className="space-y-2">
          <NavItem icon={<Settings size={18} />} text="Help Center" />
          <NavItem icon={<Settings size={18} />} text="Settings" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
