import {
  Rss,
  MessageSquare,
  Search,
  HelpCircle,
  Settings,
  LayoutPanelLeft,
  Hospital,
  BriefcaseBusiness,
  ChartSpline,
} from "lucide-react";
import PropTypes from "prop-types";
import mesdoLogo from "../../assets/mesdo_logo.jpeg";
import hospitalicon from "../../assets/hospitalicon.png";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen fixed shadow-md flex flex-col">
      {/* Logo Section */}
      <div className="p-3 flex ">
        <img src={mesdoLogo} alt="Mesdo Logo" className="h-11 w-11" />
      </div>

      {/* Switch Card */}
      <div className="mx-3 p-3 bg-gray-50 border rounded-lg shadow-sm flex items-center justify-between mb-5 border-[#FFFFFF]">
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <img src={hospitalicon} alt="Mesdo Logo" className="h-8 w-8" />
          {/* Text Section */}
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

      {/* Navigation Menu */}
      <nav className="px-3">
        {/* Main Menu */}
        <div className="mb-5">
          <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Main Menu
          </h3>
          <ul className="space-y-2">
            <NavItem icon={<LayoutPanelLeft size={18} />} text="Dashboard" />
            <NavItem icon={<Hospital size={18} />} text="Profile" />
            <NavItem
              icon={<BriefcaseBusiness size={18} />}
              text="Recruitment"
            />
            <NavItem icon={<Rss size={18} />} text="Feed" />
            <NavItem icon={<MessageSquare size={18} />} text="Messages" />
          </ul>
        </div>

        {/* Others Section */}
        <div className="mb-5">
          <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Others
          </h3>
          <ul className="space-y-2">
            <NavItem icon={<Search size={18} />} text="Candidate Search" />
            <NavItem icon={<ChartSpline size={18} />} text="Analytics" />
          </ul>
        </div>

        {/* Preferences Section */}
        <div>
          <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Preferences
          </h3>
          <ul className="space-y-2">
            <NavItem icon={<HelpCircle size={18} />} text="Help Center" />
            <NavItem icon={<Settings size={18} />} text="Settings" />
          </ul>
        </div>
      </nav>
    </aside>
  );
}

/* Reusable NavItem Component */
const NavItem = ({ icon, text }) => {
  return (
    <li>
      <a
        href="#"
        className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all"
      >
        {icon}
        <span>{text}</span>
      </a>
    </li>
  );
};

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
