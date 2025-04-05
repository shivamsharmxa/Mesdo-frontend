import { useState } from "react";
import {
  Bell,
  MessageCircle,
  MoreHorizontal,
  Search,
  Settings,
  ChevronRight,
  Edit,
  Link2,
  ExternalLink,
  MapPin,
} from "lucide-react";

const peopleatApollo = [
  {
    name: "Alena Baptista",
    role: "Dental Surgeon | Apollo Hospitals",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Mira Curtis",
    role: "Dental Surgeon | Apollo Hospitals",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Ashlynn Rosser",
    role: "Dental Surgeon | Apollo Hospitals",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Alfonso Siphron",
    role: "Dental Surgeon | Apollo Hospitals",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Jakob Dias",
    role: "Dental Surgeon | Apollo Hospitals",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const ProfileSection = () => {
  return (
    <div className="w-full">
      {/* Cover Photo */}
      <div className="bg-blue-500 h-48 rounded-t-lg relative">
        <img
          src="https://picsum.photos/1200/300"
          alt="Cover Photo"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Profile Info */}
      <div className="bg-white p-6 rounded-b-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              alt="Profile Picture"
              className="w-24 h-24 rounded-full mr-6 -mt-2 border-4 border-white"
              src="https://picsum.photos/100"
              width="100"
              height="100"
            />
            <div>
              <h2 className="text-2xl font-semibold">Apollo Hospital</h2>
              <p className="text-gray-600 text-sm">Delhi, India</p>
              <p className="text-[14px] text-[#1890FF] mt-1">10k Followers</p>
            </div>
          </div>
          <div className="flex mt-4 items-center">
            <button className="bg-gray-200 p-2 rounded mr-2 hover:bg-gray-300 transition duration-300">
              <MoreHorizontal className="text-gray-700 w-5 h-5" />
            </button>
            <button className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded flex mr-2 hover:bg-blue-600 transition duration-300">
              <span className="w-4 h-4 mr-1">+</span> Follow
            </button>
            <button className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded flex items-center mr-2 hover:bg-gray-300 transition duration-300">
              <MessageCircle className="w-4 h-4 mr-1" /> Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabsSection = ({ activeTab, setActiveTab }) => {
  const tabs = ["Overview", "Jobs", "People", "Connection"];

  return (
    <div className="mt-6">
      {/* Tabs Container with Border */}
      <div className="border border-gray-200 rounded-lg p-2 bg-white">
        <div className="grid grid-cols-4 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-300
            ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {activeTab === "Overview" && (
          <div>
            {/* About Section */}
            <div className="bg-white rounded-md shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                About
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                A highly experienced and dedicated Cardiologist with over 10
                years of expertise in diagnosing and treating complex heart
                conditions. Passionate about advancing patient care through
                innovative treatments and cutting-edge research in
                cardiovascular health.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Currently leading a specialized team at MediCare Hospital,
                providing high-quality patient care and implementing advanced
                medical techniques. Committed to continuous learning,
                mentorship, and contributing to the medical community through
                research publications and healthcare initiatives.
              </p>
            </div>
            {/* Specialties Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[16px] font-semibold text-gray-900">
                  Specialties
                </h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Hospital",
                  "Clinic",
                  "Health Insurance",
                  "Pharmacy",
                  "Apollo Lifeline",
                  "Hospital",
                  "Clinic",
                  "Health Insurance",
                  "Pharmacy",
                  "Apollo Lifeline",
                ].map((specialty) => (
                  <span
                    key={specialty}
                    className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-[14px]"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Jobs</h2>
              <div className="space-y-4">
                {/* <EducationItem
                  title="MBBS"
                  institute="XYZ University"
                  date="2010 - 2015"
                  description="Lorem ipsum dolor sit amet consectetur. Quis auctor eu nisl amet consectetur et. Nisl sit pellentesque sit in euismod. Sit amet risus sit lorem."
                />
                <EducationItem
                  title="MD"
                  institute="ABC University"
                  date="2015 - 2018"
                  description="Lorem ipsum dolor sit amet consectetur. Quis auctor eu nisl amet consectetur et. Nisl sit pellentesque sit in euismod. Sit amet risus sit lorem."
                /> */}
              </div>
            </div>

            {/* People at Apollo Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[16px] font-semibold text-gray-900">
                  People at Apollo
                </h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <Link2 className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-6">
                {peopleatApollo.map((person, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-[14px] font-medium text-gray-900">
                          {person.name}
                        </h3>
                        <p className="text-[14px] text-gray-600">
                          {person.role}
                        </p>
                      </div>
                    </div>
                    <button className="text-[#1890FF] text-[14px] font-medium hover:underline">
                      + Follow
                    </button>
                  </div>
                ))}
                <button className="w-full text-center text-[14px] text-[#1890FF] hover:underline flex items-center justify-center">
                  Show More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Social Activity" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Activity</h3>
            <p className="text-gray-700">No recent activity.</p>
          </div>
        )}
        {activeTab === "Applied Jobs" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Applied Jobs</h3>
            <p className="text-gray-700">No jobs applied yet.</p>
          </div>
        )}
        {activeTab === "Saved" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Saved Items</h3>
            <p className="text-gray-700">No saved items.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const RecruiterProfile = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm fixed inset-x-0 top-0 z-40 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
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
              src="https://picsum.photos/40"
              width="40"
              height="40"
            />
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <div className="w-1/5 bg-white fixed inset-y-0 left-0 z-30 p-4 overflow-y-auto mt-20 ml-7">
          {/* Switch Card */}
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
              <NavItem
                icon={<Settings size={18} />}
                text="Profile"
                active={true}
              />
              <NavItem icon={<Settings size={18} />} text="Recruitment" />
              <NavItem icon={<Settings size={18} />} text="Feed" />
              <NavItem icon={<Settings size={18} />} text="Messages" />
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

        {/* Main Content */}
        <div className="w-4/5 ml-[23%] mt-7 mr-7">
          {/* Profile Section (Full Width) */}
          <ProfileSection />

          {/* Tabs and Content (Standard Layout) */}
          <div className="flex">
            <div className="w-2/3 p-6">
              <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Right Sidebar */}
            <div className="w-1/3 p-6">
              {/* More Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-[16px] font-semibold text-gray-900">
                    More Information
                  </h2>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  <InfoItem label="Website" value="www.apollo.com" isLink />
                  <InfoItem label="Organization Size" value="1000-5000" />
                  <InfoItem label="Type" value="Public" />
                  <InfoItem label="Founded" value="1999" />
                  <InfoItem label="Industry" value="Hospital & Healthcare" />
                  <InfoItem label="Socials" value="Hospital & Healthcare" />
                </div>
              </div>
              {/* <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  People you might know
                </h3>
                <ul className="space-y-4">
                  {people.map((person, index) => (
                    <li key={index} className="flex items-center">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800">
                          {person.name}
                        </h4>
                        <p className="text-xs text-gray-500">{person.role}</p>
                      </div>
                      <button className="ml-auto text-blue-500 text-sm font-medium flex items-center gap-1 hover:text-blue-600 transition">
                        <Plus size={14} />
                        Follow
                      </button>
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-7">
                <img
                  alt="Map showing the location of the branches"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="https://storage.googleapis.com/a1aa/image/UON34o44GtUuLhUko-NgbOZtFjGoTkCqN7k1OGTaHPg.jpg"
                  width="600"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-4">Address (10)</h2>
                  <div className="mb-4">
                    <h3 className="text-sm font-sm">Main Branch</h3>
                    <div className="flex items-start mt-2">
                      <i className="fas fa-map-marker-alt text-gray-500 mt-1"></i>
                      <MapPin />
                      <p className="ml-2 text-gray-700 font-sm text-[14px]">
                        Apollo Hospitals Hyderabad Hyderabad, Telangana 500033,
                        IN
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-sm">Other Branch</h3>
                    <div className="flex items-start mt-2">
                      <i className="fas fa-map-marker-alt text-gray-500 mt-1"></i>
                      <MapPin />
                      <p className="ml-2 text-gray-700 text-[14px]">
                        Apollo Hospitals Hyderabad Hyderabad, Telangana 500033,
                        IN
                      </p>
                    </div>
                    <div className="flex items-start mt-2">
                      <i className="fas fa-map-marker-alt text-gray-500 mt-1"></i>
                      <MapPin />
                      <p className="ml-2 text-gray-700 text-[14px]">
                        Apollo Hospitals Hyderabad Hyderabad, Telangana 500033,
                        IN
                      </p>
                    </div>
                  </div>
                  <a
                    className="text-blue-500 hover:underline flex items-center"
                    href="#"
                  >
                    See All
                    <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const InfoItem = ({ label, value, isLink = false }) => (
  <div className="flex justify-between items-center">
    <span className="text-[14px] text-gray-600">{label}</span>
    {isLink ? (
      <a
        href={`https://${value}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[14px] text-[#1890FF] hover:underline flex items-center"
      >
        {value}
        <ExternalLink className="w-3 h-3 ml-1" />
      </a>
    ) : (
      <span className="text-[14px] text-gray-900">{value}</span>
    )}
  </div>
);
const NavItem = ({ icon, text, active = false }) => {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-all
            ${
              active
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`}
      >
        {icon}
        <span>{text}</span>
      </a>
    </li>
  );
};

export default RecruiterProfile;
