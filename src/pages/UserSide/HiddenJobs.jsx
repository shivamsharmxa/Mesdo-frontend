import { BsFillBookmarkCheckFill, BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "framer-motion";
import { ArrowLeft, BookLock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HiddenJobs = () => {
  const navigate = useNavigate();

  const hiddenJobs = [
    {
      id: 1,
      title: "Dermatologist Specialist",
      company: "Apollo Hospital",
      location: "Mumbai, Maharashtra",
      logo: "https://randomuser.me/api/portraits/men/1.jpg",
      saved: true,
      postedTime: "2 days ago",
      status: "Recently active",
      jobType: "Full-time",
      experience: { min: 2, max: 5 },
      salary: { min: 800000, max: 1200000, currency: "INR" },
      skills: ["Healthcare", "Dermatology", "Dentist"],
      matchPercentage: 88,
    },
    {
      id: 2,
      title: "Cardiologist",
      company: "Fortis Hospital",
      location: "Delhi, India",
      logo: "https://randomuser.me/api/portraits/men/2.jpg",
      saved: true,
      postedTime: "1 day ago",
      status: "Recently active",
      jobType: "Part-time",
      experience: { min: 5, max: 8 },
      salary: { min: 1000000, max: 1500000, currency: "INR" },
      skills: ["Healthcare", "Cardiology"],
      matchPercentage: 92,
    },
    {
      id: 3,
      title: "Dermatologist Specialist",
      company: "Apollo Hospital",
      location: "Mumbai, Maharashtra",
      logo: "https://randomuser.me/api/portraits/men/3.jpg",
      saved: true,
      postedTime: "2 days ago",
      status: "Recently active",
      jobType: "Full-time",
      experience: { min: 2, max: 5 },
      salary: { min: 800000, max: 1200000, currency: "INR" },
      skills: ["Healthcare", "Dermatology", "Dentist"],
      matchPercentage: 88,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 pt-4 pb-2 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-start md:items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex flex-col justify-center h-20">
              <h2 className="text-xl font-semibold text-gray-800">
                Back / Hidden Jobs
              </h2>
              <span className="text-xs text-gray-500">
                You have {hiddenJobs.length} hidden jobs
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Job List */}
      <div className="max-w-6xl mx-auto px-6 mt-6">
        {hiddenJobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl px-6 py-5 mb-5 shadow-sm border border-gray-100 relative cursor-pointer"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                {/* Logo */}
                <div className="w-[90px] flex-shrink-0">
                  <div className="w-[70px] h-[70px] rounded-xl border border-gray-200 shadow-sm flex items-center justify-center bg-white">
                    <img
                      src={job.logo}
                      alt="Logo"
                      className="w-[60px] h-[60px] object-contain"
                    />
                  </div>
                </div>

                {/* Job Info */}
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

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.skills.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-[#1890FF] text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="bg-gray-100 text-[#1890FF] text-xs font-medium px-2 py-1 rounded-full">
                      {job.jobType}
                    </span>
                    <span className="bg-gray-100 text-[#1890FF] text-xs font-medium px-2 py-1 rounded-full">
                      {job.experience.min}-{job.experience.max} Years
                    </span>
                    <span className="bg-gray-100 text-[#1890FF] text-xs font-medium px-2 py-1 rounded-full">
                      {job.salary.min} - {job.salary.max} {job.salary.currency}
                      /year
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-row items-end gap-2">
                <button
                  className="hover:text-blue-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    // toggle save logic
                  }}
                >
                  <BookLock className="text-blue-500" size={19} />
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
            <div className="absolute top-20 right-4 flex flex-col items-center text-green-600">
              <div className="w-6 h-6 rounded-full border-2 border-green-500 mb-1" />
              <span className="text-sm font-semibold">
                {job.matchPercentage}%
              </span>
              <span className="text-xs text-gray-500">Match</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HiddenJobs;
