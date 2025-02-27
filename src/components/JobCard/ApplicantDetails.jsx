import { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SlBadge } from "react-icons/sl";
import schoolIcon from "/src/assets/famicons_school-outline.png";
import schoolIcon2 from "/src/assets/School(2).png";
import schoolIcon3 from "/src/assets/School(3).png";
import Resume from "./Resume";
import Message from "./Message";
import { useNavigate } from "react-router-dom";

// HEADER with three sections: Job Application, Resume, Message
function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      {/* Left side: back/forward arrows + "1 out of 10" */}
      <div className="flex items-center space-x-2">
        {/* Back Button - Navigates to Applicants Section */}
        <button
          className="p-1 text-gray-600 hover:text-gray-900"
          onClick={() => navigate("/applicants/:jobTitle")} // Change to your applicants page route
        >
          <AiOutlineArrowLeft className="text-lg" />
        </button>
        <span className="text-sm text-gray-500">1 out of 10</span>
        <button className="p-1 text-gray-600 hover:text-gray-900">
          <AiOutlineArrowRight className="text-lg" />
        </button>
      </div>
      {/* Right side: close icon */}
      <button className="p-1 text-gray-600 hover:text-gray-900">
        <AiOutlineClose className="text-xl" />
      </button>
    </div>
  );
}

function ProfileHeaderWithTabs({ activeTab, onTabClick }) {
  return (
    <div className="bg-white shadow-sm">
      {/* Profile Info */}
      <div className="flex items-center justify-between px-4 py-4 h-38">
        <div className="flex items-center space-x-4">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h1 className="text-base font-semibold text-gray-800">
              Dr Rahul Thakar
            </h1>
            <p className="text-sm text-gray-500">
              Dermatologist at Apollo Hospital | MBBS
            </p>
          </div>
        </div>

        {/* Accept & Reject Buttons */}
        <div className="flex items-center space-x-2">
          <button
            className="bg-green-100 text-green-600 flex items-center justify-center rounded-md text-sm font-medium hover:bg-green-200"
            style={{
              width: "141px",
              height: "48px",
              borderRadius: "6px",
              padding: "12px 24px 12px 32px",
              gap: "8px",
            }}
          >
            <span>Accept</span> ✔
          </button>

          <button
            className="bg-red-100 text-red-600 flex items-center justify-center rounded-md text-sm font-medium hover:bg-red-200"
            style={{
              width: "141px",
              height: "48px",
              borderRadius: "6px",
              padding: "12px 24px 12px 32px",
              gap: "8px",
            }}
          >
            <span>Reject</span> ✖
          </button>
        </div>
      </div>

      {/* Spacing between profile details and tabs */}
      <div className="border-t border-gray-200"></div>

      {/* Tabs */}
      <div className="flex items-center space-x-6 px-4 mt-2">
        <TabItem
          label="Job Application"
          active={activeTab === "Job Application"}
          onClick={() => onTabClick("Job Application")}
        />
        <TabItem
          label="Resume"
          active={activeTab === "Resume"}
          onClick={() => onTabClick("Resume")}
        />
        <TabItem
          label="Messages"
          active={activeTab === "Messages"}
          onClick={() => onTabClick("Messages")}
        />
      </div>
    </div>
  );
}

function TabItem({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative py-3 text-sm font-medium text-gray-600 hover:text-gray-800 transition ${
        active ? "text-gray-800" : ""
      }`}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
      )}
    </button>
  );
}

function ProfileHeader({ activeTab, onTabClick }) {
  return (
    <div>
      <TopBar />
      <ProfileHeaderWithTabs activeTab={activeTab} onTabClick={onTabClick} />
      <div className="mt-6">
        {activeTab === "jobApplication" && <AboutSection />}
        {activeTab === "Resume" && <Resume />}
        {activeTab === "Messages" && <Message />}
      </div>
    </div>
  );
}

// About + Qualification Container with a tracking line style
function AboutSection() {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 md:p-6">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">About</h2>
      {/* Paragraph */}
      <p className="text-sm text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Et quam nisi auctor quis.
        Faucibus fermentum accumsan elementum mattis accumsan turpis. Cras.
      </p>
    </div>
  );
}

// QUALIFICATION SECTION
function QualificationSection() {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 md:p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Qualification
      </h2>
      <div className="space-y-4">
        <QualificationItem
          icon={<img src={schoolIcon} alt="School" className="w-5 h-5" />}
          title="Doctorate of Medicine in Dermatology (DM)"
          institute="All India Institute of Medical Sciences (AIIMS), New Delhi"
          date="March 2022 – March 2025"
        />
        <QualificationItem
          icon={<img src={schoolIcon2} alt="School" className="w-5 h-5" />}
          title="Doctor of Medicine in Dermatology (MD)"
          institute="All India Institute of Medical Sciences (AIIMS), New Delhi"
          date="March 2018 – March 2021"
        />
        <QualificationItem
          icon={<img src={schoolIcon3} alt="School" className="w-5 h-5" />}
          title="Bachelor of Medicine and Bachelor of Surgery (MBBS)"
          institute="All India Institute of Medical Sciences (AIIMS), New Delhi"
          date="March 2013 – March 2018"
        />
      </div>
    </div>
  );
}

function QualificationItem({ icon, title, institute, date }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{institute}</p>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
      </div>
    </div>
  );
}

// Work Experience with a similar tracking line style
function WorkExperienceSection() {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 md:p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Work Experience
      </h2>
      <div className="space-y-6">
        <WorkExperienceItem
          icon={<MdWork className="text-blue-500 text-xl" />}
          title="Dermatologist"
          organization="All India Institute of Medical Sciences (AIIMS), New Delhi"
          date="Job | March 2021 – Present"
          bulletPoints={[
            "Lorem ipsum dolor sit amet consectetur. Mauris cursus tempus vitae congue.",
            "Quisque amet nisi in tortor. Aliquet blandit congue vel porttitor habitant ultrices.",
            "Morbi mi. Lorem ipsum dolor sit amet consectetur.",
          ]}
        />
        <WorkExperienceItem
          icon={<MdWork className="text-blue-500 text-xl" />}
          title="Dermatologist"
          organization="All India Institute of Medical Sciences (AIIMS), New Delhi"
          date="Job | March 2021 – Present"
          bulletPoints={[
            "Lorem ipsum dolor sit amet consectetur. Mauris cursus tempus vitae congue.",
            "Quisque amet nisi in tortor. Aliquet blandit congue vel porttitor habitant ultrices.",
            "Morbi mi. Lorem ipsum dolor sit amet consectetur.",
          ]}
        />
      </div>
    </div>
  );
}

function WorkExperienceItem({ icon, title, organization, date, bulletPoints }) {
  return (
    <div className="flex items-start space-x-3">
      {/* Icon on the left */}
      <div className="mt-1">{icon}</div>
      {/* Text content on the right */}
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600 mt-0.5">{organization}</p>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          {bulletPoints.map((point, i) => (
            <li key={i} className="text-sm text-gray-600 leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Combined Skills and Certificates/Awards container
function SkillsCertificatesSection() {
  const skills = ["Dermatology", "Cosmetology", "Patient Management"];
  return (
    <div className="bg-white rounded-md shadow-sm p-4 md:p-6">
      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-block bg-blue-50 text-blue-700 text-sm py-1 px-3 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      {/* Certificates & Awards */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Certificates &amp; Awards
        </h2>
        <div className="mt-4 space-y-3">
          <CertificateItem
            name="Certificate Name"
            issuer="AIIMS, New Delhi"
            date="March 2021"
            icon={<SlBadge />}
          />
          <CertificateItem
            name="Award Name"
            issuer="XYZ Organization"
            date="June 2019"
            icon={<SlBadge />}
          />
        </div>
      </div>
    </div>
  );
}

function CertificateItem({ name, issuer, date, icon }) {
  return (
    <div className="flex items-start space-x-3">
      {icon}
      <div className="text-sm text-gray-600">
        <p className="font-medium text-gray-800">{name}</p>
        <p className="mt-1">
          {issuer} | {date}
        </p>
      </div>
    </div>
  );
}

// RIGHT COLUMN SECTIONS

function InterviewDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState("Interview");

  const toggleOpen = () => setIsOpen(!isOpen);

  // Define colors based on selected stage
  const getColor = () => {
    switch (selectedStage) {
      case "Reviewing":
        return "#1BA345"; // Green
      case "Rejected":
        return "#FB2D83"; // Red
      default:
        return "#FB2D83"; // Default Pink
    }
  };

  return (
    <div
      className="rounded-md shadow-sm"
      style={{
        border: `1px solid ${getColor()}`,
        backgroundColor: `${getColor()}4D`,
      }}
    >
      {/* Header Row */}
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

      {/* Dropdown Content */}
      {isOpen && (
        <div className="bg-white p-4 space-y-3 rounded-b-md">
          <button
            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
            onClick={() => setSelectedStage("Interview")}
          >
            Interview
          </button>
          <button
            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
            onClick={() => setSelectedStage("Reviewing")}
          >
            Reviewing
          </button>
          <button
            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
            onClick={() => setSelectedStage("Rejected")}
          >
            Rejected
          </button>
        </div>
      )}
    </div>
  );
}

function InterviewStage({ label }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-700">{label}</span>
      <button className="text-sm text-blue-500 hover:text-blue-600">
        Edit
      </button>
    </div>
  );
}

function PersonalInformation() {
  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <h2 className="text-base font-semibold text-gray-800 mb-3">
        Personal Information
      </h2>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">Email Address</span>
        <a
          href="mailto:rahulthakar@gmail.com"
          className="text-sm text-blue-600 hover:underline"
        >
          rahulthakar@gmail.com
        </a>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">Mobile No.</span>
        <a
          href="tel:+919034573753"
          className="text-sm text-blue-600 hover:underline"
        >
          +91 9034573753
        </a>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Location</span>
        <span className="text-sm text-gray-700">Dwarka, Delhi</span>
      </div>
    </div>
  );
}

function MatchPercentage() {
  const percentage = 30;

  const qualification = "MBBS";
  const experience = "6 Year";
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
    <div className="bg-white rounded-md shadow-sm p-4 md:p-6 text-center">
      {/* Match Percentage Chart */}
      <div className="mx-auto my-4" style={{ width: "120px", height: "120px" }}>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "semi-rounded",
            textSize: "20px",
            pathColor: "#3B82F6",
            textColor: "#1F2937",
            trailColor: "#E5E7EB",
            backgroundColor: "#fff",
          })}
          strokeWidth={10}
        />
      </div>
      <p className="text-2xl font-semibold text-gray-800 mb-1">{percentage}%</p>
      <p className="text-sm text-gray-500 mb-4">Match Percentage</p>
      <hr className="mb-4" />

      {/* Qualification */}
      <div className="text-left">
        <h3 className="text-lg font-semibold text-gray-800">Qualification</h3>
        <span className="inline-block bg-blue-500 text-white text-sm py-1 px-3 rounded-full mt-2">
          {qualification}
        </span>
      </div>

      {/* Experience */}
      <div className="text-left mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Experience</h3>
        <span className="inline-block bg-red-100 text-red-600 text-sm py-1 px-3 rounded-full mt-2">
          {experience}
        </span>
      </div>

      {/* Skills */}
      <div className="text-left mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`inline-block text-sm py-1 px-3 rounded-full ${
                skill.matched
                  ? "bg-blue-500 text-white"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="text-left mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Language</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {languages.map((lang) => (
            <span
              key={lang.name}
              className={`inline-block text-sm py-1 px-3 rounded-full ${
                lang.matched
                  ? "bg-blue-500 text-white"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {lang.name}
            </span>
          ))}
        </div>
      </div>

      {/* Specialization */}
      <div className="text-left mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Specialization</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {specializations.map((spec) => (
            <span
              key={spec.name}
              className={`inline-block text-sm py-1 px-3 rounded-full ${
                spec.matched
                  ? "bg-blue-500 text-white"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {spec.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// function SpecializationSection() {
//   return (
//     <div className="bg-white rounded-md shadow-sm p-4 md:p-6">
//       <h2 className="text-lg font-semibold text-gray-800">Specialization</h2>
//       <p className="text-sm text-gray-600 mt-2">Medical Dermatology</p>
//     </div>
//   );
// }

export function ApplicantDetails() {
  const [activeTab, setActiveTab] = useState("Resume");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ProfileHeader activeTab={activeTab} onTabClick={handleTabClick} />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <AboutSection />
            <QualificationSection />
            <WorkExperienceSection />
            <SkillsCertificatesSection />
          </div>
          <div className="md:col-span-1 space-y-6">
            <InterviewDropdown />
            <PersonalInformation />
            <MatchPercentage />
          </div>
        </div>
      </div>
    </div>
  );
}
