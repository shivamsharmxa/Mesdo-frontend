import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Hospital,
  ChevronRight,
  ExternalLink,
  Edit,
  XCircleIcon,
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

const JobDetails = ({ jobId, onClose }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Job Description");

  useEffect(() => {
    console.log("Received jobId:", jobId); // Add this line
    console.log("Type of jobId:", typeof jobId); // And this line

    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log(`Fetching job with ID: ${jobId}`); // Debug log

        const res = await axios.get(`http://localhost:5005/api/jobs/${jobId}`, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000,
        });

        console.log("Full API response:", res); // Debug log

        if (!res.data) {
          throw new Error("Empty response from server");
        }

        const jobData = res.data.job || res.data;

        if (!jobData) {
          throw new Error("Invalid job data format");
        }

        setJob(jobData);
      } catch (err) {
        console.error("Detailed error:", {
          message: err.message,
          response: err.response,
          stack: err.stack,
        });

        let errorMessage = "Failed to load job details";

        if (err.response) {
          errorMessage =
            err.response.data?.message ||
            `Server error: ${err.response.status}`;
        } else if (err.request) {
          errorMessage = "No response from server - is it running?";
        } else {
          errorMessage = err.message;
        }

        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (jobId && /^[0-9a-fA-F]{24}$/.test(jobId)) {
      fetchJobDetails();
    } else {
      console.log("Failed ID validation. ID value:", jobId); // Add this
      setError("Invalid job ID format");
      setLoading(false);
    }
  }, [jobId]);

  const renderDebugInfo = () => (
    <div className="bg-gray-100 p-4 rounded-lg text-xs mt-4">
      <h3 className="font-bold mb-2">Debug Information:</h3>
      <p>Job ID: {jobId}</p>
      <p>Loading: {loading.toString()}</p>
      <p>Error: {error || "null"}</p>
      <p>Job Data: {job ? JSON.stringify(job, null, 2) : "null"}</p>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error loading job details
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
                <p className="mt-2">
                  Please check:
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Is the backend server running?</li>
                    <li>Is the job ID correct?</li>
                    <li>Check browser console for more details</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
        {renderDebugInfo()}
      </div>
    );
  }

  if (!job) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">No job data found</p>
        {renderDebugInfo()}
      </div>
    );
  }

  // Mock similar jobs data (you might want to fetch this from API)
  const similarJobs = [
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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6">
      {/* Left Column */}
      <div className="md:col-span-2 space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 w-265">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src={job.companyLogo || "https://via.placeholder.com/80"}
                alt={job.company}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <span className="bg-purple-50 text-purple-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-1">
                  {job.status || "Active"}
                </span>
                <h1 className="text-xl font-semibold">{job.title}</h1>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span>{job.company}</span>
                  <span>|</span>
                  <span>{job.location}</span>
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
                  { icon: MapPin, label: "Area", value: job.area || "Chembur" },
                  {
                    icon: Briefcase,
                    label: "Job Type",
                    value: job.jobType || "Full-Time",
                  },
                  {
                    icon: DollarSign,
                    label: "Salary",
                    value: job.salary
                      ? `${job.salary.min || 0} - ${job.salary.max || 0} ${
                          job.salary.currency || "INR"
                        }`
                      : "Not specified",
                  },
                  {
                    icon: Clock,
                    label: "Experience",
                    value: job.experience
                      ? `${job.experience.min || 0}-${
                          job.experience.max || 0
                        } Years`
                      : "Not specified",
                  },
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
                  {job.description || "No description provided."}
                </p>
              </Section>
            </div>

            {/* Specialization */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <Section title="Specialization Required">
                <div className="flex flex-wrap gap-2 mb-2">
                  {job.skills && job.skills.length > 0
                    ? job.skills.map((skill) => (
                        <Tag key={skill} label={skill} />
                      ))
                    : [
                        "Hospital",
                        "Clinic",
                        "Health Insurance",
                        "Pharmacy",
                      ].map((tag) => <Tag key={tag} label={tag} />)}
                </div>
              </Section>
            </div>

            {/* Additional Detail - Kept static as per your request */}
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
                {similarJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Right Column */}
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
export default JobDetails;
