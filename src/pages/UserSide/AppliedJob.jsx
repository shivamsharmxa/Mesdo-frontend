import { BsFillBookmarkCheckFill, BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaRegBookmark } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AppliedJob = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Dermatologist Specialist",
      company: "Apollo Hospital",
      location: "Mumbai, Maharashtra",
      progress: 85,
      currentStage: 1,
      logo: "https://randomuser.me/api/portraits/men/1.jpg",
      saved: false,
      postedTime: "2 days ago",
      tags: ["Healthcare", "Dermatology"],
      status: "Recently active",
    },
    {
      id: 2,
      title: "Dermatologist Specialist",
      company: "Apollo Hospital",
      location: "Mumbai, Maharashtra",
      progress: 85,
      currentStage: 1,
      logo: "https://randomuser.me/api/portraits/men/2.jpg",
      saved: false,
      postedTime: "2 days ago",
      tags: ["Healthcare", "Dermatology"],
      status: "Recently active",
    },
  ];

  const stages = [
    "Application Received",
    "Application Under Review",
    "Interview Stage",
    "Final Stage",
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 pt-4 pb-2 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-start md:items-center gap-3">
            {/* Back Arrow */}
            <button
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Text block */}
            <div className="flex flex-col justify-center h-20">
              <span className="text-xs text-gray-500 mb-1">
                Total Jobs Applied
              </span>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  Applied Jobs
                </h2>
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                  {jobs.length} Total
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">Showing {jobs.length} results</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select className="text-sm bg-white border border-gray-200 rounded-md px-2 py-1 shadow-sm focus:outline-none cursor-pointer">
              <option>Recently Applied</option>
            </select>
          </div>
        </div>

        {/* Jobs List */}
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl px-6 py-5 mb-5 shadow-sm border border-gray-100 relative cursor-pointer"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-[90px] flex-shrink-0">
                  <div className="w-[70px] h-[70px] rounded-xl border border-gray-200 shadow-sm flex items-center justify-center bg-white">
                    <img
                      src={job.logo}
                      alt="Logo"
                      className="w-[60px] h-[60px] object-contain"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-purple-700 bg-purple-100 px-3 py-0.5 rounded-full shadow-inner">
                      {job.status}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {job.company} | {job.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-end justify-between gap-2">
                <button
                  className="hover:text-blue-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  {job.saved ? (
                    <BsFillBookmarkCheckFill className="text-blue-500" />
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
                <span className="text-xs text-gray-400">{job.postedTime}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-1/2">
              <div className="relative h-2 bg-gray-200 rounded-full mb-2 mt-7">
                <div
                  className="absolute h-2 bg-blue-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${(job.currentStage / (stages.length - 1)) * 100}%`,
                  }}
                ></div>
                <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2 px-1">
                  {stages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-4 h-4 rounded-full border-2 shadow-sm ${
                        idx <= job.currentStage
                          ? "bg-blue-500 border-blue-500"
                          : "bg-white border-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between text-[11px] mt-4 text-gray-500 font-medium">
                {stages.map((stage, index) => (
                  <span
                    key={index}
                    className={`w-1/4 text-center ${
                      index === job.currentStage
                        ? "text-black font-semibold"
                        : ""
                    }`}
                  >
                    {stage}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-5 right-5 flex flex-col items-center text-green-500">
                <div className="w-6 h-6 rounded-full border-2 border-green-500 mb-1" />
                <span className="text-sm font-semibold">{job.progress}%</span>
                <span className="text-xs text-gray-500">Match</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
