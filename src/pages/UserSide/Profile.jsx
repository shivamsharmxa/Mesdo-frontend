import { useState } from "react";
import mesdoLogo from "../../assets/mesdo_logo.jpeg";
import { MdWork } from "react-icons/md";
import schoolIcon from "/src/assets/famicons_school-outline.png";
import {
  Bell,
  BriefcaseBusiness,
  Hospital,
  LayoutPanelLeft,
  MessageCircle,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Rss,
  Search,
} from "lucide-react";
import hospitalicon from "../../assets/hospitalicon.png";
import { SlBadge } from "react-icons/sl";

const people = [
  {
    name: "Alena Baptista",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Mira Curtis",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Ashlynn Rosser",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Alfonso Siphron",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Jakob Dias",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Chance Calzoni",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

function WorkExperienceItem({ icon, title, organization, date, description }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{organization}</p>
        <p className="text-xs text-gray-500">{date}</p>
        <p className="text-sm text-gray-700 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function ExperienceItem() {
  return (
    <div className="flex items-start space-x-3">
      <SlBadge className="text-blue-500 w-10 h-10 mt-1" />
      <div>
        <p className="text-sm font-semibold text-gray-800">
          10 years of Experience
        </p>
        <p className="text-sm text-gray-600">
          Lorem ipsum description Lorem ipsum description Lorem ipsum
          description
        </p>
      </div>
    </div>
  );
}

function EducationItem({ icon, title, institute, date, description }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{institute}</p>
        <p className="text-xs text-gray-500">{date}</p>
        <p className="text-sm text-gray-700 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

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
              <h2 className="text-2xl font-semibold">Dr. Rahul Sharma</h2>
              <p className="text-gray-600 text-sm">
                Heart Specialist at Medico
              </p>
            </div>
          </div>
          <div className="flex mt-4 items-center">
            <button className="bg-gray-200 p-2 rounded mr-2 hover:bg-gray-300 transition duration-300">
              <MoreHorizontal className="text-gray-700 w-5 h-5" />
            </button>
            <button className="bg-blue-500 text-sm text-white px-4 py-2 rounded flex mr-2 hover:bg-blue-600 transition duration-300">
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
  const tabs = ["Overview", "Social Activity", "Applied Jobs", "Saved"];

  return (
    <div className="mt-6">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-12 py-2 text-sm font-medium rounded-lg transition duration-300
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

      <div className="mt-4">
        {activeTab === "Overview" && (
          <div>
            <div className="bg-white rounded-md shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                About
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                A highly experienced and dedicated **Cardiologist** with over
                **10 years** of expertise in diagnosing and treating complex
                heart conditions. Passionate about advancing patient care
                through **innovative treatments** and **cutting-edge research**
                in cardiovascular health.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Currently leading a **specialized team** at MediCare Hospital,
                providing high-quality patient care and implementing **advanced
                medical techniques**. Committed to **continuous learning**,
                mentorship, and contributing to the **medical community**
                through research publications and healthcare initiatives.
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mt-3">
                Expertise
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Cardiac Imaging & Diagnostics</li>
                <li>Interventional Cardiology & Angioplasty</li>
                <li>Heart Disease Prevention & Treatment</li>
                <li>Hypertension & Cholesterol Management</li>
              </ul>
            </div>

            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Work Experience
              </h2>
              <div className="space-y-4">
                <WorkExperienceItem
                  icon={<MdWork className="text-blue-500 text-xl" />}
                  title="Senior Cardiologist"
                  organization="MediCare Hospital"
                  date="2020 - Present"
                  description="Specializing in advanced cardiovascular treatments, patient care, and medical research. Leading a team of healthcare professionals to provide top-quality medical services."
                />
                <WorkExperienceItem
                  icon={<MdWork className="text-blue-500 text-xl" />}
                  title="Resident Doctor"
                  organization="City Health Clinic"
                  date="2015 - 2020"
                  description="Worked in the cardiology department, assisting in surgeries, patient care, and diagnostics. Gained hands-on experience in emergency response and critical care."
                />
              </div>
            </div>

            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Education
              </h2>
              <div className="space-y-4">
                <EducationItem
                  icon={
                    <img src={schoolIcon} className="text-blue-500 text-xl" />
                  }
                  title="MBBS"
                  institute="XYZ University"
                  date="2010 - 2015"
                  description="Lorem ipsum dolor sit amet consectetur. Quis auctor eu nisl amet consectetur et. Nisl sit pellentesque sit in euismod. Sit amet risus sit lorem."
                />
                <EducationItem
                  icon={
                    <img src={schoolIcon} className="text-blue-500 text-xl" />
                  }
                  title="MD"
                  institute="ABC University"
                  date="2015 - 2018"
                  description="Lorem ipsum dolor sit amet consectetur. Quis auctor eu nisl amet consectetur et. Nisl sit pellentesque sit in euismod. Sit amet risus sit lorem."
                />
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

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm fixed inset-x-0 top-0 z-40 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
          <div className="flex items-center">
            <img src={mesdoLogo} alt="Logo" className="h-10 w-10 -ml-13" />
            <span className="ml-2 text-xl font-semibold">Mesdo</span>
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
            <Bell className="text-gray-500"></Bell>
            <i className="fas fa-bell text-xl text-gray-500 mr-4"></i>

            <img
              alt="User profile picture"
              className="w-10 h-10 rounded-full"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/mjnzuz-z-y1Fmo5e0SW2spzUAb5hmXzqGeX1_-9gcAE.jpg"
              width="40"
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
              <img src={hospitalicon} alt="Mesdo Logo" className="h-8 w-8" />
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

          <div className="mb-5">
            <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Others
            </h3>
            <ul className="space-y-2">
              <NavItem
                icon={<LayoutPanelLeft size={18} />}
                text="Candidate Search"
              />
              <NavItem icon={<Hospital size={18} />} text="Analytics" />
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Preferences
            </h3>
            <ul className="space-y-2">
              <NavItem
                icon={<LayoutPanelLeft size={18} />}
                text="Help Center"
              />
              <NavItem icon={<Hospital size={18} />} text="Settings" />
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
              <div className="bg-white rounded-md shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  About the Doctor
                </h2>
                <div className="space-y-4">
                  <ExperienceItem />
                  <ExperienceItem />
                </div>
              </div>
              <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default Profile;
