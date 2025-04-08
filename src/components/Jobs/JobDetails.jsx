import { useState } from "react";
import {
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Hospital,
  ChevronRight,
  ExternalLink,
  Edit,
} from "lucide-react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  MdLocalHospital,
  MdWorkOutline,
  MdWorkspacesOutline,
} from "react-icons/md";
import HospitalDetails from "./HospitalDetail";
import JobCard from "./JobCard";

const BLUE = "#1890FF";

const InterviewDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState("Interview");

  const toggleOpen = () => setIsOpen(!isOpen);

  const getColor = () => {
    switch (selectedStage) {
      case "Reviewing":
        return "#1BA345";
      case "Rejected":
        return "#FB2D83";
      default:
        return BLUE;
    }
  };

  return (
    <div
      className="rounded-xl shadow-sm"
      style={{
        border: `1px solid ${getColor()}`,
        backgroundColor: `${getColor()}1A`,
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer"
        onClick={toggleOpen}
      >
        <h2 className="text-base font-medium" style={{ color: getColor() }}>
          {selectedStage}
        </h2>
        {isOpen ? (
          <AiOutlineUp className="text-sm" style={{ color: getColor() }} />
        ) : (
          <AiOutlineDown className="text-sm" style={{ color: getColor() }} />
        )}
      </div>

      {isOpen && (
        <div className="bg-white p-4 space-y-3 rounded-b-xl shadow-inner">
          {["Interview", "Reviewing", "Rejected"].map((stage) => (
            <button
              key={stage}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setSelectedStage(stage)}
            >
              {stage}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const PersonalInformation = () => (
  <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
    <h2 className="text-base font-semibold text-gray-800 mb-3">
      Personal Information
    </h2>
    <div className="flex flex-col gap-2 text-sm text-gray-700">
      <div className="flex justify-between">
        <span>Email Address</span>
        <a
          href="mailto:rahulthakar@gmail.com"
          className="text-[#1890FF] hover:underline"
        >
          rahulthakar@gmail.com
        </a>
      </div>
      <div className="flex justify-between">
        <span>Mobile No.</span>
        <a href="tel:+919034573753" className="text-[#1890FF] hover:underline">
          +91 9034573753
        </a>
      </div>
      <div className="flex justify-between">
        <span>Location</span>
        <span>Dwarka, Delhi</span>
      </div>
    </div>
  </div>
);

const MatchPercentage = () => {
  const percentage = 30;

  const skills = [
    { name: "Communication", matched: true },
    { name: "Manual Dexterity", matched: false },
  ];
  const languages = [
    { name: "Hindi", matched: true },
    { name: "English", matched: false },
  ];
  const specializations = [
    { name: "Orthodontics", matched: true },
    { name: "Periodontics", matched: false },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100 mt-57">
      <h3 className="text-base font-semibold text-gray-800 mb-1 text-start">
        Match Percentage
      </h3>
      <p className="text-sm text-gray-500 text-start">
        Here's how well this candidate matches your job criteria.
      </p>

      <div className="mx-auto my-6" style={{ width: 120, height: 120 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "20px",
            pathColor: BLUE,
            textColor: "#1F2937",
            trailColor: "#E5E7EB",
          })}
          strokeWidth={10}
        />
      </div>

      <p className="text-2xl font-semibold text-gray-800">{percentage}%</p>
      <p className="text-sm text-gray-500 mb-4">Match Score</p>
      <hr className="mb-4" />

      <DetailSection title="Qualification" items={["MBBS"]} matched />
      <DetailSection title="Experience" items={["6 Year"]} matched={false} />
      <DetailSection title="Skills" items={skills} />
      <DetailSection title="Language" items={languages} />
      <DetailSection title="Specialization" items={specializations} />
    </div>
  );
};

const DetailSection = ({ title, items, matched = true }) => (
  <div className="text-left mt-4">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item) => {
        const name = typeof item === "string" ? item : item.name;
        const isMatched = typeof item === "string" ? matched : item.matched;
        return (
          <span
            key={name}
            className={`inline-block text-sm py-1 px-3 rounded-full ${
              isMatched ? "bg-[#1890FF] text-white" : "bg-red-100 text-red-600"
            }`}
          >
            {name}
          </span>
        );
      })}
    </div>
  </div>
);

const ReviewRow = ({ label, value }) => (
  <div className="flex justify-between gap-4 mb-3 text-sm">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium text-right text-gray-800">{value}</span>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-4">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const Tag = ({ label }) => (
  <span className="px-4 py-1 bg-gray-100 rounded-full text-gray-700 text-sm">
    {label}
  </span>
);

const JobDetails = () => {
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

  const [activeTab, setActiveTab] = useState("Job Description");
  const jobs = [
    {
      id: 1,
      logo: "https://randomuser.me/api/portraits/men/3.jpg",
      status: "Recently active",
      postedTime: "Posted 2 days ago",
      saved: false,
      title: "Dermatologist Specialist",
      company: "Apollo Hospital",
      location: "Mumbai, Maharashtra",
      tags: ["MBBS", "Full-Time", "10-15 Years", "7.2 - 10L / year"],
      matchPercentage: 85,
    },
    {
      id: 2,
      logo: "https://randomuser.me/api/portraits/men/2.jpg",
      status: "Recently active",
      postedTime: "Posted 1 day ago",
      saved: true,
      title: "Cardiologist",
      company: "Fortis Hospital",
      location: "Delhi, NCR",
      tags: ["MD", "Full-Time", "8-12 Years", "12 - 15L / year"],
      matchPercentage: 92,
    },
    {
      id: 3,
      logo: "https://randomuser.me/api/portraits/women/1.jpg",
      status: "Urgently hiring",
      postedTime: "Posted 3 days ago",
      saved: false,
      title: "Pediatric Surgeon",
      company: "Manipal Hospital",
      location: "Bangalore, Karnataka",
      tags: ["MS", "Part-Time", "5-8 Years", "6 - 8L / year"],
      matchPercentage: 78,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6">
      {/* Left Column */}
      <div className="md:col-span-2 space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 w-265">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop"
                alt="Apollo Hospital"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <span className="bg-purple-50 text-purple-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-1">
                  Recently Active
                </span>
                <h1 className="text-xl font-semibold">
                  Dermatologist Specialist
                </h1>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span>Apollo Hospital</span>
                  <span>|</span>
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                className="px-5 py-2 rounded-md text-white"
                style={{ backgroundColor: BLUE }}
              >
                Apply Now
              </button>
              <button className="px-5 py-2 rounded-md bg-[#E6F4FF] text-[#1890FF] hover:bg-[#d5ecff] transition">
                Add Note
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b mb-6 text-sm">
            <button
              className={`flex items-center gap-1 pb-1 ${
                activeTab === "Job Description"
                  ? "border-b-2 font-medium text-[#1890FF] border-[#1890FF]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Job Description")}
            >
              <MdWorkOutline size={16} /> Job Description
            </button>
            <button
              className={`flex items-center gap-1 pb-1 ${
                activeTab === "Hospital Detail"
                  ? "border-b-2 font-medium text-[#1890FF] border-[#1890FF]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Hospital Detail")}
            >
              <MdLocalHospital size={16} /> Hospital Detail
            </button>
            <button
              className={`flex items-center gap-1 pb-1 ${
                activeTab === "Similar Job"
                  ? "border-b-2 font-medium text-[#1890FF] border-[#1890FF]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Similar Job")}
            >
              <MdWorkspacesOutline size={16} /> Similar Job
            </button>
          </div>
        </div>

        {activeTab === "Job Description" && (
          <>
            {/* Info Blocks */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: MapPin, label: "Area", value: "Chembur" },
                  { icon: Briefcase, label: "Job Type", value: "Full-Time" },
                  { icon: DollarSign, label: "Salary", value: "5-10L" },
                  { icon: Clock, label: "Experience", value: "10+ Year" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700"
                  >
                    <div className="flex items-center gap-2 mb-1 text-[#1890FF]">
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    <p className="font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <Section title="Job Description">
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Et sit quam nisi
                  auctor quis. Faucibus fermentum accumsan elementum mattis
                  accumsan turpis,Lorem ipsum dolor sit amet consectetur. Et sit
                  quam nisi auctor quis. Faucibus fermentum accumsan elementum
                  mattis accumsan turpis...
                </p>
              </Section>
            </div>

            {/* Specialization */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <Section title="Specialization Required">
                <div className="flex flex-wrap gap-2 mb-2">
                  {["Hospital", "Clinic", "Health Insurance", "Pharmacy"].map(
                    (tag) => (
                      <Tag key={tag} label={tag} />
                    )
                  )}
                </div>
              </Section>
            </div>

            {/* Additional Detail */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <Section title="Additional Detail">
                <div className="space-y-3">
                  <ReviewRow label="Employment Type" value="Full Time" />
                  <ReviewRow label="Experience Required" value="10+ Years" />
                  <ReviewRow label="Job Category" value="Doctor" />
                  <ReviewRow label="Number of Openings" value="1" />
                  <ReviewRow
                    label="Salary Range"
                    value="100000/year - 300000/year"
                  />
                  <ReviewRow
                    label="Skills"
                    value="Communication, Manual Dexterity"
                  />
                  <ReviewRow label="Qualification Required" value="MBBS" />
                  <ReviewRow label="Department" value="Dentist" />
                  <ReviewRow label="Shift" value="Morning Shift (9am - 3pm)" />
                  <ReviewRow
                    label="Preferred Language"
                    value="English, Hindi"
                  />
                  <ReviewRow
                    label="Specialization Required"
                    value="Orthodontics, Periodontics"
                  />
                </div>
              </Section>
            </div>
          </>
        )}

        {activeTab === "Hospital Detail" && (
          <div className="md:col-span-4">
            {/* Replace with real hospital details */}
            <HospitalDetails />
          </div>
        )}

        {activeTab === "Similar Job" && (
          <>
            <div className="bg-white w-300 rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                Recommendations
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                You might also like...
              </p>

              {/* Grid Layout for JobCards */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-250">
                {jobs.slice(0, 4).map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Right Column */}
      {/* Right Column (Tab-specific) */}
      <div className="space-y-6">
        {activeTab === "Job Description" && (
          <>
            <MatchPercentage />
          </>
        )}

        {activeTab === "Hospital Detail" && (
          <>
            {/* More Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-57">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[16px] font-semibold text-gray-900">
                  More Information
                </h2>
                <button className="text-gray-400 hover:text-gray-600"></button>
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

            {/* Address Section */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                alt="Map showing the location of the branches"
                className="w-full h-48 object-cover"
                height="200"
                src="https://storage.googleapis.com/a1aa/image/UON34o44GtUuLhUko-NgbOZtFjGoTkCqN7k1OGTaHPg.jpg"
                width="600"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Address (10)</h2>
                <div className="mb-4">
                  <h3 className="text-sm font-sm">Main Branch</h3>
                  <div className="flex items-start mt-2">
                    <MapPin className="text-gray-500 mt-1 w-4 h-4" />
                    <p className="ml-2 text-gray-700 font-sm text-[14px]">
                      Apollo Hospitals Hyderabad Hyderabad, Telangana 500033, IN
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-sm">Other Branch</h3>
                  <div className="flex items-start mt-2">
                    <MapPin className="text-gray-500 mt-1 w-4 h-4" />
                    <p className="ml-2 text-gray-700 text-[14px]">
                      Apollo Hospitals Hyderabad Hyderabad, Telangana 500033, IN
                    </p>
                  </div>
                  <div className="flex items-start mt-2">
                    <MapPin className="text-gray-500 mt-1 w-4 h-4" />
                    <p className="ml-2 text-gray-700 text-[14px]">
                      Apollo Hospitals Hyderabad Hyderabad, Telangana 500033, IN
                    </p>
                  </div>
                </div>
                <a
                  className="text-blue-500 hover:underline flex items-center"
                  href="#"
                >
                  See All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
