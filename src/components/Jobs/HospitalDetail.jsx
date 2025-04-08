import {
  MapPin,
  ChevronRight,
  Edit,
  Link2,
  ExternalLink,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";

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

// const ProfileSection = () => {
//   return (
//     <div className="w-full">
//       {/* Cover Photo */}
//       <div className="bg-blue-500 h-48 rounded-t-lg relative">
//         <img
//           src="https://picsum.photos/1200/300"
//           alt="Cover Photo"
//           className="w-full h-full object-cover rounded-t-lg"
//         />
//       </div>

//       {/* Profile Info */}
//       <div className="bg-white p-6 rounded-b-lg shadow-sm">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <img
//               alt="Profile Picture"
//               className="w-24 h-24 rounded-full mr-6 -mt-2 border-4 border-white"
//               src="https://picsum.photos/100"
//               width="100"
//               height="100"
//             />
//             <div>
//               <h2 className="text-2xl font-semibold">Apollo Hospital</h2>
//               <p className="text-gray-600 text-sm">Delhi, India</p>
//               <p className="text-[14px] text-[#1890FF] mt-1">10k Followers</p>
//             </div>
//           </div>
//           <div className="flex mt-4 items-center">
//             <button className="bg-gray-200 p-2 rounded mr-2 hover:bg-gray-300 transition duration-300">
//               <MoreHorizontal className="text-gray-700 w-5 h-5" />
//             </button>
//             <button className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded flex mr-2 hover:bg-blue-600 transition duration-300">
//               <span className="w-4 h-4 mr-1">+</span> Follow
//             </button>
//             <button className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded flex items-center mr-2 hover:bg-gray-300 transition duration-300">
//               <MessageCircle className="w-4 h-4 mr-1" /> Message
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const TabsSection = ({ activeTab, setActiveTab }) => {
  //   const tabs = ["Overview", "Jobs", "People", "Connection"];

  return (
    <div className="mt-6">
      {/* Tabs Container with Border */}
      {/* <div className="border border-gray-200 rounded-lg p-2 bg-white">
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
      </div> */}

      <div className="mt-4">
        <div>
          {/* About Section */}
          <div className="bg-white rounded-md shadow-sm p-6 w-175">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">About</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              A highly experienced and dedicated Cardiologist with over 10 years
              of expertise in diagnosing and treating complex heart conditions.
              Passionate about advancing patient care through innovative
              treatments and cutting-edge research in cardiovascular health.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              Currently leading a specialized team at MediCare Hospital,
              providing high-quality patient care and implementing advanced
              medical techniques. Committed to continuous learning, mentorship,
              and contributing to the medical community through research
              publications and healthcare initiatives.
            </p>
          </div>
          {/* Specialties Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6 w-175">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[16px] font-semibold text-gray-900">
                Specialties
              </h2>
              <button className="text-gray-400 hover:text-gray-600"></button>
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

          {/* People at Apollo Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6 w-175">
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
                <div key={index} className="flex items-center justify-between">
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
                      <p className="text-[14px] text-gray-600">{person.role}</p>
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

const HospitalDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-6">
      {/* Profile Section */}

      {/* Tabs and Content */}
      <div className="flex">
        <div className="w-2/3 pr-6">
          <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Right Sidebar */}
      </div>
    </div>
  );
};

export default HospitalDetails;
