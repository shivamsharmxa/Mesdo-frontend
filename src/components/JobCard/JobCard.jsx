import { useState } from "react";
import PropTypes from "prop-types";
import {
  Calendar,
  ChevronDown,
  Stethoscope,
  MoreVertical,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const JobCard = ({ title, status, role, applied, shortlisted, deadline }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [jobStatus, setJobStatus] = useState(status);

  const handleStatusChange = (newStatus) => {
    setJobStatus(newStatus);
    setOpenDropdown(false);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all w-[320px] sm:w-[350px] md:w-[370px]">
      {/* Header - Status, Role, and More Icon */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          {/* Status Button */}
          <div className="relative">
            <button
              className={`text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 ${
                jobStatus === "Active"
                  ? "text-green-600 bg-green-100"
                  : jobStatus === "Closed"
                  ? "text-red-600 bg-red-100"
                  : "text-yellow-600 bg-yellow-100"
              }`}
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              {jobStatus} <ChevronDown size={12} />
            </button>
            {openDropdown && (
              <div className="absolute left-0 mt-2 w-32 bg-white shadow-lg border border-gray-200 rounded-lg z-20">
                {["Active", "Inactive", "Closed"].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleStatusChange(option)}
                    className="w-full text-left px-3 py-2 text-xs hover:bg-gray-100"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Role */}
          <span className="text-xs text-gray-600 font-medium flex items-center gap-1">
            <Stethoscope color="purple" size={14} /> {role}
          </span>
        </div>

        {/* More Options Icon */}
        <button className="text-gray-500 hover:text-gray-700">
          <MoreVertical size={18} />
        </button>
      </div>

      {/* Active Until */}
      <p className="text-xs text-gray-500 flex items-center gap-1 mb-2">
        <Calendar size={14} /> Active Until - {deadline}
      </p>

      {/* Title */}
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>

      {/* Stats */}
      <div className="flex justify-between items-center bg-gray-50 rounded-lg p-5 mb-4">
        {/* Applied & Shortlisted - Side by Side */}
        <div className="flex gap-8">
          {/* Total Applied */}
          <div className="flex flex-col">
            <div className="text-2xl font-light text-gray-900 flex items-center">
              {applied}
              <span className="text-xs text-green-600 ml-1">+25%</span>
            </div>
            <p className="text-[13px] text-gray-500 font-medium">
              Total Applied
            </p>
          </div>

          {/* Shortlisted */}
          <div className="flex flex-col">
            <div className="text-2xl font-light text-gray-900">
              {shortlisted}
            </div>
            <p className="text-[13px] text-gray-500 font-medium">Shortlisted</p>
          </div>
        </div>

        {/* View All Applicants - Placed at the End */}
        <Link
          to={`/applicants/${encodeURIComponent(title)}`}
          className=" ml-7 text-blue-600 text-xs font-medium hover:underline "
        >
          View All Applicants →
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm text-gray-600 flex items-center gap-[2px]">
        <TrendingUp color="#1890FF" />
        <span>2 new messages, 3 new applicants</span>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  applied: PropTypes.number.isRequired,
  shortlisted: PropTypes.number.isRequired,
  deadline: PropTypes.string.isRequired,
};

// ✅ JobCards Component (Uses JobCard)
export default function JobCards() {
  const jobs = [
    {
      title: "Dental Surgeon",
      status: "Active",
      role: "Doctor",
      applied: 10,
      shortlisted: 10,
      deadline: "31 Dec 2024",
    },
    {
      title: "Nurse",
      status: "Closed",
      role: "Healthcare",
      applied: 5,
      shortlisted: 3,
      deadline: "15 Jan 2025",
    },
    {
      title: "Pediatrician",
      status: "Active",
      role: "Doctor",
      applied: 7,
      shortlisted: 4,
      deadline: "28 Feb 2025",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </section>
  );
}
