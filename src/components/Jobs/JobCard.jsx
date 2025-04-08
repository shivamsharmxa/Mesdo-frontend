import { useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { BsCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import {
  LuClock,
  LuGraduationCap,
  LuBriefcase,
  LuCalendarDays,
} from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import JobDetails from "./JobDetails";

const getTagIcon = (tag) => {
  if (tag.includes("Year")) return <LuCalendarDays size={14} />;
  if (tag.includes("L") || tag.includes("/")) return <LuBriefcase size={14} />;
  if (tag.toLowerCase().includes("time")) return <LuClock size={14} />;
  return <LuGraduationCap size={14} />;
};

const JobCard = ({ job }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setSelectedJob(job)}
        className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-[#E4E5E8] relative cursor-pointer"
      >
        {/* Top-right actions */}
        <div className="absolute top-5 right-5 flex items-center gap-3 text-gray-400 text-sm">
          <span className="text-xs text-gray-500">{job.postedTime}</span>
          <button
            className="hover:text-blue-500"
            onClick={(e) => {
              e.stopPropagation();
              // Handle save functionality
            }}
          >
            {job.saved ? (
              <FiBookmark className="text-blue-500" />
            ) : (
              <FaRegBookmark />
            )}
          </button>
          <button
            className="hover:text-gray-600"
            onClick={(e) => e.stopPropagation()}
          >
            <BsThreeDotsVertical />
          </button>
        </div>

        {/* Card Content */}
        <div className="flex items-start">
          {/* Logo */}
          <img
            alt="Company Logo"
            className="w-20 h-20 object-contain rounded-lg border border-gray-200 p-1"
            src={job.logo}
          />

          {/* Content */}
          <div className="flex-1 ml-5 pr-24">
            {/* Status */}
            <span className="bg-purple-50 text-purple-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-1">
              {job.status}
            </span>

            {/* Title and Company */}
            <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
            <p className="text-sm text-gray-500 mb-3">
              {job.company} | {job.location}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {job.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-[#F1F6FF] text-blue-700 px-3 py-1 rounded-md text-xs font-medium"
                >
                  {getTagIcon(tag)}
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom-right Match Percentage */}
        <div className="absolute bottom-5 right-5 flex flex-col items-center text-green-500">
          <div className="w-6 h-6 rounded-full border-2 border-green-500 mb-1" />
          <span className="text-sm font-semibold">{job.matchPercentage}%</span>
          <span className="text-xs text-gray-500">Match</span>
        </div>
      </motion.div>

      {/* Right-Side Drawer for Job Details */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg p-6 overflow-auto z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              ✕
            </button>

            {/* JobDetails Component */}
            <JobDetails job={selectedJob} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JobCard;
